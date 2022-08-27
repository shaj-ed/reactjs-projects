import QuizCard from "../components/QuizCard";
import { StyledHome } from "../styles/HomeStyled";
import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

const Home = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getTopics = async () => {
      const db = getDatabase();
      const topicsRef = ref(db, "topics");
      const topicsQuery = query(topicsRef, orderByKey());

      try {
        setLoading(true);
        setError(false);
        const snapshot = await get(topicsQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setTopics(Object.values(snapshot.val()));
        } else {
          // to other thing
        }
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log(error);
      }
    };

    getTopics();
  }, []);

  return (
    <StyledHome>
      {loading ? (
        <h2>Loading..</h2>
      ) : (
        <>
          {topics.map((topic) => {
            return <QuizCard key={topic.id} topic={topic} />;
          })}
        </>
      )}
    </StyledHome>
  );
};

export default Home;
