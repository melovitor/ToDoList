import styles from './TaskCount.module.css'

export function TaskCount(){
    return (
        <div className={styles.count}>
            <div className={styles.created}>
                Tarefas criadas
                <div className={styles.number}> 5</div>
            </div>
            <div className={styles.completed}>
                Concluídas
                <div className={styles.number}> 2 de 5</div>
            </div>
        </div>

    )
}