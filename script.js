const get_placeholder = document.getElementById('get_placeholder');
const get_btn = document.getElementById('get_btn');

get_btn.addEventListener('click', getRandomPic)

function getRandomPic() {
    fetch('https://randomfox.ca/floof/')
        .then(res => res.json())
        .then(data => {
            get_placeholder.innerHTML = `<img src="${data.image}">`
        })
}