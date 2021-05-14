// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/alarm/get': (req: Request, res: Response) => {
    res.status(200).send({});
  },
};
