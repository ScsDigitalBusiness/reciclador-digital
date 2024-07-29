import Projects from '../models/ProjectsModel';
import { Request, Response } from 'express';
 
export default abstract class HomeController {
   static async  index (req: Request, res: Response): Promise<void> {
    const ProjectsModel = new Projects(req.body); 
    const allProjects = await  ProjectsModel.getAll()
    res.render("Home",{allProjects}); 
   } 
}
 


