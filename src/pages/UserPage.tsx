import { Outlet } from "react-router-dom";
import { UserTabs } from "@/widgets/UserTabs/ui/UserTabs";

export function UserPage() {
  return (
    <div>
      <UserTabs />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
