import React from "react";
import { createStore } from "redux";
const inital = { arr: [] };
const redus = (state = inital, action) => {
  switch (action.type) {
    case "Add":
      console.log(action.data)
      return {
      
        arr:(state.arr.includes(action.data)) ? state.arr : state.arr.push(action.data),
        ...state,
      };

    default:
      return state;
  }
};
const store=createStore(redus )
export default store;
