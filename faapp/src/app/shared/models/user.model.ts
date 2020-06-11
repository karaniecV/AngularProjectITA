export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    // public secondName: string,
    // public image: string,
    private _expirationDate: Date,
  ){}

  get token(){
    if(this._expirationDate && this._expirationDate >= new Date()){
      return this._token;
    }
    return null;
  }

}