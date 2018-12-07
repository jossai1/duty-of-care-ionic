import { Component } from '@angular/core';

import { CheckInPage } from '../check-in/check-in';
import { LogsPage } from '../my-logs/logs';
import { SitsHomePage } from '../sits-home/sits-home-page.component';
import { AdminDashboardPage } from '../admin-dashboard/admin-dashboard';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SitsHomePage;
  tab2Root = CheckInPage;
  tab3Root = LogsPage;
  tab4Root = AdminDashboardPage;

  constructor() {

  }
}
