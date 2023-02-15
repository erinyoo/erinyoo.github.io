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
            <Flex sx={{ py: 5, flexDirection: 'column', justifyContent: 'center' }}>
                <Box sx={{ width: '30%' }}>
                    <Text sx={{ fontSize: 7, fontWeight: 'header' }}>DBSA Wellness</Text>
                </Box>
                <Box sx={{ width: '90%', alignSelf: 'center', justifyContent: 'center' }}><StaticImage src={"../../images/dbsacover.png"} alt={"cover"} placeholder={'none'} /></Box>
            </Flex>

            <Flex sx={{ width: '100%', flexDirection: 'column', borderRadius: 8, background: 'linear-gradient(150deg, rgba(155,212,247,0.26514355742296913) 54%, rgba(255,254,252,0.30155812324929976) 95%)', boxShadow: 'rgba(149, 157, 165, 0.1) 0px 8px 24px', px: 7, py: 6 }}>
                <Title title={'Overview'} color={'#007cd4'} />
                <Text sx={{ paddingTop: 3 }}>
                    The DBSA Wellness application was created as part of a 36-hour weekend hackathon organized by Girls in Tech SF. The overarching theme of the weekend focused on mental health awareness, and our team focused on DBSA SF’s problem statement: how might we remove the barrier of cost and access to care, and empower all individuals to self-manage their mental health?
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
                <Link sx={{ textDecoration: 'none' }} to={'https://www.figma.com/proto/SZhOtgWIkeM7wUtplERzHE/DBSA-Prototype?page-id=3%3A2&node-id=27%3A3309&viewport=4485%2C-948%2C0.5&scaling=scale-down&starting-point-node-id=70%3A3524'}>
                    <Box sx={{ marginTop: 5, color: '#007cd4', padding: 3, borderRadius: 9, border: '2px solid #007cd4', width: '30%', textAlign: 'center', fontWeight: 'bold' }}>See the final prototype</Box>
                </Link>
            </Flex>

            <Flex sx={{ width: '100%', flexDirection: 'column', paddingTop: 7 }}>
                <Title title={'The majority of people with clinical mental health challenges do not seek help'} />
                <Text sx={{ paddingTop: 2 }}>
                    <Link sx={linkCSS} to={'https://mentalstateoftheworld.report/wp-content/uploads/2021/05/Rapid-Report-2021-Help-Seeking.pdf'}>Sapien Lab's Mental Health Million Project</Link> revealed that people actually preferred to self-manage their mental health. Looking specifically at data from the U.S., 37% of people preferred this due to a lack of confidence in the mental health system. What's deeply saddening to me is knowing that it's not an unfounded sentiment. <Link sx={linkCSS} to={'https://www.publichealth.columbia.edu/public-health-now/news/too-often-doctors-stigmatize-people-living-mental-illness'}>One in five Americans is receiving substandard medical care as a result of society's deeply ingrained stigma against the mentally ill</Link>. Understanding the state of mental health illnesses in the U.S. makes DBSA's values and
                </Text>
            </Flex>

            <Flex sx={{ width: '100%', flexDirection: 'column', paddingTop: 7 }}>
                <Title title={'Brainstorming for the individual'} />
                <Text sx={{ paddingTop: 2 }}>
                    To help focus our vision and problem understanding we performed a workshop with the team to root out pains individuals may feel while trying to self-manage their mental health, particularly with DBSA's resources. The key points revealed were:
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
                <Box sx={{ width: '100%' }}><StaticImage src={"../../images/featuresketching.png"} alt={"featuresketch"} placeholder={'none'} /></Box>
                <Text sx={{ paddingTop: 2 }}>
                    Through some sketching, a little competitive analysis (Happify, Finch, Calm, & MindShift), and brainstorming we solidified the features and direction of the MVP. We decided to focus on a mobile app that’s easily accessible on the go. From there we prioritized our app's features:
                    <li sx={{ py: 1, paddingTop: 4 }}><Text sx={{ fontWeight: 'bold' }}>Onboarding guidance</Text> - Users are guided through their initial entry into the application with gentle reminders, comforting language, and an “in case of emergency” button.</li>
                    <li sx={{ py: 1 }}><Text sx={{ fontWeight: 'bold' }}>Recommendations</Text> - Users receive recommendations for resources they can use based on their initial onboarding answers and daily tasks (e.g. DBSA podcasts, free support groups webinars, etc.)</li>
                    <li sx={{ py: 1 }}><Text sx={{ fontWeight: 'bold' }}>Complete their daily wellness wheel</Text> - Users can easily complete the DBSA’s wellness wheel daily and view their wheel history and progress.</li>
                    <li sx={{ py: 1 }}><Text sx={{ fontWeight: 'bold' }}>Schedule support groups</Text> - Users can access support group lists in the app and request links and/or set reminders.</li>
                </Text>
                <Text sx={{ paddingTop: 4 }}>Then we nailed down an initial user flow to help us not only map out what screens we'd need, but also give us a sense of the final prototype.</Text>
                <Box sx={{ width: '100%' }}><StaticImage src={"../../images/dbsauserflow.png"} alt={"lofi"} width={3500} /></Box>
            </Flex>

            <Flex sx={{ width: '100%', flexDirection: 'column', paddingTop: 7 }}>
                <Title title={'Mapping a jumping off point'} />
                <Box sx={{ width: '100%' }}><StaticImage src={"../../images/componentslibrary.png"} alt={"lofi"} width={3500} /></Box>
                <Text sx={{ paddingTop: 2 }}>
                    At around this time in the hackathon we were realizing how little time we had left. To quickly establish the team on the same ground for the final design we mapped out simple layouts, discussed color schemes, and defined our typography library.
                    <li sx={{ py: 1, paddingTop: 4 }}><Text sx={{ fontWeight: 'bold' }}>Layouts</Text> - DBSA requested that the design not only be simple for the users, but also for the engineers, constant maintenance is difficult as a non-profit organization.</li>
                    <li sx={{ py: 1 }}><Text sx={{ fontWeight: 'bold' }}>Color scheme</Text> - DBSA also requested that their blue logo color, <Text sx={{ color: '#009CDC', fontWeight: 'bold' }}>#009CDC</Text>, be utilized in some way. Blue can often read as a cold color, so added it as an accent color with a warmer white background.</li>
                </Text>
                <Box sx={{ width: '100%' }}><StaticImage src={"../../images/lofi.png"} alt={"lofi"} /></Box>
            </Flex>

            <Flex sx={{ width: '100%', flexDirection: 'column', paddingTop: 7 }}>
                <Title title={'Final design'} />
                <Flex sx={{ width: '100%', flexDirection: 'column', paddingTop: 3 }}>
                    <Text sx={{ fontSize: 2, fontWeight: 'bold', paddingTop: 2 }}>Onboarding & Recommendations</Text>
                    <Text sx={{ paddingBottom: 5 }}>These questions, accompanied by explanation screens, are meant to ease the user into the experience. Finishing the onboarding process then provides first-time users recommendations.</Text>
                </Flex>
                <Box sx={{ width: '100%' }}><StaticImage src={"../../images/onboarding.png"} alt={"onboarding"} /></Box>
                <Flex sx={{ width: '100%', flexDirection: 'column', paddingTop: 7 }}>
                    <Text sx={{ fontSize: 2, fontWeight: 'bold', paddingTop: 2 }}>Completing the daily wheel areas</Text>
                    <Text sx={{ paddingTop: 2, paddingBottom: 2 }}>Per each wellness area, we simplified the experience to not only be interactive, but also guide users through the questionnaire. Results at the end are then saved to look back on and track.</Text>
                </Flex>
                <Box sx={{ width: '100%' }}><StaticImage src={"../../images/daily.png"} alt={"daily"} /></Box>
                <Flex sx={{ width: '100%', flexDirection: 'column', paddingTop: 7 }}>
                    <Text sx={{ fontSize: 2, fontWeight: 'bold', paddingTop: 2 }}>Getting support</Text>
                    <Text sx={{ paddingTop: 2, paddingBottom: 2 }}>Support groups have their own dedicated area where users can schedule groups. The calendar not only aids in reminding users about upcoming groups, but also as a tracker for previous wellness wheels.</Text>
                </Flex>
                <Box sx={{ width: '100%' }}><StaticImage src={"../../images/support.png"} alt={"support"} /></Box>
                <Text sx={{ paddingTop: 4 }}>
                    Since we found ourselves with a little additional time towards the end of the hackathon we decided to add a small nice-to-have feature: a panda, one of our DBSA stakeholder's favorite animal. Well-being apps can often be impersonal and hefty which is why having a virtual little partner can keep things engaging and light.
                </Text>
                <Box sx={{ width: '100%', paddingTop: 5, paddingBottom: 3 }}><StaticImage src={"../../images/pandas.png"} alt={"lofi"} width={3500} /></Box>
            </Flex>

            <Flex sx={{ width: '100%', flexDirection: 'column', paddingTop: 7 }}>
                <Title title={'Learning, growing, and moving forward'} />
                <Text sx={{ paddingTop: 2 }}>
                    The hackathon was an opportunity to put all the product designing processes to the test. On paper it's straightforward and understandable, but in practice it's anything but. Working on a team, especially a team of strangers, did nothing more than add to the complexity of getting to the end goal. The weekend definitely sped by faster than I realized, and looking back at it I'm incredibly grateful for the team I found, new connections I've built, and the newfound determination to really practice and get better. Some key takeaways for me:
                    <li sx={{ py: 1, paddingTop: 4 }}><Text sx={{ fontWeight: 'bold' }}>Teamwork is complicated but rewarding.</Text> Open communication and active listening was so important especially since we were all complete strangers. Learning to say "YES, AND..."</li>
                    <li sx={{ py: 1 }}><Text sx={{ fontWeight: 'bold' }}>Prioritizing prioritizing.</Text> Yes I wrote the word twice. This was key to getting things done, especially in such a short amount of time. As much as we wanted to do ALL the great ideas we came up with, we couldnt. And that's okay (for now).</li>
                    <li sx={{ py: 1 }}><Text sx={{ fontWeight: 'bold' }}>Presentation makes perfection.</Text> Although not winners at the hackathon, we were winners in our hearts. We debriefed after awards ceremony and agreed that our presentation was lackluster. In the end, that is really all the stakeholders or judges will see.</li>
                </Text>
                <Text sx={{ paddingTop: 4 }}>
                    In terms of the product itself, there's always room for improvement. These specific areas were something we thought were important to note for the future.
                    <li sx={{ py: 1, paddingTop: 4 }}><Text sx={{ fontWeight: 'bold' }}>Copywriting & tone</Text></li>
                    <li sx={{ py: 1 }}><Text sx={{ fontWeight: 'bold' }}>Accessibility for all ages (18-80)</Text></li>
                    <li sx={{ py: 1 }}><Text sx={{ fontWeight: 'bold' }}>Flushed out character design</Text></li>
                </Text>
                <Text sx={{ paddingTop: 4 }}>
                    Our final prototype was done in Figma, <Link to={'https://www.figma.com/proto/SZhOtgWIkeM7wUtplERzHE/DBSA-Prototype?page-id=3%3A2&node-id=27%3A3309&viewport=4485%2C-948%2C0.5&scaling=scale-down&starting-point-node-id=70%3A3524'} sx={linkCSS}>check it out!</Link>
                </Text>
            </Flex>
        </Box >
    )
}

export default DBSAContent
