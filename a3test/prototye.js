var dice={
    faces:['die1.png','die2.png','die3.png','die4.png','die5.png','die6.png'],
    randomRoll:function(){
    var randNum=Math.floor(Math.random ()*this.faces.length)+1;
        return randNum;
    }
};

function gen_dice(){
    var n=dice.randomRoll()-1;
    console.log(n);
    document.getElementById('result').src=dice.faces[n];
    };
