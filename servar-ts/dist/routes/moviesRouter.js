"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const moviesController_1 = require("../controllers/moviesController");
const moviesRouter = (0, express_1.Router)();
moviesRouter.get("/", moviesController_1.findAllMovies);
moviesRouter.get("/count", moviesController_1.countAllMovies);
moviesRouter.get("/:_id", moviesController_1.findMovieById);
exports.default = moviesRouter;
