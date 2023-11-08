import * as React from "react";

import {
  Control,
  FieldValues,
  Path,
  PathValue,
  useController,
} from "react-hook-form";

import { useEffectEvent } from "hooks/useEffectEvent";

export type FormReactionProps<T extends FieldValues, N extends Path<T>> = {
  control?: Control<T>;
  field: N;
  reaction: (data: PathValue<T, N>) => void;
};

export function FormReaction<T extends FieldValues, N extends Path<T>>(
  props: FormReactionProps<T, N>
) {
  const control = props.control;
  const field = props.field;
  const reaction = useEffectEvent(props.reaction);

  const {
    field: { value },
  } = useController({ control, name: field });

  React.useEffect(() => {
    reaction(value);
  }, [reaction, value]);

  return null;
}
