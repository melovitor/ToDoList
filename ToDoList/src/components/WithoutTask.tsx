import styles from './WithoutTask.module.css'

export function WithoutTask(){
    return (
        <div className={styles.without}>
            <img src="src/assets/clipboard.svg" alt="clipboard" />
            <h1 className={styles.title}>Você ainda não tem tarefas cadastradas</h1>
            <h2 className={styles.subTitle}>Crie tarefas e organize seus itens a fazer</h2>
        </div>
        
    )
}