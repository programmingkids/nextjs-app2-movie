import { UseFormRegister, FieldValues, Path, FormState } from "react-hook-form";

export type TextInputProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  placeholder: string;
  type: "text" | "number" | "email" | "password";
  error?: string;
  register: UseFormRegister<T>;
  formState: FormState<T>;
};

export type PasswordInputProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  placeholder: string;
  error?: string;
  register: UseFormRegister<T>;
  formState: FormState<T>;
};

// labelのみをオプショナルにする
type Optional<T extends FieldValues, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;
export type TextInputNoLabelProps<T extends FieldValues> = Optional<
  TextInputProps<T>,
  "label"
>;
