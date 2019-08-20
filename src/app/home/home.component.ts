import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class HomeComponent implements OnInit {
  
  post:any  =[];
  users: any = [];
  image: any = [];
  newpost: any;

  constructor(private http: HttpClient,config: NgbModalConfig,
              private modalService: NgbModal) {
                config.backdrop = 'static';
                config.keyboard = false;
               }

  ngOnInit() {
    this.getPosts();
    this.getUsers();
    this.getImgages();
  }

  open(content) {
    this.modalService.open(content);
  }

  async getPosts(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer YC4UcycS5gM04h8dLqkuGoyVnNnQ2iV7qyoE'
      })
    }
    let url ='https://gorest.co.in/public-api/posts';
    new Promise(resolve =>{
      this.http.get(url,httpOptions).subscribe(data =>{
        
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const element = data[key];
            this.post= element

          }
        }
      })
    }).catch(error =>{
      console.log(error);
    
    });
  }

  async getUsers(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer YC4UcycS5gM04h8dLqkuGoyVnNnQ2iV7qyoE'
      })
    }
    let url ='https://gorest.co.in/public-api/users';
    new Promise(resolve =>{
      this.http.get(url,httpOptions).subscribe(data =>{
        
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const element = data[key];
            this.users= element
            
          }
        }
      })
    }).catch(error =>{
      console.log(error);
      
    });
  }

  async getImgages(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer YC4UcycS5gM04h8dLqkuGoyVnNnQ2iV7qyoE'
      })
    }
    let url ='https://gorest.co.in/public-api/photos';
    new Promise(resolve =>{
      this.http.get(url,httpOptions).subscribe(data =>{
        
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const element = data[key];
            this.image= element
            
          }
        }
      })
    }).catch(error =>{
      console.log(error);
      
    });
  }

  async sendPost(titulo:string,cuerpo:string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer YC4UcycS5gM04h8dLqkuGoyVnNnQ2iV7qyoE'
      })
    }
    let url ='https://gorest.co.in/public-api/posts';
    new Promise(resolve =>{
      this.http.post(url,{
        "user_id": "111",
        "title": titulo,
        "body": cuerpo
     },httpOptions
     ).subscribe(data =>{
        
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const element = data[key];
          this.newpost= element
          
        }
      }
      this.post+= this.newpost;
      console.log(JSON.stringify(this.post));
      
      })
    }).catch(error =>{
      console.log(error);
      
    }); 
  }





}
