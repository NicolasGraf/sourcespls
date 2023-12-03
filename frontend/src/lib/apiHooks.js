import { useEffect, useState } from "react";
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

  const saveArgument = async ({
    argumentTitle,
    sourceIds,
    hideToast = false,
  }) => {
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
      if (!hideToast)
        showToast({ type: "success", text: "Successfully created a link." });
    } catch (err) {
      if (!hideToast)
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

  const updateArgument = async ({
    slug,
    argumentTitle,
    sourceIds,
    hideToast = false,
  }) => {
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
    }

    try {
      const response = await fetch(`${API_URL}/arguments/${slug}`, {
        method: "PUT",
        headers,
        body: JSON.stringify(body),
      });

      const { data, error } = await response.json();
      if (error) throw error;

      setData(data);
      if (!hideToast)
        showToast({ type: "success", text: "Successfully updated argument." });
    } catch (err) {
      console.error(err);
      if (!hideToast)
        showToast({ type: "failure", text: "Could not update argument." });
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { updateArgument, loading, data, error };
};

const useGetAllArguments = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const { showToast } = useToast();
  const { session } = useAuth();

  useEffect(() => {
    const fetchArguments = async () => {
      if (!session?.access_token) {
        setError(new Error("No access token found"));
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${API_URL}/arguments`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.access_token}`,
          },
        });

        const { data, error } = await response.json();
        if (error) throw error;
        setData(data);
        showToast({ type: "success", text: "Successfully fetched arguments." });
      } catch (err) {
        setError(err);
        showToast({ type: "failure", text: "Could not fetch arguments." });
      } finally {
        setLoading(false);
      }
    };

    fetchArguments();
  }, [session]);

  return { loading, data, error };
};

const useSaveSource = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const { showToast } = useToast();

  const saveSource = async (url, quote) => {
    setLoading(true);
    setError(null);

    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const response = await fetch(`${API_URL}/sources`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          url,
          quote,
        }),
      });

      const { data, error } = await response.json();
      if (error) throw error;
      setData(data);
      showToast({ type: "success", text: "Successfully saved source." });
    } catch (err) {
      console.error(err);
      setError(err);
      showToast({ type: "failure", text: "Could not save source." });
    } finally {
      setLoading(false);
    }
  };

  return { saveSource, data, loading, error };
};

const useGetArgumentBySlug = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const getArgumentBySlug = async (slug) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/arguments/${slug}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { data, error } = await response.json();
      if (error) throw error;
      setData(data);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { getArgumentBySlug, data, loading, error };
};

const useDeleteSourceById = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [idToDelete, setIdToDelete] = useState(null);
  const { session } = useAuth();
  const { showToast } = useToast();

  const deleteSourceById = async (id, hideToast = false) => {
    setLoading(true);
    setIdToDelete(id);
    setError(null);

    try {
      const headers = {
        "Content-Type": "application/json",
      };

      if (session) {
        headers["Authorization"] = `Bearer ${session.access_token}`;
      }

      const response = await fetch(`${API_URL}/sources/${id}`, {
        method: "DELETE",
        headers,
      });

      const { data, error } = await response.json();
      if (error) throw error;
      setData(data);
      if (!hideToast)
        showToast({ type: "success", text: "Successfully deleted source." });
    } catch (err) {
      console.error(err);
      setError(err);
      if (!hideToast)
        showToast({ type: "failure", text: "Could not delete source." });
    } finally {
      setLoading(false);
      setIdToDelete(null);
    }
  };

  return { deleteSourceById, data, loading, error, idToDelete };
};

const useDeleteArgumentById = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const { session } = useAuth();
  const { showToast } = useToast();

  const deleteArgumentById = async (id) => {
    setLoading(true);
    setError(null);

    try {
      const headers = {
        "Content-Type": "application/json",
      };

      if (session) {
        headers["Authorization"] = `Bearer ${session.access_token}`;
      }

      const response = await fetch(`${API_URL}/arguments/${id}`, {
        method: "DELETE",
        headers,
      });

      const { data, error } = await response.json();
      if (error) throw error;
      setData(data);
      showToast({ type: "success", text: "Successfully deleted argument." });
    } catch (err) {
      console.error(err);
      setError(err);
      showToast({ type: "failure", text: "Could not delete argument." });
    } finally {
      setLoading(false);
    }
  };

  return { deleteArgumentById, data, loading, error };
};

export {
  useSaveArgument,
  useUpdateArgument,
  useGetAllArguments,
  useSaveSource,
  useGetArgumentBySlug,
  useDeleteSourceById,
  useDeleteArgumentById,
};
