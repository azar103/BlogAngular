import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostsViewComponent } from './posts-view/posts-view.component';

const routes: Routes = [
  { path: 'posts', component: PostsViewComponent},
  { path: 'new', component: NewPostComponent},
  { path: '', redirectTo: 'posts', pathMatch:'full' },
  { path: '**', redirectTo: 'posts'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
