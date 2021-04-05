import { Course, User } from "@/datasource/Types";
import { ActionTree, createStore, GetterTree, MutationTree } from "vuex";
import * as vxt from "./VuexTypes";

export interface State {
  user?: User;
  courses: Course[];
}

const myState: State = {
  user: {
    name: "dean",
    address: "956",
    level: 1
  },
  courses: []
};

const myMutations: MutationTree<State> = {
  updateUser: (state, data: User) => (state.user = data),
  [vxt.UPDATE_USER]: (state, data: User) => (state.user = data),
  [vxt.LIST_COURSES]: (state, data: Course[]) => (state.courses = data)
};

const myActions: ActionTree<State, State> = {
  [vxt.UPDATE_USER]: ({ commit }, data: User) => {
    setTimeout(() => {
      return commit(vxt.UPDATE_USER, data);
    }, 2000);
  },
  [vxt.LIST_COURSES]: ({ commit }, data: Course[]) => {
    setTimeout(() => commit(vxt.LIST_COURSES, data), 100);
  }
};

const myGetters: GetterTree<State, State> = {
  premission: state => (level: number) => state.user?.level == level,
  [vxt.GETTER_PREMISSION]: state => (level: number) =>
    state.user?.level == level
};

export default createStore({
  state: myState,
  mutations: myMutations,
  actions: myActions,
  getters: myGetters,
  modules: {}
});
