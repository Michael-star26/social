export class Article{
    title:string;
    votes:number;
    link:string;

    constructor(title:string,link:string,votes?:number){
        this.title=title
        this.votes=votes || 0
        this.link=link
    }
    voteUp():boolean{
        this.votes +=1
        return false
      }
    
      voteDown():boolean{
        this.votes -=1
        return false
      }

    domain():any{
        try{
            const domainAndPath:string=this.link.split('//')[1]
            return domainAndPath.split('/')[0]
        } catch(err){
            return null;
        }
    }
}