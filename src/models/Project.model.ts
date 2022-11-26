import User from "./User.model";

export default class Project {
    private readonly projectId: string | undefined;
    public static purpose: string;
    public static members: User[];
}