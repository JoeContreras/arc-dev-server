const Project = require("../models/project");

const ProjectCtrl = {
  create: async (req, res) => {
    const project = new Project({
      ...req.body,
      // owner: req.user.id,
    });

    try {
      await project.save();
      res.json({ msg: "Project successfully created" });
    } catch (err) {
      return res.status(400).json({ msg: err.message });
    }
  },
  fetchMany: async (req, res) => {
    try {
      const project = await Project.find();
      res.status(200).json(project);
    } catch (err) {
      return res.status(400).json({ msg: err.message });
    }
  },
  delete: async (req, res) => {
    try {
      const project = await Project.findOneAndDelete({
        _id: req.params.id,
      });
      if (!project) {
        res.status(404).json({ msg: "That project does not exist." });
      }
      res.status(200).json(project);
    } catch (err) {
      return res.status(400).json({ msg: err.message });
    }
  },
  fetchOne: async (req, res) => {
    const _id = req.params.id;

    try {
      const project = await Project.findOne({ _id });
      if (!project) {
        res.status(404).json({ msg: "Project does not exist." });
      }
      res.status(200).json(project);
    } catch (err) {
      return res.status(400).json({ msg: err.message });
    }
  },
  update: async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = [
      "name",
      "date",
      "total",
      "service",
      "complexity",
      "users",
      "platforms",
      "features",
    ];
    const isValid = updates.every((update) => allowedUpdates.includes(update));

    if (!isValid) {
      return res.status(400).json({ err: "Invalid updates" });
    }

    try {
      const project = await Project.findOne({
        _id: req.params.id,
        // owner: req.user.id,
      });
      updates.forEach((update) => (project[update] = req.body[update]));
      await project.save();
      /*
                const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
                  new: true,
                  runValidators: true,
                });
            */
      res.status(200).json(project);
    } catch (err) {
      return res.status(404).json({ msg: err.message });
    }
  },
};

module.exports = ProjectCtrl;
