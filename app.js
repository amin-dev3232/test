console.log('g nkhr');

function getProduct(req, res, next) {
  Product.fetchAll((products) => {
    res.render('shop', {
      products,
      pageTitle: 'Shop',
    });
  });
}
