 export let cimetiere = []  
 export class Doctor {
    constructor(nom,argent,cabinet,salleAttente) { 
        this.nom = nom 
        this.argent = argent 
        this.cabinet = cabinet 
        this.salleAttente=salleAttente

        this.diagnostique = (a)=>{
                if(a.maladie=="mal indenté"){
                    let traitement= "ctrl+maj+f"
                    let prix =60
                    this.argent+=50
                    a.argent -=50
                    console.log(a.nom , " a comme maladie : " ,   a.maladie , "   donc il lui faut comme traitement  : " , traitement , "il coute : " , prix)
                    if(prix>a.argent){
                         console.warn(a.nom , "n'as pas assez d'argent pour recevoir son traitement")
                         cimetiere.push(a.nom)
                         a.etat_sante="foutu"
                    }
                    else { 
                        console.log(a.nom, " a de l'argent , il a : " , a.argent , "le traitement coute : " ,prix)
                         a.argent=a.argent-prix
                         console.log(a.nom , "a a present après avoir payer son traitement et la consultation : ", a.argent)
                         a.poche.push(traitement)
                }
                }
                else if (a.maladie == "unsave"){
                    let traitement = "saveOnFocusChange"
                    this.argent+=50
                    let prix = 100
                    a.argent -=50
                    console.log(a.nom , " a comme maladie : " ,   a.maladie , "   donc il lui faut comme traitement  : " , traitement , "il coute : " , prix)
                    if(prix>a.argent){
                         console.warn(a.nom , "n'as pas assez d'argent pour recevoir son traitement")
                        cimetiere.push(a.nom)
                        a.etat_sante="foutu"
                    }
                    else { 
                        console.log(a.nom, " a de l'argent , il a : " , a.argent , "le traitement coute : " ,prix)
                         a.argent=a.argent-prix
                         console.log(a.nom , "a a present après avoir payer son traitement et la consultation : ", a.argent)
                         a.poche.push(traitement)
                }
                }
                else if(a.maladie == "404") {
                    let traitement =  "CheckLinkRelation"
                    let prix = 35
                    a.argent -=50
                    this.argent+=50
                    console.log(a.nom , " a comme maladie : " ,   a.maladie , "   donc il lui faut comme traitement  : " , traitement , "il coute : " , prix)
                    if(prix>a.argent){
                        console.warn(a.nom , "n'as pas assez d'argent pour recevoir son traitement")
                        cimetiere.push(a.nom)
                        a.etat_sante="foutu"
                    }
                    else { 
                        console.log(a.nom, " a de l'argent , il a : " , a.argent , "le traitement coute : " ,prix)
                         a.argent=a.argent-prix
                         console.log(a.nom , "a a present après avoir payer son traitement et la consultation : ", a.argent)
                         a.poche.push(traitement)
                }
                }
                else if(a.maladie == "azmatique"){
                    let traitement  = "Ventoline"
                    let prix = 40
                    a.argent -=50
                    this.argent+=50
                    console.log(a.nom , " a comme maladie : " ,   a.maladie , "   donc il lui faut comme traitement  : " , traitement , "il coute : " , prix)
                    if(prix >a.argent){
                        console.warn(a.nom , "n'as pas assez d'argent pour recevoir son traitement")
                        cimetiere.push(a.nom)
                        a.etat_sante="foutu"
                        
                    }
                    else { 
                        console.log(a.nom, " a de l'argent , il a : " , a.argent , "le traitement coute : " ,prix)
                         a.argent=a.argent-prix
                         console.log(a.nom , "a a present après avoir payer son traitement et la consultation : ", a.argent)
                         a.poche.push(traitement)
                }
                }
                else if(a.maladie == "syntaxError") { 
                   let  traitement = "f12+doc"
                   let prix = 20
                   a.argent -=50
                   this.argent+=50
                   console.log(a.nom , " a comme maladie : " ,   a.maladie , "   donc il lui faut comme traitement  : " , traitement , "il coute : " , prix)
                   if(prix>a.argent){
                   console.warn(a.nom , "n'as pas assez d'argent pour recevoir son traitement")
                    cimetiere.push(a.nom)
                    a.etat_sante="foutu"
                }
                else { 
                    console.log(a.nom, " a de l'argent , il a : " , a.argent , "le traitement coute : " ,prix)
                     a.argent=a.argent-prix
                     console.log(a.nom , "a a present après avoir payer son traitement et la consultation : ", a.argent)
                     a.poche.push(traitement)
            }
                }
                   }
                

        this.patienTin = (a)=>{
                return console.error("Au suivant ! " , a.nom , "rentre dans le cabinet medical")
        }
        this.patientOut = (a)=>{

             console.error("Bonne journée !!" , a.nom , "sort du cabinet medical")
           

    }
}
 }
