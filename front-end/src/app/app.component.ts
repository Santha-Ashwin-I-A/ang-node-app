import { NgFor } from '@angular/common';
import { Component, OnInit,Injectable } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  imports: [NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
@Injectable({
  providedIn: 'root'
})
export class AppComponent implements OnInit {
  data: any[] = [];
  private apiUrl = '/api/product';

  async ngOnInit() {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.data = await response.json();
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  }
}
