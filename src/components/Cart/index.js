import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      console.log(cartList)
      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart

      const removeAllBtnClick = () => {
        removeAllCartItems([])
      }

      const totalBill = () => {
        let total = 0
        cartList.forEach(each => {
          total += each.price * each.quantity
        })
        return total
      }

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  type="button"
                  className="removealbtn"
                  onClick={removeAllBtnClick}
                >
                  Remove All
                </button>
                <CartListView />
                <div className="total-bill-container-one">
                  <h1 className="order-total-heading">
                    Order Total:Rs {totalBill()}
                  </h1>
                  <p>{cartList.length} items in cart</p>
                  <button type="button" className="mb-3 btn btn-primary">
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
