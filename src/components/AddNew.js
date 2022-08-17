import style from "./form.module.css";
import { Route, Switch, NavLink } from "react-router-dom";
import TextInput from "./TextInput";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { birthdaydataAction } from "../store/birtdaydata";
const AddNew = (props) => {
  const dispach = useDispatch();
  const newPerson = {
    personName: "",
    birthDayDate: "",
    id: uuidv4(),
  };
  // localStorage.clear();
  const obj = useSelector((state) => {
    return state.birth;
  });

  const NewNameHandker = (input) => {
    newPerson.personName = input;
    // console.log(newPerson);
  };

  const NewDateHandler = (input) => {
    newPerson.birthDayDate = new Date(
      new Date(input).getFullYear(),
      new Date(input).getMonth() + 1,
      new Date(input).getDate()
    ).valueOf();
  };

  const SubmitHandler = function (e) {
    e.preventDefault();
    if (newPerson && birthdaydataAction) {
      dispach(birthdaydataAction.adder(newPerson));
    }
  };

  useEffect(() => {
    // console.log("ok");
    localStorage.setItem("intialState", JSON.stringify(obj));
  }, [obj]);

  return (
    <div className={style.centeral}>
      <nav className={style.container}>
        <h1 style={{ fontSize: `30px` }}>Birth Days</h1>

        <NavLink
          activeClassName={style.linkerActive}
          className={style.linker}
          to={"/addNew"}
        >
          Add New
        </NavLink>
        <NavLink
          className={style.linker}
          activeClassName={style.linkerActive}
          to={"/todaysBirthday"}
        >
          Todays Birthday
        </NavLink>
      </nav>
      <div className={style.center}>
        <form>
          <TextInput
            label={"Enter name "}
            HandlerFunction={NewNameHandker}
          ></TextInput>
          <TextInput
            label={""}
            type={"date"}
            HandlerFunction={NewDateHandler}
          ></TextInput>
          <button
            id="submitButton"
            onClick={SubmitHandler}
            className={style.submitButton}
          >
            Add new users
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddNew;
