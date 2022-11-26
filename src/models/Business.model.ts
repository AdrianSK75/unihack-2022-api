import Project from "./Project.model";
import User from "./User.model";

export default class Business {
    private readonly businessId: string | undefined;
    public static members: User[];
    public static projects: Project[];
}