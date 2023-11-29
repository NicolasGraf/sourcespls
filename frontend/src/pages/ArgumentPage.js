import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SourceContainer from "../components/sources/SourceContainer";
import LoadingArgument from "../components/arguments/LoadingArgument";
import ArgumentError from "../components/arguments/ArgumentError";
import { getArgumentBySlug } from "../lib/apiController";
import SourcePageImages from "../components/sources/SourcePageImages";

const ArgumentPage = () => {
  const { slug } = useParams();
  const [argument, setArgument] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getArgument = async () => {
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

  const sourceContainers = argument.sources.map((source) => (
    <SourceContainer key={source.id} source={source} onDelete={() => {}} />
  ));

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8 text-center dark:text-primary-light">
      <div className="mb-4 md:mb-8">
        <h1 className="text-3xl md:text-5xl leading-tight font-bold mb-4">
          {argument.title}
        </h1>
        <h4 className="dark:text-secondary-light mb-8 text-xl">
          by Anonymous User
        </h4>
        <SourcePageImages sources={argument.sources} />
      </div>
      {sourceContainers}
    </div>
  );
};

export default ArgumentPage;
