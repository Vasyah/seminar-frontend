import React, { FC } from 'react';
import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  notification,
  Row,
  Select,
} from 'antd';
import { RegistrationApi } from '../api/registrationApi';
import { IUser } from '../types';
import { ITeachers } from '../../../components/OurTeachers/OutTeachers';

export interface IRegistrationFormView {
  teachers: Pick<ITeachers, 'name'>[];
  cities: string[];

  setLoading(state: boolean): void;

  onEmailSent(): void;
}

export const RegistrationFormView: FC<IRegistrationFormView> = ({
  teachers,
  cities,
  onEmailSent,
  setLoading,
}: IRegistrationFormView) => {
  const [form] = Form.useForm();

  const onSubmit = async (user: IUser) => {
    setLoading(true);
    RegistrationApi.createUser({ ...user })
      .then((result) => {
        const data = result?.data as IUser;

        if (data) {
          if (data?.id) {
            RegistrationApi.sendRegistrationEmail(user).then(() => {
              RegistrationApi.updateUser(data?.id, {
                isRegistrationsEmailSent: true,
              })?.then(() => {
                setLoading(false);
                onEmailSent();
              });
            });
          }
        }
      })
      .catch((e) => {
        setLoading(false);
        notification.error({
          message: `Ошибка во время регистрации`,
          description:
            'Возможно, у нас проблемы с сервером, пожалуйста, повторите попытку позже😢',
          placement: 'top',
        });
      });
  };

  return (
    <Row className={'mt-2'}>
      <Col span={24} className={'p-2'}>
        <Form
          form={form}
          onFinish={onSubmit}
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 12 }}
          layout="horizontal"
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
            rules={[
              {
                required: true,
                message: 'Поле обязательно для ввода, только цифры',
              },
            ]}
          >
            <Input placeholder={'8913371хххх'} />
          </Form.Item>
          <Form.Item
            label="Адрес электронной почты"
            name={'email'}
            rules={[
              {
                required: true,
                message: 'Поле обязательно для ввода, пример: email@example.ru',
                type: 'email',
              },
            ]}
          >
            <Input placeholder={'example@mail.ru'} />
          </Form.Item>
          <Form.Item
            label="Город"
            name={'town'}
            rules={[{ required: true, message: 'Поле обязательно для ввода' }]}
          >
            <Select placeholder={'Введите ваш город'}>
              {cities.map((city) => (
                <Select.Option value={city}>{city}</Select.Option>
              ))}
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
            <Checkbox.Group>
              <Row>
                {teachers.map((teacher) => (
                  <Col xs={24} md={12} key={teacher.name}>
                    <Checkbox value={teacher.name}>{teacher.name}</Checkbox>
                  </Col>
                ))}
              </Row>
            </Checkbox.Group>
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
