//images
function change(){

    document.getElementById("i1").src = "img/2.jpg";
    document.getElementById("i2").src = "img/1.jpg";

}

function reverse(){

    document.getElementById("i1").src = "img/1.jpg";
    document.getElementById("i2").src = "img/2.jpg";

}

function change2(){

    document.getElementById("i2").src = "img/5.jpeg";
    document.getElementById("i3").src = "img/2.jpg";
}

function reverse2(){

    document.getElementById("i2").src = "img/2.jpg";
    document.getElementById("i3").src = "img/5.jpeg";

}

function change3(){

    document.getElementById("i1").src = "img/5.jpeg";
    document.getElementById("i3").src = "img/1.jpg";
}

function reverse3(){

    document.getElementById("i1").src = "img/1.jpg";
    document.getElementById("i3").src = "img/5.jpeg";

}

function secondOne(){

    document.getElementById("b2").style.visibility = "visible";
    document.getElementById("p2").style.visibility = "visible";

}

function thirdOne(){

    document.getElementById("p3").style.visibility = "visible";
    document.getElementById("b3").style.visibility = "visible";
}

//text

function fourthOne(){

    var text = "Everything is Changed";

    var para = document.getElementsByTagName("h2");

    for(var i=0;i<para.length;i++){

        para[i].innerHTML = text;
       

        console.log(para[i].value);
    }
}

//last 3 images

var id =0;


function imageOne(){

    var q = document.getElementsByClassName("imgss");
      
    for(let i =0;i<q.length;i++){

        q[i].style.display = "none";
        
}
}

function imageTwo(){

    var p = document.getElementsByClassName("imgss");

    for(let i =0;i<p.length;i++){

        p[i].style.display = "block";
    }

    var objDiv = document.getElementById("the_div_id");
    objDiv.scrollIntoView();
}