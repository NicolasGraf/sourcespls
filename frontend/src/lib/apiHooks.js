import { useState } from "react";
import { useAuth } from "./authProvider";
import { useToast } from "./toastProvider";

const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3030"
    : "https://api.sourcespls.com";

const useSaveArgument = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const { session } = useAuth();
  const { showToast } = useToast();

  const saveArgument = async ({ argumentTitle, sourceIds }) => {
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

      const { data, error } = await response.json();
      if (error) throw error;

      setData(data);
      showToast({ type: "success", text: "Successfully created a link." });
    } catch (err) {
      console.error(err);
      showToast({ type: "failure", text: "Could not create the link." });
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { saveArgument, loading, data, error };
};

const useUpdateArgument = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const { session } = useAuth();
  const { showToast } = useToast();

  const updateArgument = async ({ slug, argumentTitle, sourceIds }) => {
    setLoading(true);
    setError(null);

    const body = {
      title: argumentTitle,
      sourceIds,
    };

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.access_token}`,
    };

    try {
      const response = await fetch(`${API_URL}/arguments/${slug}`, {
        method: "PUT",
        headers,
        body: JSON.stringify(body),
      });

      const { data, error } = await response.json();
      if (error) throw error;

      setData(data);
      showToast({ type: "success", text: "Successfully updated argument." });
    } catch (err) {
      console.error(err);
      showToast({ type: "failure", text: "Could not update argument." });
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { updateArgument, loading, data, error };
};

export { useSaveArgument, useUpdateArgument };
