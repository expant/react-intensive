import type { ComponentType } from "react";
import { CircularProgress } from "@mui/material";
import styles from "./withLoading.module.css";

// type withLoadingProps = {
//   loading: boolean;
//   props: any;
// };

// export function withLoading(Component: ComponentType) {
//   return ({ loading, props }: withLoadingProps) =>
//     loading ? (
//       <div className={styles.loadingContainer}>
//         <CircularProgress />
//       </div>
//     ) : (
//       <Component {...props} />
//     );
// }

export function withLoading<P extends object>(Component: ComponentType<P>) {
  return ({ loading, ...props }: { loading: boolean } & P) => {
    return loading ? (
      <div className={styles.loadingContainer}>
        <CircularProgress />
      </div>
    ) : (
      <Component {...(props as P)} />
    );
  };
}
