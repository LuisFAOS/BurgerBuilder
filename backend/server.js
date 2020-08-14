const express= require('express')
const app= express()
const bodyparser= require('body-parser')
const database= require('./database/connection')
const port= process.env.PORT || 5000
const cors= require('cors')

app.use(cors())
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

//
app.post('/orders', async (req, res)=> {
    try{
        const {total_price, date_creation, ingredients}=req.body
        await database('Orders').insert({total_price, date_creation})
        const last_id=await database('Orders').max('id_burger as id')
        Object.keys(ingredients).forEach(async name_ingredient => {
            await database('Ingredients').insert({
                    name: name_ingredient,
                    amount: ingredients[name_ingredient],
                    id_burger: last_id[0].id})
        })
        res.sendStatus(200)
    }catch (e) {
        res.send("Detectamos um erro!!")
    }
})

app.listen(port, () => console.log(`Listening on port ${port}`));
