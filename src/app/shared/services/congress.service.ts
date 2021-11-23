import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {
  ICongressMember,
  ICongressListApiResponse,
  ICongressDetailApiResponse,
  ICongressMemberDetail
} from '../interfaces/congress.interface';

@Injectable({
  providedIn: 'root'
})

export class CongressService {

  constructor(private http: HttpClient) {
  }


  getCongressList(): Observable<ICongressMember[]> {
    return this.http.get<any>('https://api.propublica.org/congress/v1/102/senate/members.json',
    ).pipe(map((res: ICongressListApiResponse) => {
      return res.results[0].members;
    }));
  }

  getCongressMember(id: string): Observable<ICongressMemberDetail> {
    return this.http.get<ICongressDetailApiResponse>(`https://api.propublica.org/congress/v1/members/${id}.json`)
      .pipe(map((res: ICongressDetailApiResponse) => {
        return res.results[0];
      }));
  }

}
