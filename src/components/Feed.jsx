import styled from "styled-components";

import Stories from "./Stories";
import WritePost from "./WritePost";

export default function Feed() {
    return (
        <Container data-component="feed">
            <Stories />
            <WritePost />
        </Container>
    );
}

const Container = styled.div`
    width: 50%;
`;