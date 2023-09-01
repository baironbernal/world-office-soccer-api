import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from '../../services/team-service.service';
import { Subscription } from 'rxjs';
import { Content } from '../../interfaces/content.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  constructor(private teamService: TeamService,
    private router: Router, private fb: FormBuilder) { }

  suscription:Subscription = new Subscription;
  public formSubmitted = false;

  team: Content = {
    id: 0,
    nombre:'',
    estadio:'',
    sitioWeb: null,
    nacionalidad: '',
    fundacion: '',
    entrenador: '',
    capacidad: 0,
    valor: null
  };

  teamForm = this.fb.group({
    nombre: ['', [Validators.required,]],
    estadio: ['', [Validators.required]],
    sitioWeb: ['', [Validators.required]],
    nacionalidad: ['', [Validators.required]],
    fundacion: ['', [Validators.required]],
    entrenador: ['', [Validators.required]],
    capacidad: ['', [Validators.required]],
    valor: ['', [Validators.required]],
  }, {
    validators: () => {}
  });




  createTeam() {

    this.formSubmitted = true;
    if (this.teamForm.invalid) {
      return;
    }

    this.suscription = this.teamService.createTeam(this.teamForm.value).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl('/team/all')
    }, (err) => {

      Swal.fire('Error', err.error.msg, 'error')
    })

    Swal.fire('Post created', 'Great Job', 'success')
  }

  ngOnDestroy(){
    this.suscription.unsubscribe();
  }
}
