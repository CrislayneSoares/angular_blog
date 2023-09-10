import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-img',
  templateUrl: './button-img.component.html',
  styleUrls: ['./button-img.component.css']
})
export class ButtonImgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() text = ''

}
