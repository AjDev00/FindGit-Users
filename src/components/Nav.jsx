import styles from "./css/nav.module.css";

export default function Nav({ changeTheme }) {
  return (
    <div>
      <div className={styles.navBar}>
        <h4 className={styles.header}>FindGit-Users</h4>
        <h5 onClick={changeTheme} className={styles.light}>
          Change Theme
        </h5>
      </div>
    </div>
  );
}
