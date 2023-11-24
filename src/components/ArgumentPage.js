import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SourceContainer from "./SourceContainer";
import { BsQuote } from "react-icons/bs";
import LoadingArgument from "./LoadingArgument";
import ArgumentError from "./ArgumentError";

const ArgumentPage = () => {
  const { slug } = useParams();
  const [argument, setArgument] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getArgument = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`http://localhost:3030/arguments/${slug}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        if (data.errorMessage) {
          throw new Error(data.errorMessage);
        }

        setArgument(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getArgument();
  }, [slug]);

  if (isLoading) {
    return <LoadingArgument />;
  }

  if (error) {
    return <ArgumentError />;
  }

  if (!argument) {
    return <div>Argument not found</div>;
  }

  const sources = argument.sources.map((source) => (
    <SourceContainer key={source.id} source={source} onDelete={() => {}} />
  ));

  return (
    <div className="container mx-auto px-4 py-8 text-center dark:text-white">
      <div className="flex justify-center mb-8">
        <BsQuote className="text-4xl text-gray-500 inline-block" />
        <h1 className="text-6xl">{argument.title}</h1>
        <BsQuote className="text-4xl text-gray-500 inline-block" />
      </div>

      {sources}
    </div>
  );
};

export default ArgumentPage;
