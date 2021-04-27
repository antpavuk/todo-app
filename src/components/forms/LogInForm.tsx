import useActions from "../../store/hooks/useActions";
import Form from "./Form";

const LogInForm = () => {
  const { logIn } = useActions();
  return (
    <>
      <Form
        title="log in"
        initialFormDataState={{ email: "", password: "", username: "" }}
        onSubmit={formData => {
          const { email, password } = formData;

          logIn(email, password);
        }}
      >
        <input placeholder="Email" name="email" id="email" />
        <input
          placeholder="Password"
          name="password"
          id="password"
          type="password"
        />
      </Form>
    </>
  );
};

export default LogInForm;
