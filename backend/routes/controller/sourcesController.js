import {
  getBrowserInstance,
  getInfoFromContent,
  requestFilterAssetsHandler,
  verifyQuoteFromContent,
} from "../../util/BrowserManager.js";
import { getSupabaseClient } from "../../util/SupabaseManager.js";

const insertSource = async (url, quote) => {
  if (!url) {
    throw { status: 400, message: "URL parameter is required." };
  }
  let result = await getInformationFromUrl(url.href, quote);
  result = { ...result, url: url.href };

  const sbClient = getSupabaseClient();
  const { data, error } = await sbClient
    .from("sources")
    .insert([
      {
        url: result.url,
        title: result.title,
        site_name: result.siteName,
        description: result.description,
        image_url: result.imageUrl,
        icon: result.icon,
        quote: quote,
        quote_verified: result.quoteVerified,
      },
    ])
    .select()
    .single();

  if (error) throw error;

  const responseData = {
    ...data,
    imageUrl: data.image_url,
    siteName: data.site_name,
    quoteVerified: data.quote_verified,
  };

  delete responseData.image_url;
  delete responseData.site_name;
  delete responseData.quote_verified;

  return { data: responseData };
};

const getInformationFromUrl = async (url, quote) => {
  const browser = await getBrowserInstance();
  console.log("got browser instance");

  try {
    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
    );
    await page.setRequestInterception(true);

    page.on("request", requestFilterAssetsHandler);
    await page.goto(url, { waitUntil: "networkidle2" });
    const content = await page.content();
    const info = getInfoFromContent(content, url);
    const quoteVerified = verifyQuoteFromContent(content, quote);
    await page.close();

    return {
      url: url,
      quoteVerified,
      ...info,
    };
  } catch (error) {
    throw error;
  }
};

export { insertSource };
