import { createBrowserRouter } from 'react-router-dom'
import Products from '../../pages/products'
import Main from '../../pages/main'

//describing routing
const router = createBrowserRouter
([
    {
        path: '/',
        element: <Main />
    },
    {
        path: '/products',
        element: <Products />
    }
])

export default router;