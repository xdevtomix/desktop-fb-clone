import styled from "styled-components";

export default function Navigation() {
    return (
        <Container data-component="navigation">

            <Left>
                <Logo>Bacefook</Logo>
                <List>
                    <Item>
                        <Icon className="bx bx-bell"></Icon>
                    </Item>
                    <Item>
                        <Icon className="bx bx-envelope"></Icon>
                    </Item>
                    <Item>
                        <Icon className="bx bx-movie-play"></Icon>
                    </Item>
                </List>
            </Left>

            <Right>
                <SearchBox>
                    <SearchIcon className="bx bx-search"></SearchIcon>
                    <SearchInput />
                </SearchBox>
                <ProfileBox>
                    <ProfilePicture src="https://images.pexels.com/photos/3987001/pexels-photo-3987001.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="woman"></ProfilePicture>
                    <ProfileOnline></ProfileOnline>
                </ProfileBox>

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
    position: sticky;
    top: 0;
    z-index: 100;
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
    display: flex;
    align-items: center;
`;

const SearchBox = styled.div`
    width: 20rem;    
    display: flex;
    align-items: center;
    background-color: #efefef;
    border-radius: 1rem;
    padding: 0 1rem;
    margin-right: 1rem;
`;

const SearchIcon = styled.i`
    font-size: 1rem;
    color: #505050;
`;

const SearchInput = styled.input`
    width: 100%;
    background-color: transparent;
    padding: 0.5rem;
    border: none;
    outline: none;
`;

const ProfileBox = styled.div`
    display: flex;
    position: relative;
`;

const ProfilePicture = styled.img`
    width: 2rem;
    height: 2rem;
    object-fit: cover;
    border-radius: 50%;
    cursor: pointer;
`;

const ProfileOnline = styled.div`
    position: absolute;
    right: 0;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    border: 1px solid #efefef;
    background-color: green;
`;