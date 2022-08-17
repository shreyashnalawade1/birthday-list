import DisplayTodaysBd from "./components/DisplayTodaysBd";
import { Route, Switch, NavLink } from "react-router-dom";
import style from "./background.module.css";
import AddNew from "./components/AddNew";
function App() {
  return (
    <div>
      <Switch>
        <Route path={"/addNew"}>
          <AddNew></AddNew>
        </Route>
        <Route path="/todaysBirthday">
          <DisplayTodaysBd></DisplayTodaysBd>
        </Route>
        <Route path="/*" exact>
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
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
