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

  const response = await fetch(`${API_URL}/arguments`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });

  return await response.json();
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

  const response = await fetch(`${API_URL}/arguments/${slug}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
  });

  return await response.json();
};

const getAllArguments = async (session) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${session.access_token}`,
  };

  const response = await fetch(`${API_URL}/arguments`, {
    method: "GET",
    headers,
  });

  const { data } = await response.json();
  return data;
};

const saveSource = async (url, quote) => {
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

  return await response.json();
};

export { saveArgument, saveSource, getAllArguments, updateArgument };
