import { Request, Response } from 'express';
import { ProductService } from '../services/product.service';

export class ProductController {
  static async create(req: Request, res: Response) {
    try {
      const product = await ProductService.createProduct(req.body);
      res.status(201).json(product);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const q = req.query.q as string;
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;

      const result = await ProductService.searchProducts(q, page, limit);
      res.json(result);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const product = await ProductService.getProductBySearchWord(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const product = await ProductService.updateProduct(req.params.id, req.body);
      res.json(product);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      await ProductService.deleteProduct(req.params.id);
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
