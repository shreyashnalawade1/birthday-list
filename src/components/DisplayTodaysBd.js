import style from "./Box.module.css";
import { useSelector } from "react-redux";
import DisplayElement from "./DisplayElement";
import { Route, Switch, NavLink } from "react-router-dom";

const DisplayTodaysBd = function (props) {
  const obj = useSelector((state) => {
    return state.birth.people;
  });
  const filterObj = obj.filter((element) => {
    return (
      new Date(element.birthDayDate).getDate() === new Date().getDate() &&
      new Date(element.birthDayDate).getMonth() === new Date().getMonth() + 1
    );
  });

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
        {obj
          .filter((element) => {
            return (
              new Date(element.birthDayDate).getDate() ===
                new Date().getDate() &&
              new Date(element.birthDayDate).getMonth() ===
                new Date().getMonth() + 1
            );
          })
          .map((element) => {
            return (
              <DisplayElement
                key={element.id}
                person={element}
              ></DisplayElement>
            );
          })}
      </div>
    </div>
  );
};
export default DisplayTodaysBd;
