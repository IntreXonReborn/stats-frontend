import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetsDivComponent } from './tweets-div.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    MglTimelineModule
  ]
})
export class AppModule { }

describe('TweetsDivComponent', () => {
  let component: TweetsDivComponent;
  let fixture: ComponentFixture<TweetsDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetsDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
