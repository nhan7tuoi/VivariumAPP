import React from 'react';
import LoginNavigation from './LoginNavigation';
import TabNavigation from './TabNavigation';
import { useSelector } from 'react-redux';

const MainNavigation = () => {
  const auth = useSelector(state => state.auth);
  return (
    <>
      {auth.accessToken ? <TabNavigation /> : <LoginNavigation />}
    </>
  );
}

export default MainNavigation;
