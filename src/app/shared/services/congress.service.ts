import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ICongressMember, ICongressListApiResponse} from '../interfaces/congress.interface';

@Injectable({
  providedIn: 'root'
})
export class CongressService {

  private proPublicaHeaders = new HttpHeaders({
    'X-API-Key': 'KFxchZGvU4ldps69WEcscHRu9dnb2ueH57pIM3Oa'
  });

  constructor(private http: HttpClient) {
  }


  getCongressList(): Observable<ICongressMember[]> {
    return this.http.get<any>('https://api.propublica.org/congress/v1/102/senate/members.json',
      {
        headers: this.proPublicaHeaders
      }
    ).pipe(map((res: ICongressListApiResponse) => {
      return res.results[0].members;
    }));
  }

  getCongressMember(id: string): Observable<any> {
    return this.http.get(`https://api.propublica.org/congress/v1/members/${id}.json`,
      {
        headers: this.proPublicaHeaders
      })
  }

}
