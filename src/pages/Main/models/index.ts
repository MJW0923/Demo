export default {
  namespace: 'MainNsp',
  state: {
    data: '123456789',
  },
  reducers: {
    changeState(state: any, datas: any) {
      return { ...state, ...datas };
    },
  },
  effects: {},
};
