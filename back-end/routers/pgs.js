const express = require('express')
const router = express.Router();
const pgsController = require('../controller/pgsController.js');
const { existsId, checkInput, checkVoid, checkInputUpdate } = require('../middleware/utils.js');

//index
router.get('/', pgsController.index, ()=>{ 
    console.log("finita la index");
})

//show
router.get('/:id', existsId, pgsController.show, ()=>{
    console.log("finita la show");
})

//store
router.post('/',checkVoid, checkInput, pgsController.store, pgsController.storeCT,()=>{
    console.log("fine della store") 
})

//update
router.put('/:id', checkVoid, checkInput, existsId, pgsController.update, ()=>{ 
    console.log("fine della update") 
})

//modify
router.patch('/:id', checkVoid, existsId, pgsController.modify, ()=>{ 
    console.log("fine della modify") 
})

//destroy
router.delete('/:id', existsId, pgsController.destroy, (req, res)=>{ 
    console.log("finita la delete");
})
module.exports = router