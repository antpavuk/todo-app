import useActions from "../../store/hooks/useActions";
import Form from "./Form";

const SignUpForm = () => {
  const { signUp } = useActions();
  return (
    <>
      <Form
        title="sign up"
        initialFormDataState={{
          email: "",
          password: "",
          username: "",
          age: 18,
        }}
        onSubmit={formData => {
          const { email, password, username, age } = formData;

          signUp(email, password, username, age);
        }}
      >
        <input placeholder="Email" name="email" id="email" type="email" />
        <input
          placeholder="Password"
          name="password"
          id="password"
          type="password"
        />
        <input placeholder="Username" name="username" id="username" />
        <input placeholder="Age" name="age" id="age" type="number" min="18" />
      </Form>
    </>
  );
};

export default SignUpForm;
