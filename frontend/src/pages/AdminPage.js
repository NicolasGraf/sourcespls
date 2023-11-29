import { Link, Outlet } from "react-router-dom";

const AdminPage = () => {
  return (
    <>
      <div className="w-full border-t border-black p-4 dark:bg-secondary-dark flex justify-center items-center gap-4">
        <Link className="border-b border-accent" to={"saved-arguments"}>
          Saved Arguments
        </Link>
      </div>
      <main className="container mx-auto px-4 py-8 text-center dark:text-primary-light">
        <Outlet />
      </main>
    </>
  );
};

export default AdminPage;
