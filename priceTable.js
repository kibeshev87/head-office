const fullSum = () => {
    const line1 = document.getElementById('td1')
    const line2 = document.getElementById('td2')
    const line3 = document.getElementById('td3')
    const line4 = document.getElementById('td4')
    const line5 = document.getElementById('td5')
    const line6 = document.getElementById('td6')

    let kitPrice1 = line1.value * 27900
    let kitPrice2 = line2.value * 14600
    let kitPrice3 = line3.value * 10500
    let kitPrice4 = line4.value * 55000
    let kitPrice5 = line5.value * 43800
    let kitPrice6 = line6.value * 13500

    document.getElementById('kit_price')
        .innerHTML = (kitPrice1 + kitPrice2 + kitPrice3 + kitPrice4 + kitPrice5 + kitPrice6)
        .toLocaleString('ru-Ru') + ' руб'
}
