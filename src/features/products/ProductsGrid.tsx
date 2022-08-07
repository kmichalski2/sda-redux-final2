import { ProductCard } from "./ProductCard";
import './Products.css';
import { Product } from "./productsSlice";

interface ProductsGridProps {
    products: Product[];
}

export function ProductsGrid(props: ProductsGridProps) {
    return (
        <div className="row">
            { props.products.map(product => (<ProductCard extraClass="col" key={product.id} name={product.name} description={product.description} price={product.price} />))}
        </div>
    )
}