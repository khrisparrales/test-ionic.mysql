import { Component, OnInit } from '@angular/core';
import { DataService, Message, Posts } from '../services/data.service';
import { ApimysqlnodeService } from '../services/apimysqlnode.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  arrayPosts: any;
  posts: Posts[] = [];
  constructor(
    private data: DataService,
    public postServices: ApimysqlnodeService
  ) {}
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    // Get the ID that was passed with the URL
    // let id = this.activatedRoute.snapshot.paramMap.get('id');

    // Get the information from the API
    this.data.getPosts().subscribe((result) => {
      this.arrayPosts = result;
      console.log(this.arrayPosts);
    });
  }

  ionViewDidLoad() {
    //Llamamos a la función getPost cuando la vista se cargue
  }
  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  // getPosts() {
  //   //llamamos a la funcion getPost de nuestro servicio.
  //   return this.postServices.getPosts();
  // }
  getMessages(): Message[] {
    return this.data.getMessages();
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  GetPosts() {
    this.data.getPosts().subscribe((res) => {
      this.posts.push(res);
      console.log(res[0]);
      //  console.log("Funciona")
      //   this.next = res.response._links.next;
      //   this.valor = res.response.blog.name;
      // this.url = res.response.blog.avatar[2].url;
    });
  }
}
