exports.getDate = function()
{
    const today= new Date();
    const options={
        weekday:"long",
        day:"numeric",
        month:"long",
        year:"numeric"
    }
    return today.toLocaleString("en-US", options);
    
}

module.exports.getDay = getDay;
function getDay()
{
    let today= new Date();
    let options={
        weekday:"long",
    }
   return today.toLocaleString("en-US", options);

}