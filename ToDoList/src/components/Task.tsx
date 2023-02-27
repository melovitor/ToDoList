import styles from './Task.module.css';

export function Task(){
    return (
        <div className={styles.wrapper}>
            <div className={styles.task}>
                <input type="checkbox"/>  
                <h1 className={styles.text} >Estudar react.</h1> 
                <button className={styles.trash}> <img src="src/assets/trash.svg" alt="trash"/></button>
            </div>
        </div>
        
        

    )
}