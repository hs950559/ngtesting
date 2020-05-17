import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookDialogComponent } from './edit-book-dialog.component';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import {
  MatDialogModule,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const mockMatDialog = {
  closeAll: (): void => undefined,
};

describe('EditBookDialogComponent', () => {
  let component: EditBookDialogComponent;
  let fixture: ComponentFixture<EditBookDialogComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MatDialogModule, HttpClientTestingModule],
      declarations: [EditBookDialogComponent],
      providers: [
        MatDialog,
        {
          provide: MatDialogRef,
          useValue: {},
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {},
        },
        { provide: FormBuilder, useValue: formBuilder },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBookDialogComponent);
    component = fixture.componentInstance;
    // pass in the form dynamically
    component.bookForm = formBuilder.group({
      name: null,
      author: null,
      price: null,
      publishedDate: null,
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
