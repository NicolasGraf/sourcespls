import { TextInput } from "flowbite-react";

const TitleInput = ({ title, onChange }) => {
  return (
    <TextInput
      sizing="lg"
      className="mb-4"
      required
      placeholder="Topic of the argument"
      onIn
      onChange={(e) => onChange(e.target.value)}
      value={title}
    />
  );
};

export default TitleInput;
