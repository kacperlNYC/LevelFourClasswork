const INVALID_CHARS = "<>@#*";
function init()
{
    logOutputBox = document.getElementById("logoutput");
    logFormObject = document.getElementById("logform");
    log = "Log -- ";
}

function addMessage(msg) {
    if (isValid(msg))
        log += "<br />" + msg
    else
        log += validate(msg);
    display();
}

function display()
{
    logOutputBox.innerHTML = log;
}

function isValid(msg)
{
    for (let i = 0; i <INVALID_CHARS.length; i++)
    {
        if(msg.indexOf(INVALID_CHARS.charAt(i)) >= 0 )
            return false;
    }
    return true;
}

function validate(msg)
{
    for (let i = 0; i <INVALID_CHARS.length; i++)
    {
        let charIdx = msg.indexOf(INVALID_CHARS.charAt(i));
        while (charIdx >= 0)
        {
            msg = msg.substring(0, charIdx) + msg.substring(charIdx+1)
            charIdx = msg.indexOf(INVALID_CHARS.charAt(i));
        }
    }
    return msg;
}