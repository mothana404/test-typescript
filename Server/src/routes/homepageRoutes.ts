import express from "express";
const router: any = express.Router();
import { Request, Response } from "express";
import homepageController from '../controllers/homepageController';

router.get('/getHelloToTypeScript', homepageController.sayHello);
router.post('/addSudents', homepageController.AddSudents);
router.get('/getAllSudents', homepageController.getAllSudents);
router.get('/getStudentById/:id', homepageController.getStudentById);

export = router;