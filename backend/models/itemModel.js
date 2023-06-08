import db from "../config/db_mysql.js"

export const getData = (result) => {
    db.query("SELECT * FROM item", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}
export const getDataById = (id, result) => {
    db.query("SELECT * FROM item WHERE item_id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

export const insertData = (data, result) => {
    db.query("INSERT INTO item SET ?", [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const updateDataById = (data, id, result) => {
    db.query("UPDATE item SET nama_item = ?, unit = ?, satuan = ?, harga_satuan = ?, image = ?, WHERE item_id = ?", [data.nama_item, data.unit, data.satuan, data.harga_satuan, data.image, id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const deleteDataById = (id, result) => {
    db.query("DELETE FROM item WHERE item_id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}