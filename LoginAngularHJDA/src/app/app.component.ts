
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
          RouterOutlet,
          RouterModule,
        ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'Unidad2';
  

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/inicio-sesion']);
  }
}
