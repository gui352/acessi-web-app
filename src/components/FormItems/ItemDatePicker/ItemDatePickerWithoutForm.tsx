import { DatePicker } from "antd";
import * as React from "react";
import { useController } from "react-hook-form";
import ItemProps from "../ItemProps";
import { useTranslation } from "next-i18next";
import dayjs from "dayjs";
import { useDateFormatter } from "hooks/useDateFormatter";
import { Feedback } from "components/common/Form/FormItem";

interface ItemDatePickerProps extends ItemProps {
  message?: string;
  hideFeedback?: boolean;
}

const ItemDatePickerWithoutForm = ({
  name,
  disabled,
  placeholder,
  message,
  hideFeedback,
}: ItemDatePickerProps) => {
  const { t } = useTranslation();

  const dateFormatter = useDateFormatter();

  const { field, fieldState } = useController({ name });
  const dataValue = field.value ? dayjs(field.value) : undefined;

  const _message = fieldState.error?.message
    ? message || "error.select_date"
    : "";

  return (
    <div>
      <DatePicker
        style={{ width: "100%" }}
        {...field}
        id={name}
        placeholder={placeholder || t("common:placeholders.select")}
        disabled={disabled}
        value={dataValue}
        onChange={(date) => {
          if (date === null) {
            field.onChange(date);
          } else {
            field.onChange(date.toDate().toISOString());
          }
        }}
        format={dateFormatter}
      />
      {!hideFeedback && <Feedback>{t(_message)}</Feedback>}
    </div>
  );
};
export default ItemDatePickerWithoutForm;
