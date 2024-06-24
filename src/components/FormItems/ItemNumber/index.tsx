import { InputNumber } from "primereact/inputnumber";
import { Form } from "components/common/Form";
import * as React from "react";
import { useController } from "react-hook-form";
import ItemProps from "../ItemProps";

interface ItemInputProps extends ItemProps {
  min?: number;
  max?: number;
  type?;
  defaultValue?;
  hideLabel?: boolean;
  hideFeedback?: boolean;
  message?: string;
  addonAfter?;
  addonBefore?;
}

const ItemNumber = ({
  label,
  name,
  placeholder,
  disabled,
  min,
  addonAfter,
  addonBefore,
  max,
  defaultValue,
  hideLabel,
  message,
  hideFeedback,
}: ItemInputProps) => {
  const { field, fieldState } = useController({ name });

  const _message = fieldState.error?.message
    ? message || "error.select_value"
    : undefined;

  return (
    <Form.Item
      label={label}
      name={name}
      hideLabel={hideLabel}
      message={_message}
      hideFeedback={hideFeedback}
    >
      <InputNumber
        placeholder={placeholder}
        {...field}
        defaultValue={defaultValue}
        disabled={disabled}
        min={min}
        max={max}
        style={{ width: "100%" }}
        // addonAfter={addonAfter}
        // addonBefore={addonBefore}
      />
    </Form.Item>
  );
};
export default ItemNumber;
