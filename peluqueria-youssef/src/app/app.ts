import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Index } from './index/index';

@Component({
  selector: 'app-root',
  imports: [Navbar, Index],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
