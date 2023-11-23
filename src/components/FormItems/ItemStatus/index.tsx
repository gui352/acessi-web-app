import {
  AlertTwoTone,
  CheckCircleOutlined,
  DislikeTwoTone,
  ExclamationCircleOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import { Radio, Tooltip } from "antd";
import ItemSelect from "components/FormItems/ItemSelect";
import useAuthDb from "hooks/useAuthDb";
import useTranslationDb from "hooks/useTranslationDb";
import { useTranslation } from "next-i18next";
import { useFormContext } from "react-hook-form";
import { ButtonRow, MyRow } from "./styled";

const ItemStatus = ({ disabled }) => {
  const { t } = useTranslation(["action"]);
  const { id: currentUserId, roles } = useAuthDb();

  const { watch, setValue } = useFormContext();

  const currentStatus = watch().status;
  const isActionResponsible = watch().actionResponsibleId === currentUserId;
  const isResponsibleId = watch().responsibleId === currentUserId;
  const hasRole = roles?.includes("admin");

  const { t: tAction, options: statusOptions } = useTranslationDb(
    "cpeschema_actionStatus"
  );

  const _disabled = !(!disabled || hasRole);

  const disabledOnApproval =
    _disabled ||
    !isResponsibleId ||
    (!!currentStatus && !["rejected", "done"].includes(currentStatus));
  const disabledOpened =
    _disabled ||
    !isActionResponsible ||
    (!!currentStatus && currentStatus !== "on_approval");
  const disabledRejected =
    _disabled ||
    !isActionResponsible ||
    (!!currentStatus && currentStatus !== "on_approval");
  const disabledDone =
    _disabled ||
    !isActionResponsible ||
    (!!currentStatus && !["opened", "delayed"].includes(currentStatus));

  const onChange = ({ target }) => {
    setValue("status", target.value);
  };

  return (
    <MyRow>
      <ItemSelect
        label={t("labels.status")}
        name={`status`}
        disabled={true}
        options={statusOptions}
      />
      <ButtonRow>
        <Radio.Group
          value={currentStatus}
          onChange={onChange}
          buttonStyle="solid"
        >
          <Tooltip title={tAction("on_approval")}>
            <Radio.Button
              value="on_approval"
              disabled={currentStatus !== "on_approval" && disabledOnApproval}
            >
              <ExclamationCircleOutlined />
            </Radio.Button>
          </Tooltip>
          <Tooltip title={tAction("opened")}>
            <Radio.Button
              value="opened"
              disabled={currentStatus !== "opened" && disabledOpened}
            >
              <LikeOutlined />
            </Radio.Button>
          </Tooltip>
          <Tooltip title={tAction("rejected")}>
            <Radio.Button
              value="rejected"
              disabled={currentStatus !== "rejected" && disabledRejected}
            >
              <DislikeTwoTone twoToneColor="#b90000" />
            </Radio.Button>
          </Tooltip>
          <Tooltip title={tAction("delayed")}>
            <Radio.Button
              value="delayed"
              disabled={currentStatus !== "delayed"}
            >
              <AlertTwoTone twoToneColor="#b90000" />
            </Radio.Button>
          </Tooltip>
          <Tooltip title={tAction("done")}>
            <Radio.Button
              value="done"
              disabled={currentStatus !== "done" && disabledDone}
            >
              <CheckCircleOutlined />
            </Radio.Button>
          </Tooltip>
        </Radio.Group>
      </ButtonRow>
    </MyRow>
  );
};

export default ItemStatus;
