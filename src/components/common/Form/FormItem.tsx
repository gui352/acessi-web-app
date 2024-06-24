import styled from "@emotion/styled";

export type FormItemProps = {
  label?: string;
  message?: string;
  name?: string;
  hideFeedback?: boolean;
  hideLabel?: boolean;
  children: React.ReactNode;
};

export function FormItem(props: FormItemProps) {
  const label = props.label;
  const message = props.message ?? "";
  const name = props.name;
  const hideFeedback = props.hideFeedback ?? false;
  const hideLabel = props.hideLabel ?? false;
  const children = props.children;

  return (
    <Wrapper>
      {!hideLabel && label ? (
        <Label htmlFor={name}>{label}:</Label>
      ) : (
        <span>&nbsp;</span>
      )}
      {children}
      {!hideFeedback && <Feedback>{message}</Feedback>}
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: grid;

  justify-items: stretch;

  /* gap: ${({ theme }) => theme.spacing.xs}; */
`;

export const Label = styled.label`
  justify-self: start;

  font-weight: 600;
`;

export const Feedback = styled.span`
  color: red;
  min-height: 2em;
  justify-self: end;

  font-weight: 600;
`;
