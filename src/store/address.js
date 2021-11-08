export default {
  namespaced: true,
  state: {
    addressList: [],
  },
  actions: {
    getAddressList(context) {
      fetch("http://www.pudge.wang:3080/api/area/list")
        .then((Response) => {
          return Response.json();
        })
        .then((res) => {
          context.commit("setAddressList", res.result);
        });
    },
  },
  getAddress(context) {
    context.commit("setAddress", localStorage.getItem("address"));
  },
  mutations: {
    setAddressList(state, value) {
      state.addressList = value;
    },
    setAddress(state, value) {
      state.address = value || "杭州";
    },
  },
  getters: {},
};
