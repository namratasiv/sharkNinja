const initialState={
  data:''
};

function reducer (state=initialState, action){
  switch(action.type){
    case 'DEFAULT':
    return state;
  }
}

const rootReducer = combineReducers({
  reducer,
});

export default rootReducer;
