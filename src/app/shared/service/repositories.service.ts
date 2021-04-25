import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Issue } from 'src/app/models/issue.model';
import { Repository } from 'src/app/models/repository.model';

@Injectable({
  providedIn: 'root'
})

export class RepositoriesService {

  baseUrl = "https://api.github.com/"

  constructor(
    private httpClient: HttpClient
  ) {}

  public getUsersRepositories(user: string): Observable<[Repository]> {
    return this.httpClient.get<[Repository]>(this.baseUrl + user + "/repos")
  }

  public getRepositoryIssues(user: string, repoName: string): Observable<[Issue]> {
    return this.httpClient.get<[Issue]>(this.baseUrl + "repos/" + user + "/" +repoName +"/issues")
  }
}
