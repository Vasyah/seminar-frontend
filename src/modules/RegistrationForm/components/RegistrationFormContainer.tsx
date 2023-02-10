import React, { FC } from 'react';
import { RegistrationFormView } from './RegistrationFormView';
import { ITeachers } from '../../../components/OurTeachers/OutTeachers';

export interface IRegistrationFormContainer {
  onEmailSent(): void;

  setLoading(state: boolean): void;
}

export const RegistrationFormContainer: FC<IRegistrationFormContainer> = ({
  onEmailSent,
  setLoading,
}: IRegistrationFormContainer) => {
  const teachers: Pick<ITeachers, 'name'>[] = [
    { name: 'Румянцева Людмила Петровна' },
    { name: 'Румянцев Сергей Борисович' },
    { name: 'Румянцев Алексей Борисович' },
    { name: 'Подвиженко Татьяна Ивановна' },
    { name: 'Смолина Надежда Борисовна' },
    { name: 'Шагалина Эльмира Хабибовна' },
    { name: 'Ступакова Ольга Петровна' },
    { name: 'Епифанцева Елена Романовна' },
    { name: 'Ким Сэн Хи\n' },
    { name: 'Черепанов Сергей Васильевич' },
    { name: 'Король Валерий Юрьевич' },
    { name: 'Погонышева Татьяна Владимировна' },
    {
      name: 'Бернадские Игорь Чаславович и Тамара Борисовна',
    },
    { name: 'Митрясова Лилия Витальевна' },
    { name: 'Ивановы Дмитрий Юрьевич и Ольга Владимировна' },
    { name: 'Внукова Ольга Степановна' },
    { name: 'Фуфаева Валентина Николаевна' },
    { name: 'Коростылёв Александр Валерьевич' },
    { name: 'Кузнецова Алла Александровна' },
    { name: 'Коваленковы Владимир и Евгения' },
    { name: 'Небесный Игорь Викторович' },
    { name: 'Крылова Ольга Николаевна' },
  ];

  const cities = [
    'Москва',
    'Санкт-Петербург',
    'Новосибирск',
    'Екатеринбург',
    'Казань',
    'Нижний Новгород',
    'Челябинск',
    'Самара',
    'Омск',
    'Ростов-на-Дону',
    'Уфа',
    'Красноярск',
    'Воронеж',
    'Краснодар',
    'Пермь',
    'Волгоград',
    'Саратов',
    'Тюмень',
    'Тольятти',
    'Самара',
    'Ижевск',
    'Мюнхен',
  ];

  return (
    <RegistrationFormView
      teachers={teachers}
      cities={cities}
      onEmailSent={onEmailSent}
      setLoading={setLoading}
    />
  );
};
