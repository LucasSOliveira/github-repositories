import Star from "@/assets/icons/star.svg";

const RepositoryInfo = ({ repository }: any) => {
  return (
    <>
      <div className="h-full w-full md:min-w-[600px] flex flex-col gap-8">
        <div className="flex items-center gap-2">
          <img
            className="w-8 h-8 rounded-full"
            src={repository.avatarUrl}
            alt="avatar"
          />
          <h3 className="text-terteary font-medium text-xl">{`${repository.owner}/${repository.name}`}</h3>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground">Descrição:</span>
            <p className="text-primary-foreground ml-2">
              {repository.description}
            </p>
          </div>
          <div className="flex flex-col gap-2 break-words">
            <span className="text-xs text-muted-foreground">URL:</span>
            <a
              href={repository.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground ml-2 cursor-pointer underline hover:text-terteary"
            >
              {repository.url}
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground">
              Total de Issues:
            </span>
            <p className="text-primary-foreground ml-2">
              {repository.totalIssues}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground">
              Total de Pull Requests:
            </span>
            <p className="text-primary-foreground ml-2">
              {repository.totalPullRequests}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground">
              Total de Commits:
            </span>
            <p className="text-primary-foreground ml-2">
              {repository.totalCommits}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground">Informações:</span>
            <div className="flex flex-wrap gap-8 ml-2 text-primary-foreground">
              <div className="flex items-center gap-1">
                <span
                  style={{
                    backgroundColor: repository.languageColor || "#f1e05a",
                  }}
                  className="w-2.5 h-2.5 rounded-full"
                />
                <span>{repository.primaryLanguage}</span>
              </div>
              <div className="flex items-center gap-1">
                <img src={Star} alt="star" />
                <span>{repository.stargazers}</span>
              </div>
              <span>Atualizado {repository.updateAt}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { RepositoryInfo };
