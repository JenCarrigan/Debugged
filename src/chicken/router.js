import { Router } from 'express';
import Chicken from './model.js';

const router = Router();

router.get('/api/v1/chickens', (request, response) => {

  Chicken.find({}).then(chickens => {
    
    response.send(chickens);
  });
});

router.post('/api/v1/chickens', (req,res) => {
  console.log(req.body);
  Chicken.create(req.body)
    .then(result => {
      res.send(result);
    });
});

export default router;