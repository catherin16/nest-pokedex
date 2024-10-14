import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class Pokemon extends Document {

   // para que la propiedad nombre sea unica,el indice indica donde se encuentra el valor
    @Prop({
        unique:true,
        index:true
    })
    name: string;

    @Prop({
        unique:true,
        index:true
    })
    no:number;
}


export const PokemonSchema = SchemaFactory.createForClass(Pokemon);