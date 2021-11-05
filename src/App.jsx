import styled, { StyleSheetManager } from "styled-components";

import Navigation from "./components/Navigation";

export default function App() {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <Container data-component="app">
        <Navigation />
      </Container>
    </StyleSheetManager>
  )
}

const Container = styled.div`
  
`;
