// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /api/home/real-time-consumption': (req: Request, res: Response) => {
    res.status(200).send({});
  },
};
