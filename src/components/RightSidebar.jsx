import styled from "styled-components";

export default function RightSidebar() {
    return (
        <Container data-component="right-sidebar">

            <EventsContainer>
                <EventsHeader>
                    <EventsTitle>Events</EventsTitle>
                    <EventsSeeAll>See all</EventsSeeAll>
                </EventsHeader>
                <EventsBody>
                    <Event>
                        <EventLeftColumn>
                            <h3>18</h3>
                            <div>March</div>
                        </EventLeftColumn>
                        <EventRightColumn>
                            <h4>Social Media</h4>
                            <p><i className="bx bxs-map"></i>Willson Tech Park</p>
                            <a>More Info</a>
                        </EventRightColumn>
                    </Event>
                    <Event>
                        <EventLeftColumn>
                            <h3>19</h3>
                            <div>March</div>
                        </EventLeftColumn>
                        <EventRightColumn>
                            <h4>Social Gathering</h4>
                            <p><i className="bx bxs-map"></i>Sys Tech Park</p>
                            <a>More Info</a>
                        </EventRightColumn>
                    </Event>
                </EventsBody>
            </EventsContainer>

            <AdsContainer>
                <AdsHeader>
                    <AdsTitle>Advertisment</AdsTitle>
                    <AdsClose>Close</AdsClose>
                </AdsHeader>

                <img src="https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="woman" />
            </AdsContainer>

            <ChatsContainer>
                <ChatsHeader>
                    <ChatsTitle>Friends online</ChatsTitle>
                    <ChatsClose>Hide chats</ChatsClose>
                </ChatsHeader>
                <ChatsBody>
                    <Chat>
                        <ChatImageContainer>
                            <img src="https://images.pexels.com/photos/1903611/pexels-photo-1903611.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="woman"></img>
                            <div></div>
                        </ChatImageContainer>
                        <p>Mary Smith</p>
                    </Chat>
                    <Chat>
                        <ChatImageContainer>
                            <img src="https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="woman"></img>
                            <div></div>
                        </ChatImageContainer>
                        <p>Irene Adler</p>
                    </Chat>
                    <Chat>
                        <ChatImageContainer>
                            <img src="https://images.pexels.com/photos/3541388/pexels-photo-3541388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="woman"></img>
                            <div></div>
                        </ChatImageContainer>
                        <p>Greta Garbo</p>
                    </Chat>
                </ChatsBody>
            </ChatsContainer>

        </Container>
    );
}

const Container = styled.div`
    flex-basis: 25%;
    position: sticky;
    align-self: flex-start;
    top: 4rem;
    background-color: #fff;
    padding: 1.25rem;
    border-radius: 0.25rem;
    color: #626262;
`;

const EventsContainer = styled.div``;

const EventsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

const EventsTitle = styled.h4`
    font-size: 0.75rem;
    font-weight: 600;
`;

const EventsSeeAll = styled.span`
    text-decoration: none;
    color: #1876f2;
    font-size: 0.75rem;
    cursor: pointer;
`;

const EventsBody = styled.div``;

const Event = styled.div`
    display: flex;
    font-size: 0.75rem;
    margin-bottom: 1rem;
`;

const EventLeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 4rem;
    height: 4rem;
    border-radius: 0.75rem;
    margin-right: 1rem;
    text-align: center;
    overflow: hidden;
    position: relative;
    box-shadow: 0 0 0.75rem rgba(0, 0, 0, 0.1);

    h3 {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60%;
    }

    div {
        background-color: #1876f2;
        color: #fff;
        height: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const EventRightColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0.5rem 0;

    h4 {
        font-weight: 600;
    }

    p {
        font-size: 0.75rem;
        font-weight: 300;

        i {
            margin-left: -0.1rem;
            margin-right: 0.1rem;
        }
    }

    a {
        text-decoration: none;
        font-size: 0.75rem;
        color: #1876f2;
        cursor: pointer;
    }
`;

const AdsContainer = styled.div`
    img {
        width: 100%;
        height: 8rem;
        object-fit: cover;
        border-radius: 0.25rem;
    }
`;

const AdsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
`;

const AdsTitle = styled.h4`
    font-size: 0.75rem;
    font-weight: 600;
`;

const AdsClose = styled.span`
    text-decoration: none;
    color: #1876f2;
    font-size: 0.75rem;
    cursor: pointer;
`;

const ChatsContainer = styled.div`
`;

const ChatsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
`;

const ChatsTitle = styled.h4`
    font-size: 0.75rem;
    font-weight: 600;
`;

const ChatsClose = styled.span`
    text-decoration: none;
    color: #1876f2;
    font-size: 0.75rem;
    cursor: pointer;
`;

const ChatsBody = styled.div``;

const Chat = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    cursor: pointer;

    img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
    }

    p {
        font-size: 0.75rem;
    }
`;

const ChatImageContainer = styled.div`
    position: relative;
    margin-right: 1rem;

    div {
        position: absolute;
        right: 0;
        bottom: 0.25rem;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        border: 1px solid #efefef;
        background-color: green;
    }
`;