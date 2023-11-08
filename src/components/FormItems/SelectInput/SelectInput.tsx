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

export type SelectInputProps<T extends string | number> = {
  name: string;
  label: string;
  hideFeedback?: boolean;
  hideLabel?: boolean;
  options: SelectOptionOrGroup<T>[];
  searchValue?: string;
  onSearch?: (value: string) => any;
  renderOption?: (option: SelectOptionOrGroup<T>) => React.ReactNode;
  showFooter?: boolean;
  disabled?: boolean;
};

export function SelectInput<T extends string | number>(
  props: SelectInputProps<T>
) {
  const name = props.name;
  const label = props.label;
  const hideFeedback = props.hideFeedback;
  const hideLabel = props.hideLabel;
  const options = props.options;
  const searchValue = props.searchValue;
  const onSearch = props.onSearch;
  const renderOption = props.renderOption;
  const showFooter = props.showFooter ?? false;
  const disabled = props.disabled ?? false;

  const { t } = useTranslation("common", { keyPrefix: "SelectInput" });
  const { field, fieldState } = useController({ name });

  const message = fieldState.error?.message;

  const includeFooterInOptions = showFooter && !renderOption;
  const allOptions = React.useMemo(() => {
    if (!includeFooterInOptions) {
      return options;
    }

    return [
      ...options,
      {
        value: "__footer__" as T,
        label: t("footer"),
        options: [],
      },
    ];
  }, [options, includeFooterInOptions, t]);

  function handleChange(
    _value: unknown,
    value: SelectOption<T> | SelectOption<T>[]
  ) {
    if (!Array.isArray(value)) {
      field.onChange(value ?? null);
    }
  }

  if (renderOption) {
    return (
      <Form.Item
        label={label}
        name={name}
        message={message}
        hideFeedback={hideFeedback}
        hideLabel={hideLabel}
      >
        <Select
          id={name}
          {...field}
          onChange={handleChange}
          searchValue={searchValue}
          onSearch={onSearch}
          disabled={disabled}
          filterOption={!onSearch}
          optionLabelProp="label"
          showSearch
          allowClear
          labelInValue
        >
          {allOptions.map(renderOption)}
          {showFooter && (
            <Select.OptGroup key="__footer__" label={t("footer")} />
          )}
        </Select>
      </Form.Item>
    );
  }

  return (
    <Form.Item
      label={label}
      name={name}
      message={message}
      hideFeedback={hideFeedback}
      hideLabel={hideLabel}
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
        optionLabelProp="label"
        showSearch
        allowClear
        labelInValue
      />
    </Form.Item>
  );
}
