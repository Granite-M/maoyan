export default {
  namespaced: true,
  state: { more_idList: [], bannerMoviesList: [], hotList: [] },
  actions: {
    getBannerMoviesList(context) {
      fetch("http://www.pudge.wang:3080/api/rated/list")
        .then((response) => response.json())
        .then((res) => {
          this.list = res.result;
          context.commit("getBannerMoviesList", res.result);
        });
    },
    getHotList(context) {
      fetch("http://www.pudge.wang:3080/api/movies/list")
        .then((response) => response.json())
        .then(async (res) => {
          context.commit("getHotList", {
            hotList: res.result,
            more_idList: [...new Set(res.ids)],
          });
        });
    },
    getMore_idList(context, ids) {
      //发送请求
      console.log(ids);
      fetch("http://www.pudge.wang:3080/api/movies/more", {
        method: "POST",
        body: JSON.stringify({ ids }),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      })
        .then((response) => response.json())
        .then((res) => {
          context.commit("getMore_idList", res.result);
        });
    },
  },
  mutations: {
    getBannerMoviesList(state, value) {
      state.bannerMoviesList = value;
    },
    getHotList(state, value) {
      state.hotList = value.hotList;
      state.more_idList = value.more_idList;
    },
    getMore_idList(state, value) {
      state.hotList = state.hotList.concat(value);
    },
  },
  getters: {},
};
