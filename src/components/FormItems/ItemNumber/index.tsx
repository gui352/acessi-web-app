import { InputNumber } from "primereact/inputnumber";
import { Form } from "components/common/Form";
import * as React from "react";
import { useController } from "react-hook-form";
import ItemProps from "../ItemProps";

interface ItemNumberProps extends ItemProps {
  min?: number;
  max?: number;
  step?: number; // Adiciona suporte a passos personalizados
  useGrouping?: boolean; // Suporte para agrupamento de milhares
  hideLabel?: boolean;
  hideFeedback?: boolean;
  message?: string;
  addonAfter?: React.ReactNode;
  addonBefore?: React.ReactNode;
}

const ItemNumber = ({
  label,
  name,
  placeholder,
  disabled,
  min,
  max,
  step,
  useGrouping = true, // Padrão como verdadeiro
  addonAfter,
  addonBefore,
  hideLabel,
  message,
  hideFeedback,
}: ItemNumberProps) => {
  const { field, fieldState } = useController({ name });

  const _message = fieldState.error?.message
    ? message || "error.select_value"
    : undefined;

  return (
    <Form.Item
      label={
        hideLabel ? null : (
          <>
            {label}
            {addonAfter && <span style={{ marginLeft: 4 }}>{addonAfter}</span>}
            {addonBefore && <span style={{ marginRight: 4 }}>{addonBefore}</span>}
          </>
        )
      }
      name={name}
      hideLabel={hideLabel}
      message={_message}
      hideFeedback={hideFeedback}
    >
      <InputNumber
        placeholder={placeholder}
        {...field}
        value={field.value || undefined}
        onChange={(e) => field.onChange(e.value)}
        disabled={disabled}
        min={min}
        max={max}
        step={step || 1}
        useGrouping={useGrouping}
        style={{ width: "100%" }}
      />
    </Form.Item>
  );
};

export default ItemNumber;
