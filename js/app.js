

document.querySelectorAll('[fb-nav]').forEach(link => {
    const conteudo = document.getElementById('content-main')
    

    link.onclick = function (e) {
        e.preventDefault()
        fetch(link.getAttribute('fb-nav'))
            .then(resp => resp.text())
            .then(html => conteudo.innerHTML = html)
    }
})

function openBar() {
    let bar = document.getElementById('bar')
    bar.style.display = 'block'
}
function closeBar() {
    let bar = document.getElementById('bar')
    bar.style.display = 'none'
}

