const initialState = {
  allContents: [],
  contents: [],
  area: [],
  detail: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return { ...state };
  }
}
