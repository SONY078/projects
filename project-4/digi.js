// function Disp()
// {
//     // var date = new Date();
//     var h = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
//     var ap = date.getHours() >= 12 ? "PM" : "AM";
//     h = h < 10 ? "0" + h : h ;
//     var m = date.getMinutes() < 10 ? + date.getMinutes() : date.getMinutes();
//     var s = date.getSeconds() < 10 ? + date.getSeconds() : date.getSeconds();

//     document.getElementById("hs").innerHTML = h + "<br>Hours";
//     document.getElementById("ms").innerHTML = m + "<br>Mins";
//     document.getElementById("ss").innerHTML = s + "<br>Seconds";
//     document.getElementById("ampm").innerHTML = ap ;
// }
// // console.log(Disp());
// Disp();
    // const d = new Date();
    // let time = d.getTime();
    // document.getElementById("demo").innerHTML = time;
    // document.getElementById("demo1").innerHTML = time;

    // const mm = 1000 * 60 ;
    // const hh = mm * 60 ;
    // const day = hh * 24 ;
    // const year = day * 365 ;

    // let years = Math.round(d.getTime()/year);
    // document.getElementById("exx").innerHTML = years ;

    // // var hours = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
    // // document.getElementById("hs").innerHTML = hours + "<br>Hours";
    // function addZero(i)
    // {
    //     if(i < 10 )
    //     {
    //         i = "0" + i ;
    //     }
    //     return i ; 
    // }
    // let h = addZero(d.getUTCHours());
    // let m = addZero(d.getUTCMinutes());
    // let s = addZero(d.getUTCSeconds());
    // let clock = h + ":" + m + ":" + s ;
    // document.getElementById("time").innerHTML = clock ;

    // let text = d.toLocaleTimeString();
    // document.getElementById("demo2").innerHTML = text ;

    //--------------------------------------------------------------------------
    const d = new Date();

    let h = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
    document.getElementById("hours").innerHTML = h + "<br>Hours" ; 
    

    let ap = d.getHours() >= 12 ? "PM" : "AM";
    document.getElementById("ampm").innerHTML = ap ;

    let s = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
    document.getElementById("seconds").innerHTML = s + "<br>Seconds" ;

    let m = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
    document.getElementById("minutes").innerHTML = m + "<br>Minutes" ;


    // document.getElementById("mrng").style.backgroundImage = "url('Component 30 – 1.svg')" ;
    //   document.getElementById("morning").innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
    //   document.getElementById("morningmes").innerHTML = "GOOD MORNING!! WAKE UP !!";


    // document.getElementById("afternoon").style.backgroundImage = "url('Component 31 – 1 (1).svg')" ;
    // document.getElementById("noon").innerHTML = "LET'S HAVE SOME LUNCH !!";
    // document.getElementById("noonmes").innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";


    // document.getElementById("evening").style.backgroundImage = "url('lunch_image.jpg')" ;
    // document.getElementById("eve").innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    // document.getElementById("evemes").innerHTML = "GOOD EVENING !!";


    // document.getElementById("gn").style.backgroundImage = "url('Component 32 – 1.svg')" ;
    // document.getElementById("gn").style.backgroundImage.backgroundSize = "400px" ;
    // document.getElementById("night").innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
    // document.getElementById("nightmes").innerHTML = "GOOD NIGHT !!";

    if( h <= 12 && ap == "AM")
    {

        document.getElementById("mrng").style.backgroundImage = "url('Component 30 – 1.svg')" ;
        document.getElementById("morning").innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
        document.getElementById("morningmes").innerHTML = "GOOD MORNING!! WAKE UP !!";   
    }
    else if( h <= 4 && ap =="PM")
    {
        // document.getElementById("afternoon").style.backgroundImage = "url('Component 31 – 1 (1).svg')" ;
        // document.getElementById("noon").innerHTML = "LET'S HAVE SOME LUNCH !!";
        // document.getElementById("noonmes").innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
    }
    else if( h <= 8 && ap == "PM")
    {
        document.getElementById("evening").style.backgroundImage = "url('lunch_image.jpg')" ;
        document.getElementById("eve").innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        document.getElementById("evemes").innerHTML = "GOOD EVENING !!";
    }
    else if( h >= 8 && ap =="PM")
    {
        document.getElementById("gn").style.backgroundImage = "url('Component 32 – 1.svg')" ;
        // document.getElementById("gn").style.backgroundImage.backgroundSize = "400px" ;
        document.getElementById("night").innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById("nightmes").innerHTML = "GOOD NIGHT !!";
    }

    //--------------------------------------------------------------------------
        // value = 0 ;
        // if (h>12 && ap == "AM")
        // {
        //     value = 11;
        // }
        // else if(h<= 4 && ap == "PM")
        // {
        //     value = 2;
        // }
        // else if(h<=8 && ap == "PM")
        // {
        //     value =4;
        // }
        // else if(h>=8 && ap == "PM")
        // {
        //     value = 9;
        // }
        // let wt = document.getElementById("morning").value;
        // let lt = document.getElementById("noon").value ;
        // let et = document.getElementById("eve").value;
        // let nt = document.getElementById("night").value;

        // if(wt == h)
        // {
        //     document.getElementById("im").style.backgroundImage = "url(morning.svg)" ;
        //     document.getElementById("mes").innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
        // }
        // else if(lt == h)
        // {
        //     document.getElementById("im").style.backgroundImage = "url(lunch.svg)" ;
        //     document.getElementById("mes").innerHTML = "LET'S HAVE SOME LUNCH !!";
        // }
        // else if(et == h)
        // {
        //     document.getElementById("im").style.backgroundImage = "url(evening.svg)" ;
        //     document.getElementById("mes").innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        // }
        // else if(nt == h)
        // {
        //     document.getElementById("im").style.backgroundImage = "url(night.svg)" ;
        //     document.getElementById("mes").innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
        // }



    //--------------------------------------------------------------------------

        // let hours = document.getElementById("hours");
        // let minutes = document.getElementById("minutes");
        // let seconds = document.getElementById("seconds");
        // let ampm = document.getElementById("ampm");

        // let hrs = new Date().getHours();
        // hours.innerHTML = hrs ;


    //--------------------------------------------------------------------------
    // let ap = date.getHours() >= 12 ? "PM" : "AM";
    // h = h < 10 ? "0" + h : h ;
    // let m = date.getMinutes() < 10 ? + date.getMinutes() : date.getMinutes();
    // let s = date.getSeconds() < 10 ? + date.getSeconds() : date.getSeconds();

    // document.getElementById("hs").innerHTML = h + "<br>Hours";
    // document.getElementById("ms").innerHTML = m + "<br>Mins";
    // document.getElementById("ss").innerHTML = s + "<br>Seconds";
    // document.getElementById("ampm").innerHTML = ap ;