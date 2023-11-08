import { Checkbox } from "antd";
import { Feedback } from "components/common/Form/FormItem";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { useController } from "react-hook-form";

interface ItemCheckboxProps {
  name: string;
  contentCheckbox: string;
  label?;
  rules?;
  disabled?: boolean;
  hideLabel?: boolean;
  hideFeedback?: boolean;
  message?: string;
}

const ItemCheckboxWithoutFormItem: React.FC<ItemCheckboxProps> = ({
  name,
  contentCheckbox,
  disabled,
  hideFeedback,
  message,
}) => {
  const { t } = useTranslation("common");

  const { field, fieldState } = useController({ name });

  const _message = fieldState.error?.message
    ? message || "error.select_value"
    : "";
  return (
    <div>
      <Checkbox
        // {...field}
        onChange={field.onChange}
        defaultChecked={false}
        disabled={disabled}
        checked={!!field.value}
      >
        {contentCheckbox}
      </Checkbox>
      {!hideFeedback && <Feedback>{t(_message)}</Feedback>}
    </div>
  );
};
export default ItemCheckboxWithoutFormItem;
