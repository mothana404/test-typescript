import { Request, Response } from "express";
import  Student  from '../models/userModel';

async function sayHello(req: Request, res: Response){
    res.send('Hello To TypeScript');
};

async function AddSudents(req: Request, res: Response){
    try{
        const {name, age, major, average} = req.body;
        const createStudent = await Student.create({name, age, major, average});
        res.status(201).json(createStudent);
    }catch(error){
        res.status(500).json('error in AddSudents Controller');
    }
};

async function getAllSudents(req: Request, res: Response){
    try{
        const allStudents = await Student.findAll();
        res.status(200).json(allStudents);
    }catch(error){
        res.status(500).json('error in get Students Controller');
    }
};

async function getStudentById(req: Request, res: Response){
    try{
        const id = req.params.id;
        const Students = await Student.findOne({
            where: {
                id: id,
            }
        });
        res.status(200).json(Students);
    }catch(error){
        res.status(500).json('error in getStudentById Controller');
    }
}

export = {
    sayHello,
    AddSudents,
    getAllSudents,
    getStudentById,
};