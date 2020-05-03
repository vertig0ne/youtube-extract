import * as service from '../service/youtube.js';

export const get = async (req, res, next) => {
  try {
    const { id } = req.query;
    const html = await service.getVideo({ id });
    const r = service.parseVideo({ html });
    res.json(r);
  } catch (err) { next(err); }
};

export default { get };
