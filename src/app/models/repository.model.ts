export interface Repository {
    id: number;
    name: string;
    url: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    owner: {
        login: string;
    }
}