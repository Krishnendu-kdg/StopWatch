let time=document.getElementsByClassName('time')[0];
let stop=document.getElementsByClassName('stop')[0];
let reset=document.getElementsByClassName('reset')[0];
let start=document.getElementsByClassName('start')[0];
let mark_the_time=document.getElementsByClassName('mark-the-time')[0];
let marked_times=document.getElementsByClassName('marked-times')[0];
let marked_times_heading=document.getElementsByClassName('marked-times-heading')[0];var id_of_setInterval;

var hours=0;
var minutes=0;
var seconds=0;
var marked=new Array();

function create_string(a)
{
    var str='';
    if(a<10)
    str+='0'+String(a);
    else
    str+=String(a);
    return str;
}


start.addEventListener('click',function(){
    id_of_setInterval=setInterval(() => {
        seconds++;
        if(seconds==60)
        {
            minutes++;
            seconds=0;
        }
        if(minutes==60)
        {
            hours=0;
            minutes=0;
        }
        let second_string=create_string(seconds);
        let minute_string=create_string(minutes);
        let hour_string=create_string(hours);
        time.innerText=`${hour_string}:${minute_string}:${second_string}`;
    }, 1000);
    start.disabled='true';

    //start button is disabled so to avoid parallel calls to setInterval() 
})

stop.addEventListener('click',function()
{
    clearInterval(id_of_setInterval);
    // console.log(start);
    start.removeAttribute('disabled');

    //start button is again enabled
})


reset.addEventListener('click',function(){
    if(seconds==minutes&&minutes==hours&&seconds==0)
    {
        alert('no need of reset!!!!');
        return;
    }

    //if the stopwatch has not yet started


    hours=0;
    minutes=0;
    seconds=0;
    marked=[];
    clearInterval(id_of_setInterval);
    time.innerText='00:00:00';
    start.removeAttribute('disabled');

    let i=0;
    for(;i<marked_times.childNodes.length;i++)
    {

        // console.log(marked_times.childNodes.length,'child deleted')
        marked_times.removeChild(marked_times.childNodes[i]);
        i=0;
    }

    if(marked_times.childNodes.length==1)
    marked_times.removeChild(marked_times.childNodes[0]);

    //deleting all the childs of marked_times

    marked_times_heading.style.visibility='collapse';

    // marked_times heading is again hidden
})

mark_the_time.addEventListener('click',function()
{
    if(seconds==minutes&&minutes==hours&&seconds==0)
    {
        alert('Start and then mark');
        return;
    }

    //if the stopwatch has not yet started



    //if the time has alredy been marked 
    if(marked.includes(time.innerText))
    {
        alert('Time Already marked');
        return;
    }
    
    
    marked.push(time.innerText);
    // console.log(marked);
    let created_parent_element=document.createElement('div');
    created_parent_element.Color='blue';
    let created_element=document.createElement('h4');
    created_element.innerText=marked[marked.length-1];
    created_element.style.textAlign='center';
    created_element.style.color='rgb(24, 92, 148)';
    created_parent_element.appendChild(created_element);
    marked_times.appendChild(created_parent_element);
    marked_times_heading.style.visibility='visible';



    //procedure for showing the marked_time in the respective div
})