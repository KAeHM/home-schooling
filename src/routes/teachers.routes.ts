import { Router } from "express";
import teacherAddStudentController from "../controllers/teachers/teacherAddStudent.controller";

import teacherCreateController from "../controllers/teachers/teacherCreate.controller";
import teacherDeleteController from "../controllers/teachers/teacherDelete.controller";
import teacherListAllController from "../controllers/teachers/teacherListAll.controller";
import teacherListByIdController from "../controllers/teachers/teacherListById.controller";
import teacherLonginController from "../controllers/teachers/teacherLogin.contoller";
import teacherUpdateController from "../controllers/teachers/teacherUpdate.controller";

const routes = Router();

export const teacherRoutes = () => {

    routes.post("", teacherCreateController)
    routes.post("/login", teacherLonginController)
    routes.get("", teacherListAllController)
    routes.get("/:id", teacherListByIdController)
    routes.delete("/:id", teacherDeleteController)
    routes.patch("/:id", teacherUpdateController)
    routes.post("/:id", teacherAddStudentController)

    return routes
}