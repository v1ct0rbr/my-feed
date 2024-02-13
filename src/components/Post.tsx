import { Avatar } from './Avatar'
import { Comment} from './Comment'
import styles from './Post.module.css'
import { timeLocale } from '../utils/constants'
import { formatDistanceToNow, format } from 'date-fns'
import { ChangeEvent, FormEvent, SyntheticEvent, useState } from 'react'
import { toast } from 'sonner'
import { Author, CommentModel, ContentPost } from '../Model'




export interface PostProps {
  author: Author,
  content: ContentPost[],
  tags: 
    { name: string }[]    
  ,
  publishedAt: Date,
  comments: CommentModel[]
}



export function Post({ author, publishedAt, content, comments, tags }: PostProps) {

    const [postComments, setPostComments] = useState(comments ? comments : []);
    const [newComment, setNewComment] = useState("");



    function handleOnCreateComment(e : FormEvent) {

        e.preventDefault();

        setPostComments([
            {
                id: crypto.randomUUID(), commentator:
                    { avatar: "https://github.com/v1ct0rbr.png", name: "Victor" },
                dateComment: new Date(),
                content: newComment,
                likeCount: 0,
            }, ...postComments]);
        setNewComment("");
        
        toast.success("Comentário inserido com sucesso");
    }

    function handleOnDeleteComment(comment: CommentModel) {

        let newComments = postComments.filter((com) => com.id !== comment.id)
        setPostComments(newComments);
        toast.warning(`Comentário "${comment.content}" excluído com sucesso"`);

    }

    // function handleInvalidComment(e : SyntheticEvent) {
    //    const target = e.target as HTMLInputElement; // ou qualquer outro elemento HTML específico se necessário
    //    target.setCustomValidity("Campo de comentário é obrigatório");
    // }
    function handleInvalidComment(e : ChangeEvent<HTMLTextAreaElement>) {
        const target = e.target; // ou qualquer outro elemento HTML específico se necessário
        target.setCustomValidity("Campo de comentário é obrigatório");
     }

    
    function handleChangeComment(e : FormEvent<HTMLTextAreaElement>) {
        const target = e.target as HTMLInputElement; 
        target.setCustomValidity("");
        setNewComment(target.value);
    }

    function handleAddLikeToCount(commentId: string) {
        let newComments = [...postComments];
        newComments.forEach((comment) => {
            if (comment.id === commentId)
                comment.likeCount += 1;
        })
        setPostComments(newComments);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder  src={author.avatarUrl} alt={`Avatar de ${author.name}`} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={format(publishedAt, timeLocale.format, { locale: timeLocale.locale })}
                    dateTime={publishedAt.toString()}>
                    Publicado há {formatDistanceToNow(publishedAt, { locale: timeLocale.locale })}
                </time>
            </header>

            <div className={styles.content}>
                {content.map((content) => {
                    return (
                        content.type == 'paragraph' ?
                            <p key={content.content}>{content.content}</p> :
                            (content.type == 'link' &&
                                <p key={content.content}>
                                    <a href={content.href}>{content.content}</a>
                                </p>
                            )
                    );

                })}

                <p className={styles.tags}>
                    {tags.map((tag) => {
                        return (<a key={tag.name} href="#">#{tag.name}</a>)
                    }
                    )}
                </p>
            </div>

            <form className={styles.commentForm} onSubmit={handleOnCreateComment}>
                <strong>Deixe seu feedback</strong>
                <textarea required placeholder='Deixe seu comentário' onChange={handleChangeComment} value={newComment} onInvalid={handleInvalidComment}></textarea>
                <footer>
                    <button disabled={newComment.trim() == ""} type="submit">Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {postComments.map((comment) => {
                    return (
                        <Comment key={comment.id}
                            comment={comment}
                            handleOnDeleteComment={() => { handleOnDeleteComment(comment) }} 
                            handleAddLikeToCount={() => handleAddLikeToCount(comment.id)}
                        />
                    )
                })}

            </div>

        </article>
    )
}