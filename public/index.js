let num = parseInt(document.getElementById("count").value)
document.getElementById("content").style.display = 'none';

function countdown(){

        document.getElementById("count").value = num;
        num -= 1;
        if(num != 0){
            setTimeout(countdown,1000);
        
        }
        console.log(num)
        if(num == 0){
            setTimeout(function() {
                document.getElementById("count").style.display ='none';
                document.getElementById("content").style.display = 'block';
                
                const randomDelay = Math.random() * 4000 + 1000;
                setTimeout(dropBall,randomDelay)
                document.addEventListener('click', () => {
                    clearInterval(ballInterval); // 공 떨어지는 동작 멈춤
                    calculateScore(); // 점수 계산
                });
            }, 1000);
            
            
        }
}

setTimeout(countdown);

let ballInterval; // 공이 떨어지는 동작을 추적하기 위한 변수

// 페이지 로드 후 공 떨어뜨리기 시작
function dropBall() {
    const ball = document.querySelector('img[src="./ball.svg"]');
    ball.style.position = "absolute";
    ball.style.top = '0'; // 공 시작 위치 (화면 맨 위)

    // 공 떨어지는 로직
    let fallSpeed = 16; // 떨어지는 속도
    ballInterval = setInterval(() => {
        const currentTop = parseFloat(ball.style.top || '0');
        const maxFallHeight = window.innerHeight * 2; // 화면 높이의 2배 (top: -200%)
        
        if (currentTop < maxFallHeight) {
            ball.style.top = currentTop + fallSpeed + 'px';
        } else {
            clearInterval(ballInterval); 
            score = 0;
            localStorage.setItem("score", score);
            const form = document.createElement('form');
            form.method = 'POST';
            form.action = '/pang';
        
            document.body.appendChild(form);
            form.submit();// 공이 설정된 -200% 위치까지 떨어지면 멈춤
        }
    }, 10);
}

// 점수 계산 함수
function calculateScore() {
    const ball = document.querySelector('img[src="./ball.svg"]');
    const target = document.querySelector('img[src="./target.svg"]');

    const ballRect = ball.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    // 공과 타겟 중심 좌표 계산
    const ballCenterX = ballRect.left + ballRect.width / 2;
    const ballCenterY = ballRect.top + ballRect.height / 2;

    const targetCenterX = targetRect.left + targetRect.width / 2;
    const targetCenterY = targetRect.top + targetRect.height / 2;

    // 중심 간 거리 계산
    const distance = Math.sqrt(
        Math.pow(ballCenterX - targetCenterX, 2) +
        Math.pow(ballCenterY - targetCenterY, 2)
    );

    // 점수화 (거리에 따라 점수 계산, 거리 0이면 100점)
    const maxDistance = 200; // 최대 거리 기준 (200px 이상이면 0점)
    const score = Math.max(0, Math.round(100 - (distance / maxDistance) * 100));

    localStorage.setItem("score", score);
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = '/pang';

    document.body.appendChild(form);
    form.submit();

}

// 버튼 클릭 시 공 멈추고 점수 계산


// 페이지 로드 시 공 떨어뜨리기 시작

