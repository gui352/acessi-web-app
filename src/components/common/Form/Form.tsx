import { DetailedHTMLProps, FormHTMLAttributes } from "react";

import styled from "@emotion/styled";

import { FormItem } from "./FormItem";
import { FormReaction } from "./FormReaction";
import { FormRender } from "./FormRender";
import { SubForm } from "./SubForm";

type FormProps = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
> & {
  disableSubmitOnEnter?: boolean;
};

function FormComponent(props: FormProps) {
  const { children, disableSubmitOnEnter = false, ...rest } = props;

  return (
    <BaseForm {...rest}>
      {children}
      {!disableSubmitOnEnter && <input type="submit" hidden />}
    </BaseForm>
  );
}

const BaseForm = styled.form`
  display: grid;

  align-items: center;

  padding: ${({ theme }) => theme.spacing.sm};
`;

type FormType = typeof FormComponent & {
  Item: typeof FormItem;
  Reaction: typeof FormReaction;
  Render: typeof FormRender;
  SubForm: typeof SubForm;
};

const Form = FormComponent as FormType;

Form.Item = FormItem;
Form.Reaction = FormReaction;
Form.Render = FormRender;
Form.SubForm = SubForm;

export { Form };
