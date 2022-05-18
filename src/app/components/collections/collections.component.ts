import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Collections } from 'src/app/interfaces/collections';
import { CollectionsService } from 'src/app/services/collections.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  public collections$!: Observable<Collections[]>;

  constructor(private _collectionsService: CollectionsService, 
    private _router: Router, 
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.collections$ = this._collectionsService.getCollections();
  }

  onEdit(id: number) {
    this._router.navigate(['edit', id]);
  }

}
