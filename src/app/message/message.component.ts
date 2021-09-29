import { Component, OnInit, Input } from '@angular/core';

import { Message } from '../services/data.service';
import { ApimysqlnodeService } from '../services/apimysqlnode.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() message: Message;

  arrayPosts: any;
  aPosts = [{ title: 'uno', id: 1 }];
  constructor(public postServices: ApimysqlnodeService) {}

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  // getPosts() {
  //   //llamamos a la funcion getPost de nuestro servicio.
  //   this.postServices.getPosts().then((data) => {
  //     this.arrayPosts = data;
  //   });
  // }
}
