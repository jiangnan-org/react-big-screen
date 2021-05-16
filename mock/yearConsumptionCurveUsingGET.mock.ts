// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/home/year-consumption': (req: Request, res: Response) => {
    res.status(200).send({});
  },
};
