import { Select } from "antd";
import { Form } from "components/common/Form";
import * as React from "react";
import { useController } from "react-hook-form";
import ItemProps from "../ItemProps";
import { useTranslation } from "next-i18next";

import { makeEq, makeIlike } from "utils/hasuraFilters";
import { textSorter } from "utils/sorters";

import { useGetCustomersQuery } from "./getCustomers.gql";

interface ItemSelectProps extends ItemProps {
  rules?;
  defaultValue?;
  multi?: boolean;
  hideFeedback?: boolean;
  message?: string;
  hideLabel?: boolean;
}

export const ItemSelectCustomer: React.FC<ItemSelectProps> = ({
  label,
  name,
  placeholder,
  disabled,
  defaultValue,
  hideFeedback,
  message,
  hideLabel,
}) => {
  const { t } = useTranslation();

  const { field, fieldState } = useController({ name });

  const _message = fieldState.error?.message
    ? message || "error.select_value"
    : undefined;

  const [searchTerm, setSearchTerm] = React.useState("");
  const value = field.value || "";

  const searchQuery = makeIlike(searchTerm);
  const selectedQuery = makeEq(value);

  const { data, isLoading } = useGetCustomersQuery(
    { searchQuery, selectedQuery },
    { suspense: false, keepPreviousData: true }
  );

  const customers = data?.cpeschema_customers ?? [];
  const selected = data?.selected ?? [];
  if (value && !customers.find((customer) => customer.sapCode === value)) {
    customers.push(...selected);
  }

  const options = customers
    .map((customer) => {
      return {
        value: customer.sapCode,
        label: customer.name,
      };
    })
    .sort(textSorter("label"));

  const onChange = (v: any) => {
    field.onChange(v || null);
  };

  return (
    <Form.Item
      label={label}
      name={name}
      message={_message}
      hideFeedback={hideFeedback}
      hideLabel={hideLabel}
    >
      <Select
        placeholder={placeholder || t("common:placeholders.select")}
        {...field}
        onChange={onChange}
        showSearch
        optionFilterProp="label"
        options={options}
        defaultValue={defaultValue}
        disabled={disabled}
        allowClear
        loading={isLoading}
        onSearch={(value) => setSearchTerm(value)}
      />
    </Form.Item>
  );
};
