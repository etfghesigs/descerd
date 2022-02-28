const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '아리스 안녕') {
    msg.reply('고니지와~ 센세!');
  }
});

client.on('message', msg => {
  if (msg.content === '아리스 민초') {
    msg.reply('아직도 나를 못뽑는 흑우쉑');
  }
});

client.on('message', msg => {
  if (msg.content === '아리스 필살기') {
    msg.reply('빛이여!!!!!!!!');
  }
});

client.on('message', msg => {
  if (msg.content === '아리스') {
    msg.reply('하잇! 부르셨나요 센세?');
  }
});

client.on('message', msg => {
  if (msg.content === '아리스 블루아카이브') {
    msg.reply('~~ㅈ망겜~~ 몰?루');
  }
});

client.on('message', msg => {
  if (msg.content === '아리스 악령') {
    msg.reply('날 만든 ㅁㅊ년임');
  }
});

client.on('message', msg => {
  if (msg.content === '아리스 뽑기') {
    msg.reply('1200청휘석으로 1,2성만 나왔어요 센세~~');
  }
});

client.on('message', msg => {
  if (msg.content === '아리스 와카모') {
    msg.reply('악령이 와이프입니다');
  }
});

client.on('message', msg => {
  if (msg.content === '아리스 몰?루') {
    msg.reply('몰?루');
  }
});

client.on('message', msg => {
  if (msg.content === '아리스 야스오') {
    msg.reply('하세기!!');
  }
});

client.on('message', msg => {
  if (msg.content === '아리스 샤묘') {
    msg.reply('악령센세랑 친한 십덕쉑');
  }
});

client.on('message', msg => {
  if (msg.content === '아리스 마크') {
    msg.reply('갓.겜.');
  }
});

client.on('message', msg => {
  if (msg.content === '아리스 제작자') {
    msg.reply('악령이라는 ㅁㅊ년이 지 꼴리는데로 명령어 만들어요 살려주세요 센세');
  }
});

client.on('message', msg => {
  if (msg.content === '아리스 중2병') {
    msg.reply('나에게 잠든 깊은곳 어둠의 속삭임이여 영원한 잠식속에서 나를 해방하고 피를 가져라 아아! 들린다! 피로 계약해 해방되는 봉인의 소리가! 풀려라 봉인이여! 이야아아아!');
  }
});

client.on('message', msg => {
  if (msg.content === '아리스 서버') {
    msg.reply('https://discord.gg/E99qMUUQCw');
  }
});

client.on('message', msg => {
  if (msg.content === '아리스 3성') {
    msg.reply('나올리가 없죠 센세~');
  }
});

client.on('message', msg => {
  if (msg.content === '아리스 언제나와') {
    msg.reply('오오... 용사여... 나를 뽑고싶다면 여기 이 "성검 엑스칼리버" 를 뽑아 높이 들어올려 외쳐라... 빛이여!!');
  }
});

client.on('message', msg => {
  if (msg.content === '아리스 청휘석') {
    msg.reply('다 제겁니당 센세');
  }
});

client.on('message', msg => {
  if (msg.content === '아리스 휴식') {
    msg.reply('휴식은 중요합니다 HP가 회복되니깐요. 또 선생님과 레이드에 가고싶습니다. 선생님의 계정에 메시지를 보낼 생각입니다. 아리스도 커피를 마시고 싶습니다. 아리스를 쓰담쓰담 해주세요 아리스의 인공단백질 피부가 따듯해집니다.');
  }
});

client.on('message', msg => {
  if (msg.content === '아리스 파티초대') {
    msg.reply('뽜밤뽜밤 아리스가 파티에 합류하였습니다! 용사여. 빛이 당신과 함께 합니다. ');
  }
});

client.login('OTQ2MDY4Mzg5NjcwMDQzNjQ4.YhZU2Q.gcxwObRrJeCTW1Vr_HNBvjv5-6k');