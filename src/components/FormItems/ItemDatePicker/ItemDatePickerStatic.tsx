import { DatePicker } from "antd";
import { Form } from "components/common/Form";
import * as React from "react";
import ItemProps from "../ItemProps";
import { useTranslation } from "next-i18next";
import { useDateFormatter } from "hooks/useDateFormatter";
import { useController } from "react-hook-form";

interface ItemDatePickerProps extends ItemProps {
  message?: string;
  hideFeedback?: boolean;
  value: any;
}

const ItemDatePickerStatic = ({
  label,
  name,
  disabled,
  placeholder,
  message,
  value,
  hideFeedback,
}: ItemDatePickerProps) => {
  const { t } = useTranslation();

  const dateFormatter = useDateFormatter();

  const { fieldState } = useController({ name });

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
      <DatePicker
        style={{ width: "100%" }}
        id={name}
        placeholder={placeholder || t("common:placeholders.select")}
        disabled={disabled}
        value={value}
        format={dateFormatter}
      />
    </Form.Item>
  );
};
export default ItemDatePickerStatic;
