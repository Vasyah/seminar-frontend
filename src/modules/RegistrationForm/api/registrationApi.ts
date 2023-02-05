import { IUser } from '../types';
import axios from 'axios';
import { getRegistrationTemplate } from '../helpers/getRegistrationTemplate';

const serverPath = 'http://62.217.183.154:7000/';

export const createUser = (user: IUser) => {
  const body = { ...user };

  return axios
    .post<IUser, any>(serverPath + 'users', { ...body })
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
