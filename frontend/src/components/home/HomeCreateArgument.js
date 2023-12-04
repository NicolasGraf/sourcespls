import TitleInput from "./TitleInput";
import { useHomePageContext } from "../../lib/HomePageContext";
import HomeCreateSource from "./HomeCreateSource";
import { useSaveArgument, useUpdateArgument } from "../../lib/apiHooks";
import { useEffect } from "react";
import ResultLink from "./ResultLink";
import Separator from "../common/Seperator";

const HomeCreateArgument = () => {
  const {
    argumentTitle,
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
  const { updateArgument, loading: updateLoading } = useUpdateArgument();

  let createdLink = null;
  if (createdArgumentSlug) {
    const host = window.location.origin;
    createdLink = `${host}/${createdArgumentSlug}`;
  }

  const setInputsEmpty = () => {
    setSourceInputValue("");
    setQuoteInputValue("");
  };

  const saveOrUpdateArgument = async (sources) => {
    const sourceIds = sources.map((source) => source.id);
    const body = { argumentTitle, sourceIds, hideToast: true };

    if (createdArgumentSlug) {
      body.slug = createdArgumentSlug;
      await updateArgument(body);
    } else {
      await saveArgument(body);
    }
    setInputsEmpty();
  };

  useEffect(() => {
    if (savedArgument) {
      setCreatedArgumentSlug(savedArgument.slug);
    }
  }, [savedArgument]);

  return (
    <>
      <h2 className="text-xl text-left md:text-center font-light mb-4">
        Enter a title to your argument, and provide sources and quotes.
      </h2>
      <TitleInput onSubmitTitle={setInputsEmpty} />
      <HomeCreateSource
        loading={saveLoading || updateLoading}
        onSaveSource={saveOrUpdateArgument}
      />
      {createdLink && <Separator />}
      <ResultLink createdLink={createdLink} />
    </>
  );
};

export default HomeCreateArgument;
