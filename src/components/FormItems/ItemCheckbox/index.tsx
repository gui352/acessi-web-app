import { Checkbox } from "primereact/checkbox";
import { Form } from "components/common/Form";
import * as React from "react";
import { useController } from "react-hook-form";
import ItemProps from "../ItemProps";

interface ItemCheckboxProps extends ItemProps {
  message?: string;
  hideFeedback?: boolean;
  required?: boolean;
}

const ItemCheckbox = ({
  label,
  name,
  disabled,
  message,
  hideFeedback,
  required
}: ItemCheckboxProps) => {
  const { field, fieldState } = useController({ name });

  const _message = fieldState.error?.message
    ? message || "error.select_option"
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
      hideFeedback={hideFeedback}
      message={_message}
    >
      <div className="field-checkbox">
        <Checkbox
          {...field}
          id={name}
          disabled={disabled}
          checked={field.value || false}
          onChange={(e) => field.onChange(e.checked)}
        />
      </div>
    </Form.Item>
  );
};

export default ItemCheckbox;
