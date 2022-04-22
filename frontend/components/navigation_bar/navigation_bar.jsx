import React, { useState } from 'react'
import AccountListContainer from './account_list/account_list_container'
import Logo from '../logo'
import SearchBar from './search_bar/search_bar'
import CategoryLink from './category_link'
import CartIconContainer from './cart_icon/cart_icon_container'

const NavBelt = ({fetchProducts, history, userId, sessionStorageUpdate}) => {
    if(sessionStorage.getItem('department') === 'undefined') sessionStorage.setItem('department', 'All Departments')
    if(!userId && !sessionStorage.getItem('cart')) sessionStorage.setItem('cart', '')
    const [department, setDepartment] = useState(sessionStorage.getItem('department'))
    const[searchText, setSearchText] = useState(sessionStorage.getItem('searchText') || undefined)
    // const [cart, setCart] = useState(sessionStorage.getItem('cart'))


    // debugger
    return (
        <nav className="nav-belt">
            <div className="nav-belt-bar-1">
                <Logo setSearchText={setSearchText}/>
                {/* <DeliverToContainer /> */}
                <SearchBar setDepartment={setDepartment} department={department} searchText={searchText} setSearchText={setSearchText}/>
                <AccountListContainer />
                <CartIconContainer sessionStorageUpdate={sessionStorageUpdate}/>
                
            </div>

            <div className="nav-belt-bar-2">
                <CategoryLink category={'All Products'} fetchProducts={fetchProducts} history={history} department={department} setDepartment={setDepartment} setSearchText={setSearchText}/>
                <CategoryLink category={'Toys & Games'} fetchProducts={fetchProducts} history={history} department={department} setDepartment={setDepartment} setSearchText={setSearchText}/>
                <CategoryLink category={'Health & Household'} fetchProducts={fetchProducts} history={history} department={department} setDepartment={setDepartment} setSearchText={setSearchText}/>
                <CategoryLink category={'Fashion'} fetchProducts={fetchProducts} history={history} department={department} setDepartment={setDepartment} setSearchText={setSearchText}/>
                <CategoryLink category={'Electronics'} fetchProducts={fetchProducts} history={history} department={department} setDepartment={setDepartment} setSearchText={setSearchText}/>
                <CategoryLink category={'Pet Supplies'} fetchProducts={fetchProducts} history={history} department={department} setDepartment={setDepartment} setSearchText={setSearchText}/>
                <CategoryLink category={'Sporting Goods'} fetchProducts={fetchProducts} history={history} department={department} setDepartment={setDepartment} setSearchText={setSearchText}/>

                {/* <p className='nav-link'>Toys & Games</p> 
                <p className='nav-link'>Fashion</p>
                <p className='nav-link'>Smart Home</p>
                <p className='nav-link'>Pet Supplies</p>
                <p className='nav-link'>Sporting Goods</p>  */}
            </div>
        </nav>
    )
}

export default NavBelt