import { NavLink, Outlet } from "react-router-dom";
import { UserTabs } from "@/widgets/UserTabs/ui/UserTabs";
import styles from "./UserPage.module.css";

export function UserPage() {
  return (
    <div>
      <div className={styles.userPageHeader}>
        <UserTabs />
        <NavLink className={styles.backToPostsBtn} to={`/posts`}>
          Назад к постам
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
