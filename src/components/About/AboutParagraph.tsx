/** @jsxImportSource theme-ui */
import { Link } from 'gatsby';
import { Text } from 'theme-ui';

const AboutParagraph = () => {

    return (
        <>
            <p>
                Hi there! I'm Erin — I'm a frontend developer at Microsoft building out beautiful UI elements for the current <Link sx={{
                    color: 'primary',
                    '&.active': {
                        color: 'primary',
                    },
                }} to={'https://techcommunity.microsoft.com/t5/microsoft-viva-blog/announcing-answers-in-microsoft-viva/ba-p/3634288#:~:text=Answers%20within%20Viva%20Engage&text=Answers%20helps%20organize%20questions%20and,to%20existing%20knowledge%20and%20experts.&text=Users%20can%20ask%20questions%2C%20see,own%20answers%20to%20open%20questions.&text=Users%20can%20also%20follow%20individual,when%20new%20questions%20are%20available.'}>Viva Engage Answers</Link> effort. My next career journey is to shift into product design, a scary endeavor but one I truly believe is my next calling.
            </p>

            <p>
                Since the <Link sx={{
                    color: 'primary',
                    '&.active': {
                        color: 'primary',
                    },
                }} to={'https://techcommunity.microsoft.com/t5/yammer-blog/the-new-yammer-is-generally-available-worldwide/ba-p/1521869'}>Yammer shift into "Glammer"</Link>, design has sprouted a solid space within the team and has also been an integral part of my work as a frontend engineer. Since moving into the Viva Engage Answers world, I've found myself working closely with a team of talented designers who inspire me and also helped spark my interest in shifting to product design. The same things that drove me to become a frontend developer now translate to the core reasons I find product design my next step: <Text sx={{ fontWeight: 'bold' }}>an appreciation for the aesthetics</Text>, <Text sx={{ fontWeight: 'bold' }}>the desire to challenge my creativity</Text>, and <Text sx={{ fontWeight: 'bold' }}>a love for creating for the user</Text>.
            </p>

            <p>
                When I'm not working or reading up on the latest trends, you may often find me doodling, illustrating, or snuggling my pup, Eevee (yes the Pokémon!). If I'm not doing any of the above, I may be heads down working on a new Lego set or screaming too much on Valorant.
            </p>
        </>
    )
}

export default AboutParagraph
