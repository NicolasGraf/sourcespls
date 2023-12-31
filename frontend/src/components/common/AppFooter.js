import { Footer } from "flowbite-react";
import { BsGitlab, BsInstagram, BsTwitter } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

const AppFooter = () => {
  return (
    <Footer className="shadow-[0px_-3px_6px_0px_#00000018]" container>
      <div className="w-full gap-2 flex flex-col md:flex-row items-center md:justify-between dark:text-secondary-light">
        <Footer.Copyright href="https://nog.codes" by="NOG" year={2023} />
        <div className="flex justify-center gap-1.5 items-center text-md">
          <span>Made with</span>
          <span>
            <AiFillHeart className={"text-lg"} />
          </span>
          <a className="hover:underline rainbow" href="https://nog.codes">
            by nog.codes
          </a>
        </div>
        <div className="mt-4 flex space-x-6 md:mt-0 sm:justify-center">
          <Footer.Icon
            href="https://instagram.com/nckgrf_"
            target="_blank"
            icon={BsInstagram}
          />
          <Footer.Icon href="https://twitter.com/nckgrf" icon={BsTwitter} />
          <Footer.Icon href="https://gitlab.com/nckgrf" icon={BsGitlab} />
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;
