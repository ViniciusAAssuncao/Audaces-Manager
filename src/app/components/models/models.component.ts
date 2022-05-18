import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Models } from 'src/app/interfaces/models';
import { ModelsService } from 'src/app/services/models.service';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {

  public models$!: Observable<Models[]>;

  constructor(private _modelsService: ModelsService, 
    private _router: Router, 
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.models$ = this._modelsService.getModels();
  }

  onEdit(id: number) {
    this._router.navigate(['edit/model', id]);
  }

}
