import React, { FC } from 'react';
import { Button, Checkbox, Col, Form, Input, Row, Select } from 'antd';
import { createUser, sendRegistrationEmail } from '../api/registrationApi';
import { IUser } from '../types';
import { getRegistrationTemplate } from '../helpers/getRegistrationTemplate';
import styled from 'styled-components';
import { breakpoints } from '../../../utils/breakpoints';
import { ITeachers } from '../../../components/OurTeachers/OutTeachers';

export interface IRegistrationFormView {
  teachers: Pick<ITeachers, 'name'>[];
}

export const RegistrationFormView: FC<IRegistrationFormView> = ({
  teachers,
}: IRegistrationFormView) => {
  const [form] = Form.useForm();

  const onSubmit = (user: IUser) => {
    createUser({ ...user })
      .then((data) => {
        sendRegistrationEmail(user);
      })
      .catch((e) => console.log(e));
  };

  const FormContainer = styled.div`
    max-width: ${breakpoints.md};
    margin: 1rem auto 0;
  `;

  return (
    <Row className={'mt-2'}>
      <Col span={24} className={'p-2'}>
        <Form
          form={form}
          onFinish={onSubmit}
          labelCol={{ span: 12 }}
          wrapperCol={{ span: 6 }}
          layout="horizontal"
          // onValuesChange={onFormLayoutChange}
          // disabled={componentDisabled}
          initialValues={{
            name: 'Василий',
            phone: '8913317249',
            town: 'Новосибирск',
            email: 'Souji_933@mail.ru',
            status: 'Учитель',
            isVegan: false,
            isCar: false,
            isConcert: true,
            birthDate: '15/16/1993',
          }}
        >
          <Form.Item
            label="ФИО"
            name={'name'}
            rules={[{ required: true, message: 'Поле обязательно для ввода' }]}
          >
            <Input placeholder={'Введите ФИО'} />
          </Form.Item>
          <Form.Item
            label="Дата рождения"
            name={'birthDate'}
            rules={[{ required: true, message: 'Поле обязательно для ввода' }]}
          >
            <Input placeholder={'Введите дату рождения : 15/06/1993'} />
          </Form.Item>
          <Form.Item
            label="Номер телефона"
            name={'phone'}
            rules={[{ required: true, message: 'Поле обязательно для ввода' }]}
          >
            <Input placeholder={'8913371хххх'} />
          </Form.Item>
          <Form.Item
            label="Номер телефона"
            name={'email'}
            rules={[{ required: true, message: 'Поле обязательно для ввода' }]}
          >
            <Input placeholder={'example@mail.ru'} />
          </Form.Item>
          <Form.Item
            label="Город"
            name={'town'}
            rules={[{ required: true, message: 'Поле обязательно для ввода' }]}
          >
            <Select placeholder={'Москва'}>
              <Select.Option value="Учитель">Новосибирск</Select.Option>
              <Select.Option value="Ученик">Москва</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Вы"
            name={'status'}
            rules={[{ required: true, message: 'Поле обязательно для ввода' }]}
          >
            <Select placeholder={'Ученик'}>
              <Select.Option value="Учитель">Учитель</Select.Option>
              <Select.Option value="Ученик">Ученик</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Ваш учитель"
            name={'teachers'}
            rules={[{ required: true, message: 'Поле обязательно для ввода' }]}
          >
            <Checkbox.Group
              options={teachers.map((teacher) => teacher.name)}
              defaultValue={undefined}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            />
          </Form.Item>
          <Form.Item
            label="Нужно ли вам вегетарианское меню"
            name={'isVegan'}
            rules={[{ required: true, message: 'Поле обязательно для ввода' }]}
          >
            <Select>
              <Select.Option value={true}>Да</Select.Option>
              <Select.Option value={false}>Нет</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Будете ли вы участвовать в концерте?"
            rules={[{ required: true, message: 'Поле обязательно для ввода' }]}
            name={'isConcert'}
          >
            <Select>
              <Select.Option value={true}>Да</Select.Option>
              <Select.Option value={false}>Нет</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Вы приедете на машине?"
            name={'isCar'}
            rules={[{ required: true, message: 'Поле обязательно для ввода' }]}
          >
            <Select>
              <Select.Option value={true}>Да</Select.Option>
              <Select.Option value={false}>Нет</Select.Option>
            </Select>
          </Form.Item>
          <Button
            type={'primary'}
            style={{
              width: '100%',
              maxWidth: '360px',
              margin: '0 auto',
              display: 'block',
              height: '48px',
            }}
            htmlType="submit"
          >
            С Богом!
          </Button>
        </Form>
      </Col>
    </Row>
  );
};
