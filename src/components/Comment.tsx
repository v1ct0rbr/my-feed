import { formatDistanceToNow } from 'date-fns'
import { ThumbsUp, Trash2 } from 'lucide-react'
import { CommentModel } from '../Model.ts'
import { timeLocale } from '../utils/constants.ts'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'




interface CommentProps {
    comment: CommentModel,
    handleOnDeleteComment: () => void,
    handleAddLikeToCount: () => void
}


export function Comment({ comment, handleOnDeleteComment, handleAddLikeToCount} : CommentProps) {



    return (
        <div className={styles.comment}>

            <Avatar hasBorder={false} src={comment.commentator.avatar} alt={`Avatar de ${comment.commentator.name}`} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{comment.commentator.name}</strong>
                            <time
                                title={`teste`}
                                dateTime={comment.dateComment.toString()}>
                                {formatDistanceToNow(comment.dateComment, { locale: timeLocale.locale })}
                            </time>
                        </div>
                        <button title='Deleter comentário' onClick={handleOnDeleteComment}>
                            <Trash2 size={24} />
                        </button>
                    </header>
                    <p>{comment.content}</p>
                </div>
                <footer>
                    <button onClick={handleAddLikeToCount}>
                        <ThumbsUp size={16} /> Aplaudir<span>{comment.likeCount}</span>
                    </button>
                </footer>

            </div>

        </div>
    )
}