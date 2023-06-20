/** @jsxImportSource theme-ui */
import "../../theme/styles.scss"

const About = () => {
    // const linkCSS = {
    //     color: 'primary',
    //     '&.active': {
    //         color: 'primary',
    //     },
    // }

    return (
        <div className="aboutcontent" sx={{ fontSize: 2 }}>
            I'm a frontend dev turned product designer who's currently at Microsoft. I'm a designer that appreciates the aesthetics, constantly craves the next challenge, and of course has a love for creating for the user.
        </div>
        // <Box sx={{ width: '70%', position: 'absolute', left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto' }}>
        //     <Flex sx={{ flexDirection: 'row' }}>
        //         <Box sx={{ width: '60%', textAlign: 'center', marginRight: 4 }}>
        //             <StaticImage src={"../../images/abouterin.png"} alt={"About Erin"} placeholder={'none'} width={600} />
        //             <Text sx={{ fontWeight: 'bold', fontSize: 3 }}>hello@erinyoo.com</Text>
        //             <Box>
        //                 <Link to="https://dribbble.com/erinyoo" activeClassName="active" sx={linkCSS}>
        //                     <StaticImage sx={{ margin: 2 }} src={"../../images/Dribbble.png"} alt={"Dribbble"} placeholder={'none'} width={24} />
        //                 </Link>
        //                 <Link to="https://www.linkedin.com/in/erinyoo/" activeClassName="active" sx={linkCSS}>
        //                     <StaticImage sx={{ margin: 2 }} src={"../../assets/LinkedIn.svg"} alt={"LinkedIn"} placeholder={'none'} width={22} />
        //                 </Link>
        //             </Box>
        //         </Box>
        //         <Box sx={{ fontSize: 2, width: '100%' }}>
        //             <AboutParagraph />

        //             <Box sx={{ width: '30%', marginBottom: 6 }}></Box><StaticImage src={"../../images/erinandeevee.png"} alt={"Erin and Eevee"} placeholder={'none'} width={700} />
        //         </Box>
        //     </Flex>
        // </Box>
    )
}

export default About
