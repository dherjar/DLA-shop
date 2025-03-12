
// Product API for Vercel
import { VercelRequest, VercelResponse } from '@vercel/node';
import connectDB from '../backend/config/db';
import Product from '../backend/models/Product';

export default async function handler(req, res) {
    await connectDB();
    if (req.method === 'GET') {
        const products = await Product.find();
        res.json(products);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
