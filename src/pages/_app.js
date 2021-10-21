import Head from 'next/head';
import React, {useState} from 'react';
// import wrap from '../core/config/redux';
import PropTypes from 'prop-types';
import { RecoilRoot } from 'recoil';
import '../style/style.css'


const App = ({ Component }) => (

    <>
        <Head>
            <meta charSet="utf-8" />
            <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
            />
            <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
            <script>
                Kakao.init('178a2bb850640c5dee765d4a93e39bfb');
            </script>
            <title>스우파 과몰입꾼 테스트</title>
        </Head>
        <RecoilRoot>
            <Component />
        </RecoilRoot>
      {/* <GlobalStyle />
      <Normalize /> */}
    </>
  );
  
  App.propTypes = {
    Component: PropTypes.elementType.isRequired,
  };
  
//   export default wrap.withRedux(App);
export default App