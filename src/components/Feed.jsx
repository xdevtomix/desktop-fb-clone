import styled from "styled-components";

import Stories from "./Stories";
import WritePost from "./WritePost";
import Posts from "./Posts";

export default function Feed() {
    return (
        <Container data-component="feed">
            <Stories />
            <WritePost />
            <Posts />
        </Container>
    );
}

const Container = styled.div`
    width: 50%;
`;