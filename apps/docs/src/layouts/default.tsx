import React from 'react';
import { Container } from '@nextui-org/react';
import { NotifyBanner } from '@components';
import { Route } from '@lib/docs/page';
import Header from './header';
import Footer from './footer';
import Navbar from './navbar';

export interface Props {
  routes: Route[];
  currentRoute?: Route;
  tag?: string;
  slug?: string;
}

const DefaultLayout: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  routes
}) => {
  return (
    <div id="app-container">
      <Header />
      <NotifyBanner text="Popover component" href="/docs/components/popover" />
      <Navbar isHome hasNotify routes={routes} />
      <Container
        lg={true}
        id="main-container"
        display="flex"
        as="main"
        alignContent="space-between"
        className="main-container"
        css={{
          position: 'relative',
          minHeight: '100vh',
          '@mdMax': {
            overflowX: 'hidden'
          }
        }}
      >
        {children}
        <Footer />
      </Container>
    </div>
  );
};

export default DefaultLayout;
