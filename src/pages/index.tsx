/** @jsxImportSource theme-ui */
import { Flex, Box } from 'theme-ui';
import Header from '../components/Header/Header';
import NavBar from '../components/NavBar';
import LandingImages from '../components/LandingImages/LandingImages';
import DBSACard from '../components/DBSACard/DBSACard';
import Footer from '../components/Footer/Footer';
import LandingImagesNarrow from '../components/LandingImages/LandingImagesNarrow';
import HeaderNarrow from '../components/Header/HeaderNarrow';
import LandingImagesMoweb from '../components/LandingImages/LandingImageMoweb';
import HeaderMoweb from '../components/Header/HeaderMoweb';
import DBSACardNarrow from '../components/DBSACard/DBSACardNarrow';
import FooterNarrow from '../components/Footer/FooterNarrow';
import FooterMoweb from '../components/Footer/FooterMoweb';
import DBSACardMoweb from '../components/DBSACard/DBSACardMoweb';
import Wide from '../components/ResponsiveViews/Wide';
import Narrow from '../components/ResponsiveViews/Narrow';
import Moweb from '../components/ResponsiveViews/Moweb';

const IndexPage = () => {

  return (
    <>
      <meta name="viewport" content="width=400, initial-scale=.65" />
      <Wide>
        <Box sx={{ position: 'absolute', zIndex: 3, marginLeft: 'auto', marginRight: 'auto', left: 0, right: 0, width: 1200 }}>
          <NavBar />

          <Flex dir={'row'} sx={{ marginTop: 10, marginLeft: 3, marginRight: 7 }}>
            <Header />
            <LandingImages />
          </Flex>

          <Flex dir={'row'} sx={{ marginTop: 10, marginLeft: 3, marginRight: 7 }}>
            <DBSACard />
          </Flex>
        </Box >

        <Footer />
      </Wide>

      <Narrow>
        <Box sx={{ position: 'absolute', marginLeft: 'auto', marginRight: 'auto', left: 0, right: 0, width: 600 }}>
          <NavBar />

          <Flex dir={'row'} sx={{ marginTop: 10, marginLeft: 3, marginRight: 7 }}>
            <HeaderNarrow />
            <LandingImagesNarrow />
          </Flex>

          <Flex dir={'row'} sx={{ marginTop: 10, marginLeft: 3, marginRight: 7 }}>
            <DBSACardNarrow />
          </Flex>
        </Box >

        <FooterNarrow />
      </Narrow>

      <Moweb>
        <Box sx={{ position: 'absolute', marginLeft: 'auto', marginRight: 'auto', left: 0, right: 0, width: 500 }}>
          <NavBar />
          <LandingImagesMoweb />
          <HeaderMoweb />
          <DBSACardMoweb />
        </Box >

        <FooterMoweb />
      </Moweb>
    </>
  )
}

export default IndexPage

export const Head = () => {
  return (
    <>
      <title>Erin Yoo</title>
    </>
  );
};