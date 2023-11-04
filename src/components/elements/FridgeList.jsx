import { NavLink } from "react-router-dom";


const FridgeList = ({
    id,
    imageSrc = "deskImg.jpg",
    type = "No type",
    description = "No description",
    material = "No material",
    price = 0
}) => {
    return (
        <section className="list">
            <div class="list__items">
                <img src={imageSrc} className="list__image" alt="desk" width={230} height={230} />
                <h2 className="list__type">{type}</h2>
                <p className="list__description"><text>{description}</text></p>
                <p className="list__material">Material: <text>{material}</text></p>
                <p className="list__price">Price: <span className="list__price-color">{price} $ </span> </p>
                <NavLink className="list__button" exact to={`/Catalog/${id}`}>View more</NavLink>
            </div>
        </section>
    );
};

export default FridgeList;