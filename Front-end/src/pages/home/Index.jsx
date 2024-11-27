import { AllWeb, Form, Input, WebInputs, InputLabel } from "./styles"

import { useRef } from "react"
import api from '..//..//services/api'
import Button from "../../components/Button"
import Background from "../../components/TopBackground"
import { useNavigate } from "react-router-dom"
import Title from "../../components/Title"


function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function register() {
    const data = await api.post('/usuarios', {
      email: inputEmail.current.value,
      name: inputName.current.value,
      age: parseInt(inputAge.current.value)
    })
    location.reload()
  }

  return (
    <AllWeb>

      <Background>
      </Background>

      <Form>

        <Title>Cadastrar Usuário</Title>

        <WebInputs>



          <div>
            <InputLabel>Nome <span>*</span></InputLabel>
            <Input type="text" placeholder="Nome de Usuário" ref={inputName} />
          </div>

          <div>
            <InputLabel>Idade <span>*</span></InputLabel>
            <Input type="number" placeholder="Idade do Usuário" ref={inputAge} />
          </div>


        </WebInputs>

        <div style={{ width: '100%' }}>
          <InputLabel>E-mail <span>*</span></InputLabel>
          <Input type="email" placeholder="E-mail do Usuário" ref={inputEmail} />
        </div>



        <Button type="button" onClick={register} theme="primary" >Cadastrar Usuário</Button>
      </Form>

      <Button type="button" onClick={() => navigate('/Clients')}>Usuários</Button>

    </AllWeb>
  )
}

export default Home
