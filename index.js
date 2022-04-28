const userListEL = document.getElementById('result')
const filter = document.getElementById('filter')

let listItmes = []


getData()

async function getData() {
  const data = await fetch('https://randomuser.me/api?results=50')
  const { results } = await data.json()
  renderDom(results)

}


//Search input Event
filter.addEventListener('input', (e) => filterData(e.target.value))

function filterData(searchText) {
  listItmes.forEach(item => {
    if (item.innerText.includes(searchText)) {
      item.classList.remove('hide')
    } else {
      item.classList.add('hide')
    }
  })
}


function renderDom(users) {
  //clear the Loading...
  userListEL.innerHTML = ''

  users.forEach(user => {
    const li = document.createElement('li')
    listItmes.push(li)

    li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}">
      <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city} ${user.location.country}</p>
      </div> 
    `
    userListEL.appendChild(li)
  })
}