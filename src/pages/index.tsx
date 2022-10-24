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


const IndexPage = () => {

  return (
    <>
      <div sx={{
        '@media screen and (max-width: 1300px)': {
          display: 'none',
        }
      }} >
        <Box sx={{ position: 'absolute', marginLeft: 'auto', marginRight: 'auto', left: 0, right: 0, width: 1200 }}>
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
      </div>

      <div sx={{
        '@media screen and (min-width: 1299px), (max-width: 700px)': {
          display: 'none',
        }
      }} >
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
      </div>

      <div sx={{
        '@media screen and (min-width: 699px)': {
          display: 'none',
        }
      }} >
        <Box sx={{ position: 'absolute', marginLeft: 'auto', marginRight: 'auto', left: 0, right: 0, width: 500 }}>
          <NavBar />
          <LandingImagesMoweb />
          <HeaderMoweb />
          <DBSACardMoweb />
        </Box >

        <FooterMoweb />
      </div>
    </>
  )
}

export default IndexPage