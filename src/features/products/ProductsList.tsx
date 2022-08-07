import { ProductCard } from "./ProductCard";
import { Product } from "./productsSlice";

interface ProductsListProps {
    products: Product[];
}

export function ProductsList(props: ProductsListProps) {
    return (
        <div>
            { props.products.map(product => (<ProductCard extraClass={null} key={product.id} name={product.name} description={product.description} price={product.price} />))}
        </div>
    )
}