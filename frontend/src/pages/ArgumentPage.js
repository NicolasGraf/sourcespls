import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SourceContainer from "../components/sources/SourceContainer";
import { BsQuote } from "react-icons/bs";
import LoadingArgument from "../components/arguments/LoadingArgument";
import ArgumentError from "../components/arguments/ArgumentError";
import { getArgumentBySlug } from "../lib/apiController";

const ArgumentPage = () => {
  const { slug } = useParams();
  const [argument, setArgument] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getArgument = async () => {
      setIsLoading(true);
      setError(null);

      const { data, error } = await getArgumentBySlug(slug);
      setIsLoading(false);
      if (error) {
        setError(error);
        return;
      }

      setArgument(data);
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
    return null;
  }

  const sources = argument.sources.map((source) => (
    <SourceContainer key={source.id} source={source} onDelete={() => {}} />
  ));

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8 text-center dark:text-white">
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
