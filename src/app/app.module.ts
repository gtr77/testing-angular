import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


// Routing
import { APP_ROUTING } from './app-routes';
// import { RouterModule, Routes } from '@angular/router';

// Services
import { ApplicationService } from './services/aplication.service';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ApplicationListComponent } from './components/application-list/application-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ApplicationDetailComponent } from './components/application-detail/application-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApplicationListComponent,
    SidebarComponent,
    ApplicationDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    ApplicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
