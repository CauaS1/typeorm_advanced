import { Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import { Class } from '../models/Class';
import { ClassRepository } from '../repositories/ClassRepository';

const classRouter = Router();

classRouter.post('/', async (req, res) => {
  try {
    const repo = getRepository(Class);
    const response = await repo.save(req.body);

    return res.status(201).json({ response });
  } catch (err) {
    console.log(err.message)
    return res.status(201).json({ error: 'Error' });
  }

})

classRouter.get('/', async (req, res) => {
  const repo = await getRepository(Class).find();
  res.json({ repo });
})

classRouter.get('/name/:name', async (req, res) => {
  const { name } = req.params;
  const repo = getCustomRepository(ClassRepository);
  const response = await repo.findByName(name);
  return res.json({ response });
})

export default classRouter;

