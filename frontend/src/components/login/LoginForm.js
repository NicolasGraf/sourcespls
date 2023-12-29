import React from "react";
import { Button, Label, Spinner, TextInput } from "flowbite-react";
import { supabase } from "../../lib/supaBaseClient";
import { useToast } from "../../lib/toastProvider";

const LoginForm = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { showToast } = useToast();

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    setIsSubmitting(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setIsSubmitting(false);
    if (error) showToast({ type: "failure", text: error.message });
  };
  return (
    <form className="flex flex-col gap-2" onSubmit={onFormSubmit}>
      <Label htmlFor="email" value="Email" className="font-bold" />
      <TextInput
        color="primary"
        id="email"
        type="email"
        className="mb-2"
        placeholder="Enter your Email"
      />
      <Label htmlFor="password" value="Password" className="font-bold" />
      <TextInput
        color="primary"
        id="password"
        type="password"
        placeholder="Enter your Password"
      />
      <Button type="submit" className="mt-4">
        Login
        {isSubmitting && (
          <Spinner className="ml-2" color="gray" size="sm" light="on" />
        )}
      </Button>
    </form>
  );
};

export default LoginForm;
