import styled from "@emotion/styled";
import { Switch } from "antd";
import { useController } from "react-hook-form";
import { useTranslation } from "react-i18next";

export type SwitchInputProps = {
  name: string;
  label: string;
  hideFeedback?: boolean;
  hideLabel?: boolean;
  disabled?: boolean;
};

export function SwitchInputWithoutForm(props: SwitchInputProps) {
  const name = props.name;
  const { t } = useTranslation("common");

  const disabled = props.disabled ?? false;

  const {
    field: { value, ...field },
  } = useController({ name });

  return (
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
  );
}

const Wrapper = styled.div`
  display: grid;

  justify-self: start;
  grid-template-columns: auto auto;

  gap: 1ch;
`;
