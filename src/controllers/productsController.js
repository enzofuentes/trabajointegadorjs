const Product = require('../database/models/Products'); 
const path = require ('path');
const console = require('console');

const controller = {
    crear: async (req, res) => {
        console.log('La controladora está corriendo en el puerto 3005');
        try {
            let product = {
                name: req.body.name,
                price: req.body.price,
                discount: req.body.discount,
                category: req.body.category,
                description: req.body.description,
                image: req.file.filename,
                colors: ['Negro', 'Rojo', 'Gris']
            }

            const productDatabase = await Product.create(product);
            res.status(201).json(productDatabase);

        } catch(error) {
            if (error.errors.name) {
                return res.status(400).json({message: 'Falta el campo name'});
            }
            res.status(500).json({message: 'Internal server error'});
        }
    },
    update: async (req, res) => {
        console.log('La controladora está corriendo en el puerto 3005');
       let producto= await Product.findById({_id: req.params.id});
       
       let image = producto.image;
       
       if(req.file) {
           if (image !== 'image-default.png') {
           fs.unlinkSync (path.resolve(__dirname, `../../public/images/products/${image}`));
       }
       image= req.file.filename
       }
       
       
        const product = await Product.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).json(product);
    },
    listar: async (req, res) => {
        const products = await Product.find({});
        res.status(200).json(products);
    },
    detalle: async (req, res) => {
      try {
          const productId = req.params.id;
          const product = await Product.findById(productId);
          if (product) {
              res.status(200).json(product);
          } else {
              res.status(404).json({ message: 'Producto no encontrado' });
          }
      } catch (error) {
          res.status(500).json({ message: 'Error al obtener el detalle del producto' });
      }
  },
}
module.exports = controller;
