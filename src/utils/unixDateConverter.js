export const unixDateConverter = (unixDate) => {
      const date = new Date(unixDate * 1000);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1) // display the zero before one figure numbers
      const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
      const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
      const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes() 

      return { 
            fullDate: day + "/" + month + "/" + year + "  -  " + hours + ":" + minutes, 
            halfHour: hours + ":" + minutes,
            halfDate: day + "/" + month
      }
}
