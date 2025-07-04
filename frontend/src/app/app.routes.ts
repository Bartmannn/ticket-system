import { Routes } from '@angular/router';

import { Index } from './ticket/index';
import { Edit } from './ticket/edit/edit';
import { Create } from './ticket/create/create';
import { Details } from './ticket/details/details';

export const routes: Routes = [
  { path: '', component: Index },
  { path: 'create', component: Create },
  { path: ':ticketId', component: Edit },
  { path: ':ticketId/details', component: Details },
];
