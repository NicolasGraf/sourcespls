import React from "react";
import { useToast } from "../../lib/toastProvider";
import { supabase } from "../../lib/supaBaseClient";
import { Button, Label, Spinner, TextInput } from "flowbite-react";

const SignupForm = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { showToast } = useToast();

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    setIsSubmitting(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/admin`,
      },
    });
    setIsSubmitting(false);
    if (data.user) {
      showToast({
        type: "success",
        text: "Check your email for the confirmation link",
      });
    }
    if (error) showToast({ type: "failure", text: error.message });
  };
  return (
    <form className="flex flex-col gap-2" onSubmit={onFormSubmit}>
      <Label htmlFor="email" value="Email" className="font-bold" />
      <TextInput
        required
        color="primary"
        id="email"
        type="email"
        className="mb-2"
        placeholder="Enter your Email"
      />
      <Label htmlFor="password" value="Password" className="font-bold" />
      <TextInput
        required
        color="primary"
        id="password"
        type="password"
        placeholder="Enter your Password"
      />
      <Button type="submit" className="mt-4">
        Sign Up
        {isSubmitting && (
          <Spinner className="ml-2" color="gray" size="sm" light="on" />
        )}
      </Button>
    </form>
  );
};

export default SignupForm;
