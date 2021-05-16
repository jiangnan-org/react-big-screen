// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /api/user/del': (req: Request, res: Response) => {
    res.status(200).send({});
  },
};
