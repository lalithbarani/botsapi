import menuActions from "./constant";

let initialState = {
    menu:{
        isShow:false
    }
}

let menuReducer = (state = initialState, { type, payload }) =>{
    switch (type) {
        case menuActions.SHOW_HIDE_MENU: {
          return {
            ...state,
            menu: {
                isShow : !state.menu.isShow
            },
          };
        }

        default:
            return state;
    }
}

export default menuReducer;