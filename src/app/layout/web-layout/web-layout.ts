import { Component } from '@angular/core';
import { AdminRoutingModule } from "../../admin/admin-routing-module";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-web-layout',
  imports: [AdminRoutingModule, RouterLink, RouterOutlet],
  templateUrl: './web-layout.html',
  styleUrl: './web-layout.scss'
})
export class WebLayout {

}
