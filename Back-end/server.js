import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors())


app.get('/usuarios', async (req, res) => {
    const clients = await prisma.client.findMany()

    res.status(200).json(clients)
})

app.post('/usuarios', async (req, res) => {
    const user = await prisma.client.create({
        data: {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        }
    })

    res.status(201).json({ message: "Usuário criado" })
})

app.put('/usuarios/:id', async (req, res) => {
    const user = await prisma.client.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        }
    })

    res.status(200).json(user)
})

app.delete('/usuarios/:id', async (req, res) => {
    const user = await prisma.client.delete({
        where: {
            id: req.params.id
        },

    })

    res.status(204).json({ message: "Usuário deletado" })
    
})

app.listen(3000)

