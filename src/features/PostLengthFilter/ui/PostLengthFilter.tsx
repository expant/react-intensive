import type { ChangeEvent } from "react";
import type { PostLengthFilterProps } from "./types";
import styles from "./PostLengthFilter.module.css";

export function PostLengthFilter({ length, onChange }: PostLengthFilterProps) {
  const handleChange =
    (type: "min" | "max") => (e: ChangeEvent<HTMLInputElement>) => {
      const number = Number(e.target.value);

      if (!number) {
        return;
      }

      onChange({ ...length, [type]: number });
    };

  return (
    <div className={styles.filterContainer}>
      <span className={styles.filterTitle}>Фильтр по длине заголовка</span>
      <div className={styles.filterFields}>
        <input
          className={styles.filterField}
          type="text"
          onChange={handleChange("min")}
          placeholder="min"
        />
        <input
          className={styles.filterField}
          type="text"
          onChange={handleChange("max")}
          placeholder="max"
        />
      </div>
    </div>
  );
}
