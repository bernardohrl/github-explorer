import { Component } from '@angular/core';
import { AbstractControl, FormControl, ValidatorFn, Validators } from '@angular/forms';

import { Repository } from 'src/app/models/repository.model';
import { RepositoriesService } from 'src/app/shared/service/repositories.service';

import { Store, select } from '@ngrx/store'
import { AppState } from '../../state/app.state'
import { getUsersRepositories } from '../../state/app.actions'


@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent {

  public repositories!: Repository[];
  public username = new FormControl('', [Validators.required, this.validUserNameValidator()]);

  usersRepositories$ = this.store.pipe(select('repositories')) // select(x), x faz referência ao reducer declarado em App Module


  constructor(
    private store: Store<AppState>,
    public repoService: RepositoriesService,
  ) { }


  // GET REPOS
  public getUsersRepositories(event?: Event) {
    event? event.preventDefault(): null;
    
    this.username.setErrors(null)

    this.repoService.getUsersRepositories(this.username.value).subscribe(
      (repositories) => {
        this.store.dispatch(getUsersRepositories({ repositories }))
      }
    )
  }



  // HANDLE ERRROS
  validUserNameValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      return {validUserName: {value: true}};
    };
  }

  getErrorMessage() {
    if (this.username.hasError('required')) {
      return 'You must enter a value.';
    }
    
    return this.username.hasError('validUserName') ? 'Not a valid username' : '';
  }

}
