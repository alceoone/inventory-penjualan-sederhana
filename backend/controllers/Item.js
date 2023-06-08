import { getData, getDataById, insertData, updateDataById, deleteDataById } from "../models/itemModel.js";

export const getItem = (req, res) => {
    getData((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};

export const getItemById = (req, res) => {
    getDataById(req.params.id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

export const createItem = (req, res) => {
    const data = req.body;
    insertData(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

export const updateItem = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    updateDataById(data, id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

export const deleteItem = (req, res) => {
    const id = req.params.id;
    deleteDataById(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

