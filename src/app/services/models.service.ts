import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Collections } from '../interfaces/collections';
import { Models } from '../interfaces/models';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {

  private readonly API = `${environment.modelsAPI}modelos`;

  constructor(private _httpClient: HttpClient) { }

  public getModels() {
    return this._httpClient.get<Models[]>(this.API);
  }

  public postModels(model: Models) {
    return this._httpClient.post(this.API, model).pipe(take(1));
  }


  public loadById(id: number) {
    return this._httpClient.get<Models>(`${this.API}/${id}`).pipe(take(1));
  }

  public putModel(model: Models): Observable<Models> {
    return this._httpClient.put<Models>(`${this.API}/${model.id}`, model);
  }

  public deleteModel(id: number) {
    return this._httpClient.delete(`${this.API}/${id}`).pipe(take(1));
  }

}
