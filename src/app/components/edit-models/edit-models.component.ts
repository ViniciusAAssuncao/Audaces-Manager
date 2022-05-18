import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelsService } from 'src/app/services/models.service';
import { CollectionsService } from 'src/app/services/collections.service';

@Component({
  selector: 'app-edit-models',
  templateUrl: './edit-models.component.html',
  styleUrls: ['./edit-models.component.scss']
})
export class EditModelsComponent implements OnInit {

  formEdit!: FormGroup;
  collections: any;

  constructor(private _formBuilder: FormBuilder,
    private _modelService: ModelsService,
    private _collectionService: CollectionsService,
    private router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    let register = null;
    this.formEdit = this._formBuilder.group({
      id: null,
      nome: new FormControl('', [Validators.required]),
      responsavel: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required]),
      colecao: new FormControl('', [Validators.required]),
      bordado: new FormControl('', [Validators.required]),
      estampa: new FormControl('', [Validators.required])
    });
    this._collectionService.getCollections().subscribe(data => {
      this.collections = data.map(e => e.nome);
    });

    this._route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        const model$ = this._modelService.loadById(id);
        model$.subscribe(model => {
          register = model;
          this.updateForm(model);
        });
      }
    );
  }

  public updateForm(model: any) {
    this.formEdit.patchValue({
      nome: model.nome,
      responsavel: model.responsavel,
      tipo: model.tipo,
      colecao: model.colecao,
      bordado: model.bordado,
      estampa: model.estampa,
      id: model.id,
    })
  }


  get nome() {
    return this.formEdit.get('nome')!;
  }

  get responsavel() {
    return this.formEdit.get('responsavel')!;
  }

  get tipo() {
    return this.formEdit.get('tipo')!;
  }

  get colecao() {
    return this.formEdit.get('colecao')!;
  }

  get bordado() {
    return this.formEdit.get('bordado')!;
  }

  get estampa() {
    return this.formEdit.get('estampa')!;
  }


  onSubmit() {
    if (this.formEdit.value.id) {
      this._modelService.putModel(this.formEdit.value).subscribe();
      this.router.navigate(['/models']);
    }
  }

  onDelete() {
    this._modelService.deleteModel(this.formEdit.value.id).subscribe();
    this.router.navigate(['/models']);
  }

}
