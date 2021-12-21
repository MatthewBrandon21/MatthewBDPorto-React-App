import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"
import './Main.css';

function TabSection() {
    useEffect(() => {
        Aos.init({duration: 2000});
        }, []);
    return (
        <section class="mbr-section tab1 tab cid-sS9igoA73r" id="tab1-3">
            <div class="container">
                <div class="mbr-row mbr-jc-c">
                    <div class="mbr-col-sm-12 mbr-col-md-12 mbr-col-lg-8">
                        <amp-selector role="tablist" layout="container" class="ampTabContainer mbr-flex flex-wrap">
                            <div data-aos="fade" role="tab" class="tab-button align-center text-black" selected="" aria-selected="true" option="a">
                                <h3 class="tab-head mbr-fonts-style mbr-black mbr-bold mbr-py-1 mbr-px-3 display-7">Interest</h3>
                            </div>
                            <div role="tabpanel" class="tab-content mbr-p-4 text-black">
                                <span class="line"></span>
                                <h2 class="mbr-section-title mbr-fonts-style align-center mbr-semibold display-5">Interest</h2>
                                <p class="mbr-text mbr-fonts-style align-center display-4 mbr-pt-2">My interests are in software and hardware such as cloud computing, decentralized computing (IoT), blockchain, and large networks. I want to be expert in kubernetes, docker, huawei, cloud services, redhat and more. I have several good projects supporting academically, practically, and business.</p>
                            </div>
                            <div data-aos="fade" role="tab" class="tab-button align-center text-black" option="b">
                                <h3 class="tab-head mbr-fonts-style mbr-black mbr-bold mbr-py-1 mbr-px-3 display-7">Education</h3>
                            </div>
                            <div role="tabpanel" class="tab-content mbr-p-4 text-black">
                                <h2 class="mbr-section-title mbr-fonts-style align-center mbr-semibold display-5">Education</h2>
                                <p class="mbr-text mbr-fonts-style align-center display-4 mbr-pt-2">- SMA Kolese Loyola (2016 - 2019)<br/>- Universitas Multimedia Nusantara (2019 - Now)</p>         
                            </div>
                            <div data-aos="fade" role="tab" class="tab-button align-center text-black" option="c">
                                <h3 class="tab-head mbr-fonts-style mbr-black mbr-bold mbr-py-1 mbr-px-3 display-7">Achievement</h3>
                            </div>
                            <div role="tabpanel" class="tab-content mbr-p-4 text-black">
                                <h2 class="mbr-section-title mbr-fonts-style align-center mbr-semibold display-5">Achievement</h2>
                                <p class="mbr-text mbr-fonts-style align-center display-4 mbr-pt-2">- 1st Place Overclock Contest by Technofest 2019<br/>(Overclocking with AMD Ryzen 3600 at 4.0Ghz and DDR4 Ram at 3600Mhz &amp; CL 19)<br/>- Laboratory assistant for Object Oriented Programming (Java) class<br/>- Laboratory assistant for Pengantar Teknologi Internet (HTML, CSS, JS, Angular) class&nbsp;</p>
                            </div>
                            <div data-aos="fade" role="tab" class="tab-button align-center text-black" option="d">
                                <h3 class="tab-head mbr-fonts-style mbr-black mbr-bold mbr-py-1 mbr-px-3 display-7">Organization</h3>
                            </div>
                            <div role="tabpanel" class="tab-content mbr-p-4 text-black">
                                <h2 class="mbr-section-title mbr-fonts-style align-center mbr-semibold display-5">
                                    Organization</h2>
                                <p class="mbr-text mbr-fonts-style align-center display-4 mbr-pt-2">- ACES (Assoctation of Computer Engineering Student) UMN GEN XI as Public Relation<br/>- ACES (Assoctation of Computer Engineering Student) UMN GEN XII as Coordinator of Research and Development<br/>- Perkenalan Prodi Teknik Komputer 2020 as BPH<br/>- Perkenalan Prodi Teknik Komputer 2021 as Leader<br/>- Company Visit ACES 2020 as Documentation and Publication<br/>- ACES League as Documentation and Publication<br/>- Moment Hunter gen 13 SMA Kolese Loyola as Editor</p>
                            </div>
                            <div data-aos="fade" role="tab" class="tab-button align-center text-black" option="e">
                                <h3 class="tab-head mbr-fonts-style mbr-black mbr-bold mbr-py-1 mbr-px-3 display-7">Skills</h3>
                            </div>
                            <div role="tabpanel" class="tab-content mbr-p-4 text-black">
                                <h2 class="mbr-section-title mbr-fonts-style align-center mbr-semibold display-5">
                                    Skills</h2>
                                <p class="mbr-text mbr-fonts-style align-center display-4 mbr-pt-2">- Adobe for Content Creation<br/>
                                                                                                    - 3D Print &amp; 3D Modeling<br/>
                                                                                                    - Wordpress<br/>
                                                                                                    - Figma<br/>
                                                                                                    - PHP using Codeigniter &amp; Laravel<br/>
                                                                                                    - Arduino Programming with I2C, SPI, UART, and Serial Communication Protocol<br/>
                                                                                                    - Backend Development using NodeJS, ExpressJS, and Python Flask<br/>
                                                                                                    - Frontend Development using React &amp; Angular (TS &amp; JS)<br/>
                                                                                                    - Android App Development with Java &amp; Kotlin<br/>
                                                                                                    - Tensorflow &amp; Keras for Image Processing Machine Learning<br/>
                                                                                                    - Database with MySQL &amp; MongoDB<br/>
                                                                                                    - Matlab for Computing &amp; Simulation<br/>
                                                                                                    - Cloud system administration with linux (Redhat, debian, etc)<br/>
                                                                                                    - Ability using C, C++, and R languages<br/>
                                                                                                    - Ability using proteus, ensp huawei, gns3, wireshark, etc<br/>
                                                                                                    - Ability in basic electronics<br/>
                                                                                                    - Ability speak in English (Intermediate)</p>
                            </div>
                            <div data-aos="fade" role="tab" class="tab-button align-center text-black" option="f">
                                <h3 class="tab-head mbr-fonts-style mbr-black mbr-bold mbr-py-1 mbr-px-3 display-7">Programming Languange</h3>
                            </div>
                            <div role="tabpanel" class="tab-content mbr-p-4 text-black">
                                <h2 class="mbr-section-title mbr-fonts-style align-center mbr-semibold display-5">Programming Languange</h2>
                                <p class="mbr-text mbr-fonts-style align-center display-4 mbr-pt-2">- C<br/>- C++<br/>- Python<br/>- Javascript<br/>- Typescript<br/>- PHP<br/>- Matlab<br/>- R<br/>- Java<br/>- Kotlin</p>
                            </div>
                        </amp-selector>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TabSection;
