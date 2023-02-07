import { IUser } from '../types';
import axios from 'axios';
import { getRegistrationTemplate } from '../helpers/getRegistrationTemplate';

const serverPath = 'https://seminar-moskva.ru/';

export const createUser = (user: IUser) => {
  const body = { ...user };

  return axios
    .post<IUser, any>(
      serverPath + 'users',
      { ...body },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'access-control-allow-credentials': true,
          vary: 'Origin',
          host: 'seminar-moskva.ru:7000',
        },
      },
    )
    .then((result) => result.data);
};

export const sendRegistrationEmail = (user: IUser) => {
  const template = getRegistrationTemplate(user);

  return axios
    .post<IUser, any>(serverPath + 'mailer', {
      email: user.email,
      template,
    })
    .then((result) => console.log(result));
};
