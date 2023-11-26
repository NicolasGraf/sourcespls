import puppeteer from "puppeteer";
import {load} from "cheerio";

let browser;

const getBrowserInstance = async () => {
  if (!browser) {
    browser = await puppeteer.launch({
      executablePath: '/usr/bin/google-chrome',
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
  const resourcesToAbort = ["image", "stylesheet", "font"];

  if (resourcesToAbort.includes(request.resourceType())) {
    request.abort();
  } else {
    request.continue();
  }
};

const verifyQuoteFromContent = (content, quote) => {
  if (!quote) return false;
  const $ = load(content);
  const text = $("body").text();
  return text.includes(quote);
};

const getInfoFromContent = (content, url) => {
  const $ = load(content);

  const title =
    $('meta[property="og:title"]').attr("content") ||
    $("title").text() ||
    "No Title";

  const description =
    $('meta[property="og:description"]').attr("content") ||
    $('meta[name="description"]').attr("content") ||
    "";

  const getImage = () => {
    const image = $('meta[property="og:image"]').attr("content") || "";
    if (image && !image.startsWith("http")) {
      const baseUrl = new URL(url).origin;
      return baseUrl + image;
    }
    return image;
  };

  const siteName =
    $('meta[property="og:site_name"]').attr("content") ||
    $('meta[property="og:site"]').attr("content") ||
    $('meta[property="author"]').attr("content") ||
    new URL(url).hostname.replace("www.", "") ||
    "";

  const getIcon = () => {
    const icon =
      $('link[rel="icon"]').attr("href") ||
      $('link[rel="shortcut icon"]').attr("href") ||
      $('link[rel="apple-touch-icon"]').attr("href") ||
      $('link[rel="apple-touch-icon-precomposed"]').attr("href") ||
      "";

    if (icon && icon.startsWith("//")) {
      return "https:" + icon;
    }

    if (icon && !icon.startsWith("http")) {
      const baseUrl = new URL(url).origin;
      return baseUrl + icon;
    }
    return icon;
  };

  return {
    title: title,
    siteName: siteName,
    description: description,
    imageUrl: getImage(),
    icon: getIcon(),
  };
};

export {
  getBrowserInstance,
  closeBrowserInstance,
  requestFilterAssetsHandler,
  getInfoFromContent,
  verifyQuoteFromContent,
};
