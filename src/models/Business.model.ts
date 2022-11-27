import Project from "./Project.model";
import User from "./User.model";

export default interface BusinessDataProperties {
    name?: string
    users?: User[] | any[],
    projects?: Project[] | any[],
}

export class Business {
    public readonly id: string = "";
    public readonly data: BusinessDataProperties = {
        name: "",
        users: [],
        projects: []
    }
}