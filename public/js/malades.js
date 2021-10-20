
export default class Malade {
    constructor(nom , maladie,argent,poche , etat_sante , traitement) { 
        this.nom = nom
        this.maladie =maladie
        this.argent  = argent
        this.poche = poche
        this.etat_sante=etat_sante
        this.traitement = traitement
        this.seDeplacer= (a)=>{
            if(a.etat_sante=="foutu") { 
                console.log(a.nom , "Pas les moyens de se soigner , Il va au cimetière")
            }
            else {
                console.log(a.nom , " se rend a la pharmacie et prend son traitement prescris par Dr Debugger")
            }
        }
        this.prendreMedoc= (a)=> {
                return console.warn(a.nom , "Prend donc son traitement proscris par le Docteur Debugger")
        }
        this.payer= (a)=>{
            return console.warn(a.nom , " a payé sa consultation 50 euros")
        }
    }
}

// export default {Malade}