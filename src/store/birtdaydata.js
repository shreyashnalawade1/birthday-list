import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// if()

// console.log();
let intialState;
if (JSON.parse(localStorage.getItem("intialState"))) {
  intialState = JSON.parse(localStorage.getItem("intialState"));
} else {
  intialState = {
    people: [
      {
        personName: "shreyash Nalawade",
        birthDayDate: new Date(2002, 2, 11, 0).valueOf(),
        id: uuidv4(),
        // src: "./asset/user-1.jpg",
      },
      {
        personName: "Shrijay Nalawade",
        birthDayDate: new Date(2007, 1, 2, 0).valueOf(),
        id: uuidv4(),
        // src: "../asset/user-2.jpg",
      },
      {
        personName: "arun sanders",
        birthDayDate: new Date(1965, 8, 8, 0).valueOf(),
        id: uuidv4(),
        // src: "../../asset/user-3.jpg",
      },
      {
        personName: "tonny hawk",
        birthDayDate: new Date(1976, 10, 13, 0).valueOf(),
        id: uuidv4(),
        // src: "../../asset/user-4.jpg",
      },
      {
        personName: "robert downy",
        birthDayDate: new Date(2002, 10, 31, 0).valueOf(),
        id: uuidv4(),
        // src: "../../asset/user-4.jpg",
      },
      {
        personName: "steve jobs",
        birthDayDate: new Date(1982, 1, 10, 0).valueOf(),
        id: uuidv4(),
        // src: "../../asset/user-4.jpg",
      },
    ],
  };
}

//
const birthdaydata = createSlice({
  name: "birthdayDataFinal",
  initialState: intialState,

  reducers: {
    addnNewExpense: (state, action) => {
      state.people.push({ ...action.payload });
    },
  },
});
export const birthdaydataAction = birthdaydata.actions;
export default birthdaydata;
