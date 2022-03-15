function mostraform(){
    let name = document.getElementById('name')
    let username = document.getElementById('username')

    let newTr = document.createElement('tr')

    let tbody = document.getElementById('tbody')
    tbody.append(newTr)

    let newTd = document.createElement('td')
    newTd.classList.add('valueName')

    let tr = newTr
    tr.append(newTd)
    
    let secondTd = document.createElement('td')
    secondTd.classList.add('valueUsername')
   
    tr.append(secondTd)

    let thirdTd = document.createElement('td')
    tr.append(thirdTd)

    let buttonTd = document.createElement('button')
    buttonTd.innerHTML = 'Delete'
    
    thirdTd.append(buttonTd)

    document.querySelector('.valueName').innerHTML = name.value
    document.querySelector('.valueUsername').innerHTML = username.value
}


// /*********************** deletar table *****************************/
// const delet = document.querySelectorAll('.deletar-box')

// function deletarform() {
// let deletar = document.querySelectorAll('.table-js')
//  delet.removeChild(deletar)
// }

// delet.addEventListener('click' , deletarform)



