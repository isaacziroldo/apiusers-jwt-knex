let knex = require('../database/connection')
let bcrypt = require('bcryptjs')

class User {

    //CRIA UM NOVO USUÁRIO
    async new(email, password, name) {
        let hash = await bcrypt.hash(password, 10)

        try {
            await knex.insert({ email, password: hash, name, role: 0 }).table('users')
        } catch (error) {
            console.log(error)
        }
    }

    //BUSCA DE USUÁRIOS
    async findAll() {
        try {
            let result = await knex.select('id','name','email','role').table('users')
            return result
        } catch (error) {
            console.log(error)
            return []
        }
    }

    //BUSCA DE USUARIOS POR ID
    async findById(id){
        try {
            let result = await knex.select('id','name','email','role').where({id: id}).table('users')
            
            if(result.length > 0){
                return result[0]
            } else{
                return undefined
            }
            
            
        } catch (error) {
            console.log(error)
            return undefined
        }
    }


    //PROCURA O EMAIL E FAZ A VALIDAÇÃO, E DA UM RETORNO
    async findEmail(email) {
        try {
            let result = await knex.select("*").from('users').where({ email: email })
            if (result.length > 0) {
                return true
            } else {
                return false
            }
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async update(id,email,name,role){
        let User = await this.findById(id)

        if(user != undefined){
            let editUser = {}

            if(email != undefined){
                if(email != result.email){
                    let result = await this.findEmail(email)
                    if(result == false){
                        editUser.email = email
                    }
                }
            } else{
                return
            }

            if(name != undefined){

            }

            if(role != undefined){
                
            }
        }else{
            return {status: false, err: 'O usuário não existe'}
        }


    }
}

module.exports = new User()