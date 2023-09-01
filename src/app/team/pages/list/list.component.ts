import { Component } from '@angular/core';
import { Content } from '../../interfaces/content.interface';
import { ApiTeamResponse } from '../../interfaces/api-response.interface';
import { Subscription, range } from 'rxjs';
import { TeamService } from '../../services/team-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  teamsResponse: ApiTeamResponse = {
    content: [],
  };
  pagination: number = 100;
  teamID: number = 0;
  rangeDates: Date[] | undefined;
  suscription: Subscription = new Subscription;

  constructor(private teamService: TeamService,  private router: Router,) {}

  ngOnInit() {
    this.getAllTeams()
  }

  identify(index: number, item: Content) {
    return item.nombre;
  }


  formatDatesToString(dates:Date[]) {
    let newDates:  string[] = [];
    dates.forEach(function(element, index) {
      newDates[index] = new Date(element).toISOString().replace(/T.*/,'').split('-').reverse().join('-')
    });

    return newDates;
  }

  editTeam(id: number) {

  }

  deleteById(id: number) {

    this.suscription = this.teamService.deleteTeamById(id).subscribe(() => {
      this.teamsResponse.content = this.teamsResponse.content.filter(team => team.id !== id)
    }, (err) => {
      Swal.fire('Error', err.error.msg, 'error')
    })

    Swal.fire(' Equipo eliminado', 'Gran trabajo', 'success')
  }

  updateDates(value: any) {
    if(this.rangeDates![0] && this.rangeDates![1]) {
      const formattedDates = this.formatDatesToString(this.rangeDates!);

      this.suscription = this.teamService.getTeamByRangeDates(formattedDates)
        .subscribe(data => this.teamsResponse = data);
    }
  }

  updateIDTeam(value: number) {
      this.suscription = this.teamService.getTeamById(value)
      .subscribe(data => this.teamsResponse = data);
  }

  getAllTeams() {
    this.suscription = this.teamService.getTeams(this.pagination)
      .subscribe(data => this.teamsResponse = data);
  }

  ngOnDestroy(){
    this.suscription.unsubscribe();
  }

}
