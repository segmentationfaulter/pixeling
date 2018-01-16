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

const basePayload = {
  value: 532,
  currency: 'USD',
  content_ids: ['4234234']
}

function sendViewEvent () {
  window.fbq('track', 'ViewContent', Object.assign({}, basePayload, {
    content_type: 'product'
  }))
}

function sendPurchaseEvent () {
  window.fbq('track', 'Purchase', Object.assign({}, basePayload, {
    content_type: 'product'
  }))
}

function sendWishListEvent () {
  window.fbq('track', 'AddToWishlist', basePayload)
}

function sendCartEvent () {
  window.fbq('track', 'AddToCart', basePayload)
}
