import { Component } from '@angular/core';
import { ButtonComponent } from '../components/button/button.component';
import { IconComponent } from '../components/icon/icon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, IconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  navigateTo(url: string, newTab: boolean = false) {
    if (newTab) {
      window.open(url, '_blank')?.focus();
    } else {
      window.location.href = url;
    }
  }

  downloadFile() {
    const link = document.createElement('a');
    link.href = 'assets/SqueezePDF.zip';
    link.download = 'squeezepdf.zip';
    link.click();
  }
}
