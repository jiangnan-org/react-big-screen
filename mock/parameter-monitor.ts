import {Request, Response} from "express";

export default {
  '/api/parameter-monitor': (req: Request, res: Response) => {
    res.status(200).send({
      data: [
        {
          key: 'TI231',
          desc: '合成塔出口温度',
          level: 0,
          status: 1
        },
        {
          key: 'PI231',
          desc: '甲醛释放气压力',
          level: 1,
          status: 1
        },
        {
          key: 'PI124',
          desc: '产品氢气压力',
          level: 2,
          status: 1
        },
        {
          key: 'PI127',
          desc: '甲醛化进口压力',
          level: 2,
          status: 1,
        },
        {
          key: 'PI344',
          desc: '闪蒸槽压力。',
          level: 2,
          status: 1,
        },
        {
          key: 'LI143',
          desc: '氨分离液位',
          status: 0
        },
        {
          key: 'TI320',
          desc: '甲烷化热点温度',
          status: 0
        },
        {
          key: 'TI142',
          desc: '解析气温度',
          status: 0
        },
        {
          key: 'TI131',
          desc: '空冷后气体温度',
          status: 0
        },
        {
          key: 'PI158',
          desc: '氨槽压力',
          status: 0
        }
      ],
      total: 10,
      success: true,
    });
  }
};
