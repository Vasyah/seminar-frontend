import { IUser } from '../types';
import axios from 'axios';
import { getRegistrationTemplate } from '../helpers/getRegistrationTemplate';

export const createUser = (user: IUser) => {
  const body = { ...user };

  return axios
    .post<IUser, any>('http://localhost:5000/users', { ...body })
    .then((result) => result.data);
};

export const sendRegistrationEmail = (user: IUser) => {
  const template = getRegistrationTemplate(user);

  return axios
    .post<IUser, any>('http://localhost:5000/mailer', {
      email: user.email,
      template,
    })
    .then((result) => console.log(result));
};
