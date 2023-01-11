import knex from 'knex'

class ContenedorSQL {

    constructor(config, tabla) {
        this.knex = knex(config);
        this.tabla = tabla;
    }

    async listar(id) {
        try {
            const result = await this.knex(this.tabla).where('id', id).select();
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    async listarAll(criterio = {}) {
        try {
            const result = await this.knex(this.tabla).select("*");
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    async guardar(data) {
        try {
            await this.knex(this.tabla).insert(data);
        } catch (error) {
            console.log(error);
        }
    }

    async actualizar(elem) {
        try {
            await this.knex(this.tabla).where('id', id).update(elem);
        } catch (error) {
            console.log(error);
        }
    }

    async borrar(id) {
        try {
            await this.knex(this.tabla).where('id', id).del();
        } catch (error) {
            console.log(error);
        }
    }

    async borrarAll(criterio = {}) {
        try {
            await this.knex(this.tabla).del();
        } catch (error) {
            console.log(error);
        }
    }
}

export default ContenedorSQL