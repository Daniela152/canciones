import { Component, OnInit } from '@angular/core';
import { EventosService } from "src/app/servicios/eventos/evento.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-lista-invitados',
  templateUrl: './lista-invitados.page.html',
  styleUrls: ['./lista-invitados.page.scss'],
})
export class ListaInvitadosPage implements OnInit {
  public nombreInvitado:any=[];
  constructor(public es:EventosService, public Ar:ActivatedRoute) { }

  ngOnInit() {
    const idEvento: string= this.Ar.snapshot.paramMap.get('id');
    this.es.obtener_detalleEvento(idEvento).then(eventoSnapshot=>{
      this.nombreInvitado= eventoSnapshot.data();
      this.nombreInvitado.id= eventoSnapshot.id;
    });
    }

}
