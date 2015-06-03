$(document).ready(ready);

$(window).resize(dynamicAlign);


function ready()
{
    dynamicAlign();
    $("#descriptionSelector").on("show.bs.tab",selected);
}

function selected()
{
    console.log("selected");
}

function dynamicAlign()
{
    var width = window.innerWidth;
    
    $('.resizable').each(function() {
        dynamicAlignElement(width,$( this ))
    });
    
    $('.resizableContainer').each(function() {
        dynamicReduceMargin(width,$( this ))
    });
}
function dynamicAlignElement(width,elem)
{
    if(width>=767)
        dynamicAlignBig(width,elem);
    else
        dynamicAlignSmall(width,elem);                           
}
function dynamicAlignBig(width,elem)
{
    elem.width("45%");
}
function dynamicAlignSmall(width,elem)
{
    elem.width("90%");
}
function dynamicReduceMargin(width,elem)
{
    if(width>=767)
        dynamicMarginBig(width,elem);
    else
        dynamicMarginSmall(width,elem);
}
function dynamicMarginBig(width,elem)
{
    elem.css('margin', function (index, curValue) {
    return "5%";
    });
}
function dynamicMarginSmall(width,elem)
{
    elem.css('margin', function (index, curValue) {
    return "1%";
    });
    elem.css('padding', function (index, curValue) {
    return "0%";
    });
}