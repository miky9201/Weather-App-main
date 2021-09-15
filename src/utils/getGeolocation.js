export const getGeolocation = (setGeolocation, setIsModalDisplayed) => {
      navigator.geolocation.getCurrentPosition( async position => {
            await setGeolocation({ lat: position.coords.latitude, lng: position.coords.longitude })
            setIsModalDisplayed && setIsModalDisplayed(false)
      })
}

