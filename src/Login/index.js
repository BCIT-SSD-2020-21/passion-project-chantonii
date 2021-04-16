import {Link} from 'react-router-dom'

export default function Login(){
    return(
        <div>
            <p>Login</p>
            <p><Link to="/register"> New here? Click here to Register</Link></p>
        </div>

    )
}