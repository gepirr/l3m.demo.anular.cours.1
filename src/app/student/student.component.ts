import { AfterViewInit } from '@angular/core';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from '../data/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentComponent implements OnInit, AfterViewInit  {
  @Input()  data: Student;
  @Output() private onclose = new EventEmitter<void>();
  public edition = false;

  // Animations / transitions
  public open = new BehaviorSubject<boolean>(false);
  @ViewChild('root') root: ElementRef<HTMLElement>;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Quand le navigateur aura le temps, on passera open à true
    // Cela permet qu'au départ il soit à false
    // On est obligé d'attendre un un peu sinon tout se passe dans le même cycle
    // et le moteur d'Angular ne détectera pas le changement
    // C'est particulier au fait qu'on soit à l'étape ngAfterViewInit
    // Voir : https://angular.io/guide/lifecycle-hooks
    setTimeout( () => this.open.next( true ) );

  }

  close(): void {
    console.log('closing', this.data.name);
    this.open.next(false);
    this.root.nativeElement.addEventListener(
      'transitionend',
      () => this.onclose.emit()
    );
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
