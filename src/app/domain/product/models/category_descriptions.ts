import { ProductCategory, ProductSubCategories } from '../enums/product_categories';

// ------------------------------------------------------------------------------------------------

/**
 * Product Category & SubCategory Descriptors Models/Interfaces
 */

export interface ProductCategoryDescriptor {
  id: ProductCategory;
  key: string;
  label: string;
}

export interface ProductSubCategoryDescriptor {
  id: ProductSubCategories;
  key: string;
  label: string;
}

// ------------------------------------------------------------------------------------------------

/**
 * Product Category & SubCategory Descriptors Constants
 */

export const PRODUCT_CATEGORY_DESCRIPTORS = {
  [ProductCategory.ELECTRONICS]: {
    id: ProductCategory.ELECTRONICS,
    key: 'electronics',
    label: 'Electrónica',
  },
  [ProductCategory.CLOTHING]: {
    id: ProductCategory.CLOTHING,
    key: 'clothing',
    label: 'Ropa',
  },
  [ProductCategory.HOME]: {
    id: ProductCategory.HOME,
    key: 'home',
    label: 'Hogar',
  },
  [ProductCategory.BEAUTY]: {
    id: ProductCategory.BEAUTY,
    key: 'beauty',
    label: 'Belleza',
  },
  [ProductCategory.SPORTS]: {
    id: ProductCategory.SPORTS,
    key: 'sports',
    label: 'Deportes',
  },
  [ProductCategory.TOOLS]: {
    id: ProductCategory.TOOLS,
    key: 'tools',
    label: 'Herramientas',
  },
  [ProductCategory.FOOD]: {
    id: ProductCategory.FOOD,
    key: 'food',
    label: 'Alimentos',
  },
  [ProductCategory.DRINKS]: {
    id: ProductCategory.DRINKS,
    key: 'drinks',
    label: 'Bebidas',
  },
  [ProductCategory.HOUSEHOLD]: {
    id: ProductCategory.HOUSEHOLD,
    key: 'household',
    label: 'Artículos del hogar',
  },
  [ProductCategory.PETS]: {
    id: ProductCategory.PETS,
    key: 'pets',
    label: 'Mascotas',
  },
  [ProductCategory.HEALTH]: {
    id: ProductCategory.HEALTH,
    key: 'health',
    label: 'Salud',
  },
  [ProductCategory.OTHER]: {
    id: ProductCategory.OTHER,
    key: 'other',
    label: 'Otros',
  },
} as const satisfies Record<ProductCategory, ProductCategoryDescriptor>;

