export interface IUser{
    _id: string,
    name: string,
    email: string,
    password: string
}

export interface IPost{
    _id: string,
    posted_by: string,
    post_text: string
}

export interface ILike{
    _id: string,
    user: string,
    liked_by: string,
    post_id: string
}

export interface IFollower{
    _id: string,
    user: string,
    followed_by: string
}