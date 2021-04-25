import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository.model';
import { RepositoriesService } from 'src/app/shared/service/repositories.service';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {

  public repositories!: Repository[];
  public username: string = 'bernardohrl';

  constructor(
    public repoService: RepositoriesService
  ) { }

  ngOnInit(): void {
    this.getRepositories();
  }

  public typeUsername(event: any) {
    this.username = event.target.value;
    console.log(this.username)
  }

  public getRepositories(event?: Event) {
    event? event.preventDefault(): null;

    console.log("alou??")

    this.repoService.getUsersRepositories(this.username).subscribe(
      (repos) => {
        this.repositories = repos;
        console.log(this.repositories)
      },
      (error) => {
        console.error("coloar a mensgem de que não encontrou")
      }
    )
  }

}
