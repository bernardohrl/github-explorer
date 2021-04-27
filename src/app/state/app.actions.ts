import { createAction, props, Action } from '@ngrx/store';
import { Repository } from '../models/repository.model';

export enum ActionTypes {
    getUsersRepositories = "Get User's Repositories"
}

export const getUsersRepositories = createAction(
    ActionTypes.getUsersRepositories,
    props<{ payload: Repository[] }>()
)