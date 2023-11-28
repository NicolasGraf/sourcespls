import TitleInput from "./TitleInput";
import AddSourceButton from "./AddSourceButton";
import { saveSource } from "../../lib/apiController";
import { useMainPageContext } from "../../lib/mainPageContext";
import MainSourceEditor from "./MainSourceEditor";
import { useToast } from "../../lib/toastProvider";

const MainArgumentEditor = () => {
  const {
    setSources,
    sources,
    argumentTitle,
    setArgumentTitle,
    sourceInputValue,
    quoteInputValue,
    setSourceInputValue,
    setQuoteInputValue,
    setIsSourceLoading,
    setHasSourceError,
  } = useMainPageContext();

  const { showToast } = useToast();

  const setInputsEmpty = () => {
    setSourceInputValue("");
    setQuoteInputValue("");
  };

  const onSaveSource = async () => {
    setIsSourceLoading(true);
    setHasSourceError(false);
    const { data, error } = await saveSource(sourceInputValue, quoteInputValue);
    setIsSourceLoading(false);
    if (error) {
      setHasSourceError(true);
      showToast({ type: "failure", text: "Source could not be saved." });
      return;
    }

    setInputsEmpty();
    showToast({ type: "success", text: "Source successfully saved." });
    setSources([...sources, data]);
    setHasSourceError(false);
  };

  return (
    <>
      <h2 className="text-xl mb-4">
        Enter a title to your argument, and provide sources and quotes.
      </h2>
      <TitleInput title={argumentTitle} onChange={setArgumentTitle} />
      <AddSourceButton
        hasTitle={argumentTitle !== ""}
        sourceInputValue={sourceInputValue}
        addSource={setInputsEmpty}
      />
      <MainSourceEditor saveSource={onSaveSource} />
    </>
  );
};

export default MainArgumentEditor;
