import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  //   TODO: Add your code for remove all cart items, increment cart item quantity, decrement cart item quantity, remove cart item

  removeAllCartItems = data => {
    this.setState({cartList: data})
  }

  removeCartItem = id => {
    const {cartList} = this.state
    const remaningdata = cartList.filter(each => each.id !== id)
    this.setState({cartList: remaningdata})
  }

  addCartItem = product => {
    const {cartList} = this.state
    const finddata = cartList.find(each => each.id === product.id)
    if (finddata === undefined) {
      this.setState(prevState => ({cartList: [...prevState.cartList, product]}))
    } else {
      const dataone = cartList.map(each => {
        if (each.id === product.id) {
          return {...each, quantity: each.quantity + 1}
        }
        return {...each}
      })
      this.setState({cartList: dataone})
    }

    //   TODO: Update the code here to implement addCartItem
  }

  incrementCartItemQuantity = id => {
    const {cartList} = this.state
    const cartAfterIncrement = cartList.map(each => {
      if (each.id === id) {
        return {...each, quantity: each.quantity + 1}
      }
      return {...each}
    })
    this.setState({cartList: cartAfterIncrement})
  }

  decrementCartItemQuantity = id => {
    const {cartList} = this.state
    const decrementDataPresent = cartList.find(each => each.id === id)
    if (decrementDataPresent.quantity > 1) {
      const cartAfterDecrement = cartList.map(eachone => {
        if (eachone.id === id) {
          return {...eachone, quantity: eachone.quantity - 1}
        }
        return {...eachone}
      })
      this.setState({cartList: cartAfterDecrement})
    } else {
      const remaininglistdata = cartList.filter(eachitem => eachitem.id !== id)
      this.setState({cartList: remaininglistdata})
    }
  }

  render() {
    const {cartList} = this.state

    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          removeAllCartItems: this.removeAllCartItems,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
