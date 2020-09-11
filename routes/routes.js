let express = require("express")
let app = express();
let router = express.Router();
let HomeController = require("../controllers/HomeController");
let UserController = require('../controllers/UserController')


router.get('/', HomeController.index);
router.post('/api/user', UserController.create)
router.get('/api/user', UserController.index)
router.get('/api/user/:id', UserController.findUser)

module.exports = router;