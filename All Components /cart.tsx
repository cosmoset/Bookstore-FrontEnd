import { InteractiveCheckout, Product } from "@/components/ui/interactive-checkout"

import { Button } from "@/components/ui/buttoncart"

const defaultProducts: Product[] = [
    {
        id: "1",
        name: "Book 1",
        price: 129.99,
        category: "Art",
        image: "",
        color: "",
    },
    {
        id: "2",
        name: "Book 2",
        price: 179.99,
        category: "Romance",
        image: "",
        color: "",
    },
    {
        id: "3",
        name: "Book 3",
        price: 89.99,
        category: "Casual",
        image: "",
        color: "",
    },
];


function InteractiveCheckoutDemo() {
    return <InteractiveCheckout products={defaultProducts} />
}

export { InteractiveCheckoutDemo }