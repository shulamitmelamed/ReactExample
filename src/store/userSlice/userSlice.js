import { produce } from "immer";
const initialState = {
  currentUser: {
    PersonalDetails: {
      FName: null,
      LName: null,
      UserIDNumber: null,
      Email: null,
      PhoneNumber: null,
    },
    CreditDetails: {
      Number: null,
      IDCardholder: null,
      ValidityMonth: null,
      ValidityYear: null,
    },
    Products: [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
    sum: 0
  },
};
export const userReducer = produce((state, action) => {
  switch (action.type) {
    case "initUser":
      state.currentUser = action.payload;
      break;
    case "setArr":
      state.currentUser.Products = action.payload;
      break;
    case "setSum":
      state.currentUser.sum = action.payload;
      break;
    case "setPersonalDetails":
      state.currentUser.PersonalDetails = action.payload;
      break;
    case "setCreditDetails":
      state.currentUser.CreditDetails = action.payload;
      break;
    case "setUser":
      state.currentUser = action.payload;
      break;
    case "addProd":
      state.currentUser.Products.push(action.payload);
  }
}, initialState);
