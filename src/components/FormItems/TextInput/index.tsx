import { Input } from "antd";
import { useController } from "react-hook-form";

import { Form } from "components/common/Form";

export type TextInputProps = {
  name: string;
  label?: string;
  hideFeedback?: boolean;
  hideLabel?: boolean;
  disabled?: boolean;
};

export function TextInput(props: TextInputProps) {
  const name = props.name;
  const label = props.label;
  const hideFeedback = props.hideFeedback;
  const hideLabel = props.hideLabel ?? false;
  const disabled = props.disabled ?? false;

  const { field, fieldState } = useController({ name });

  const message = fieldState.error?.message;

  return (
    <Form.Item
      label={label}
      name={name}
      message={message}
      hideLabel={hideLabel}
      hideFeedback={hideFeedback}
    >
      <Input id={name} {...field} disabled={disabled} />
    </Form.Item>
  );
}
