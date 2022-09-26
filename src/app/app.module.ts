import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooklistComponent } from './components/booklist.component';
import { BookService } from './services/book.service';
import { BookdisplayComponent } from './components/bookdisplay.component';

const appRoutes: Routes = [
  { path: 'books', component: BooklistComponent },
  { path: 'book/:bookId', component: BookdisplayComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
@NgModule({
  declarations: [AppComponent, BooklistComponent, BookdisplayComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    // useHash allows reload from address bar as GET request
    // query strings pass info to server, # passes info to client
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
