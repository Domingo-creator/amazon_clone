
export const fetchReviews = (productId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/products/${productId}/reviews`
    })
}

export const fetchReview = (productId, reviewId) => {
    return $.ajax({
        method: 'GET', 
        url: `/api/proudcts/${productId}/reviews/${reviewId}`
    })
}

export const updateReview = (productId, review) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/product/${productId}/reviews/${review.id}`,
        data: {review}
    })
}

export const createReview = (productId, review) => {
    return $.ajax({
        method: 'POST',
        url: `/api/product/${productId}/reviews`,
        data: {review}
    })
}

export const deleteReview = (productId, reviewId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/product/${productId}/reviews/${reviewId}`
    })
}