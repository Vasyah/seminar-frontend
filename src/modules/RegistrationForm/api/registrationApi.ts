import { IUser } from '../types';
import axios from 'axios';
import { getRegistrationTemplate } from '../helpers/getRegistrationTemplate';

export class RegistrationApi {
  private static serverPath = 'https://seminarmsk.ru:7000/';

  static createUser = (user: IUser) => {
    const body = { ...user };

    return axios.post<IUser, any>(this.serverPath + 'users', { ...body });
  };

  static updateUser = (id: number | undefined, user: Partial<IUser>) => {
    const body = { ...user };

    if (!id) return;
    return axios.patch<void, any>(this.serverPath + 'users/' + `${id}`, {
      ...body,
    });
  };

  static sendRegistrationEmail = (user: IUser) => {
    const template = getRegistrationTemplate(user);

    return axios.post<IUser, any>(this.serverPath + 'mailer', {
      email: user.email,
      template,
    });
  };

  static getUsers = () => {
    return axios.get(this.serverPath + 'users', {});
  };
}
