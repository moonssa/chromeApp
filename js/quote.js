const quotes = [
  {
    quote: "노력은 배신하지 않는다.",
    author: "케이트 윁슬레이",
  },
  {
    quote: "성공은 준비된 마음을 만난 때에 온다.",
    author: "토머스 에디슨",
  },
  {
    quote: "절대 포기하지 마라. 성공은 실패를 거듭한 뒤에 온다.",
    author: "로버트 슐러",
  },
  {
    quote: "너 자신을 믿어라. 그러면 세상이 너에게 믿음을 보일 것이다.",
    author: "고르도 목 ",
  },
  {
    quote: "가장 어두운 밤은 별들이 가장 빛나는 때이다.",
    author: "찰스 디킨스 ",
  },
  {
    quote: "오늘 날을 위한 준비는 내일의 성공이다.",
    author: "헨리 포드 ",
  },
  {
    quote: "한 걸음 한 걸음이 새로운 시작이다.",
    author: "마이클 조던",
  },
  {
    quote: "모든 성취의 출발점은 갈망이다.",
    author: "나폴레옹 힐",
  },
  {
    quote: "지식을 갖춘 사람은 무기를 갖춘 것과 같다.",
    author: "비평가 호레이스",
  },
  {
    quote: "행복은 간단한 것들에서 기인한다.",
    author: "아이시크 드라곤 ",
  },
  {
    quote: "기회는 문을 두드리는 모습으로 찾아온다.",
    author: "마일스 데이비스 ",
  },
  {
    quote: "위대한 목표를 세우는 것이 자신의 능력을 넘어서는 것이다.",
    author: "나폴레온 보나파르트 ",
  },
  {
    quote:
      "가장 위대한 영광은 결코 넘어지지 않는 데 있지 않고, 항상 다시 일어나는 데 있다.",
    author: "샤니데이브 ",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
