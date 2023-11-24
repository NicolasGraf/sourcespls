import express from "express";
import { getSupabaseClient } from "../util/SupabaseManager.js";
import {
  getBrowserInstance,
  getInfoFromContent,
  requestFilterAssetsHandler,
} from "../util/BrowserManager.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.send({ title: "Express" });
});

router.post("/", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ errorMessage: "URL parameter is required." });
  }

  try {
    const parsedUrl = new URL(url);
    let result = await getInformationFromUrl(parsedUrl.href);
    result = { ...result, url: parsedUrl.href };

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
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Insert source error:", error);
      return res.status(400).json({
        errorMessage: "Couldn't insert source.",
        details: error.message,
      });
    }

    const response = {
      ...data,
      imageUrl: data.image_url,
      siteName: data.site_name,
    };

    delete response.image_url;
    delete response.site_name;

    res.status(201).json(response);
  } catch (error) {
    console.error("URL processing error:", error);
    res.status(500).json({
      errorMessage: "Server error occurred while processing the URL.",
    });
  }
});

export default router;
const getInformationFromUrl = async (url) => {
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
    await page.close();

    return {
      url: url,
      ...info,
    };
  } catch (error) {
    throw error;
  }
};
