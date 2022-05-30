const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat')




/*const getCats = async () => {
    const DATA = await fetch(BASE_URL);
        .then((res) => res.json());
        .catch((error) => console.log(error));

    return data.webpurl;
};*/

const getCats = async () => {
    try {
        const DATA = await fetch(BASE_URL);
        const JSON = await DATA.json();
        return json.webpurl;
    } catch (error) {
        console.log(error.message);
    }
};

const loadImg = async () => {
    const catImg = document.getElementById('cat')
    catImg.src = await getCats();
}

catBtn.addEventListener('click', loadImg);

loadImg()