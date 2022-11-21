var express = require('express');
var router = express.Router();

var db = require('../database')

router.get('/', function(req, res, next) {
  const sql = 'SELECT * FROM menu ORDER BY jenis_menu'
  db.query(sql, (err, result) => {
    //res.render('admin', { title: 'Express' });
    res.render("admin", {result, title: "ADMIN - RESTO DINUS"})
  })  
});

// Insert
router.post('/insert', (req, res, next) => {
  const insertMenu = `INSERT INTO menu (jenis_menu, nama_menu, harga_menu, image) VALUE ('${req.body.jenis_menu}', '${req.body.nama_menu}', '${req.body.harga_menu}', '${req.body.image}');` 
  db.query(insertMenu, (err, result) => {
    if (err) throw err
    res.redirect("/admin")
})
})

// Delete
router.post('/delete', (req, res, next) => {
  const deleteMenu = `DELETE FROM menu WHERE menu_id=${req.body.menu_id};`
  const delAutoInc = `ALTER TABLE menu DROP menu_id;`
  const addAutoInc = `ALTER TABLE menu ADD  menu_id SMALLINT NOT NULL AUTO_INCREMENT FIRST ,ADD KEY (menu_id);`

  db.query(deleteMenu, (err,result) => {
    if (err) throw err
    db.query(delAutoInc), () => {
        console.log("delAutoInc Success")
    }
    db.query(addAutoInc), () => {
        console.log("addAutoInc Success")
    }
    res.redirect("/admin")
  })
})

module.exports = router;
