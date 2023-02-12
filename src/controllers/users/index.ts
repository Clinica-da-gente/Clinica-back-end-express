import { Request, Response } from "express";

import createUser from "../../services/users/createUser.service";

export default class UsersController {
  async create(req: Request, res: Response) {
    const {} = req.body;
    const user = await createUser();
    res.status(201).json(user);
  }
}
