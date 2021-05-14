// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /home/real-time-generation': (req: Request, res: Response) => {
    res.status(200).send({});
  },
};
