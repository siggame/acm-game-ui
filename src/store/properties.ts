/* eslint-disable no-param-reassign */

import { MutationTree, ActionTree, ModuleTree } from 'vuex';
import { State, UserInfo } from './types';

// State is essentially a set of variables
export const state: State = {
  isLoading: false,
  userFound: false,
  userInfo: {},
  error: false,
  errorMessage: '',
};

// Mutations are methods used to manipulate state
export const mutations: MutationTree<State> = {
  updateLoading(theState: State, payload: boolean) {
    theState.isLoading = payload;
  },
  updateUser(theState: State, payload: UserInfo) {
    theState.userFound = true;
    theState.userInfo = payload;
  },
  clearUser(theState: State) {
    theState.userFound = false;
    theState.userInfo = {};
  },
  updateError(theState: State, payload: string) {
    theState.error = true;
    theState.errorMessage = payload;
  },
  clearError(theState: State) {
    theState.error = false;
    theState.errorMessage = '';
  },
};

// Actions are miscellaneous methods that can be async
export const actions: ActionTree<State, State> = {};

// Modules allow us to break up our store if it gets too bloated
export const modules: ModuleTree<State> = {};
