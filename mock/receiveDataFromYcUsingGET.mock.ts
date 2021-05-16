// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/data/receive': (req: Request, res: Response) => {
    res.status(200).send({});
  },
};
