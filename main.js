const saleNode = document.getElementById('sale')
const nonSaleNode = document.getElementById('non-sale')

saleNode.addEventListener('click', sendPixelEvent('sale'), {
  once: true
})
nonSaleNode.addEventListener('click', sendPixelEvent('nonSale'), {
  once: true
})

function sendPixelEvent (eventName) {
  return function () {
    fbq('trackCustom', eventName, {
      timestamp: Date.now()
    })
  }
}
