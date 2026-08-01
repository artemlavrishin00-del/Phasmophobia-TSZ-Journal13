const mediumObjectives = [

    "Найти комнату призрака",
    "Вижити 15 минут",
    "Спостерігати за гост івентом",
    "Зробити фото призрака во время охоти чи гост івента",
    "Завершити гру без смертей"

];

const easyObjectives = [

    "Зробити фото призрака до охоти",
    "Зробити фото предмета, з яким взаємодіяв призрак",
    "Вижити 10 минут",
    "Вижити охоту",
    "Зробити фотографію проклятого об'єкта"
    

];

function randomFrom(array){

    return array[Math.floor(Math.random() * array.length)];

}

function generateObjectives(){

    document.getElementById("obj1").innerHTML =
        "★★★ Визначити призрака";

    document.getElementById("obj2").innerHTML =
        "★★ " + randomFrom(mediumObjectives);

    document.getElementById("obj3").innerHTML =
        "★ " + randomFrom(easyObjectives);

}

generateObjectives();