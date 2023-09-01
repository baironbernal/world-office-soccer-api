import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiTeamResponse } from '../interfaces/api-response.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Content } from '../interfaces/content.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  getTeams(pagination: number): Observable<ApiTeamResponse> {
    return this.http.get<ApiTeamResponse>(environment.base_url + 'listar/0/ '+pagination);
  }

  getTeamById(id: number) {
    return this.http.get<ApiTeamResponse>(environment.base_url + '/consultar/' + id);
  }

  getMyTeams(idTeam: string): Observable<ApiTeamResponse> {
    return this.http.get<ApiTeamResponse>(environment.base_url + '/Teams/' + idTeam);
  }

  getTeamByRangeDates(dates: string[]) {
    return this.http.get<ApiTeamResponse>(environment.base_url + '/consultar/' + dates[0] + '/' +dates[1]);

  }


  createTeam(team: Content): Observable<ApiTeamResponse> {
    return this.http.post<ApiTeamResponse>(environment.base_url + '/Teams/', team);
  }
}
