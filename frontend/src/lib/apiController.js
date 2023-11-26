const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3030"
    : "https://api.sourcespls.com";

const saveArgument = async ({ argumentTitle, sourceIds }) => {
  const body = {
    title: argumentTitle,
    sourceIds,
  };

  const response = await fetch(`${API_URL}/arguments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await response.json();
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

export { saveArgument, saveSource };
