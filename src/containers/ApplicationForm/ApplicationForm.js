import React, { useState } from "react";

import "./ApplicationForm.scss";
import Form from "../../components/Form/Form";

const ApplicationForm = ({ setOnFormSubmit }) => {
  const [isLoading, setIsLoading] = useState(false);

  return <Form setOnFormSubmit={setOnFormSubmit} />;
};

export default ApplicationForm;
