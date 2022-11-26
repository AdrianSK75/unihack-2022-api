"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
const firebase_1 = require("./firebase");
const firestore_1 = require("firebase/firestore");
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// temporary routes
app.get('/', (req, res) => {
    res.send('<h1>Hello from the TypeScript world!</h1>');
});
app.get('/:slug', (req, res) => {
    res.send(`${req.params.slug}`);
});
app.get('/animals', async (req, res) => {
    const animalsCollectionRef = (0, firestore_1.collection)(firebase_1.db, "temporary");
    // const animals = await getDocs();
});
app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
