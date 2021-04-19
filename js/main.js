
const question = document.getElementById('question');
const choice1 = document.getElementById('choice1');

const btn = document.getElementById('btn');
const result = document.getElementById('result');
const scoreLabel = document.querySelector('#result > p')
const item1 = document.createElement('li');
const item2 = document.createElement('li');
const item3 = document.createElement('li');
const item4 = document.createElement('li');
//let value = document.getElementById("genre").value;
//let select = document.getElementById('genre');
// 

// document.getElementById('genre').onchange = function Q(){


//   if( this.value === "sel"){
//     location.reload();
//   }
  
// }
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
a = 0; h += 8; e += 10;f += 10;g += 10;max =60; 

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
              alert(`合格🈴!!`)
              location.reload();
          }else{
            a++;
          }
          Quizset();
      
        }else{
            alert(`不正解🙅「${item1.textContent}」`); 
            alert(`やりなおしです😩`); 
            choice1.removeEventListener('click',event);
            Quizset();
            //location.reload();
          }};
  
        choice1.addEventListener('click',event,false);
                }
       checkAnswer();

}


Quizset();







}

else if(selectbox.value === "11-20"){
  a = 0; h = 0; e = 0;f = 0;g = 0;max =0; 
  a += 10; h += 18; e += 20;f += 20;g += 20;max =100; 
 
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
            if(t == item1){alert("正解👍"); 
            choice1.removeEventListener('click',event);
            const b = Math.floor(Math.random() * (max - e)) + e ;
            let c = Math.floor(Math.random() * (max - f)) + f ;
            let d = Math.floor(Math.random() * (max - g)) + g ;



            if(a > h){
                alert(`合格🈴!!`)

                
                location.reload();
            }else{
              a++;
            }
            Quizset();
        
          }else{
              alert(`不正解🙅「${item1.textContent}」`); 
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
    a = 0; h = 0; e = 0;f = 0;g = 0;max =0; 
    a += 20; h += 28; e += 30;f += 30;g += 30;max =80; 
  
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
                  alert(`合格🈴!!`)
                  location.reload();
              }else{
                a++;
              }
              Quizset();
          
            }else{
                alert(`不正解🙅「${item1.textContent}」`); 
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
  
    else if(selectbox.value === "31-40"){
      a = 0; h = 0; e = 0;f = 0;g = 0;max =0; 
      a += 30; h += 38; e += 40;f += 40;g += 40;max =90; 

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
                    alert(`合格🈴!!`)
                    location.reload();
                }else{
                  a++;
                }
                Quizset();
            
              }else{
                  alert(`不正解🙅「${item1.textContent}」`); 
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
    
   else if(selectbox.value === "41-50"){
        a = 0; h = 0; e = 0;f = 0;g = 0;max =0; 
        a += 40; h += 48; e += 50;f += 50;g += 50;max =100; 
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
                      alert(`合格🈴!!`)
                      location.reload();
                  }else{
                    a++;
                  }
                  Quizset();
              
                }else{
                    alert(`不正解🙅「${item1.textContent}」`); 
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
      
          else if(selectbox.value === "51-60"){

            
            a = 0; h = 0; e = 0;f = 0;g = 0;max =0; 
            a += 50; h += 58; e += 60;f += 60;g += 60;max =110; 
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
                          alert(`合格🈴!!`)
                          location.reload();
                      }else{
                        a++;
                      }
                      Quizset();
                  
                    }else{
                        alert(`不正解🙅「${item1.textContent}」`); 
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
          
            else if(selectbox.value === "61-70"){
              a = 0; h = 0; e = 0;f = 0;g = 0;max =0; 
              a += 60; h += 68; max =50; 

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
                            alert(`合格🈴!!`)
                            location.reload();
                        }else{
                          a++;
                        }
                        Quizset();
                    
                      }else{
                          alert(`不正解🙅「${item1.textContent}」`); 
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
            
              else if(selectbox.value === "71-80"){
                a = 0; h = 0; e = 0;f = 0;g = 0;max =0; 
                a += 70; h += 78; max =60;
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
                              alert(`合格🈴!!`)
                              location.reload();
                          }else{
                            a++;
                          }
                          Quizset();
                      
                        }else{
                            alert(`不正解🙅「${item1.textContent}」`); 
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
              
                else if(selectbox.value === "81-90"){
                  a = 0; h = 0; e = 0;f = 0;g = 0;max =0; 
                  a += 80; h += 88; max =70;
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
                                alert(`合格🈴!!`)
                                location.reload();
                            }else{
                              a++;
                            }
                            Quizset();
                        
                          }else{
                              alert(`不正解🙅「${item1.textContent}」`); 
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
                
                  else if(selectbox.value === "91-100"){
                    a = 0; h = 0; e = 0;f = 0;g = 0;max =0; 
                    a += 90; h += 98; max =70; 
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
                                  alert(`合格🈴!!`)
                                  location.reload();
                              }else{
                                a++;
                              }
                              Quizset();
                          
                            }else{
                                alert(`不正解🙅「${item1.textContent}」`); 
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
                  
                    else if(selectbox.value === "101-110"){
                      a = 0; h = 0; e = 0;f = 0;g = 0;max =0; 
                      a += 40; h += 48; e += 50;f += 50;g += 50;max =100; 
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
                                    alert(`合格🈴!!`)
                                    location.reload();
                                }else{
                                  a++;
                                }
                                Quizset();
                            
                              }else{
                                  alert(`不正解🙅「${item1.textContent}」`); 
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
                    
                          
        
   



  else{

    location.reload();
  }
 
  












}


// function myfunc() {
    
//   if(value === "1-10"){
//   a = 0;e=0;f=0;g=0;max=50;
//   }else if(value === "11-20"){
//   a = 10;e=10;f=10;g=10;max=60
//   }else if(value === "11-20"){
//   a = 20;e=20;f=20;g=20;max=60
//   }else if(value === "21-30"){
//   a = 30;e=30;f=30;g=30;max=70
//   }else if(value === "31-40"){
//   a = 40;e=40;f=40;g=40;max=80
//   }else if(value === "41-50"){
//   a = 50;e=50;f=50;g=50;max=90
//   }else if(value === "51-60"){
//   a = 60;e=0;f=0;g=0;max=40
//   }else if(value === "61-70"){
//   a = 70;e=0;f=0;g=0;max=50
//   }else if(value === "71-80"){
//   a = 80;e=0;f=0;g=0;max=60
//   }else if(value === "81-90"){
//   a = 90;e=0;f=0;g=0;max=70
//   }else if(value === "91-100"){
//   a = 100;e=0;f=0;g=0;max=80
//   }else{}
  
//   }
  
 // myfunc();





