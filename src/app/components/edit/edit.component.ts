import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionsService } from 'src/app/services/collections.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  formEdit!: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private _collectionService: CollectionsService,
    private router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    let register = null;
    this.formEdit = this._formBuilder.group({
      id: null,
      nome: new FormControl('', [Validators.required]),
      estacao: new FormControl('', [Validators.required]),
      orcamento: new FormControl(0, [Validators.required]),
      responsavel: new FormControl('', [Validators.required]),
      marca: new FormControl('', [Validators.required]),
      lancamento: new FormControl('', [Validators.required]),
    });

    this._route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        const collections$ = this._collectionService.loadById(id);
        collections$.subscribe(collection => {
          register = collection;
          this.updateForm(collection);
        });
      }
    );
  }

  public updateForm(collection: any) {
    this.formEdit.patchValue({
      nome: collection.nome,
      estacao: collection.estacao,
      orcamento: collection.orcamento,
      responsavel: collection.responsavel,
      marca: collection.marca,
      lancamento: collection.lancamento,
      id: collection.id,
    })
  }

  onSubmit() {
      if (this.formEdit.value.id) {
        this._collectionService.putCollection(this.formEdit.value).subscribe();
        this.router.navigate(['/collections']);
      }
  }
}
