import { DatePicker } from "antd";
import { useController } from "react-hook-form";

import { Form } from "components/common/Form";
import { useDateFormatter } from "hooks/useDateFormatter";
import dayjs from "dayjs";

export type DatePickerInputProps = {
  name: string;
  label: string;
  hideFeedback?: boolean;
  hideLabel?: boolean;
  disabled?: boolean;
};

export function DatePickerInput(props: DatePickerInputProps) {
  const dateFormatter = useDateFormatter();

  const name = props.name;
  const label = props.label;
  const hideFeedback = props.hideFeedback;
  const hideLabel = props.hideLabel ?? false;

  const disabled = props.disabled ?? false;

  const { field, fieldState } = useController({ name });

  const message = fieldState.error?.message;

  const dataValue = dayjs(field.value);

  return (
    <Form.Item
      label={label}
      name={name}
      message={message}
      hideFeedback={hideFeedback}
      hideLabel={hideLabel}
    >
      <DatePicker
        id={name}
        {...field}
        value={dataValue}
        disabled={disabled}
        onChange={(date) => {
          if (date === null) {
            field.onChange(date);
          } else {
            field.onChange(date.toDate().toISOString());
          }
        }}
        format={dateFormatter}
      />
    </Form.Item>
  );
}
