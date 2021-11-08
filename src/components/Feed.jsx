import styled from "styled-components";

import Stories from "./Stories";

export default function Feed() {
    return (
        <Container data-component="feed">
            <Stories />
        </Container>
    );
}

const Container = styled.div`
    flex-basis: 45%;
`;