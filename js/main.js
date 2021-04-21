
const question = document.getElementById('question');
const choice1 = document.getElementById('choice1');

const btn = document.getElementById('btn');
const result = document.getElementById('result');
const scoreLabel = document.querySelector('#result > p')
const item1 = document.createElement('li');
const item2 = document.createElement('li');
const item3 = document.createElement('li');
const item4 = document.createElement('li');

const quizSet = [
  {q:`girl`,c:`少女`},
  {q:`father`,c:`父`},
  {q:`doctor`,c:`医者`},
  {q:`pilot`,c:`パイロット`},
  {q:`man`,c:`男の人`},
  {q:`cook`,c:`料理人`},
  {q:`sister`,c:`姉妹`},
  {q:`boy`,c:`少年`},
  {q:`mother`,c:`母`},
  {q:`brother`,c:`兄弟`},
  {q:`woman`,c:`女性`},
  {q:`citizen`,c:`市民`},
  {q:`parent`,c:`親`},
  {q:`student`,c:`学生`},
  {q:`clerk`,c:`店員`},
  {q:`family`,c:`家族`},
  {q:`teacher`,c:`先生`},
  {q:`player`,c:`選手，演奏者`},
  {q:`aunt`,c:`おば`},
  {q:`son`,c:`息子`},
  {q:`nurse`,c:`看護婦`},
  {q:`friend`,c:`友人`},
  {q:`uncle`,c:`おじ`},
  {q:`singer`,c:`歌手`},
  {q:`daughter`,c:`娘`},
  {q:`yard`,c:`中庭`},
  {q:`bank`,c:`銀行`},
  {q:`library`,c:`図書館`},
  {q:`hospital`,c:`病院`},
  {q:`hotel`,c:`ホテル`},
  {q:`village`,c:`村`},
  {q:`kitchen`,c:`台所`},
  {q:`park`,c:`公園`},
  {q:`city`,c:`市，都会`},
  {q:`church`,c:`教会`},
  {q:`school`,c:`学校`},
  {q:`country`,c:`国，いなか，地方`},
  {q:`office`,c:`事務所`},
  {q:`garden`,c:`庭`},
  {q:`town`,c:`町`},
  {q:`floor`,c:`床，階`},
  {q:`store`,c:`店`},
  {q:`station`,c:`駅`},
  {q:`house`,c:`家`},
  {q:`field`,c:`野原，競技場`},
  {q:`Japan`,c:`日本`},
  {q:`gate`,c:`門`},
  {q:`room`,c:`部屋`},
  {q:`America`,c:`アメリカ`},
  {q:`Australia`,c:`オーストラリア`},
  {q:`egg`,c:`卵`},
  {q:`apple`,c:`りんご`},
  {q:`lemon`,c:`レモン`},
  {q:`fruit`,c:`果物`},
  {q:`cake`,c:`ケーキ`},
  {q:`bread`,c:`パン`},
  {q:`orange`,c:`オレンジ`},
  {q:`milk`,c:`牛乳`},
  {q:`meal`,c:`食事`},
  {q:`breakfast`,c:`朝食`},
  {q:`lunch`,c:`昼食`},
  {q:`dinner`,c:`夕食`},
  {q:`supper`,c:`夕食`},
  {q:`glass`,c:`コップ，ガラス`},
  {q:`cup`,c:`カップ、コップ`},
  {q:`pot`,c:`ポット`},
  {q:`tree`,c:`木`},
  {q:`cow`,c:`雌牛`},
  {q:`cat`,c:`猫`},
  {q:`rose`,c:`バラ`},
  {q:`bird`,c:`鳥`},
  {q:`sheep`,c:`羊`},
  {q:`fish`,c:`魚`},
  {q:`dog`,c:`犬`},
  {q:`flower`,c:`花`},
  {q:`present`,c:`プレゼント`},
  {q:`way`,c:`道，方法`},
  {q:`west`,c:`西`},
  {q:`chance`,c:`機会`},
  {q:`age`,c:`年齢，時代`},
  {q:`right`,c:`右，権利`},
  {q:`half`,c:`半分`},
  {q:`north`,c:`北`},
  {q:`class`,c:`学級，授業`},
  {q:`danger`,c:`危険`},
  {q:`lot`,c:`たくさん`},
  {q:`south`,c:`南`},
  {q:`subject`,c:`科目，題目`},
  {q:`east`,c:`東`},
  {q:`number`,c:`数`},
  {q:`color`,c:`色`},
  {q:`line`,c:`線，列`},
  {q:`place`,c:`場所`},
  {q:`meter`,c:`メートル`},
  {q:`thing`,c:`こと・物`},
  {q:`name`,c:`名前`},
  {q:`science`,c:`科学`},
  {q:`left`,c:`左`},
  {q:`walk`,c:`散歩`},
  {q:`racket`,c:`ラケット`},
  {q:`basketball`,c:`バスケットボール`},
  {q:`baseball`,c:`野球`},
  {q:`tennis`,c:`テニス`},
  {q:`bat`,c:`バット`},
  {q:`mitt`,c:`ミット`},
  {q:`piano`,c:`ピアノ`},
  {q:`plane`,c:`飛行機`},
  {q:`bus`,c:`バス`},
  {q:`car`,c:`自動車`},
  {q:`boat`,c:`ボート`},
  {q:`bed`,c:`ベッド`},
  {q:`chair`,c:`いす`},
  {q:`door`,c:`ドア`},
  {q:`window`,c:`窓`},
  {q:`hand`,c:`手`},
  {q:`ear`,c:`耳`},
  {q:`hair`,c:`髪の毛`},
  {q:`mouth`,c:`口`},
  {q:`head`,c:`頭`},
  {q:`arm`,c:`腕`},
  {q:`body`,c:`からだ`},
  {q:`nose`,c:`鼻`},
  {q:`neck`,c:`首`},
  {q:`table`,c:`テーブル`},
  {q:`pen`,c:`ペン`},
  {q:`map`,c:`地図`},
  {q:`camera`,c:`カメラ`},
  {q:`picture`,c:`絵，写真`},
  {q:`stamp`,c:`切手`},
  {q:`book`,c:`本`},
  {q:`doll`,c:`人形`},
  {q:`bag`,c:`カバン`},
  {q:`diary`,c:`日記`},
  {q:`letter`,c:`手紙`},
  {q:`tape`,c:`テープ`},
  {q:`cap`,c:`帽子`},
  {q:`mail`,c:`郵便`},
  {q:`box`,c:`箱`},
  {q:`notebook`,c:`ノート`},
  {q:`pencil`,c:`鉛筆`},
  {q:`desk`,c:`机`},
  {q:`watch`,c:`腕時計`},
  {q:`homework`,c:`宿題`},
  {q:`work`,c:`仕事，作品`},
  {q:`wall`,c:`壁`},
  {q:`paper`,c:`紙`},

];

const WrongAns = [
  `少女`,
  `父`,
  `医者`,
  `パイロット`,
  `男の人`,
  `料理人`,
  `姉妹`,
  `少年`,
  `母`,
  `兄弟`,
  `女性`,
  `市民`,
  `親`,
  `学生`,
  `店員`,
  `家族`,
  `先生`,
  `選手，演奏者`,
  `おば`,
  `息子`,
  `看護婦`,
  `友人`,
  `おじ`,
  `歌手`,
  `娘`,
  `中庭`,
  `銀行`,
  `図書館`,
  `病院`,
  `ホテル`,
  `村`,
  `台所`,
  `公園`,
  `市，都会`,
  `教会`,
  `学校`,
  `国，いなか，地方`,
  `事務所`,
  `庭`,
  `町`,
  `床，階`,
  `店`,
  `駅`,
  `家`,
  `野原，競技場`,
  `日本`,
  `門`,
  `部屋`,
  `アメリカ`,
  `オーストラリア`,
  `卵`,
  `りんご`,
  `レモン`,
  `果物`,
  `ケーキ`,
  `パン`,
  `オレンジ`,
  `牛乳`,
  `食事`,
  `朝食`,
  `昼食`,
  `夕食`,
  `夕食`,
  `コップ，ガラス`,
  `カップ、コップ`,
  `ポット`,
  `木`,
  `雌牛`,
  `猫`,
  `バラ`,
  `鳥`,
  `羊`,
  `魚`,
  `犬`,
  `花`,
  `プレゼント`,
  `道，方法`,
  `西`,
  `機会`,
  `年齢，時代`,
  `右，権利`,
  `半分`,
  `北`,
  `学級，授業`,
  `危険`,
  `たくさん`,
  `南`,
  `科目，題目`,
  `東`,
  `数`,
  `色`,
  `線，列`,
  `場所`,
  `メートル`,
  `こと・物`,
  `名前`,
  `科学`,
  `左`,
  `散歩`,
  `ラケット`,
  `バスケットボール`,
  `野球`,
  `テニス`,
  `バット`,
  `ミット`,
  `ピアノ`,
  `飛行機`,
  `バス`,
  `自動車`,
  `ボート`,
  `ベッド`,
  `いす`,
  `ドア`,
  `窓`,
  `手`,
  `耳`,
  `髪の毛`,
  `口`,
  `頭`,
  `腕`,
  `からだ`,
  `鼻`,
  `首`,
  `テーブル`,
  `ペン`,
  `地図`,
  `カメラ`,
  `絵，写真`,
  `切手`,
  `本`,
  `人形`,
  `カバン`,
  `日記`,
  `手紙`,
  `テープ`,
  `帽子`,
  `郵便`,
  `箱`,
  `ノート`,
  `鉛筆`,
  `机`,
  `腕時計`,
  `宿題`,
  `仕事`,
  `壁`,
  `紙`,
];

const QuizVerb = [
  {q:`like`,c:`好む`},
  {q:`look`,c:`見る`},
  {q:`read`,c:`読む`},
  {q:`drink`,c:`飲む`},
  {q:`walk`,c:`歩く`},
  {q:`wash`,c:`洗う`},
  {q:`run`,c:`走る`},
  {q:`stop`,c:`止まる`},
  {q:`have`,c:`持っている，食べる`},
  {q:`wait`,c:`待つ`},
  {q:`collect`,c:`集める`},
  {q:`send`,c:`送る`},
  {q:`come`,c:`来る`},
  {q:`want`,c:`欲しい`},
  {q:`do`,c:`する`},
  {q:`make`,c:`作る`},
  {q:`ride`,c:`乗る`},
  {q:`enjoy`,c:`楽しむ`},
  {q:`play`,c:`遊ぶ，(スポーツを)をする`},
  {q:`sing`,c:`歌う`},
  {q:`speak`,c:`話す`},
  {q:`cook`,c:`料理する`},
  {q:`swim`,c:`泳ぐ`},
  {q:`write`,c:`書く`},
  {q:`use`,c:`使う`},
  {q:`catch`,c:`つかまえる`},
  {q:`open`,c:`開ける`},
  {q:`move`,c:`動く`},
  {q:`help`,c:`助ける`},
  {q:`buy`,c:`買う`},
  {q:`leave`,c:`去る，出て行く`},
  {q:`meet`,c:`会う`},
  {q:`live`,c:`住む`},
  {q:`work`,c:`働く`},
  {q:`go`,c:`行く`},
  {q:`know`,c:`知っている`},
  {q:`study`,c:`勉強する`},
  {q:`eat`,c:`食べる`},
  {q:`learn`,c:`学ぶ`},
  {q:`stand`,c:`立つ`},
  {q:`dance`,c:`踊る`},
  {q:`sell`,c:`売る`},
  {q:`arrive`,c:`到着する`},
  {q:`get`,c:`得る`},
  {q:`put`,c:`置く`},
  {q:`stay`,c:`滞在する`},
  {q:`try`,c:`試す`},
  {q:`give`,c:`与える`},
  {q:`visit`,c:`訪問する`},
  {q:`need`,c:`必要とする`},



]

