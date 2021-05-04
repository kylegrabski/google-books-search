// import React, { createContext, useReducer, useContext } from "react";
// import {
//   ADD_FAVORITE,
//   REMOVE_FAVORITE,
//   UPDATE_FAVORITES,
//   LOADING,
// } from "./actions";

// const StoreContext = createContext();
// const { Provider } = StoreContext;

// const reducer = (state, action) => {
//   switch (action.type) {
//     case ADD_FAVORITE:
//       return {
//         ...state,
//         favorites: [action.book, ...state.favorites],
//         loading: false,
//       };

//     case UPDATE_FAVORITES:
//       return {
//         ...state,
//         favorites: [...state.favorites],
//         loading: false,
//       };

//     // case REMOVE_FAVORITE:
//     //   return {
//     //     ...state,
//     //     favorites: state.favorites.filter((post) => {
//     //       return savedbooks._id !== action._id;
//     //     }),
//     //   };
//     case LOADING:
//       return {
//         ...state,
//         loading: true,
//       };

//     default:
//       return state;
//   }
// };

// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useReducer(reducer, {
//     favorites: [],
//     loading: false,
//   });

//   return <Provider value={[state, dispatch]} {...props} />;
// };

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

// export { StoreProvider, useStoreContext };
