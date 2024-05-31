import client from "@/services/api/client.apollo";
import { GET_REPOSITORIES, GET_REPOSITORY_DETAILS } from "./repository.query";
import { Repository } from "@/types/repository";
import { formatDate } from "@/utils";

export async function fetchRepositoriesByName({ name }: Repository):
  Promise<{ repositories?: Repository[] | any; error?: Error | undefined | unknown; }> {
  try {
    const numberOfResults = 10;
    const searchTerm = `${name} in:name,description,readme`;
    const { data } = await client.query({
      query: GET_REPOSITORIES,
      variables: {
        first: numberOfResults,
        query: searchTerm,
      },
    });
    const repositories: Repository[] = data.search.nodes.map(
      ({ id, name, owner, description, stargazers, primaryLanguage, updatedAt }: any) => ({
        id,
        name,
        description,
        owner: owner?.login || "",
        avatarUrl: owner?.avatarUrl || "",
        stargazers: stargazers?.totalCount || "",
        primaryLanguage: primaryLanguage?.name || "",
        languageColor: primaryLanguage?.color || "",
        updateAt: formatDate(updatedAt),
      })
    );

    return { repositories };
  } catch (error) {
    return { error };
  }
}

export async function fetchRepositoryDetails({ owner, name }: Repository):
  Promise<{ repository?: Repository | any; error?: Error | undefined | unknown; }> {
  try {
    const { data } = await client.query({
      query: GET_REPOSITORY_DETAILS,
      variables: {
        owner,
        name,
      },
    });

    const repository: any = {
      url: data.repository.url,
      totalIssues: data.repository.issues.totalCount,
      totalPullRequests: data.repository.pullRequests.totalCount,
      totalCommits: data.repository.defaultBranchRef.target.history.totalCount,
    };

    return { repository };
  } catch (error) {
    return { error };
  }
}

