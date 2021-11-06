import styled, { StyleSheetManager } from "styled-components";

import Navigation from "./components/Navigation";
import LeftSidebar from "./components/LeftSidebar";
import Feed from "./components/Feed";
import RightSidebar from "./components/RightSidebar";

export default function App() {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <Container data-component="app">
        <Navigation />
        <Main>
          <LeftSidebar />
          <Feed />
          <RightSidebar />
        </Main>
      </Container>
    </StyleSheetManager>
  )
}

const Container = styled.div`
  
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
`;
