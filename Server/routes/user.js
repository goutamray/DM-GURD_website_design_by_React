
import express from "express"; 
import { createUser, 
  deleteUser, 
  getAllSingleUser, 
  getAllUsers, 
  updateUser 
} from "../controllers/userController.js";


// init router
const router = express.Router();


// user routes
router.route("/").get(getAllUsers).post(createUser);
router
.route("/:id")
.delete(deleteUser)
.patch(updateUser)
.get(getAllSingleUser);




// export default router 
export default router;     












