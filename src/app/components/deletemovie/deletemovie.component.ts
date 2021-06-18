import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
@Component({
  selector: 'app-deletemovie',
  templateUrl: './deletemovie.component.html',
  styleUrls: ['./deletemovie.component.scss']
})
export class DeletemovieComponent implements OnInit {

  constructor(private as:ApiService) { }

  ngOnInit(): void {
  }
delete(){
  alert("borrar");
}
}
