import useActions from "../../store/hooks/useActions";
import { INITIAL_STATE } from "./constants/LogInForm.constants copy";
import Form from "./Form";

const LogInForm = () => {
  const { logIn } = useActions();
  return (
    <>
      <Form
        title="log in"
        initialState={INITIAL_STATE}
        onSubmit={formData => {
          const { email, password } = formData;

          logIn(email, password);
        }}
      >
        <input placeholder="Email" name="email" id="email" type="email" />
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
