// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/operator/get': (req: Request, res: Response) => {
    res.status(200).send({});
  },
};
