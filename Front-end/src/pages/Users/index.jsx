import { useEffect, useState } from "react"
import Button from "../../components/Button"
import Background from "../../components/TopBackground"
import api from "../../services/api"
import Title from "../../components/Title"
import { AvatarClient, CardClients, Container, ContainerClients, TrashIcon } from "./styles"
import Trash from '..//..//assets/trash.svg'

import { useNavigate } from "react-router-dom"

function Users() {
    const navigate = useNavigate()

    const [clients, setClients] = useState([])


    useEffect(() => {
        async function getClients() {
            const { data } = await api.get('/usuarios')
            setClients(data)
        }


        getClients()
    }, [])

    async function deleteClient(id){
        await api.delete(`/usuarios/${id}`)


        const updateClients = clients.filter( client =>  client.id !== id)

        setClients(updateClients)
    }


    return (
        <Container>
            <Background></Background>

            <Title>Lista de Usuários</Title>

            <ContainerClients>

                {clients.map(client => (

                    <CardClients key={client.id}>
                        <AvatarClient src={`https://avatar.iran.liara.run/public?username=${client.id}`} />
                        <div>
                            <h3>{client.name}</h3>
                            <p>{client.age}</p>
                            <p>{client.email}</p>
                        </div>

                        <TrashIcon src={Trash} onClick={() => deleteClient(client.id)}/>
                    </CardClients>
                ))}

            </ContainerClients>

            <Button type="button" onClick={() => navigate('/')}>Voltar</Button>


        </Container>

    )
}

export default Users