const WrongVerb =[
  `好む`,
  `見る`,
  `読む`,
  `飲む`,
  `歩く`,
  `洗う`,
  `走る`,
  `止まる`,
  `持っている，食べる`,
  `待つ`,
  `集める`,
  `送る`,
  `来る`,
  `欲しい`,
  `する`,
  `作る`,
  `乗る`,
  `楽しむ`,
  `遊ぶ，(スポーツを)をする`,
  `歌う`,
  `話す`,
  `料理する`,
  `泳ぐ`,
  `書く`,
  `使う`,
  `つかまえる`,
  `開ける`,
  `動く`,
  `助ける`,
  `買う`,
  `去る，出て行く`,
  `会う`,
  `住む`,
  `働く`,
  `行く`,
  `知っている`,
  `勉強する`,
  `食べる`,
  `学ぶ`,
  `立つ`,
  `踊る`,
  `売る`,
  `到着する`,
  `得る`,
  `置く`,
  `滞在する`,
  `試す`,
  `与える`,
  `訪問する`,
  `必要とする`,


]

const QuizElse =[
  {q:`who`,c:`だれ`},
  {q:`what`,c:`何`},
  {q:`which`,c:`どちら`},
  {q:`whose`,c:`だれの(もの)`},
  {q:`where`,c:`どこに`},
  {q:`why`,c:`なぜ`},
  {q:`how`,c:`どのくらい`},
  {q:`what time`,c:`何時`},
  {q:`what day`,c:`何曜日`},
  {q:`what color`,c:`何色`},
  {q:`what sport`,c:`なんのスポーツ`},
  {q:`how old`,c:`何歳`},
  {q:`how long`,c:`どのくらい(長さ)`},
  {q:`how much`,c:`いくら`},
  {q:`how far`,c:`どれくらいの(きょり)`},
  {q:`how many`,c:`いくつの、何個の`},
  {q:`but`,c:`しかし、でも`},
  {q:`and`,c:`~と...、そして`},
  {q:`or`,c:`~か...`},
  {q:`can`,c:`~できる`},
  {q:`sorry`,c:`残念な`},
  {q:`honest`,c:`正直な`},
  {q:`poor`,c:`貧乏な`},
  {q:`up`,c:`上へ`},
  {q:`far`,c:`遠くに`},
  {q:`rich`,c:`金持ちの`},
  {q:`able`,c:`できる`},
  {q:`tall`,c:`背の高い`},
  {q:`clean`,c:`きれいな`},
  {q:`easy`,c:`やさしい`},
  {q:`some`,c:`いくつかの`},
  {q:`warm`,c:`温暖な`},
  {q:`cool`,c:`涼しい`},
  {q:`new`,c:`新しい`},
  {q:`junior`,c:`年下の，下級の`},
  {q:`hungry`,c:`空腹の`},
  {q:`ill`,c:`病気の`},
  {q:`fast`,c:`速く、速い`},
  {q:`home`,c:`家を(へ)`},
  {q:`famous`,c:`有名な`},
  {q:`strong`,c:`強い，じょうぶな`},
  {q:`big`,c:`大きい`},
  {q:`fine`,c:`すばらしい，元気な， 晴れた`},
  {q:`kind`,c:`親切な`},
  {q:`glad`,c:`うれしい`},
  {q:`good`,c:`良い`},
  {q:`young`,c:`若い`},
  {q:`happy`,c:`幸福な，楽しい`},
  {q:`busy`,c:`忙しい`},
  {q:`beautiful`,c:`美しい`},
  {q:`long`,c:`長い`},
  {q:`hot`,c:`暑い`},
  {q:`small`,c:`小さい`},
  {q:`best`,c:`一番良い`},
  {q:`bad`,c:`悪い`},
  {q:`fast`,c:`速い`},
  {q:`large`,c:`大きい，広い`},
  {q:`short`,c:`短い`},
  {q:`little`,c:`ちょっと`},
  {q:`old`,c:`年をとった，古い`},
  {q:`careful`,c:`注意深い`},
  {q:`cold`,c:`冷たい`},
  {q:`sad`,c:`悲しい`},
  {q:`TRUE`,c:`ほんとうの`},
  {q:`high`,c:`高い`},
  {q:`slow`,c:`遅い`},
  {q:`nice`,c:`よい`},
  {q:`sick`,c:`病気で(の)`},
  {q:`sometimes`,c:`時々`},
  {q:`often`,c:`しばしば`},
  {q:`early`,c:`早く`},
  {q:`always`,c:`いつも`},
  {q:`again`,c:`再び`},
  {q:`usually`,c:`ふつう`},
  {q:`soon`,c:`すぐに`},
  {q:`later`,c:`後で`},
  {q:`white`,c:`白い`},
  {q:`black`,c:`黒い`},
  {q:`blue`,c:`青い`},
  {q:`red`,c:`赤い`},
  {q:`green`,c:`緑の`},
  {q:`dark`,c:`暗い`},
  {q:`very`,c:`非常に`},
  {q:`next`,c:`次の`},
  {q:`too`,c:`~もまた，~すぎる`},
  {q:`much`,c:`多量の`},
  {q:`every`,c:`毎~`},
  {q:`many`,c:`多くの`},
  {q:`so`,c:`そんなに`},
  {q:`slowly`,c:`ゆっくりと`},
  {q:`well`,c:`よく，じょうずに`},
  {q:`together`,c:`一緒に`},
  {q:`also`,c:`もまた`},
  {q:`not`,c:`~でない`},


]
const WrongElse =[
  `冷たい`,
  `悲しい`,
  `ほんとうの`,
  `高い`,
  `遅い`,
  `よい`,
  `病気で(の)`,
  `時々`,
  `しばしば`,
  `早く`,
  `いつも`,
  `再び`,
  `ふつう`,
  `すぐに`,
  `後で`,
  `白い`,
  `黒い`,
  `青い`,
  `赤い`,
  `緑の`,
  `暗い`,
  `非常に`,
  `次の`,
  `~もまた，~すぎる`,
  `多量の`,
  `毎~`,
  `多くの`,
  `そんなに`,
  `ゆっくりと`,
  `よく，じょうずに`,
  `一緒に`,
  `もまた`,
  `~でない`,
  `働く`,
  `行く`,
  `知っている`,
  `勉強する`,
  `食べる`,
  `学ぶ`,
  `立つ`,
  `踊る`,
  `売る`,
  `到着する`,
  `得る`,
  `置く`,
  `滞在する`,
  `試す`,
  `与える`,
  `訪問する`,
  `美しい`,
  `長い`,
  `暑い`,
  `小さい`,
  `一番良い`,
  `悪い`,
  `速い`,
  `大きい，広い`,
  `短い`,
  `ちょっと`,
  `年をとった，古い`,
  `注意深い`,
  `冷たい`,
  `悲しい`,
  `ほんとうの`,
  `高い`,
  `遅い`,
  `よい`,
  `病気で(の)`,
  `時々`,
  `しばしば`,
  `早く`,
  `いつも`,
  `再び`,
  `ふつう`,
  `すぐに`,
  `後で`,
  `白い`,
  `黒い`,
  `青い`,
  `赤い`,
  `緑の`,
  `暗い`,
  `非常に`,
  `次の`,
  `~もまた，~すぎる`,
  `多量の`,
  `毎~`,
  `多くの`,
  `そんなに`,
  `ゆっくりと`,
  `よく，じょうずに`,
  `一緒に`,
  `もまた`,
  `~でない`,

]



function butotnClick(){location.reload();}
let button = document.getElementById('reset');
button.onclick = butotnClick;


let form = document.forms[0];
let selectbox = form.selectbox;

selectbox.addEventListener('change', ()=> {
 // console.log(selectbox.value);
}, false);


let a = 0;
let max = 100;
let e = 0;let f = 0;let g = 0;
let h = 0;



