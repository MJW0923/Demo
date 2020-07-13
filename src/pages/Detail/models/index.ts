export default {
  namespace: 'DetailNsp',
  state: {
    data: '',
  },
  reducers: {
    changeState(state: any, datas: any) {
      return { ...state, ...datas };
    },
  },
  effects: {},
};
