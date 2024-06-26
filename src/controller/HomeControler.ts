import Projects from '../models/ProjectsModel';
 
export default  abstract class HomeController {
   public static async  index (req:any,res:any) {
    const ProjectsModel = new Projects(req.body); 
    const allProjects = await  ProjectsModel.getAll()
    res.render("Home",{allProjects}); 
   } 
}
 


