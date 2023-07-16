/** @jsxImportSource theme-ui */
import "../theme/styles.scss"
import NavBar from '../components/NavBar/NavBar';
import Footer from "../components/Footer/Footer";

export const AnswersAdminPage = () => {
    return (
        <div className="page">
            <title>Answers Admin</title>
            <NavBar />
            <div className="section">
                <div className="title">
                    Improving the admin experience can mean improving the whole experience
                </div>
                <div className="subsection">
                    <div className="contextsection">
                        <div className="subheading subheader2">
                            Context
                        </div>
                        <div className="body">
                            Viva Answers was a new product added to the Viva Suite. A conversational experience for people in large organizations to learn from each other using questions, answers, and topics. Specifically topics were required to help label and organize questions.
                            <p>
                                Admins in Answers aim to facilitate their organization's knowledge sharing experience. Since users in Answers can create their own topics, it's imperative to be able to distinguish between unverified user topics and admin reviewed and promoted topics. Hence, featured topics.
                            </p>
                        </div>
                    </div>

                    <div className="contextsection">
                        <div className="subheading subheader2">
                            My job
                        </div>
                        <div className="body subbody">
                            Product Design, Researching, Brainstorm, Ideation, Sketching, Prototyping
                        </div>
                    </div>
                </div>

                <div className="subsection-col">
                    <div className="subheading subheader2">
                        Where do we start?
                    </div>
                    <div className="body subbody">
                        To kick off my pivot into the product design world, <b>I was tasked with giving admins the capability to feature many topics at once.</b> The brief seemed simple enough, and since I was rather new to the team (and the product design workflow) I started off with what made sense: some context gathering and understanding.

                        <p>
                            Viva Answers is still in it's nascent stages as a product. It's current business priorities surround customer adoption, engagement, and retention. At the most basic level, this starts with a product that provides all the essentials one might need when asking, answering, and finding questions.
                        </p>

                        It became clear that the root of the problem wasn't actually the fact that admins lacked the capability to feature many topics. So what was the problem?
                    </div>
                </div>

                <div className="subsection-col">
                    <div className="subheading subheader2">
                        So what's the real problem?
                    </div>
                    <div className="body subbody">
                        A few user interviews and context gathering meetings later, it became clear that although featuring many topics could be an improvement for admins it wasn't going to solve the bigger issue at stake. I took a step back and narrowed in on a few main problems.

                        <p>
                            <li>
                                Topic browsing is difficult, there are no ways to filter or search for a particular topic
                            </li>
                            <li>
                                The current topic featuring flow is confusing for admins and lacks cohesion
                            </li>
                            <li>
                                Topic featuring currently holds no value since it's impossible to tell when a topic is featured or not
                            </li>
                        </p>
                    </div>
                </div>

                <div className="subsection-col">
                    <div className="subheading subheader2">
                        The hard work is just beginning
                    </div>
                    <div className="body subbody">
                        With a change of perspective, now began some fun brainstorming and ideating. While brainstorming we kept in mind the business goals as well as the admin and user goals in Answers.

                        <p>
                            Some main themes that were identified from the brainstorming session include
                        </p>

                        <p>
                            <li>
                                Integrating a search and filter capability for admins and users
                            </li>
                            <li>
                                Simplifying the workflow for an admin to feature a topic
                            </li>
                            <li>
                                Adding a UI indicator to differentiate a featured topic vs. an unfeatured topic
                            </li>
                        </p>
                    </div>
                </div>

                <div className="subsection-col">
                    <div className="subheading subheader2">
                        Some sketches and wireframes
                    </div>
                    <div className="body subbody">
                        Throughout our iterations we discussed considerations such as: should admins have a separate page. For now, we left capabilities inline, if needed in the future such an expansion could happen.
                    </div>
                </div>

                <div className="subsection-col">
                    <div className="subheading subheader2">
                        Time to see it in action
                    </div>
                    <div className="body subbody">
                        //Insert it in action
                    </div>
                </div>

                <div className="subsection-col">
                    <div className="subheading subheader2">
                        Finale
                    </div>
                    <div className="body subbody">
                        Simple, clean, and obvious. That's what we were going for with this new overhaul of the topic browse page. We addressed the lack of search and sort capabilities with a new search bar and filter.
                    </div>
                </div>
            </div>
            <div className="bottomnav subbutton">
                <a href="/"><div className="bottomnavlink"><div>🡠</div>Go back home</div></a>
                <a href="/aisuggestion"><div className="bottomnavlink"><div>Check out AI Suggested Topics</div>🡢</div></a>
            </div>
            <Footer />
        </div>
    );
};
export default AnswersAdminPage