var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controllers/skills')

/* GET users listing. */
//All actual paths start with '/skills'
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new); //put this above the /:id cause it will think 'new' is our id param

router.post('/', skillsCtrl.create);
router.get('/:id/edit', skillsCtrl.edit);
router.put('/:id', skillsCtrl.update);
router.get('/:id', skillsCtrl.show);
router.delete('/:id', skillsCtrl.delete);


module.exports = router;
