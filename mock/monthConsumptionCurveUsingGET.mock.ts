// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/home/month-consumption': (req: Request, res: Response) => {
    res.status(200).send({});
  },
};
