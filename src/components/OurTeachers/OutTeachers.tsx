import React, { FC } from 'react';
import { Avatar, Button, Space, Typography } from 'antd';
import styled from 'styled-components';
import Link from 'antd/es/typography/Link';

import banner from './banner.jpg';
import { breakpoints } from '../../utils/breakpoints';

export interface IOurTeam {}

const OurTeamContainer = styled.div`
  max-width: ${breakpoints.md};
  margin: 2rem auto 0;
  text-align: center;
`;

const members = [
  {
    name: 'Гойдин Василий',
    imgPath: banner,
    description: 'Организационные вопросы',
    status: '',
    phone: '8(913)371-27-49',
    telegram: 'vasyahG',
    isMain: true,
  },
  {
    name: 'Гойдин Василий',
    imgPath: banner,
    description: 'Организационные вопросы',
    status: '',
    phone: '8(913)371-27-49',
    telegram: 'vasyahG',
    isMain: true,
  },
  {
    name: 'Гойдин Василий',
    imgPath: banner,
    description: 'Организационные вопросы',
    status: '',
    phone: '8(913)371-27-49',
    telegram: 'vasyahG',
    isMain: true,
  },
  {
    name: 'Гойдин Василий',
    imgPath: banner,
    description: 'Организационные вопросы',
    status: '',
    phone: '8(913)371-27-49',
    telegram: 'vasyahG',
    isMain: true,
  },
  {
    name: 'Гойдин Василий',
    imgPath: banner,
    description: 'Организационные вопросы',
    status: '',
    phone: '8(913)371-27-49',
    telegram: 'vasyahG',
    isMain: true,
  },
  {
    name: 'Гойдин Василий',
    imgPath: banner,
    description: 'Организационные вопросы',
    status: '',
    phone: '8(913)371-27-49',
    telegram: 'vasyahG',
    isMain: true,
  },
  {
    name: 'Гойдин Василий',
    imgPath: banner,
    description: 'Организационные вопросы',
    status: '',
    phone: '8(913)371-27-49',
    telegram: 'vasyahG',
    isMain: true,
  },
  {
    name: 'Гойдин Василий',
    imgPath: banner,
    description: 'Организационные вопросы',
    status: '',
    phone: '8(913)371-27-49',
    telegram: 'vasyahG',
    isMain: true,
  },
  {
    name: 'Гойдин Василий',
    imgPath: banner,
    description: 'Организационные вопросы',
    status: '',
    phone: '8(913)371-27-49',
    telegram: 'vasyahG',
    isMain: true,
  },
];

export const OurTeam: FC<IOurTeam> = (props: IOurTeam) => {
  return (
    <OurTeamContainer>
      <Typography.Title level={1}>Команда организаторов</Typography.Title>
      <Typography.Title level={3}>
        Мы будем рады ответить на любой вопрос!
      </Typography.Title>
      <Space size={[64, 32]} wrap>
        {members.map((member, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div>
            <Avatar size={200} key={index} src={member.imgPath}>
              Button
            </Avatar>
            <Typography.Title level={4}>{member.name}</Typography.Title>
            {member.isMain && (
              <Typography.Title level={5}>Главный организатор</Typography.Title>
            )}
            <Typography.Paragraph>{member.description}</Typography.Paragraph>
            <Typography.Paragraph>
              Телефон:
              <Link href={'tel:+79133712749'} target={'_blank'}>
                {member.phone}
              </Link>
            </Typography.Paragraph>
            <Typography.Paragraph>
              Телеграм:
              <Link href={`https://t.me/${member.telegram}`} target={'_blank'}>
                @{member.telegram}
              </Link>
            </Typography.Paragraph>
          </div>
        ))}
      </Space>
    </OurTeamContainer>
  );
};
