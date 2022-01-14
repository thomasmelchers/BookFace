const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");
const uploadController = require('../controllers/upload.controller');
const multer = require("multer");


// auth
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);

// user DB
router.get("/", userController.getAllUsers);
router.get("/:id", userController.userInfo);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.patch("/follow/:id", userController.follow);
router.patch("/unfollow/:id", userController.unfollow);

//
router.put("/updatePseudoUser/:id", userController.updatePseudoUser)

// upload

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, './public/images')
    },
    filename:(req, file, cb)=>{
        cb(null, file.originalname)
        console.log(file.originalname)
    }
  })
  
const upload = multer({storage: storage});

router.post("/upload", upload.single("file"), uploadController.uploadProfil);
module.exports = router;
