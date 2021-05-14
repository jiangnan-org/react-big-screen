// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /home/real-time-consumption': (req: Request, res: Response) => {
    res.status(200).send({});
  },
};
