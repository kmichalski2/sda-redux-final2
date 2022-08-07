import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectCartQuantity, selectCartItems, selectCartTotal, CartItem, decrementItemQuantity, incrementItemQuantity, removeFromCart } from './cartSlice';
import './CartInfo.css';
import { useState } from 'react';

export function CartInfo() {
    const [display, setDisplay] = useState(true);
    const quantity = useAppSelector(selectCartQuantity)
    const items = useAppSelector(selectCartItems);
    const total = useAppSelector(selectCartTotal);
    const dispatch = useAppDispatch();

    const quantityCounter = (item: CartItem) => {
        return (<span><button onClick={() => dispatch(decrementItemQuantity(item.name))} className="btn btn-xs">-</button> <span className="badge bg-secondary">{item.quantity}</span> <button onClick={() => dispatch(incrementItemQuantity(item.name))} className="btn btn-xs">+</button></span>)
    }
    const itemsList = items.map(item => <li className="list-group-item d-flex justify-content-between">{item.name} {quantityCounter(item)} <strong>{item.price}</strong> <button className="btn btn-danger btn-xs" onClick={() => dispatch(removeFromCart(item.name))}><i className="bi bi-trash"></i></button></li>)

    const toggleItems = () => {
        setDisplay(!display);
    }

    const cartDetails = quantity > 0 ? itemsList : <li className="list-group-item">Cart is empty</li>;

    // TODO 4:
    // 1. Dodaj mozliwosc zmiany ilosci produktu ( + / - )
    // 2. Dodaj mozliwosc usuwania produktu z koszyka
    // 3. Wyswietl ilosc danego produktu w koszyku

    return (
        <div onMouseOver={() => setDisplay(true)} onMouseOut={() => setDisplay(true)}>
            <button type="button" className="btn btn-primary" onClick={() => toggleItems()}>
                <i className="bi bi-cart-fill"></i> <span className="badge badge-secondary">{quantity}</span>
            </button>
            { display && <ul className="list-group position-absolute popup">
                    {cartDetails}
                    <li className="list-group-item list-group-item-success">Total: {total}</li>
            </ul> }
        </div>


    )
}