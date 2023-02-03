import React, { FC } from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Banner } from '../Banner/Banner';

export interface ILayout {}

export const Layout: FC<ILayout> = (props: ILayout) => {
  return (
    <>
      <Layout></Layout>
      <Banner />
      {/*<QueueAnim key="QueueAnim" type={['bottom', 'top']} delay={200}>*/}

      {/*</QueueAnim>*/}
    </>
  );
};
