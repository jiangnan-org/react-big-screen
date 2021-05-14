// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /api/operator/list': (req: Request, res: Response) => {
    res.status(200).send({});
  },
};
