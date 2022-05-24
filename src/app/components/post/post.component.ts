import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';
import { SearchPipe } from 'src/app/shared/pipes/search.pipe';
import {ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {
 
  day = new Date;
  result = '';


  constructor( 
    public data: DataServiceService,
    public search: SearchPipe
     ) { }

  ngOnInit(): void {
    this.day.getDate()
  }


}
