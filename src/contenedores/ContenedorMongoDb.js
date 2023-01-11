import mongoose, { model } from 'mongoose'
import config from '../config.js'

await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options)

class ContenedorMongoDb {

    constructor(nombreColeccion, esquema) {
        this.coleccion = mongoose.model(nombreColeccion, esquema)
    }

    async listar(id) {
        try {
            const elem = await this.coleccion.find({_id: id});
            return elem;
        } catch (error) {
            console.log(error);
        }
    }

    async listarAll() {
        try {
            const elementos = await this.coleccion.find({});
            return elementos;
        } catch (error) {
            console.log(error);
        }
    }

    async guardar(elem) {
        try {
            const elemSave = new this.coleccion(elem);
            const savedeElem = await elemSave.save();
            return savedeElem;
        } catch (error) {
            console.log(error);
        }
    }

    async actualizar(newElem) {
        try {
            await this.coleccion.deleteOne(newElem._id);
            const newElemSave = new this.coleccion(newWlem);
            const savedeNewElem = await newElemSave.save();
            return savedeNewElem;
        } catch (error) {
            console.log(error);
        }
    }

    async borrar(id) {
        try {
            await this.coleccion.deleteOne({_id: id});
            const elementos = await this.coleccion.find({});
            return elementos;
        } catch (error) {
            console.log(error);
        }
    }

    async borrarAll() {
        try {
            await this.coleccion.deleteMany({});
            const elementos = await this.coleccion.find({});
            return elementos;
        } catch (error) {
            console.log(error);
        }
    }
}

export default ContenedorMongoDb