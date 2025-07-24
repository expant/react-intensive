import type { ReactNode } from "react";

export type ModalProps = {
  isOpen: boolean;
  children?: ReactNode;
  onClose: () => void;
};

export type ModalSubcomponentProps = {
  children: ReactNode;
};
