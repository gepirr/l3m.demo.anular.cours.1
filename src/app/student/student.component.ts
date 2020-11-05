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

}
