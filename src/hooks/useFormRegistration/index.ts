import { zodResolver } from "@hookform/resolvers/zod";
import { TFunction } from "next-i18next";
import { FieldValues, useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";

import { createTranslatedErrorMap } from "utils/zod";

export type UseModalFormOptions<T extends FieldValues> = {
  initialValues?: Partial<T>;
  onConfirm: (factor: T, methods: UseFormReturn<T, any, undefined>) => any;
  schema: z.ZodSchema<T, z.ZodTypeDef, any>;
  errorT: TFunction;
  disabled?: boolean;
  refetch?: () => Promise<any>;
  parseData?: (data: any) => any;
  disabledRefetch: boolean;
  page?: string;
};

export function useFormRegistration<T extends FieldValues>(
  options: UseModalFormOptions<T>
) {
  const initialValues = options.initialValues;
  const onConfirm = options.onConfirm;
  const schema = options.schema;
  const errorT = options.errorT;
  const disabled = options.disabled;
  const refetch = options.refetch;
  const parseData = options.parseData;
  const disabledRefetch = options.disabledRefetch;
  // const page = options.page;

  const errorMap = createTranslatedErrorMap(errorT);
  const methods = useForm<T>({
    defaultValues: initialValues as any,
    resolver: zodResolver(schema, {
      errorMap,
    }) as any,
  });

  const handleConfirm = methods.handleSubmit((data) => {
    console.log("handleConfirm", data);
    onConfirm(data as unknown as T, methods);
  });

  const [lastDisabled, setLastDisabled] = useState(false);
  const [shouldRefetch, setShouldRefetch] = useState(false);

  useEffect(() => {
    if (lastDisabled !== !!disabled) {
      setLastDisabled(!!disabled);
      setShouldRefetch(true);
    }
  }, [disabled]);

  useEffect(() => {
    if (!disabledRefetch && shouldRefetch && refetch && parseData) {
      setShouldRefetch(false);
      (async () => {
        const { data: newData } = await refetch();
        methods.reset(parseData(newData));
      })();
    }
  }, [shouldRefetch, disabledRefetch, refetch, parseData]);

  return {
    handleConfirm,
    methods,
  };
}
