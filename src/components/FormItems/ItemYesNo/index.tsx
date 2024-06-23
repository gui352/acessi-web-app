import { SelectButton } from "primereact/selectbutton";
import { Form } from "components/common/Form";
import * as React from "react";
import { useController } from "react-hook-form";
import ItemProps from "../ItemProps";

interface ItemInputProps extends ItemProps {
  type?;
  defaultValue?;
  hideFeedback?: boolean;
  hideLabel?: boolean;
  message?: string;
}

const ItemYesNo: React.FC<ItemInputProps> = ({
  label,
  name,
  disabled,
  defaultValue,
  hideFeedback,
  message,
  hideLabel,
}) => {
  const { field, fieldState } = useController({ name });

  const _message = fieldState.error?.message ? message : undefined;

  const options = [
    { label: "Sim", value: true },
    { label: "Não", value: false },
  ];

  return (
    <Form.Item
      label={label}
      name={name}
      message={_message}
      hideFeedback={hideFeedback}
      hideLabel={hideLabel}
    >
      <SelectButton
        options={options}
        {...field}
        defaultValue={defaultValue}
        disabled={disabled}
        // optionType="button"
        // buttonStyle="solid"
      />
    </Form.Item>
  );
};
export default ItemYesNo;
