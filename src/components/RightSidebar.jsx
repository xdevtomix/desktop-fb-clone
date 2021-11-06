import styled from "styled-components";

export default function RightSidebar() {
    return (
        <Container data-component="right-sidebar">d</Container>
    );
}

const Container = styled.div`
    flex-basis: 25%;
    position: sticky;
    align-self: flex-start;
    top: 4rem;
    background-color: #cbdffa;
`;