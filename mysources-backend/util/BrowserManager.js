const puppeteer = require("puppeteer");
const { load } = require("cheerio");
let browser;

const getBrowserInstance = async () => {
  if (!browser) {
    browser = await puppeteer.launch({
      headless: "new",
    });
  }
  return browser;
};

const closeBrowserInstance = async () => {
  if (browser) {
    await browser.close();
    browser = null;
  }
};

const requestFilterAssetsHandler = (request) => {
  const resourcesToAbort = ["image", "stylesheet", "font", "script"];

  if (resourcesToAbort.includes(request.resourceType())) {
    request.abort();
  } else {
    request.continue();
  }
};

const getInfoFromContent = (content) => {
  const $ = load(content);

  const getTitle = () =>
    $('meta[property="og:title"]').attr("content") || $("title").text();
  const getDescription = () =>
    $('meta[property="og:description"]').attr("content") ||
    $('meta[name="description"]').attr("content");
  const getImage = () => $('meta[property="og:image"]').attr("content");

  return {
    title: getTitle(),
    description: getDescription(),
    image: getImage(),
  };
};

module.exports = {
  getBrowserInstance,
  closeBrowserInstance,
  requestFilterAssetsHandler,
  getInfoFromContent,
};
