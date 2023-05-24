let c = document.querySelector('.main');
for(let i = 0; i <= 9; i++) {
    let create = document.createElement('p');
    create.classList.add('hello');
    create.textContent = 'Hello!';
    create.style.color = 'red';
    create.style.background = 'green';
    c.append(create);
}