import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { logsComponent } from './components/logs/logs.component';
import { feathersService } from './services/feathers.service';
@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, logsComponent ],
  providers: [feathersService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }