const express= require('express')
const app= express()
const bodyparser= require('body-parser')
const database= require('./database/connection')
const port= process.env.PORT || 5000
const cors= require('cors')

app.use(cors())
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

// inserção de dados
app.post('/orders', async (req, res)=> {
    try{
        const {total_price, date_creation}=req.body
        await database('orders').insert({total_price, date_creation})
        res.sendStatus(200)
    }catch (e) {
        res.send("Detectamos um erro na rota post orders!! Erro: ",e)
    }
})

app.post('/ingredients', async (req, res)=> {
    try {
        const ingredients=JSON.parse(req.body.ingredients)
        const last_id=await database('orders').max('id_burger as id') 
        Object.keys(ingredients).forEach(async (name, amount) => {
            await database('ingredients').insert({
                name,
                amount,
                id_burger: last_id[0].id})
        })
        res.sendStatus(200)
    } catch (e) {
        res.send("Detectamos um erro na rota post ingredients!! Erro: ",e)
    }
    
})

app.post('/buyers', async (req, res)=> {
    try {
        const {name, email, street, cep}=req.body
        await database('buyers').insert({name, email, street, cep})
        res.sendStatus(200)
    } catch (e) {
        res.send("Detectamos um erro na rota post buyers!! Erro: ",e)
    }
    
})

//busca de dados
app.get('/orders', async (_, res)=> {
    try {
        const select = await database('orders').select()
        select.forEach(async (result,i) => {
            const ingredients = await database('ingredients').select('name','amount').where({id_burger: result.id_burger})
            select[i].ingredients=[]
            ingredients.forEach(ingre => {
                select[i].ingredients.push({[ingre.name]:ingre.amount})
            })
            if(select.length-1 == i) res.send(select)
        })       
    } catch (e) {
        res.send("Detectamos um erro na rota get orders!! Erro: ",e)
    }
})

app.get('/buyers', async (_, res)=> {
    try {
        const buyers = await database('buyers').select('name','email')
        res.send(buyers)
    } catch (e) {
        res.send("Detectamos um erro na rota get buyers!! Erro: ",e)
    }
})

app.listen(port, () => console.log(`Listening on port ${port}`));
