import { InteractiveCheckout, Product } from "@/components/uis/interactive-checkout"
import { Footer7 } from "@/All Components /footer";
import NavHeader from "@/All Components /nav-header"
import oromai from "@/images/img1.webp"

const defaultProducts: Product[] = [
    {
        id: "1",
        name: "ኦሮማይ",
        price: 129.99,
        category: "Art",
        image: "https://www.ethiobooks.com/cdn/shop/products/4d22752d3ccfc450651ab464bce1c6b4_1024x1024.jpg?v=1736453757",
        color: "",
    },
    {
        id: "2",
        name: "ኦሮማይ",
        price: 179.99,
        category: "Romance",
        image: "https://www.ethiobooks.com/cdn/shop/products/4d22752d3ccfc450651ab464bce1c6b4_1024x1024.jpg?v=1736453757",
        color: "",
    },
    {
        id: "3",
        name: "ኦሮማይ",
        price: 89.99,
        category: "Casual",
        image: "https://www.ethiobooks.com/cdn/shop/products/4d22752d3ccfc450651ab464bce1c6b4_1024x1024.jpg?v=1736453757",
        color: "",
        
    },
];


function InteractiveCheckoutDemo() {
    return (
        
            <div>
               
                <InteractiveCheckout products={defaultProducts} />
                <Footer7/>
            </div>
        
    
    );
}


export default InteractiveCheckoutDemo
