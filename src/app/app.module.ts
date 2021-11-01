import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SampledirectiveDirective } from './sampledirective.directive';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FilterpipePipe } from './filterpipe.pipe';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    SampledirectiveDirective,
    FilterpipePipe,
    ChildcomponentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
