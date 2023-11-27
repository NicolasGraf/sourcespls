const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3030"
    : "https://api.sourcespls.com";

const saveArgument = async ({ argumentTitle, sourceIds, session }) => {
  const body = {
    title: argumentTitle,
    sourceIds,
  };

  const headers = {
    "Content-Type": "application/json",
  };

  if (session) {
    headers["Authorization"] = `Bearer ${session.access_token}`;
    console.log(session.user.id);
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
    return { data };
  } catch (error) {
    console.error(error);
    return { error };
  }
};

const updateArgument = async ({ slug, argumentTitle, sourceIds, session }) => {
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
    return { data };
  } catch (error) {
    console.error(error);
    return { error };
  }
};

const getAllArguments = async (session) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${session.access_token}`,
  };

  try {
    const response = await fetch(`${API_URL}/arguments`, {
      method: "GET",
      headers,
    });

    const { data, error } = await response.json();
    if (error) throw error;
    return { data };
  } catch (error) {
    console.error(error);
    return [];
  }
};

const saveSource = async (url, quote) => {
  try {
    const response = await fetch(`${API_URL}/sources`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url,
        quote,
      }),
    });

    const { data, error } = await response.json();
    if (error) throw error;
    return { data };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

const getArgumentBySlug = async (slug) => {
  try {
    const response = await fetch(`${API_URL}/arguments/${slug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { data, error } = await response.json();
    if (error) throw error;
    return { data };
  } catch (error) {
    console.error(error);
    return { error };
  }
};

const deleteSourceById = async (id, session) => {
  try {
    let headers = {
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
    return { data };
  } catch (error) {
    console.error(error);
    return { error };
  }
};

const deleteArgumentById = async (id, session) => {
  try {
    let headers = {
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
    return { data };
  } catch (error) {
    console.error(error);
    return { error };
  }
};

export {
  saveArgument,
  saveSource,
  getAllArguments,
  updateArgument,
  getArgumentBySlug,
  deleteSourceById,
  deleteArgumentById,
};
