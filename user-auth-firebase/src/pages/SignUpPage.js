import SignUpForm from "../components/SignUpForm";

const SignUpPage = () => {
  return (
    <section className="px-5 mx-auto my-5 w-full max-w-sm lg:max-w-3xl lg:flex lg:gap-20 lg:justify-center">
      <div>
        <h3 className="text-sm font-medium text-cyan-400 mb-2">wellcome</h3>
        <h1 className="text-3xl lg:text-4xl font-bold text-white">
          Fill the form
          <br /> to become part of <br />
          <span className="underline decoration-2 decoration-yellow-500">
            Team
          </span>
        </h1>
      </div>
      <SignUpForm />
    </section>
  );
};

export default SignUpPage;
