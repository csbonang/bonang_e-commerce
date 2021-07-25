const router = require('express').Router();
const { Category, Product, Tag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const categoryData = await Category.findAll({
      include: [{ model: Product }]
    });
    res.json(categoryData)
   }catch(err)
   {
     res.status(500).json(err); 

   }
  
   // Alternative to this: useful because we will get an immediate response if we implement on multiple levels. 
   // Category.findAll 
   //.then ()

});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  try{
    const categoryData = await Category.findOne({
      where:{
        id:req.params.id
      },
      include: [{ model: Product }]
    });
    res.json(categoryData)
   }catch(err)
   {
     res.status(500).json(err); 

   }
});

router.post('/', async(req, res) => {
  // create a new category
  try{
    const categoryData = await Category.create(req.body); 
    res.json(categoryData); 
  }
  catch(err){
     res.status(500).json(err); 
  }
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  try{
    const categoryData = await Category.update(req.body,{
      where: {
        id: req.params.id,
      },
    }); 
   }
   catch(err)
   {
      res.status (500).json(err); 
   }

});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  try{
   const categoryData = await Category.destroy({
     where: {
       id: req.params.id,
     },
   }); 
  }
  catch(err)
  {
     res.status (500).json(err); 
  }

});

module.exports = router;