selectbox.onchange = function(){


if(selectbox.value === "1-10"){
a = 0; h = 8; e = 10;f = 10;g = 10;max =60; 

function Quizset () {
    const b = Math.floor(Math.random() * (max - e)) + e ;
    let c = Math.floor(Math.random() * (max - f)) + f ;
    let d = Math.floor(Math.random() * (max - g)) + g ;
  Qnum.textContent = `No.${a + 1}`;
  question.textContent = quizSet[a].q;

while(choice1.firstChild){
  choice1.removeChild(choice1.firstChild);
}

  item1.textContent = quizSet[a].c;
  const ul1 = document.querySelector('ul');
    ul1.appendChild(item1);
  
    item2.textContent = WrongAns[b];
    const ul = document.querySelector('ul');
      ul.appendChild(item2);
  
    item3.textContent = WrongAns[c];
    const ul2 = document.querySelector('ul');
      ul.appendChild(item3);
    
     item4.textContent = WrongAns[d];
     const ul3 = document.querySelector('ul');
       ul.appendChild(item4);


       function shuffle() {

        const x = Math.floor(Math.random() * 4 + 1) ;
        //console.log(x);
        
        if(x == 1){ 
          ul.insertBefore(item3,item1);
          ul.insertBefore(item2,item1);
          ul.insertBefore(item4,item1);
      
        }else if(x == 2){
          ul.insertBefore(item1,item4);
          ul.insertBefore(item2,item1);
        }else if(x == 3){
          ul.insertBefore(item1,item3);
          ul.insertBefore(item2,item1);
        }
        else{
          ul.insertBefore(item4,item2);
        }
      }
      
      shuffle();

      function checkAnswer(){
          
        let event = function(e){
          let t = e.target;
          if(t == item1){
            alert('正解👍');
            
          choice1.removeEventListener('click',event);
          if(a > h){
               alert(`合格!!`)
              location.reload();
          }else{
            a++;
          }
          Quizset();
      
        }else{

            alert(`不正解🙅 \n 答えは「${item1.textContent}」`); 
            alert(`やりなおしです😩`); 
            choice1.removeEventListener('click',event);
            a = 0; h = 8; e = 10;f = 10;g = 10;max =60; 
            Quizset();
          }};
  
        choice1.addEventListener('click',event,false);
                }
       checkAnswer();

}


Quizset();







}

else if(selectbox.value === "11-20"){
  
  a = 10; h = 18; e = 20;f = 20;g = 20;max =100; 
 
  const b = Math.floor(Math.random() * (max - e)) + e ;
  let c = Math.floor(Math.random() * (max - f)) + f ;
  let d = Math.floor(Math.random() * (max - g)) + g ;
  console.log(b);
    function Quizset () {
    Qnum.textContent = `No.${a + 1}`;
    question.textContent = quizSet[a].q;
  
  while(choice1.firstChild){
    choice1.removeChild(choice1.firstChild);
  }
  
    item1.textContent = quizSet[a].c;
    const ul1 = document.querySelector('ul');
      ul1.appendChild(item1);
    
      item2.textContent = WrongAns[b];
      const ul = document.querySelector('ul');
        ul.appendChild(item2);
    
      item3.textContent = WrongAns[c];
      const ul2 = document.querySelector('ul');
        ul.appendChild(item3);
      
       item4.textContent = WrongAns[d];
       const ul3 = document.querySelector('ul');
         ul.appendChild(item4);
  
  
         function shuffle() {
  
          const x = Math.floor(Math.random() * 4 + 1) ;
          //console.log(x);
          
          if(x == 1){ 
            ul.insertBefore(item3,item1);
            ul.insertBefore(item2,item1);
            ul.insertBefore(item4,item1);
        
          }else if(x == 2){
            ul.insertBefore(item1,item4);
            ul.insertBefore(item2,item1);
          }else if(x == 3){
            ul.insertBefore(item1,item3);
            ul.insertBefore(item2,item1);
          }
          else{
            ul.insertBefore(item4,item2);
          }
        }
        
        shuffle();
  
        function checkAnswer(){
            
          let event = function(e){
            let t = e.target;
            if(t == item1){
              
              alert("正解👍"); 
            choice1.removeEventListener('click',event);
            const b = Math.floor(Math.random() * (max - e)) + e ;
            let c = Math.floor(Math.random() * (max - f)) + f ;
            let d = Math.floor(Math.random() * (max - g)) + g ;



            if(a > h){
               alert(`合格!!`)

                
                location.reload();
            }else{
              a++;
            }
            Quizset();
        
          }else{
              alert(`不正解🙅 \n 答えは「${item1.textContent}」`); 
              alert(`やりなおしです😩`); 
              choice1.removeEventListener('click',event);
  
              location.reload();
            }};
    
          choice1.addEventListener('click',event,false);
                  }
         checkAnswer();
  
  }
  
  
  Quizset();
  
  
  




  }

  else if(selectbox.value === "21-30"){
    
    a = 20; h = 28; e = 30;f = 30;g = 30;max =80; 
  
      function Quizset () {
        const b = Math.floor(Math.random() * (max - e)) + e ;
        let c = Math.floor(Math.random() * (max - f)) + f ;
        let d = Math.floor(Math.random() * (max - g)) + g ;
        

      Qnum.textContent = `No.${a + 1}`;
      question.textContent = quizSet[a].q;
    
    while(choice1.firstChild){
      choice1.removeChild(choice1.firstChild);
    }
    
      item1.textContent = quizSet[a].c;
      const ul1 = document.querySelector('ul');
        ul1.appendChild(item1);
      
        item2.textContent = WrongAns[b];
        const ul = document.querySelector('ul');
          ul.appendChild(item2);
      
        item3.textContent = WrongAns[c];
        const ul2 = document.querySelector('ul');
          ul.appendChild(item3);
        
         item4.textContent = WrongAns[d];
         const ul3 = document.querySelector('ul');
           ul.appendChild(item4);
    
    
           function shuffle() {
    
            const x = Math.floor(Math.random() * 4 + 1) ;
            //console.log(x);
            
            if(x == 1){ 
              ul.insertBefore(item3,item1);
              ul.insertBefore(item2,item1);
              ul.insertBefore(item4,item1);
          
            }else if(x == 2){
              ul.insertBefore(item1,item4);
              ul.insertBefore(item2,item1);
            }else if(x == 3){
              ul.insertBefore(item1,item3);
              ul.insertBefore(item2,item1);
            }
            else{
              ul.insertBefore(item4,item2);
            }
          }
          
          shuffle();
    
          function checkAnswer(){
              
            let event = function(e){
              let t = e.target;
              if(t == item1){alert("正解👍"); 

              choice1.removeEventListener('click',event);

              if(a > h){
                 alert(`合格!!`)
                  location.reload();
              }else{
                a++;
              }
              Quizset();
          
            }else{
                alert(`不正解🙅 \n 答えは「${item1.textContent}」`); 
                alert(`やりなおしです😩`); 
                choice1.removeEventListener('click',event);
                a = 20; h = 28; e = 30;f = 30;g = 30;max =80; 
                Quizset();
              }};
      
            choice1.addEventListener('click',event,false);
                    }
           checkAnswer();
    
    }
    
    
    Quizset();
    
    
  
    }
  
    else if(selectbox.value === "31-40"){
      
      a = 30; h = 38; e = 40;f = 40;g = 40;max =90; 

        function Quizset () {

          const b = Math.floor(Math.random() * (max - e)) + e ;
          let c = Math.floor(Math.random() * (max - f)) + f ;
          let d = Math.floor(Math.random() * (max - g)) + g ;
          
        Qnum.textContent = `No.${a + 1}`;
        question.textContent = quizSet[a].q;
      
      while(choice1.firstChild){
        choice1.removeChild(choice1.firstChild);
      }
      
        item1.textContent = quizSet[a].c;
        const ul1 = document.querySelector('ul');
          ul1.appendChild(item1);
        
          item2.textContent = WrongAns[b];
          const ul = document.querySelector('ul');
            ul.appendChild(item2);
        
          item3.textContent = WrongAns[c];
          const ul2 = document.querySelector('ul');
            ul.appendChild(item3);
          
           item4.textContent = WrongAns[d];
           const ul3 = document.querySelector('ul');
             ul.appendChild(item4);
      
      
             function shuffle() {
      
              const x = Math.floor(Math.random() * 4 + 1) ;
              //console.log(x);
              
              if(x == 1){ 
                ul.insertBefore(item3,item1);
                ul.insertBefore(item2,item1);
                ul.insertBefore(item4,item1);
            
              }else if(x == 2){
                ul.insertBefore(item1,item4);
                ul.insertBefore(item2,item1);
              }else if(x == 3){
                ul.insertBefore(item1,item3);
                ul.insertBefore(item2,item1);
              }
              else{
                ul.insertBefore(item4,item2);
              }
            }
            
            shuffle();
      
            function checkAnswer(){
                
              let event = function(e){
                let t = e.target;
                if(t == item1){alert("正解👍"); 
                choice1.removeEventListener('click',event);
                if(a > h){
                   alert(`合格!!`)
                    location.reload();
                }else{
                  a++;
                }
                Quizset();
            
              }else{
                  alert(`不正解🙅 \n 答えは「${item1.textContent}」`); 
                  alert(`やりなおしです😩`); 
                  choice1.removeEventListener('click',event);
                  a = 30; h = 38; e = 40;f = 40;g = 40;max =90; 

                  Quizset ();
                }};
        
              choice1.addEventListener('click',event,false);
                      }
             checkAnswer();
      
      }
      
      
      Quizset();
      
    
      }
    
else if(selectbox.value === "41-50"){
        
        a = 40; h = 48; e = 50;f = 50;g = 50;max =100; 
        function Quizset () {
          const b = Math.floor(Math.random() * (max - e)) + e ;
          let c = Math.floor(Math.random() * (max - f)) + f ;
          let d = Math.floor(Math.random() * (max - g)) + g ;
          
          Qnum.textContent = `No.${a + 1}`;
          question.textContent = quizSet[a].q;
          
          while(choice1.firstChild){
          choice1.removeChild(choice1.firstChild);
        }
        
          item1.textContent = quizSet[a].c;
          const ul1 = document.querySelector('ul');
            ul1.appendChild(item1);
          
            item2.textContent = WrongAns[b];
            const ul = document.querySelector('ul');
              ul.appendChild(item2);
          
            item3.textContent = WrongAns[c];
            const ul2 = document.querySelector('ul');
              ul.appendChild(item3);
            
             item4.textContent = WrongAns[d];
             const ul3 = document.querySelector('ul');
               ul.appendChild(item4);
        
        
               function shuffle() {
        
                const x = Math.floor(Math.random() * 4 + 1) ;
                //console.log(x);
                
                if(x == 1){ 
                  ul.insertBefore(item3,item1);
                  ul.insertBefore(item2,item1);
                  ul.insertBefore(item4,item1);
              
                }else if(x == 2){
                  ul.insertBefore(item1,item4);
                  ul.insertBefore(item2,item1);
                }else if(x == 3){
                  ul.insertBefore(item1,item3);
                  ul.insertBefore(item2,item1);
                }
                else{
                  ul.insertBefore(item4,item2);
                }
              }
              
              shuffle();
        
              function checkAnswer(){
                  
                let event = function(e){
                  let t = e.target;
                  if(t == item1){alert("正解👍"); 
                  choice1.removeEventListener('click',event);
                  if(a > h){
                     alert(`合格!!`)
                      location.reload();
                  }else{
                    a++;
                  }
                  Quizset();
              
                }else{
                    alert(`不正解🙅 \n 答えは「${item1.textContent}」`); 
                    alert(`やりなおしです😩`); 
                    choice1.removeEventListener('click',event);
        
                    a = 40; h = 48; e = 50;f = 50;g = 50;max =100; 
                     Quizset ();
                  }};
          
                choice1.addEventListener('click',event,false);
                        }
               checkAnswer();
        
        }
        
        
        Quizset();
        
        
        
      
      
      
      
        }
      
else if(selectbox.value === "51-60"){
 
            a = 50; h = 58; e = 60;f = 60;g = 60;max =110; 
            function Quizset () {
              const b = Math.floor(Math.random() * (max - e)) + e ;
              let c = Math.floor(Math.random() * (max - f)) + f ;
              let d = Math.floor(Math.random() * (max - g)) + g ;
              
              Qnum.textContent = `No.${a + 1}`;
              question.textContent = quizSet[a].q;
            
            while(choice1.firstChild){
              choice1.removeChild(choice1.firstChild);
            }
            
              item1.textContent = quizSet[a].c;
              const ul1 = document.querySelector('ul');
                ul1.appendChild(item1);
              
                item2.textContent = WrongAns[b];
                const ul = document.querySelector('ul');
                  ul.appendChild(item2);
              
                item3.textContent = WrongAns[c];
                const ul2 = document.querySelector('ul');
                  ul.appendChild(item3);
                
                 item4.textContent = WrongAns[d];
                 const ul3 = document.querySelector('ul');
                   ul.appendChild(item4);
            
            
                   function shuffle() {
            
                    const x = Math.floor(Math.random() * 4 + 1) ;
                    //console.log(x);
                    
                    if(x == 1){ 
                      ul.insertBefore(item3,item1);
                      ul.insertBefore(item2,item1);
                      ul.insertBefore(item4,item1);
                  
                    }else if(x == 2){
                      ul.insertBefore(item1,item4);
                      ul.insertBefore(item2,item1);
                    }else if(x == 3){
                      ul.insertBefore(item1,item3);
                      ul.insertBefore(item2,item1);
                    }
                    else{
                      ul.insertBefore(item4,item2);
                    }
                  }
                  
                  shuffle();
            
                  function checkAnswer(){
                      
                    let event = function(e){
                      let t = e.target;
                      if(t == item1){alert("正解👍"); 
                      choice1.removeEventListener('click',event);
                      if(a > h){
                         alert(`合格!!`)
                          location.reload();
                      }else{
                        a++;
                      }
                      Quizset();
                  
                    }else{
                        alert(`不正解🙅 \n 答えは「${item1.textContent}」`); 
                        alert(`やりなおしです😩`); 
                        choice1.removeEventListener('click',event);
            
                        a = 50; h = 58; e = 60;f = 60;g = 60;max =110; 
                         Quizset () ;
                      }};
              
                    choice1.addEventListener('click',event,false);
                            }
                   checkAnswer();
            
            }
            
            
            Quizset();
            
            
            
          
          
          
          
            }
          
 else if(selectbox.value === "61-70"){
              
              a = 60; h = 68; e = 0;f = 0;g = 0;max =50; 

              function Quizset () {
                const b = Math.floor(Math.random() * (max - e)) + e ;
                let c = Math.floor(Math.random() * (max - f)) + f ;
                let d = Math.floor(Math.random() * (max - g)) + g ;
                
                Qnum.textContent = `No.${a + 1}`;
                question.textContent = quizSet[a].q;
              
              while(choice1.firstChild){
                choice1.removeChild(choice1.firstChild);
              }
              
                item1.textContent = quizSet[a].c;
                const ul1 = document.querySelector('ul');
                  ul1.appendChild(item1);
                
                  item2.textContent = WrongAns[b];
                  const ul = document.querySelector('ul');
                    ul.appendChild(item2);
                
                  item3.textContent = WrongAns[c];
                  const ul2 = document.querySelector('ul');
                    ul.appendChild(item3);
                  
                   item4.textContent = WrongAns[d];
                   const ul3 = document.querySelector('ul');
                     ul.appendChild(item4);
              
              
                     function shuffle() {
              
                      const x = Math.floor(Math.random() * 4 + 1) ;
                      //console.log(x);
                      
                      if(x == 1){ 
                        ul.insertBefore(item3,item1);
                        ul.insertBefore(item2,item1);
                        ul.insertBefore(item4,item1);
                    
                      }else if(x == 2){
                        ul.insertBefore(item1,item4);
                        ul.insertBefore(item2,item1);
                      }else if(x == 3){
                        ul.insertBefore(item1,item3);
                        ul.insertBefore(item2,item1);
                      }
                      else{
                        ul.insertBefore(item4,item2);
                      }
                    }
                    
                    shuffle();
              
                    function checkAnswer(){
                        
                      let event = function(e){
                        let t = e.target;
                        if(t == item1){alert("正解👍"); 
                        choice1.removeEventListener('click',event);
                        if(a > h){
                           alert(`合格!!`)
                            location.reload();
                        }else{
                          a++;
                        }
                        Quizset();
                    
                      }else{
                          alert(`不正解🙅 \n 答えは「${item1.textContent}」`); 
                          alert(`やりなおしです😩`); 
                          choice1.removeEventListener('click',event);
                          a = 60; h = 68; e = 0;f = 0;g = 0;max =50; 
                          Quizset();
                        }};
                
                      choice1.addEventListener('click',event,false);
                              }
                     checkAnswer();
              
              }
              
              
              Quizset();
              
              
              
            
            
            
            
              }
            
else if(selectbox.value === "71-80"){
                
                a = 70; h = 78;  e = 0;f = 0;g = 0;max =60;
                function Quizset () {
                    const b = Math.floor(Math.random() * (max - e)) + e ;
                    let c = Math.floor(Math.random() * (max - f)) + f ;
                    let d = Math.floor(Math.random() * (max - g)) + g ;
                    
                  Qnum.textContent = `No.${a + 1}`;
                  question.textContent = quizSet[a].q;
                
                while(choice1.firstChild){
                  choice1.removeChild(choice1.firstChild);
                }
                
                  item1.textContent = quizSet[a].c;
                  const ul1 = document.querySelector('ul');
                    ul1.appendChild(item1);
                  
                    item2.textContent = WrongAns[b];
                    const ul = document.querySelector('ul');
                      ul.appendChild(item2);
                  
                    item3.textContent = WrongAns[c];
                    const ul2 = document.querySelector('ul');
                      ul.appendChild(item3);
                    
                     item4.textContent = WrongAns[d];
                     const ul3 = document.querySelector('ul');
                       ul.appendChild(item4);
                
                
                       function shuffle() {
                
                        const x = Math.floor(Math.random() * 4 + 1) ;
                        //console.log(x);
                        
                        if(x == 1){ 
                          ul.insertBefore(item3,item1);
                          ul.insertBefore(item2,item1);
                          ul.insertBefore(item4,item1);
                      
                        }else if(x == 2){
                          ul.insertBefore(item1,item4);
                          ul.insertBefore(item2,item1);
                        }else if(x == 3){
                          ul.insertBefore(item1,item3);
                          ul.insertBefore(item2,item1);
                        }
                        else{
                          ul.insertBefore(item4,item2);
                        }
                      }
                      
                      shuffle();
                
                      function checkAnswer(){
                          
                        let event = function(e){
                          let t = e.target;
                          if(t == item1){alert("正解👍"); 
                          choice1.removeEventListener('click',event);
                          if(a > h){
                             alert(`合格!!`)
                              location.reload();
                          }else{
                            a++;
                          }
                          Quizset();
                      
                        }else{
                            alert(`不正解🙅 \n 答えは「${item1.textContent}」`); 
                            alert(`やりなおしです😩`); 
                            choice1.removeEventListener('click',event);
                            a = 70; h = 78;  e = 0;f = 0;g = 0;max =60;
                            Quizset ();
                          }};
                  
                        choice1.addEventListener('click',event,false);
                                }
                       checkAnswer();
                
                }
                
                
                Quizset();
                
                
                
              
              
              
              
                }
              
else if(selectbox.value === "81-90"){
                  
                  a = 80; h = 88;  e = 0;f = 0;g = 0;max =70;
                  function Quizset () {
                    const b = Math.floor(Math.random() * (max - e)) + e ;
                    let c = Math.floor(Math.random() * (max - f)) + f ;
                    let d = Math.floor(Math.random() * (max - g)) + g ;
                    
                    Qnum.textContent = `No.${a + 1}`;
                    question.textContent = quizSet[a].q;
                  
                  while(choice1.firstChild){
                    choice1.removeChild(choice1.firstChild);
                  }
                  
                    item1.textContent = quizSet[a].c;
                    const ul1 = document.querySelector('ul');
                      ul1.appendChild(item1);
                    
                      item2.textContent = WrongAns[b];
                      const ul = document.querySelector('ul');
                        ul.appendChild(item2);
                    
                      item3.textContent = WrongAns[c];
                      const ul2 = document.querySelector('ul');
                        ul.appendChild(item3);
                      
                       item4.textContent = WrongAns[d];
                       const ul3 = document.querySelector('ul');
                         ul.appendChild(item4);
                  
                  
                         function shuffle() {
                  
                          const x = Math.floor(Math.random() * 4 + 1) ;
                          //console.log(x);
                          
                          if(x == 1){ 
                            ul.insertBefore(item3,item1);
                            ul.insertBefore(item2,item1);
                            ul.insertBefore(item4,item1);
                        
                          }else if(x == 2){
                            ul.insertBefore(item1,item4);
                            ul.insertBefore(item2,item1);
                          }else if(x == 3){
                            ul.insertBefore(item1,item3);
                            ul.insertBefore(item2,item1);
                          }
                          else{
                            ul.insertBefore(item4,item2);
                          }
                        }
                        
                        shuffle();
                  
                        function checkAnswer(){
                            
                          let event = function(e){
                            let t = e.target;
                            if(t == item1){alert("正解👍"); 
                            choice1.removeEventListener('click',event);
                            if(a > h){
                               alert(`合格!!`)
                                location.reload();
                            }else{
                              a++;
                            }
                            Quizset();
                        
                          }else{
                              alert(`不正解🙅 \n 答えは「${item1.textContent}」`); 
                              alert(`やりなおしです😩`); 
                              choice1.removeEventListener('click',event);
                              a = 80; h = 88;  e = 0;f = 0;g = 0;max =70;
                              Quizset () ;
                            }};
                    
                          choice1.addEventListener('click',event,false);
                                  }
                         checkAnswer();
                  
                  }
                  
                  
                  Quizset();
                  
                  
                  
                
                
                
                
                  }
                
else if(selectbox.value === "91-100"){
                    
                    a = 90; h = 98; e = 0;f = 0;g = 0;max =70; 
                    function Quizset () {
                        const b = Math.floor(Math.random() * (max - e)) + e ;
                        let c = Math.floor(Math.random() * (max - f)) + f ;
                        let d = Math.floor(Math.random() * (max - g)) + g ;
                        
                      Qnum.textContent = `No.${a + 1}`;
                      question.textContent = quizSet[a].q;
                    
                    while(choice1.firstChild){
                      choice1.removeChild(choice1.firstChild);
                    }
                    
                      item1.textContent = quizSet[a].c;
                      const ul1 = document.querySelector('ul');
                        ul1.appendChild(item1);
                      
                        item2.textContent = WrongAns[b];
                        const ul = document.querySelector('ul');
                          ul.appendChild(item2);
                      
                        item3.textContent = WrongAns[c];
                        const ul2 = document.querySelector('ul');
                          ul.appendChild(item3);
                        
                         item4.textContent = WrongAns[d];
                         const ul3 = document.querySelector('ul');
                           ul.appendChild(item4);
                    
                    
                           function shuffle() {
                    
                            const x = Math.floor(Math.random() * 4 + 1) ;
                            //console.log(x);
                            
                            if(x == 1){ 
                              ul.insertBefore(item3,item1);
                              ul.insertBefore(item2,item1);
                              ul.insertBefore(item4,item1);
                          
                            }else if(x == 2){
                              ul.insertBefore(item1,item4);
                              ul.insertBefore(item2,item1);
                            }else if(x == 3){
                              ul.insertBefore(item1,item3);
                              ul.insertBefore(item2,item1);
                            }
                            else{
                              ul.insertBefore(item4,item2);
                            }
                          }
                          
                          shuffle();
                    
                          function checkAnswer(){
                              
                            let event = function(e){
                              let t = e.target;
                              if(t == item1){alert("正解👍"); 
                              choice1.removeEventListener('click',event);
                              if(a > h){
                                 alert(`合格!!`)
                                  location.reload();
                              }else{
                                a++;
                              }
                              Quizset();
                          
                            }else{
                                alert(`不正解🙅 \n 答えは「${item1.textContent}」`); 
                                alert(`やりなおしです😩`); 
                                choice1.removeEventListener('click',event);
                                a = 90; h = 98; e = 0;f = 0;g = 0;max =70; 
                               Quizset ();
                              }};
                      
                            choice1.addEventListener('click',event,false);
                                    }
                           checkAnswer();
                    
                    }
                    
                    
                    Quizset();
                    
                    
                    
                  
                  
                  
                  
                    }
                  
else if(selectbox.value === "101-110"){
                      
                      a = 100; h = 108; e = 30;f = 30;g = 30;max =90; 
                      const b = Math.floor(Math.random() * (max - e)) + e ;
                      let c = Math.floor(Math.random() * (max - f)) + f ;
                      let d = Math.floor(Math.random() * (max - g)) + g ;
                      
                        function Quizset () {
                        Qnum.textContent = `No.${a + 1}`;
                        question.textContent = quizSet[a].q;
                      
                      while(choice1.firstChild){
                        choice1.removeChild(choice1.firstChild);
                      }
                      
                        item1.textContent = quizSet[a].c;
                        const ul1 = document.querySelector('ul');
                          ul1.appendChild(item1);
                        
                          item2.textContent = WrongAns[b];
                          const ul = document.querySelector('ul');
                            ul.appendChild(item2);
                        
                          item3.textContent = WrongAns[c];
                          const ul2 = document.querySelector('ul');
                            ul.appendChild(item3);
                          
                           item4.textContent = WrongAns[d];
                           const ul3 = document.querySelector('ul');
                             ul.appendChild(item4);
                      
                      
                             function shuffle() {
                      
                              const x = Math.floor(Math.random() * 4 + 1) ;
                              //console.log(x);
                              
                              if(x == 1){ 
                                ul.insertBefore(item3,item1);
                                ul.insertBefore(item2,item1);
                                ul.insertBefore(item4,item1);
                            
                              }else if(x == 2){
                                ul.insertBefore(item1,item4);
                                ul.insertBefore(item2,item1);
                              }else if(x == 3){
                                ul.insertBefore(item1,item3);
                                ul.insertBefore(item2,item1);
                              }
                              else{
                                ul.insertBefore(item4,item2);
                              }
                            }
                            
                            shuffle();
                      
                            function checkAnswer(){
                                
                              let event = function(e){
                                let t = e.target;
                                if(t == item1){alert("正解👍"); 
                                choice1.removeEventListener('click',event);
                                if(a > h){
                                   alert(`合格!!`)
                                    location.reload();
                                }else{
                                  a++;
                                }
                                Quizset();
                            
                              }else{
                                  alert(`不正解🙅 \n 答えは「${item1.textContent}」`); 
                                  alert(`やりなおしです😩`); 
                                  choice1.removeEventListener('click',event);
                                  a = 100; h = 108; e = 30;f = 30;g = 30;max =90; 
                                  Quizset();
                                }};
                        
                              choice1.addEventListener('click',event,false);
                                      }
                             checkAnswer();
                      
                      }
                      
                      
                      Quizset();
                      
                      
                      
                    
                    
                    
                    
                      }
                    
else if(selectbox.value === "111-120"){
                        
                        a = 110; h = 118; e = 40;f = 40;g = 40;max =100; 
                        function Quizset () {
                            const b = Math.floor(Math.random() * (max - e)) + e ;
                            let c = Math.floor(Math.random() * (max - f)) + f ;
                            let d = Math.floor(Math.random() * (max - g)) + g ;
                            
                          Qnum.textContent = `No.${a + 1}`;
                          question.textContent = quizSet[a].q;
                        
                        while(choice1.firstChild){
                          choice1.removeChild(choice1.firstChild);
                        }
                        
                          item1.textContent = quizSet[a].c;
                          const ul1 = document.querySelector('ul');
                            ul1.appendChild(item1);
                          
                            item2.textContent = WrongAns[b];
                            const ul = document.querySelector('ul');
                              ul.appendChild(item2);
                          
                            item3.textContent = WrongAns[c];
                            const ul2 = document.querySelector('ul');
                              ul.appendChild(item3);
                            
                             item4.textContent = WrongAns[d];
                             const ul3 = document.querySelector('ul');
                               ul.appendChild(item4);
                        
                        
                               function shuffle() {
                        
                                const x = Math.floor(Math.random() * 4 + 1) ;
                                //console.log(x);
                                
                                if(x == 1){ 
                                  ul.insertBefore(item3,item1);
                                  ul.insertBefore(item2,item1);
                                  ul.insertBefore(item4,item1);
                              
                                }else if(x == 2){
                                  ul.insertBefore(item1,item4);
                                  ul.insertBefore(item2,item1);
                                }else if(x == 3){
                                  ul.insertBefore(item1,item3);
                                  ul.insertBefore(item2,item1);
                                }
                                else{
                                  ul.insertBefore(item4,item2);
                                }
                              }
                              
                              shuffle();
                        
                              function checkAnswer(){
                                  
                                let event = function(e){
                                  let t = e.target;
                                  if(t == item1){alert("正解👍"); 
                                  choice1.removeEventListener('click',event);
                                  if(a > h){
                                     alert(`合格!!`)
                                      location.reload();
                                  }else{
                                    a++;
                                  }
                                  Quizset();
                              
                                }else{
                                    alert(`不正解🙅 \n 答えは「${item1.textContent}」`); 
                                    alert(`やりなおしです😩`); 
                                    choice1.removeEventListener('click',event);
                                    a = 110; h = 118; e = 40;f = 40;g = 40;max =100; 
                                    Quizset () ;
                                  }};
                          
                                choice1.addEventListener('click',event,false);
                                        }
                               checkAnswer();
                        
                        }
                        
                        
                        Quizset();
                        
                        
                        
                      
                      
                      
                      
                        }
                                               
else if(selectbox.value === "121-130"){
                          
                          a = 120; h = 128; e = 30;f = 30;g = 30;max =90; 
                          function Quizset () {
                              const b = Math.floor(Math.random() * (max - e)) + e ;
                              let c = Math.floor(Math.random() * (max - f)) + f ;
                              let d = Math.floor(Math.random() * (max - g)) + g ;
                              
                            Qnum.textContent = `No.${a + 1}`;
                            question.textContent = quizSet[a].q;
                          
                          while(choice1.firstChild){
                            choice1.removeChild(choice1.firstChild);
                          }
                          
                            item1.textContent = quizSet[a].c;
                            const ul1 = document.querySelector('ul');
                              ul1.appendChild(item1);
                            
                              item2.textContent = WrongAns[b];
                              const ul = document.querySelector('ul');
                                ul.appendChild(item2);
                            
                              item3.textContent = WrongAns[c];
                              const ul2 = document.querySelector('ul');
                                ul.appendChild(item3);
                              
                               item4.textContent = WrongAns[d];
                               const ul3 = document.querySelector('ul');
                                 ul.appendChild(item4);
                          
                          
                                 function shuffle() {
                          
                                  const x = Math.floor(Math.random() * 4 + 1) ;
                                  //console.log(x);
                                  
                                  if(x == 1){ 
                                    ul.insertBefore(item3,item1);
                                    ul.insertBefore(item2,item1);
                                    ul.insertBefore(item4,item1);
                                
                                  }else if(x == 2){
                                    ul.insertBefore(item1,item4);
                                    ul.insertBefore(item2,item1);
                                  }else if(x == 3){
                                    ul.insertBefore(item1,item3);
                                    ul.insertBefore(item2,item1);
                                  }
                                  else{
                                    ul.insertBefore(item4,item2);
                                  }
                                }
                                
                                shuffle();
                          
                                function checkAnswer(){
                                    
                                  let event = function(e){
                                    let t = e.target;
                                    if(t == item1){alert("正解👍"); 
                                    choice1.removeEventListener('click',event);
                                    if(a > h){
                                       alert(`合格!!`)
                                        location.reload();
                                    }else{
                                      a++;
                                    }
                                    Quizset();
                                
                                  }else{
                                      alert(`不正解🙅 \n 答えは「${item1.textContent}」`); 
                                      alert(`やりなおしです😩`); 
                                      choice1.removeEventListener('click',event);
                                      a = 120; h = 128; e = 30;f = 30;g = 30;max =90; 
                                      Quizset();
                                    }};
                            
                                  choice1.addEventListener('click',event,false);
                                          }
                                 checkAnswer();
                          
                          }
                          
                          
                          Quizset();
                          
                          
                          
                        
                        
                        
                        
                          }
                        
else if(selectbox.value === "131-140"){
                            
                            a = 130; h = 138; e = 40;f = 40;g = 40;max =120; 
                            function Quizset () {
                                const b = Math.floor(Math.random() * (max - e)) + e ;
                                let c = Math.floor(Math.random() * (max - f)) + f ;
                                let d = Math.floor(Math.random() * (max - g)) + g ;
                                
                              Qnum.textContent = `No.${a + 1}`;
                              question.textContent = quizSet[a].q;
                            
                            while(choice1.firstChild){
                              choice1.removeChild(choice1.firstChild);
                            }
                            
                              item1.textContent = quizSet[a].c;
                              const ul1 = document.querySelector('ul');
                                ul1.appendChild(item1);
                              
                                item2.textContent = WrongAns[b];
                                const ul = document.querySelector('ul');
                                  ul.appendChild(item2);
                              
                                item3.textContent = WrongAns[c];
                                const ul2 = document.querySelector('ul');
                                  ul.appendChild(item3);
                                
                                 item4.textContent = WrongAns[d];
                                 const ul3 = document.querySelector('ul');
                                   ul.appendChild(item4);
                            
                            
                                   function shuffle() {
                            
                                    const x = Math.floor(Math.random() * 4 + 1) ;
                                    //console.log(x);
                                    
                                    if(x == 1){ 
                                      ul.insertBefore(item3,item1);
                                      ul.insertBefore(item2,item1);
                                      ul.insertBefore(item4,item1);
                                  
                                    }else if(x == 2){
                                      ul.insertBefore(item1,item4);
                                      ul.insertBefore(item2,item1);
                                    }else if(x == 3){
                                      ul.insertBefore(item1,item3);
                                      ul.insertBefore(item2,item1);
                                    }
                                    else{
                                      ul.insertBefore(item4,item2);
                                    }
                                  }
                                  
                                  shuffle();
                            
                                  function checkAnswer(){
                                      
                                    let event = function(e){
                                      let t = e.target;
                                      if(t == item1){alert("正解👍"); 
                                      choice1.removeEventListener('click',event);
                                      if(a > h){
                                         alert(`合格!!`)
                                          location.reload();
                                      }else{
                                        a++;
                                      }
                                      Quizset();
                                  
                                    }else{
                                        alert(`不正解🙅 \n 答えは「${item1.textContent}」`); 
                                        alert(`やりなおしです😩`); 
                                        choice1.removeEventListener('click',event);
                                        a = 130; h = 138; e = 40;f = 40;g = 40;max =120; 
                                        Quizset();
                                      }};
                              
                                    choice1.addEventListener('click',event,false);
                                            }
                                   checkAnswer();
                            
                            }
                            
                            
                            Quizset();
                            
                            
                            
                          
                          
                          
                          
                            }
                                                   
else if(selectbox.value === "141-150"){
                              
                              a = 140; h = 148; e = 40;f = 40;g = 40;max =120; 
                              function Quizset () {
                                  const b = Math.floor(Math.random() * (max - e)) + e ;
                                  let c = Math.floor(Math.random() * (max - f)) + f ;
                                  let d = Math.floor(Math.random() * (max - g)) + g ;
                                  
                                Qnum.textContent = `No.${a + 1}`;
                                question.textContent = quizSet[a].q;
                              
                              while(choice1.firstChild){
                                choice1.removeChild(choice1.firstChild);
                              }
                              
                                item1.textContent = quizSet[a].c;
                                const ul1 = document.querySelector('ul');
                                  ul1.appendChild(item1);
                                
                                  item2.textContent = WrongAns[b];
                                  const ul = document.querySelector('ul');
                                    ul.appendChild(item2);
                                
                                  item3.textContent = WrongAns[c];
                                  const ul2 = document.querySelector('ul');
                                    ul.appendChild(item3);
                                  
                                   item4.textContent = WrongAns[d];
                                   const ul3 = document.querySelector('ul');
                                     ul.appendChild(item4);
                              
                              
                                     function shuffle() {
                              
                                      const x = Math.floor(Math.random() * 4 + 1) ;
                                      //console.log(x);
                                      
                                      if(x == 1){ 
                                        ul.insertBefore(item3,item1);
                                        ul.insertBefore(item2,item1);
                                        ul.insertBefore(item4,item1);
                                    
                                      }else if(x == 2){
                                        ul.insertBefore(item1,item4);
                                        ul.insertBefore(item2,item1);
                                      }else if(x == 3){
                                        ul.insertBefore(item1,item3);
                                        ul.insertBefore(item2,item1);
                                      }
                                      else{
                                        ul.insertBefore(item4,item2);
                                      }
                                    }
                                    
                                    shuffle();
                              
                                    function checkAnswer(){
                                        
                                      let event = function(e){
                                        let t = e.target;
                                        if(t == item1){alert("正解👍"); 
                                        choice1.removeEventListener('click',event);
                                        if(a > h){
                                           alert(`合格!!`)
                                            location.reload();
                                        }else{
                                          a++;
                                        }
                                        Quizset();
                                    
                                      }else{
                                          alert(`不正解🙅 \n 答えは「${item1.textContent}」`); 
                                          alert(`やりなおしです😩`); 
                                          choice1.removeEventListener('click',event);
                                          a = 140; h = 148; e = 40;f = 40;g = 40;max =120; 
                                          Quizset();
                                        }};
                                
                                      choice1.addEventListener('click',event,false);
                                              }
                                     checkAnswer();
                              
                              }
                              
                              
                              Quizset();
                              
                              
                              
                            
                            
                            
                            
                              }
                                                     
                            
 
  else{

    location.reload();
  }
 


}

 
let selectbox1 = form.selectbox1;

