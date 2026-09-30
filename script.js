const screens=document.querySelectorAll('.screen');
function show(id){screens.forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');window.scrollTo({top:0,behavior:'smooth'});}
function explainLayer(x){const data={A:'الطبقة A في الأعلى، لذلك هي أحدث من الطبقات التي تحتها في هذا النموذج.',B:'الطبقة B أحدث من C وD وأقدم من A.',C:'الطبقة C أحدث من D وأقدم من B وA.',D:'الطبقة D في الأسفل، لذلك هي الأقدم في هذا النموذج.'};document.getElementById('layerInfo').textContent=data[x];}
function crossAnswer(ok){document.getElementById('crossResult').innerHTML=ok?'✅ صحيح! القاطع أحدث من الطبقات التي قطعها.':'❌ حاول مرة أخرى. تذكّر: ما يقطع الصخور يكون أحدث منها.';}
function absoluteAnswer(ok){document.getElementById('absoluteResult').innerHTML=ok?'✅ صحيح! الطبقة التي قطعها القاطع أقدم من القاطع ذي العمر 50 مليون سنة.':'❌ ليس تمامًا. القاطع عمره 50 مليون سنة، والصخر الذي قطعه أقدم منه.';}

const questions=[
['أي طبقة تكون أقدم في ترتيب طبقات رسوبية غير مقلوبة؟',['العليا','السفلى','الوسطى','لا يمكن تحديدها'],1],
['إذا قطع قاطع ناري ثلاث طبقات، فالقاطع يكون…',['أقدم منها','أحدث منها','بنفس العمر دائمًا','لا علاقة له بها'],1],
['العمر المطلق يعبّر عن…',['ترتيب الصخور فقط','لون الصخر','عمر محدد بوحدات زمنية','نوع المعدن'],2],
['إذا كان عمر قاطع 50 مليون سنة، فالطبقات التي قطعها…',['أحدث من 50 مليون سنة','أقدم من 50 مليون سنة','عمرها صفر','لا يمكن أن تكون صخورًا'],1],
['من وسائل المضاهاة الاستعانة بـ…',['الأحافير والطبقات','درجة حرارة الجو فقط','لون السماء','حجم الجبل فقط'],0]
];
let qi=0,score=0;
function startQuiz(){qi=0;score=0;show('quiz');renderQ();}
function renderQ(){const box=document.getElementById('quizBox');if(qi>=questions.length){document.getElementById('scoreText').innerHTML=`<h2>${score} / ${questions.length}</h2><p>نسبة النجاح: ${Math.round(score/questions.length*100)}%</p>`;show('result');return;}const q=questions[qi];box.innerHTML=`<div class="quiz-question"><small>السؤال ${qi+1} من ${questions.length}</small><h3>${q[0]}</h3>${q[1].map((o,i)=>`<button class="quiz-option" onclick="answerQ(${i})">${o}</button>`).join('')}</div>`;}
function answerQ(i){const q=questions[qi],buttons=document.querySelectorAll('.quiz-option');buttons.forEach(b=>b.disabled=true);buttons[q[2]].classList.add('correct');if(i===q[2])score++;else buttons[i].classList.add('wrong');setTimeout(()=>{qi++;renderQ()},650);}
show('home');