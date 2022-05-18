import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CollectionsService } from 'src/app/services/collections.service';

@Component({
  selector: 'app-create-collections',
  templateUrl: './create-collections.component.html',
  styleUrls: ['./create-collections.component.scss']
})
export class CreateCollectionsComponent implements OnInit {

  formCreate!: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private _collectionService: CollectionsService,
    private router: Router) { }

  ngOnInit(): void {
    this.formCreate = this._formBuilder.group({
      nome: new FormControl('', [Validators.required]),
      estacao: new FormControl('', [Validators.required]),
      orcamento: new FormControl('', [Validators.required]),
      responsavel: new FormControl('', [Validators.required]),
      marca: new FormControl('', [Validators.required]),
      lancamento: new FormControl('', [Validators.required]),
    });
  }

  get nome() {
    return this.formCreate.get('nome')!;
  }

  get estacao() {
    return this.formCreate.get('estacao')!;
  }

  get orcamento() {
    return this.formCreate.get('orcamento')!;
  }

  get responsavel() {
    return this.formCreate.get('responsavel')!;
  }

  get marca() {
    return this.formCreate.get('marca')!;
  }

  get lancamento() {
    return this.formCreate.get('lancamento')!;
  }

  onSubmit() {
    if (this.formCreate.valid) {
      this._collectionService.postCollection(this.formCreate.value).subscribe(() => {
        this.router.navigate(['collections']);
      });
    }
  }

}
