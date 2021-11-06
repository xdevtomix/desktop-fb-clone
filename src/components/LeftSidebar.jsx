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
                    <Text style={{ color: '#1876f2' }}>See more</Text>
                </Link>
            </LinksContainer>

            <ShortcutsContainer>
                <ShortcutsTitle>Your shortcuts</ShortcutsTitle>
                <Link>
                    <ShortcutsImage src="https://images.pexels.com/photos/1903611/pexels-photo-1903611.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image"></ShortcutsImage>
                    <Text>Web developers</Text>
                </Link>
                <Link>
                    <ShortcutsImage src="https://images.pexels.com/photos/3225889/pexels-photo-3225889.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image"></ShortcutsImage>
                    <Text>Frontend courses</Text>
                </Link>
                <Link>
                    <ShortcutsImage src="https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image"></ShortcutsImage>
                    <Text>Useful videos</Text>
                </Link>
                <Link>
                    <ShortcutsImage src="https://images.pexels.com/photos/3541388/pexels-photo-3541388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image"></ShortcutsImage>
                    <Text>PWA links</Text>
                </Link>
            </ShortcutsContainer>

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
    cursor: pointer;
`;

const Icon = styled.i`
    font-size: 1.5rem;
    margin-right: 1rem;
    color: #1876f2;
`;

const Text = styled.span``;

const ShortcutsContainer = styled.div``;

const ShortcutsTitle = styled.p`
    margin: 1.5rem 0;
    color: #626262;
    font-weight: 500;
`;

const ShortcutsImage = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    object-fit: cover;
    border-radius: 0.25rem;
    margin-right: 1rem;
`;