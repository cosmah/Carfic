import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {
  images: string[] = [
    'assets/1.jpeg',
    'assets/2.jpg',
    'assets/3.jpg',
    // Add more image paths as needed
  ];

  currentIndex: number = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000); // Change image every 3 seconds (adjust as needed)
  }
}
