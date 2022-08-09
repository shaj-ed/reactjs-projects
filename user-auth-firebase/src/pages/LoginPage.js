import LoginForm from "../components/LoginForm";

const SignUpPage = () => {
  return (
    <section className="px-5 justify-self-center w-full max-w-sm">
      <div>
        <h1 className="text-3xl lg:text-4xl font-bold text-white">
          Here's the Login.
        </h1>
      </div>
      <LoginForm />
    </section>
  );
};

export default SignUpPage;
