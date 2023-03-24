import { Schema, model } from 'mongoose';

const pokemosSchema = new Schema(
    {
        img:{
            type: String
        },
        nombre:{
            type: String
        },
        exp: {
            type: Number
        },
        ataque: {
            type: Number
        },
        ataqueEspecial: {
            type: Number
        },
        resistencia: {
            type: Number
        },
        fuerza: {
            type: Number
        },
        defensa: {
            type: Number
        }
    },
    {
        versionKey: false
    }
);

export default model("Pokemon", pokemosSchema);