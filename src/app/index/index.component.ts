import { Component } from '@angular/core';
import { EmscriptenWasmComponent } from '../wasm/emscripten-wasm.component';
import { MainWasmModule } from '.';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent extends EmscriptenWasmComponent<MainWasmModule>{

  public declare text: string;

  constructor() {
    super("TestModule", "main.js");
  
  }
  
  public print() {
    this.text = this.module.get_string();
  }

}
