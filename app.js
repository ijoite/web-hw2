// ===== Part A =====
let sumA = 0;
for (let i = 0; i < ratings.length; i++) {
    sumA = sumA + ratings[i];
}
console.log("A1 평균 평점:", sumA / ratings.length);

let maxA = 0;
for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] > ratings[maxA]) {
        maxA = i;
    }
}
console.log("A2 최고 평점:", titles[maxA], ratings[maxA]);

let countA = 0;
for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] >= 8) {
        countA = countA + 1;
    }
}
console.log("A3 8점 이상: " + countA + "편");

let y2020A = 0;
let y2010A = 0;
let y2000A = 0;
let olderA = 0;
for (let i = 0; i < years.length; i++) {
    const decade = years[i] - (years[i] % 10);
    switch (decade) {
        case 2020:
            y2020A = y2020A + 1;
            break;
        case 2010:
            y2010A = y2010A + 1;
            break;
        case 2000:
            y2000A = y2000A + 1;
            break;
        default:
            olderA = olderA + 1;
            break;
    }
}
console.log("A4 2020년대 " + y2020A + "편, 2010년대 " + y2010A + "편, 2000년대 " + y2000A + "편, 그 이전 " + olderA + "편");

let bigA = "";
for (let i = 0; i < audiences.length; i++) {
    if (audiences[i] >= 1000000) {
        bigA = bigA + titles[i] + " ";
    }
}
if (bigA === "") {
    bigA = "없음";
}
console.log("A5 관객 100만 이상: " + bigA);

// ===== Part B =====
// average : 배열 ⇒ 평균 평점(숫자)
const average = list => {
    return averageBy(list, "rating");
}

// best : 배열 ⇒ 최고 평점 객체
const best = list => {
    let max = list[0];
    for (const m of list) {
        if (m.rating > max.rating) {
            max = m;
        }
    }
    return max;
}

// filterByRating : 배열, 숫자 ⇒ 새 배열
const filterByRating = (list, min) => {
    return list.filter(m => m.rating >= min);
}

// sortBy : 배열, 키 이름, 참이면 내림차순 ⇒ 새 배열
const sortBy = (list, key, desc) => {
    const sign = desc ? -1 : 1;
    return [...list].sort((a, b) => {
        if (typeof a[key] === "string") {
            return a[key].localeCompare(b[key]) * sign;
        }
        return (a[key] - b[key]) * sign;
    });
}

// search : 배열, 문자열 ⇒ 새 배열
const search = (list, keyword) => {
    const word = keyword.trim().toLowerCase();
    return list.filter(m => m.title.toLowerCase().includes(word));
}

// formatNumber : 숫자나 숫자 문자열 ⇒ "1,234,567"
const formatNumber = n => {
    return Number(n).toLocaleString("ko-KR");
}

// yearsSince : "2014-11-06" ⇒ 올해까지 몇 년(숫자)
const yearsSince = dateStr => {
    return new Date().getFullYear() - new Date(dateStr).getFullYear();
}

const bestMovie = best(movies);
const mostAudience = sortBy(movies, "audience", true)[0];
document.getElementById("out").textContent =
    "전체 " + movies.length + "편, 평균 평점 " + average(movies).toFixed(1) + "점\n" +
    "최고 평점 " + bestMovie.title + " (" + bestMovie.rating + "점, 개봉한 지 " + yearsSince(bestMovie.date) + "년)\n" +
    "관객 1위 " + mostAudience.title + " (누적 " + formatNumber(mostAudience.audience) + "명)";

// ===== Part C =====
function getList(data) {
    return data.results;
}

function averageBy(list, key) {
    return list.reduce((acc, m) => acc + m[key], 0) / list.length;
}

console.log("C1 페이지:", TMDB.page, "/ 전체 페이지:", TMDB.total_pages, "/ 전체 영화:", TMDB.total_results, "/ 이번 응답:", getList(TMDB).length + "편");
console.log("C2 상영작 평균 평점:", averageBy(getList(TMDB), "vote_average").toFixed(1));
console.table(sortBy(getList(TMDB), "vote_average", true).slice(0, 5), ["title", "release_date", "vote_average"]);
console.log("C4 검색 '고양이':", search(getList(TMDB), "고양이").length + "편");

const formatDate = dateStr => {
    const d = new Date(dateStr);
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    return d.getFullYear() + "년 " + (d.getMonth() + 1) + "월 " + d.getDate() + "일 (" + days[d.getDay()] + ")";
}

// loadJson : tmdb.json 파일 ⇒ 콘솔에 평점 상위 5편 표(13주차 fetch 미리 보기)
async function loadJson() {
    const res = await fetch("tmdb.json");
    const data = await res.json();
    console.table(sortBy(getList(data), "vote_average", true).slice(0, 5), ["title", "vote_average"]);
}
loadJson();
