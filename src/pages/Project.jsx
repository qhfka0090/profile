import { useEffect, useRef, useState, useCallback } from "react";
import { projects } from "../contents/textdata";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/all";
import PopupPortal from "./PopupPortal";


gsap.registerPlugin(ScrollTrigger);

function Project(){
    gsap.registerPlugin(ScrollTrigger);
    const horizontalRef = useRef(null);
    const sectionRef = useRef([]);
    const [openIndex, setOpenIndex] = useState(null);
    const [scrollPos, setScrollPos] = useState(0);

    const togglePopup = useCallback((index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    }, []);


    useEffect(()=>{
        const horizontal = horizontalRef.current; /* <section ref={horizontalRef} */
        const sections = sectionRef.current.filter(Boolean);       /* ref={(e)=>{ sectionRef.current[index]=e }} */
        if (!horizontal || sections.length === 0) return;
        let scrollTween = gsap.to( sections, {
            xPercent:-120*(sections.length-1), // 섹션 개수만큼 x축 이동 비율 설정
            ease:'none',
            scrollTrigger:{
                trigger:horizontal,
                start:'top 56px', /* 어디서부터 시작할지 */
                end:()=>'+=' + horizontal.offsetWidth, // 스크롤 종료 위치
                pin:true, // 스크롤 시 해당 요소 고정 -> 해야지 스크롤 이벤트가 움직여짐
                scrub:1, // 스크롤, 애니메이션 동기화 --> 숫자가 크면클수록 부드럽게 움직이지만 좀 느림
                markers:false, /*  */
                invalidateOnRefresh:true, // 새로고침 애니메이션 무효화
                anticipatePin:1,
            }
        })
        return()=>{
            scrollTween.scrollTrigger?.kill()
            scrollTween.kill();
        }
    },[]);

    useEffect(() => {
        const wrap = document.querySelector(".project_wrap");
        const isOpen = openIndex !== null;
        if (isOpen) {
            // 스크롤 위치 저장 (필요하면)
            setScrollPos(window.pageYOffset);
            // 스크롤 막기
            document.body.style.overflow = 'hidden';
            if (wrap) wrap.classList.add("no-scroll");
        } else {
            // 스크롤 풀기
            document.body.style.overflow = '';
            if (wrap) wrap.classList.remove("no-scroll");
        }
        // cleanup은 필요없음, openIndex 바뀔 때마다 실행됨
    }, [openIndex]);

/*     useEffect(() => {
        const wrap = document.querySelector(".project_wrap");
        if (openIndex !== null) {
          // 팝업 열릴 때
          document.body.style.overflow = "hidden";  // 스크롤 막기
          if (wrap) wrap.classList.add("no-scroll");
        } else {
          // 팝업 닫힐 때
          document.body.style.overflow = "";       // 스크롤 풀기
          if (wrap) wrap.classList.remove("no-scroll");
        }
      }, [openIndex]); */


    return(
        <section id='project' ref={horizontalRef}>
            <div className="project_inner">
                <h2 className="project_title">
                    Portfolio 
                </h2>
                <div className="project_wrap">
                    { projects.map((project,index)=>(
                        <article className={`project_item p${index+1}`} key={index}
                            ref={(el)=>{ sectionRef.current[index] = el }}/* index=> 0번째를 움직여라 1번째를 움직여라 라고 el을 index에 넣기 article자체를 순서에 맞게 집어넣겠다. */
                        >
                            <h3 className="title">{ project.title }</h3>
                            <p className="date">{project.date}</p>
                            <p className="sub">{project.sub}</p>
                            {project.desc.map((text, i) => (
                                <p className="desc" key={i}>{text}</p>
                            ))}
                            <p className="type">{project.type}</p>
                            <div className="views">
                                <button className='pj' onClick={() => togglePopup(index)}>
                                    IMG
                                </button>
                                {
                                    openIndex === index && (
                                        <PopupPortal>
                                        <div id="popup-bg" onClick={() => togglePopup(index)}>
                                            <div className="popup" onClick={(e) => e.stopPropagation()}>
                                                <img src={import.meta.env.BASE_URL + project.img} alt={project.title} loading="lazy" />
                                                <button aria-label="팝업 닫기" onClick={() => togglePopup(index)}>X</button>
                                            </div>
                                        </div>
                                        </PopupPortal>
                                    )
                                }
                                <a href={project.code} target='_blank' className="pj" rel='noreferrer noopener'>
                                CODE
                                </a>
                                <a href={project.demo} target='_blank' className="pj" rel='noreferrer noopener'>
                                    DEMO
                                </a>
                            </div>
                            
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Project;