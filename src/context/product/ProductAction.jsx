export const fetchProduct = async() =>{
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json();
    return data;
}

