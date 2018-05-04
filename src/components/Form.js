import React from "react";
import { Form, Field } from "react-final-form";

const onSubmit = form => alert(JSON.stringify(form, null, 2));

const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));

const validate = form => {
  return timeout(300).then(() => {
    if (!form.phone) {
      return { phone: "Required" };
    }
    if (!form.phone.match(/[(]?[0-9]{3}[)]?[-]?[0-9]{3}[-]?[0-9]{4,6}$/im)) {
      return { phone: "Inavlid phone number" };
    }
    return {};
  });
};

const ExampleForm = () => (
  <Form
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit, pristine, invalid }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name </label>
          <Field name="firstName" component="input" placeholder="First Name" />
        </div>

        <hr />
        <Field
          name="bio"
          render={({ input, meta }) => (
            <div>
              <label>Bio </label>
              <textarea {...input} />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        />

        <hr />
        <Field name="phone">
          {({ input, meta }) => (
            <div>
              <label>Phone </label>
              <input type="text" {...input} placeholder="Phone" />
              {meta.touched &&
                meta.error && (
                  <span style={{ color: "red" }}>{meta.error}</span>
                )}
            </div>
          )}
        </Field>

        <hr />
        <button type="submit" disabled={pristine || invalid}>
          Submit
        </button>
      </form>
    )}
  />
);

export default ExampleForm;
