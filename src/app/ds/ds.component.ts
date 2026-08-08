import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../components/button/button.component';

@Component({
  selector: 'app-ds',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './ds.component.html',
  styleUrls: ['./ds.component.css']
})
export class DsComponent {
  activeTab = signal<'colours' | 'button'>('colours');

  primitiveEarth = [
    '100', '200', '300', '400', '500', 
    '600', '700', '800', '900', '1000'
  ];

  semanticTokens = [
    { name: 'Background (Page)', token: '--semantic-colour-background-page' },
    { name: 'Background (Card)', token: '--semantic-colour-background-card-default' },
    { name: 'Border', token: '--semantic-colour-border' },
    { name: 'Text (Primary)', token: '--semantic-colour-text-body-primary' },
    { name: 'Text (Secondary)', token: '--semantic-colour-text-body-secondary' }
  ];

  setTab(tab: 'colours' | 'button') {
    this.activeTab.set(tab);
  }
}
