import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,

  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})

export class InicioSesionComponent {

  constructor(private router: Router) { }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  user: string = '';
  password: string = '';

  ingresar() {
    if (this.user === 'admin' && this.password === 'admin') {
      this.router.navigate(['/ejemplo-1']);
    } else {
      alert('Usuario o contraseña incorrecta');
    }
  }


}


