import { Issue } from "../models/issue.model"
import { Repository } from "../models/repository.model"

export interface AppState {
    repositories: Repository[];
    repository: Repository;
    issues: Issue[];
}


export const repositoriesInitialState: Repository[] = [];

export const repositoryInitialState: Repository = { 
    id: 0,
    name: "",
    url: "",
    description: "",
    stargazers_count: 0,
    forks_count: 0,
    open_issues_count: 0,
    owner: {
        login: ""
    }};

export const issuesInitialState: Issue[] = [];