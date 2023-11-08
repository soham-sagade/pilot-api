import { Userdata } from "../models/userModel";
import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../../dbConnection";
import jwt from "jsonwebtoken";

interface IUserController {
  login(req: Request, res: Response): any;
  // signUp(req: Request, res: Response): any;
}

export class UserController implements IUserController {
  async login(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      if (!username || !password)
        return res.status(400).send({
          error: "Please enter all required fields",
        });

      const user = await AppDataSource.manager.findOneBy(Userdata, {
        user_name: username,
      });

      if (!user)
        return res.status(404).send({
          error: "User not found!",
        });

      const user_password = user.user_password;

      //TODO: Write encryption logic here

      if (user_password !== password)
        return res.status(401).send({
          error: "Invalid Username or Password!",
        });

      const authToken = jwt.sign(
        {
          data: { username },
        },
        //TODO: Remove and change secret keys
        process.env.SECRETKEY,
        { expiresIn: "1h" }
      );

      return res.status(200).send({
        authToken,
      });
    } catch (error) {
      return res.status(500).send({
        error: "Data could not be fetched!",
      });
    }
  }

  // async signUp(req: Request, res: Response) {
  //   try {
  //     const { username, password } = req.body;
  //     if (!username || !password)
  //       return res.status(400).send({
  //         error: "Please enter all required fields",
  //       });

  //     const user = await AppDataSource.manager.findOneBy(user_info, {
  //       user_name: username,
  //     });

  //     if (!user)
  //       return res.status(404).send({
  //         error: "User already exists!",
  //       });

  //     const authToken = jwt.sign(
  //       {
  //         data: { username },
  //       },
  //       process.env.SECRETKEY,
  //       { expiresIn: "1h" }
  //     );

  //     return res.status(200).send({
  //       authToken,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     return res.status(500).send({
  //       error: "Data could not be fetched!",
  //     });
  //   }
  // }
}
