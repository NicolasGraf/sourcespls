import { Button, TextInput } from "flowbite-react";
import { AiOutlinePlus } from "react-icons/ai";
import { useHomePageContext } from "../../lib/HomePageContext";

const TitleInput = ({ onSubmitTitle }) => {
  const { argumentTitle, setArgumentTitle, sourceInputValue } =
    useHomePageContext();

  const onSubmit = (event) => {
    event.preventDefault();
    onSubmitTitle();
  };

  const getAddButton = () => {
    return (
      <Button type="submit" className="mb-4" disabled={!argumentTitle}>
        Add Sources
        <AiOutlinePlus className="ml-2" />
      </Button>
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <TextInput
        required
        type="text"
        color="primary"
        sizing="lg"
        className="mb-4"
        placeholder={'Title, e.g. "Elon Musk was wrong on..."'}
        onChange={(e) => setArgumentTitle(e.target.value)}
        value={argumentTitle}
      />
      {sourceInputValue === null ? getAddButton() : null}
    </form>
  );
};

export default TitleInput;
