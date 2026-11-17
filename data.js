const titles = ["인터스텔라", "오디세이", "분노의 질주: 더 세븐", "스타워즈 에피소드 8: 라스트 제다이", "아바타", "극장판 치이카와: 인어 섬의 비밀", "암살자(들)", "실낙원", "타짜: 벨제붑의 노래", "클레이페이스"];
const ratings = [8.5, 8.0, 7.2, 6.7, 7.6, 7.4, 7.2, 8.0, 7.0, 7.5];
const years = [2014, 2026, 2015, 2017, 2009, 2026, 2026, 2026, 2026, 2026];
const audiences = [0, 0, 0, 0, 0, 2268257, 3382043, 112191, 2006478, 84196];

// Part B : 영화 객체 10건(Part A와 같은 순서)
const movies = [
  {
    title: "인터스텔라", year: 2014, date: "2014-11-05", rating: 8.5,
    audience: 0, poster: "/gDN2NWtHbs8ZWEBQM8Dh5OVXdb4.jpg", type: "mine", rank: null
  },
  {
    title: "오디세이", year: 2026, date: "2026-07-15", rating: 8.0,
    audience: 0, poster: "/8ze9OcVuFiy94s6FFPvsn4oC2e1.jpg", type: "mine", rank: null
  },
  {
    title: "분노의 질주: 더 세븐", year: 2015, date: "2015-04-01", rating: 7.2,
    audience: 0, poster: "/cuQdgDYANbKA46e4va2fz6fODkc.jpg", type: "mine", rank: null
  },
  {
    title: "스타워즈 에피소드 8: 라스트 제다이", year: 2017, date: "2017-12-13", rating: 6.7,
    audience: 0, poster: "/zRvMTCzUVnkdW9lno9HQwrigWSr.jpg", type: "mine", rank: null
  },
  {
    title: "아바타", year: 2009, date: "2009-12-15", rating: 7.6,
    audience: 0, poster: "/m5lCha2XcbDowDoYHPc0DTNaCPU.jpg", type: "mine", rank: null
  },
  {
    title: "극장판 치이카와: 인어 섬의 비밀", year: 2026, date: "2026-09-30", rating: 7.4,
    audience: 2268257, poster: "/5TMyytCI5Pfc9c1eNsljiCdiB05.jpg", type: "boxoffice", rank: 1
  },
  {
    title: "암살자(들)", year: 2026, date: "2026-09-23", rating: 7.2,
    audience: 3382043, poster: "/c55ijsOdntj6P25vDwHLdgsBpmV.jpg", type: "boxoffice", rank: 2
  },
  {
    title: "실낙원", year: 2026, date: "2026-10-21", rating: 8.0,
    audience: 112191, poster: "/wkm9BQLok7U2KihcCspCa663Qse.jpg", type: "boxoffice", rank: 3
  },
  {
    title: "타짜: 벨제붑의 노래", year: 2026, date: "2026-09-23", rating: 7.0,
    audience: 2006478, poster: "/ueigb5zra1tj6FTK9yhh2P33P9B.jpg", type: "boxoffice", rank: 4
  },
  {
    title: "클레이페이스", year: 2026, date: "2026-10-21", rating: 7.5,
    audience: 84196, poster: "/LSGpoSAlitss0KOvVakkeUToZo.jpg", type: "boxoffice", rank: 5
  }
];
