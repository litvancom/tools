import React, { useState } from "react";
import * as Cron from "prettycron";
import CronInput from "./CronInput";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


interface Props {
  path: string
}

function CronTool(props: Props) {

  const [state, setState] = useState({ cronString: "" });

  // useEffect(() => {
  //   console.log();
  // }, [state.cronString]);

  return (
    <Container>
      <Row>
        <Col lg={{offset: 4, span: 4}}>
          <CronInput onSubmit={values => setState({ ...values })}/>
        </Col>
      </Row>
      <Row className={"mt-3"}>
        <Col lg={{offset: 4, span: 4}}>
          {Cron.toString(state.cronString || "")}
        </Col>
      </Row>
    </Container>
  );
}

export default CronTool;
