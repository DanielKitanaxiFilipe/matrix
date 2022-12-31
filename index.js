const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = '美しいラブストリの最初のページハニー一緒に私たちは美しいラブストーリーになることを約束するものの最初のページを書いています多分誰が知っているかこれまでで最も美しいラブストーリーです少なくともこれまでに行われたステップは、私たちに非常に美しく幸せな何かを予見させます私たちが素晴らしい関係を築いていることを確認するために数年スキップしたくなるでしょうしかしそれは私たちが私たちのラブストーリーの最初の日を生きることを妨げるでしょう、そして私はその経験をこの世界で何かと交換しませんとても幸せなバレンタインデーをお過ごしください。あなたをとても愛しています';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const nums = '0123456789';

const alphabet = katakana + latin + nums;

const fontSize = 14;
const columns = canvas.width/fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++){
  rainDrops [x] = 1;
}

const draw = () => {
  context.fillStyle = 'rgba(0, 0, 0, 0.05)';
  context.fillRect(0,0, canvas.width, canvas.height);

  context.fillStyle = '#0F0';
  context.font = fontSize + 'px monospace';

  for(let i = 0; i < rainDrops.length; i++){
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    context.fillText(text, i*fontSize, rainDrops[i]*fontSize);

    if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
      rainDrops[i]=0;
    }
    rainDrops[i]++;
  }
};
setInterval(draw, 30);
