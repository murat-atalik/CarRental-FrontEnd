import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];
  dataLoaded = false;
  currentColor: Color;
  nullColor: Color;
  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }
  setCurrentCarsColor(color: Color) {
    this.currentColor = color;
  }
  unsetCurrentCarsColor() {
    this.currentColor = this.nullColor;
  }

  getCurrentCarsColorClass(color: Color) {
    if (color == this.currentColor) {
      return 'list-group-item list-group-item-action list-group-item-dark active';
    } else {
      return 'list-group-item list-group-item-action list-group-item-dark';
    }
  }
  getAllCarsColorClass() {
    if (!this.currentColor) {
      return 'list-group-item list-group-item-action list-group-item-dark active';
    } else {
      return 'list-group-item list-group-item-action list-group-item-dark';
    }
  }
}
