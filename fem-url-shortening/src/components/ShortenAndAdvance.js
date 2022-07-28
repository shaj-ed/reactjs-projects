import { useState } from "react";
import styled from "styled-components";
import Advance from "./Advance";
import ShortenContent from "./ShortenContent";
import ShorteningForm from "./ShorteningForm";

const url = "https://api.shrtco.de/v2/shorten?url=";

const ShortenAndAdvance = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [shorten, setShorten] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!value) {
      setLoading(false);
      setError(true);
    } else {
      getShorten(value);
    }
  };

  const getShorten = async (value) => {
    try {
      const res = await fetch(`${url}${value}`);
      const data = await res.json();
      if (data.ok) {
        setShorten((prev) => [
          {
            id: data.result.code,
            shortLink: data.result.short_link,
            originalLink: data.result.original_link,
            copy: false,
          },
          ...prev,
        ]);
        setValue("");
        setLoading(false);
        setError(false);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
      setValue("");
      setLoading(false);
      alert("Something went wrong, try again.");
      console.log(error);
    }
  };

  const copyClip = (id) => {
    const newShorten = shorten.map((item) => {
      if (item.id === id) {
        if (item.copy) {
          return item;
        }
        navigator.clipboard.writeText(item.shortLink);
        return { ...item, copy: true };
      }

      return item;
    });

    setShorten(newShorten);
  };

  return (
    <StyledShortenAndAdvance>
      <ShorteningForm
        value={value}
        error={error}
        loading={loading}
        setValue={setValue}
        handleSubmit={handleSubmit}
      />
      <StyledShortenItem>
        {shorten &&
          shorten.map((item) => {
            return (
              <ShortenContent key={item.id} item={item} copyClip={copyClip} />
            );
          })}
      </StyledShortenItem>
      <Advance />
    </StyledShortenAndAdvance>
  );
};

export const StyledShortenAndAdvance = styled.section`
  width: 100%;
  background-color: var(--bg-secondary);
  position: relative;
`;

export const StyledShortenItem = styled.div`
  width: calc(100% - 2rem);
  max-width: 45rem;
  margin: 0 auto;
  padding-top: 11rem;

  @media (min-width: 768px) {
    max-width: calc(110rem - 2rem);
    padding-top: 8rem;
  }

  article:not(:first-of-type) {
    margin-top: 2rem;
  }
`;

export default ShortenAndAdvance;
