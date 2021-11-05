import styled from "styled-components";

export default function Navigation() {
    return (
        <Container data-component="navigation">

            <Left>
                <Logo>Bacefook</Logo>
                <List>
                    <Item>
                        <Icon className='bx bx-bell'></Icon>
                    </Item>
                    <Item>
                        <Icon className='bx bx-envelope'></Icon>
                    </Item>
                    <Item>
                        <Icon className='bx bx-movie-play'></Icon>
                    </Item>
                </List>
            </Left>

            <Right>

            </Right>

        </Container>
    );
}

const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #1876f2;
    padding: 0.5rem 2rem;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.div`
    color: white;
    margin-right: 3rem;
    font-size: 1.5rem;
    cursor: pointer;
`;

const List = styled.ul`

`;

const Item = styled.li`
    list-style: none;
    display: inline-block;
`;

const Icon = styled.i`
    color: white;
    font-size: 1rem;
    margin-right: 1rem;
    cursor: pointer;
`;

const Right = styled.div`

`;