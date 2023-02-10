import React, { FC } from 'react';
import { Modal } from 'antd';

export interface IRegistrationConfirm {
  isOpen: boolean;

  onChange(isOpen: boolean): void;
}

export const RegistrationConfirm: FC<IRegistrationConfirm> = ({
  isOpen,
  onChange,
}: IRegistrationConfirm) => {
  return (
    <Modal
      title="Поздравляем, регистрация прошла успешно! "
      open={isOpen}
      onOk={() => onChange(false)}
      style={{ padding: '2rem' }}
      cancelButtonProps={{
        disabled: true,
        style: { visibility: 'hidden', display: 'none' },
      }}
      okText={'Ура!'}
    >
      <p>
        В ближайшее время Вам на почту поступит инструкция по оплате и
        дальнейших шагах (Рекомендуем проверить папки «Входящие» и «Спам»).
      </p>
      <p>С уважением, оргкомитет Семинара.</p>
      <div style={{ marginTop: '2rem', marginBottom: '1rem' }}>
        <span style={{ borderBottom: '2px solid #000', fontWeight: 'bold' }}>
          Просим Вас в ответном письме прислать подтверждение об оплате.
        </span>
        <span
          style={{
            borderBottom: '2px solid #000',
            fontWeight: 'bold',
          }}
        >
          Подтверждение оплаты является чек или квитанция.
        </span>
      </div>
    </Modal>
  );
};
