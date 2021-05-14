// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /home/consumption': (req: Request, res: Response) => {
    res.status(200).send({});
  },
};
