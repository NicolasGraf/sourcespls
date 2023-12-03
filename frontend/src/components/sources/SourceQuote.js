import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";

const SourceQuote = ({ source }) => {
  const { quote } = source;
  if (!quote) return null;

  const getVerifiedQuoteIcon = () => {
    if (source.quoteVerified) {
      return (
        <>
          <FaCheckCircle className="text-2xl text-green-500" />
          <span>This quote was found in the source.</span>
        </>
      );
    }
    return (
      <>
        <FaExclamationCircle className="text-2xl text-orange-800" />
        <span>
          The quote couldn't be found in the source. This might be due to a
          paywall.
        </span>
      </>
    );
  };
  return (
    <div className="text-primary-dark dark:text-secondary-light mt-4">
      <div className="flex flex-col items-center md:items-start gap-4">
        <p className="bg-[#ffed9c] dark:bg-[#fbf06f] dark:text-secondary-dark text-lg md:text-xl font-bold px-1">
          <BiSolidQuoteLeft className={"inline text-2xl mr-2"} />
          <span className="inline">{quote}</span>
          <BiSolidQuoteRight className="inline text-2xl ml-2" />
        </p>
        <div className="self-start flex gap-2">{getVerifiedQuoteIcon()}</div>
      </div>
    </div>
  );
};

export default SourceQuote;
