// Import necessary modules
import { Router } from 'express';
const router = Router();

// Define routes
router.get('/selector', (req, res) => {
  res.render('randomitem', { title: 'A random item' });
});

// Export router
export default router;
