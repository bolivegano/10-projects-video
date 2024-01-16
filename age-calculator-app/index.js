const btnEl = document.getElementById("btn");
const birthdateEl = document.getElementById("birthdate");
const resultEl = document.getElementById("result");

function calculateAge() {
    const birthdateValue = birthdateEl.value;
    console.log(birthdateValue);

    if (birthdateValue === "") {
        alert("please enter your birthdate");
    } else {
        const age = getAge(birthdateValue);
        resultEl.innerText = `Your age is ${age} ${
            age > 1 ? "years" : "year"
        } old.`;
    }
}

function getAge(birthdateValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdateValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();

    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (
        month < 0 ||
        (month === 0 && currentDate.getDate() < birthdayDate.getDate())
    ) {
        age--;
    }

    return age;
}

btnEl.addEventListener("click", calculateAge);
