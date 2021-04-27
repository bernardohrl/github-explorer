import { createAction, props, Action } from '@ngrx/store';
import { Issue } from '../models/issue.model';
import { Repository } from '../models/repository.model';

export enum ActionTypes {
    getUsersRepositories = "[Repositories] Get User's Repositories",
    getRepository = "[Repository] Get Repository",
    getIssues = "[Repository] Get Issues"
}

export const getUsersRepositories = createAction(
    ActionTypes.getUsersRepositories,
    props<{ repositories: Repository[] }>()
)

export const getRepository = createAction(
    ActionTypes.getRepository,
    props<{ repository: Repository }>()
)

export const getIssues = createAction(
    ActionTypes.getIssues,
    props<{ issues: Issue[] }>()
)