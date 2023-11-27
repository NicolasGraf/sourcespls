import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";
import { Tooltip } from "flowbite-react";

const SourceQuote = ({ source }) => {
  const { quote } = source;
  if (!quote) return null;

  const getVerifiedQuoteIcon = () => {
    if (source.quoteVerified) {
      return (
        <Tooltip
          content={"This quote was found in the source."}
          style={"auto"}
          placement={"top"}
        >
          <FaCheckCircle className="text-2xl text-green-500" />
        </Tooltip>
      );
    }
    return (
      <Tooltip
        style={"auto"}
        className="w-max"
        content={
          "The quote couldn't be found in the source. This might be due to a paywall."
        }
      >
        <FaExclamationCircle className="text-2xl text-orange-800" />
      </Tooltip>
    );
  };
  return (
    <div className="text-primary-dark dark:text-secondary-light mt-4">
      <div className="flex flex-col md:flex-row items-center gap-2">
        <span className="text-xl md:text-3xl self-start">
          <BiSolidQuoteLeft />
        </span>
        <span className="bg-[#ffed9c] dark:bg-[#dcc76a] dark:text-secondary-dark text-lg px-1">
          {quote}
        </span>
        <span className="text-xl md:text-3xl self-end">
          <BiSolidQuoteRight />
        </span>
        <div className="self-start">{getVerifiedQuoteIcon()}</div>
      </div>
    </div>
  );
};

export default SourceQuote;
