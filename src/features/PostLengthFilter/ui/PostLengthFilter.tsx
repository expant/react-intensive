import { usePostLengthFilter } from "../model/hooks/usePostLengthFilter";
import type { PostLengthFilterProps } from "../model/types";
import styles from "./PostLengthFilter.module.css";

export function PostLengthFilter(props: PostLengthFilterProps) {
  const { handleChange, handleValue } = usePostLengthFilter(props);

  return (
    <div className={styles.filterContainer}>
      <span className={styles.filterTitle}>Фильтр по длине заголовка</span>
      <div className={styles.filterFields}>
        <input
          className={styles.filterField}
          type="text"
          placeholder="min"
          value={handleValue("min")}
          onChange={handleChange("min")}
        />
        <input
          className={styles.filterField}
          type="text"
          placeholder="max"
          value={handleValue("max")}
          onChange={handleChange("max")}
        />
      </div>
    </div>
  );
}
