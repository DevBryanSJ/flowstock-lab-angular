import { GlobalAddress } from "../../shared/models/geographic_address";
import { ImageRef } from "../../shared/models/images";
import { ProductCategory, ProductSubCategories } from "../enums/product_categories";

// ------------------------------------------------------------------------------------------------

/**
 * Product Custom Types
 */

export type Sku = string;

// ------------------------------------------------------------------------------------------------

/**
 * Product Raw Data Models/Interfaces
 */

export interface Product {
    id: string;
    sku: Sku;
    name: string;
    alias: string | null;
    provider: ProductProvider;
    description: string;
    category: ProductCategory;
    subCategories: ProductSubCategories[];
    images: ImageRef[];
}

export interface ProductProvider {
    id: string;
    name: string;
    legalName: string;
    address: GlobalAddress;
    phone: string;
    email: string;
    website: string | null;
    logo: ImageRef | null;
}