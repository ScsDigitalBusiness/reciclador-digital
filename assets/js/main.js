import { elementShow } from "./getDataJson.js";
 
const elementShowData = new elementShow("projects");

elementShowData.getAndShowDataOf("../../data/projects.JSON",elementShowData.createElementInDOM);