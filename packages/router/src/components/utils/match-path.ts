import pathToRegexp, { Key } from './path-to-regex';
import { MatchOptions, MatchResults } from '../interfaces';

interface CompileOptions {
  end: boolean;
  strict: boolean;
}

const patternCache: {[key: string]: any } = {};
const cacheLimit = 10000;
let cacheCount = 0;

// Memoized function for creating the path match regex
function compilePath(pattern: string | string[], options: CompileOptions): { re: RegExp, keys: Key[]} {
  const cacheKey = `${options.end}${options.strict}`;
  const cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});
  const cachePattern = JSON.stringify(pattern);

  if (cache[cachePattern]) {
    return cache[cachePattern];
  }

  const keys: Key[] = [];
  const re = pathToRegexp(pattern, keys, options);
  const compiledPattern = { re, keys };

  if (cacheCount < cacheLimit) {
    cache[cachePattern] = compiledPattern;
    cacheCount += 1;
  }

  return compiledPattern;
}

/**
 * Public API for matching a URL pathname to a path pattern.
 */
export function matchPath(pathname: string, options: MatchOptions = {}): null | MatchResults {
  if (typeof options === 'string') {
    options = { path: options };
  }

  const { path = '/', exact = false, strict = false } = options;
  const { re, keys } = compilePath(path, { end: exact, strict });
  const match = re.exec(pathname);

  if (!match) {
    return null;
  }

  const [ url, ...values ] = match;
  const isExact = pathname === url;

  if (exact && !isExact) {
    return null;
  }

  return <MatchResults>{
    path, // the path pattern used to match
    url: path === '/' && url === '' ? '/' : url, // the matched portion of the URL
    isExact, // whether or not we matched exactly
    params: keys.reduce((memo, key: Key, index) => {
      memo[key.name] = values[index];
      return memo;
    }, {} as {[key: string]: string})
  };
}
