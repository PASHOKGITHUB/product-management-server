export interface Product {
  id: string;
  name: string;
  description?: string | null;
  price: number;
  sku: string;
  availability: boolean;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateProductInput {
  name: string;
  description?: string;
  price: number;
  sku: string;
  availability?: boolean;
  images: string[];
}

export interface UpdateProductInput {
  name?: string;
  description?: string;
  price?: number;
  sku?: string;
  availability?: boolean;
  images?: string[];
}

export interface PaginatedResponse<T> {
  data: T[];
  page: number;
  totalPages: number;
  totalItems: number;
}
