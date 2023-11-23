import { Select } from "antd";

export type OptionProps = {
  className?: string;
  children?: React.ReactNode;
  key: string;
  label: string;
};

export function Option(props: OptionProps) {
  const className = props.className;
  const children = props.children;
  const key = props.key;
  const label = props.label;

  return (
    <Select.Option className={className} key={key} label={label}>
      {children ?? label}
    </Select.Option>
  );
}
