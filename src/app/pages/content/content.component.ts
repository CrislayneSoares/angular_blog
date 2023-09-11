import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from "../../data/dataFake";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  contentPhoto: string = ''
  contentTitle: string = ''
  contentDescription: string = ''
  contentPoints: string = ''
  contentArtigo: string = ''
  
  private id: string | null = '0'

  constructor(
    private router:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(valor => {
      this.id = valor.get("id");
    })

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null){
    const result = dataFake.filter(article => article.id === id)[0]

    this.contentPhoto = result.photo
    this.contentPoints = result.points
    this.contentTitle = result.title
    this.contentDescription = result.description
    this.contentArtigo = result.artigo
  }

}
