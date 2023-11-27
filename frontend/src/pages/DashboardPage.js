import { supabase } from "../lib/supaBaseClient";

const DashboardPage = () => {
  const user = supabase.auth.getUser().then((user) => {
    console.log(user);
  });

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default DashboardPage;
