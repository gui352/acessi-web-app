import { InputNumber } from "primereact/inputnumber";
import * as React from "react";
import { useController } from "react-hook-form";
import ItemProps from "../ItemProps";
import { Feedback } from "components/common/Form/FormItem";
import { useTranslation } from "react-i18next";

interface ItemInputProps extends ItemProps {
  min?: number;
  max?: number;
  type?;
  defaultValue?;
  hideLabel?: boolean;
  message?: string;
  hideFeedback?: boolean;
}

const ItemNumberWithoutFromItem = ({
  name,
  placeholder,
  disabled,
  hideFeedback,
  min,
  message,
  max,
  defaultValue,
}: ItemInputProps) => {
  const { t } = useTranslation("common");
  const { field, fieldState } = useController({ name });

  const _message = fieldState.error?.message
    ? message || "error.select_value"
    : "";

  return (
    <div>
      <InputNumber
        placeholder={placeholder}
        {...field}
        defaultValue={defaultValue}
        disabled={disabled}
        min={min}
        max={max}
        style={{ width: "100%" }}
      />
      {!hideFeedback && <Feedback>{t(_message)}</Feedback>}
    </div>
  );
};
export default ItemNumberWithoutFromItem;
