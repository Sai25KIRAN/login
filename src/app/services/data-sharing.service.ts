    import { Injectable } from '@angular/core';
    import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataSharingService {
  private dataSubject = new BehaviorSubject<string>('');
  data$ = this.dataSubject.asObservable();

  setData(value: string) {
    this.dataSubject.next(value);
  }
}
