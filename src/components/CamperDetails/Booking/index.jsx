import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  BookingContainer,
  FormHeader,
  FormSecondaryText,
  InputsGroup,
  SendButton,
  ErrorText,
} from "./Booking.styled";

const Booking = () => {
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    date: Yup.date().required("Required"),
    comment: Yup.string().required("Required"),
  });

  const handleSubmit = () => {
    window.location.reload();
  };

  return (
    <BookingContainer>
      <Formik
        initialValues={{
          name: "",
          email: "",
          date: "",
          comment: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
      >
        <Form autoComplete="off">
          <FormHeader>Book your campervan now</FormHeader>

          <FormSecondaryText>
            Stay connected! We are always ready to help you.
          </FormSecondaryText>

          <InputsGroup>
            <Field type="text" name="name" id="name" placeholder="Name" />
            <ErrorMessage
              render={(msg) => <ErrorText>{msg}</ErrorText>}
              name="name"
            />

            <Field type="email" name="email" id="email" placeholder="Email" />
            <ErrorMessage
              render={(msg) => <ErrorText>{msg}</ErrorText>}
              name="email"
            />

            <Field type="date" name="date" id="date" />
            <ErrorMessage
              render={(msg) => <ErrorText>{msg}</ErrorText>}
              name="date"
            />

            <Field as="textarea" name="comment" id="comment" rows="5" />
            <ErrorMessage
              render={(msg) => <ErrorText>{msg}</ErrorText>}
              name="comment"
            />
          </InputsGroup>

          <SendButton type="submit">Send</SendButton>
        </Form>
      </Formik>
    </BookingContainer>
  );
};

export default Booking;
