/**
 * Application Routes
 * ------------------
 * Defines the main routing configuration for the Angular application.
 *
 * Routes:
 * - ''                : Displays the Index component with the list of tickets.
 * - 'create'          : Displays the Create component for adding a new ticket.
 * - ':ticketId'       : Displays the Edit component for editing a ticket by its ID.
 * - ':ticketId/details': Displays the Details component for viewing ticket details by its ID.
 *
 * Each route maps a URL path to its corresponding component.
 */

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
