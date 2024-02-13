import { Author, CommentModel, ContentPost, PostModel } from "../Model";

export const posts: PostModel[] = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com./v1ct0rbr.png",
        name: "Victor Queiroga",
        role: "Analista Sênior"
      } as Author,
      content: [
        {
          type: 'paragraph',
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
          Pellentesque eros purus, aliquet vel odio vitae, pretium euismod diam. \
          Phasellus accumsan magna at elit placerat bibendum. \
          Nullam dignissim vehicula enim, quis placerat ipsum. \
          Sed nibh arcu, facilisis sed mi at, pharetra pharetra urna. \
          Cras pretium ante id ante congue tincidunt. In hac habitasse platea dictumst. \
          Pellentesque malesuada aliquam dui, in efficitur justo congue sed."
        } as ContentPost,
        { type: 'link', href: "#", content: "jane.design/doctorcare" } as ContentPost,
  
      ],
      tags: [
        { name: 'novoprojeto' },
        { name: 'legal' },
        { name: 'vamoscodar' }
      ],
      publishedAt: new Date('2024-02-15 11:30:00'),
      comments: [
        {
          id: crypto.randomUUID(),
          commentator: {
            avatar: "https://github.com/v1ct0rbr.png",
            name: "Victor",
          },
          dateComment: new Date('2024-02-12 11:30:00'),
          content: "Muito bom",
          likeCount: 20
        } as CommentModel,
        {
          id: crypto.randomUUID(),
          commentator: {
            avatar: "https://github.com/v1ct0rbr.png",
            name: "Gih Martins",
          },
          dateComment: new Date('2024-02-12 11:30:00'),
          content: "Muito bom",
          likeCount: 20
        } as CommentModel,
  
      ]
    } ,
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com./v1ct0rbr.png",
        name: "Henrique",
        role: "Programador"
      },
      content: [
        {
          type: 'paragraph',
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
          Pellentesque eros purus, aliquet vel odio vitae, pretium euismod diam. \
          Phasellus accumsan magna at elit placerat bibendum. \
          Nullam dignissim vehicula enim, quis placerat ipsum. \
          Sed nibh arcu, facilisis sed mi at, pharetra pharetra urna. \
          Cras pretium ante id ante congue tincidunt. In hac habitasse platea dictumst. \
          Pellentesque malesuada aliquam dui, in efficitur justo congue sed."
        } as ContentPost,
        { type: 'link', href: "#", content: "jane.design/doctorcare" } as ContentPost,
  
      ],
      tags: [
        { name: 'novoprojeto' },
        { name: 'legal' },
        { name: 'vamoscodar' }
      ],
      publishedAt: new Date('2024-02-11 11:30:00'),
      comments: [
        {
          id: crypto.randomUUID(),
          commentator: {
            avatar: "https://github.com/v1ct0rbr.png",
            name: "Victor",
          },
          dateComment: new Date('2024-02-12 11:30:00'),
          content: "Muito bom",
          likeCount: 20
        },
        {
          id: crypto.randomUUID(),
          commentator: {
            avatar: "https://github.com/v1ct0rbr.png",
            name: "Gih Martins",
          },
          dateComment: new Date('2024-02-12 11:30:00'),
          content: "Muito bom",
          likeCount: 20
        },
  
      ]
    },
    {
      id: 3,
      author: {
        avatarUrl: "https://github.com./v1ct0rbr.png",
        name: "Kenedy",
        role: "Designer"
      },
      content: [
        {
          type: 'paragraph',
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
          Pellentesque eros purus, aliquet vel odio vitae, pretium euismod diam. \
          Phasellus accumsan magna at elit placerat bibendum. \
          Nullam dignissim vehicula enim, quis placerat ipsum. \
          Sed nibh arcu, facilisis sed mi at, pharetra pharetra urna. \
          Cras pretium ante id ante congue tincidunt. In hac habitasse platea dictumst. \
          Pellentesque malesuada aliquam dui, in efficitur justo congue sed."
        } as ContentPost,
        { type: 'link', href: "#", content: "jane.design/doctorcare" } as ContentPost,
  
      ],
      tags: [
        { name: 'novoprojeto' },
        { name: 'legal' },
        { name: 'vamoscodar' }
      ],
      publishedAt: new Date('2024-02-12 11:30:00'),
      comments: [
        {
          id: crypto.randomUUID(),
          commentator: {
            avatar: "https://github.com/v1ct0rbr.png",
            name: "Victor",
          },
          dateComment: new Date('2024-02-12 11:30:00'),
          content: "Muito bom",
          likeCount: 20
        },
        {
          id: crypto.randomUUID(),
          commentator: {
            avatar: "https://github.com/v1ct0rbr.png",
            name: "Gih Martins",
          },
          dateComment: new Date('2024-02-12 11:30:00'),
          content: "Muito bom",
          likeCount: 20
        },
  
      ]
    },
    {
      id: 4,
      author: {
        avatarUrl: "https://github.com./v1ct0rbr.png",
        name: "Ítalo",
        role: "Analista Júnior"
      },
      content: [
        {
          type: 'paragraph',
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
          Pellentesque eros purus, aliquet vel odio vitae, pretium euismod diam. \
          Phasellus accumsan magna at elit placerat bibendum. \
          Nullam dignissim vehicula enim, quis placerat ipsum. \
          Sed nibh arcu, facilisis sed mi at, pharetra pharetra urna. \
          Cras pretium ante id ante congue tincidunt. In hac habitasse platea dictumst. \
          Pellentesque malesuada aliquam dui, in efficitur justo congue sed."
        } as ContentPost,
        { type: 'link', href: "#", content: "jane.design/doctorcare" } as ContentPost,
  
      ],
      tags: [
        { name: 'novoprojeto' },
        { name: 'legal' },
        { name: 'vamoscodar' }
      ],
      publishedAt: new Date('2024-02-13 11:30:00'),
      comments: [
        {
          id: crypto.randomUUID(),
          commentator: {
            avatar: "https://github.com/v1ct0rbr.png",
            name: "Victor",
          },
          dateComment: new Date('2024-02-12 11:30:00'),
          content: "Muito bom",
          likeCount: 20
        },
        {
          id: crypto.randomUUID(),
          commentator: {
            avatar: "https://github.com/v1ct0rbr.png",
            name: "Gih Martins",
          },
          dateComment: new Date('2024-02-12 11:30:00'),
          content: "Muito bom",
          likeCount: 20
        },
  
      ]
    }
  ] 