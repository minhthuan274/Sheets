import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sheets';
  data = [
  ];
  private groupsList: string[];

  ngOnInit() {

    this.groupsList = ['A', 'D', 'B', 'C'];
    this.groupsList.forEach(nameGroup => {
      let eachGroup = {
        group: nameGroup,
        chairs: [],
      };

      // khoi tao ghe' ngoi
      for (let y = 1; y <= 4; y++) {
        for (let x = 1; x <= 2; x++) {
          eachGroup.chairs.push({
            x, y,
            staff: nameGroup + x + y,
          });
        }
      }
      this.data.push(eachGroup);
    });
    console.log(this.data);
  }


  callGetInfoStaffHere(group: string, x: number, y: number): string {
    return group + x + y;
  }
}
