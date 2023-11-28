import { useState } from "react";

const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3030"
    : "https://api.sourcespls.com";

const useSaveArgument = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const saveArgument = async ({ argumentTitle, sourceIds, session }) => {
    setLoading(true);
    setError(null);

    const body = {
      title: argumentTitle,
      sourceIds,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    if (session) {
      headers["Authorization"] = `Bearer ${session.access_token}`;
      body["user_id"] = session.user.id;
    }

    try {
      const response = await fetch(`${API_URL}/arguments`, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });

      const result = await response.json();
      if (result.error) throw result.error;
      setData(result.data);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { saveArgument, loading, data, error };
};

export default useSaveArgument;
