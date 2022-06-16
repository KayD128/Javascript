// var theButton = document.getElementById('jsstyle')

// function js_style(){
//     text.style.fontSize = '12px'
//     text.style.color = 'red'
// }
// var button = document.getElementById('w3r').addEventListener('click', getAttributes);

// function getAttributes(){
    // x = 
    // console.log(document.getElementById('w3r').type)

    // console.log(anything.target.type);
// }

// function insert_Row(){
//     var x=document.getElementById('sampleTable').insertRow(0);
//     var y = x.insertCell(0);
//     var z = x.insertCell(1);
//     y.innerHTML="New Cell1";
//     z.innerHTML="New Cell2";
// }

function myFunction(){
    let x = document.getElementById("numb").value;

    let text;
    if (isNaN(x) || x >10 || x<0) {
        text = "input not valid"
    } else {
        text = "Input OK"
    }
    document.getElementById("lemo").innerHTML = text;
}