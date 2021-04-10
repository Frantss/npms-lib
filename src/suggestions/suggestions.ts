import { API_URL } from '../constants';
import { SearchResult } from '../search';
import { QueryError } from '../types';

export interface SuggestionsParams {
  query: string;
  size?: string;
}

export interface SuggestionsResult extends SearchResult {
  highlight?: string;
}

export const suggestions = async ({
  query,
  size,
}: SuggestionsParams): Promise<SuggestionsResult | QueryError> => {
  let queryParams = `?q=${query}`;
  queryParams += size ? `&size=${size}` : '';

  const response = await fetch(`${API_URL}/search/suggestions${queryParams}`);
  return response.json();
};
