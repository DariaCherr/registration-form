const form = document.querySelector(".form");
const thanks = document.querySelector(".thanks");
const register = document.querySelector(".register");
const sendName = document.querySelector("#userName");
const sendLastName = document.querySelector("#lastName");
const sendEmail = document.querySelector("#userEmail");
const sendNationality = document.querySelector("#userNationality");
const sendGender = document.querySelector("#gender");
const sendUserBirthDay = document.querySelector("#date");

form.addEventListener("submit", (event) => {
    fetch(`http://46.21.248.81:3001/user`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer: DariaCherr'
            },
            body: JSON.stringify({
                "name": sendName.value,
                "secondName": sendSecondName.value,
                "phone": sendPhone.value,
                "email": sendEmail.value,
                "nationality": sendNationality.value,
                "gender": sendGender.value,
                "birthDate": sendUserBirthDay.value,
                "agree": true
            }),
        })
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            console.log(data);
            statusMessage.textContent = 'Загрузка данных прошла успешно!';

            form.reset();
            register.classList.add('hidden');
            thanks.classList.remove('hidden');
        })
        .catch((error) => {
            console.log(error);
            statusMessage.textContent = 'Ошибка! Данные не загрузились :(';
        })



})

// 12qwQQWW!!lk,