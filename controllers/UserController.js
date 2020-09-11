let user = require('../models/User')


class UserController {

    async index(req,res){
        let users = await user.findAll()

        res.json(users)
    }
    

    async create(req,res){
        let {email,password,name} = req.body

        if(email == undefined){
            res.status(400)
            res.json({err: "O email é invalido"})
            return
        } 
        let emailExists = await user.findEmail(email)

        if(emailExists){
            res.status(406)
            res.json({err:"O Email já está cadastrado"})
            return
        } 

        await user.new(email,password,name)

        res.status(200)
        res.send("tudo ok") 
    }

    async findUser(req,res){
        let id = req.params.id

        let result = await user.findById(id)
       if(result == undefined){
            res.status(404)
            res.json({})
       }else{
           res.status(200)
           res.json(result)
       }
    }
}

module.exports = new UserController();