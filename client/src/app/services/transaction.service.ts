import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Transaction} from './transaction';
import 'rxjs/add/operator/map';
import {RequestMethod, RequestOptions} from "@angular/http";
import {ConfigurationService} from "./configuration.service";


@Injectable()
export class TransactionService {
  private actionUrl: string;

  public constructor(private http: HttpClient,
                     private configurationService: ConfigurationService) {
    this.actionUrl = `${configurationService.apiHost}${configurationService.apiPrefix}transaction`
  }

  public getAllTransactions(): Observable<any> {
    return this.http.get(this.actionUrl);
  }

  public getLatestNTransactions(numberOfTransactions: number): Observable<any> {
    return this.http.get(this.actionUrl + '/'+numberOfTransactions);
  }

  public addTransaction(transaction: Transaction): Observable<any> {
    const body = JSON.stringify(transaction);
    const headers: any = new Headers({'Content-Type': 'application/json'});
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.actionUrl, body, httpOptions);
  }
}



