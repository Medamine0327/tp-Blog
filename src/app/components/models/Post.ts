//le model Post
export class Post{

    index: number;
    title: string;
    content: string;
    loveIts?: number;  /*si on ajoute ? se champ sera optionnel
                        -- si on retire ce champ de notre tab il ne causera pas un erreur*/
    created_at: Date;

}