type LengthFilter = {
  min: number;
  max: number;
};

export type PostLengthFilterProps = {
  length: LengthFilter;
  onChange: (length: LengthFilter) => void;
};
