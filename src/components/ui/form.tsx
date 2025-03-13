import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { FieldValues } from "react-hook-form";
import {
  type TextInputProps,
  type PasswordInputProps,
  type TextInputNoLabelProps,
} from "@/types/form";

const theme = {
  input: {
    default:
      "block rounded-lg p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 outline-none focus:ring-blue-500 focus:border-blue-500",
    success:
      "block rounded-lg p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-green-300 outline-none focus:ring-blue-500 focus:border-blue-500",
    failure:
      "block rounded-lg p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-red-300 outline-none focus:ring-blue-500 focus:border-blue-500",
  },
  label: {
    default: "block mb-2 text-md text-gray-600 peer-focus:text-blue-600",
    success: "block mb-2 text-md text-green-600 peer-focus:text-blue-600",
    failure: "block mb-2 text-md text-red-600 peer-focus:text-blue-600",
  },
  help: {
    default: "mt-2 text-sm text-gray-600",
    success: "mt-2 text-sm text-green-600",
    failure: "mt-2 text-sm text-red-600",
  },
};

export function TextInput<T extends FieldValues>({
  label,
  name,
  placeholder,
  type,
  error,
  register,
  formState,
}: TextInputProps<T>) {
  const { submitCount } = formState;

  let color: "default" | "success" | "failure" = "default";
  if (submitCount === 0) {
    color = "default";
  } else if (error !== undefined) {
    color = "failure";
  } else {
    color = "success";
  }
  const labelClass = theme.label[color];
  const inputClass = theme.input[color];
  const helpClass = theme.help[color];

  return (
    <>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        className={inputClass}
        {...register(name)}
      />
      {error && <p className={helpClass}>{error}</p>}
    </>
  );
}

export function PassworInput<T extends FieldValues>({
  label,
  name,
  placeholder,
  error,
  register,
  formState,
}: PasswordInputProps<T>) {
  const [visible, setVisible] = useState(false);
  const { submitCount } = formState;
  const handleToggle = () => setVisible((e) => !e);

  let color: "default" | "success" | "failure" = "default";
  if (submitCount === 0) {
    color = "default";
  } else if (error !== undefined) {
    color = "failure";
  } else {
    color = "success";
  }

  const inputClass = theme.input[color];
  const labelClass = theme.label[color];
  const helpClass = theme.help[color];

  return (
    <div className="relative">
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <input
        id={name}
        type={visible ? "text" : "password"}
        placeholder={placeholder}
        className={inputClass}
        {...register(name)}
      />
      <button
        type="button"
        className="absolute right-3 top-10"
        onClick={handleToggle}
      >
        {visible ? <HiEye size="1.5em" /> : <HiEyeOff size="1.5em" />}
      </button>
      {error && <p className={helpClass}>{error}</p>}
    </div>
  );
}

export function TextInputNoLabel<T extends FieldValues>({
  label,
  name,
  placeholder,
  type,
  error,
  register,
  formState,
}: TextInputNoLabelProps<T>) {
  const { submitCount } = formState;

  let color: "default" | "success" | "failure" = "default";
  if (submitCount === 0) {
    color = "default";
  } else if (error !== undefined) {
    color = "failure";
  } else {
    color = "success";
  }
  const labelClass = theme.label[color];
  const inputClass = theme.input[color];
  const helpClass = theme.help[color];

  return (
    <>
      {label && (
        <label htmlFor={name} className={labelClass}>
          {label}
        </label>
      )}
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        className={inputClass}
        {...register(name)}
      />
      {error && <p className={helpClass}>{error}</p>}
    </>
  );
}
