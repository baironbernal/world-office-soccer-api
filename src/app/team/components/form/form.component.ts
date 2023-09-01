import { Component } from '@angular/core';
import { TeamService } from '../../services/team-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription, first } from 'rxjs';
import { Content } from '../../interfaces/content.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  constructor(
      private teamService: TeamService,
      private router: Router,
      private fb: FormBuilder,
      private route: ActivatedRoute,
   ) { }

  suscription:Subscription = new Subscription;
  public formSubmitted = false;
  id: number = 0;
  isAddMode: boolean = false;
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
    capacidad: [, [Validators.required]],
    valor: [, [Validators.required]],
  }, {
    validators: () => {}
  });

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    if (!this.isAddMode) {
      this.teamService.getTeamById(this.id)
              .pipe(first())
              .subscribe(x => this.teamForm.patchValue(x));
      }
  }

  onSubmit() {
    if (this.isAddMode) return this.createTeam();
    return this.updateUser();

  }

  get f() { return this.teamForm.controls; }

  updateUser() {
    this.formSubmitted = true;
    if (this.teamForm.invalid) {return;}

    this.suscription = this.teamService.updateTeam(this.id,this.teamForm.value).subscribe((data) => {
      this.router.navigateByUrl('/team/all')
    }, (err) => {
      Swal.fire('Error', err.error.msg, 'error')
    })

    Swal.fire('Team updated', 'Great Job', 'success')
  }


  createTeam() {
    this.formSubmitted = true;
    if (this.teamForm.invalid) {return;}

    this.suscription = this.teamService.createTeam(this.teamForm.value).subscribe((data) => {
      this.router.navigateByUrl('/team/all')
    }, (err) => {
      Swal.fire('Error', err.error.msg, 'error')
    })

    Swal.fire('Team created', 'Great Job', 'success')
  }

  ngOnDestroy(){
    this.suscription.unsubscribe();
  }

}
