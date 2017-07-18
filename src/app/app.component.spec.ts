import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';



describe('AppComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
        providers: [],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
    })
  );

  it(
    'should create the app',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );

  it(
    `should have as title 'pos.borusan.com'`,
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      console.log('this is the app', app);
      expect(app.title).toEqual('pos.borusan.com');
    })
  );

  it(
    'should render title in a h1 tag',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain(
        'pos.borusan.com'
      );
    })
  );

  it(
    'should render links',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain(
        'pos.borusan.com'
      );
    })
  );

  it(
    'should feths links from app component',
    fakeAsync(() => {
      const expected = [
        { id: 1, name: 'Individual', routerLink: '/individual' },
      ];
      const fixture = TestBed.createComponent(AppComponent);
      fixture.componentInstance.getLinks();
      tick();
      fixture.detectChanges();
      const compiled = fixture.debugElement.componentInstance.menuLinks;
      expect(compiled).toEqual(expected);
    })
  );
});
