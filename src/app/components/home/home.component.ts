import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Collections } from 'src/app/interfaces/collections';
import { Models } from 'src/app/interfaces/models';
import { CollectionsService } from 'src/app/services/collections.service';
import { ModelsService } from 'src/app/services/models.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  average!: number;
  amount!: number;
  modelsNum!: number;
  data!: any[];

  public collections$!: Observable<Collections[]>;
  public models$!: Observable<Models[]>;

  constructor(private _collectionsService: CollectionsService,
    private _modelService: ModelsService) { }

  ngOnInit(): void {
    this.collections$ = this._collectionsService.getCollections();
    this.collections$.subscribe(collections => {
      this.data = this._collectionsService.getByBudget(collections);
    });
    this.collections$.subscribe(collections => {
      this.average = this._collectionsService.getAverage(collections);
    });
    this.collections$.subscribe(collections => {
      this.amount = collections.length;
    });

    this.models$ = this._modelService.getModels();
    this.models$.subscribe(models => {
      this.modelsNum = models.length;
    });
  }

  localeAverage(average: number) {
    return isNaN(average) ? '' : average.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}

