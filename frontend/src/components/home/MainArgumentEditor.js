import TitleInput from "./TitleInput";
import StartAddingSources from "./StartAddingSources";
import { useMainPageContext } from "../../lib/mainPageContext";
import MainSourceEditor from "./MainSourceEditor";

const MainArgumentEditor = () => {
  const {
    argumentTitle,
    setArgumentTitle,
    sourceInputValue,
    setSourceInputValue,
    setQuoteInputValue,
  } = useMainPageContext();

  const setInputsEmpty = () => {
    setSourceInputValue("");
    setQuoteInputValue("");
  };

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
      <MainSourceEditor resetSourceForm={setInputsEmpty} />
    </>
  );
};

export default MainArgumentEditor;
