let calendar = document.querySelector('.calendar')

const month_names = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}

generateCalendar = (month, year) => {

    let calendar_days = calendar.querySelector('.calendar-days')
    let calendar_header_year = calendar.querySelector('#year')

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    calendar_days.innerHTML = ''

    let currDate = new Date()
    if (!month) month = currDate.getMonth()
    if (!year) year = currDate.getFullYear()

    let curr_month = `${month_names[month]}`
    month_picker.innerHTML = curr_month
    calendar_header_year.innerHTML = year

    // get first day of month
    
    let first_day = new Date(year, month, 1)

    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div')
        if (i >= first_day.getDay()) {
            day.classList.add('calendar-day-hover')
            day.innerHTML = i - first_day.getDay() + 1
            day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`
            if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('curr-date')
            }
        }
        calendar_days.appendChild(day)
    }
}

let month_list = calendar.querySelector('.month-list')

month_names.forEach((e, index) => {
    let month = document.createElement('div')
    month.innerHTML = `<div data-month="${index}">${e}</div>`
    month.querySelector('div').onclick = () => {
        month_list.classList.remove('show')
        curr_month.value = index
        generateCalendar(index, curr_year.value)
    }
    month_list.appendChild(month)
})

let month_picker = calendar.querySelector('#month-picker')

month_picker.onclick = () => {
    month_list.classList.add('show')
}

let currDate = new Date()

let curr_month = {value: currDate.getMonth()}
let curr_year = {value: currDate.getFullYear()}

generateCalendar(curr_month.value, curr_year.value)

document.querySelector('#prev-year').onclick = () => {
    --curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

document.querySelector('#next-year').onclick = () => {
    ++curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}


const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sTítulo = document.querySelector('#m-Título')
const sInício = document.querySelector('#m-Início')
const sFim = document.querySelector('#m-Fim')
const sDescricao = document.querySelector('#m-Descrição')
const sHorario = document.querySelector('#m-Horário')
const sTurma = document.querySelector('#m-Turma')
const sMateria = document.querySelector('#m-Matéria')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

function openModal(edit = false, index = 0) {
    modal.classList.add('active')

    modal.onclick = e => {
        if (e.target.className.indexOf('modal-container') !== -1) {
            modal.classList.remove('active')
        }
    }

    if (edit) {
        sNome.value = itens[index].Título
        sFuncao.value = itens[index].Início
        sSetor.value = itens[index].Fim
        sDescrição.value = itens[index].Descrição
        sHorário.value = itens[index].Horário
        sTurma.value = itens[index].Turma
        sMatéria.value = itens[index].sMatéria
 
        id = index
    } else {
        sTítulo.value = ''
        sInício.value = ''
        sFim.value = ''
        sDescrição.value = ''
        sHorário.value = ''
        sTurma.value = ''
        sMatéria.value = ''
       
    }
}

function editItem(index) {
    openModal(true, index)
}

function deleteItem(index) {
    itens.splice(index, 1)
    setItensBD()
    loadItens()
}

function insertItem(item, index) {
    let tr = document.createElement('tr')

    tr.innerHTML = `
     <td>${item.Título}</td>
     <td>${item.Início}</td>
     <td>${item.Fim}</td>
     <td>${item.Descrição}</td>
     <td>${item.Horário}</td>
     <td>${item.Turma}</td>
     <td>${item.Matéria}</td>
    
     <td class="acao">
        <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
        <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
    `
    tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
    if (sTítulo.value == '' || sInício.value == '' ||  sFim.value == '' || sDescrição.value == '' || sHorário.value == '' ||  sTurma.value == '' ||  sMatéria.value == '' ) {
        return
    }

    e.preventDefault();

    if (id !== undefined) {
        itens[id].Titulo = sTítulo.value
        itens[id].Início = sInício.value
        itens[id].Fim = sFim.value
        itens[id].Descrição = sDescrição.value
        itens[id].Horário = sHorário.value
        itens[id].Turma = sTurma.value
        itens[id].Matéria = sMatéria.value
    
    } else {
        itens.push({'Título': sTítulo.value, 'Início': sInício.value, 'Fim': sFim.value ,'Descrição': sDescrição.value, 'Horário': sHorário.value, 'Turma': sTurma.value, 'Matéria': sMatéria.value, })
    }

    setItensBD()

    modal.classList.remove('active')
    loadItens()
     
}

function loadItens() {
    itens = getItensBD()
    tbody.innerHTML = ''
    itens.forEach((item, index) => {
        insertItem(item, index)
    })
}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ??[]
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()




