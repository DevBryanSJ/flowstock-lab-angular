
export interface GlobalAddress {
    postalCode: string;
    country: string;
    state: string;
    city: string;
    street: string;
    exteriorNumber: string;
    interiorNumber: string | null;
    neighborhood: string;
    reference: string | null;
}