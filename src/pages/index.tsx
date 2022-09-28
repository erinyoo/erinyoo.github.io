/** @jsxImportSource theme-ui */
import React from 'react'
import { Box, Flex } from 'theme-ui';
import Header from '../components/Header';
import { StaticImage } from 'gatsby-plugin-image';
import NavBar from '../components/NavBar';


const IndexPage = () => {
  return (
    <>
      <Box sx={{ width: 250 }}>
        <NavBar />
      </Box>

      <Flex dir={'row'} sx={{ marginTop: 10, marginLeft: 7, marginRight: 7}}>
        <Header title={"Hi, I'm Erin"} />
        <StaticImage alt={"erin!"} src={"../images/erin.png"} width={375} placeholder={"none"} />
      </Flex>
    </>
  )
}

export default IndexPage