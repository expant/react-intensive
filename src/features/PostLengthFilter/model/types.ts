export type LengthFilterType = "min" | "max";

export type LengthFilter = {
  min?: number;
  max?: number;
};

export type PostLengthFilterProps = {
  length: LengthFilter;
  onChange: (length: LengthFilter) => void;
};

export type usePostLengthFilterProps = PostLengthFilterProps;

export type ValidateInputParams = { value: string };
