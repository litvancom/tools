import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FormikProps, withFormik } from "formik";

export interface FormValues {
  gqlInput?: string
}

interface Props {
  onSubmit: (values: any) => void
}

function InputForm({
                     values,
                     handleSubmit,
                     handleChange,
                     errors,
                     touched,
                     submitCount,
                     isValid,
                     handleReset,
                     onSubmit
                   }: Props & FormikProps<FormValues>) {

  return (
    <Form className={"my-3"} noValidate onSubmit={handleSubmit} onReset={() => {
      handleReset();
      onSubmit({});
    }}>
      {(!isValid || submitCount === 0) && (
        <>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Json data</Form.Label>
            <Form.Control
              as="textarea"
              onChange={handleChange}
              rows="3"
              name='gqlInput'
              isValid={touched.gqlInput && !errors.gqlInput}
              isInvalid={!!errors.gqlInput && submitCount > 0}
              value={values.gqlInput}/>
            <Form.Control.Feedback type="invalid">
              {errors.gqlInput}
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </>
      )}
      <Button className={"ml-3"} variant="dark" type="reset">
        Reset
      </Button>
    </Form>
  );
}


export default withFormik<Props, FormValues>({
  displayName: "Basic form",
  validate: (values, props) => {
    let errors: { [key: string]: string } = {};

    let parsed = null;

    try {
      parsed = values.gqlInput ? JSON.parse(values.gqlInput) : null;
    } catch (e) {
      errors.gqlInput = "Not a valid json";
    }

    if (!parsed) {
      errors.gqlInput = "Not a valid json";
    }

    return errors;
  },
  handleSubmit: (values, formikBag) => {
    formikBag.props.onSubmit(values);
  }
})(InputForm);
