import TitleInput from "./TitleInput";
import AddSourceButton from "./home/AddSourceButton";
import { saveSource } from "../lib/apiController";
import { useMainPageContext } from "../lib/mainPageContext";
import MainSourceEditor from "./MainSourceEditor";

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

  const setInputsEmpty = () => {
    setSourceInputValue("");
    setQuoteInputValue("");
  };

  const onSaveSource = async () => {
    setIsSourceLoading(true);
    setHasSourceError(false);
    try {
      const responseBody = await saveSource(sourceInputValue, quoteInputValue);
      if (responseBody.error || responseBody.errorMessage) {
        throw responseBody.error;
      }
      setInputsEmpty();
      setSources([...sources, responseBody]);
    } catch (error) {
      setHasSourceError(true);
      console.error("Failed to fetch URL data:", error);
    } finally {
      setIsSourceLoading(false);
    }
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
