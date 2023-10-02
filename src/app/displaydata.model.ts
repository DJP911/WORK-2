
export class responseModelList<T> {

  public data !: T[];
  public error !: string
  public returnStatus !: boolean
  public totalRecords !: number
  public length !: number;

  public itemsPerPage!: number;
  public page!: number;
  public totalItems!: number;
}

export class Displaydata   {

    public userId!: string;
    
    public name!: string;
    public email!:string;
    public phone!:number;
    public balance!:number;
    public registration_date!:Date;
    public status !: string;
    
    

}