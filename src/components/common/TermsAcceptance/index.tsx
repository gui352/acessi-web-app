import React from 'react';
import { useController } from "react-hook-form"
import { Checkbox } from 'primereact/checkbox';
import { Form } from 'components/common/Form';

interface TermsOfAcceptanceProps {
  label: string;
  name: string;
  requiredMessage?: string;
}

const TermsOfAcceptance: React.FC<TermsOfAcceptanceProps> = ({
  label,
  name,
  requiredMessage = 'Você precisa aceitar os termos para continuar',
}) => {
  const { field, fieldState } = useController({
    name,
    rules: {
      required: requiredMessage,
    },
  });

  const _message = fieldState.error?.message ? fieldState.error.message : undefined;

  return (
    <Form.Item
      label={label}
      name={name}
      message={_message}
      hideFeedback={false}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox
          inputId={name}
          {...field}
          style={{ marginRight: '8px' }}
        />
        <span>
          Eu aceito os{' '}
          <a href="/termos" target="_blank" rel="noopener noreferrer">
            Termos de Uso
          </a>{' '}
          e a{' '}
          <a href="/privacidade" target="_blank" rel="noopener noreferrer">
            Política de Privacidade
          </a>.
        </span>
      </div>
    </Form.Item>
  );
};

export default TermsOfAcceptance;
