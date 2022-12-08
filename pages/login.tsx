
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import {useSession, signIn, signOut} from "next-auth/react"
import Button from '../components/Button';

export default function Login() {
    const {data:session} = useSession();
    if(session){
        return <div>foi</div>
    }else{
        return (<button  onClick={()=> signIn()}>login</button>)
    }
  
}
