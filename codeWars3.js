// 4 kyu Human readable duration format
// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript



/* Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds,
in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed
as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.*/

function format_duration(total_seconds)
{
    const times = {
        "years": Math.floor(total_seconds / 31536000),
        "days": Math.floor(total_seconds % 31536000 / 86400),
        "hours": Math.floor(total_seconds % 31536000 % 86400 / 3600),
        "minutes": Math.floor(total_seconds % 3153600 % 86400 % 3600 / 60),
        "seconds": total_seconds % 3153600 % 86400 % 3600 % 60
    }
    let duration = "now"
    for (let time in times)
    {
        if (times[time] === 0)
        {
           delete times[time] 
        }
    }
    let single_times = []
    for (let time in times)
    {
        if (times[time] === 1)
        {
            single_times.push(time)
        }
    }
    let times_said = []
    for (let time in times)
    {
        times_said.push(time)
    }
    let time_amount
    if (total_seconds === 0)
    {
        return duration
    }
    else
    {
        duration = ""
        for (let time in times)
        {
            if (times[time] !== 1)
            {
                time_amount = time
            }
            else if (times[time] === 1)
            {
                time_amount = time.slice(0, -1)
            }
            duration = duration + times[time].toString() + " " + time_amount
            if (times_said.length > 1)
            {
                if (time !== times_said[times_said.length - 2] && time !== times_said[times_said.length - 1])
                {
                    duration = duration + ", "
                }
                else if (time === times_said[times_said.length - 2])
                {
                    duration = duration + " and "
                }
            }
        }
        return duration
    }
}

console.log(format_duration(121000000))