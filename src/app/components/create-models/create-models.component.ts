import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CollectionsService } from 'src/app/services/collections.service';
import { ModelsService } from 'src/app/services/models.service';

@Component({
  selector: 'app-create-models',
  templateUrl: './create-models.component.html',
  styleUrls: ['./create-models.component.scss']
})
export class CreateModelsComponent implements OnInit {

  formCreate!: FormGroup;
  collections: any;

  constructor(private _formBuilder: FormBuilder,
    private _modelService: ModelsService,
    private _collectionService: CollectionsService,
    private router: Router) { }

  ngOnInit(): void {
    this.formCreate = this._formBuilder.group({
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
  }

  get nome() {
    return this.formCreate.get('nome')!;
  }

  get responsavel() {
    return this.formCreate.get('responsavel')!;
  }

  get tipo() {
    return this.formCreate.get('tipo')!;
  }

  get colecao() {
    return this.formCreate.get('colecao')!;
  }

  get bordado() {
    return this.formCreate.get('bordado')!;
  }

  get estampa() {
    return this.formCreate.get('estampa')!;
  }

  onSubmit() {
    if (this.formCreate.valid) {
      this._modelService.postModels(this.formCreate.value).subscribe(data => {
        this.router.navigate(['/models']);
      });
    }
  }
}
