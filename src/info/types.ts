import { Package } from '../types';

export interface PackageInfo extends Package {
  readme?: string;
  hasSelectiveFiles?: string;
  hasTestScript?: boolean;
  releases: {
    from: string;
    to: string;
    count: number;
  }[];
  license?: string;
  repository?: {
    type?: string;
    url?: string;
  };
  devDependencies?: Record<string, string>;
  dependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
}

export interface NpmInfo {
  downloads: {
    from: string;
    to: string;
    count: number;
  }[];
  dependentsCount: number;
  starCount: number;
}

export interface GithubInfo {
  homepage?: string;
  starCount: number;
  forksCount: number;
  subscribersCount: number;
  issues: {
    count: number;
    openCount: number;
    distribution: Record<string, number>;
    isDisabled: boolean;
  };
  contributors: {
    username: string;
    commitCount: number;
  }[];
  commits: {
    from: string;
    to: string;
    count: number;
  }[];
  statuses?: {
    context: string;
    state: string;
  }[];
}

export interface SourceInfo {
  files: {
    readmeSize: number;
    testsSize: number;
    hasNpmIgnore?: boolean;
    hasChangelog?: boolean;
  };
  linters?: string[];
  coverage?: number;
  outdatedDependencies?: Record<
    string,
    {
      required: string;
      stable: string;
      latest: string;
    }
  >;
  badges?: {
    urls: Record<string, string>;
    info: Record<string, string>;
  }[];
}

export interface EvaluationInfo {
  quality: {
    carefulness: number;
    tests: number;
    health: number;
    branding: number;
  };
  popularity: {
    communityInterest: number;
    downloadsCount: number;
    downloadsAcceleration: number;
    dependentsCount: number;
  };
  maintenance: {
    releasesFrequency: number;
    commitsFrequency: number;
    openIssues: number;
    issuesDistribution: number;
  };
}

export interface ErrorInfo {
  unrecoverable?: boolean;
  name?: string;
  message?: string;
  stack?: string;
  caughtAt?: string;
}
