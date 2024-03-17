import { Dropdown } from "primereact/dropdown";
import { Form } from "components/common/Form";
import * as React from "react";
import { useController } from "react-hook-form";
import ItemProps from "../ItemProps";
import { useTranslation } from "next-i18next";

interface ItemSelectProps extends ItemProps {
  rules?;
  options;
  defaultValue?;
  multi?: boolean;
  hideFeedback?: boolean;
  message?: string;
  hideLabel?: boolean;
}

const ItemSelect = ({
  label,
  name,
  placeholder,
  disabled,
  options,
  defaultValue,
  hideFeedback,
  message,
  hideLabel,
  multi = false,
}: ItemSelectProps) => {
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
      <Dropdown
        // mode={multi ? "multiple" : undefined}
        // maxTagCount={1}
        placeholder={placeholder || t("common:placeholders.select")}
        {...field}
        // showSearch
        // optionFilterProp="label"
        options={options}
        defaultValue={defaultValue}
        disabled={disabled}
        // allowClear
      />
    </Form.Item>
  );
};

export default ItemSelect;
