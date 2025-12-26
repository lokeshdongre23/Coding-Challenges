import { Router, Request, Response } from "express";
import MenuItem from "../models/menueMOdels";

const router = Router();

// Get all menu items
router.get("/", async (req: Request, res: Response) => {
  const menu = await MenuItem.find();
  res.json(menu);
});

// Add new menu item
router.post("/", async (req: Request, res: Response) => {
  const { name, category, price } = req.body;
  const newItem = new MenuItem({ name, category, price });
  await newItem.save();
  res.status(201).json(newItem);
});

// Update menu item
router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedItem = await MenuItem.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedItem) return res.status(404).send("Not found");
  res.json(updatedItem);
});

// Delete menu item
router.delete("/:id", async (req: Request, res: Response) => {
  await MenuItem.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

export default router;
