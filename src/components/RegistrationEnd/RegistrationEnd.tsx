import React, { FC } from 'react';
import { HeartTwoTone } from '@ant-design/icons';
import { Button, Result } from 'antd';
export interface IRegistrationEnd {}

export const RegistrationEnd: FC<IRegistrationEnd> = (
  props: IRegistrationEnd,
) => {
  const organizationContact = 'https://t.me/olyaolyaru';
  const groupContact = 'https://t.me/olyaolyaru';

  return (
    <div>
      <Result
        icon={<HeartTwoTone />}
        title={
          <div>
            Здравствуйте! Регистрация на Семинар завершилась, <br /> если у Вас
            остались вопросы, пишите
            <span>
              <a href={organizationContact} target={'_blank'}>
                &nbsp;нам
              </a>
            </span>
          </div>
        }
        extra={
          <Button.Group>
            <Button type="primary" href={organizationContact} target={'_blank'}>
              Написать нам!
            </Button>
          </Button.Group>
        }
      />
    </div>
  );
};
