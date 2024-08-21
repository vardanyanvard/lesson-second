import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [products, setProducts] = useState([
        {
            id: 101,
            name: "Psychology",
            price: 27000,
            pic: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_2878,h_1176/dk-core-nonprod/9780744091960/9780744091960_cover.jpg",
        },
        {
            id: 102,
            name: "Politic",
            price: 30000,
            pic: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_1439,h_588/dk-core-nonprod/9781465402141/9781465402141_cover.jpg",
        },
        {
            id: 103,
            name: "Business",
            price: 28000,
            pic: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_1439,h_588/dk-core-nonprod/9781465415851/9781465415851_cover.jpg",
        },
        {
            id: 104,
            name: "Science",
            price: 35000,
            pic: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_1439,h_588/dk-core-nonprod/9781465419651/9781465419651_cover.jpg",
        },
        {
            id: 105,
            name: "Sociology",
            price: 15000,
            pic: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_1439,h_588/dk-core-nonprod/9781465436504/9781465436504_cover.jpg",
        },
        {
            id: 106,
            name: "History",
            price: 38000,
            pic: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_1439,h_588/dk-core-nonprod/9781465445100/9781465445100_cover.jpg",
        },
        {
            id: 107,
            name: "Literature",
            price: 18000,
            pic: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_1439,h_588/dk-core-nonprod/9781465491015/9781465491015_cover.jpg",
        },
        {
            id: 108,
            name: "Classical Music",
            price: 40000,
            pic: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_1439,h_588/dk-core-nonprod/9781465473424/9781465473424_cover.jpg",
        },
    ]);
    const [basket, setBasket] = useState([]);

    const moveToCart = (prod) => {
        const result = basket.find((x) => x.id == prod.id);
        if (result) {
            result.count++;
            setBasket([...basket]);
        } else {
            setBasket([...basket, { ...prod, count: 1 }]);
        }
    };

    const changeBasketListById = (id, isAdd, isFilter) => {
        setBasket(
            basket.filter((item) => {
                if (item.id === id) {
                    if (isFilter) return false;
                    if (!isAdd && item.count > 1) {
                        item.count -= 1;
                    } else if (isAdd) {
                        item.count += 1;
                    }
                }

                return true;
            })
        );
    };

    return (
        <>
            <h1>Online Shop</h1>
            <div className="content">
                <div>
                    <h3>Products</h3>
                    <div className="list">
                        {products.map((prod) => (
                            <div key={prod.id}>
                                <img src={prod.pic} />
                                <p>{prod.name}</p>
                                <strong>{prod.price} AMD</strong>
                                <button onClick={() => moveToCart(prod)}>
                                    move
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3>Cart</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>price</th>
                                <th>count</th>
                                <th>subtotal</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {basket.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.count}</td>
                                    <td>{item.count * item.price}</td>
                                    <td className="buttonsRow">
                                        <p
                                            onClick={() =>
                                                changeBasketListById(
                                                    item.id,
                                                    true
                                                )
                                            }
                                        >
                                            +
                                        </p>
                                        <p
                                            onClick={() =>
                                                changeBasketListById(item.id)
                                            }
                                        >
                                            -
                                        </p>
                                        <p
                                            onClick={() =>
                                                changeBasketListById(
                                                    item.id,
                                                    null,
                                                    true
                                                )
                                            }
                                        >
                                            x
                                        </p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default App;
