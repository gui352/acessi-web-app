import { InputText } from "primereact/inputtext";
import * as React from "react";
import { useController } from "react-hook-form";
import ItemProps from "../ItemProps";
import { Feedback } from "components/common/Form/FormItem";
import { useTranslation } from "react-i18next";

interface ItemInputProps extends ItemProps {
  type?;
  defaultValue?;
  hideLabel?: boolean;
  message?: string;
  hideFeedback?: boolean;
}

const ItemWithoutForm = ({
  name,
  placeholder,
  disabled,
  hideFeedback,
  message,
  defaultValue,
}: ItemInputProps) => {
  const { t } = useTranslation("common");
  const { field, fieldState } = useController({ name });

  const _message = fieldState.error?.message
    ? message || "error.select_value"
    : "";

  return (
    <div>
      <InputText
        placeholder={placeholder}
        {...field}
        defaultValue={defaultValue}
        disabled={disabled}
        style={{ width: "100%" }}
      />
      {!hideFeedback && <Feedback>{t(_message)}</Feedback>}
    </div>
  );
};
export default ItemWithoutForm;
