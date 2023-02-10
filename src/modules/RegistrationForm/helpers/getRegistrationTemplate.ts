import { IUser } from '../types';
import { getTemplate } from './getTemplate';

export const getRegistrationTemplate = (user: IUser): string => {
  const getCoordinator = (town: string) => {
    switch (town) {
      case 'Москва':
        return 'Пяткина Юлия (Телефон: 8(903)362-64-69).';
      case 'Калининград':
      case 'Новороссийск':
      case 'Воронеж':
      case 'Пенза':
      case 'Краснодар':
        return 'Карюк Наталья (Телефон: 8(925)845-04-61).';
      case 'Санкт-Петербург':
        return 'Князева Ольга (Телефон: 8(909)976-87-67).';
      case 'Новосибирск':
        return 'Гойдина Ольга (Телефон: 8(913)738-94-54).';
      case 'Тольятти':
      case 'Самара':
        return 'Шагалина Эльмира (Телефон: 8(919)814-45-66).';
      case 'Тюмень':
      case 'Казань':
      case 'Нижний Новгород':
        return 'Дарья Куценко (Телефон: 8(916)206-78-72).';
      default:
        return 'Князева Ольга (Телефон: 8(909)976-87-67).';
    }
  };

  const getPaymentType = (town: string) => {
    switch (town) {
      case 'Москва':
        return '<span style="font-size:17px">Перевод денежных средств на карту Пяткиной Юлии Викторовне:</span><br /><span style="font-size:17px">* Сбербанк 2202 2005 4351 6247</span><br /><span style="font-size:17px">* ВТБ 4893 4702 4150 2183</span><p>* Альфа-банк 4790 8720 5271 4167</span>';
      case 'Калининград':
      case 'Новороссийск':
      case 'Воронеж':
      case 'Пенза':
      case 'Краснодар':
        return '<span style="font-size:17px">Перевод денежных средств на карту координатора:</span><br /><span style="font-size:17px">* Сбер - 6390 0240 9054 8624 26</span>';
      case 'Санкт-Петербург':
        return '<span style="font-size:17px">Перевод денежных средств на карту координатора:</span><br /><span style="font-size:17px">* Тинькофф - 5536 9138 0674 3502</span><br /><span style="font-size:17px">* Сбер - 2202 2014 4414 6118</span>';
      case 'Новосибирск':
        return '<span style="font-size:17px">Перевод денежных средств на карту координатора:</span><br /><span style="font-size:17px">* Сбербанк - по номеру телефона 8(913)738-94-54</span><br /><span style="font-size:17px">* Открытие- по номеру телефона 8(913)738-94-54</span>';
      case 'Тольятти':
      case 'Самара':
        return '<span style="font-size:17px">Перевод денежных средств на карту координатора:</span><br /><span style="font-size:17px">* Сбербанк - по номеру телефона 8(919)814-45-66</span><br /><span style="font-size:17px">* Оплата наличными координатору.</span>';
      case 'Тюмень':
      case 'Казань':
      case 'Нижний Новгород':
        return '<span style="font-size:17px">Перевод денежных средств на карту координатора:</span><br /><span style="font-size:17px">* Сбербанк - по номеру телефона 8(925)845-04-61</span>';
      default:
        return '<span style="font-size:17px">Перевод денежных средств на карту координатора:</span><br /><span style="font-size:17px">* Тинькофф - 5536 9138 0674 3502</span><span style="font-size:17px">* Сбер - 2202 2014 4414 6118</span>';
    }
  };

  const isTeacher = user.status === 'Учитель';
  const coordinator = getCoordinator(user.town);
  const paymentAttention = `<p style='font-size:17px'>Для подтверждения участия в Семинаре, необходимо произвести <b style='color: red;text-decoration:underline'>оплату до 10 марта 2023г.</b>, по указанным реквизитам:</p>`;
  const paymentType = getPaymentType(user.town);

  const template = getTemplate(
    user,
    coordinator,
    paymentAttention,
    paymentType,
    isTeacher,
  );

  return template;
};
