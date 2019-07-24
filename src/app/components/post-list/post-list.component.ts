import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Post } from '../models/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

    @Input() data: Post;
    
  constructor() { }

  ngOnInit() {
  }

}
