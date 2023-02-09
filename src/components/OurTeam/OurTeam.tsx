import React, { FC } from 'react';
import { Avatar, Col, Row, Typography } from 'antd';
import styled from 'styled-components';
import Link from 'antd/es/typography/Link';
import { breakpoints } from '../../utils/breakpoints';
import daria from '../../images/ourTeam/1.png';
import sasha from '../../images/ourTeam/2.png';
import natalia from '../../images/ourTeam/3.png';
import synhi from '../../images/ourTeam/4.png';
import olya from '../../images/ourTeam/5.png';
import vasya from '../../images/ourTeam/6.png';
import ksusha from '../../images/ourTeam/7.png';
import nastya from '../../images/ourTeam/8.png';
import andrei from '../../images/ourTeam/9.png';
import { useWindowSize } from '../../hooks/useSize';

export interface IOurTeam {}

const OurTeamContainer = styled.div`
  max-width: ${breakpoints.md};
  margin: 2rem auto 0;
  text-align: center;
`;

export interface IMember {
  name: string;
  imgPath: string;
  description?: string;
  status?: string;
  phone?: string;
  phoneLink?: string;
  telegram?: string;
  isMain: boolean;
}

const members: IMember[] = [
  {
    name: 'Куценко Дарья',
    imgPath: daria,
    isMain: true,
  },
  {
    name: 'Гофман Александр',
    imgPath: sasha,
    isMain: true,
  },

  {
    name: 'Карюк Наталья',
    imgPath: natalia,
    description: 'Вопросы расселения',
    isMain: true,
  },
  {
    name: 'Ким Сын Хи',
    imgPath: synhi,
    description: 'Вопросы питания',
    isMain: true,
  },
  {
    name: 'Козловский Андрей',
    imgPath: andrei,
    status: '',
    isMain: true,
  },
  {
    name: 'Князева Ольга',
    imgPath: olya,
    description: 'Организационные вопросы',
    status: '',
    phone: '8(909)976-87-67',
    phoneLink: 'tel:+79099768767',
    telegram: 'olyaolyaru',
    isMain: false,
  },
  {
    name: 'Гойдин Василий',
    imgPath: vasya,
    description: 'Организационные вопросы',
    status: '',
    phone: '8(913)371-27-49',
    phoneLink: 'tel:+79133712749',
    telegram: 'vasyahG',
    isMain: false,
  },
  {
    name: 'Дьяконова Ксения',
    imgPath: ksusha,
    description: 'Администратор канала',
    status: '',
    phone: '8(916)151-52-63',
    phoneLink: 'tel:+79161515263',
    telegram: 'kseniadobraya',
    isMain: false,
  },
  {
    name: 'Назаренко Анастасия',
    imgPath: nastya,
    description: 'Организация трансфера',
    status: '',
    phone: '8(964)573-94-97',
    phoneLink: 'tel:+79645739497',
    telegram: 'anastasia23051',
    isMain: false,
  },
];

export const OurTeam: FC<IOurTeam> = (props: IOurTeam) => {
  const size = useWindowSize();

  return (
    <OurTeamContainer>
      <div style={{ padding: '0 10px' }}>
        <Typography.Title level={size > 2 ? 2 : 4}>
          Команда организаторов
        </Typography.Title>
        <Typography.Title level={size > 2 ? 3 : 5}>
          Мы будем рады ответить на любой вопрос!
        </Typography.Title>
      </div>
      <Row gutter={[16, 16]} className={'mt-3'} justify={'center'}>
        {members.map(
          (
            { description, imgPath, isMain, name, phone, phoneLink, telegram },
            index,
          ) => (
            // eslint-disable-next-line react/no-array-index-key
            <Col key={Math.random()} span={8} xs={24} md={12} lg={8}>
              <Avatar size={200} key={index} src={imgPath} className={'mb-2'} />
              <Typography.Title level={4}>{name}</Typography.Title>
              {isMain && (
                <Typography.Title level={5}>
                  Главный организатор
                </Typography.Title>
              )}
              <Typography.Paragraph>{description}</Typography.Paragraph>
              {phone && phoneLink && (
                <Typography.Paragraph>
                  Телефон:
                  <Link href={phoneLink} target={'_blank'}>
                    {phone}
                  </Link>
                </Typography.Paragraph>
              )}
              {telegram && (
                <Typography.Paragraph>
                  Телеграм:
                  <Link href={`https://t.me/${telegram}`} target={'_blank'}>
                    @{telegram}
                  </Link>
                </Typography.Paragraph>
              )}
            </Col>
          ),
        )}
      </Row>
    </OurTeamContainer>
  );
};
