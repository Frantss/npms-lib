import { config } from '../config';
import { API_URL } from '../constants';
import { QueryError, Score } from '../types';
import {
  ErrorInfo,
  EvaluationInfo,
  GithubInfo,
  NpmInfo,
  PackageInfo,
  SourceInfo,
} from './types';

export interface InfoResult {
  analyzedAt: string;
  collected: {
    metadata: PackageInfo;
    npm: NpmInfo;
    github?: GithubInfo;
    source?: SourceInfo;
  };
  evaluation: EvaluationInfo;
  score: Score;
  error?: ErrorInfo;
}

export async function info(name: string): Promise<InfoResult | QueryError>;
export async function info(names: string[]): Promise<InfoResult[] | QueryError>;

export async function info(
  names: string | string[],
): Promise<InfoResult | InfoResult[] | QueryError> {
  if (Array.isArray(names)) {
    const response = await config.fetch(`${API_URL}/package/mget`, {
      body: JSON.stringify(names),
    });
    return response.json() as Promise<InfoResult[]>;
  }

  const response = await config.fetch(`${API_URL}/package/${names}`);
  return response.json() as Promise<InfoResult>;
}
