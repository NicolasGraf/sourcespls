const saveArgument = async ({ argumentTitle, sourceIds }) => {
  const body = {
    title: argumentTitle,
    sourceIds,
  };

  const response = await fetch(`http://localhost:3030/arguments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await response.json();
};

const saveSource = async (url, quote) => {
  const response = await fetch(`http://localhost:3030/sources`, {
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
