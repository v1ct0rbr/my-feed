export interface Author {
    avatarUrl: string,
    name: string,
    role: string
}

export interface ContentPost {
    type: 'paragraph' | 'link',
    href?: string,
    content: string
}

export interface CommentModel {
    id: string,
    commentator: {
        avatar: string,
        name: string,
    },
    dateComment: Date,
    content: string,
    likeCount: number
}

export interface PostModel {
    id: number,
    author: Author,
    content: ContentPost[]
    tags: 
    { name: string }[],
    publishedAt: Date,
    comments: CommentModel[]
}

export interface User {
    name: string,
    role: string
    avatar: string,
    cover: string
}


