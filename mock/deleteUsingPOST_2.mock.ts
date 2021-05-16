// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /inspection-record/delete': (req: Request, res: Response) => {
    res.status(200).send({});
  },
};
