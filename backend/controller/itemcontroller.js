import fs from "fs";
import path from "path";
import itemModel from "../models/itemmodel.js";
import shoesModel from "../models/shoesmodel.js";
import dressModel from "../models/dressmodel.js";
import menModel from "../models/menmodel.js";

// Generic handler for adding any item
const handleItemUpload = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: "No file uploaded. Ensure the field name is 'image'." });
  }

  const image_filename = req.file.filename;

  const item = new itemModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    price_1: req.body.price_1,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await item.save();
    res.json({ success: true, message: "Item Added" });
  } catch (error) {
    console.error("Error adding item:", error);
    res.status(500).json({ success: false, message: "Error adding item" });
  }
};


const shoesItemUpload = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: "No file uploaded. Ensure the field name is 'image'." });
  }

  const image_filename = req.file.filename;

  const item = new shoesModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    price_1: req.body.price_1,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await item.save();
    res.json({ success: true, message: "Item Added" });
  } catch (error) {
    console.error("Error adding item:", error);
    res.status(500).json({ success: false, message: "Error adding item" });
  }
};

const dressItemUpload = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: "No file uploaded. Ensure the field name is 'image'." });
  }

  const image_filename = req.file.filename;

  const item = new dressModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    price_1: req.body.price_1,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await item.save();
    res.json({ success: true, message: "Item Added" });
  } catch (error) {
    console.error("Error adding item:", error);
    res.status(500).json({ success: false, message: "Error adding item" });
  }
};

const menItemUpload = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: "No file uploaded. Ensure the field name is 'image'." });
  }

  const image_filename = req.file.filename;

  const item = new menModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    price_1: req.body.price_1,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await item.save();
    res.json({ success: true, message: "Item Added" });
  } catch (error) {
    console.error("Error adding item:", error);
    res.status(500).json({ success: false, message: "Error adding item" });
  }
};

const listitem = async (req, res) => {
  try {
    const items = await itemModel.find({});
    res.json({ success: true, data: items });
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ success: false, message: "Error fetching items" });
  }
};
const shoeslistitem = async (req, res) => {
  try {
    const items = await shoesModel.find({ }); // 🛠️ fixed
    res.json({ success: true, data: items });
  } catch (error) {
    console.error("Error fetching shoes items:", error);
    res.status(500).json({ success: false, message: "Error fetching shoes items" });
  }
};

const watcheslistitem = async (req, res) => {
  try {
    const items = await menModel.find({  }); // 🛠️ fixed
    res.json({ success: true, data: items });
  } catch (error) {
    console.error("Error fetching watch items:", error);
    res.status(500).json({ success: false, message: "Error fetching watch items" });
  }
};

const dresslistitem = async (req, res) => {
  try {
    const items = await dressModel.find({  }); // 🛠️ fixed
    res.json({ success: true, data: items });
  } catch (error) {
    console.error("Error fetching dress items:", error);
    res.status(500).json({ success: false, message: "Error fetching dress items" });
  }
};
// Get item by ID
const getItemById = async (req, res) => {
  try {
    const item = await itemModel.findById(req.params.id)||await shoesModel.findById(req.params.id)||await dressModel.findById(req.params.id)||await menModel.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, message: "Item not found" });
    }
    res.json(item); // return the item directly
  } catch (error) {
    console.error("Error fetching item:", error);
    res.status(500).json({ success: false, message: "Error fetching item" });
  }
};


const removeitem = async (req, res) => {
  try {
    const item = await itemModel.findById(req.body.id);

    if (!item) {
      return res.status(404).json({ success: false, message: "Item not found" });
    }

    const imagePath = path.join("uploads", item.image);

    fs.access(imagePath, fs.constants.F_OK, (err) => {
      if (!err) {
        fs.unlink(imagePath, (unlinkErr) => {
          if (unlinkErr) {
            console.error("Error deleting file:", unlinkErr);
          }
        });
      }
    });

    await itemModel.findByIdAndDelete(req.body.id);

    res.json({ success: true, message: "Item Removed" });
  } catch (error) {
    console.error("Error removing item:", error);
    res.status(500).json({ success: false, message: "Error removing item" });
  }
};
const removeshoesitem = async (req, res) => {
  try {
    const item = await shoesModel.findById(req.body.id);

    if (!item) {
      return res.status(404).json({ success: false, message: "Item not found" });
    }

    const imagePath = path.join("uploads", item.image);

    fs.access(imagePath, fs.constants.F_OK, (err) => {
      if (!err) {
        fs.unlink(imagePath, (unlinkErr) => {
          if (unlinkErr) {
            console.error("Error deleting file:", unlinkErr);
          }
        });
      }
    });

    await shoesModel.findByIdAndDelete(req.body.id);

    res.json({ success: true, message: "Item Removed" });
  } catch (error) {
    console.error("Error removing item:", error);
    res.status(500).json({ success: false, message: "Error removing item" });
  }
};
const removedressitem = async (req, res) => {
  try {
    const item = await dressModel.findById(req.body.id);

    if (!item) {
      return res.status(404).json({ success: false, message: "Item not found" });
    }

    const imagePath = path.join("uploads", item.image);

    fs.access(imagePath, fs.constants.F_OK, (err) => {
      if (!err) {
        fs.unlink(imagePath, (unlinkErr) => {
          if (unlinkErr) {
            console.error("Error deleting file:", unlinkErr);
          }
        });
      }
    });

    await dressModel.findByIdAndDelete(req.body.id);

    res.json({ success: true, message: "Item Removed" });
  } catch (error) {
    console.error("Error removing item:", error);
    res.status(500).json({ success: false, message: "Error removing item" });
  }
};
const removemenitem = async (req, res) => {
  try {
    const item = await menModel.findById(req.body.id);

    if (!item) {
      return res.status(404).json({ success: false, message: "Item not found" });
    }

    const imagePath = path.join("uploads", item.image);

    fs.access(imagePath, fs.constants.F_OK, (err) => {
      if (!err) {
        fs.unlink(imagePath, (unlinkErr) => {
          if (unlinkErr) {
            console.error("Error deleting file:", unlinkErr);
          }
        });
      }
    });

    await menModel.findByIdAndDelete(req.body.id);

    res.json({ success: true, message: "Item Removed" });
  } catch (error) {
    console.error("Error removing item:", error);
    res.status(500).json({ success: false, message: "Error removing item" });
  }
};

export {
  handleItemUpload as additem,
  shoesItemUpload,
  menItemUpload,
  dressItemUpload,
  listitem,
  shoeslistitem,
  dresslistitem,
  watcheslistitem,
  removeitem,
  removeshoesitem,
  removedressitem,
  removemenitem,
  getItemById,
};

