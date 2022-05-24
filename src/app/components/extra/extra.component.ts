import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataServiceService } from 'src/app/service/data-service.service';
import { Post } from 'src/app/shared/interface';
import { __values } from 'tslib';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss']
})
export class ExtraComponent implements OnInit {

  post: Post | undefined

  constructor( 
    private route: ActivatedRoute,
    public data: DataServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params
    .subscribe((params: Params)=>{
      console.log('testsPar', (+params?.['id'])+1 )
     this.post =  this.data.getById(+params?.['id']+1)
    })
  }

  onBack(){
    this.router.navigate([''])
    console.log(+(this.post?.id + ''))
  }

}
