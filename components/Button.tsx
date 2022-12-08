
import styles from '../styles/Home.module.css'


export default function Button(props:{text:string, type?:string}) {
    
  return (

    <div role={"button"} className={( props.type == "r" ? styles.red : styles.green)}>
        {props.text}
    </div>
  )
}
