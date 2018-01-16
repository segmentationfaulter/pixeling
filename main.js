const viewNode = document.getElementById('view')
const purchaseNode = document.getElementById('purchase')
const wishlistNode = document.getElementById('wishlist')
const cartNode = document.getElementById('cart')

viewNode.addEventListener('click', sendViewEvent, {
  once: true
})

purchaseNode.addEventListener('click', sendPurchaseEvent, {
  once: true
})

wishlistNode.addEventListener('click', sendWishListEvent, {
  once: true
})

cartNode.addEventListener('click', sendCartEvent, {
  once: true
})

function sendViewEvent () {
  window.fbq('track', 'ViewContent', {
    value: 532,
    currency: 'USD',
    contents: {
      id: 'ABC',
      quantity: 1,
      item_price: 600
    },
    content_type: 'product'
  })
}

function sendPurchaseEvent () {
  window.fbq('track', 'Purchase', {
    value: 532,
    currency: 'USD',
    contents: {
      id: 'ABC',
      quantity: 1,
      item_price: 600
    },
    content_type: 'product'
  })
}

function sendWishListEvent () {
  window.fbq('track', 'AddToWishlist', {
    value: 532,
    currency: 'USD',
    contents: {
      id: 'ABC',
      quantity: 1,
      item_price: 600
    }
  })
}

function sendCartEvent () {
  window.fbq('track', 'AddToCart', {
    value: 532,
    currency: 'USD',
    contents: {
      id: 'ABC',
      quantity: 1,
      item_price: 600
    }
  })
}