selectbox1.addEventListener('change', ()=> {
 // console.log(selectbox.value);
}, false);


selectbox1.onchange = function(){

if(selectbox1.value === "verb1"){
  
  a = 0; h = 8; e = 10;f = 10;g = 10;max =50; 
  function Quizset () {
      const b = Math.floor(Math.random() * (max - e)) + e ;
      let c = Math.floor(Math.random() * (max - f)) + f ;
      let d = Math.floor(Math.random() * (max - g)) + g ;
      
    Qnum.textContent = `No.${a + 1}`;
    question.textContent = QuizVerb[a].q;
  
  while(choice1.firstChild){
    choice1.removeChild(choice1.firstChild);
  }
  
    item1.textContent = QuizVerb[a].c;
    const ul1 = document.querySelector('ul');
      ul1.appendChild(item1);
    
      item2.textContent = WrongVerb[b];
      const ul = document.querySelector('ul');
        ul.appendChild(item2);
    
      item3.textContent = WrongVerb[c];
      const ul2 = document.querySelector('ul');
        ul.appendChild(item3);
      
       item4.textContent = WrongVerb[d];
       const ul3 = document.querySelector('ul');
         ul.appendChild(item4);
  
  
         function shuffle() {
  
          const x = Math.floor(Math.random() * 4 + 1) ;
          //console.log(x);
          
          if(x == 1){ 
            ul.insertBefore(item3,item1);
            ul.insertBefore(item2,item1);
            ul.insertBefore(item4,item1);
        
          }else if(x == 2){
            ul.insertBefore(item1,item4);
            ul.insertBefore(item2,item1);
          }else if(x == 3){
            ul.insertBefore(item1,item3);
            ul.insertBefore(item2,item1);
          }
          else{
            ul.insertBefore(item4,item2);
          }
        }
        
        shuffle();
  
        function checkAnswer(){
            
          let event = function(e){
            let t = e.target;
            if(t == item1){alert("正解👍"); 
            choice1.removeEventListener('click',event);
            if(a > h){
               alert(`合格!!`)
                location.reload();
            }else{
              a++;
            }
            Quizset();
        
          }else{
              alert(`不正解🙅 \n 答えは「${item1.textContent}」`); 
              alert(`やりなおしです😩`); 
              choice1.removeEventListener('click',event);
              a = 0; h = 8; e = 10;f = 10;g = 10;max =50; 
              Quizset();
            }};
    
          choice1.addEventListener('click',event,false);
                  }
         checkAnswer();
  
  }
  
  
  Quizset();
  
  
  




  }

else if(selectbox1.value === "verb2"){
  
  a = 10; h = 18; e = 20;f = 20;g = 20;max =50; 
  function Quizset () {
      const b = Math.floor(Math.random() * (max - e)) + e ;
      let c = Math.floor(Math.random() * (max - f)) + f ;
      let d = Math.floor(Math.random() * (max - g)) + g ;
      
    Qnum.textContent = `No.${a + 1}`;
    question.textContent = QuizVerb[a].q;
  
  while(choice1.firstChild){
    choice1.removeChild(choice1.firstChild);
  }
  
    item1.textContent = QuizVerb[a].c;
    const ul1 = document.querySelector('ul');
      ul1.appendChild(item1);
    
      item2.textContent = WrongVerb[b];
      const ul = document.querySelector('ul');
        ul.appendChild(item2);
    
      item3.textContent = WrongVerb[c];
      const ul2 = document.querySelector('ul');
        ul.appendChild(item3);
      
       item4.textContent = WrongVerb[d];
       const ul3 = document.querySelector('ul');
         ul.appendChild(item4);
  
  
         function shuffle() {
  
          const x = Math.floor(Math.random() * 4 + 1) ;
          //console.log(x);
          
          if(x == 1){ 
            ul.insertBefore(item3,item1);
            ul.insertBefore(item2,item1);
            ul.insertBefore(item4,item1);
        
          }else if(x == 2){
            ul.insertBefore(item1,item4);
            ul.insertBefore(item2,item1);
          }else if(x == 3){
            ul.insertBefore(item1,item3);
            ul.insertBefore(item2,item1);
          }
          else{
            ul.insertBefore(item4,item2);
          }
        }
        
        shuffle();
  
        function checkAnswer(){
            
          let event = function(e){
            let t = e.target;
            if(t == item1){alert("正解👍"); 
            choice1.removeEventListener('click',event);
            if(a > h){
               alert(`合格!!`)
                location.reload();
            }else{
              a++;
            }
            Quizset();
        
          }else{
              alert(`不正解🙅 \n 答えは「${item1.textContent}」`); 
              alert(`やりなおしです😩`); 
              choice1.removeEventListener('click',event);
              a = 10; h = 18; e = 20;f = 20;g = 20;max =50;
              Quizset();
            }};
    
          choice1.addEventListener('click',event,false);
                  }
         checkAnswer();
  
  }
  
  
  Quizset();
  
  
  




  }
else if(selectbox1.value === "verb3"){
    
    a = 20; h = 28; e = 30;f = 30;g = 30;max =50; 
    function Quizset () {
        const b = Math.floor(Math.random() * (max - e)) + e ;
        let c = Math.floor(Math.random() * (max - f)) + f ;
        let d = Math.floor(Math.random() * (max - g)) + g ;
        
      Qnum.textContent = `No.${a + 1}`;
      question.textContent = QuizVerb[a].q;
    
    while(choice1.firstChild){
      choice1.removeChild(choice1.firstChild);
    }
    
      item1.textContent = QuizVerb[a].c;
      const ul1 = document.querySelector('ul');
        ul1.appendChild(item1);
      
        item2.textContent = WrongVerb[b];
        const ul = document.querySelector('ul');
          ul.appendChild(item2);
      
        item3.textContent = WrongVerb[c];
        const ul2 = document.querySelector('ul');
          ul.appendChild(item3);
        
         item4.textContent = WrongVerb[d];
         const ul3 = document.querySelector('ul');
           ul.appendChild(item4);
    
    
           function shuffle() {
    
            const x = Math.floor(Math.random() * 4 + 1) ;
            //console.log(x);
            
            if(x == 1){ 
              ul.insertBefore(item3,item1);
              ul.insertBefore(item2,item1);
              ul.insertBefore(item4,item1);
          
            }else if(x == 2){
              ul.insertBefore(item1,item4);
              ul.insertBefore(item2,item1);
            }else if(x == 3){
              ul.insertBefore(item1,item3);
              ul.insertBefore(item2,item1);
            }
            else{
              ul.insertBefore(item4,item2);
            }
          }
          
          shuffle();
    
          function checkAnswer(){
              
            let event = function(e){
              let t = e.target;
              if(t == item1){alert("正解👍"); 
              choice1.removeEventListener('click',event);
              if(a > h){
                 alert(`合格!!`)
                  location.reload();
              }else{
                a++;
              }
              Quizset();
          
            }else{
                alert(`不正解🙅 \n 答えは「${item1.textContent}」`); 
                alert(`やりなおしです😩`); 
                choice1.removeEventListener('click',event);
                a = 20; h = 28; e = 30;f = 30;g = 30;max =50; 
                Quizset();
              }};
      
            choice1.addEventListener('click',event,false);
                    }
           checkAnswer();
    
    }
    
    
    Quizset();
    
    
    
  
  
  
  
    }

else if(selectbox1.value === "verb4"){
      
      a = 30; h = 38; e = 0;f = 0;g = 0;max =30; 
      function Quizset () {
          const b = Math.floor(Math.random() * (max - e)) + e ;
          let c = Math.floor(Math.random() * (max - f)) + f ;
          let d = Math.floor(Math.random() * (max - g)) + g ;
          
        Qnum.textContent = `No.${a + 1}`;
        question.textContent = QuizVerb[a].q;
      
      while(choice1.firstChild){
        choice1.removeChild(choice1.firstChild);
      }
      
        item1.textContent = QuizVerb[a].c;
        const ul1 = document.querySelector('ul');
          ul1.appendChild(item1);
        
          item2.textContent = WrongVerb[b];
          const ul = document.querySelector('ul');
            ul.appendChild(item2);
        
          item3.textContent = WrongVerb[c];
          const ul2 = document.querySelector('ul');
            ul.appendChild(item3);
          
           item4.textContent = WrongVerb[d];
           const ul3 = document.querySelector('ul');
             ul.appendChild(item4);
      
      
             function shuffle() {
      
              const x = Math.floor(Math.random() * 4 + 1) ;
              //console.log(x);
              
              if(x == 1){ 
                ul.insertBefore(item3,item1);
                ul.insertBefore(item2,item1);
                ul.insertBefore(item4,item1);
            
              }else if(x == 2){
                ul.insertBefore(item1,item4);
                ul.insertBefore(item2,item1);
              }else if(x == 3){
                ul.insertBefore(item1,item3);
                ul.insertBefore(item2,item1);
              }
              else{
                ul.insertBefore(item4,item2);
              }
            }
            
            shuffle();
      
            function checkAnswer(){
                
              let event = function(e){
                let t = e.target;
                if(t == item1){alert("正解👍"); 
                choice1.removeEventListener('click',event);
                if(a > h){
                   alert(`合格!!`)
                    location.reload();
                }else{
                  a++;
                }
                Quizset();
            
              }else{
                  alert(`不正解🙅 \n 答えは「${item1.textContent}」`); 
                  alert(`やりなおしです😩`); 
                  choice1.removeEventListener('click',event);
                  a = 30; h = 38; e = 0;f = 0;g = 0;max =30; 
                  Quizset();
                }};
        
              choice1.addEventListener('click',event,false);
                      }
             checkAnswer();
      
      }
      
      
      Quizset();
      
      
      
    
    
    
    
      }

else if(selectbox1.value === "verb5"){
        
        a = 40; h = 48; e = 0;f = 0;g = 0;max =40; 
        function Quizset () {
            const b = Math.floor(Math.random() * (max - e)) + e ;
            let c = Math.floor(Math.random() * (max - f)) + f ;
            let d = Math.floor(Math.random() * (max - g)) + g ;
            
          Qnum.textContent = `No.${a + 1}`;
          question.textContent = QuizVerb[a].q;
        
        while(choice1.firstChild){
          choice1.removeChild(choice1.firstChild);
        }
        
          item1.textContent = QuizVerb[a].c;
          const ul1 = document.querySelector('ul');
            ul1.appendChild(item1);
          
            item2.textContent = WrongVerb[b];
            const ul = document.querySelector('ul');
              ul.appendChild(item2);
          
            item3.textContent = WrongVerb[c];
            const ul2 = document.querySelector('ul');
              ul.appendChild(item3);
            
             item4.textContent = WrongVerb[d];
             const ul3 = document.querySelector('ul');
               ul.appendChild(item4);
        
        
               function shuffle() {
        
                const x = Math.floor(Math.random() * 4 + 1) ;
                //console.log(x);
                
                if(x == 1){ 
                  ul.insertBefore(item3,item1);
                  ul.insertBefore(item2,item1);
                  ul.insertBefore(item4,item1);
              
                }else if(x == 2){
                  ul.insertBefore(item1,item4);
                  ul.insertBefore(item2,item1);
                }else if(x == 3){
                  ul.insertBefore(item1,item3);
                  ul.insertBefore(item2,item1);
                }
                else{
                  ul.insertBefore(item4,item2);
                }
              }
              
              shuffle();
        
              function checkAnswer(){
                  
                let event = function(e){
                  let t = e.target;
                  if(t == item1){alert("正解👍"); 
                  choice1.removeEventListener('click',event);
                  if(a > h){
                     alert(`合格!!`)
                      location.reload();
                  }else{
                    a++;
                  }
                  Quizset();
              
                }else{
                    alert(`不正解🙅 \n 答えは「${item1.textContent}」`); 
                    alert(`やりなおしです😩`); 
                    choice1.removeEventListener('click',event);
                    a = 40; h = 48; e = 0;f = 0;g = 0;max =40; 
                    Quizset();
                  }};
          
                choice1.addEventListener('click',event,false);
                        }
               checkAnswer();
        
        }
        
        
        Quizset();
        
        
        
      
      
      
      
        }


else if(selectbox1.value === "else1"){
          
          a = 0; h = 8; e = 10;f = 10;g = 10;max =80; 
          function Quizset () {
              const b = Math.floor(Math.random() * (max - e)) + e ;
              let c = Math.floor(Math.random() * (max - f)) + f ;
              let d = Math.floor(Math.random() * (max - g)) + g ;
              
            Qnum.textContent = `No.${a + 1}`;
            question.textContent = QuizElse[a].q;
          
          while(choice1.firstChild){
            choice1.removeChild(choice1.firstChild);
          }
          
            item1.textContent = QuizElse[a].c;
            const ul1 = document.querySelector('ul');
              ul1.appendChild(item1);
            
              item2.textContent = WrongElse[b];
              const ul = document.querySelector('ul');
                ul.appendChild(item2);
            
              item3.textContent = WrongElse[c];
              const ul2 = document.querySelector('ul');
                ul.appendChild(item3);
              
               item4.textContent = WrongElse[d];
               const ul3 = document.querySelector('ul');
                 ul.appendChild(item4);
          
          
                 function shuffle() {
          
                  const x = Math.floor(Math.random() * 4 + 1) ;
                  //console.log(x);
                  
                  if(x == 1){ 
                    ul.insertBefore(item3,item1);
                    ul.insertBefore(item2,item1);
                    ul.insertBefore(item4,item1);
                
                  }else if(x == 2){
                    ul.insertBefore(item1,item4);
                    ul.insertBefore(item2,item1);
                  }else if(x == 3){
                    ul.insertBefore(item1,item3);
                    ul.insertBefore(item2,item1);
                  }
                  else{
                    ul.insertBefore(item4,item2);
                  }
                }
                
                shuffle();
          
                function checkAnswer(){
                    
                  let event = function(e){
                    let t = e.target;
                    if(t == item1){alert("正解👍"); 
                    choice1.removeEventListener('click',event);
                    if(a > h){
                       alert(`合格!!`)
                        location.reload();
                    }else{
                      a++;
                    }
                    Quizset();
                
                  }else{
                      alert(`不正解🙅 \n 答えは「${item1.textContent}」`); 
                      alert(`やりなおしです😩`); 
                      choice1.removeEventListener('click',event);
                      a = 0; h = 8; e = 10;f = 10;g = 10;max =80; 
                      Quizset();
                    }};
            
                  choice1.addEventListener('click',event,false);
                          }
                 checkAnswer();
          
          }
          
          
          Quizset();
          
          
          
        
        
        
        
          }
  
else if(selectbox1.value === "else2"){
            
            a = 10; h = 18; e = 20;f = 20;g = 20;max =80; 
            function Quizset () {
                const b = Math.floor(Math.random() * (max - e)) + e ;
                let c = Math.floor(Math.random() * (max - f)) + f ;
                let d = Math.floor(Math.random() * (max - g)) + g ;
                
              Qnum.textContent = `No.${a + 1}`;
              question.textContent = QuizElse[a].q;
            
            while(choice1.firstChild){
              choice1.removeChild(choice1.firstChild);
            }
            
              item1.textContent = QuizElse[a].c;
              const ul1 = document.querySelector('ul');
                ul1.appendChild(item1);
              
                item2.textContent = WrongElse[b];
                const ul = document.querySelector('ul');
                  ul.appendChild(item2);
              
                item3.textContent = WrongElse[c];
                const ul2 = document.querySelector('ul');
                  ul.appendChild(item3);
                
                 item4.textContent = WrongElse[d];
                 const ul3 = document.querySelector('ul');
                   ul.appendChild(item4);
            
            
                   function shuffle() {
            
                    const x = Math.floor(Math.random() * 4 + 1) ;
                    //console.log(x);
                    
                    if(x == 1){ 
                      ul.insertBefore(item3,item1);
                      ul.insertBefore(item2,item1);
                      ul.insertBefore(item4,item1);
                  
                    }else if(x == 2){
                      ul.insertBefore(item1,item4);
                      ul.insertBefore(item2,item1);
                    }else if(x == 3){
                      ul.insertBefore(item1,item3);
                      ul.insertBefore(item2,item1);
                    }
                    else{
                      ul.insertBefore(item4,item2);
                    }
                  }
                  
                  shuffle();
            
                  function checkAnswer(){
                      
                    let event = function(e){
                      let t = e.target;
                      if(t == item1){alert("正解👍"); 
                      choice1.removeEventListener('click',event);
                      if(a > h){
                         alert(`合格!!`)
                          location.reload();
                      }else{
                        a++;
                      }
                      Quizset();
                  
                    }else{
                        alert(`不正解🙅 \n 答えは「${item1.textContent}」`); 
                        alert(`やりなおしです😩`); 
                        choice1.removeEventListener('click',event);
                        a = 10; h = 18; e = 20;f = 20;g = 20;max =80; 
                        Quizset();
                      }};
              
                    choice1.addEventListener('click',event,false);
                            }
                   checkAnswer();
            
            }
            
            
            Quizset();
            
            
            
          
          
          
          
            }
else if(selectbox1.value === "else3"){
              
              a = 20; h = 28; e = 30;f = 30;g = 30;max =80; 
              function Quizset () {
                  const b = Math.floor(Math.random() * (max - e)) + e ;
                  let c = Math.floor(Math.random() * (max - f)) + f ;
                  let d = Math.floor(Math.random() * (max - g)) + g ;
                  
                Qnum.textContent = `No.${a + 1}`;
                question.textContent = QuizElse[a].q;
              
              while(choice1.firstChild){
                choice1.removeChild(choice1.firstChild);
              }
              
                item1.textContent = QuizElse[a].c;
                const ul1 = document.querySelector('ul');
                  ul1.appendChild(item1);
                
                  item2.textContent = WrongElse[b];
                  const ul = document.querySelector('ul');
                    ul.appendChild(item2);
                
                  item3.textContent = WrongElse[c];
                  const ul2 = document.querySelector('ul');
                    ul.appendChild(item3);
                  
                   item4.textContent = WrongElse[d];
                   const ul3 = document.querySelector('ul');
                     ul.appendChild(item4);
              
              
                     function shuffle() {
              
                      const x = Math.floor(Math.random() * 4 + 1) ;
                      //console.log(x);
                      
                      if(x == 1){ 
                        ul.insertBefore(item3,item1);
                        ul.insertBefore(item2,item1);
                        ul.insertBefore(item4,item1);
                    
                      }else if(x == 2){
                        ul.insertBefore(item1,item4);
                        ul.insertBefore(item2,item1);
                      }else if(x == 3){
                        ul.insertBefore(item1,item3);
                        ul.insertBefore(item2,item1);
                      }
                      else{
                        ul.insertBefore(item4,item2);
                      }
                    }
                    
                    shuffle();
              
                    function checkAnswer(){
                        
                      let event = function(e){
                        let t = e.target;
                        if(t == item1){alert("正解👍"); 
                        choice1.removeEventListener('click',event);
                        if(a > h){
                           alert(`合格!!`)
                            location.reload();
                        }else{
                          a++;
                        }
                        Quizset();
                    
                      }else{
                          alert(`不正解🙅 \n 答えは「${item1.textContent}」`); 
                          alert(`やりなおしです😩`); 
                          choice1.removeEventListener('click',event);
                          a = 20; h = 28; e = 30;f = 30;g = 30;max =80; 
                          Quizset();
                        }};
                
                      choice1.addEventListener('click',event,false);
                              }
                     checkAnswer();
              
              }
              
              
              Quizset();
              
              
              
            
            
            
            
              }
else if(selectbox1.value === "else4"){
                
                a = 30; h = 38; e = 40;f = 40;g = 40;max =90; 
                function Quizset () {
                    const b = Math.floor(Math.random() * (max - e)) + e ;
                    let c = Math.floor(Math.random() * (max - f)) + f ;
                    let d = Math.floor(Math.random() * (max - g)) + g ;
                    
                  Qnum.textContent = `No.${a + 1}`;
                  question.textContent = QuizElse[a].q;
                
                while(choice1.firstChild){
                  choice1.removeChild(choice1.firstChild);
                }
                
                  item1.textContent = QuizElse[a].c;
                  const ul1 = document.querySelector('ul');
                    ul1.appendChild(item1);
                  
                    item2.textContent = WrongElse[b];
                    const ul = document.querySelector('ul');
                      ul.appendChild(item2);
                  
                    item3.textContent = WrongElse[c];
                    const ul2 = document.querySelector('ul');
                      ul.appendChild(item3);
                    
                     item4.textContent = WrongElse[d];
                     const ul3 = document.querySelector('ul');
                       ul.appendChild(item4);
                
                
                       function shuffle() {
                
                        const x = Math.floor(Math.random() * 4 + 1) ;
                        //console.log(x);
                        
                        if(x == 1){ 
                          ul.insertBefore(item3,item1);
                          ul.insertBefore(item2,item1);
                          ul.insertBefore(item4,item1);
                      
                        }else if(x == 2){
                          ul.insertBefore(item1,item4);
                          ul.insertBefore(item2,item1);
                        }else if(x == 3){
                          ul.insertBefore(item1,item3);
                          ul.insertBefore(item2,item1);
                        }
                        else{
                          ul.insertBefore(item4,item2);
                        }
                      }
                      
                      shuffle();
                
                      function checkAnswer(){
                          
                        let event = function(e){
                          let t = e.target;
                          if(t == item1){alert("正解👍"); 
                          choice1.removeEventListener('click',event);
                          if(a > h){
                             alert(`合格!!`)
                              location.reload();
                          }else{
                            a++;
                          }
                          Quizset();
                      
                        }else{
                            alert(`不正解🙅 \n 答えは「${item1.textContent}」`); 
                            alert(`やりなおしです😩`); 
                            choice1.removeEventListener('click',event);
                            a = 30; h = 38; e = 40;f = 40;g = 40;max =90; 
                            Quizset();
                          }};
                  
                        choice1.addEventListener('click',event,false);
                                }
                       checkAnswer();
                
                }
                
                
                Quizset();
                
                
                
              
              
              
              
                }
  else if(selectbox1.value === "else5"){
          
          a = 40; h = 48; e = 50;f = 50;g = 50;max =90; 
          function Quizset () {
              const b = Math.floor(Math.random() * (max - e)) + e ;
              let c = Math.floor(Math.random() * (max - f)) + f ;
              let d = Math.floor(Math.random() * (max - g)) + g ;
              
            Qnum.textContent = `No.${a + 1}`;
            question.textContent = QuizElse[a].q;
          
          while(choice1.firstChild){
            choice1.removeChild(choice1.firstChild);
          }
          
            item1.textContent = QuizElse[a].c;
            const ul1 = document.querySelector('ul');
              ul1.appendChild(item1);
            
              item2.textContent = WrongElse[b];
              const ul = document.querySelector('ul');
                ul.appendChild(item2);
            
              item3.textContent = WrongElse[c];
              const ul2 = document.querySelector('ul');
                ul.appendChild(item3);
              
               item4.textContent = WrongElse[d];
               const ul3 = document.querySelector('ul');
                 ul.appendChild(item4);
          
          
                 function shuffle() {
          
                  const x = Math.floor(Math.random() * 4 + 1) ;
                  //console.log(x);
                  
                  if(x == 1){ 
                    ul.insertBefore(item3,item1);
                    ul.insertBefore(item2,item1);
                    ul.insertBefore(item4,item1);
                
                  }else if(x == 2){
                    ul.insertBefore(item1,item4);
                    ul.insertBefore(item2,item1);
                  }else if(x == 3){
                    ul.insertBefore(item1,item3);
                    ul.insertBefore(item2,item1);
                  }
                  else{
                    ul.insertBefore(item4,item2);
                  }
                }
                
                shuffle();
          
                function checkAnswer(){
                    
                  let event = function(e){
                    let t = e.target;
                    if(t == item1){alert("正解👍"); 
                    choice1.removeEventListener('click',event);
                    if(a > h){
                       alert(`合格!!`)
                        location.reload();
                    }else{
                      a++;
                    }
                    Quizset();
                
                  }else{
                      alert(`不正解🙅 \n 答えは「${item1.textContent}」`); 
                      alert(`やりなおしです😩`); 
                      choice1.removeEventListener('click',event);
                      a = 40; h = 48; e = 50;f = 50;g = 50;max =90; 
                      Quizset();
                    }};
            
                  choice1.addEventListener('click',event,false);
                          }
                 checkAnswer();
          
          }
          
          
          Quizset();
          
          
          
        
        
        
        
          }

else if(selectbox1.value === "else6"){
            
            a = 50; h = 58; e = 15;f = 15;g = 15;max =50; 
            function Quizset () {
                const b = Math.floor(Math.random() * (max - e)) + e ;
                let c = Math.floor(Math.random() * (max - f)) + f ;
                let d = Math.floor(Math.random() * (max - g)) + g ;
                
              Qnum.textContent = `No.${a + 1}`;
              question.textContent = QuizElse[a].q;
            
            while(choice1.firstChild){
              choice1.removeChild(choice1.firstChild);
            }
            
              item1.textContent = QuizElse[a].c;
              const ul1 = document.querySelector('ul');
                ul1.appendChild(item1);
              
                item2.textContent = WrongElse[b];
                const ul = document.querySelector('ul');
                  ul.appendChild(item2);
              
                item3.textContent = WrongElse[c];
                const ul2 = document.querySelector('ul');
                  ul.appendChild(item3);
                
                 item4.textContent = WrongElse[d];
                 const ul3 = document.querySelector('ul');
                   ul.appendChild(item4);
            
            
                   function shuffle() {
            
                    const x = Math.floor(Math.random() * 4 + 1) ;
                    //console.log(x);
                    
                    if(x == 1){ 
                      ul.insertBefore(item3,item1);
                      ul.insertBefore(item2,item1);
                      ul.insertBefore(item4,item1);
                  
                    }else if(x == 2){
                      ul.insertBefore(item1,item4);
                      ul.insertBefore(item2,item1);
                    }else if(x == 3){
                      ul.insertBefore(item1,item3);
                      ul.insertBefore(item2,item1);
                    }
                    else{
                      ul.insertBefore(item4,item2);
                    }
                  }
                  
                  shuffle();
            
                  function checkAnswer(){
                      
                    let event = function(e){
                      let t = e.target;
                      if(t == item1){alert("正解👍"); 
                      choice1.removeEventListener('click',event);
                      if(a > h){
                         alert(`合格!!`)
                          location.reload();
                      }else{
                        a++;
                      }
                      Quizset();
                  
                    }else{
                        alert(`不正解🙅 \n 答えは「${item1.textContent}」`); 
                        alert(`やりなおしです😩`); 
                        choice1.removeEventListener('click',event);
                        a = 50; h = 58; e = 15;f = 15;g = 15;max =50; 
                        Quizset();
                      }};
              
                    choice1.addEventListener('click',event,false);
                            }
                   checkAnswer();
            
            }
            
            
            Quizset();
            
            
            
          
          
          
          
            }
  
else if(selectbox1.value === "else7"){
              
              a = 60; h = 68; e = 15;f = 15;g = 15;max =60; 
              function Quizset () {
                  const b = Math.floor(Math.random() * (max - e)) + e ;
                  let c = Math.floor(Math.random() * (max - f)) + f ;
                  let d = Math.floor(Math.random() * (max - g)) + g ;
                  
                Qnum.textContent = `No.${a + 1}`;
                question.textContent = QuizElse[a].q;
              
              while(choice1.firstChild){
                choice1.removeChild(choice1.firstChild);
              }
              
                item1.textContent = QuizElse[a].c;
                const ul1 = document.querySelector('ul');
                  ul1.appendChild(item1);
                
                  item2.textContent = WrongElse[b];
                  const ul = document.querySelector('ul');
                    ul.appendChild(item2);
                
                  item3.textContent = WrongElse[c];
                  const ul2 = document.querySelector('ul');
                    ul.appendChild(item3);
                  
                   item4.textContent = WrongElse[d];
                   const ul3 = document.querySelector('ul');
                     ul.appendChild(item4);
              
              
                     function shuffle() {
              
                      const x = Math.floor(Math.random() * 4 + 1) ;
                      //console.log(x);
                      
                      if(x == 1){ 
                        ul.insertBefore(item3,item1);
                        ul.insertBefore(item2,item1);
                        ul.insertBefore(item4,item1);
                    
                      }else if(x == 2){
                        ul.insertBefore(item1,item4);
                        ul.insertBefore(item2,item1);
                      }else if(x == 3){
                        ul.insertBefore(item1,item3);
                        ul.insertBefore(item2,item1);
                      }
                      else{
                        ul.insertBefore(item4,item2);
                      }
                    }
                    
                    shuffle();
              
                    function checkAnswer(){
                        
                      let event = function(e){
                        let t = e.target;
                        if(t == item1){alert("正解👍"); 
                        choice1.removeEventListener('click',event);
                        if(a > h){
                           alert(`合格!!`)
                            location.reload();
                        }else{
                          a++;
                        }
                        Quizset();
                    
                      }else{
                          alert(`不正解🙅 \n 答えは「${item1.textContent}」`); 
                          alert(`やりなおしです😩`); 
                          choice1.removeEventListener('click',event);
                          a = 60; h = 68; e = 15;f = 15;g = 15;max =60; 
                          Quizset();
                        }};
                
                      choice1.addEventListener('click',event,false);
                              }
                     checkAnswer();
              
              }
              
              
              Quizset();
              
              
              
            
            
            
            
              }
  
 else if(selectbox1.value === "else8"){
                
                a = 70; h = 78; e = 15;f = 15;g = 15;max =70; 
                function Quizset () {
                    const b = Math.floor(Math.random() * (max - e)) + e ;
                    let c = Math.floor(Math.random() * (max - f)) + f ;
                    let d = Math.floor(Math.random() * (max - g)) + g ;
                    
                  Qnum.textContent = `No.${a + 1}`;
                  question.textContent = QuizElse[a].q;
                
                while(choice1.firstChild){
                  choice1.removeChild(choice1.firstChild);
                }
                
                  item1.textContent = QuizElse[a].c;
                  const ul1 = document.querySelector('ul');
                    ul1.appendChild(item1);
                  
                    item2.textContent = WrongElse[b];
                    const ul = document.querySelector('ul');
                      ul.appendChild(item2);
                  
                    item3.textContent = WrongElse[c];
                    const ul2 = document.querySelector('ul');
                      ul.appendChild(item3);
                    
                     item4.textContent = WrongElse[d];
                     const ul3 = document.querySelector('ul');
                       ul.appendChild(item4);
                
                
                       function shuffle() {
                
                        const x = Math.floor(Math.random() * 4 + 1) ;
                        //console.log(x);
                        
                        if(x == 1){ 
                          ul.insertBefore(item3,item1);
                          ul.insertBefore(item2,item1);
                          ul.insertBefore(item4,item1);
                      
                        }else if(x == 2){
                          ul.insertBefore(item1,item4);
                          ul.insertBefore(item2,item1);
                        }else if(x == 3){
                          ul.insertBefore(item1,item3);
                          ul.insertBefore(item2,item1);
                        }
                        else{
                          ul.insertBefore(item4,item2);
                        }
                      }
                      
                      shuffle();
                
                      function checkAnswer(){
                          
                        let event = function(e){
                          let t = e.target;
                          if(t == item1){alert("正解👍"); 
                          choice1.removeEventListener('click',event);
                          if(a > h){
                             alert(`合格!!`)
                              location.reload();
                          }else{
                            a++;
                          }
                          Quizset();
                      
                        }else{
                            alert(`不正解🙅 \n 答えは「${item1.textContent}」`); 
                            alert(`やりなおしです😩`); 
                            choice1.removeEventListener('click',event);
                            a = 70; h = 78; e = 15;f = 15;g = 15;max =70; 
                            Quizset();
                          }};
                  
                        choice1.addEventListener('click',event,false);
                                }
                       checkAnswer();
                
                }
                
                
                Quizset();
                
                
                
              
              
              
              
                }
else if(selectbox1.value === "else9"){
                  
                  a = 80; h = 88; e = 15;f = 15;g = 15;max =80; 
                  function Quizset () {
                      const b = Math.floor(Math.random() * (max - e)) + e ;
                      let c = Math.floor(Math.random() * (max - f)) + f ;
                      let d = Math.floor(Math.random() * (max - g)) + g ;
                      
                    Qnum.textContent = `No.${a + 1}`;
                    question.textContent = QuizElse[a].q;
                  
                  while(choice1.firstChild){
                    choice1.removeChild(choice1.firstChild);
                  }
                  
                    item1.textContent = QuizElse[a].c;
                    const ul1 = document.querySelector('ul');
                      ul1.appendChild(item1);
                    
                      item2.textContent = WrongElse[b];
                      const ul = document.querySelector('ul');
                        ul.appendChild(item2);
                    
                      item3.textContent = WrongElse[c];
                      const ul2 = document.querySelector('ul');
                        ul.appendChild(item3);
                      
                       item4.textContent = WrongElse[d];
                       const ul3 = document.querySelector('ul');
                         ul.appendChild(item4);
                  
                  
                         function shuffle() {
                  
                          const x = Math.floor(Math.random() * 4 + 1) ;
                          //console.log(x);
                          
                          if(x == 1){ 
                            ul.insertBefore(item3,item1);
                            ul.insertBefore(item2,item1);
                            ul.insertBefore(item4,item1);
                        
                          }else if(x == 2){
                            ul.insertBefore(item1,item4);
                            ul.insertBefore(item2,item1);
                          }else if(x == 3){
                            ul.insertBefore(item1,item3);
                            ul.insertBefore(item2,item1);
                          }
                          else{
                            ul.insertBefore(item4,item2);
                          }
                        }
                        
                        shuffle();
                  
                        function checkAnswer(){
                            
                          let event = function(e){
                            let t = e.target;
                            if(t == item1){alert("正解👍"); 
                            choice1.removeEventListener('click',event);
                            if(a > h){
                               alert(`合格!!`)
                                location.reload();
                            }else{
                              a++;
                            }
                            Quizset();
                        
                          }else{
                              alert(`不正解🙅 \n 答えは「${item1.textContent}」`); 
                              alert(`やりなおしです😩`); 
                              choice1.removeEventListener('click',event);
                              a = 80; h = 88; e = 15;f = 15;g = 15;max =80; 
                              Quizset();
                            }};
                    
                          choice1.addEventListener('click',event,false);
                                  }
                         checkAnswer();
                  
                  }
                  
                  
                  Quizset();
                  
                  
                  
                
                
                
                
                  }
                        


else { location.reload();}
        

}





