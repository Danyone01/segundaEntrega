import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {CartPage, CategoriesPage, CheckoutPage, ItemDetailContainer, ItemListContainer} from '../pages'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <ItemListContainer />
    },
    {
        path: '/item/:idProduct',
        element: <ItemDetailContainer />
    },
    {
        path: '/category/:id',
        element: <ItemListContainer />
    },
    {
        path: '/cart',
        element: <CartPage />
    },
    {
        path: '/categories/:categoryId',
        element: <CategoriesPage />
    },
    {
        path: '/checkout',
        element: <CheckoutPage />
    },
])

const Navigation = () =>    {
   
    return (
        <RouterProvider router={routes}/>
        )
}

export default Navigation