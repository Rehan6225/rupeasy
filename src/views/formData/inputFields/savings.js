import React from "react";

import { Form, Row } from "reactstrap";

import { BasicInput, LinkButton, SavingsETA } from "../components/index";
import { H5Underline } from "../../../style/typography";
import { IconBox } from "../../../style/layout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FormComponent = ({
  values,
  handleChange,
  handleSubmit,
  setFieldValue,
  ...props
}) => {
  return (
    <Form>
      <H5Underline>
        Savings
        <IconBox>
          <FontAwesomeIcon icon="dollar-sign" />
        </IconBox>
      </H5Underline>
      <BasicInput
        name="Savings Goal"
        id="savings_goal"
        text="This space is for your savings target."
        value={values.savings_goal}
        onChange={handleChange}
      />
      <SavingsETA
        name="Savings Collected"
        id="savings_saved"
        text="This space is for any money you have set aside as savings."

        calculatedvalue={values.savings_saved}
        onChange={e => {
          const newValue = parseFloat((values.savings_goal - e.target.value) / e.target.value).toFixed(0);
          setFieldValue("savings_saved", parseInt(newValue, 10));
        }}
      />
      <Row
        className="d-flex justify-content-between"
        style={{ paddingLeft: "15px" }}
      >
        <LinkButton to="/Form/personal" name="PREVIOUS" />
        <LinkButton to="/Form/debt" name="NEXT" />
      </Row>
    </Form>
  );
};
