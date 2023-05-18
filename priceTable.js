const fullSum = () => {
    const inputClass1 = document.getElementById('td1')
    const inputClass2 = document.getElementById('td2')
    const inputClass3 = document.getElementById('td3')
    const inputClass4 = document.getElementById('td4')
    const inputClass5 = document.getElementById('td5')
    const inputClass6 = document.getElementById('td6')

    let kitPrice1 = inputClass1.value * 27900
    let kitPrice2 = inputClass2.value * 14600
    let kitPrice3 = inputClass3.value * 10500
    let kitPrice4 = inputClass4.value * 55000
    let kitPrice5 = inputClass5.value * 43800
    let kitPrice6 = inputClass6.value * 13500

    document.getElementById('kit_price')
        .innerHTML = (kitPrice1 + kitPrice2 + kitPrice3 + kitPrice4 + kitPrice5 + kitPrice6)
        .toLocaleString('ru-Ru') + ' руб'
}
