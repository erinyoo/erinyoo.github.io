/** @jsxImportSource theme-ui */
import { Box, Flex, Text } from 'theme-ui';

const AboutContent = () => {

    return (
        <Box sx={{ width: '70%', position: 'absolute', left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto' }}>
            <Flex sx={{ flexDirection: 'row' }}>
                <Box sx={{ fontSize: 1, width: '65%', position: 'absolute' }}>
                    <p>
                        Hi there! I'm Erin — I'm a frontend enthusiast, curious illustrator, and passionate designer. I grew up in Florida, but I'm currently based in San Francisco.
                    </p>

                    <p>
                        My early interest in art and design has always driven me career wise. For the first year, I found fulfillment in being able to build out and engineer beautiful UI elements for the new Yammer redesign, "Glammer". This sprouted not only a solid design space in Yammer, but also my interest in the product design area. Since moving into the Viva Engage Answers world I've found myself enveloped within the design process as I worked closely with designers to bring to fruition a completely new product.
                    </p>

                    <p>
                        Since my push into the product design atmosphere, I've found myself thinking about what guides me in the work I do and the work I want to do, product design related or not. Tech is a vast industry and I'm often reminded of what type of impact I can make in any job within the industry. So moving forward, I hope to follow these "guiding lights", and I hope to improve them and shape them.
                        <p>
                            <li>
                                <Text sx={{ fontWeight: 'bold' }}>Always with empathy.</Text> 'Nuff said right?
                            </li>
                            <li>
                                <Text sx={{ fontWeight: 'bold' }}>Make it accessible, then make it more accessible.</Text> Accessibility doesn't just stop at the WCAG standards, it's an expansive field and I'm constantly trying to learn and understand what I may have missed in the area.
                            </li>
                            <li>
                                <Text sx={{ fontWeight: 'bold' }}>Making the designs make sense.</Text> Whether it's to the user using the product or to the developer at hand off, the design MUST make sense. The design must hold meaning and justification. I've felt the disconnect between design and engineering before and it's a recipe for disaster.
                            </li>
                            <li>
                                <Text sx={{ fontWeight: 'bold' }}>What's outside of outside the box?</Text> Designing and engineering solutions doesn't just come to me naturally. It requires a hint of madness. Then a hint of rationality.
                            </li>
                        </p>
                    </p>
                </Box>
            </Flex>
        </Box>
    )
}

export default AboutContent
