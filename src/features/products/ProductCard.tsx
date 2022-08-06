export interface ProductCardProps {
    name: string;
    description: string;
    price: number;
}

// Dodaj props do komponentu, uzyj ich w widoku
// Dodaj 3 ProductCard do App.tsx

export function ProductCard(props: ProductCardProps) {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">Add to cart</a>
            </div>
        </div>
    )
}