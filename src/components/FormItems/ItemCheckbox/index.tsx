import { Checkbox } from "antd";
import { Form } from "components/common/Form";
import * as React from "react";
import { useController } from "react-hook-form";

interface ItemCheckboxProps {
  name: string;
  contentCheckbox: string;
  label?;
  rules?;
  disabled?: boolean;
  hideLabel?: boolean;
  hideFeedback?: boolean;
  message?: string;
}

const ItemCheckbox: React.FC<ItemCheckboxProps> = ({
  name,
  contentCheckbox,
  disabled,
  label,
  hideLabel,
  hideFeedback,
  message,
}) => {
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
      <Checkbox
        style={{ marginTop: 35 }}
        // {...field}
        onChange={field.onChange}
        defaultChecked={false}
        disabled={disabled}
        checked={!!field.value}
      >
        {contentCheckbox}
      </Checkbox>
    </Form.Item>
  );
};
export default ItemCheckbox;
