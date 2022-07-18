import { Component } from '@angular/core';
import {
  faFacebook,
  faInstagram,
  faLinkedin, faTwitter, faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faMapLocation,
  faPhone
} from '@fortawesome/free-solid-svg-icons';

import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'footer' }],
})
export class FooterComponent {
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faMaplocation = faMapLocation;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;
}
