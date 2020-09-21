import {Author} from './author';  
import {AuthorService} from './author-service'; 


export class SimpleAuthorService implements AuthorService{

    private authors:Author[];
    static serviceCount=0;
    private serviceId;
    
    constructor() {
        this.serviceId=++SimpleAuthorService.serviceCount;
        console.log(`SimpleAuthorService created with id ${this.serviceId}`);

        this.authors=this.authors=[
            {
              "id": "vivek",
              "name": "Vivek Dutta Mishra",
              "biography": "Author of the book 'The Accursed God' -The epic tale of Mahabharata searching if it was just a family fued as you were made to believe or it was the first world war? Follow through the first book of The Lost Epic Series",
               "email" : "vivekdutta@gmail.com"           
            },
            {
             "id": "alexandre",
              "name": "Alexandre Dumas",
              "biography": "Author of the book 'The Count of Monte Cristo'- Story of a person wrongly implicated for a false crime and is send to prison. He returns  to seek the vengeane, love and justice.",
              "email": "alexandredumas@gmail.com",

            },
            {
              "id": "archer",
              "name": "Jeffrey Archer",
              "biography": "Author of the book 'Kane And Abel'-Story of two men born on the same date on opposite side of the globe and economy and years later fate brings them for a head on collission. The best selling book by the author.",
              "email": "jefferyarcher@gmail.com",
            },
            {
              "id": "dinkar",
              "name": "Ramdhari Singh Dinkar",
              "biography": "Author of the book 'Rashmirathi' -A poetic tale of Karna of Mahabharat. The seven chapter gives a glimpse of the life and harship of one of the greatest warrior of his time",
              "email": "ramdhirsinghdinkar@gmail.com",
            },
          ];
        
    }

    addAuthor(authors: Author): boolean {
        if(authors && authors.name && authors.biography && authors.email){
            this.authors.push(authors);
            return true;
        } else{
            return false;
        }
    }
    
    getAuthors(): Author[] {
        return  this.authors;
    }
    
    getAuthor(id: string): Author {
        return this.authors.find(a=>a.id==id);
    }

}
