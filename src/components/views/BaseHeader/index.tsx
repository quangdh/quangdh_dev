import React from "react";
import { Navbar, Container } from "react-bootstrap";

const BaseHeader: React.FC = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">LogFresher</Navbar.Brand>
    </Container>
  </Navbar>
)

export default BaseHeader
