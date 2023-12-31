import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SourceContainer from "../components/sources/SourceContainer";
import LoadingArgument from "../components/arguments/LoadingArgument";
import ArgumentError from "../components/arguments/ArgumentError";
import SourcePageImages from "../components/sources/SourcePageImages";
import { useGetArgumentBySlug } from "../lib/apiHooks";

const ArgumentPage = () => {
  const { slug } = useParams();
  const { getArgumentBySlug, data, error, loading } = useGetArgumentBySlug();

  useEffect(() => {
    getArgumentBySlug(slug);
  }, [slug]);

  if (loading) {
    return <LoadingArgument />;
  }

  if (error) {
    return <ArgumentError />;
  }

  const sourceContainers = data.sources.map((source) => (
    <SourceContainer key={source.id} source={source} onDelete={() => {}} />
  ));

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8 text-center dark:text-primary-light">
      <div className="mb-4 md:mb-8">
        <h1 className="text-3xl md:text-5xl leading-tight font-bold mb-4 md:mb-8">
          {data.title}
        </h1>
        <SourcePageImages sources={data.sources} />
      </div>
      {sourceContainers}
    </div>
  );
};

export default ArgumentPage;
