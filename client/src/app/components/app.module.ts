import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {TestComponentComponent} from './test-component/test-component.component';
import {ApiRequestsService} from '../services/api-requests.service';
import {HttpModule} from '@angular/http';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ConfigurationService} from '../services/configuration.service';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import {RouterModule} from "@angular/router";
import {routing} from "./app.routing";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AuthGuard} from "../auth/auth.guard";
import {AuthInterceptor} from "../auth/auth-interceptor.service";
import { StatisticsComponent } from './profile/statistics/statistics.component';
import { HistoryComponent } from './profile/history/history.component';
import { FeedbackComponent } from './profile/feedback/feedback.component';
import { TweetsComponent } from './profile/tweets/tweets.component';
import { ChartsModule } from 'ng2-charts';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule,
  MatCheckboxModule, MatDialogModule, MatChipsModule, MatGridListModule, MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatSnackBarModule, MatTabsModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatSidenavModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSliderModule, MatSlideToggleModule,
  MatTooltipModule,
  MatToolbarModule, MatDatepickerModule, MatExpansionModule, MatNativeDateModule, MatPaginatorModule, MatSortModule,
  MatStepperModule, MatTableModule,
} from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { MapBoxComponent } from './map-box/map-box.component';
import {MapService} from "../services/map.service";
@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    PageNotFoundComponent,
    StatisticsComponent,
    HistoryComponent,
    FeedbackComponent,
    TweetsComponent,
    NavbarComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    MapBoxComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    HttpModule,
    BrowserModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    ChartsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    RouterModule,
    ApiRequestsService,
    ConfigurationService,
    AuthGuard,
    MapService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
