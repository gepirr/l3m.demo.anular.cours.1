import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Student } from '../data/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentComponent implements OnInit {
  @Input() data: Student;
  public edition = false;

  constructor() { }

  ngOnInit(): void {
  }

  getBackground(): string {
    let color: 'red' | 'yellow' | 'green' = 'red';
    if (this.data.note >= 10) {
      if (this.data.note > 14) {
        color = 'green';
      } else {
        color = 'yellow';
      }
    } else {
      color = 'red';
    }
    const percent = `${this.data.note * 100 / 20}%`;
    return `linear-gradient(90deg, ${color} ${percent}, white ${percent}, white)`;
  }
}
