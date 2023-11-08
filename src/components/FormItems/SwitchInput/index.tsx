import styled from "@emotion/styled";
import { Switch } from "antd";
import { useController } from "react-hook-form";

import { Form } from "components/common/Form";
import { useTranslation } from "react-i18next";

export type SwitchInputProps = {
  name: string;
  label: string;
  hideFeedback?: boolean;
  hideLabel?: boolean;
  disabled?: boolean;
};

export function SwitchInput(props: SwitchInputProps) {
  const name = props.name;
  const label = props.label;
  const hideFeedback = props.hideFeedback;
  const hideLabel = props.hideLabel ?? false;
  const disabled = props.disabled ?? false;
  const { t } = useTranslation("common");

  const {
    field: { value, ...field },
    fieldState,
  } = useController({ name });

  const message = fieldState.error?.message;

  return (
    <Form.Item
      label={label}
      name={name}
      message={message}
      hideFeedback={hideFeedback}
      hideLabel={hideLabel}
    >
      <Wrapper>
        <Switch
          id={name}
          {...field}
          checked={value}
          disabled={disabled}
          checkedChildren={t("buttons.yes")}
          unCheckedChildren={t("buttons.no")}
        />
      </Wrapper>
    </Form.Item>
  );
}

const Wrapper = styled.div`
  display: grid;

  justify-self: start;
  grid-template-columns: auto auto;

  gap: 1ch;
`;
