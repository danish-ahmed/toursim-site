import express from "express";
import activityController from "./activity.controllers";

var Route = express.Router();

Route.get("/", activityController.findAll);
Route.post("/", activityController.createActivity);

module.exports = Route;