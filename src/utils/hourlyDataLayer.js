export const hourlyDataLayer = (arr) => {
      const newArr = arr.slice(0, 24)
      const result = []
      for (let index = 0; index < newArr.length; index++) {
            if(index % 4 === 0) {
                  result.push(newArr[index])
            }
      }
     return result
}
