import { createReducer, on } from '@ngrx/store';

import { getIssues, getRepository, getUsersRepositories } from './app.actions';
import { Repository } from '../models/repository.model';
import { Issue } from '../models/issue.model';
import { issuesInitialState, repositoriesInitialState, repositoryInitialState } from './app.state';


export const reposReducer = createReducer<Repository[]>(
    repositoriesInitialState,
    on(getUsersRepositories, (state, {repositories}) => {
        return [...repositories]
    }),
);


export const repositoryReducer = createReducer<Repository>(
    repositoryInitialState,
    on(getRepository, (state, {repository}) => {
        return {...repository }
    }),
);


export const issuesReducer = createReducer<Issue[]>(
    issuesInitialState,
    on(getIssues, (state, {issues}) => {
        return [...issues ]
    }),
);