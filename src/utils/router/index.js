import { createBrowserRouter } from 'react-router-dom'


import Products from '../../pages/products'
import Main from '../../pages/main'
import MainLayout from '../../components/main-layout'
import {ProductsList} from '../../components/products-list'
import {ProductDetail} from '../../components/product-detail'
import {AddProduct} from '../../pages/products/add'

//describing routing
/** 
 * Router - определяет отображаемый на странциуе компонент
 * Маршруты 
 * Main - компонент Main()
 * Products - продукты
 */
const router = createBrowserRouter( [
    {
        element: <MainLayout/>,
        children : 
        [
            {
                path: '/',
                element: <Main />
            },
            {
                path: '/products',
                element: <Products />,
                children: [
                    { 
                        index: true, 
                        element: <ProductsList />
                    },
                    { 
                        path: '/products/:id', 
                        element: <ProductDetail />
                    },
                    {
                        path: '/products/add',
                        element: <AddProduct />
                    }
                ]
            }
        ]
    }
]
)


export default router;