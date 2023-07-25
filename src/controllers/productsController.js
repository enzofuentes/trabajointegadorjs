const products = [ 
  {
      "id": 1,
      "name": "Indumentaria buzo 1",
      "price": 13500,
      "description": "buzo oversize negro",
      "image": "Indumentaria-buzo-1.webp"
  },
  {
      "id": 2,
      "name": "Indumentaria buzo 2",
      "price": 13500,
      "description": "buzo oversize blanco crema",
      "image": "Indumentaria-buzo-2.webp"
  },
  {
      "id": 3,
      "name": "Indumentaria buzo 3",
      "price": 13500,
      "description": "buzo oversize negro not you",
      "image": "Indumentaria-buzo-3.webp"
  },
  {
      "id": 4,
      "name": "remera",
      "price": 9000,
      "description": "remera negra trasher",
      "image": "remera-1.webp"
  },
  {
      "id": 5,
      "name": "gorra",
      "price": 3500,
      "description": "gorra negra oneil",
      "image": "gorra-1.jpg"
  }
];

const controller = {
  crear: (req, res) => {
      res.json('crear un producto');
  },
  listar: (req, res) => {
      res.json(products);
  },
  detalle: (req, res) => {
      const productId = parseInt(req.params.id);
      const product = products.find((product) => product.id === productId);

    if (product) {
         res.json(product);
     } else {
          res.json({ error: 'Producto no encontrado' });
      }
  },
};


//module.exports = controller;


module.exports = controller;
