import express from "express";
const { Router } = express;

// Configuraciones para que funcione el dirname
import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


import {
  productosDao as productosApi,
  carritosDao as carritosApi,
} from "./daos/index.js";

//------------------------------------------------------------------------
// instancio servidor

const app = express();

//--------------------------------------------
// permisos de administrador

const esAdmin = true;

function crearErrorNoEsAdmin(ruta, metodo) {
  const error = {
    error: -1,
  };
  if (ruta && metodo) {
    error.descripcion = `ruta '${ruta}' metodo '${metodo}' no autorizado`;
  } else {
    error.descripcion = "no autorizado";
  }
  return error;
}

function soloAdmins(req, res, next) {
  if (!esAdmin) {
    res.json(crearErrorNoEsAdmin());
  } else {
    next();
  }
}

//--------------------------------------------
// configuro router de productos

const productosRouter = new Router();

productosRouter.get("/", async (req, res) => {
  res.json(await productosApi.listarAll());
});

productosRouter.get("/:id", async (req, res) => {
  const productos = await productosApi.listar(req.params.id);
  res.json(productos);
});

productosRouter.post("/", soloAdmins, async (req, res) => {
  res.json(await productosApi.guardar(req.body));
});

productosRouter.put("/:id", soloAdmins, async (req, res) => {
  res.json(await productosApi.actualizar(req.body));
});

productosRouter.delete("/", soloAdmins, async (req, res) => {
  res.json(await productosApi.borrarAll());
});

productosRouter.delete("/:id", soloAdmins, async (req, res) => {
  res.json(await productosApi.borrar(req.params.id));
});

//--------------------------------------------
// configuro router de carritos

const carritosRouter = new Router();

carritosRouter.get("/", async (req, res) => {
  res.json(await carritosApi.listarAll());
});

carritosRouter.post("/", async (req, res) => {
  res.json(await carritosApi.guardar());
});

carritosRouter.delete("/:id", async (req, res) => {
  res.json(await carritosApi.borrar(req.params.id));
});

//--------------------------------------------------
// router de productos en carrito

carritosRouter.get("/:id/productos", async (req, res) => {});

carritosRouter.post("/:id/productos", async (req, res) => {});

carritosRouter.delete("/:id/productos/:idProd", async (req, res) => {});

//--------------------------------------------
// configuro el servidor

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/productos', (req, res)=>{
  res.sendFile(path.resolve(__dirname, '../public/productos.html'));
});
app.get('/carrito', (req, res)=>{
  res.sendFile(path.resolve(__dirname, '../public/carrito.html'));
});

app.get('/test', (req, res)=>{
  res.sendFile(path.resolve(__dirname, '../public/test.html'));
})

app.use("/api/productos", productosRouter);
app.use("/api/carritos", carritosRouter);

export default app;