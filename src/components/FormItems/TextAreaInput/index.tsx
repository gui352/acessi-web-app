import { Input } from "antd";
import { useController } from "react-hook-form";

import { Form } from "components/common/Form";

export type TextAreaInputProps = {
  name: string;
  label: string;
  hideFeedback?: boolean;
  disabled?: boolean;
};

export function TextAreaInput(props: TextAreaInputProps) {
  const name = props.name;
  const label = props.label;
  const hideFeedback = props.hideFeedback;
  const disabled = props.disabled ?? false;

  const { TextArea } = Input;

  const { field, fieldState } = useController({ name });

  const message = fieldState.error?.message;

  return (
    <Form.Item
      label={label}
      name={name}
      message={message}
      hideFeedback={hideFeedback}
    >
      <TextArea id={name} {...field} disabled={disabled} />
    </Form.Item>
  );
}
