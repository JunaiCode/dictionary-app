import { Routes } from '@angular/router';

export const routes: Routes = [
   {
    path: '',
    loadComponent: () =>
      import('./features/dictionary/pages/dictionary-page/dictionary-page')
        .then(m => m.DictionaryPage)
  },
  {
  path: '**',
  redirectTo: ''
  }
];
