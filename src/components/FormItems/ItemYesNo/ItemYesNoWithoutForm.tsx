import { RadioButton } from "primereact/radiobutton";
import * as React from "react";
import { useController } from "react-hook-form";
import ItemProps from "../ItemProps";
import { useTranslation } from "next-i18next";

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
  const { t } = useTranslation("common");
  const { field } = useController({ name });

  const options = [
    { label: t("buttons.yes"), value: true },
    { label: t("buttons.no"), value: false },
  ];

  return (
    <div>
      <RadioButton
        options={options}
        {...field}
        defaultValue={defaultValue}
        disabled={disabled}
        optionType="button"
        buttonStyle="solid"
      />
    </div>
  );
};
export default ItemYesNoWithoutForm;
