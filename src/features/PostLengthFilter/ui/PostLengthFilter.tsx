import type { ChangeEvent } from "react";
import { validateInput } from "../lib/validateInput";
import type { LengthFilter, LengthFilterType } from "../types";
import styles from "./PostLengthFilter.module.css";

export type PostLengthFilterProps = {
  length: LengthFilter;
  onChange: (length: LengthFilter) => void;
};

export function PostLengthFilter({ length, onChange }: PostLengthFilterProps) {
  const handleChange =
    (type: LengthFilterType) => (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const validation = validateInput({ value });

      if (validation.isValid) {
        onChange({ ...length, [type]: validation.validatedValue });
        return;
      }

      if (validation.error === "empty") {
        onChange({ ...length, [type]: undefined });
      }
    };

  const handleValue = (type: LengthFilterType) => length[type] ?? "";

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
