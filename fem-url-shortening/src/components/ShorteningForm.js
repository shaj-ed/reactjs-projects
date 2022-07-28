import { useEffect, useRef } from "react";
import { StyledButton } from "../assets/styles/Button.styled";
import {
  ErrorText,
  InputField,
  StyledForm,
} from "../assets/styles/ShorteningForm.styled";

const ShorteningForm = ({ value, error, loading, setValue, handleSubmit }) => {
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const cleanUpValue = inputRef.current;
    if (error) {
      cleanUpValue.focus();
      cleanUpValue.style.border = "2px solid red";
    }

    return () => {
      cleanUpValue.style.border = "2px solid var(--gray";
    };
  }, [error]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputField
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Shorten a link here..."
        ref={inputRef}
      ></InputField>
      {error && <ErrorText>Please add a link</ErrorText>}
      <StyledButton type="submit" primary>
        {loading ? "Loading.." : "Shorten It!"}
      </StyledButton>
    </StyledForm>
  );
};

export default ShorteningForm;
