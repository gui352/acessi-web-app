import { Select, Typography } from "antd";
import ItemProps from "../ItemProps";
import { useGetUserListQuery } from "./getUserList.gql";
import { Central, Row } from "./styled";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useController } from "react-hook-form";
import { Form } from "components/common/Form";
import { useTranslation } from "react-i18next";

const { Text } = Typography;

interface ItemSelectProps extends ItemProps {
  defaultValue?;
  multi?: boolean;
  message?: string;
  hideFeedback?: boolean;
  hideLabel?: boolean;
}

const ItemUserSelect = ({
  label,
  name,
  placeholder,
  disabled,
  defaultValue,
  multi,
  message,
  hideFeedback,
  hideLabel,
}: ItemSelectProps) => {
  const { t } = useTranslation();

  const { data } = useGetUserListQuery();
  const { field, fieldState } = useController({ name });

  const options = data?.cpeusers_users.map((i) => ({
    value: i.id,
    label: i.username,
  }));

  const [ramal, setRamal] = React.useState<undefined | string>(undefined);

  const { mutateAsync: getRamal } = useMutation(async (username: string) => {
    try {
      const response = await fetch(`/api/integrations/getRamalBy/${username}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      if (data && data.ramal) setRamal(data.ramal);
      return data;
    } catch (error) {
      setRamal(undefined);
    }
  });
  const username = options?.find((i) => i.value === field.value);

  useEffect(() => {
    if (username) {
      getRamal(username.label);
    } else setRamal(undefined);
  }, [fieldState.isDirty, field.value]);

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
      <Row>
        <Select
          mode={multi ? "multiple" : undefined}
          placeholder={placeholder || t("common:placeholders.select")}
          {...field}
          showSearch
          optionFilterProp="label"
          options={options}
          defaultValue={defaultValue}
          disabled={disabled}
          allowClear
          value={multi && field.value === null ? [] : field.value}
        />
        <Central>
          <Text type="secondary" strong>
            Ramal: {ramal}
          </Text>
        </Central>
      </Row>
    </Form.Item>
  );
};

export default ItemUserSelect;
