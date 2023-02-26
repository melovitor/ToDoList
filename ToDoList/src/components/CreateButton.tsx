import styles from './CreateButton.module.css'

export function CreateButton(){
    return (
        <button className={styles.create}>Criar <img src="src/assets/plus.svg" alt="plus"/></button>
    )
}