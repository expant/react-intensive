import type { ComponentType } from "react";
import { CircularProgress } from "@mui/material";
import styles from "./withLoading.module.css";

export function withLoading<P extends object>(Component: ComponentType<P>) {
  return ({ loading, ...props }: { loading: boolean } & P) =>
    loading ? (
      <div className={styles.loadingContainer}>
        <CircularProgress />
      </div>
    ) : (
      <Component {...(props as P)} />
    );
}
