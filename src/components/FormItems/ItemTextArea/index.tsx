import { Input } from "antd";
import { Form } from "components/common/Form";
import * as React from "react";
import { useController } from "react-hook-form";
import ItemProps from "../ItemProps";
import { useTranslation } from "next-i18next";

interface ItemTextAreaProps extends ItemProps {
  label: string;
  name: string;
  hideFeedback?: boolean;
  message?: string;
}

const ItemTextArea: React.FC<ItemTextAreaProps> = ({
  label,
  name,
  placeholder,
  disabled,
  hideFeedback,
  message,
}) => {
  const { t } = useTranslation();
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
      <Input.TextArea
        {...field}
        placeholder={placeholder || t("common:placeholders.input")}
        disabled={disabled}
      />
    </Form.Item>
  );
};
export default ItemTextArea;