export const PRODUCT_SUBCATEGORY_DESCRIPTORS = {
  [ProductSubCategories.BABY]: {
    id: ProductSubCategories.BABY,
    key: 'baby',
    label: 'Bebé',
  },
  [ProductSubCategories.CHILD]: {
    id: ProductSubCategories.CHILD,
    key: 'child',
    label: 'Niños',
  },
  [ProductSubCategories.WOMEN]: {
    id: ProductSubCategories.WOMEN,
    key: 'women',
    label: 'Mujeres',
  },
  [ProductSubCategories.MEN]: {
    id: ProductSubCategories.MEN,
    key: 'men',
    label: 'Hombres',
  },
  [ProductSubCategories.ADULT]: {
    id: ProductSubCategories.ADULT,
    key: 'adult',
    label: 'Adultos',
  },
  [ProductSubCategories.PETS]: {
    id: ProductSubCategories.PETS,
    key: 'pets',
    label: 'Mascotas',
  },
  [ProductSubCategories.ACCESSORIES]: {
    id: ProductSubCategories.ACCESSORIES,
    key: 'accessories',
    label: 'Accesorios',
  },
  [ProductSubCategories.GARDEN]: {
    id: ProductSubCategories.GARDEN,
    key: 'garden',
    label: 'Jardín',
  },
  [ProductSubCategories.OUTDOOR]: {
    id: ProductSubCategories.OUTDOOR,
    key: 'outdoor',
    label: 'Aire libre',
  },
  [ProductSubCategories.VIDEOGAMES]: {
    id: ProductSubCategories.VIDEOGAMES,
    key: 'videogames',
    label: 'Videojuegos',
  },
  [ProductSubCategories.MUSIC]: {
    id: ProductSubCategories.MUSIC,
    key: 'music',
    label: 'Música',
  },
  [ProductSubCategories.MULTIMEDIA]: {
    id: ProductSubCategories.MULTIMEDIA,
    key: 'multimedia',
    label: 'Multimedia',
  },
  [ProductSubCategories.BOOKS]: {
    id: ProductSubCategories.BOOKS,
    key: 'books',
    label: 'Libros',
  },
  [ProductSubCategories.SCHOOL]: {
    id: ProductSubCategories.SCHOOL,
    key: 'school',
    label: 'Escolar',
  },
  [ProductSubCategories.EDUCATION]: {
    id: ProductSubCategories.EDUCATION,
    key: 'education',
    label: 'Educación',
  },
  [ProductSubCategories.WRITING]: {
    id: ProductSubCategories.WRITING,
    key: 'writing',
    label: 'Escritura',
  },
  [ProductSubCategories.HEALTH]: {
    id: ProductSubCategories.HEALTH,
    key: 'health',
    label: 'Salud',
  },
  [ProductSubCategories.FITNESS]: {
    id: ProductSubCategories.FITNESS,
    key: 'fitness',
    label: 'Acondicionamiento físico',
  },
  [ProductSubCategories.BEAUTY]: {
    id: ProductSubCategories.BEAUTY,
    key: 'beauty',
    label: 'Belleza',
  },
  [ProductSubCategories.SKINCARE]: {
    id: ProductSubCategories.SKINCARE,
    key: 'skincare',
    label: 'Cuidado de la piel',
  },
  [ProductSubCategories.HAIRCARE]: {
    id: ProductSubCategories.HAIRCARE,
    key: 'haircare',
    label: 'Cuidado del cabello',
  },
  [ProductSubCategories.NAILCARE]: {
    id: ProductSubCategories.NAILCARE,
    key: 'nailcare',
    label: 'Cuidado de uñas',
  },
  [ProductSubCategories.MAKEUP]: {
    id: ProductSubCategories.MAKEUP,
    key: 'makeup',
    label: 'Maquillaje',
  },
  [ProductSubCategories.FRAGRANCE]: {
    id: ProductSubCategories.FRAGRANCE,
    key: 'fragrance',
    label: 'Fragancias',
  },
  [ProductSubCategories.BODYCARE]: {
    id: ProductSubCategories.BODYCARE,
    key: 'bodycare',
    label: 'Cuidado corporal',
  },
  [ProductSubCategories.HANDCARE]: {
    id: ProductSubCategories.HANDCARE,
    key: 'handcare',
    label: 'Cuidado de manos',
  },
  [ProductSubCategories.FOOTCARE]: {
    id: ProductSubCategories.FOOTCARE,
    key: 'footcare',
    label: 'Cuidado de pies',
  },
  [ProductSubCategories.EYECARE]: {
    id: ProductSubCategories.EYECARE,
    key: 'eyecare',
    label: 'Cuidado de ojos',
  },
  [ProductSubCategories.EARCARE]: {
    id: ProductSubCategories.EARCARE,
    key: 'earcare',
    label: 'Cuidado de oídos',
  },
  [ProductSubCategories.NOSECARE]: {
    id: ProductSubCategories.NOSECARE,
    key: 'nosecare',
    label: 'Cuidado nasal',
  },
  [ProductSubCategories.MOUTHCARE]: {
    id: ProductSubCategories.MOUTHCARE,
    key: 'mouthcare',
    label: 'Cuidado bucal',
  },
  [ProductSubCategories.TOOTHCARE]: {
    id: ProductSubCategories.TOOTHCARE,
    key: 'toothcare',
    label: 'Cuidado de dientes',
  },
  [ProductSubCategories.DENTALCARE]: {
    id: ProductSubCategories.DENTALCARE,
    key: 'dentalcare',
    label: 'Cuidado dental',
  },
  [ProductSubCategories.FOOD]: {
    id: ProductSubCategories.FOOD,
    key: 'food',
    label: 'Alimentos',
  },
  [ProductSubCategories.DRINKS]: {
    id: ProductSubCategories.DRINKS,
    key: 'drinks',
    label: 'Bebidas',
  },
  [ProductSubCategories.ALCOHOL]: {
    id: ProductSubCategories.ALCOHOL,
    key: 'alcohol',
    label: 'Alcohol',
  },
  [ProductSubCategories.BEVERAGES]: {
    id: ProductSubCategories.BEVERAGES,
    key: 'beverages',
    label: 'Bebidas preparadas',
  },
  [ProductSubCategories.SNACKS]: {
    id: ProductSubCategories.SNACKS,
    key: 'snacks',
    label: 'Botanas',
  },
  [ProductSubCategories.CANDY]: {
    id: ProductSubCategories.CANDY,
    key: 'candy',
    label: 'Dulces',
  },
  [ProductSubCategories.HOUSEHOLD]: {
    id: ProductSubCategories.HOUSEHOLD,
    key: 'household',
    label: 'Artículos del hogar',
  },
  [ProductSubCategories.CLEANING]: {
    id: ProductSubCategories.CLEANING,
    key: 'cleaning',
    label: 'Limpieza',
  },
  [ProductSubCategories.ORGANIZATION]: {
    id: ProductSubCategories.ORGANIZATION,
    key: 'organization',
    label: 'Organización',
  },
  [ProductSubCategories.STORAGE]: {
    id: ProductSubCategories.STORAGE,
    key: 'storage',
    label: 'Almacenamiento',
  },
  [ProductSubCategories.DECORATION]: {
    id: ProductSubCategories.DECORATION,
    key: 'decoration',
    label: 'Decoración',
  },
  [ProductSubCategories.TOOLS]: {
    id: ProductSubCategories.TOOLS,
    key: 'tools',
    label: 'Herramientas',
  },
  [ProductSubCategories.CONSTRUCTION]: {
    id: ProductSubCategories.CONSTRUCTION,
    key: 'construction',
    label: 'Construcción',
  },
  [ProductSubCategories.REPAIR]: {
    id: ProductSubCategories.REPAIR,
    key: 'repair',
    label: 'Reparación',
  },
  [ProductSubCategories.OFFICE]: {
    id: ProductSubCategories.OFFICE,
    key: 'office',
    label: 'Oficina',
  },
  [ProductSubCategories.CLOTHING]: {
    id: ProductSubCategories.CLOTHING,
    key: 'clothing',
    label: 'Ropa',
  },
  [ProductSubCategories.SHOES]: {
    id: ProductSubCategories.SHOES,
    key: 'shoes',
    label: 'Zapatos',
  },
  [ProductSubCategories.CLOTHES]: {
    id: ProductSubCategories.CLOTHES,
    key: 'clothes',
    label: 'Prendas',
  },
  [ProductSubCategories.BAGS]: {
    id: ProductSubCategories.BAGS,
    key: 'bags',
    label: 'Bolsos',
  },
  [ProductSubCategories.JEWELRY]: {
    id: ProductSubCategories.JEWELRY,
    key: 'jewelry',
    label: 'Joyería',
  },
  [ProductSubCategories.WATCHES]: {
    id: ProductSubCategories.WATCHES,
    key: 'watches',
    label: 'Relojes',
  },
  [ProductSubCategories.SUNGLASSES]: {
    id: ProductSubCategories.SUNGLASSES,
    key: 'sunglasses',
    label: 'Lentes de sol',
  },
  [ProductSubCategories.OTHER]: {
    id: ProductSubCategories.OTHER,
    key: 'other',
    label: 'Otros',
  },
} as const satisfies Record<ProductSubCategories, ProductSubCategoryDescriptor>;

