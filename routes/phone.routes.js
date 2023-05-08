const router = require("express").Router();
const phonesJson = require("../db/phones.json");

router.get("/", (req, res, next) => {
  res.json(phonesJson);
});

router.get("/:id", (req, res, next) => {
    const id = req.params.id;
    try {
        const phone = phonesJson.find((phones) => {return phones.id == id});
        if (!phone) {
          res.status(404).send("Phone not found");
        } else {
          res.json(phone);
        }
    } catch (err) {
        next(err);
    }
  });

module.exports = router;
