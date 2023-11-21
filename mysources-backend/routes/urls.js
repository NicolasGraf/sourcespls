const express = require("express");
const router = express.Router();
const {
  getBrowserInstance,
  requestFilterAssetsHandler,
  getInfoFromContent,
} = require("../util/BrowserManager");

router.get("/", async (req, res, next) => {
  res.send("respond with a resource");
});

router.get("/lookup", async (req, res, next) => {
  const url = req.query.url;

  if (!url) {
    res.status(400).send({ errorMessage: "URL query parameter is required." });
    return;
  }

  try {
    const parsedUrl = new URL(url);
    const result = await getInformationFromUrl(parsedUrl.href);
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
