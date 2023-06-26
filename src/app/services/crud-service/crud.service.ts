import {
  CollectionReference,
  Firestore,
  collection,
  collectionData,
  addDoc,
  deleteDoc,
  DocumentReference,
} from '@angular/fire/firestore';
import { inject, Injectable } from '@angular/core';
import { IUser } from 'src/app/types/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private dbPath = 'users';
  private firestore: Firestore = inject(Firestore);
  users$: Observable<IUser[]>;
  usersCollection: CollectionReference;

  constructor() {
    this.usersCollection = collection(this.firestore, this.dbPath);
    this.users$ = collectionData(this.usersCollection) as Observable<IUser[]>;
  }

  getAll(): Observable<IUser[]> {
    return this.users$;
  }

  create(user: IUser): any {
    addDoc(this.usersCollection, user)
      .then(() => user)
      .catch((err) => console.error(err));
  }
}
