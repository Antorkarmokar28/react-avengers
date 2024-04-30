import { useEffect } from 'react';
import './Home.css'
import { useState } from 'react';
import Cart from '../Cart/Cart';
const Home = () => {

    const [actorsData, setActorsData] = useState([]);
    const [selectedActor, setSelectedActor] = useState([]);
    const [totalCost, setTotalCost] = useState([0])
    const [totalRemaining, setTotalRemaining] = useState(0);

    useEffect(() => {
        fetch('public/data.json')
            .then(res => res.json())
            .then(data => setActorsData(data))
    }, [])

    const handleActorCart = (actor) => {
        const isExits = selectedActor.find(item => item.id == actor.id);
        let cost = actor.salary;
        if (isExits) {
            return alert(`Already booked`)
        } else {
            selectedActor.forEach(item => {
                cost = cost + item.salary;
            });
            const remaining = 20000 - cost;
            setTotalCost(cost)
            if (cost > 20000) {
                return alert('Insufficient balance')
            } else {
                setTotalRemaining(remaining)
                setSelectedActor([...selectedActor, actor]);
            }
        }
    }

    return (
        <>
            <div className="home-inner">
                {
                    actorsData.map((actor) => (
                        <div key={actor.id} className='card'>
                            <img className='card-img' src={actor?.image} alt={`This is a actor image ${actor?.image}}`} />
                            <h2>Name:{actor?.name}</h2>
                            <div className='card-content-inner'>
                                <h4>Salary: ${actor?.salary}</h4>
                                <h4>Director: {actor?.role}</h4>
                            </div>
                            <button onClick={() => handleActorCart(actor)} className='card-btn'>Select</button>
                        </div>
                    ))
                }
            </div>
            <Cart selectedActor={selectedActor} totalCost={totalCost} totalRemaining={totalRemaining}></Cart>
        </>
    );
};

export default Home;