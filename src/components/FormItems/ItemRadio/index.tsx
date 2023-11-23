import { Radio } from "antd";
import { Form } from "components/common/Form";
import * as React from "react";
import { useController } from "react-hook-form";
import ItemProps from "../ItemProps";
import { useTranslation } from "next-i18next";

interface ItemRadioProps extends ItemProps {
  rules?;
  options;
  defaultValue?;
  multi?: boolean;
  hideFeedback?: boolean;
  message?: string;
  hideLabel?: boolean;
}

const ItemRadio = ({
  label,
  name,
  disabled,
  options,
  defaultValue,
  hideFeedback,
  message,
  hideLabel,
}: ItemRadioProps) => {
  const { t } = useTranslation();

  const { field, fieldState } = useController({ name });

  const _message = fieldState.error?.message
    ? message || "error.select_value"
    : undefined;

  return (
    <Form.Item
      label={label}
      name={name}
      message={_message}
      hideFeedback={hideFeedback}
      hideLabel={hideLabel}
    >
      <Radio.Group
        options={options}
        {...field}
        defaultValue={defaultValue}
        disabled={disabled}
        optionType="button"
        buttonStyle="solid"
      />
    </Form.Item>
  );
};

export default ItemRadio;
