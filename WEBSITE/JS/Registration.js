$(document).ready(dynamicAlign);

$(window).resize(dynamicAlign);

function dynamicAlign()
{
    var width = window.innerWidth;
    if(width>=767)
        dynamicAlignBig(width);
    else
        dynamicAlignSmall(width);
}

function dynamicAlignBig(width)
{
    $("#registrationContent").width("79*widht/100");
    $("#registrationContentLeftHalf").width("43%");
    $("#registrationContentRightHalf").width("43%");
}

function dynamicAlignSmall(width)
{
    $("#registrationContent").width("95%");
    $("#registrationContentLeftHalf").width("80%");
    $("#registrationContentRightHalf").width("80%");
    console.log(80*width/100);
}