import styled from "styled-components";

export default function LeftSidebar() {
    return (
        <Container data-component="left-sidebar">d</Container>
    );
}

const Container = styled.div`
    flex-basis: 25%;
    position: sticky;
    align-self: flex-start;
    top: 4rem;
    background-color: #cbdffa;
`;