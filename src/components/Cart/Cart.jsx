import PropTypes from 'prop-types';
import './Cart.css'
const Cart = ({ selectedActor, totalCost, totalRemaining }) => {
    return (
        <div className="cart-inner">
            <h1>Total Actors:{selectedActor.length}</h1>
            <h3>Remaining: {totalRemaining}</h3>
            <h3>Total Cost: {totalCost}</h3>
            {
                selectedActor.map((actor, inx) => (
                    <div  key={inx}>
                        <li>{actor.name}</li>
                    </div>
                ))
            }
        </div>
    );
};
Cart.propTypes = {
    handleCart: PropTypes.array,
}
export default Cart;