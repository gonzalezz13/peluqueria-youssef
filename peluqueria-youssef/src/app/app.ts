import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Index } from './index/index';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Index, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
