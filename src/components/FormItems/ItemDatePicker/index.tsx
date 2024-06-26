import { Calendar } from "primereact/calendar";
import { Form } from "components/common/Form";
import * as React from "react";
import { useController } from "react-hook-form";
import ItemProps from "../ItemProps";
import dayjs from "dayjs";
// import { useDateFormatter } from "hooks/useDateFormatter";

interface ItemDatePickerProps extends ItemProps {
  message?: string;
  hideFeedback?: boolean;
  defaultValue?;
}

const ItemDatePicker = ({
  label,
  name,
  disabled,
  placeholder,
  message,
  hideFeedback,
  defaultValue,
}: ItemDatePickerProps) => {
  // const dateFormatter = useDateFormatter();

  const { field, fieldState } = useController({ name });
  const dataValue = field.value ? dayjs(field.value) : undefined;

  const _message = fieldState.error?.message
    ? message || "error.select_date"
    : undefined;

  return (
    <Form.Item
      label={label}
      name={name}
      hideFeedback={hideFeedback}
      message={_message}
    >
      <Calendar
        style={{ width: "100%" }}
        {...field}
        id={name}
        placeholder={placeholder || "Digite aqui..."}
        disabled={disabled}
        // value={dataValue}
        // defaultValue={defaultValue}
        onChange={(date) => {
          if (date === null) {
            field.onChange(date);
          } else {
            // console.log(date.toDate().toISOString())
            field.onChange(date);
          }
        }}
      // format={"DD/MM/YYYY"}
      />
    </Form.Item>
  );
};
export default ItemDatePicker;
