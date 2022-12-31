var content2 = document.querySelector('.content2');

function creationCours(image, titre, prix) {
    let div = document.createElement('div');
    div.setAttribute('class', 'card col-3 me-2 mb-2');
    let img = document.createElement('img');
    //img.setAttribute('src',image)
    img.src = image;

    let p = document.createElement('p');
    p.setAttribute('class', 'card-title');
    let contenu = document.createTextNode(titre);
    p.appendChild(contenu);

    let span = document.createElement('span');
    span.setAttribute('class', 'card-text');
    span.appendChild(document.createTextNode(prix + '$'));

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);
    content2.append(div)
}

courses.forEach((el) => {
    creationCours(el.image, el.title, el.price);
})

const searchinput = document.getElementById("search")

searchinput.addEventListener("keyup", function (e) {
    const value = e.target.value

    content2.innerHTML = ''

    courses.filter(el => {
        return el.title.toLowerCase().includes(value.toLowerCase())
    }).forEach((el) => {
        creationCours(el.image, el.title, el.price);
    })
})

const pricefilter = document.getElementById("price-filter")

pricefilter.addEventListener("change", function (e) {
    const value = parseFloat(e.target.value)

    content2.innerHTML = ''

    document.querySelector('.selected-price').innerHTML = value.toString()

    courses.filter(el => {
        return el.price >= value
    }).forEach((el) => { creationCours(el.image, el.title, el.price) })
})

document.querySelectorAll('.category-item').forEach(function (category) {
    category.addEventListener('click', function (e) {
        e.preventDefault()

        const categoryname = category.dataset.value
        content2.innerHTML = ''

        courses.filter(el => {
            if (categoryname == 'all') return true
            return el.category.toLowerCase() == categoryname.toLowerCase()
        }).forEach((el) => { creationCours(el.image, el.title, el.price) })
    })
})