import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-card-img',
  templateUrl: './big-card-img.component.html',
  styleUrls: ['./big-card-img.component.css']
})
export class BigCardImgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() title: string = ''
  @Input() text: string = ''
  @Input() url: string = ''
}
