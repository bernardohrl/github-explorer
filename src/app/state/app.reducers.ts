import { createReducer, on } from '@ngrx/store';

import { getUsersRepositories } from './app.actions';
import { Repository } from '../models/repository.model';

const initialRepos: Repository[] = [];

export const reposReducer = createReducer<Repository[]>(
    initialRepos,
    on(getUsersRepositories, (state, action) => {
        return {...state, repositories: action.payload}
    }),

);