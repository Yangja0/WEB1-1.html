var Link = {
    setColor:function(color){
        // var ablist = document.querySelectorAll('a');
        // var i = 0
        // while(i < ablist.length){                
        //     ablist[i].style.color = color;
        //     i = i + 1;
        //     }
        $('a').css('color', color); //jQuery 코드임
    }
}
var Body = {
    setColor:function(color){
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor:function(color){
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}

function nightDayHandler(self) {
    var target = document.querySelector('body');
    if(self.value === 'night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';
        Link.setColor('powderblue'); 
     } else {
        Body.setBackgroundColor('white');               
        Body.setColor('black');
        self.value = 'night';
        Link.setColor('darkorchid');
           }  
       }   