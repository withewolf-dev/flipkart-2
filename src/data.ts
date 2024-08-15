export interface IProduct {
    id: number;
    name: string;
    screenSize?: string;
    size?: string;
    material?: string;
    storage?: string;
    color?: string;
    processor?: string;
    lensColor?: string;
    frameMaterial?: string;
    type?: string;
    category: string;
    isSponsored: boolean;
    images: string[];
    price: number; // Original price before discount
    discountPercentage: number; // Discount percentage
    finalPrice: number; // Price after applying the discount
}




export const products: IProduct[] = [
    {
        id: 1,
        name: "realme Watch S2",
        screenSize: "1.43 inches",
        material: "Brown Leather",
        category: "Smartwatch",
        isSponsored: true,
        images: [
            "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=2794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        price: 7999,
        discountPercentage: 37,
        finalPrice: 7999 - (7999 * 0.37),
    },
    {
        id: 2,
        name: "Levi's 501 Original Fit Jeans",
        size: "32x32",
        material: "Denim",
        category: "Clothing",
        isSponsored: false,
        images: [
"https://plus.unsplash.com/premium_photo-1674828601017-2b8d4ea90aca?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"            
        ],
        price: 5999,
        discountPercentage: 25,
        finalPrice: 5999 - (5999 * 0.25),
    },
    {
        id: 3,
        name: "iPhone 14 Pro Max",
        storage: "256GB",
        color: "Space Black",
        category: "Smartphone",
        isSponsored: true,
        images: [
      "https://images.unsplash.com/photo-1709528922440-4fc4f05ef110?q=80&w=3012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        price: 119999,
        discountPercentage: 10,
        finalPrice: 119999 - (119999 * 0.10),
    },
    {
        id: 4,
        name: "Nike Air Max 270",
        size: "10",
        color: "White/Black",
        category: "Footwear",
        isSponsored: false,
        images: [
           "https://images.unsplash.com/photo-1521093470119-a3acdc43374a?q=80&w=1651&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        price: 9999,
        discountPercentage: 20,
        finalPrice: 9999 - (9999 * 0.20),
    },
    {
        id: 5,
        name: "Samsung Galaxy S23 Ultra",
        storage: "512GB",
        color: "Phantom Black",
        category: "Smartphone",
        isSponsored: true,
        images: [
          "https://images.unsplash.com/photo-1705530292519-ec81f2ace70d?q=80&w=2250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        price: 124999,
        discountPercentage: 15,
        finalPrice: 124999 - (124999 * 0.15),
    },
    {
        id: 6,
        name: "Sony WH-1000XM5",
        type: "Over-Ear",
        color: "Silver",
        category: "Headphones",
        isSponsored: false,
        images: [
        "https://images.unsplash.com/photo-1617864064479-f203fc7897c0?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        price: 29999,
        discountPercentage: 5,
        finalPrice: 29999 - (29999 * 0.05),
    },
    {
        id: 7,
        name: "Dell XPS 13",
        screenSize: "13.4 inches",
        processor: "Intel i7",
        category: "Laptop",
        isSponsored: true,
        images: [
            "https://plus.unsplash.com/premium_photo-1681302427948-2fd0eca629b1?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        price: 149999,
        discountPercentage: 12,
        finalPrice: 149999 - (149999 * 0.12),
    },
    {
        id: 8,
        name: "Ray-Ban Aviator Sunglasses",
        lensColor: "Green",
        frameMaterial: "Metal",
        category: "Accessories",
        isSponsored: false,
        images: [
         "https://images.unsplash.com/photo-1566421966482-ad8076104d8e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        price: 12999,
        discountPercentage: 18,
        finalPrice: 12999 - (12999 * 0.18),
    },
    {
        id: 9,
        name: "Adidas Ultraboost 22",
        size: "9",
        color: "Core Black",
        category: "Footwear",
        isSponsored: true,
        images: [
           "https://images.unsplash.com/photo-1642769512179-0a0a1edce4af?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        price: 8999,
        discountPercentage: 30,
        finalPrice: 8999 - (8999 * 0.30),
    },
    {
        id: 10,
        name: "Apple iPad Air",
        storage: "128GB",
        color: "Sky Blue",
        category: "Tablet",
        isSponsored: false,
        images: [
            "https://images.unsplash.com/photo-1628866971123-6697eb767771?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        price: 74999,
        discountPercentage: 8,
        finalPrice: 74999 - (74999 * 0.08),
    }
];


export function formatToIndianCurrency(amount: number): string {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2,
    }).format(amount);
}
