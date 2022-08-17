import styles from "./DisplayElement.module.css";

const DisplayElement = function (props) {
  // console.log(obj);
  const yo =
    new Date().getFullYear() -
    new Date(props.person.birthDayDate).getFullYear();
  // console.log(yo);
  // localStorage.clear();
  return (
    <div>
      <h2 className={styles.textCenter}>{props.person.personName}</h2>
      <h2 className={styles.textCenter}>{yo} years </h2>
    </div>
  );
};
export default DisplayElement;
