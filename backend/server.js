const express= require('express')
const app= express()
const bodyparser= require('body-parser')
const cors= require('cors')
const JWT= require('jsonwebtoken')
const JWTkey='444testand0JWT888'

const port= process.env.PORT || 5000
const database= require('./database/connection')


app.use(cors())
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

// inserção de dados
app.post('/orders', async (req, res)=> {
    try{
        const {total_price, date_creation}=req.body
        await database('orders').insert({total_price, date_creation})
        res.sendStatus(200).send('Dados inseridos com sucesso!!')
    }catch (e) {
        res.sendStatus(500).send("Detectamos um erro na rota post orders!! Erro: ",e)
    }
})

app.post('/ingredients', async (req, res)=> {
    try {
        const ingredients=req.body
        const last_id=await database('orders').max('id_burger as id') 
        Object.entries(ingredients).forEach(async value => {
            
            await database('ingredients').insert({
                name: value[0],
                amount: value[1],
                id_burger: last_id[0].id})
        })
        res.sendStatus(200).send('Dados inseridos com sucesso!!')
    } catch (e) {
        res.sendStatus(500).send("Detectamos um erro na rota post ingredients!! Erro: ",e)
    }
    
})

app.post('/buyers', async (req, res)=> {
    try {
        const {name, email, street, cep}=req.body
        await database('buyers').insert({name, email, street, cep})
        res.sendStatus(200).send('Dados inseridos com sucesso!!')
    } catch (e) {
        res.sendStatus(500).send("Detectamos um erro na rota post buyers!! Erro: ",e)
    }
    
})

app.post('/users', async (req, res)=> {
    try {
        const {email, password}=req.body
        const result=await database('user').select('email','password').where({email, password})
        

        result.length > 0 ? 
            JWT.sign({}, JWTkey, {expiresIn:'24h'},(err,tkn)=> {
                res.status(200).send({
                    email:result[0].email,
                    password:result[0].password,
                    token: err ? err : tkn
                }) 
            })
            : res.status(200).send('No user found')
    } catch (e) {
        res.status(500).send("Detectamos um erro na rota post users!! Erro: ",e)
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
            if(select.length-1 == i) res.send(select); 
        })       
    } catch (e) {
        res.sendStatus(500).send("Detectamos um erro na rota get orders!! Erro: ",e)
    }
})

app.get('/buyers', async (_, res)=> {
    try {
        const buyers = await database('buyers').select('name','email')
        res.send(buyers)
    } catch (e) {
        res.sendStatus(500).send("Detectamos um erro na rota get buyers!! Erro: ",e)
    }
})

app.listen(port, () => console.log(`Listening on port ${port}`));
