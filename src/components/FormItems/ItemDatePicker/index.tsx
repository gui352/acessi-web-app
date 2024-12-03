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
  required?: boolean
}

const ItemDatePicker = ({
  label,
  name,
  disabled,
  placeholder,
  message,
  hideFeedback,
  defaultValue,
  required
}: ItemDatePickerProps) => {

  const { field, fieldState } = useController({ name });
  const dataValue = field.value ? dayjs(field.value) : undefined;

  const _message = fieldState.error?.message
    ? message || "error.select_date"
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
      <Calendar
        style={{ width: "100%" }}
        {...field}
        id={name}
        placeholder={placeholder || "Digite aqui..."}
        disabled={disabled}
        dateFormat="dd/mm/yy"
        onChange={(date) => {
          if (date === null) {
            field.onChange(date);
          } else {
            field.onChange(date);
          }
        }}
      />
    </Form.Item>
  );
};
export default ItemDatePicker;
