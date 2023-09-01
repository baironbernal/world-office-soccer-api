import { Component } from '@angular/core';
import { Content } from '../../interfaces/content.interface';
import { ApiTeamResponse } from '../../interfaces/api-response.interface';
import { Subscription, range } from 'rxjs';
import { TeamService } from '../../services/team-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  teamsResponse: ApiTeamResponse = {
    content: [],
  };
  pagination: number = 10;
  teamID: number = 0;
  rangeDates: Date[] | undefined;
  suscription: Subscription = new Subscription;

  constructor(private teamService: TeamService) {}

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
