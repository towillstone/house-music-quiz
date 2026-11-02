'use strict';
const questions = [
 {topic:'RHYTHM',q:'What does “four-on-the-floor” usually describe?',a:['A kick drum on every quarter-note beat','Four different kick samples in one bar','A snare on every eighth note','A bass line with four octaves'],correct:0,why:'In a typical 4/4 house groove, the kick lands on beats 1, 2, 3, and 4. Other drums add movement around that steady pulse.'},
 {topic:'RHYTHM',q:'Where does the classic offbeat open hi-hat usually land?',a:['Only on beat 1','Between the quarter-note kicks','Exactly on every kick','Only at the end of eight bars'],correct:1,why:'Offbeat hats typically land on the “and” between beats. Their contrast with the kick creates the familiar push-and-pull of house.'},
 {topic:'GROOVE',q:'What does swing usually change in a sequenced rhythm?',a:['The song’s key','The master volume','The timing of selected subdivisions','The audio sample rate'],correct:2,why:'Swing delays selected subdivisions, often alternating eighth or sixteenth notes. Its effect depends on the pattern and the sequencer’s swing settings.'},
 {topic:'LOW END',q:'Your kick and bass sound muddy together. What is a useful first step?',a:['Boost both tracks at every frequency','Add reverb to the master','Pan both tracks hard left','Listen to their overlapping frequencies and timing'],correct:3,why:'Check the kick and bass together. Note length, sound choice, arrangement, and selective EQ can make space before you reach for more processing.'},
 {topic:'DYNAMICS',q:'What does kick-triggered sidechain compression on a bass typically do?',a:['Temporarily lowers the bass when the kick hits','Permanently changes the bass pitch','Reverses the kick audio','Removes the need to balance levels'],correct:0,why:'The kick acts as a control signal that makes the compressor reduce the bass level. Attack, release, and reduction amount shape the space or pumping effect.'},
 {topic:'SOUND DESIGN',q:'Which envelope control sets how quickly a sound begins?',a:['Release','Attack','Sustain','Pan'],correct:1,why:'Attack controls the onset. Short attacks can feel sharp and percussive; slower attacks can soften the beginning of a sound.'},
 {topic:'SAMPLING',q:'Before releasing a track with a recognizable commercial recording sample, what should you check?',a:['Whether the sample is shorter than ten seconds','Whether you changed its tempo','Whether you have the required permissions or license','Whether the track is free to download'],correct:2,why:'A short sample or tempo change does not automatically remove rights obligations. Check permissions for the recording and composition; requirements depend on the use and jurisdiction.'},
 {topic:'ARRANGEMENT',q:'Why do producers often arrange changes in 8- or 16-bar phrases?',a:['Software cannot play other phrase lengths','Every house track must follow that rule','It guarantees a louder master','It creates recognizable structure and can help DJ mixing'],correct:3,why:'Regular phrases help listeners and DJs anticipate transitions. They are a useful convention, with plenty of room for creative exceptions.'},
 {topic:'MIXING',q:'Why check a mix in mono?',a:['To hear whether phase cancellation weakens important sounds','To automatically fix all stereo problems','To increase the sample rate','To make every track louder'],correct:0,why:'Summing to mono can reveal phase cancellation and balance problems that a wide stereo presentation hides. Listen especially to essential drums, bass, and hooks.'},
 {topic:'WORKFLOW',q:'What makes a reference track useful when mixing?',a:['Copying its exact master volume at all times','Comparing tonal balance and arrangement at matched listening levels','Using it instead of listening to your own mix','Assuming every track needs identical EQ'],correct:1,why:'A stylistically relevant reference gives context for low end, brightness, dynamics, and arrangement. Match listening levels so louder does not simply seem better.'}
];
let current=0, selections=[];
const root=document.querySelector('#quiz');
function render(){
 document.querySelector('.steps').innerHTML=questions.map((_,i)=>`<i class="${i<=current?'on':''}"></i>`).join('');
 if(current===questions.length){showResults();return;}
 const item=questions[current];
 root.innerHTML=`<p class="meta">${String(current+1).padStart(2,'0')} / 10 · ${item.topic}</p><h2 tabindex="-1">${item.q}</h2><div class="answers">${item.a.map((answer,i)=>`<button class="answer" data-choice="${i}"><b>${'ABCD'[i]}</b>${answer}</button>`).join('')}</div><div class="feedback" role="status" aria-live="polite"></div>`;
 root.querySelectorAll('.answer').forEach(button=>button.addEventListener('click',()=>choose(Number(button.dataset.choice))));
}
function choose(choice){
 if(selections.length>current)return;
 const item=questions[current];selections.push(choice);
 root.querySelectorAll('.answer').forEach((button,i)=>{button.disabled=true;if(i===item.correct)button.classList.add('correct');else if(i===choice)button.classList.add('wrong');});
 root.querySelector('.feedback').innerHTML=`<strong>${choice===item.correct?'On the money.':'A useful one to revisit.'}</strong> ${item.why}`;
 const next=document.createElement('button');next.className='primary';next.textContent=current===9?'See my results →':'Next question →';
 next.addEventListener('click',()=>{current++;render();root.querySelector('h2').focus();});root.append(next);next.focus();
}
function showResults(){
 const score=selections.filter((answer,i)=>answer===questions[i].correct).length;
 const missed=questions.filter((item,i)=>selections[i]!==item.correct);
 root.innerHTML=`<p class="meta">SESSION COMPLETE</p><h2 tabindex="-1">${score>=8?'You’re in the pocket.':score>=5?'The groove is taking shape.':'Every groove starts somewhere.'}</h2><div class="score">${score}<small> / 10</small></div><p>You answered ${score} of 10 correctly. ${missed.length?'Review the notes below, then try another session.':'Great session. Put these ideas to work in your next track.'}</p><button class="primary">Play again ↺</button>${missed.length?`<div class="review"><h3>Your studio notes</h3>${missed.map(item=>`<h4>${item.q}</h4><p><strong>${item.a[item.correct]}</strong><br>${item.why}</p>`).join('')}</div>`:''}`;
 root.querySelector('button').addEventListener('click',()=>{current=0;selections=[];render();root.querySelector('h2').focus();});
}
render();
