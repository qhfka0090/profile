
const link=()=>{
    // 모든 a중에서 href속성값이 "#"으로 시작하는 요소 선택
    document.querySelectorAll('a[href^="#"]').forEach((anchor)=>{/* ^= 뒤에있는걸로 시작하는? */
        anchor.addEventListener('click', function(e){
            e.preventDefault();
            const targetID = this.getAttribute('href');
            const targetElement = document.querySelector(targetID);/* 요소 선택하기 */
            if( targetElement ){ /* 얘가 존재하면 */
                targetElement.scrollIntoView({ behavior:'smooth'});
            }
        })
    })
}

export default link;