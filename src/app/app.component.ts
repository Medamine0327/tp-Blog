import { Component } from '@angular/core';
import { Post } from './components/models/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tp-blog';
//la syntaxe ancienne est ;posts = [...]
//avec la syntaxe posts: Post[]=[...] notre tableau posts sera de type Model Post en ce referent a notre model c-dessous
   posts: Post[] = [
    {
    index: 0,
    title: 'Premier post',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis`,
    created_at: new Date,
    loveIts: 1
    },
    {
    index: 1,
    title: 'Deuxiéme post',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis`,
    created_at: new Date,
    loveIts: -2
    },
    {
    index: 2,
    title: 'Troisième post',
    content: `Personne n\'aime la douleur en elle-même,
              ne la recherche et ne la souhaite,
              tout simplement parce qu\'il s\'agit de la douleur ...`,
    created_at: new Date,
    loveIts: 0
    }
];
}
/*le dossier model était dans cet endroit avec le nom de Posts mais pour les bonnes pratiques on a
créée un dossier model pour le mettre la bas*/