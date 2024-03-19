
const memesSet = [
    { id: 1, name: 'Борщ, с капусткой, но не красный', price: 50, selected: false },
    { id: 2, name: 'Сосисочки', price: 20, selected: false },
    { id: 3, name: 'Какой-то непонятный салат', price: 40, selected: false },
    { id: 4, name: 'Вкусный чай', price: 10, selected: false },
    { id: 5, name: 'котлетки на обед', price: 25, selected: false },
    { id: 6, name: 'котлетки с макарошками', price: 35, selected: false },
    { id: 7, name: 'котлетки с пюрешкой', price: 999, selected: false },
    { id: 8, name: 'нейросетевые спагетти Уилла Смита', price: 65, selected: false },
    { id: 9, name: 'настоящие спагетти Уилла Смита', price: 90, selected: false }
];

const clothesSet = [
    { id: 1, name: 'Футболка', price: 25, selected: false },
    { id: 2, name: 'Джинсы', price: 40, selected: false },
    { id: 3, name: 'Кепка', price: 15, selected: false },
    { id: 4, name: 'Рюкзак', price: 50, selected: false },
    { id: 5, name: 'Кроссовки', price: 60, selected: false },
    { id: 6, name: 'Носки', price: 5, selected: false },
    { id: 7, name: 'Платье', price: 35, selected: false },
    { id: 8, name: 'Шорты', price: 30, selected: false },
    { id: 9, name: 'Рубашка', price: 45, selected: false },
    { id: 10, name: 'Шапка', price: 20, selected: false },
    { id: 11, name: 'Куртка', price: 70, selected: false },
    { id: 12, name: 'Пиджак', price: 55, selected: false },
    { id: 13, name: 'Брюки', price: 45, selected: false },
    { id: 14, name: 'Пальто', price: 80, selected: false },
    { id: 15, name: 'Поло', price: 30, selected: false },
    { id: 16, name: 'Жилет', price: 25, selected: false },
    { id: 17, name: 'Костюм', price: 100, selected: false },
    { id: 18, name: 'Рюкзак', price: 60, selected: false },
    { id: 19, name: 'Кроссовки', price: 55, selected: false },
    { id: 20, name: 'Носки', price: 7, selected: false }
];

const typeOfSetElement = document.getElementById('typeOfSet');
const selectTypeOfSetBtn = document.getElementById('setTypeOfSet')
const typeOfListChk = document.getElementById('typeOfList')
const addValue = document.getElementById('addvalue')
const stateBtn = document.getElementById("state")
const resetBtn = document.getElementById("resetBtn")
const newRandbtn = document.getElementById("newRandAB")

selectTypeOfSetBtn.addEventListener('click', () => {
    switch (typeOfSetElement.value) {
        case '0': 
            if (typeOfListChk.checked) {
                const leftValues = memesSet.filter(elem => elem.price % 10 === 0);
                const rightValues = memesSet.filter(elem => elem.price % 10 !== 0);
                arrangeBoxOne.setPossibleValues(leftValues);
                arrangeBoxOne.setSelectedValues(rightValues);
            }
            else {
                arrangeBoxOne.setPossibleValues(memesSet)
            }
            break;
        case '1':
            if (typeOfListChk.checked) {
                const leftValues = clothesSet.filter(elem => elem.price % 10 === 0);
                const rightValues = clothesSet.filter(elem => elem.price % 10 !== 0);
                arrangeBoxOne.setPossibleValues(leftValues);
                arrangeBoxOne.setSelectedValues(rightValues);
            }
            else {
                arrangeBoxOne.setPossibleValues(clothesSet)
            }
            break;
    }
})
addValue.addEventListener('click', () => {
    const insertValue = { id: getRandomInt(1, 1000), name: `Вставленный элемент ${getRandomInt(1, 1000)}`, price: getRandomInt(1, 1000), selected: false }

    arrangeBoxOne.addPossibleValue(insertValue);
    alert(`Значение ${insertValue.name} добавлено в список`);
})
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}

stateBtn.addEventListener('click', () => {
    const state = arrangeBoxOne.state()

    //alert(`выбранные id: ${state.selected}`)
    console.log(state)
})

resetBtn.addEventListener('click', () => {
    arrangeBoxOne.reset();
})

newRandbtn.addEventListener('click', () => {
    const randArrangeBox = new arrangeBox("randArrangeBoxes", getRandomInt(1, 1000))
    const values = generateValues(getRandomInt(0, 30))
    randArrangeBox.setPossibleValues(values)

})

function generateValues(count) {
    const values = [];
    for (let i = 0; i < count; i++) {
        values.push({
            id: getRandomInt(1, 1000),
            name: `значение ${i + 1}`,
            price: getRandomInt(10, 100),
            selected: false
        });
    }
    return values;
}