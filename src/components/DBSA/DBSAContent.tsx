/** @jsxImportSource theme-ui */
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Box, Flex, Text } from 'theme-ui';
import Title from '../Title';

const DBSAContent = () => {
    const linkCSS = {
        color: 'primary',
        '&.active': {
            color: 'primary',
        },
    }

    return (
        <Box sx={{ width: '80%', position: 'absolute', left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto', paddingBottom: 16 }}>
            <Box sx={{ py: 5 }}>
                <Text sx={{ fontSize: 7, fontWeight: 'header' }}>DBSA Wellness</Text>
            </Box>
            <Flex sx={{ width: '100%', flexDirection: 'column', borderRadius: 8, background: 'linear-gradient(150deg, rgba(155,212,247,0.26514355742296913) 54%, rgba(255,254,252,0.30155812324929976) 95%)', boxShadow: 'rgba(149, 157, 165, 0.1) 0px 8px 24px', px: 7, py: 6 }}>
                <Title title={'Overview'} color={'#007cd4'} />
                <Text sx={{ paddingTop: 3 }}>
                    The DBSA Wellness application was created as part of a 36-hour weekend hackathon organized by Girls in Tech SF Hackathon with the overarching theme of mental health awareness. Our team focused on DBSA SF’s problem statement: how might we remove the barrier of cost and access to care, and empower all individuals to self-manage their mental health?
                </Text>
                <Flex sx={{ paddingTop: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Box sx={{ flexDirection: 'column', width: '30%' }}>
                        <Text sx={{ fontSize: 2, fontWeight: 'header' }}>Role</Text>
                        <Box>Product designer in a team of three other designers.</Box>
                    </Box>
                    <Box sx={{ flexDirection: 'column', width: '60%' }}>
                        <Text sx={{ fontSize: 2, fontWeight: 'header' }}>What I Did</Text>
                        <Box>Product Strategy, Product Vision, User Research, Visual Design, Prototyping, Illustrating</Box>
                    </Box>
                </Flex>
            </Flex>

            <Flex sx={{ width: '100%', flexDirection: 'column', paddingTop: 7 }}>
                <Title title={'The majority of people with clinical mental health challenges do not seek help'} />
                <Text sx={{ paddingTop: 2 }}>We began the hackathon by trying to understand the reasoning behind the statement above. Based on Sapien Lab’s Mental Health Million Project we discovered that generally, people preferred to self-manage their mental health. Looking specifically at the U.S., it’s revealed that 37% of people preferred this due to a lack of confidence in the mental health system. It’s not an unfounded sentiment, one in five Americans is receiving substandard medical care as a result of society’s deeply ingrained stigma against the mentally ill.</Text>
            </Flex>

            <Flex sx={{ width: '100%', flexDirection: 'column', paddingTop: 7 }}>
                <Title title={'Brainstorming for the individual'} />
                <Text sx={{ paddingTop: 2 }}>
                    To help focus our vision and problem understanding we performed a workshop with the team to root out pains individuals may feel while trying to self-manage their mental health. The key points revealed were:
                    <li sx={{ py: 1, paddingTop: 4 }}>Individuals were struggling to begin self-managing due to a lack of knowledge</li>
                    <li sx={{ py: 1 }}>Individuals felt DBSA's resources were difficult to begin using without outside help.</li>
                    <li sx={{ py: 1 }}>Individuals would be more encouraged to continue self-managing with trackable data and daily encouragement.</li>
                </Text>
            </Flex>

            <Flex sx={{ width: '100%', flexDirection: 'column', paddingTop: 7 }}>
                <Title title={'Defining the vision and the solution'} />
                <Text sx={{ paddingTop: 2 }}>
                    Utilizing our understanding of the user, the problem, and also DBSA SF’s business needs, we identified key goals to guide our solution:
                    <li sx={{ py: 1, paddingTop: 4 }}>We want users to feel welcomed, comfortable, and safe when beginning their self-managing journey.</li>
                    <li sx={{ py: 1 }}>We want users to be able to utilize the DBSA’s resources in a simplified manner.</li>
                    <li sx={{ py: 1 }}>We want users to be able to track their progress in some manner.</li>
                </Text>
            </Flex>

            <Flex sx={{ width: '100%', flexDirection: 'column', paddingTop: 7 }}>
                <Title title={'Determining the MVP'} />
                <Text sx={{ paddingTop: 2 }}>
                    Our sketches revealed common features and paths for the product vision and solution. For one, we all decided to focus on a mobile app that’s easily accessible on the go. From there we decided to focus on these user stories:
                    <li sx={{ py: 1, paddingTop: 4 }}><Text sx={{ fontWeight: 'bold' }}>Onboarding guidance</Text> - Users are guided through their initial entry into the application with gentle reminders, comforting language, and an “in case of emergency” button.</li>
                    <li sx={{ py: 1 }}><Text sx={{ fontWeight: 'bold' }}>Recommendations</Text> - Users receive recommendations for resources they can use based on their initial onboarding answers and daily tasks (e.g. DBSA podcasts, free support groups webinars, etc.)</li>
                    <li sx={{ py: 1 }}><Text sx={{ fontWeight: 'bold' }}>Complete their daily wellness wheel</Text> - Users can easily complete the DBSA’s wellness wheel daily and view their wheel history and progress.</li>
                    <li sx={{ py: 1 }}><Text sx={{ fontWeight: 'bold' }}>Schedule support groups</Text> - Users can access support group lists in the app and request links and/or set reminders.</li>
                </Text>
                <Text sx={{ paddingTop: 4 }}>We then nailed down an initial user flow to help map out what screens we’ll need for the final prototype.</Text>
                <Box sx={{ width: '100%' }}><StaticImage src={"../../images/dbsauserflow.png"} alt={"lofi"} width={3500} /></Box>
            </Flex>

            <Flex sx={{ width: '100%', flexDirection: 'column', paddingTop: 7 }}>
                <Title title={'Mapping a jumping off point'} />
                <Text sx={{ paddingTop: 2 }}>
                    The time crunch was beginning to set in at this point in the hackathon. To quickly establish the team on the same page for the final design we mapped out simple layouts, discussed color schemes, and defined our typography library. We did this based off of our research and our interview with DBSA's stakeholders.
                    <Box sx={{ width: '100%' }}><StaticImage src={"../../images/componentslibrary.png"} alt={"lofi"} width={3500} /></Box>
                    <li sx={{ py: 1, paddingTop: 4 }}><Text sx={{ fontWeight: 'bold' }}>Layouts</Text> - The stakeholders revealed to us that they were looking for something simple and easy not only for the user but also by engineering standards.</li>
                    <li sx={{ py: 1 }}><Text sx={{ fontWeight: 'bold' }}>Color scheme</Text> - The stakeholders requested that their blue logo color, <Text sx={{ color: '#009CDC', fontWeight: 'bold' }}>#009CDC</Text> be included in the scheme, we found the color cold so we utilized a warmer white background and integrated the various wellness area coloring schemes.</li>
                </Text>
                <Box sx={{ width: '100%' }}><StaticImage src={"../../images/lofi.png"} alt={"lofi"} /></Box>
            </Flex>

            <Flex sx={{ width: '100%', flexDirection: 'column', paddingTop: 7 }}>
                <Title title={'Final design'} />
                <Text sx={{ paddingTop: 2 }}>
                    During our DBSA stakeholder meeting, we were given a requirement of ensuring that our designs were easy to engineer and easy to maintain. We kept this in mind while prototyping and finalizing parts of our project.
                </Text>
                <Flex sx={{ width: '100%', flexDirection: 'column', paddingTop: 3 }}>
                    <Text sx={{ fontSize: 2, fontWeight: 'bold', paddingTop: 2 }}>Onboarding</Text>
                    <Text sx={{ paddingBottom: 5 }}>We ensured that the questions we asked were intentional and our initial screens explained to users what they were doing. Recommendations were shown immediately after their first onboarding experience.</Text>
                </Flex>
                <Box sx={{ width: '100%' }}><StaticImage src={"../../images/onboarding.png"} alt={"onboarding"} /></Box>
                <Flex sx={{ width: '100%', flexDirection: 'column', paddingTop: 7 }}>
                    <Text sx={{ fontSize: 2, fontWeight: 'bold', paddingTop: 2 }}>Completing the daily wheel areas</Text>
                    <Text sx={{ paddingTop: 2, paddingBottom: 2 }}>We separated each screen to represent a singular question to simplify the experience and show users their results.</Text>
                </Flex>
                <Box sx={{ width: '100%' }}><StaticImage src={"../../images/daily.png"} alt={"daily"} /></Box>
                <Flex sx={{ width: '100%', flexDirection: 'column', paddingTop: 7 }}>
                    <Text sx={{ fontSize: 2, fontWeight: 'bold', paddingTop: 2 }}>Getting support</Text>
                    <Text sx={{ paddingTop: 2, paddingBottom: 2 }}>We integrated the calendar to not only show daily wellness area results, but also show scheduled support groups.</Text>
                </Flex>
                <Box sx={{ width: '100%' }}><StaticImage src={"../../images/support.png"} alt={"support"} /></Box>
                <Text sx={{ paddingTop: 4 }}>
                    Since we found ourselves with a little additional time towards the end of the hackathon we decided to add a small nice-to-have feature: a panda, one of our DBSA stakeholder's favorite animal. Well-being apps can often be impersonal and hefty which is why having a virtual little partner can keep things engaging and light.
                </Text>
                <Box sx={{ width: '100%', paddingTop: 5, paddingBottom: 3 }}><StaticImage src={"../../images/pandas.png"} alt={"lofi"} width={3500} /></Box>
                <Text sx={{ paddingTop: 4 }}>
                    Our final prototype was done in Figma, <Link to={'https://www.figma.com/proto/SZhOtgWIkeM7wUtplERzHE/DBSA-Prototype?page-id=3%3A2&node-id=70%3A3524&viewport=4485%2C-948%2C0.5&scaling=scale-down&starting-point-node-id=70%3A3524'} sx={linkCSS}>please try out the prototype!</Link>
                </Text>
            </Flex>

            <Flex sx={{ width: '100%', flexDirection: 'column', paddingTop: 7 }}>
                <Title title={'Learning, growing, and moving forward'} />
                <Text sx={{ paddingTop: 2 }}>
                    Stuff that I learned from this hackathon.
                </Text>
                <Text sx={{ paddingTop: 4 }}>
                    Stuff that I think can be improved moving forward
                </Text>
            </Flex>
        </Box >
    )
}

export default DBSAContent
