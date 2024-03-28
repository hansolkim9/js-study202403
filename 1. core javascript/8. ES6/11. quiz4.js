const traders = [
    {
      trader: {
        name: "김철수",
        city: "대전",
      },
      year: 2023,
      value: 500000,
    },
    {
      trader: {
        name: "박영희",
        city: "서울",
      },
      year: 2022,
      value: 600000,
    },
    {
      trader: {
        name: "김철수",
        city: "대전",
      },
      year: 2022,
      value: 1200000,
    },
    {
      trader: {
        name: "박영희",
        city: "서울",
      },
      year: 2023,
      value: 650000,
    },
    {
      trader: {
        name: "뽀로로",
        city: "부산",
      },
      year: 2023,
      value: 800000,
    },
    {
      trader: {
        name: "루피",
        city: "대전",
      },
      year: 2022,
      value: 780000,
    },
  ];
  

// 연습 1: 2022년에 발생한 모든 거래를 찾아
// 거래자 정보(이름, 도시)를 배열에 매핑해주세요
const traderInfo = traders
.filter(trade => trade.year === 2022)
.map(info => ({name: info.trader.name, city: info.trader.city}));
console.log(traderInfo);

console.log('====================');
// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.
const workCities = [...new Set(traders.map(city => city.trader.city))];
console.log(workCities);

console.log('====================');
// 연습 3: 대전에 근무하는
// 모든 거래자를 찾아 거래자정보(이름, 도시)를 배열에 매핑해주세요.
const traderDaejeon = traders
.filter(daejeon => daejeon.trader.city === '대전')
.map(info => ({name: info.trader.name, city: info.trader.city}));
console.log(traderDaejeon);

console.log('====================');
// 연습 4: 모든 거래자의 이름을 배열에 모아주세요.
const allTrader = [...new Set(traders.map(traderName => traderName.trader.name))];
console.log(allTrader);

console.log('====================');
// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.
let totalSeoul = 0;
traders
.filter(inSeoul => inSeoul.trader.city === '서울')
.forEach(sum => totalSeoul += sum.value);
console.log(`거래총액: ${totalSeoul}원`);

const total = traders
.filter(trs => trs.trader.city === '서울')
.reduce((total, trs) => total + trs.value, 0)