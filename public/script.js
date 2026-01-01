let input = document.getElementById("inputField");
        
        
        
        let comp = Math.floor(Math.random()*3);
        let playerField = document.getElementById("player");
        let compField = document.getElementById("comp");
        let result = document.getElementById("result")
        let t0 = "rock";
        let t1 = "paper"
        let t2 = "scissor"
        const loading = async()=>{
            
        }
        document.getElementById("buton").addEventListener('click', ()=>{
            let player = input.value.toLowerCase()
            let play;   
            console.log(player)
            if(player == "rock" || player== "scissor" ||player == "paper"){
                switch(player){
                case "rock": playerField.innerText = "player got- " + t0, play = t0;
                break;
                case "paper": playerField.innerText = "player got- " +t1, play = t1;
                break;
                case "scissor": playerField.innerText = "player got- " +t2, play = t2;
            }

             switch(comp){
                case 0: compField.innerText = "Computer got- " +t0, comp = to ;
                break;
                case 1: compField.innerText = "Computer got- " +t1, comp = t1;
                break;
                case 2: compField.innerText = "Computer got -"+t2, comp = t2;
            }
           
            if(play == t0 && comp == t1){
                result.innerText = "Computer won"
            }
            else if(play == t1 && comp == t0){
                result.innerText = "Player won"
            }
            else if(play == t0 && comp == t2){
                result.innerText = "Player won"
            }
            else if(play == t2 && comp == t0){
                result.innerText = "Computer won"
            }
            else if(play == t1 && comp == t2){
                result.innerText = "Computer won"
            }
            else if(play == t2 && comp == t0){
                result.innerText = "Player won"
            }
            else{
                result.innerText = "It's a Draw, Play Again"
            }
               
            }
            else{
                result.innerText ="invalid Entry-"
            }
            // 0 = rock, 1 = paper, 2 = scissor
        })
      