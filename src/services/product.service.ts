import prisma from '../config/prisma';
import { CreateProductInput, UpdateProductInput, PaginatedResponse, Product } from '../types/product.types';

export class ProductService {
  static async createProduct(data: CreateProductInput): Promise<Product> {
    return prisma.product.create({
      data,
    });
  }

  static async searchProducts(
    query?: string,
    page: number = 1,
    limit: number = 10
  ): Promise<PaginatedResponse<Product>> {
    const skip = (page - 1) * limit;
    
    const where = query
      ? {
          name: {
            contains: query,
            mode: 'insensitive' as const,
          },
        }
      : {};

    const [data, totalItems] = await Promise.all([
      prisma.product.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.product.count({ where }),
    ]);

    const totalPages = Math.ceil(totalItems / limit);

    return {
      data,
      page,
      totalPages,
      totalItems,
    };
  }

  static async getProductBySearchWord(searchWord: string): Promise<Product | null> {
    // Try UUID first
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(searchWord);
    
    if (isUuid) {
      const product = await prisma.product.findUnique({
        where: { id: searchWord },
      });
      if (product) return product;
    }

    // Try SKU or Name
    return prisma.product.findFirst({
      where: {
        OR: [
          { sku: { equals: searchWord, mode: 'insensitive' } },
          { name: { equals: searchWord, mode: 'insensitive' } },
        ],
      },
    });
  }

  static async updateProduct(id: string, data: UpdateProductInput): Promise<Product> {
    return prisma.product.update({
      where: { id },
      data,
    });
  }

  static async deleteProduct(id: string): Promise<Product> {
    return prisma.product.delete({
      where: { id },
    });
  }
}
