import { supabase } from "../lib/supaBaseClient";

const RedirectPage = () => {
  const user = supabase.auth.getUser().then((user) => {
    console.log(user);
  });
  console.log(user);
  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  );
};

export default RedirectPage;
