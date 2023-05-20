import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        data: { pageTitle: 'agbApp.agbAppRegion.home.title' },
        loadChildren: () => import('./AGBApp/region/region.module').then(m => m.AgbAppRegionModule),
      },
      {
        path: 'country',
        data: { pageTitle: 'agbApp.agbAppCountry.home.title' },
        loadChildren: () => import('./AGBApp/country/country.module').then(m => m.AgbAppCountryModule),
      },
      {
        path: 'location',
        data: { pageTitle: 'agbApp.agbAppLocation.home.title' },
        loadChildren: () => import('./AGBApp/location/location.module').then(m => m.AgbAppLocationModule),
      },
      {
        path: 'department',
        data: { pageTitle: 'agbApp.agbAppDepartment.home.title' },
        loadChildren: () => import('./AGBApp/department/department.module').then(m => m.AgbAppDepartmentModule),
      },
      {
        path: 'task',
        data: { pageTitle: 'agbApp.agbAppTask.home.title' },
        loadChildren: () => import('./AGBApp/task/task.module').then(m => m.AgbAppTaskModule),
      },
      {
        path: 'employee',
        data: { pageTitle: 'agbApp.agbAppEmployee.home.title' },
        loadChildren: () => import('./AGBApp/employee/employee.module').then(m => m.AgbAppEmployeeModule),
      },
      {
        path: 'job',
        data: { pageTitle: 'agbApp.agbAppJob.home.title' },
        loadChildren: () => import('./AGBApp/job/job.module').then(m => m.AgbAppJobModule),
      },
      {
        path: 'job-history',
        data: { pageTitle: 'agbApp.agbAppJobHistory.home.title' },
        loadChildren: () => import('./AGBApp/job-history/job-history.module').then(m => m.AgbAppJobHistoryModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
