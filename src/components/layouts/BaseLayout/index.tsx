import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BaseHeader from "components/views/BaseHeader";
import BaseFooter from "components/views/BaseFooter";
import SideBarContainer from "components/views/SideBarContainer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

const BaseLayout: React.FC = (props) => (
  <>
    <BaseHeader />
    <Container className="content">
      <Row>
        <Col md={8}>
          <main>
            {props.children}
          </main>
        </Col>
        <Col md={4}>
          <SideBarContainer />
        </Col>
      </Row>
    </Container>
    <BaseFooter />
  </>
)

export default BaseLayout;
