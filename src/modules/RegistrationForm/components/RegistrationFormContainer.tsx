import React, { FC } from 'react';
import { RegistrationFormView } from './RegistrationFormView';
import LarisaAlekseevna from '../../../images/ourTeachers/1.jpg';
import LudmilaRumyanceva from '../../../images/ourTeachers/2.jpg';
import SergeiRumyancev from '../../../images/ourTeachers/3.png';
import AlekseiRumyancev from '../../../images/ourTeachers/4.jpg';
import TatyanaPodvijenko from '../../../images/ourTeachers/5.png';
import NadejdaSmolina from '../../../images/ourTeachers/6.jpeg';
import ElmiraShagalina from '../../../images/ourTeachers/7.jpeg';
import OlgaStupakova from '../../../images/ourTeachers/8.png';
import ElenaEpifancefa from '../../../images/ourTeachers/9.jpg';
import SinhiKim from '../../../images/ourTeachers/10.png';
import SergeiCherepanov from '../../../images/ourTeachers/11.jpeg';
import ValeriiKorol from '../../../images/ourTeachers/12.jpeg';
import TatyanaPogonisheva from '../../../images/ourTeachers/13.png';
import Bernadckie from '../../../images/ourTeachers/14.jpeg';
import LiliyaMitryacova from '../../../images/ourTeachers/15.jpeg';
import Ivanovi from '../../../images/ourTeachers/16.png';
import OlgaVnukova from '../../../images/ourTeachers/17.jpeg';
import ValentinaFufaeva from '../../../images/ourTeachers/18.jpeg';
import AleksandrKorostilev from '../../../images/ourTeachers/19.jpeg';
import AllaKuznecova from '../../../images/ourTeachers/20.jpeg';
import Kovalenkovi from '../../../images/ourTeachers/21.jpeg';
import IgorNebesnii from '../../../images/ourTeachers/22.png';
import OlgaKrilova from '../../../images/ourTeachers/23.jpeg';
import { ITeachers } from '../../../components/OurTeachers/OutTeachers';

export interface IRegistrationFormContainer {}

export const RegistrationFormContainer: FC<IRegistrationFormContainer> = (
  props: IRegistrationFormContainer,
) => {
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
  return <RegistrationFormView teachers={teachers} />;
};
