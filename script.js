window.onload = function (){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const equation = urlParams.get('equation');

  if (equation != null){
      document.getElementsByName("equation")[0].value = equation;
  }
}

// onclick to all buttons
for (let e of document.getElementsByClassName("btn")){
    if(e.value !="="){
        e.onclick = function(){
            onClickListener(e);
        }
    }
}

// display buttons
function onClickListener(e){
    if (e.value == "C"){
        document.getElementsByName("equation")[0].value = ""; 
    }
    else {
        display(e.value);
    }
}

function display(value){
    document.getElementsByName("equation")[0].value += value;
}


// calculate function
function calculate(){
    let cal = document.getElementsByName("equation")[0].value;
    try{
        let result = eval(cal);
        document.getElementsByName("equation")[0].value = result;
    }
    catch (e){
        if ( e instanceof SyntaxError){
            document.getElementsByName("equation")[0].value = "Error";
        }
    }
}