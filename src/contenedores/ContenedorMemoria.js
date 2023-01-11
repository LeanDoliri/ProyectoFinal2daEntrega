class ContenedorMemoria {

    constructor() {
        this.elementos = []
    }

    listar(id) {
        try {
            const elem = this.elementos.find((elem) => elem.id === id);
            return elem;
        } catch (error) {
            console.log(error);
        }
    }

    listarAll() {
        try {
            return this.elementos;
        } catch (error) {
            console.log(error);
        }
    }

    guardar(elem) {
        try {
            this.elementos.push(elem);
            return this.elementos;
        } catch (error) {
            console.log(error);
        }
    }

    actualizar(elem) {
        try {
            const foundElem = this.elementos.find((elem) => elem.id === id);
            if (foundElem){
                const filteredElements = this.elementos.filter((elem) => elem.id !== id);
                this.elementos = [...filteredElements, elem];
                return this.elementos;
            }
        } catch (error) {
            console.log(error);
        }
    }

    borrar(id) {
        try {
           const newElementos = this.elementos.filter(elem => elem.id != id);
           this.elementos = newElementos;
           return this.elementos;
        } catch (error) {
            console.log(error);
        }
    }

    borrarAll() {
        try {
            this.elementos = [];
            return this.elementos;
        } catch (error) {
            console.log(error);
        }
    }
}

export default ContenedorMemoria
