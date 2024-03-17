import { InputText } from "primereact/inputtext";
import { Form } from "components/common/Form";
import * as React from "react";
import { useController } from "react-hook-form";
import ItemProps from "../ItemProps";
import { useTranslation } from "next-i18next";
interface ItemInputProps extends ItemProps {
  type?;
  defaultValue?;
  message?: string;
  hideFeedback?: boolean;
}

const ItemInput: React.FC<ItemInputProps> = ({
  label,
  name,
  placeholder,
  disabled,
  type,
  defaultValue,
  hideFeedback,
  message,
}) => {
  const { t } = useTranslation("common");
  const { field, fieldState } = useController({ name });

  const _message = fieldState.error?.message
    ? message || "error.text_area"
    : undefined;

  return (
    <Form.Item
      label={label}
      name={name}
      message={_message}
      hideFeedback={hideFeedback}
    >
      <InputText
        type={type}
        placeholder={placeholder || t("common:placeholders.input")}
        {...field}
        defaultValue={defaultValue}
        disabled={disabled}
      />
    </Form.Item>
  );
};
export default ItemInput;
