export function DinoItem({ name, category, price, neutedPrice }) {
    return <div>
        <ul className="list_group">
            <li className="list-group-item">{name}</li>
            <li className="list-group-item">{category}</li>
            <li className="list-group-item">{price}</li>
            <li className="list-group-item">{neutedPrice}</li>
        </ul>
    </div>
}