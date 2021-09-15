export const weatherClassnameSelector = (id) => {
      if (id >= 200 && id < 300) {
            return "stormy";
      } else if (id >= 300 && id < 600) {
            return "rainy";
      } else if (id >= 600 && id < 700) {
            return "snowy";
      } else if (id >= 700 && id < 800) {
            return "misty";
      } else if (id === 800) {
            return "sunny";
      } else if (id > 800) {
            return "cloudy";
      } else {
            return null
      }
}