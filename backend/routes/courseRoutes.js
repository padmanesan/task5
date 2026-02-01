const express = require("express");
const Course = require("../models/Course");
const router = express.Router();

// Get all courses
router.get("/", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

// Create course
router.post("/", async (req, res) => {
  const course = await Course.create(req.body);
  res.status(201).json(course);
});

// Update course
router.put("/:id", async (req, res) => {
  const updated = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

// Delete course
router.delete("/:id", async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ message: "Course deleted" });
});

module.exports = router;
