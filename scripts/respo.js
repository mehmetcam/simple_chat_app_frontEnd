const conversation = document.getElementById("conversation-courante");
const utilisateurs = document.getElementById("utilisateurs");

addEventListener("click",coordinates);
function coordinates(){
    //Partie Conversation
    let Rect = conversation.getBoundingClientRect();
    let leftPo = Rect.left;
    let CoorX = event.clientX;
    let differenceX = CoorX-leftPo;
    
    //Partie Utilisateur
    let widthUtilisateurs = utilisateurs.clientWidth;
    console.log("widthUtilisateurs",widthUtilisateurs);
    let differenceXA = widthUtilisateurs - CoorX;
    console.log("differenceXA",differenceXA)

    if(window.innerWidth < 650){
        if((differenceX<30 && differenceX>0) || (differenceXA<30 && differenceXA>0)  ){
            console.log("Pika Pika Pikachu!")
            if(utilisateurs.style.display != "none"){
                utilisateurs.style.display = "none";
                conversation.style.width = "100%"
                conversation.style.display = "block";
            }
            else{
                utilisateurs.style.display = "block";
                utilisateurs.style.width = "100%";
                conversation.style.display = "none";
            }
        }
    }
    

}
