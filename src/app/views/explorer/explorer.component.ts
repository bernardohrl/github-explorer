import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { Repository } from 'src/app/models/repository.model';
import { RepositoriesService } from 'src/app/shared/service/repositories.service';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {

  public repositories!: Repository[];
  public username = new FormControl('', [Validators.required, this.validUserNameValidator()]);

  constructor(
    public repoService: RepositoriesService
  ) { }

  ngOnInit(): void {
  }

  // GET REPOS
  public getRepositories(event?: Event) {
    event? event.preventDefault(): null;
    
    this.username.setErrors(null)
    

    this.repoService.getUsersRepositories(this.username.value).subscribe(
      (repos) => {
        this.repositories = repos;
        
      },
      (error) => {
        this.username.setErrors({validUserName: { }})
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
