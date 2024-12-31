const express = require('express')
const router = express.Router();
const pgsController = require('../controller/pgsController.js');
const { existsIdTeams, checkInput, checkVoid } = require('../middleware/utils.js');

//index
router.get('/', pgsController.index, ()=>{ 
    console.log("finita la index");
})

//show
router.get('/:id', existsIdTeams, pgsController.show, ()=>{
    console.log("finita la show");
})

//store
router.post('/',checkVoid, checkInput, pgsController.store, pgsController.storeCT,()=>{
    console.log("fine della store") 
})

//update
router.put('/:id', checkVoid, existsIdTeams, checkInput,  pgsController.update, ()=>{ 
    console.log("fine della update") 
})

//modify
router.patch('/:id', checkVoid, existsIdTeams, pgsController.modify, ()=>{ 
    console.log("fine della modify") 
})

//destroy
router.delete('/:id', existsIdTeams, pgsController.destroy, (req, res)=>{ 
    console.log("finita la delete");
})
module.exports = router