 var score=0;
// var gameIndex=0;
 var countKeys=0;
// var singerRand;
var gamestart=0;

var game = {
    singerCollection : [{singer:"madonna",
            song:"assets/Madonna.mp3",
            theme: "assets/images/Madonna.jpg"},
            {singer:"celine dion",
            song:"assets/CelineDion.mp3",
            theme: "assets/images/CelineDion.png"},
            {singer:"whintney houston",
            song:"assets/WhintneyHouston.mp3",
            theme: "assets/images/WhitneyHouston.jpg"},
        ],
    
    guessedChars: [],
    dasharray: [],
//   singerRand: 0,
    startSet : function(){
        singerRand = this.singerCollection[Math.floor(Math.random() * this.singerCollection.length)];
        console.log(singerRand.singer);
        console.log(singerRand.singer.length);
        var i=0;
      
        for(i=0;i<singerRand.singer.length;i++){
            this.dasharray = this.dasharray + "-";
        }
        document.querySelector("#currentWord").innerHTML=this.dasharray;
        var type= document.getElementById("startByType");
        type.style.display = "none";


      //  var t1 = document.getElementById("showCurrent");
        document.querySelector("#showCurrent").innerHTML = "current word:";
        //t1.style.display = "inline";
        countKeys++;
        
    },

    getAllIndexes: function (arr, val) {
        var indexes = [];
        var i=0;
        for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
             indexes.push(i);
         return indexes;
},

    updateGuessedChar : function(guessedChar){
        console.log(guessedChar+" AHGJSHG "+singerRand.singer );
        var charIndexes = this.getAllIndexes(singerRand.singer,guessedChar.toLocaleLowerCase());
        console.log("indexes in string "+ charIndexes+"lenght of charindex"+charIndexes.length);
        var i=0;
        var j=0;
        var index= 0;
        var temparray="";
        if(this.guessedChars.indexOf(guessedChar)<0){
            this.guessedChars= this.guessedChars+guessedChar;
            document.querySelector("#charsGussed").innerHTML=this.guessedChars;
        }
        console.log("first dashaaray"+temparray);
        for(j=0;j<this.dasharray.length;j++){ 
        
            console.log("chanindex"+charIndexes[i] +" i= " + i+" j= " + j+" guessedChar "+guessedChar);
            if(this.dasharray[j] !== "-")
            {
                temparray=temparray+this.dasharray[j];
            
            }
            else if((j===charIndexes[i])){
                temparray =temparray+guessedChar;
                i++;
            }
            else{
                temparray = temparray +"-";
            }
        
            index = charIndexes[i] ;
           
            temparray.split(temparray.indexOf(index)).join(guessedChar);
            console.log("index"+index+"  Temp  "+ temparray);
           
    }
        console.log("second dashaaray"+temparray);
        this.dasharray = temparray;
        document.querySelector("#currentWord").innerHTML=this.dasharray;
        console.log("this.dasharray.indexOf(-) "+this.dasharray.indexOf("-"))
        if(this.dasharray.indexOf("-")>=0){
        
        countKeys++;
        }
        else{
            
            this.endSet();
            countKeys=0;
        }
        
    },
    endSet : function(){
        score++;
        document.querySelector("#winShow").innerHTML="Times you won:";
        document.querySelector("#winCount").innerHTML = score;
        this.dasharray=[];
        this.guessedChars=[];
       this.playingMusic();
       this.showPic();
       // document.querySelector("#theme").innerHTML =singerRand.song;
       
       
       // document.querySelector("#newSet").innerHTML="Enter a key to start again";
       var type= document.getElementById("startByType");
        type.style.display = "inline";
        // type.style.display = "none";


      //  document.querySelector("showCurrent").innerHTML = "";
        
    },
    showPic : function(){
        var divpic = document.getElementById("theme");
       // pic.
     //   var a = document.createElement("img");
     var a = document.getElementById("singer1");
        a.src=singerRand.theme;
        a.height =200;
        a.width = 200;
        // a.setAttribute("height" , "100");
        // a.setAttribute("width" , "100");
        console.log("source image"+a.src);
        document.querySelector("#singer1").innerHTML=a.src;
       // divpic.appendChild(a);
    },
    playingMusic: function(){
        
      
        // console.log("Music1" + singerRand.song);     
        // var win = new Audio(singerRand.song);
        // win.play();
       
        var  m1= document.getElementById("playMusic");
        if(m1.getAttribute("src")){
            console.log("sxS"+m1.getAttribute("src"));
           m1.pause();
        }
      //   else{
         m1.setAttribute("src",singerRand.song);
      //    var s1=document.getElementById("sourceMusic");
      //    s1.setAttribute("src","CelineDion.mp3");
         m1.play();
        // }





    }

}

 document.onkeyup = function(event){

    if(countKeys == 0 ){
        // countKeys++;
        // document.querySelector("#startByType").innerHTML= "Type to start";
        game.startSet();
    }
    else if(countKeys>0){
        console.log("after start char gueseed"+event.key);
        game.updateGuessedChar(event.key);
   
    }
}
   

