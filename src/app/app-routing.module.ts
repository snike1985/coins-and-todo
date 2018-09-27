import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    // redirect to list page
    {
        path: '',
        redirectTo: '/todo',
        pathMatch: 'full'
    },

    // lazyLoad
    // {
    //     path: '',
    //     loadChildren: './pages/main/main.module#MainModule'
    // },
    {
        path: 'list',
        loadChildren: './pages/list/list.module#ListModule'
    },
    {
        path: 'about',
        loadChildren: './pages/about/about.module#AboutModule'
    },
    {
        path: 'todo',
        loadChildren: './pages/todo/todo.module#TodoModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}