import React from 'react';
import './Main.css';

function HeroSection() {
  const weightnormal = {
    fontWeight: 'normal'
  };
  return (
    <section class="header4 cid-sS9iblNfKB mbr-fullscreen" id="header4-1">
      <div class="container">
        <h1 class="mbr-fonts-style mbr-section-title align-left mbr-white mbr-bold mbr-pb-2 display-1">
              Henlo There! 😄</h1>
          <h2 class="mbr-fonts-style mbr-section-subtitle align-left mbr-white mbr-semibold mbr-pb-3 display-5">
            <span style={weightnormal}>My name is&nbsp;</span>
            <em>Matthew Brandon Dani</em>
            <br/>
            <span style={weightnormal}>Computer Engineering Student</span>
          </h2>
      </div>
    </section>
  );
}

export default HeroSection;
