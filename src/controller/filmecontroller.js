import * as filmeRepository from "../repository/filmerepository.js";
import { Router } from "express";

const endpoints = Router();

endpoints.get("/filme/:id", async (req, resp) => {
    let id = req.params.id;

    let filme = await filmeRepository.getFilmin(id);

    resp.send(filme);
});

endpoints.get("/filme", async (req, resp) => {
    let filmes = await filmeRepository.listFilmin();

    resp.send(filmes);
});

endpoints.post("/filme", async (req, resp) => {
    let filme = req.body;

    let id = await filmeRepository.saveFilmin(filme);

    filme.id = id;

    resp.send({ id });
});

endpoints.put("/filme/:id", async (req, resp) => {
    let id = req.params.id;
    let filme = req.body;

    let qtd = await filmeRepository.updateFilme(id, filme);

    resp.send({ qtd });
});

endpoints.delete("/delete/:id", async (req, resp) => {
    let id = req.params.id;

    let qtd = await filmeRepository.deleteFilmin(id);

    resp.send({ qtd });
});

export default endpoints;