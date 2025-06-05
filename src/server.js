import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import pokemonRoutes from './routes/pokemon.js';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);

app.set("view engine", "ejs");

app.use("/", pokemonRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});