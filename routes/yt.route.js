import express from 'express';
import * as controller from '../controller/yt.controller.js';

export const name = 'yt';
export const router = express.Router();

router.get('/', controller.get);

export default { name, router };
