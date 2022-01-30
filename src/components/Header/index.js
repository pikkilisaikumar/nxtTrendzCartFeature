import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {SiDcentertainment} from 'react-icons/si'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import CartContext from '../../context/CartContext'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const renderCartItemsCount = () => (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        const cartItemsCount = cartList.length

        return (
          <>
            {cartItemsCount > 0 ? (
              <span className="cart-count-badge">{cartList.length}</span>
            ) : null}
          </>
        )
      }}
    </CartContext.Consumer>
  )

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </Link>

          <Popup
            className="popup-content"
            modal
            trigger={
              <button
                type="button"
                className="nav-mobile-btn"
                onClick={onClickLogout}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                  alt="nav logout"
                  className="nav-bar-img"
                />
              </button>
            }
          >
            {close => (
              <div className="close-container-one">
                <div>
                  <p className="logout-paragraph1">
                    Are you sure, you want to logout ?
                  </p>
                </div>
                <div className="close-confirm-container-one">
                  <button
                    type="button"
                    className="trigger-button1 m-2 btn btn-danger"
                    onClick={() => close()}
                  >
                    Close
                  </button>

                  <button
                    type="button"
                    className="trigger-button1 btn btn-primary m-2"
                    onClick={onClickLogout}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/cart" className="nav-link">
                Cart
                {renderCartItemsCount()}
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/entertainment" className="nav-link">
                Entertainment
              </Link>
            </li>
          </ul>

          <Popup
            className="popup-content"
            modal
            trigger={
              <button type="button" className="logout-desktop-btn">
                Logout
              </button>
            }
          >
            {close => (
              <div className="close-container-one">
                <div>
                  <p className="logout-paragraph">
                    Are you sure, you want to logout ?
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    className="trigger-button m-2 btn btn-danger"
                    onClick={() => close()}
                  >
                    Close
                  </button>

                  <button
                    type="button"
                    className="trigger-button btn btn-primary m-2"
                    onClick={onClickLogout}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-bar-img"
              />
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/products" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
                className="nav-bar-img"
              />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/cart" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className="nav-bar-img"
              />
              {renderCartItemsCount()}
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/entertainment" className="nav-link">
              <SiDcentertainment />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)
