import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Cancion } from 'src/app/cancion';
import { AngularFireObject,AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  bookingRef: AngularFireObject<any>;
  constructor(public firestore:AngularFirestore, private db: AngularFireDatabase) { }
  crearCancion(nombreAlbum: string, nombreArtista: string, descripCancion: string, nombreCancion: string):Promise<void>{
    const id= this.firestore.createId();
    return this.firestore.doc(`listaCancion/${id}`).set({id, nombreAlbum, nombreArtista, descripCancion, nombreCancion});
  }
  obtenerListaCancion():AngularFirestoreCollection<Cancion>{
    
    return this.firestore.collection(`listaCancion`);
  }
  detalleCancion(idCancion: string):AngularFirestoreDocument<Cancion>{
    return this.firestore.collection(`listaCancion`).doc(idCancion);
  }

  eliminarCancion(idCancion: string):Promise<void>{
    return this.firestore.doc(`listaCancion/${idCancion}`).delete();
  }
  editarCancion(idCancion: string):AngularFirestoreDocument<Cancion>{
    return this.firestore.collection(`listaCancion`).doc(idCancion);
  }
  
  modificarCancion(idCancion:String, ca:Cancion){
    return this.firestore.doc(`listaCancion/${idCancion}`).update({
      nombreCancion: ca.nombreCancion,
      nombreArtista: ca.nombreArtista,
      nombreAlbum: ca.nombreAlbum,
      descripCancion: ca.descripCancion
    })

  }
}
