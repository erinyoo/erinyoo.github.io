/** @jsxImportSource theme-ui */
import { Flex } from 'theme-ui';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import LandingImages from '../components/LandingImages';
import DBSACard from '../components/DBSACard';


const IndexPage = () => {

  return (
    <>
      <NavBar />

      <Flex dir={'row'} sx={{ marginTop: 10, marginLeft: 3, marginRight: 7 }}>
        <Header />
        <LandingImages />
      </Flex>

      <Flex dir={'row'} sx={{ marginTop: 10, marginLeft: 3, marginRight: 7 }}>
        <DBSACard />
      </Flex>
    </>
  )
}

export default IndexPage