// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/user/getme': (req: Request, res: Response) => {
    res.status(200).send({});
  },
};
