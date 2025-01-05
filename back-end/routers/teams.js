const express = require('express')
const router = express.Router();
const teamsController = require('../controller/teamsController.js');
const { existsIdTeams, checkInput, checkVoid } = require('../middleware/utils.js');

//index
router.get('/', teamsController.index, ()=>{ 
    console.log("finita la index");
})

//show
router.get('/:id', existsIdTeams, teamsController.show, ()=>{
    console.log("finita la show");
})

//store
router.post('/',checkVoid, checkInput, teamsController.store, teamsController.storeCT,()=>{
    console.log("fine della store") 
})

//update
router.put('/:id', checkVoid, existsIdTeams, checkInput,  teamsController.update, ()=>{ 
    console.log("fine della update") 
})

//modify
router.patch('/:id', checkVoid, existsIdTeams, teamsController.modify, ()=>{ 
    console.log("fine della modify") 
})

//destroy
router.delete('/:id', existsIdTeams, teamsController.destroy, (req, res)=>{ 
    console.log("finita la delete");
})
module.exports = router