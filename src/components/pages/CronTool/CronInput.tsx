import React from "react";
import { Button, Form } from "react-bootstrap";
import { FormikProps, withFormik } from "formik";

interface Props {
  onSubmit: (values: FormValues) => void
}

interface FormValues {
  cronString: string
}

const CronInput = ({
                     handleSubmit,
                     handleChange,
                     values
                   }: Props & FormikProps<FormValues>) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formBasicEmail">
      <Form.Label column={true}>Cron value</Form.Label>
      <Form.Control
        value={values.cronString}
        onChange={handleChange}
        name={"cronString"} placeholder="* * * * *"/>
      <Form.Text className="text-muted">
        Input here your cron value
      </Form.Text>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
);

export default withFormik<Props, FormValues>({
  handleSubmit: (values, formikBag) => {
    formikBag.props.onSubmit(values);
  }
})(CronInput);
