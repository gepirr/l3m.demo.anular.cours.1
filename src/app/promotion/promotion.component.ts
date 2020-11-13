import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Student } from '../data/student';
import { PromoManagerService } from '../promo-manager.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromotionComponent implements OnInit {
  students: Observable<Readonly<Readonly<Student>[]>>;
  selectedStudents: Observable<Readonly<Readonly<Student>[]>>;
  labelPromo: Observable<string>;

  constructor(private man: PromoManagerService) {
    this.students = man.promoDescrObs.pipe(
      map( promoDescr => promoDescr[0].students )
    );
    this.selectedStudents = man.promoDescrObs.pipe(
      map( promoDescr => promoDescr[1] )
    );
    this.labelPromo = man.promoDescrObs.pipe(
      map( promoDescr => promoDescr[0].label )
    );
  }

  ngOnInit(): void {
  }

  toggleSelect(etu: Readonly<Student>): void {
    this.man.toggleSelect(etu);
  }

  isSelected(etu: Readonly<Student>): boolean {
    return this.man.isSelected(etu);
  }

  setNote(etu: Readonly<Student>, note: number): void {
    this.man.setNote(etu, note);
  }

  get selectedStudentsNames(): string {
    return this.man.selectedStudentsNames;
  }

}
