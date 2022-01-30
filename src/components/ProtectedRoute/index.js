import {Redirect, Route} from 'react-router-dom'
import Cookie from 'js-cookie'
import {v4 as uuidv4} from 'uuid'

const ProtectedRoute = props => {
  const token = Cookie.get('jwt_token')

  if (token === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} key={uuidv4()} />
}

export default ProtectedRoute
