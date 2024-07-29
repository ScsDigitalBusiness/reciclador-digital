import Projects from '../models/ProjectsModel';
import SignUp from "../models/SingupAndLoginModel";
import { Request, Response } from 'express';

export default abstract class ProjectsController {
    public static async index(req: Request, res: Response): Promise<void> {
        const ProjectsModel = new Projects(req.body);
        const signUpModel = new SignUp(req.body);
        const allUsers = await signUpModel.getAllUsers()
        const allProjects = await ProjectsModel.getAll();
        res.render("Projects", { allUsers, allProjects });
    }
    public static async create(req: Request, res: Response): Promise<void> {
        let body: object = {};
        if (!req.file) {
            body = { ...req.body }
        } else {
            body = { ...req.body, projectPhoto: req.file.filename }
        }
        const ProjectsModel = new Projects(body);
        await ProjectsModel.create();
        if (ProjectsModel.errors.length > 0) {
            req.flash("errors", ProjectsModel.errors);
            res.redirect("back")
        } else {
            res.redirect("back");
        }

    }
    public static async delete(req: Request, res: Response): Promise<void> {
        const ProjectsModel = new Projects(req.body);
        await ProjectsModel.delete(req.params.id);
        res.redirect("back")
    }
    public static async edit(req: Request, res: Response): Promise<void> {
        let body: object = {};
        if (!req.file) {
            body = { ...req.body };
        } else {
            body = { ...req.body, projectPhoto: req.file.filename }
        }
        const ProjectsModel = new Projects(body);
        await ProjectsModel.edit(req.params.id);
        res.redirect("back");
    }
} 