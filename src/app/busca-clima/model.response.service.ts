export class ModelResponse {
    
  public name:string;
  public temperature:number;
  public state: string;   
  public app_temperature:number;
  public country: string;
  

  constructor(name: string, temperature: number,state:string,app_temperature:number,country: string){
      this.name=name;
      this.temperature=temperature;
      this.state = state;
      this.app_temperature = app_temperature;
      this.country = country;
  
      
  }
}