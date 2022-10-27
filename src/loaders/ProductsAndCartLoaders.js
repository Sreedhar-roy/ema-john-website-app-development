import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () =>{
    // get products
    const productData = await fetch('products.json');
    const products = await productData.json();

    const saveCart = getStoredCart();
    const initialCart =[];

    for(const id in saveCart){
        const previousCart =[]
        const addedProduct = products.fine(product => product.id === id);
        if(addedProduct){
            const quantity = saveCart[id];
            addedProduct.quantity = quantity;
            previousCart.push(addedProduct);
        }
    }

    return { products: products, initialCart: initialCart };
}