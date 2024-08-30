import { ComponentPropsWithoutRef } from 'react';
import {
  FieldErrors,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';

type StudyInputProps<T extends FieldValues> = {
  id: string;
  name: Path<T>;
  type?: 'text' | 'number';
  placeholder?: string;
  label?: string;
  register: UseFormRegister<T>;
  rules?: RegisterOptions<T, Path<T>>;
  errors: FieldErrors<T>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value?: string | number;
  maxLength?: number;
  inputStyle?: string;
  readOnly?: boolean;
};

export default function StudyInput<T extends FieldValues>({
  id,
  name,
  type = 'text',
  placeholder,
  label,
  register,
  rules,
  errors,
  onChange,
  onKeyDown,
  value,
  maxLength,
  inputStyle,
  readOnly,
}: StudyInputProps<T>) {
  const hasError = !!errors[name];

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="font-semibold leading-6 text-[#000417]" htmlFor={id}>
          {label}
        </label>
      )}
      <div
        className={`flex items-center justify-between rounded-lg border ${inputStyle} ${hasError ? 'border-red-400' : ''}}`}
      >
        <input
          className="w-full flex-initial rounded-lg border bg-white px-4 py-[14px] outline-none transition-all focus:border-main-purple"
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(name, rules)}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={value}
          maxLength={maxLength}
          readOnly={readOnly}
        />
      </div>
    </div>
  );
}