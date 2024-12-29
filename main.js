const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log("Form Submitted!");
    //console.log(e.target);
    height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result');
    if(height<0 || height=='' || isNaN(height)){
        result.innerHTML = "ERROR ! Enter a valid height";
    }
    else if(weight<0 || weight=='' || isNaN(weight)){
        result.innerHTML = "ERROR ! Enter a valid weight";
    }
    else{
        height = height/100;
        result.innerHTML = (weight/(height*height)).toFixed(2);
        // console.log(height,weight);
    }
},false)


//forms.forEach((form)=>{
//    form.addEventListener('switch',function(e){
//        e.preventDefault();
//        console.log("Form submitted !");
//    },false)
//})