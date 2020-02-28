function resetColor($number)
{
    switch ($number)
    {
        case 0:
            document.getElementById('c-titleHeader1').style.color = "white";
            document.getElementById('c-titleHeader2').style.color = "white";
            document.getElementById('c-titleHeader3').style.color = "white";
            document.getElementById('c-titleHeader4').style.color = "white";
            break;
        case 1:
            document.getElementById('c-titleHeader0').style.color = "white";
            document.getElementById('c-titleHeader2').style.color = "white";
            document.getElementById('c-titleHeader3').style.color = "white";
            document.getElementById('c-titleHeader4').style.color = "white";
            break;
        case 2:
            document.getElementById('c-titleHeader0').style.color = "white";
            document.getElementById('c-titleHeader1').style.color = "white";
            document.getElementById('c-titleHeader3').style.color = "white";
            document.getElementById('c-titleHeader4').style.color = "white";
            break;
        case 3:
            document.getElementById('c-titleHeader0').style.color = "white";
            document.getElementById('c-titleHeader1').style.color = "white";
            document.getElementById('c-titleHeader2').style.color = "white";
            document.getElementById('c-titleHeader4').style.color = "white";
            break;
        case 4:
            document.getElementById('c-titleHeader0').style.color = "white";
            document.getElementById('c-titleHeader1').style.color = "white";
            document.getElementById('c-titleHeader2').style.color = "white";
            document.getElementById('c-titleHeader3').style.color = "white";
            break;        
    }
}

document.addEventListener("click", (evt) => 
{
    var c_titleHeader = [];

    c_titleHeader[0] = document.getElementById('c-titleHeader0');
    c_titleHeader[1] = document.getElementById('c-titleHeader1');
    c_titleHeader[2] = document.getElementById('c-titleHeader2');
    c_titleHeader[3] = document.getElementById('c-titleHeader3');
    c_titleHeader[4] = document.getElementById('c-titleHeader4');

    let targetElement = evt.target;

    do {
        if (targetElement == c_titleHeader[0])
        {            
            document.getElementById('c-titleHeader0').style.color = "#ff0e83";
            resetColor(0);
            return;
        }
        else if (targetElement == c_titleHeader[1])
        {
            document.getElementById('c-titleHeader1').style.color = "#ff0e83";
            resetColor(1);
            return;
        }
        else if (targetElement == c_titleHeader[2])
        {
            document.getElementById('c-titleHeader2').style.color = "#ff0e83";
            resetColor(2);
            return;
        }
        else if (targetElement == c_titleHeader[3])
        {
            document.getElementById('c-titleHeader3').style.color = "#ff0e83";
            resetColor(3);
            return;
        }
        else if (targetElement == c_titleHeader[4])
        {
            document.getElementById('c-titleHeader4').style.color = "#ff0e83";
            resetColor(4);
            return;
        }

        targetElement = targetElement.parentNode;
    } while (targetElement);

    resetColor(0);
    resetColor(1);
    resetColor(2);
    resetColor(3);
    resetColor(4);
});

document.addEventListener("scroll", function()
{
    if(document.documentElement.scrollTop >= 240)
    {
        document.getElementsByClassName('c-onTop')[0].style.opacity = "1";
        document.getElementsByClassName('c-onTop')[0].style.transitionDuration = "0.5s";
    }
    else
    {
        document.getElementsByClassName('c-onTop')[0].style.opacity = "0";
        document.getElementsByClassName('c-onTop')[0].style.transitionDuration = "0.5s";
    }
});

function mouse_Hover($number)
{
    switch ($number) 
    {
        case 1:
            document.getElementById('col1__img').style.backgroundImage = "url('./images/icon1pink.png')";
            document.getElementById('col1__img').style.transitionDuration = "0.5s";
            break;
        case 2:
            document.getElementById('col2__img').style.backgroundImage = "url('./images/icon2pink.png')";
            document.getElementById('col2__img').style.transitionDuration = "0.5s";
            break;
        case 3:
            document.getElementById('col3__img').style.backgroundImage = "url('./images/icon3pink.png')";
            document.getElementById('col3__img').style.transitionDuration = "0.5s";
            break;
        case 4:
            document.getElementById('col4__img').style.backgroundImage = "url('./images/icon4pink.png')";
            document.getElementById('col4__img').style.transitionDuration = "0.5s";
            break;
    }
    
}

function mouse_Out($number)
{
    switch ($number) 
    {
        case 1:
            document.getElementById('col1__img').style.backgroundImage = "url('./images/icon1common.png')";
            break;
        case 2:
            document.getElementById('col2__img').style.backgroundImage = "url('./images/icon2common.png')";
            break;
        case 3:
            document.getElementById('col3__img').style.backgroundImage = "url('./images/icon3common.png')";
            break;
        case 4:
            document.getElementById('col4__img').style.backgroundImage = "url('./images/icon4common.png')";
            break;
    }
}