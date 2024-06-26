import Projects from '../models/ProjectsModel';
import SignUp from "../models/SingupAndLoginModel";
export default abstract class ProjectsController {
    public static async index(req: any, res: any): Promise<any> {
        const ProjectsModel = new Projects(req.body);
        const signUpModel = new SignUp(req.body);
        const allUsers = await signUpModel.getAllUsers()
        const allProjects = await ProjectsModel.getAll();
        res.render("Projects", { allUsers, allProjects });
    }
    public static async create(req: any, res: any) {
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
    public static async delete(req: any, res: any) {
        const ProjectsModel = new Projects(req.body);
        await ProjectsModel.delete(req.params.id);
        res.redirect("back")
    }
    public static async edit(req: any, res: any) {
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