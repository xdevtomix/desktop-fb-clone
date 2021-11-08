import styled from "styled-components";

export default function WritePost() {
    return (
        <Container data-component="write-post">
            <Left>
                <img src="https://images.pexels.com/photos/41315/africa-african-animal-cat-41315.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="man" />
            </Left>
            <Right>
                <Profile>
                    <h4>Jack Nicholson</h4>
                    <div>
                        <span>Public</span>
                        <i className='bx bxs-down-arrow'></i>
                    </div>
                </Profile>
                <Question>
                    <p>What is on your mind Jack?</p>
                    <input />
                    <div></div>
                </Question>
                <Actions>
                    <i className='bx bxs-camera red'></i><span>Live video</span>
                    <i className='bx bxs-camera-movie green'></i><span>Photo / video</span>
                    <i className='bx bxs-smile yellow'></i><span>Feeling / Activity</span>
                </Actions>
            </Right>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    background: white;
    padding: 1rem;
    margin-bottom: 1.25rem;
    border-radius: 0.25rem;
    color: #626262;
`;

const Left = styled.div`
    img {
        width: 2rem;
        height: 2rem;
        object-fit: cover;
        border-radius: 50%;
        margin-right: 1rem;
    }
`;

const Right = styled.div`
    width: 100%;
`;

const Profile = styled.div`
    margin-bottom: 1rem;

    h4 {
        font-size: 0.75rem;
    }

    div {
        span {
            font-size: 0.5rem;
            margin-right: 0.25rem;
        }

        i {
            font-size: 0.5rem;
        }
    }
`;

const Question = styled.div`
    margin-bottom: 1rem;

    p {
        font-size: 0.75rem;
        margin-bottom: 0.5rem;
    }

    input {
        width: 80%;
        border: none;
        outline: none;
    }

    div {
        width: 80%;
        height: 1px;
        border-bottom: 1px solid #626262;
        opacity: 0.5;
    }
`;

const Actions = styled.div`
    display: flex;
    align-items: center;

    i {
        font-size: 1rem;
        margin-right: 0.25rem;
    }

    .red {
        color: red;
    }

    .green {
        color: green;
    }

    .yellow {
        color: yellow;
    }

    span {
        font-size: 0.75rem;
        margin-right: 1rem;
    }
`;
