import styles from './CreateButton.module.css'
import { PlusCircle } from 'phosphor-react'

export function CreateButton(){
    return (
        <button className={styles.create}>Criar 
            <PlusCircle size={20}/>
        </button>
    )
}