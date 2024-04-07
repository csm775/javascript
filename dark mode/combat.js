class Guerrier{
    constructor(attack,nom,précision,vie){
        this.attack = attack;
        this.nom = nom;
        this.précision = précision;
        this.vie = vie;
    }
    
    getAttack(){
        console.log(this.attack)
    }
    
    getPrécision(){
        console.log(this.précision)
    }
    }
    
    let Sparctatus = new Guerrier(10,5)
    let Hercule = new Guerrier(10,5)
    
    while(Sparctatus.vie > 0 && Hercule.vie > 0);