"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gpt_controller_1 = require("../controllers/gpt.controller");
const router = (0, express_1.Router)();
router.post("/generateNames", gpt_controller_1.generateNames);
exports.default = router;
