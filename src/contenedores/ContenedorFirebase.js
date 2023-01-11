import admin from "firebase-admin"
import config from '../config.js'

admin.initializeApp({
    credential: admin.credential.cert(config.firebase)
})

const db = admin.firestore();

class ContenedorFirebase {

    constructor(nombreColeccion) {
        this.coleccion = db.collection(nombreColeccion)
    }

    async listar(id) {
        try {
            const doc = await this.coleccion.doc(id).get();
            const data = doc.data();
            return {...data, id};
        } catch (error) {
            console.log(error);
        }
    }

    async listarAll() {
        try {
            const result = []
            const querySnapshot = await this.coleccion.get();
            querySnapshot.forEach(doc => {
                result.push({ id: doc.id, ...doc.data() })
            })
            return result
        } catch (error) {
            console.log(error);
        }
    }

    async guardar(elem) {
        try {
            const doc = await this.coleccion.add(elem);
            return { ...elem, id: doc.id }
        } catch (error) {
            console.log(error);
        }
    }

    async actualizar(nuevoElem) {
        try {
            const doc = this.coleccion.doc(nuevoElem.id);
            await doc.delete();
            return this.guardar(nuevoElem);
        } catch (error) {
            console.log(error);
        }
    }

    async borrar(id) {
        try {
            const doc = this.coleccion.doc(id);
            await doc.delete();
            return this.listarAll;
        } catch (error) {
            console.log(error);
        }
    }
}

export default ContenedorFirebase