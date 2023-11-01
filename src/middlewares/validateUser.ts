import jwt from "jsonwebtoken";
import { AppDataSource } from "../../doConnection";
import { Userdata } from "../models/userModel";
export default async function validateUser(req, res,next) {
    try {
        //TODO: Commented to inspect graphQL dashboard, will be enabled later
        // const {authToken} = req.headers;
        // const data: any = jwt.verify(
        //   authToken,
        //   process.env.SECRETKEY ?? "sh@5$jsYQp0W"
        // );
        // const user = await AppDataSource.manager.findOneBy(Userdata, {
        //   userName: data.username,
        // });
        // if(!user) return res.status(404).send("User not found!");
        next();
    } catch (error) {
        return res.status(500).send("Something went wrong!");
    }
}
