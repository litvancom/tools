import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputForm, { FormValues } from "./InputForm";
import Button from "react-bootstrap/Button";
import copy from "clipboard-copy";

interface ParsedJson {
  query: string,
  variables?: object,
  operationName?: string
}

const GqlTool = (props: any) => {

  const [formValues, setValues] = useState<FormValues>({});

  let query: string | null = null;
  let variables = null;

  if (formValues.gqlInput !== undefined) {
    const parsed: ParsedJson = JSON.parse(formValues.gqlInput);
    query = parsed.query;
    variables = parsed.variables;
  }

  return (
    <>
      <Container>
        <Row className={"justify-content-center"}>
          <Col lg={8}>
            <InputForm onSubmit={setValues}/>
            {query && (
              <Button variant="info" onClick={() => {
                copy(query || "");
              }} type="reset">
                Copy to clipboard
              </Button>
            )}
          </Col>
        </Row>
        {query !== null && (
          <Row className={"justify-content-center mt-10"}>
            {variables && (
              <Col lg={4}>
                Variables
              <pre className={"text-left"}>
                {JSON.stringify(variables, null,  2)}
              </pre>
              </Col>
            )}
            <Col lg={8}>
              <pre className={"text-left"}>{query}</pre>
            </Col>
          </Row>
        )}
      </Container>
    </>

  );
};

export default GqlTool;
