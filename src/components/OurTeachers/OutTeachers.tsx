import React, { FC } from 'react';
import styled from 'styled-components';
import 'react-multi-carousel/lib/styles.css';
import { breakpoints } from '../../utils/breakpoints';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import LarisaAlekseevna from '../../images/ourTeachers/1.jpg';
import LudmilaRumyanceva from '../../images/ourTeachers/2.jpg';
import SergeiRumyancev from '../../images/ourTeachers/3.png';
import AlekseiRumyancev from '../../images/ourTeachers/4.jpg';
import TatyanaPodvijenko from '../../images/ourTeachers/5.png';
import NadejdaSmolina from '../../images/ourTeachers/6.jpeg';
import ElmiraShagalina from '../../images/ourTeachers/7.jpeg';
import OlgaStupakova from '../../images/ourTeachers/8.png';
import ElenaEpifancefa from '../../images/ourTeachers/9.jpg';
import SinhiKim from '../../images/ourTeachers/10.png';
import SergeiCherepanov from '../../images/ourTeachers/11.jpeg';
import ValeriiKorol from '../../images/ourTeachers/12.jpeg';
import TatyanaPogonisheva from '../../images/ourTeachers/13.png';
import Bernadckie from '../../images/ourTeachers/14.jpeg';
import LiliyaMitryacova from '../../images/ourTeachers/15.jpeg';
import Ivanovi from '../../images/ourTeachers/16.png';
import OlgaVnukova from '../../images/ourTeachers/17.jpeg';
import ValentinaFufaeva from '../../images/ourTeachers/18.jpeg';
import AleksandrKorostilev from '../../images/ourTeachers/19.jpeg';
import AllaKuznecova from '../../images/ourTeachers/20.jpeg';
import Kovalenkovi from '../../images/ourTeachers/21.jpeg';
import IgorNebesnii from '../../images/ourTeachers/22.png';
import OlgaKrilova from '../../images/ourTeachers/23.jpeg';
import { Typography, Image, Button } from 'antd';

export interface IOurTeam {}

const OurTeamContainer = styled.div`
  padding: 0 2rem;
  max-width: ${breakpoints.lg};
  margin: 2rem auto 0;
  text-align: center;
`;

export interface ITeachers {
  name: string;
  imgPath: string;
}

export const OurTeaches: FC<IOurTeam> = (props: IOurTeam) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    arrows: true,
    // adaptiveHeight: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    // nextArrow: (
    //   <Button type="primary" icon={<DownloadOutlined />} size={'small'} />
    // ),
    // prevArrow: (
    //   <Button type="primary" icon={<DownloadOutlined />} size={'small'} />
    // ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  const ImageContainer = styled.div<{ imgPath: string }>`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-transition: opacity 0.1s linear;
    transition: opacity 0.1s linear;
    background-image: url(${(props) => props.imgPath});
  `;

  const teachers: ITeachers[] = [
    { name: 'Кузьмина Лариса Алексеевна', imgPath: LarisaAlekseevna },
    { name: 'Румянцева Людмила Петровна', imgPath: LudmilaRumyanceva },
    { name: 'Румянцев Сергей Борисович', imgPath: SergeiRumyancev },
    { name: 'Румянцев Алексей Борисович', imgPath: AlekseiRumyancev },
    { name: 'Подвиженко Татьяна Ивановна', imgPath: TatyanaPodvijenko },
    { name: 'Смолина Надежда Борисовна', imgPath: NadejdaSmolina },
    { name: 'Шагалина Эльмира Хабибовна', imgPath: ElmiraShagalina },
    { name: 'Ступакова Ольга Петровна', imgPath: OlgaStupakova },
    { name: 'Епифанцева Елена Романовна', imgPath: ElenaEpifancefa },
    { name: 'Ким Сэн Хи\n', imgPath: SinhiKim },
    { name: 'Черепанов Сергей Васильевич', imgPath: SergeiCherepanov },
    { name: 'Король Валерий Юрьевич', imgPath: ValeriiKorol },
    { name: 'Погонышева Татьяна Владимировна', imgPath: TatyanaPogonisheva },
    {
      name: 'Бернадские Игорь Чаславович и Тамара Борисовна',
      imgPath: Bernadckie,
    },
    { name: 'Митрясова Лилия Витальевна', imgPath: LiliyaMitryacova },
    { name: 'Ивановы Дмитрий Юрьевич и Ольга Владимировна', imgPath: Ivanovi },
    { name: 'Внукова Ольга Степановна', imgPath: OlgaVnukova },
    { name: 'Фуфаева Валентина Николаевна', imgPath: ValentinaFufaeva },
    { name: 'Коростылёв Александр Валерьевич', imgPath: AleksandrKorostilev },
    { name: 'Кузнецова Алла Александровна', imgPath: AllaKuznecova },
    { name: 'Коваленковы Владимир и Евгения', imgPath: Kovalenkovi },
    { name: 'Небесный Игорь Викторович', imgPath: IgorNebesnii },
    { name: 'Крылова Ольга Николаевна', imgPath: OlgaKrilova },
  ];
  return (
    <OurTeamContainer>
      <Typography.Title level={1}>Наши Учителя 💖</Typography.Title>
      <Slider {...settings}>
        {teachers.map(({ name, imgPath }) => {
          return (
            <div>
              <div style={{ margin: '0 1rem' }}>
                <div
                  style={{
                    paddingBottom: '100%',
                    width: '100%',
                    position: 'relative',
                  }}
                >
                  <ImageContainer imgPath={imgPath} />
                </div>
              </div>
              <div style={{ padding: '1rem' }}>
                <Typography.Title level={4}>{name}</Typography.Title>
              </div>
            </div>
          );
        })}
      </Slider>
    </OurTeamContainer>
  );
};
// https://github.com/YIZHUANG/react-multi-carousel
