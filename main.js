Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
var camera =document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'">';
    });
}

console.log('ml5 version',ml5.version);
classfier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/iDniNjf2X/model.json',modelLoaded);

function modelLoaded(){
    console.log('model loaded');
}

function check(){
    img = document.getElementById("capture_image");
     classfier = classify(img , gotResult);
}

function gotResult(error, results){
     if(error){
         console.error(error);
     }
     else{
         console.log(results);
         document.getElementById("member_name").innerHTML = results[0].label;
         document.getElementById("member_accuracy").innerHTML = results[0].confidence.toFixed(3);
     }
}