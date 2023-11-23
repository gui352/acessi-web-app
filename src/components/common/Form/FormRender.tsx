import {
  Control,
  FieldValues,
  Path,
  PathValue,
  useWatch,
} from "react-hook-form";

export type FormRenderProps<T extends FieldValues, N extends Path<T>> = {
  control?: Control<T>;
  field: N;
  render: (data: PathValue<T, N>) => React.ReactNode;
};

export function FormRender<T extends FieldValues, N extends Path<T>>(
  props: FormRenderProps<T, N>
) {
  const control = props.control;
  const field = props.field;
  const render = props.render;

  const value = useWatch({ control, name: field });

  return <>{render(value)}</>;
}
