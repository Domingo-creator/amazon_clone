import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { createCartItem, updateCartItem } from "../../../../actions/cart_item_actions"
import { openModal } from "../../../../actions/modal_actions"
import ProductPurchaseWindow from "./product_purchase_window"

const mapStateToProps = (state, ownProps) => {
    return {
        userId: state.session.id,
        product: state.entities.product[ownProps.match.params.productId],
        cartItems: state.entitites.cartItems
    }
}

const mapDispatchToProps = dispatch => {
    debugger
    return {
        createCartItem: (userId, cartItem) => dispatch(createCartItem(userId, cartItem)),
        updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)), 
        createNoUserCartItem: product => dispatch(createNoUserCartItem(product)),
        openModal: (modal) => dispatch(openModal(modal))

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductPurchaseWindow))