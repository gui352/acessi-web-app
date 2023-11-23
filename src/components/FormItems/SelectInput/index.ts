import { Option } from "./Option";
import { SelectInput as BaseSelectInput } from "./SelectInput";
export type {
  SelectInputProps,
  SelectOption,
  SelectOptionOrGroup,
} from "./SelectInput";

type SelectInputType = typeof BaseSelectInput & {
  Option: typeof Option;
};

const SelectInput = BaseSelectInput as SelectInputType;

SelectInput.Option = Option;

export { SelectInput };
