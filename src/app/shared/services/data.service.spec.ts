import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend,
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { DataService } from './data.service';
import { fakeAsync } from '@angular/core/testing';

describe('DataserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        DataService,
        {
          provide: XHRBackend,
          useClass: MockBackend,
        },
      ],
    });
  });



  it(
    'should be created',
    inject([DataService], (service: DataService) => {
      expect(service).toBeTruthy();
    })
  );


  describe('getCompanies()', () => {

        it('should return an Observable<Array<Company>>',
            inject([DataService, XHRBackend], (dataservice, mockBackend) => {

            const mockResponse = {
              data: [
                { id: 15, name: 'Bs.Manheim' },
                { id: 16, name: 'Borçelik' },
                { id: 17, name: 'BKV KÜLTÜR SANAT MÜZE' },
              ]
            };

            mockBackend.connections.subscribe((connection) => {
              connection.mockRespond(new Response(new ResponseOptions({
                body: JSON.stringify(mockResponse)
              })));
            });

            dataservice.getCompanies().subscribe((videos) => {
              expect(videos.length).toBe(3);
              expect(videos[0].name).toEqual('Bs.Manheim');
              expect(videos[1].name).toEqual('Borçelik');
              expect(videos[2].name).toEqual('BKV KÜLTÜR SANAT MÜZE');
            });

        }));
      });
});
