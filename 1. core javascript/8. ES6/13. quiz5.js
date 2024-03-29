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
    {
      trader: {
        name: '김철수', 
        city: '대전',
      },
      year: 2023,
      value: 1500000,
    },
    {
      trader: {
        name: '김철수', 
        city: '대전',
      },
      year: 2022,
      value: 2500000,
    },
    {
      trader: {
        name: '김철수', 
        city: '대전',
      },
      year: 2022,
      value: 500000,
    },
];



console.log('1====================');
// 1. **2023년에 대전에서 발생한 모든 거래의 총액을 계산해주세요.**
// let sumDaejeon2023value = 0;
// traders
// .filter(trade => trade.year === 2023 && trade.trader.city ==='대전')
// .forEach(sum => sumDaejeon2023value += sum.value);
const totalInDaejeon2023 = traders
.filter(trade => trade.year === 2023 && trade.trader.city ==='대전')
.reduce((total, trs) => total + trs.value, 0);

console.log(`2023년도 대전에서 발생한 거래의 총액은 ${totalInDaejeon2023}원 입니다.`);



console.log('2====================');
// 2. **부산에서 거래한 모든 거래자의 이름을 배열에 담아 출력해주세요.**
const traderBusan = traders
.filter(busan => busan.trader.city === '부산')
.map(nameBusan => nameBusan.trader.name);
console.log(traderBusan);

console.log('3====================');
// 3. **모든 거래 중 가장 높은 거래액을 가진 거래의 
//   거래자 정보(이름, 도시)와 거래액을 출력해주세요.**
// let maxTrade = traders[0];
// for (let i = 1 ; i < traders.length ; i++) {
//     if(traders[i].value >= maxTrade.value) {
//         maxTrade = traders[i];
//     }
// }
// const maxTradeInfo = {
//     name: maxTrade.trader.name,
//     city: maxTrade.trader.city,
//     value: maxTrade.value
// };
// console.log(maxTradeInfo);

const highestTransaction = traders.reduce((max, trs) => max.value < trs.value ? trs : max);

console.log(`가장 높은 거래액 정보 - 이름: ${highestTransaction.trader.name}, 도시: ${highestTransaction.trader.city}, 거래액: ${highestTransaction.value}`);

console.log('4====================');
// 4. **각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요. 
//   예를 들어, `{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.**
// const totalTradeCity = {};
// traders.forEach(trade => {
//     const city = trade.trader.city;
//     const value = trade.value;
    
//     if (totalTradeCity[city]) {
//         totalTradeCity[city] += value;
//     } else {
//         totalTradeCity[city] = value;
//     }
// });
// console.log(totalTradeCity);

const totalTradeCity = traders.reduce((totalTradeCity, trs) => {
    const city = trs.trader.city;
    const value = trs.value;
    if (totalTradeCity[city]) {
        totalTradeCity[city] += value;
    } else {
        totalTradeCity[city] = value;
    }
    return totalTradeCity
}, {})
console.log(totalTradeCity);

console.log('5====================');
// 5. **거래액이 700000원 이상인 거래를 모두 찾아, 
//   해당 거래의 연도별로 분류해주세요. 결과는 
//   `{2022: [...거래정보], 2023: [...거래정보]}`와 같은 형태가 되어야 합니다.**
const overTrade70 = {};
traders.forEach(trade => {
    const year = trade.year;
    const value = trade.value;
    if (value >= 700000) {
        if (overTrade70[year]) {
            overTrade70[year].push(trade);
        } else {
            overTrade70[year] = [trade];
        }
    }
});
console.log(JSON.stringify(overTrade70, null, 2));


console.log('6====================');
// 6. **각 거래자별로 그들이 진행한 거래의 
//   평균 거래액을 계산해주세요. 
//   결과는 `{거래자이름: 평균거래액}` 형태의 객체가 되어야 합니다.**
const averageTrade = {};
traders.forEach(trade => {
    const name = trade.trader.name;
    const value = trade.value;
    if(averageTrade[name]) {
        averageTrade[name].totalValue += value;
        averageTrade[name].totalCount++;
    } else {
        averageTrade[name] = {totalValue: value, totalCount: 1};
    }
});
console.log(averageTrade);
for (const name in averageTrade) {
    averageTrade[name] = averageTrade[name].totalValue / averageTrade[name].totalCount;
}
console.log(averageTrade);
console.log('7====================');
// 7. **2022년과 2023년 각각에서 가장 많은 거래를 한 거래자의 
//   이름과 그 거래 횟수를 출력해주세요.**
const mostTraded = {
    2022: {name: '',count: 0},
    2023: {name: '',count: 0}
};
traders.forEach(trade => {
    const year = trade.year;
    const name = trade.trader.name;
    if (mostTraded[year][name]) {
        mostTraded[year][name]++;
    } else {
        mostTraded[year][name] = 1;
    }
    if (mostTraded[year][name] > mostTraded[year].count) {
        mostTraded[year].name = name;
        mostTraded[year].count = mostTraded[year][name];
    }
});
console.log(mostTraded);
for (const year in mostTraded) {
    console.log(`${year}년: ${mostTraded[year].name}, 거래 횟수: ${mostTraded[year].count}`);
}


console.log('8====================');
// 8. **모든 거래 중 거래액이 중간값인 
//   거래의 정보(거래자 이름, 도시, 연도, 거래액)를 출력해주세요.**

const sortedTraders = traders.slice().sort((a, b) => a.value - b.value);
// 배열의 요소 수가 홀수면 정확한 중간인덱스가 나오는데 
// 짝수면 중앙 두 값의 평균을 중간값으로 한다.
const middleIndex = Math.floor(sortedTraders.length / 2); // 가운데 인덱스 찾기

let middleTradeInfo;
if (sortedTraders.length % 2 === 1) { // 배열의 요소 수가 홀수인 경우
  middleTradeInfo = sortedTraders[middleIndex]; // 정확한 중간 인덱스를 지정
} else { // 짝수인 경우
  middleTradeInfo = [
    sortedTraders[middleIndex - 1], 
    sortedTraders[middleIndex]
  ];
}
console.log(middleTradeInfo);

console.log('9====================');
// 9. **각 도시에서 진행된 거래의 수를 계산해주세요. 
//   결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.**
const countTradeByCity = {};
traders.forEach(trade => {
    const city = trade.trader.city;
    if (countTradeByCity[city]) {
        countTradeByCity[city]++;
    } else {
        countTradeByCity[city] = 1;
    }
});
console.log(countTradeByCity);


console.log('10====================');
// 10. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후, 
//   정렬된 리스트를 출력해주세요. 
//   각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.**

const sortedTransactions = traders.slice().sort((a, b) => a.value - b.value);
console.log(sortedTraders);