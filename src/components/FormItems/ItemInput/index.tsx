import { Form } from "components/common/Form";
import * as React from "react";
import { useController } from "react-hook-form";
import InputMask from "react-input-mask";
import ItemProps from "../ItemProps";
import { InputText } from "primereact/inputtext";

interface ItemInputProps extends ItemProps {
  type?: string;
  defaultValue?: string;
  message?: string;
  hideFeedback?: boolean;
  mask?: string; // Suporte para máscara
  validate?: (value: string) => boolean | string; // Validação customizada
}

const ItemInput: React.FC<ItemInputProps> = ({
  label,
  name,
  placeholder,
  disabled,
  type = "text",
  defaultValue,
  hideFeedback,
  message,
  mask,
  validate,
}) => {
  const { field, fieldState } = useController({
    name,
    rules: {
      validate: validate ? validate : undefined,
    },
  });

  const _message = fieldState.error?.message
    ? fieldState.error.message
    : undefined;

  return (
    <Form.Item
      label={label}
      name={name}
      message={_message}
      hideFeedback={hideFeedback}
    >
      {mask ? (
        <InputMask
          mask={mask}
          disabled={disabled}
          defaultValue={defaultValue}
          {...field}
        >
          {(inputProps) => (
            <InputText
              {...inputProps}
              type={type}
              placeholder={placeholder || "Digite aqui..."}
            />
          )}
        </InputMask>
      ) : (
        <InputText
          type={type}
          placeholder={placeholder || "Digite aqui..."}
          {...field}
          defaultValue={defaultValue}
          disabled={disabled}

        />
      )}
    </Form.Item>
  );
};

export default ItemInput;
