import type { ComponentType } from "react";
import { CircularProgress } from "@mui/material";
import styles from "./withLoading.module.css";

type withLoadingProps = {
  loading: boolean;
  props: any;
};

export function withLoading(Component: ComponentType) {
  return ({ loading, props }: withLoadingProps) =>
    loading ? (
      <div className={styles.loadingContainer}>
        <CircularProgress />
      </div>
    ) : (
      <Component {...props} />
    );
}
