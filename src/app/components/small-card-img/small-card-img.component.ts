import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card-img',
  templateUrl: './small-card-img.component.html',
  styleUrls: ['./small-card-img.component.css']
})
export class SmallCardImgComponent implements OnInit {
  @Input() title: string = ''
  @Input() description: string = ''
  @Input() urlPhoto: string = ''
  @Input() points: string = ''
  
  constructor() { }

  ngOnInit(): void {
  }

}
