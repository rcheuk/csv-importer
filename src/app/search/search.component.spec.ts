import { SearchComponent } from './search.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }                        from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

let fixture: ComponentFixture<SearchComponent>;

/*describe('AboutComponent (highlightDirective)', () => {
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ SearchComponent],
    })
    .createComponent(SearchComponent);
    fixture.detectChanges(); // initial binding
  });

  it('should have skyblue <h2>', () => {
    const de = fixture.debugElement.query(By.css('h2'));
    const bgColor = de.nativeElement.style.backgroundColor;
    expect(bgColor).toBe('skyblue');
  });
});*/