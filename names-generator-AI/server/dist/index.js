"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const gpt_routes_1 = __importDefault(require("./routes/gpt.routes"));
app.use("/api", gpt_routes_1.default);
app.use("/", (req, res) => {
    res.send("Hello World");
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App is listening at PORT - http://localhost:${PORT}`);
});
