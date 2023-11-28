import { Accordion } from "flowbite-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const exampleLink = "https://sourcespls.com/2342362";
  return (
    <main className="container max-w-6xl mx-auto px-4 py-8 text-center text-primary-dark dark:text-primary-light flex flex-col ">
      <h1 className="text-4xl md:text-5xl mb-12 w-full">About</h1>
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>What is this?</Accordion.Title>
          <Accordion.Content>
            <p>
              "Sources, Please" is an application developed for assembling
              arguments together with the corresponding sources. Ideal for
              online debate, it checks automatically whether quotes are actually
              in the source and provides a shortlink to paste along with your
              outrageous remarks. Like Linktree, only for specific arguments.
            </p>
            <p>
              See an example here at <a href={exampleLink}>{exampleLink}</a>
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>It doesn't work.</Accordion.Title>
          <Accordion.Content>
            <p>
              Sorry to hear that! Some sources are easier to extract information
              from than others. I'm working on supporting more types of sites to
              cite from. If it's not about the source, or something is flat out
              broken, you can contact me{" "}
              <a className="text-accent" href="mailto:admin@nog.codes">
                here
              </a>{" "}
              or over my socials below.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Do you collect any data?</Accordion.Title>
          <Accordion.Content>
            <p>
              As little as possible. Minimal data is collected for to operate
              the login and securing the arguments bound to your account. There
              is no tracking, apart from Googles regular tracking. See it in
              legal terms here:{" "}
              <Link className="text-accent" to={"/privacy"}>
                Privacy
              </Link>
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Why should I sign in?</Accordion.Title>
          <Accordion.Content>
            <p>
              You don't have to! It simply allows you to save your arguments and
              generated shortlinks indefinitely. It also lets you update
              existing ones, so you don't have to create new ones every time you
              want to add or remove a source. The anonymously created arguments
              will expire after 7 days.{" "}
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </main>
  );
};

export default AboutPage;
