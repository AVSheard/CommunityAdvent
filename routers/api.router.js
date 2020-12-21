const calendarsRouter = require("./calendars.router");

apiRouter = require("express").Router();

apiRouter.use("/calendars", calendarsRouter);

module.exports = apiRouter;
