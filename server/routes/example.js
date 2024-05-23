import express from 'express';
const router = express.Router();

/**
 * @route GET /example
 * @group example - Example operations
 * @returns {object} 200 - An example response
 * @returns {Error}  default - Unexpected error
 */
router.get('/', (req, res) => {
    res.json({ message: 'Example endpoint' });
});

export default router;
