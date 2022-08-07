import { useAppDispatch } from '../../app/hooks';
import { addToCart } from '../cart/cartSlice';
import { useEffect } from 'react';
export interface ProductCardProps {
    name: string;
    description: string;
    price: number;
    extraClass: string | null;
}

// Dodaj props do komponentu, uzyj ich w widoku
// Dodaj 3 ProductCard do App.tsx

export function ProductCard(props: ProductCardProps) {
    const dispatch = useAppDispatch();
    const wrapperClass = "card mb-3 " + props.extraClass;

    return (
        <div className={wrapperClass}>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <button onClick={() => dispatch(addToCart({ name: props.name, price: props.price}))} className="btn btn-primary">Add to cart</button>
            </div>
        </div>
    )
}