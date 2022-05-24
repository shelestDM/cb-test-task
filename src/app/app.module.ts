import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PostComponent } from './components/post/post.component';

import { SearchPipe } from './shared/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { ExtraComponent } from './components/extra/extra.component';
import { HighlightSearch } from './shared/pipes/highlight.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    PostComponent,
    SearchPipe,
    ExtraComponent,
    HighlightSearch
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SearchPipe,
    HighlightSearch
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
