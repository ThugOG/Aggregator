// About page

const About = () => (
    <>
        <div className="content">
            <h1 className="title">About 0xSwap</h1>
            <p className="paragraph">0xSwap is a simple, privacy-centered swap interface designed to streamline the token swapping experience into a single app. Fetching data from all the major aggregators, 0xSwap finds the best quote quickly without any of the extra bloat of a complicated swap interface.</p>
            <p className="paragraph">0xSwap was also designed with privacy and analytics in mind. Many Dapps now track wallet addresses and other data, which can be a big violation of privacy. 0xSwap does not collect wallet addresses, browser fingerprints, or any other kind of tracking data and uses aggregator APIs directly, bypassing any interfaces that may contain tracking software.</p>
            <p className="paragraph">To become a part of the community, join the 0xSwap Discord server where you can report bugs, get all the latest announcements and updates, and chat with other cool DeFi users.</p>
            <p className="paragraph"></p>
        </div>
        <style jsx>{`
            .content {
                width: 100%;
                height: calc(100vh - 140px);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                padding: 0 calc(50% - 300px) 20px calc(50% - 300px);
            }

            .title {
                font-size: 2rem;
                margin-bottom: 32px;
            }

            .paragraph {
                font-size: 1.1rem;
                margin-bottom: 16px;
            }

            .attribution {
                color: var(--gray);
                font-size: 0.9rem;
                white-space: pre;
                margin-bottom: 4px;
            }

            .first {
                margin-top: 16px;
            }

            .link {
                color: inherit;
                text-decoration: underline;
            }

            @media only screen and (max-width: 1000px), (max-height: 900px) {
                .content {
                    height: calc(100vh - 100px);
                }
            }

            @media only screen and (max-width: 550px) {
                .content {
                    padding-bottom: 0;
                }
                
                .title {
                    margin-bottom: 24px;
                }

                .paragraph {
                    margin-bottom: 12px;
                }

                .first { 
                    margin-top: 12px;
                }
            }
        `}</style>
    </>
)

// Exports

export async function getStaticProps() {
    return {
        props: {
            page: "About"
        }
    }
}

export default About