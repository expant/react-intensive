import type { ChangeEvent } from "react";
import { validateInput } from "../../lib/validateInput";
import type { LengthFilterType } from "../types";
import type { usePostLengthFilterProps } from "../types";

export function usePostLengthFilter(props: usePostLengthFilterProps) {
  const { length, onChange } = props;

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

  return { handleChange, handleValue };
}
