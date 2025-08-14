import { introduce, skill, webskill  } from "../contents/textdata";


function Aboutme(){
    return(
        <section id="aboutme">
            <div className="abuot-inner">
                <div id="introduce">
                    <div className="about-box" >
                        <div className="title">
                            <h2>INTRODUCE</h2>
                        </div>
                        <div className="introduce">
                            {
                                introduce.map((intro,index)=>(
                                    <div key={index} className="item">
                                        <h3>{intro.title}</h3>
                                        <p>{intro.desc}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div id="skill">
                    <div className="about-box" >
                        <div className="title">
                            <h2>MY SKILL</h2>
                        </div>
                        <div className="skill">
                            {
                                skill.map((skill,index)=>(
                                    <div key={index} className="item">
                                        <h3>{skill.title}</h3>
                                        <div>
                                            <p>{skill.desc[0]}</p>
                                            <p>{skill.desc[1]}</p>
                                            <p>{skill.desc[2]}</p>
                                            <p>{skill.desc[3]}</p>
                                            <p>{skill.desc[4]}</p>
                                        </div>
                                    </div>
                                ))
                            }
                            {
                                webskill.map((skill,index)=>(
                                    <div key={index} className="item">
                                        <h3>{skill.title}</h3>
                                        <div>
                                            <p>{skill.desc[0]}</p>
                                            <p>{skill.desc[1]}</p>
                                            <p>{skill.desc[2]}</p>
                                            <p>{skill.desc[3]}</p>
                                            <p>{skill.desc[4]}</p>
                                            <p>{skill.desc[5]}</p>
                                            <p>{skill.desc[6]}</p>
                                            <p>{skill.desc[7]}</p>
                                            <p>{skill.desc[8]}</p>
                                            <p>{skill.desc[9]}</p>
                                            <p>{skill.desc[10]}</p>
                                            <p>{skill.desc[11]}</p>
                                            <p>{skill.desc[12]}</p>
                                            <p>{skill.desc[13]}</p>
                                            <p>{skill.desc[14]}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutme;