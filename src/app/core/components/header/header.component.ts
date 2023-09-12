import { Component } from '@angular/core';
import { Theme } from '../../enums/Theme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public icon:Theme = Theme.ICON_MOON

  public toggleTheme(): void {
    const theme = document.body.classList.toggle('dark-theme')

    this.icon = theme ? Theme.ICON_SUN : Theme.ICON_MOON
  }
}
