import Home from './page/home/Home'
import NewUser from './page/newUser/newUser'
import UserList  from './page/userList/userList'
import Products from './page/Products/products'
import Product from './page/Product/product'

let routes = [
    {path: '/' , element : <Home />},
    {path: '/newuser' , element : <NewUser />},
    {path: '/users' , element : <UserList />},
    {path: '/products' , element : <Products />},
    {path: '/product/:UserID' , element : <Product />}
]

export default routes