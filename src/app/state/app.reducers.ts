import { createReducer, on } from '@ngrx/store';

import { getUsersRepositories } from './app.actions';
import { Repository } from '../models/repository.model';

const initilState: Repository[] = [];

export const reposReducer = createReducer<Repository[]>(
    initilState,
    on(getUsersRepositories, (state, action) => {
        return [...action.payload]
    }),
);