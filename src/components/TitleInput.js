import { TextInput } from "flowbite-react";

const TitleInput = ({ title, onChange }) => {
  return (
    <TextInput
      required
      type="text"
      color="primary"
      sizing="lg"
      className="mb-4"
      placeholder={'Title, e.g. "Elon Musk was wrong on..."'}
      onChange={(e) => onChange(e.target.value)}
      value={title}
    />
  );
};

export default TitleInput;
