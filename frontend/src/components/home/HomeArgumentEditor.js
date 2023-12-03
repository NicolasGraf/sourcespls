import TitleInput from "./TitleInput";
import StartAddingSources from "./StartAddingSources";
import { useHomePageContext } from "../../lib/HomePageContext";
import HomeSourceEditor from "./HomeSourceEditor";
import { useSaveArgument, useUpdateArgument } from "../../lib/apiHooks";
import { useEffect } from "react";
import ResultLink from "./ResultLink";
import Separator from "../common/Seperator";

const HomeArgumentEditor = () => {
  const {
    argumentTitle,
    setArgumentTitle,
    sourceInputValue,
    setSourceInputValue,
    setQuoteInputValue,
    createdArgumentSlug,
    setCreatedArgumentSlug,
  } = useHomePageContext();
  const {
    saveArgument,
    data: savedArgument,
    loading: saveLoading,
  } = useSaveArgument();
  const {
    updateArgument,
    data: updatedArgument,
    loading: updateLoading,
  } = useUpdateArgument();
  const host = window.location.origin;
  let createdLink = null;
  if (createdArgumentSlug) {
    createdLink = `${host}/${createdArgumentSlug}`;
  }

  const setInputsEmpty = () => {
    setSourceInputValue("");
    setQuoteInputValue("");
  };

  const saveOrUpdateArgument = async (sources) => {
    setInputsEmpty();
    console.log(sources);
    const sourceIds = sources.map((source) => source.id);
    if (createdArgumentSlug) {
      await updateArgument({
        slug: createdArgumentSlug,
        argumentTitle,
        sourceIds,
      });
    } else {
      await saveArgument({ argumentTitle, sourceIds });
    }
  };

  useEffect(() => {
    if (savedArgument || updatedArgument) {
      setCreatedArgumentSlug(savedArgument.slug);
    }
  }, [savedArgument, updatedArgument]);

  return (
    <>
      <h2 className="text-xl mb-4">
        Enter a title to your argument, and provide sources and quotes.
      </h2>
      <TitleInput title={argumentTitle} onChange={setArgumentTitle} />
      <StartAddingSources
        hasTitle={argumentTitle !== ""}
        sourceInputValue={sourceInputValue}
        onStartAdding={setInputsEmpty}
      />
      <HomeSourceEditor
        loading={saveLoading || updateLoading}
        onSaveSource={saveOrUpdateArgument}
      />
      {createdLink && <Separator />}
      <ResultLink createdLink={createdLink} />
    </>
  );
};

export default HomeArgumentEditor;
