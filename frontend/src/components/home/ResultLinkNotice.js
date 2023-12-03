import { Link } from "react-router-dom";
import { useAuth } from "../../lib/authProvider";

const ResultLinkNotice = () => {
  const { session } = useAuth();

  if (session) {
    return (
      <h4 className="mt-2 italic">
        See your saved links in the{" "}
        <Link className="text-accent" to={"/admin"}>
          admin section
        </Link>
        .
      </h4>
    );
  }

  return (
    <h4 className="mt-2 italic">
      This link will expire in 7 days. To save your links, you can{" "}
      <Link className="text-accent" to={"/login"}>
        sign in
      </Link>
      .
    </h4>
  );
};

export default ResultLinkNotice;
