import { Component } from '@angular/core';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {
  editorOptions = { theme: 'vs-dark', language: 'java' };
  code: string = `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
  }`;

  onCodeChange(event: any) {
    this.code = event;
  }

  describeCode() {
    if (this.code.includes('System.out.println')) {
      return 'This line prints text to the console using System.out.println.';
    }
    return 'This is a basic Java program.';
  }
}