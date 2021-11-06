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
    font-size: 1rem;
    font-weight: 600;
`;

const EventsSeeAll = styled.span`
    text-decoration: none;
    color: #1876f2;
    font-size: 0.75rem;
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