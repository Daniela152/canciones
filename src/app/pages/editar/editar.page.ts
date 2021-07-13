import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/servicios/datos/firestore.service'; 
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  idCancion:any;
  public formularioEditar:FormGroup;
  constructor(public fs:FirestoreService, public r:Router, public ar:ActivatedRoute, public fb:FormBuilder, public ac:AlertController, public lc:LoadingController) { 
    this.idCancion = this.ar.snapshot.paramMap.get('idca');
    this.fs.editarCancion(this.idCancion).valueChanges().subscribe(res => {
      this.formularioEditar.setValue(res);
    });
  }

  ngOnInit() {
    this.formularioEditar = this.fb.group({
      nombreCancion: [''],
      nombreArtista: [''],
      nombreAlbum: [''],
      descripCancion: ['']
    })
    console.log(this.formularioEditar.value)
  }
  modificaCancion(){
    this.fs.modificarCancion(this.idCancion, this.formularioEditar.value)
    .then(() => {
      this.r.navigate(['/home']);
    })
    .catch(error => console.log(error));
}

}
