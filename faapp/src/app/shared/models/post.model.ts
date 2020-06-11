export class Post{
  constructor(
    public postFile: string,
    public postDate: string,
    public postDescription: string,
    public id: string,
    public likeCount: number,
  ){}
}