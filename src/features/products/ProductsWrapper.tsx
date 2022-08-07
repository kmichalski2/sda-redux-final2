import { useEffect, useState } from "react"
import { ProductsGrid } from "./ProductsGrid";
import { ProductsList } from "./ProductsList";
import { initProducts, selectProducts } from './productsSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

export function ProductsWrapper() {
    const [displayMode, setDisplayMode] = useState('list');

    const products = useAppSelector(selectProducts);
    const dispatch = useAppDispatch();

    const displayList = () => {
        setDisplayMode('list');
    }

    const displayGrid = () => {
        setDisplayMode('grid');
    }

    useEffect(() => {
        dispatch(initProducts());
    }, []) 

    return (
        <div>
            <nav className="btn-group mb-5">
                <button className="btn btn-primary" onClick={() => displayList()}>List</button>
                <button className="btn btn-success" onClick={() => displayGrid()}>Grid</button>
            </nav>
            { displayMode === 'list' ? <ProductsList products={products} /> : <ProductsGrid products={products} />}
        </div>
    )
}