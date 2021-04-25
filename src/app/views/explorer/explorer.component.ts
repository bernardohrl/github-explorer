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
  private username!: string;

  constructor(
    public repoService: RepositoriesService
  ) { }

  ngOnInit(): void {
  }

  public typeUsername(event: any) {
    this.username = event.target.value;
    console.log(this.username)
  }

  public getRepositories(event: Event) {
    event.preventDefault();

    console.log("alou??")

    this.repoService.getUsersRepositories(this.username).subscribe(
      (repos) => {
        this.repositories = repos;
        console.log(this.repositories)
      },
      (error) => {
        console.log("coloar a mensgem de que não encontrou")
      }
    )
  }

}
