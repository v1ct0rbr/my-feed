import { PencilLine } from 'lucide-react'
import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
import { User } from '../Model'



export function Sidebar( user : User) {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={user.cover} alt="barra da imagem" />
            
            
            <div className={styles.profile} >
                
                <Avatar src={user.avatar} alt={`Avatar de ${user.name}`}/>
                
                <strong>{user.name}</strong>
                <span>{user.role}</span>

            </div>
            <footer>
                <a href="#">
                    <PencilLine size={16}></PencilLine>
                    <span>editar seu perfil</span>
                </a>

            </footer>

        </aside>
    )
} 