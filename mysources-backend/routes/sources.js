const express = require("express");
const { getSupabaseClient } = require("../util/SupabaseManager");
const {
  getBrowserInstance,
  requestFilterAssetsHandler,
  getInfoFromContent,
} = require("../util/BrowserManager");
const router = express.Router();

router.get("/", async (req, res, next) => {
  res.send({ title: "Express" });
});

router.post("/", async (req, res, next) => {
  const { url } = req.body;

  if (!url) {
    res.status(400).send({ errorMessage: "URL parameter is required." });
    return;
  }

  try {
    const parsedUrl = new URL(url);
    let result = await getInformationFromUrl(parsedUrl.href);
    result = { ...result, url: parsedUrl.href };

    const sbClient = getSupabaseClient();

    const { error } = await sbClient.from("sources").insert([
      {
        url: result.url,
        title: result.title,
        description: result.description,
        image_url: result.imageUrl,
      },
    ]);

    if (error) {
      res.status(400).send({ errorMessage: "Couldn't insert source.", error });
      return;
    }
    res.send(result);
  } catch (error) {
    res
      .status(400)
      .send({ errorMessage: "Couldn't extract info from URL.", error });
  }
});

module.exports = router;

const getInformationFromUrl = async (url) => {
  const browser = await getBrowserInstance();
  console.log("got browser instance");

  try {
    const page = await browser.newPage();
    await page.setRequestInterception(true);

    page.on("request", requestFilterAssetsHandler);
    await page.goto(url, { waitUntil: "domcontentloaded" });
    const content = await page.content();
    const info = getInfoFromContent(content);

    return {
      url: url,
      ...info,
    };
  } catch (error) {
    throw error;
  }
};
