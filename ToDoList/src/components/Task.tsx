import styles from './Task.module.css';
import {Trash} from 'phosphor-react'

export function Task(){
    return (
        <div className={styles.wrapper}>
            <div className={styles.task}>
                <input type="checkbox"/>  
                <h1 className={styles.text} >Estudar react.</h1> 
            </div>
                <button className={styles.trash}>
                    <Trash size={24}/>
                </button>
        </div>
        
        

    )
}