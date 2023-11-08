import * as React from "react";

import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Button, Card, Tooltip } from "antd";
import { useTranslation } from "next-i18next";
import { useFieldArray } from "react-hook-form";

import { Form } from "components/common/Form";
import useDelete, {
  DeleteTables,
} from "components/layout/DeleteContext/DeleteContext";

export type ArrayInputColumnRenderProps = {
  key: string;
  name: string;
  disabled: boolean;
};

export type ArrayInputColumn = {
  name?: string;
  label?: string;
  render: (props: ArrayInputColumnRenderProps) => React.ReactNode;
};

export type ArrayInputProps = {
  name: string;
  label: string;
  columns: ArrayInputColumn[];
  noItemsText: string;
  disabled?: boolean;
  newItem?: any;
  tableName: DeleteTables;
};

export function ArrayInput(props: ArrayInputProps) {
  const name = props.name;
  const label = props.label;
  const columns = props.columns;
  const noItemsText = props.noItemsText;
  const disabled = props.disabled ?? false;
  const newItem = props.newItem ?? {};
  const tableName = props.tableName;

  const { t } = useTranslation("common", {
    keyPrefix: "ArrayInput",
  });

  const { fields, append, remove } = useFieldArray<Record<typeof name, any[]>>({
    name,
  });

  function handleAdd() {
    append(newItem);
  }

  const { addDelete } = useDelete();

  const onDelete = (field, index) => {
    if (field.id) {
      remove(index);
      addDelete({
        id: field.id,
        table: tableName,
        removeFun: () => false,
        arrayName: name,
      });
    } else {
      remove(index);
    }
  };

  return (
    <Form.Item label={label} hideFeedback>
      <Wrapper>
        <Card size="small">
          <ListWrapper columns={columns.length}>
            {fields.length === 0 ? (
              <Title style={{ gridColumn: `span ${columns.length}` }}>
                {noItemsText}
              </Title>
            ) : (
              <>
                {columns.map((column) => (
                  <Title key={column.name ?? ""}>{column.label}:</Title>
                ))}
              </>
            )}
            <Tooltip title={t("add")}>
              <Button
                type="primary"
                size="small"
                onClick={() => handleAdd()}
                disabled={disabled}
                icon={<PlusOutlined />}
              />
            </Tooltip>
            {fields.map((field, index) => (
              <React.Fragment key={field.id}>
                {columns.map((column) =>
                  column.render({
                    key: `${field.id}.${column.name}`,
                    name: column.name
                      ? `${name}.${index}.${column.name}`
                      : `${name}.${index}`,
                    disabled,
                  })
                )}
                <Tooltip title={t("common:buttons.remove")}>
                  <DeleteButton
                    size="small"
                    type="primary"
                    onClick={() => onDelete(field, index)}
                    icon={<DeleteOutlined />}
                    disabled={disabled}
                    danger
                  />
                </Tooltip>
              </React.Fragment>
            ))}
          </ListWrapper>
        </Card>
      </Wrapper>
    </Form.Item>
  );
}

const Wrapper = styled.div`
  display: grid;

  gap: ${({ theme }) => theme.spacing.sm};

  margin-bottom: 20px;
`;

const ListWrapper = styled.div<{ columns: number }>`
  display: grid;

  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`} auto;

  align-items: start;

  gap: ${({ theme }) => theme.spacing.sm};
`;

const Title = styled.label`
  font-weight: 600;

  margin: 0;
`;

const DeleteButton = styled(Button)`
  /* margin-top: 50%; */
`;
