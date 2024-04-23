const API_URL = "https://dummyjson.com/users"
const userWrapper = document.querySelector(".user__wrapper")
const userLoading = document.querySelector(".user__loading")
const userTitle = document.querySelector(".user__title")


async function userApi(url) {
    let data = await fetch(url, {
        method:"GET"
    })
    data
        .json()
        .then(res => mapData(res))
        .catch(error => console.log(error))
        .finally(()=>{
            userLoading.style.display = "none"
            userTitle.style.display = "block"
        })
}

userApi(API_URL)

function mapData(userData) {
    let boxs = "";
    userData.users.forEach((user) => {
        boxs += `
        <div class="user__card">
            <div class="user__img-card">
                <img src=${user.image} alt="${user.firstName} ${user.lastName}">
            </div>
            <div class="user__info">
                <div class="user__info__card">
                <h3 class="user__info__title">${user.firstName} ${user.lastName}</h3>
                    <div class="user__info__part">
                        <h3>${user.age}<br><span>Age</span></h3>
                        <h3>${user.gender}<br><span>Gender</span></h3>
                        <h3>${user.username}<br><span>Username</span></h3>
                    </div>
                    <p class="user__info__text"><span>Password:</span> ${user.password}</p>
                    <p class="user__info__text"><span>Birth date:</span>  ${user.birthDate}</p>
                    <p class="user__info__text"><span>Blood group:</span>  ${user.bloodGroup}</p>
                    <p class="user__info__text"><span>Height:</span>  ${user.height}</p>
                    <p class="user__info__text"><span>Weight:</span>  ${user.weight}</p>
                    <p class="user__info__text"><span>EyeColor:</span>  ${user.eyeColor}</p>
                    <p class="user__info__text"><span>Domain:</span>  ${user.domain}</p>
                    <p class="user__info__text"><span>Ip:</span>  ${user.ip}</p>
                    <p class="user__info__text"><span>Address:</span>  ${user.address.city + " " + user.address.address}</p>
                    <p class="user__info__text"><span>University:</span>  ${user.university}</p>
                    <p class="user__info__text"><span>Bank:</span>  ${user.bank.cardExpire + " " + user.bank.cardNumber}</p>
                    <p class="user__info__text"><span>Company:</span>  ${user.company.address.city + " " + user.company.address.address}</p>
                    <p class="user__info__text"><span>Ein:</span>  ${user.ein}</p>
                    <p class="user__info__text"><span>Ssn:</span>  ${user.ssn}</p>
                    <p class="user__info__text"><span>Crypto:</span>  ${user.crypto.coin}</p>
                </div>
            </div>
        </div>
        `
    });
    userWrapper.innerHTML = boxs
}

function loading(loadingData) {
    let lodaingCard = ""
    for (let i = 0; i <loadingData; i++) {
        lodaingCard += `
            <div class="user__loading__card loading">
                <div class="user__loading__img-card loading"></div>
                <div class="user__loading__title loading"></div>
            </div>
        `
    }
    userLoading.innerHTML = lodaingCard
}

loading(9)