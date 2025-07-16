import { NavLink, useParams } from "react-router-dom";
import { userTabItems } from "../model/constants";
import styles from "./UserTabs.module.css";

type ClassNameProps = {
  isActive: boolean;
};

export function UserTabs() {
  const { id } = useParams<{ id: string }>();

  const handleClassName = ({ isActive }: ClassNameProps) =>
    `${styles.tab} ${isActive ? styles.active : ""}`;

  return (
    <nav className={styles.userTabs}>
      {userTabItems.map((item) => (
        <NavLink
          key={item.id}
          to={`/users/${id}/${item.path}`}
          className={handleClassName}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
