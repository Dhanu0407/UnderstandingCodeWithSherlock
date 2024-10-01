import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MonacoEditorModule } from 'ngx-monaco-editor';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    MonacoEditorModule.forRoot() // Import the Monaco editor module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
