import { Router } from 'express';
import { crearPokemon, verPokemon, verUnicoPokemon} from '../controllers/pokemon.controllers.js';

const router = Router();

router.post("/pokemon", crearPokemon);
router.get("/pokemon", verPokemon);
router.get("/pokemon/:id", verUnicoPokemon);

export default router;