import styled from "styled-components";

export default function LeftSidebar() {
    return (
        <Container data-component="left-sidebar">
            <LinksContainer>
                <Link>
                    <Icon className="bx bx-news"></Icon>
                    <Text>Latest news</Text>
                </Link>
                <Link>
                    <Icon className="bx bxs-group"></Icon>
                    <Text>Friends</Text>
                </Link>
                <Link>
                    <Icon className="bx bx-group"></Icon>
                    <Text>Group</Text>
                </Link>
                <Link>
                    <Icon className="bx bx-cart"></Icon>
                    <Text>Marketplace</Text>
                </Link>
                <Link>
                    <Icon className="bx bx-tv"></Icon>
                    <Text>Watch</Text>
                </Link>
                <Link>
                    <Text style={{color: '#1876f2'}}>See more</Text>
                </Link>
            </LinksContainer>
        </Container>
    );
}

const Container = styled.div`
    flex-basis: 25%;
    position: sticky;
    align-self: flex-start;
    top: 4rem;
`;

const LinksContainer = styled.div`
    border-bottom: 1px solid #ccc;
`;

const Link = styled.a`
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    color: #626262;
    width: fit-content;
`;

const Icon = styled.i`
    font-size: 1.5rem;
    margin-right: 1rem;
    color: #1876f2;
`;

const Text = styled.span`

`;