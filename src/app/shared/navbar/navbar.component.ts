import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, ReactiveFormsModule, RouterLinkActive],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  fb = inject(FormBuilder);
  router = inject(Router);
  searchForm: FormGroup = {} as FormGroup;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.searchForm = this.fb.group({
      text: ['', Validators.required],
    });

  }

  search() {
    if (this.searchForm.invalid) return;
    this.router.navigate(['/usuario', this.searchForm.get('text')?.value]);
  }
}
