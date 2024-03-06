import {elementShow} from "./getDataJson"
 
const elementShowData = new elementShow("projects");

elementShowData.getAndShowDataOf("../../data/projects.JSON",elementShowData.createElementInDOM);