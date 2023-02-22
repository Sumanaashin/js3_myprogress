var getprogressbar = document.querySelector('.progress-bar');
var getdownloadbtn = document.querySelector('.download-btn');
var geturl = "https://www.linkedin.com/";

getdownloadbtn.addEventListener('click',function(){
    // console.log('Hi I am working');

    getdownloadbtn.setAttribute('disabled',true);

    var setwidth = 0;

    var setinv = setInterval(progressinc,100);
    
    function progressinc(){
        
        if(setwidth >= 100){
            clearInterval(setinv);
            window.location.href = geturl;
        }else{
            setwidth++;

            getprogressbar.style.width = `${setwidth}%`;
            getprogressbar.setAttribute('data-inc',`${setwidth}%`);
        }
        
    }


});