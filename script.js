// $(달러)의 의미는 태그 변수 => 문법x, 그냥 구별용
const $button =document.querySelector("button");
const $input = document.querySelector("input");
const number = Number(prompt("몇 명이 참가하나요?")); // 참가인원 저장
const $word = document.querySelector("#word"); // 제시어 태그
const $order = document.querySelector("#order"); // ?번째 참가자 태그

let word; // 제시어
let newWord; // 현재 입력된 단어(input창)

function onClickButton(){ // 입력버튼 누르면 실행되는 함수
    // console.log("버튼 클릭");
    let order = Number($order.innerText); // 현재 몇번째 인지 저장
    let i;
    let cnt = 0;
    for(i=0;i<3;i++){
        if(newWord[i] != null){
            cnt++;
        }
    }
    if(cnt != 3){
        alert("3글자가 아닙니다 다시 입력해주세요");
        $input.value = ""; // input창 비우기 
        $input.focus(); // 커서를 input창에 두기
    }
    else if(word === undefined){ // 제시어가 비었다면
        word = newWord; // 입력한 단어가 제시어가 된다
        $word.innerText = word; // 제시어를 브라우저에 출력 
        // 여기에 order코드
        if(order + 1 > number){ // 다음 참가자가 전체인원수(number)보다 크면
            $order.innerText = 1; // 다음 주자를 1번으로 돌리기
        }
        else{
            $order.innerText = order+1; // 다음번 참가자 번호 출력 
        }
        // 여기에 입력값 비우기 코드 추가함
    }
    else if(word != undefined){ // 제시어가 안 비었다면
        if(word[word.length-1] === newWord[0]){ // 끝음절과 첫음절이 같다면
            word = newWord; 
            $word.innerText = word;
            // 여기에 붙여넣기 저장
            if(order + 1 > number){ // 다음 참가자가 전체인원수(number)보다 크면
                $order.innerText = 1; // 다음 주자를 1번으로 돌리기
            }
            else{
                $order.innerText = order+1; // 다음번 참가자 번호 출력 
            }
        }
        else{ // 끝음절 != 첫음절
            alert("올바르지 않은 단어입니다!");
        }
    }
    $input.value = ""; // input창 비우기 
    $input.focus(); // 커서를 input창에 두기
}

function oninput(event){ // 입력값이 있으면 실행되는 함수
    // console.log("글자 입력", event.target.value);
    newWord = event.target.value; // 사용자 입력 단어
    
}

$button.addEventListener("click", onClickButton); // (동작, 실행할 함수)
$input.addEventListener("input", oninput);