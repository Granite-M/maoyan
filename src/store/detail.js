export default {
  namespaced: true,
  state: {
    detail: {},
    movieDetail: {},
  },
  actions: {
    getMovieDetail(context, id) {
      console.log("getMovieDetail", id);
      fetch("http://www.pudge.wang:3080/api/movies/detail", {
        method: "POST",
        body: JSON.stringify({ id: 1228788 }),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      })
        .then((response) => response.json())
        .then((res) => {
          context.commit("getMovieDetail", res.result);
        });
    },
  },
  mutations: {
    getMovieDetail(state, value) {
      state.detail = value;
      console.log(state.detail);
    },
  },
  getters: {},
};
