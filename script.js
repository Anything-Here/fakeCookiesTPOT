function loudHamster(){
    let loudAudio = document.getElementById('audioLoud')
    let hamsterImg = document.getElementById('imgHamster')
    let acceptButton = document.getElementById('acceptCookies')
    let declineButton = document.getElementById('declineCookies')
    let notificationP = document.getElementById('notificationP')
    let anotherp1 = document.getElementById('anotherp1')

    document.documentElement.requestFullscreen()
    acceptButton.hidden = true
    declineButton.hidden = true
    notificationP.hidden = true
    anotherp1.hidden = true
    hamsterImg.hidden = false
    loudAudio.play()
}