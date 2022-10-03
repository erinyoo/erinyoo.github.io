/** @jsxImportSource theme-ui */
import { Box, Flex } from 'theme-ui';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import LandingImages from '../components/LandingImages';


const IndexPage = () => {

  return (
    <>
      <NavBar />

      <Flex dir={'row'} sx={{ marginTop: 10, marginLeft: 7, marginRight: 7 }}>
        <Header />
        <LandingImages />
      </Flex>
    </>
  )
}

export default IndexPage