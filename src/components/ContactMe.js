import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"
import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function ContactMe() {
  return (
    <section class="contacts5 cid-sS9imiESnT" id="contacts5-5">
        <div class="container">
            <div class="mbr-row mbr-jc-c main-row mbr-pt-4">
                <div data-aos="fade-right" class="mbr-col-md-12 mbr-col-sm-12 img-content mbr-col-lg-7 md-pb">
                    <amp-img src="images/mybg-1000x563.jpg" alt="image" width="632.9928952042629" height="356.375" layout="responsive" class="mobirise-loader">
                        <div placeholder="" class="placeholder">
                            <div class="mobirise-spinner">
                                <em></em>
                                <em></em>
                                <em></em>
                            </div>
                        </div>
                    </amp-img>
                </div>
                <div data-aos="fade-left" class="mbr-col-md-12 mbr-col-sm-12 contact-content mbr-flex mbr-col-lg-5">
                    <div class="mbr-flex mbr-column content_block">
                        <div class="mbr-pb-4">
                            <h2 class="mbr-section-title align-left mbr-fonts-style mbr-bold display-2">
                                Get in touch</h2>
                            <h3 class="mbr-section-subtitle align-left mbr-regular mbr-fonts-style mbr-pt-2 display-7">
                                Feel free to contact me anytime!</h3>
                        </div>
                        <div class="list-box">
                            <div class="list-item mbr-flex mbr-pb-2">
                                <div class="iconfont-wrapper">
                                    <span class="mbr-iconfont mobi-mbri-phone mobi-mbri"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32"><path d="M18.9 24l-.7-.4C14.4 21.5 11 19.1 7.9 16 4.9 13 2.4 9.6.4 5.8L0 5.1 5.1 0l6.2 6.2-2 2.9 5.5 5.5 2.9-2 6.2 6.2-5 5.2zm-9.6-9.3c2.8 2.7 5.8 5 9.2 6.9l2.7-2.7-3.6-3.6-2.9 2-7.9-7.9 2-2.9-3.7-3.7-2.6 2.7c1.9 3.4 4.1 6.4 6.8 9.2z"></path></svg></span>
                                </div>
                                <p class="mbr-fonts-style list-item-text display-7">+62 (0) 813 1668 4935</p>
                            </div>
                        <div class="list-item mbr-flex mbr-pb-2">
                            <div class="iconfont-wrapper">
                                <span class="mbr-iconfont mobi-mbri-letter mobi-mbri">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                                        <path d="M0 4v16h24V4H0zm19.8 2L12 10.7 4.2 6h15.6zM2 18V7l10 6 10-6v11H2z"></path>
                                    </svg>
                                </span>
                            </div>
                            <p class="mbr-fonts-style list-item-text display-7">
                                <a href="mailto:brandondani33@gmail.com" class="text-white">brandondani33@gmail.com</a>
                                <br/>
                                <a href="mailto:matthew.brandon@student.umn.ac.id" class="text-white">matthew.brandon@student.umn.ac.id</a>
                            </p>
                        </div>
                        <div class="list-item mbr-flex last-child">
                            <div class="iconfont-wrapper">
                                <span class="mbr-iconfont mobi-mbri-map-pin mobi-mbri"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32"><path d="M12 0C7 0 3 4 3 9c0 7.4 8.1 14.3 8.4 14.5l.6.5.6-.5c.3-.2 8.4-7.1 8.4-14.5 0-5-4-9-9-9zm0 21.5C10.2 19.9 5 14.3 5 9c0-3.9 3.1-7 7-7s7 3.1 7 7c0 5.3-5.2 10.9-7 12.5zM12 5C9.8 5 8 6.8 8 9s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></svg></span>
                            </div>
                            <p class="mbr-fonts-style list-item-text display-7">Semarang and Gading Serpong</p>
                        </div>
                    </div>
                    <div class="icons-list social align-left mbr-pt-4">
                        <a href="https://github.com/MatthewBrandon21" target="_blank">
                            <span class="iconfont-wrapper">
                                <FontAwesomeIcon icon={faGithub} size="2x"/>
                                <span class="amp-iconfont fa-github fa"><svg width="32" height="32" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path></svg></span>
                            </span>
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank">
                            <span class="iconfont-wrapper">
                                <FontAwesomeIcon icon={faLinkedinIn} size="2x"/>
                                <span class="amp-iconfont fa-linkedin fa"><svg width="32" height="32" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path></svg></span>
                            </span>
                        </a>
                        <a href="https://www.instagram.com/matthew.brandon.dani/" target="_blank">
                            <span class="iconfont-wrapper">
                                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                <span class="amp-iconfont fa-instagram fa"><svg width="32" height="32" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M1152 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm138 0q0 164-115 279t-279 115-279-115-115-279 115-279 279-115 279 115 115 279zm108-410q0 38-27 65t-65 27-65-27-27-65 27-65 65-27 65 27 27 65zm-502-220q-7 0-76.5-.5t-105.5 0-96.5 3-103 10-71.5 18.5q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103-3 96.5 0 105.5.5 76.5-.5 76.5 0 105.5 3 96.5 10 103 18.5 71.5q20 50 58 88t88 58q29 11 71.5 18.5t103 10 96.5 3 105.5 0 76.5-.5 76.5.5 105.5 0 96.5-3 103-10 71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103 3-96.5 0-105.5-.5-76.5.5-76.5 0-105.5-3-96.5-10-103-18.5-71.5q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10-96.5-3-105.5 0-76.5.5zm768 630q0 229-5 317-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124t-124-322q-5-88-5-317t5-317q10-208 124-322t322-124q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317z"></path></svg></span>
                            </span>
                        </a>
                        <a href="https://wa.me/+6281316684935" target="_blank">
                            <span class="iconfont-wrapper">
                                <FontAwesomeIcon icon={faWhatsapp} size="2x"/>
                                <span class="amp-iconfont fa-whatsapp fa"><svg width="32" height="32" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M1113 974q13 0 97.5 44t89.5 53q2 5 2 15 0 33-17 76-16 39-71 65.5t-102 26.5q-57 0-190-62-98-45-170-118t-148-185q-72-107-71-194v-8q3-91 74-158 24-22 52-22 6 0 18 1.5t19 1.5q19 0 26.5 6.5t15.5 27.5q8 20 33 88t25 75q0 21-34.5 57.5t-34.5 46.5q0 7 5 15 34 73 102 137 56 53 151 101 12 7 22 7 15 0 54-48.5t52-48.5zm-203 530q127 0 243.5-50t200.5-134 134-200.5 50-243.5-50-243.5-134-200.5-200.5-134-243.5-50-243.5 50-200.5 134-134 200.5-50 243.5q0 203 120 368l-79 233 242-77q158 104 345 104zm0-1382q153 0 292.5 60t240.5 161 161 240.5 60 292.5-60 292.5-161 240.5-240.5 161-292.5 60q-195 0-365-94l-417 134 136-405q-108-178-108-389 0-153 60-292.5t161-240.5 240.5-161 292.5-60z"></path></svg></span>
                            </span>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default ContactMe;
