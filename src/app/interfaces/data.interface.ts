// Define the interface for a single batter item
interface Batter {
    id: string;
    type: string;
}

// Define the interface for a single topping item
interface Topping {
    id: string;
    type: string;
}

// Define the interface for a product
export interface Product {
    id: string;
    type: string;
    name: string;
    ppu: number;
    batters: {
        batter: Batter[];
    };
    topping: Topping[];
}