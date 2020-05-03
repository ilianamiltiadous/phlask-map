export function getHours(hours){

    // Check for 12:00am or hours exceeding 2400
    const intHours = parseInt(hours)
    if(intHours >= 2400){
        
        return hours === 2400 
            ? '12:00am'
            : 'Exceeded 2400 hours'
    }
    
    const time = hours.split('')
    const minute = (time[2] + time[3])

    // Check for minutes exceeding 59
    if (parseInt(minute) > 59 ){        
        return 'Incorrect minute format: minutes too large'
    }

    const hour = parseInt(time[0] + time[1])
    const newHour = hour > 12 
        ? (hour - 12).toString()
        : hour === 0 
            ? 12
            : hour.toString()

    const mer = hour >= 12 ? 'pm' : 'am'

    return `${newHour}:${minute}${mer}`
    
    
}

export function getDays(integerDay){

    if (integerDay > 6 || integerDay < 0 || !Number.isInteger(integerDay) ){
        return 'Integer Day should be of value 0-6'
    }

    const intDays = [0,1,2,3,4,5,6,]
    const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

    return days[intDays.indexOf(integerDay)]
}
