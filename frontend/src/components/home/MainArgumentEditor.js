import TitleInput from "./TitleInput";
import AddSourceButton from "./AddSourceButton";
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
      <AddSourceButton
        hasTitle={argumentTitle !== ""}
        sourceInputValue={sourceInputValue}
        addSource={setInputsEmpty}
      />
      <MainSourceEditor setInputsEmpty={setInputsEmpty} />
    </>
  );
};

export default MainArgumentEditor;
