import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class RestProvider {

  private apiUrl = 'http://services.bisnis.com/bdg/category';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getJabar(): Observable<{}> {
    return this.http.get(this.apiUrl + '/getjabar').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }


getjabarheadline(): Observable<{}> {
  return this.http.get(this.apiUrl + '/getjabarheadline').pipe(
    map(this.extractData),
    catchError(this.handleError)
  );
}

  getheadline(): Observable<{}> {
    return this.http.get(this.apiUrl + '/getheadline').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }


  getterbaru(): Observable<{}> {
    return this.http.get(this.apiUrl + '/getterbaru').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getbisnis(): Observable<{}> {
    return this.http.get(this.apiUrl + '/getbisnis').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getbisnisheadline(): Observable<{}> {
    return this.http.get(this.apiUrl + '/getbisnisheadline').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getotomotif(): Observable<{}> {
    return this.http.get(this.apiUrl + '/getotomotif').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getotomotifheadline(): Observable<{}> {
    return this.http.get(this.apiUrl + '/getotomotifheadline').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getwisata(): Observable<{}> {
    return this.http.get(this.apiUrl + '/getwisata').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getwisataheadline(): Observable<{}> {
    return this.http.get(this.apiUrl + '/getwisataheadline').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getgadget(): Observable<{}> {
    return this.http.get(this.apiUrl + '/getgadget').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getgadgetheadline(): Observable<{}> {
    return this.http.get(this.apiUrl + '/getgadgetheadline').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }


  getolahraga(): Observable<{}> {
    return this.http.get(this.apiUrl + '/getolahraga').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getolahragaheadline(): Observable<{}> {
    return this.http.get(this.apiUrl + '/getolahragaheadline').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getkabarnasional(): Observable<{}> {
    return this.http.get(this.apiUrl + '/getkabarnasional').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getkabarnasionalheadline(): Observable<{}> {
    return this.http.get(this.apiUrl + '/getkabarnasionalheadline').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getfoto(): Observable<{}> {
    return this.http.get(this.apiUrl + '/getfoto').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

getfotoheadline(): Observable<{}> {
  return this.http.get(this.apiUrl + '/getfotoheadline').pipe(
    map(this.extractData),
    catchError(this.handleError)
  );
}

  getvideo(): Observable<{}> {
    return this.http.get(this.apiUrl + '/getvideo').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

    getvideoheadline(): Observable<{}> {
    return this.http.get(this.apiUrl + '/getvideoheadline').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
