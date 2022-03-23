import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { concatMap, exhaustMap, interval, mergeMap, Observable, skip, switchMap, take, timer } from 'rxjs';
import { OperationService } from '../operation.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  constructor(private os:OperationService) { }
  id!: Observable<number>;
  ngOnInit(): void {
    // this.id.subscribe(num=>{
    //   this.os.getUser(num).subscribe(data=>{
    //     console.log(data)
    //   })
    // })
    this.id=interval(1000).pipe(skip(1),take(5))
    this.id.pipe(
      exhaustMap(val=>this.os.getUser(val))
      

    )
    .subscribe(data=>console.log(data))
  }





}


