export interface Repository {
  id?: string;
  name?: string;
  owner?: string;
  description?: string;
  avatarUrl?: string;
  stargazers?: number;
  primaryLanguage?: string;
  languageColor?: string;
  updateAt?: string;
  url?: string;
  totalIssues?: number;
  totalPullRequests?: number;
  totalCommits?: number;
}

export type RepositoryList = Repository[]

