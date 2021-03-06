import ApiService from "@/common/services/api";
import { RecipesService } from "@/common/services/api";
import { FileService } from "@/common/services/api";

import {
  DELETE_RECIPE,
  FETCH_RECIPE,
  POST_RECIPE,
  POST_IMAGE,
  SET_FILENAME,
} from "@/common/types/actions";

import { SET_ERROR, SET_RECIPE } from "@/common/types/mutations";

const initialState = {
  recipe: {
    name: "",
    description: "",
    filename: "",
  },
};

const state = {
  ...initialState,
};

const getters = {
  recipe(state) {
    return state.recipe;
  },
};

const actions = {
  async [POST_RECIPE]({ commit }, recipe) {
    return new Promise((resolve, reject) => {
      ApiService.post("recipes/", { recipe })
        .then(({ data }) => {
          commit(SET_RECIPE, data.recipe);
          resolve(data);
        })
        .catch(({ response }) => {
          reject(response);
        });
    });
  },
  async [POST_IMAGE]({ commit }, image) {
    return new Promise((resolve, reject) => {
      FileService.post(image)
        .then(({ data }) => {
          commit(SET_FILENAME, data.filename);
          resolve(data);
        })
        .catch(({ response }) => {
          reject(response);
        });
    });
  },
  async [FETCH_RECIPE]({ commit }, slug) {
    return new Promise((resolve, reject) => {
      RecipesService.get(slug)
        .then(({ data }) => {
          commit(SET_RECIPE, data.recipe);
          resolve(data);
        })
        .catch(({ response }) => {
          reject(response);
        });
    });
  },
  [DELETE_RECIPE](context, slug) {
    return RecipesService.destroy(slug);
  },
};

const mutations = {
  [SET_RECIPE](state, recipe) {
    state.recipe = recipe;
  },
  [SET_FILENAME](state, filename) {
    state.filename = filename;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
