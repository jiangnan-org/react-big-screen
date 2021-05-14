// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /home/year-generation': (req: Request, res: Response) => {
    res.status(200).send({});
  },
};
