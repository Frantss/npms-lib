import { config } from '../config';
import { API_URL } from '../constants';
import { SearchResult } from '../search';

export interface SuggestionsParams {
  query: string;
  size?: string;
}

export interface SuggestionsResult extends SearchResult {
  highlight?: string;
}

export const suggestions = async (
  query: SuggestionsParams | string,
): Promise<SuggestionsResult[]> => {
  let queryString;

  if (typeof query === 'string') {
    queryString = `?q=${query}`;
  } else {
    queryString = `?q=${query.query}`;
    queryString += query.size ? `&size=${query.size}` : '';
  }

  const response = await config.fetch(
    `${API_URL}/search/suggestions${queryString}`,
  );
  return response.json();
};
