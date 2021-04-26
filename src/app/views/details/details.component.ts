import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Issue } from 'src/app/models/issue.model';
import { Repository } from 'src/app/models/repository.model';

import { RepositoriesService } from 'src/app/shared/service/repositories.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private username!: string;
  private repoName!: string;
  public repoInfo!: Repository;
  public issues!: Issue[];

  constructor(
    private _Activatedroute : ActivatedRoute,
    public repoService: RepositoriesService
  ) { 
    this.username = this._Activatedroute.snapshot.paramMap.get("username")!;
    this.repoName = this._Activatedroute.snapshot.paramMap.get("repoName")!;
  }

  ngOnInit(): void {
    
    this.repoService.getRepositoryInfo(this.username, this.repoName).subscribe(
      (repos) => {
        this.repoInfo = repos;
      }
    )

    this.repoService.getRepositoryIssues(this.username, this.repoName).subscribe(
      (issues) => {
        this.issues = issues;
      }
    )
  }

  public goToIssue(issue: Issue) {
    window.location.assign(issue.html_url);
  }

}
