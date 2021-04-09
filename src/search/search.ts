import { API_URL } from '../constants';
import { Flags, Package, QueryError, Score } from '../types';
import { parseSearchOptions } from './utils';
import fetch from 'node-fetch';

export interface SearchParams {
  query: string;
  from?: number;
  size?: number;
}

export interface SearchOptions {
  /** Show/filter results that belong to scope. e.g. @types */
  scope?: string;
  /** Show/filter results based on the author */
  author?: string;
  /** Show/filter results based on the maintainer */
  maintainer?: string;
  /** Show/filter results that have this keywords */
  keywords?: string | string[];
  /** Show/filter results that DON'T have this keywords */
  excludeKeywords?: string | string[];
  /** Includes or excludes packages with each flag. Leave undefined to keep both */
  flags?: {
    /** Package is deprecated */
    deprecated?: boolean;
    /** If version is < 1.0.0 */
    unstable?: boolean;
    /** If package is insecure or have vulnerable dependencies */
    insecure?: boolean;
  };
  /**
   * Whether to boost score of an exact match
   * @defaultValue true
   */
  boostExact?: boolean;
  /**
   * Set the effect that package scores have for the final search score
   * @defaultValue 15.3
   */
  scoreEffect?: number;
  /**
   * Set the weight that quality has for the each package score
   * @defaultValue 1.95
   */
  qualityWeight?: number;
  /**
   * Set the weight that popularity has for the each package score
   * @defaultValue 3.3
   */
  popularityWeight?: number;
  /**
   * Set the weight that maintenance has for the each package score
   * @defaultValue 2.05
   */
  maintenanceWeight?: number;
}

export interface SearchResult {
  total: number;
  results: PackageSearchInfo[];
}

export interface PackageSearchInfo {
  package: Package;
  flags?: Flags;
  score: Score;
  searchScore: number;
}

export const search = async (
  { query, from, size }: SearchParams,
  options?: SearchOptions,
): Promise<SearchResult | QueryError> => {
  let queryParams = `?q=${query}`;
  queryParams += parseSearchOptions(options);
  queryParams += from ? `&from=${from}` : '';
  queryParams += size ? `&size=${size}` : '';

  const response = await fetch(`${API_URL}/search${queryParams}`);
  return response.json();
};
