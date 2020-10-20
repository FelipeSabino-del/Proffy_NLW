import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

export interface Teacher {
    id: number
    avatar: string
    bio: string
    cost: number
    name: string
    subject: string
    whatsapp: string
}

interface TeacherItemProps {
    teacher: Teacher;
}

const text = "Gostaria de agendar uma aula com você!"

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
    return (
        <article className="teacher-item">
                    <header>
                        <img src={teacher.avatar} alt={teacher.name}/>
                        <div>
                            <strong>{teacher.name}</strong>
                            <span>{teacher.subject}</span>
                        </div>
                    </header>
                    <p>{teacher.bio}</p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ {teacher.cost}</strong>
                        </p>
                        <a target="blank" href={`https://wa.me/55${teacher.whatsapp}?text=${text}`}>
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </a>
                    </footer>
                </article>
    )
}

export default TeacherItem;