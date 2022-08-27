import { get, getDatabase, orderByKey, query, ref } from "firebase/database";

import { useEffect, useState } from "react";

const useQuiz = (id) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getQuestions = async () => {
      const db = getDatabase();
      const questionsRef = ref(db, `quiz/${id}/questions`);
      const questionsQuery = query(questionsRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(questionsQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setQuestions(snapshot.val());
        } else {
          // do other things
        }
      } catch (error) {
        setError(true);
        setLoading(false);
        console.log(error);
      }
    };

    getQuestions();
  }, [id]);

  return { loading, error, questions };
};

export default useQuiz;
