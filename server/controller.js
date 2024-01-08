import { User, db } from "./db/model.js";

const handlerFunctions = {
    register: async (req, res) => {
        console.log(req.body)
        const {username, password} = req.body

        const newUser = await User.create({
            username,
            password
        })

        res.send(newUser)
    },

    login: async (req, res) => {
        // console.log(req.body)
        const {username, password} = req.body

        const valid = await User.findOne({
            where:{
                username: username,
                password: password
            }}
        )

        if(valid){
            res.send('success')
        }else{
            res.send('failure')
        }

    }
}

export default handlerFunctions