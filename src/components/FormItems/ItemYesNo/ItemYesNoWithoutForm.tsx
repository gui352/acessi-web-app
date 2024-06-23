import { RadioButton } from "primereact/radiobutton";
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

const ItemYesNoWithoutForm: React.FC<ItemInputProps> = ({
  name,
  disabled,
  defaultValue,
}) => {
  const { field } = useController({ name });

  const options = [
    { label: "Sim", value: true },
    { label: "Não", value: false },
  ];

  return (
    <div>
      <RadioButton
        // options={options}
        {...field}
        defaultValue={defaultValue}
        disabled={disabled}
        // optionType="button"
        // buttonStyle="solid"
      />
    </div>
  );
};
export default ItemYesNoWithoutForm;
