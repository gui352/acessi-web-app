import { Dropdown } from "primereact/dropdown";
import { Form } from "components/common/Form";
import * as React from "react";
import { useController } from "react-hook-form";
import ItemProps from "../ItemProps";

interface ItemSelectProps extends ItemProps {
  rules?;
  options;
  defaultValue?;
  multi?: boolean;
  hideFeedback?: boolean;
  message?: string;
  hideLabel?: boolean;
  required?: boolean
}

const ItemSelect = ({
  label,
  name,
  placeholder,
  disabled,
  options,
  defaultValue,
  hideFeedback,
  message,
  hideLabel,
  multi = false,
  required
}: ItemSelectProps) => {
  const { field, fieldState } = useController({ name });

  const _message = fieldState.error?.message
    ? message || "error.select_value"
    : undefined;

  return (
    <Form.Item
      label={
        <>
          {required && <span style={{ color: "red", marginLeft: "4px" }}>*</span>}
          {label}
        </>
      }
      name={name}
      message={_message}
      hideFeedback={hideFeedback}
      hideLabel={hideLabel}
    >
      <Dropdown
        // mode={multi ? "multiple" : undefined}
        // maxTagCount={1}
        placeholder={placeholder || "Digite aqui..."}
        {...field}
        // showSearch
        // optionFilterProp="label"
        options={options}
        defaultValue={defaultValue}
        disabled={disabled}
        // allowClear
        style={{ width: 250 }}
      />
    </Form.Item>
  );
};

export default ItemSelect;
