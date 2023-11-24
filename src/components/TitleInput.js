import { TextInput } from "flowbite-react";

const TitleInput = ({ title, onChange }) => {
  return (
    <TextInput
      required
      type="text"
      color="primary"
      sizing="lg"
      className="mb-4"
      placeholder="Topic of the argument"
      onChange={(e) => onChange(e.target.value)}
      value={title}
    />
  );
};

export default TitleInput;
