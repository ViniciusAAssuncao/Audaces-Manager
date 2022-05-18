import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Collections } from '../interfaces/collections';
import { map, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  private readonly API = `${environment.collectionsAPI}colecoes`;

  constructor(private _httpClient: HttpClient) { }

  public getCollections() {
    return this._httpClient.get<Collections[]>(this.API);
  }

  public getAverage(collections: Collections[]) {
    return collections.reduce((acc, curr) => acc + curr.orcamento, 0) / collections.length;
  }

  public getByBudget(collections: Collections[]) {
    return collections.sort((a, b) => b.orcamento - a.orcamento).slice(0, 5);
  }

  public postCollection(collection: Collections) {
    return this._httpClient.post(this.API, collection).pipe(take(1));
  }

  public loadById(id: number) {
    return this._httpClient.get<Collections>(`${this.API}/${id}`).pipe(take(1));
  }

  public putCollection(collection: Collections): Observable<Collections> {
    return this._httpClient.put<Collections>(`${this.API}/${collection.id}`, collection);
  }


}
