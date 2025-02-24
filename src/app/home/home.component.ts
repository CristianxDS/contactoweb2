import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // Agrega CommonModule aquí
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  images: string[] = [
    'assets/image/1.jpg',
    'assets/image/2.jpg',
    'assets/image/3.jpg',
    'assets/image/4.jpg',
    'assets/image/5.jpg',
    'assets/image/6.jpg',
    'assets/image/7.jpg',
    'assets/image/8.jpg'
  ];

  selectedIndex: number | null = null;


  selectImage(index: number): void {
    this.selectedIndex = index;
  }
}