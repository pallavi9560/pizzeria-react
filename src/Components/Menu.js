import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Menu() {


    const [items, setMenu] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchitems();
    }, [])




    const fetchitems = () => {
        axios.get('http://localhost:5000/item')
            .then(response => {
                setMenu(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the item data', error)
            })
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/item/${id}`)
            .then(response => {
                fetchitems();
            })
            .catch(error => {
                console.error('There was an error deleting the item data', error)
            })
    }


    return (
        <div className="container mt-4">
            <h2>Menu</h2>
            <div className="row">
                {items.map(item => (
                    <div className="col-md-4" key={item.id}>
                        <div className="card mb-4">
                            <img src={item.image} alt="item-img" height={300} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">Description: {item.description}</p>
                                <p className="card-text">Dietary Preference: {item.dietarypreference}</p>
                                <p className="card-text">Size: {item.size}</p>
                                <p className="card-text">Toppings: {item.toppings}</p>
                                <p className="card-text">Price: Rs.{item.price}</p>
                                <p className="card-text">Crust: {item.crust}</p>
                                <p className="card-text">Extra Toppings: {item.extratoppings}</p>
                                <button className="btn btn-danger me-2" onClick={() => handleDelete(item.id)}>DELETE</button>
                                <button className="btn btn-warning" onClick={() => navigate(`/update-item/${item.id}`)}>UPDATE</button>
                            </div>
                        </div>
                    </div>


                ))}
            </div>


        </div>
    )
}


export default Menu;
