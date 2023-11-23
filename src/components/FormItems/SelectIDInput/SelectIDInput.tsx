import * as React from "react";

import { Select } from "antd";
import { useController } from "react-hook-form";

import { Form } from "components/common/Form";
import { useTranslation } from "next-i18next";

export type SelectOption<T extends string | number> = {
  value: T;
  label: string;
};

export type SelectOptionOrGroup<T extends string | number> = SelectOption<T> & {
  options?: SelectOption<T>[];
};

export type SelectIDInputProps<T extends string | number> = {
  name: string;
  label: string;
  hideFeedback?: boolean;
  options: SelectOptionOrGroup<T>[];
  searchValue?: string;
  onSearch?: (value: string) => any;
  showFooter?: boolean;
  disabled?: boolean;
};

export function SelectIDInput<T extends string | number>(
  props: SelectIDInputProps<T>
) {
  const name = props.name;
  const label = props.label;
  const hideFeedback = props.hideFeedback;
  const options = props.options;
  const searchValue = props.searchValue;
  const onSearch = props.onSearch;
  const showFooter = props.showFooter ?? false;
  const disabled = props.disabled ?? false;

  const { t } = useTranslation("common", { keyPrefix: "SelectIDInput" });
  const { field, fieldState } = useController({ name });

  const message = fieldState.error?.message;

  const allOptions = React.useMemo(() => {
    if (!showFooter) {
      return options;
    }

    return [
      ...options,
      {
        value: "__footer__",
        label: t("footer"),
        options: [],
      },
    ];
  }, [options, showFooter, t]);

  function handleChange(value: T) {
    field.onChange(value ?? null);
  }

  return (
    <Form.Item
      label={label}
      name={name}
      message={message}
      hideFeedback={hideFeedback}
    >
      <Select
        id={name}
        {...field}
        onChange={handleChange}
        searchValue={searchValue}
        onSearch={onSearch}
        options={allOptions}
        disabled={disabled}
        filterOption={!onSearch}
        optionFilterProp="label"
        showSearch
        allowClear
      />
    </Form.Item>
  );
}
