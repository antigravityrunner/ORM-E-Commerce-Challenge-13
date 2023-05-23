const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const cats = await Category.findAll({
    include: [
      {
        model: Product,
      },
    ],
  });

  res.status(200).json(cats);
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const cats = await Category.findByPk(req.params.id, {
    include: [
      {
        model: Product,
      },
    ],
  });

  res.status(200).json(cats);
});

router.post("/", (req, res) => {
  // create a new category
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  const cats = await Category.destroy({ where: { id: req.params.id } });
  res.status(200);
});

module.exports = router;
