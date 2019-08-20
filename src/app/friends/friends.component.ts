import { Component, OnInit } from '@angular/core';
import { HttpHeaders,HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  users:any = [];
  query: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUsers()
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
            console.log(this.users);
            
          }
        }
      })
    }).catch(error =>{
      console.log(error);
      
    });
  }

}
