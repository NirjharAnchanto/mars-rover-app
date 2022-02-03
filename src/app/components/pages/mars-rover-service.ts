import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Photo } from './interfaces/photo';
import { Grid } from './interfaces/grid';

@Injectable({
  providedIn: 'root'
})
export class MarsRoverService {
  constructor(
    private http: HttpClient,
    @Inject('API_KEY') private apiKey: string
  ) {}

  getPhotosByEarthDate(
    rover: string,
    earth_date: string,
    camera: string,
    page: number
  ): Observable<Photo[]> {
    var url =
      'https://api.nasa.gov/mars-photos/api/v1/rovers/' + rover + '/photos';
    var params = new HttpParams()
      .set('earth_date', earth_date)
      .set('camera', camera)
      .set('page', page)
      .set('api_key', this.apiKey);

    return this.http
      .get<Photo[]>(url, { params })
      .pipe(map((result: any) => result.photos));
  }

  getPhotosByEarthDateWithoutPage(
    rover: string,
    earth_date: string,
    camera: string
  ): Observable<Photo[]> {
    var url =
      'https://api.nasa.gov/mars-photos/api/v1/rovers/' + rover + '/photos';
    var params = new HttpParams()
      .set('earth_date', earth_date)
      .set('camera', camera)
      .set('api_key', this.apiKey);

    return this.http
      .get<Photo[]>(url, { params })
      .pipe(map((result: any) => result.photos));
  }

  getPhotosBySol(
    rover: string,
    sol: number,
    camera: string,
    page: number
  ): Observable<Photo[]> {
    var url =
      'https://api.nasa.gov/mars-photos/api/v1/rovers/' + rover + '/photos';
    var params = new HttpParams()
      .set('sol', sol)
      .set('camera', camera)
      .set('page', page)
      .set('api_key', this.apiKey);

    return this.http
      .get<Photo[]>(url, { params })
      .pipe(map((result: any) => result.photos));
  }

  getPhotosBySolWithoutPage(
    rover: string,
    sol: number,
    camera: string
  ): Observable<Photo[]> {
    var url =
      'https://api.nasa.gov/mars-photos/api/v1/rovers/' + rover + '/photos';
    var params = new HttpParams()
      .set('sol', sol)
      .set('camera', camera)
      .set('api_key', this.apiKey);

    return this.http
      .get<Photo[]>(url, { params })
      .pipe(map((result: any) => result.photos));
  }

  getManifest(rover: string): Observable<Grid> {
    var url = 'https://api.nasa.gov/mars-photos/api/v1/manifests/' + rover;

    var params = new HttpParams().set('api_key', this.apiKey);

    return this.http
      .get<Grid>(url, { params })
      .pipe(map((result: any) => result.photo_manifest));
  }

  getCameraViewValue = (camera: string) => {
    switch (camera) {
      case 'FHAZ': {
        return 'Front Hazard Avoidance Camera';
      }
      case 'RHAZ': {
        return 'Rear Hazard Avoidance Camera';
      }
      case 'MAST': {
        return 'Mast Camera';
      }
      case 'CHEMCAM': {
        return 'Chemistry and Camera Complex';
      }
      case 'MAHLI': {
        return 'Mars Hand Lens Imager';
      }
      case 'MARDI': {
        return 'Mars Descent Imager';
      }
      case 'NAVCAM': {
        return 'Navigation Camera';
      }
      case 'PANCAM': {
        return 'Panoramic Camera';
      }
      case 'MINITES': {
        return 'Miniature T.E.S.';
      }
      default: {
        return 'Unknown camera';
      }
    }
  };
}
