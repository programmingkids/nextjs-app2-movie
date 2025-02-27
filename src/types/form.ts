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