export const PRODUCT_CATEGORY_OPTIONS = Object.values(PRODUCT_CATEGORY_DESCRIPTORS);
export const PRODUCT_SUBCATEGORY_OPTIONS = Object.values(PRODUCT_SUBCATEGORY_DESCRIPTORS);

// ------------------------------------------------------------------------------------------------

/**
 * Product Category & SubCategory Descriptors Getter Functions
 */

export function getProductCategoryDescriptor(
  category: ProductCategory,
): ProductCategoryDescriptor {
  return PRODUCT_CATEGORY_DESCRIPTORS[category];
}

export function getProductCategoryLabel(category: ProductCategory): string {
  return getProductCategoryDescriptor(category).label;
}

export function getProductCategoryKey(category: ProductCategory): string {
  return getProductCategoryDescriptor(category).key;
}

export function getProductSubCategoryDescriptor(
  subCategory: ProductSubCategories,
): ProductSubCategoryDescriptor {
  return PRODUCT_SUBCATEGORY_DESCRIPTORS[subCategory];
}

export function getProductSubCategoryLabel(subCategory: ProductSubCategories): string {
  return getProductSubCategoryDescriptor(subCategory).label;
}

export function getProductSubCategoryKey(subCategory: ProductSubCategories): string {
  return getProductSubCategoryDescriptor(subCategory).key;
}

export function getProductSubCategoryLabels(
  subCategories: readonly ProductSubCategories[],
): string[] {
  return subCategories.map((subCategory) => getProductSubCategoryLabel(subCategory));
}
