const express = require("express");
const { getSupabaseClient } = require("../util/SupabaseManager");
const router = express.Router();

router.get("/", async (req, res, next) => {
  res.send({ title: "Express" });
});

router.post("/", async (req, res, next) => {
  const { url, title, description, image_url } = req.body;
  const sbClient = getSupabaseClient();

  const { data, error } = await sbClient.from("sources").insert([
    {
      url,
      title,
      description,
      image_url,
    },
  ]);

  if (error) {
    res.status(400).send({ errorMessage: "Couldn't insert source.", error });
  }
});

module.exports = router;
