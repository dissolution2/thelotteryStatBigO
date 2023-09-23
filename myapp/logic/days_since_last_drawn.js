module.exports = function getDateDaysSince(StringDate){
    let now = new Date();
    let acquired = new Date(StringDate);
    let elapsed = now - acquired;
    let daysSinceAxquierd = Math.floor(elapsed / 86400000); //(1000 * 3600 * 24)); //86400000); // readability 1000 sec, 3600 Hours, 24 Hours in a day.
    return daysSinceAxquierd;
}