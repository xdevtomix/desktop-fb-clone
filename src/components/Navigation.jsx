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
    padding: 5px 5%;
`;

const Left = styled.div`

`;

const Logo = styled.div`
    color: white;
`;

const List = styled.ul`

`;

const Item = styled.li`

`;

const Icon = styled.i`
    color: white;
`;

const Right = styled.div`

`;