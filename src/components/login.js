import { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import axios from 'axios';
import { connectionUrl } from './databaseConnection';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom'

function Login() {
    const [name, setName] = useState("ruthi");
    const [password, setPassword] = useState();
    const navigate = useNavigate()
    function login() {
        navigate("/itemList")
        let user = { name: name, password: password }
        axios.post(`${connectionUrl}/User`, user).then(swal("welcome to our site!!!😍😍😍").then(console.log(user)))
    }


    return (
        <>
            <form className="form">
                <h1>Wellcome!</h1>
                <span className="p-input-icon-left">
                    <i className="pi pi-user" />
                    <InputText required="required" onChange={(e) => setName(e.target.value)} placeholder="name" />
                </span>
                <br />
                <span className="p-input-icon-left">
                    <i className="pi pi-unlock" />
                    <Password required="required" value={password} onChange={(e) => setPassword(e.target.value)} toggleMask placeholder="password" />
                </span>
                <br />

                <Button onClick={login} >Login</Button>
            </form>
        </>
    )
}
export default Login