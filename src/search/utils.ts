import { toArray } from '../utils';
import { isEmptyObject } from '../utils/isEmptyObject';
import { SearchOptions } from './search';

export const parseSearchOptions = (options?: SearchOptions): string => {
  if (!options || isEmptyObject(options)) return '';

  let result = '';

  if (options) result += ` scope:${options.scope}`;
  if (options.author) result += ` author:${options.author}`;
  if (options.maintainer) result += ` maintainer:${options.maintainer}`;
  if (options.boostExact) result += ` boost-exact:${options.boostExact}`;
  if (options.scoreEffect) result += ` score-effect:${options.scoreEffect}`;
  if (options.qualityWeight)
    result += ` quality-weight:${options.qualityWeight}`;
  if (options.popularityWeight)
    result += ` popularity-weight:${options.popularityWeight}`;
  if (options.maintenanceWeight)
    result += ` maintenance-weight:${options.maintenanceWeight}`;
  if (options.keywords || options.excludeKeywords)
    result += ` keywords:${parseKeywords(
      options.keywords,
      options.excludeKeywords,
    )}`;
  if (options.flags) result += parseFlags(options.flags);

  return result.trim().replace(/\s+/g, '');
};

export const parseKeywords = (
  keywords?: string | string[],
  excludeKeywords?: string | string[],
): string => {
  const normalizedKeywords = toArray(keywords);
  const normalizedExcludeKeywords = toArray(excludeKeywords).map(k => `-${k}`);

  return [...normalizedKeywords, ...normalizedExcludeKeywords].join(',');
};

export const parseFlags = (flags: SearchOptions['flags']): string => {
  const isFlags = [
    flags?.deprecated ? 'deprecated' : undefined,
    flags?.insecure ? 'insecure' : undefined,
    flags?.unstable ? 'unstable' : undefined,
  ]
    .filter(v => !!v)
    .join(',');

  const notFlags = [
    flags?.deprecated === false ? 'deprecated' : undefined,
    flags?.insecure === false ? 'insecure' : undefined,
    flags?.unstable === false ? 'unstable' : undefined,
  ]
    .filter(v => !!v)
    .join(',');

  return `${isFlags === '' ? '' : `is:${isFlags}`} ${
    notFlags === '' ? '' : `not:${notFlags}`
  }`;
};
