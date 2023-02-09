import { IUser } from '../types';
import axios from 'axios';
import { getRegistrationTemplate } from '../helpers/getRegistrationTemplate';

export class RegistrationApi {
  private static serverPath = 'http://seminarmsk.ru:7000/';

  static createUser = (user: IUser) => {
    const body = { ...user };

    return axios
      .post<IUser, any>(this.serverPath + 'users', { ...body })
      .then((result) => result.data);
  };

  static sendRegistrationEmail = (user: IUser) => {
    const template = getRegistrationTemplate(user);

    return axios
      .post<IUser, any>(this.serverPath + 'mailer', {
        email: user.email,
        template,
      })
      .then((result) => console.log(result));
  };

  static getUsers = () => {
    return axios
      .get(this.serverPath + 'users', {})
      .then((result) => console.log(result))
      .catch((e) => console.error(e));
  };
}
