import React, { useState } from "react";
import './App.css';
import './navber.css';

function Navbar() {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
      if (active === "nav__menu") {
        setActive("nav__menu nav__active");
      } else setActive("nav__menu");
  
      // Icon Toggler
      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");
    };
    return (
      <nav className="nav">
        <a href="https://github.com/SayantanmPaul" className="nav__brand w-44 h-11">
        <svg width="200" height="53" viewBox="0 0 710 186" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.488 132.664C26.5387 132.664 21.8027 132.109 17.28 131C12.8427 129.891 9.00267 128.397 5.76 126.52L7.296 109.368C11.136 111.757 15.1467 113.635 19.328 115C23.5947 116.28 27.52 116.92 31.104 116.92C35.2 116.92 38.528 116.067 41.088 114.36C43.648 112.653 44.928 110.392 44.928 107.576C44.928 105.272 44.0747 103.523 42.368 102.328C40.6613 101.048 37.9733 99.6827 34.304 98.232L31.232 96.952C30.8053 96.7813 30.336 96.6107 29.824 96.44C29.312 96.184 28.7147 95.928 28.032 95.672C23.2533 93.7093 19.4133 91.8747 16.512 90.168C13.6107 88.376 11.0933 85.9013 8.96 82.744C6.912 79.5867 5.888 75.4907 5.888 70.456C5.888 62.264 8.66133 55.8213 14.208 51.128C19.7547 46.4347 27.4773 44.088 37.376 44.088C44.8853 44.088 52.5653 45.624 60.416 48.696L57.6 65.592C54.4427 63.8 51.0293 62.392 47.36 61.368C43.776 60.344 40.3627 59.832 37.12 59.832C33.1093 59.832 29.9947 60.6427 27.776 62.264C25.5573 63.8 24.448 65.8907 24.448 68.536C24.448 70.84 25.216 72.632 26.752 73.912C28.288 75.192 30.7627 76.5573 34.176 78.008L39.424 80.056C44.3733 81.9333 48.4693 83.768 51.712 85.56C54.9547 87.352 57.728 89.9547 60.032 93.368C62.336 96.696 63.488 101.048 63.488 106.424C63.488 114.701 60.672 121.144 55.04 125.752C49.408 130.36 41.5573 132.664 31.488 132.664ZM99.887 132.92C93.743 132.92 88.9643 131.384 85.551 128.312C82.223 125.155 80.559 120.717 80.559 115V80.568H70.319V65.08H80.559V51C86.6177 49.976 92.591 49.208 98.479 48.696V65.08H115.119V80.568H98.479V111.672C98.479 113.464 98.991 114.829 100.015 115.768C101.124 116.707 102.66 117.176 104.623 117.176C107.012 117.176 109.743 116.621 112.815 115.512L116.783 129.08C111.322 131.64 105.69 132.92 99.887 132.92ZM156.909 132.92C150.253 132.92 144.365 131.469 139.245 128.568C134.21 125.667 130.285 121.613 127.469 116.408C124.653 111.117 123.245 105.016 123.245 98.104C123.245 91.192 124.61 85.1333 127.341 79.928C130.157 74.6373 134.082 70.5413 139.117 67.64C144.237 64.7387 150.125 63.288 156.781 63.288C163.437 63.288 169.282 64.7387 174.317 67.64C179.437 70.456 183.362 74.4667 186.093 79.672C188.909 84.8773 190.317 90.8933 190.317 97.72C190.317 104.632 188.909 110.776 186.093 116.152C183.362 121.443 179.437 125.581 174.317 128.568C169.282 131.469 163.48 132.92 156.909 132.92ZM156.781 117.304C161.389 117.304 165.058 115.555 167.789 112.056C170.605 108.472 172.013 103.779 172.013 97.976C172.013 92.1733 170.605 87.5653 167.789 84.152C165.058 80.6533 161.389 78.904 156.781 78.904C152.173 78.904 148.461 80.6533 145.645 84.152C142.914 87.5653 141.549 92.1733 141.549 97.976C141.549 103.779 142.914 108.472 145.645 112.056C148.461 115.555 152.173 117.304 156.781 117.304ZM204.079 65.08H222.127V75.832H223.151C225.626 71.48 228.058 68.28 230.447 66.232C232.922 64.184 235.994 63.16 239.663 63.16C241.199 63.16 242.479 63.3307 243.503 63.672L241.583 83.128C239.364 82.5307 237.572 82.232 236.207 82.232C234.244 82.232 232.495 82.616 230.959 83.384C229.508 84.152 228.186 85.176 226.991 86.456C225.882 87.736 224.26 89.6987 222.127 92.344V131H204.079V65.08ZM266.664 159.672C262.739 159.672 258.643 158.733 254.376 156.856L257.064 142.008C260.307 143.629 263.037 144.44 265.256 144.44C267.901 144.44 269.864 143.587 271.144 141.88C272.509 140.173 273.96 137.187 275.496 132.92L249.768 65.336L268.456 63.8L284.2 111.032L298.792 65.08H316.584C311.123 81.6347 305.363 97.9333 299.304 113.976C293.331 130.019 288.68 141.027 285.352 147C282.963 151.267 280.275 154.424 277.288 156.472C274.387 158.605 270.845 159.672 266.664 159.672Z" fill="#6A5495"/>
<path d="M349.863 132.664C344.914 132.664 340.178 132.109 335.655 131C331.218 129.891 327.378 128.397 324.135 126.52L325.671 109.368C329.511 111.757 333.522 113.635 337.703 115C341.97 116.28 345.895 116.92 349.479 116.92C353.575 116.92 356.903 116.067 359.463 114.36C362.023 112.653 363.303 110.392 363.303 107.576C363.303 105.272 362.45 103.523 360.743 102.328C359.036 101.048 356.348 99.6827 352.679 98.232L349.607 96.952C349.18 96.7813 348.711 96.6107 348.199 96.44C347.687 96.184 347.09 95.928 346.407 95.672C341.628 93.7093 337.788 91.8747 334.887 90.168C331.986 88.376 329.468 85.9013 327.335 82.744C325.287 79.5867 324.263 75.4907 324.263 70.456C324.263 62.264 327.036 55.8213 332.583 51.128C338.13 46.4347 345.852 44.088 355.751 44.088C363.26 44.088 370.94 45.624 378.791 48.696L375.975 65.592C372.818 63.8 369.404 62.392 365.735 61.368C362.151 60.344 358.738 59.832 355.495 59.832C351.484 59.832 348.37 60.6427 346.151 62.264C343.932 63.8 342.823 65.8907 342.823 68.536C342.823 70.84 343.591 72.632 345.127 73.912C346.663 75.192 349.138 76.5573 352.551 78.008L357.799 80.056C362.748 81.9333 366.844 83.768 370.087 85.56C373.33 87.352 376.103 89.9547 378.407 93.368C380.711 96.696 381.863 101.048 381.863 106.424C381.863 114.701 379.047 121.144 373.415 125.752C367.783 130.36 359.932 132.664 349.863 132.664ZM395.945 65.08H413.481L413.097 73.656H413.609C415.828 70.2427 418.516 67.64 421.673 65.848C424.916 64.056 428.585 63.16 432.681 63.16C440.105 63.16 445.908 66.0187 450.089 71.736C454.356 77.368 456.489 85.2613 456.489 95.416C456.489 107.448 453.332 116.707 447.017 123.192C440.788 129.592 431.87 132.792 420.265 132.792C418.814 132.792 416.638 132.707 413.737 132.536V158.904H395.945V65.08ZM422.057 117.048C427.433 117.048 431.486 115.299 434.217 111.8C437.033 108.301 438.441 103.181 438.441 96.44C438.441 90.9787 437.545 86.712 435.753 83.64C434.046 80.4827 431.657 78.904 428.585 78.904C425.854 78.904 423.209 80.0987 420.649 82.488C418.089 84.792 415.785 88.12 413.737 92.472V115.896C416.638 116.664 419.412 117.048 422.057 117.048ZM489.517 132.92C482.69 132.92 477.272 130.019 473.261 124.216C469.25 118.413 467.245 110.52 467.245 100.536C467.245 88.4187 470.317 79.2027 476.461 72.888C482.605 66.488 491.437 63.288 502.957 63.288C509.442 63.288 517.037 64.312 525.741 66.36V131H508.589L508.973 120.504H508.461C506.242 124.515 503.512 127.587 500.269 129.72C497.112 131.853 493.528 132.92 489.517 132.92ZM493.357 117.176C496.002 117.176 498.605 115.768 501.165 112.952C503.725 110.136 506.114 106.381 508.333 101.688V80.184C505.602 79.416 502.872 79.032 500.141 79.032C495.021 79.032 491.138 80.7813 488.493 84.28C485.933 87.7787 484.653 92.9413 484.653 99.768C484.653 105.144 485.421 109.411 486.957 112.568C488.493 115.64 490.626 117.176 493.357 117.176ZM573.04 132.92C562.117 132.92 553.627 130.019 547.568 124.216C541.595 118.413 538.608 110.221 538.608 99.64C538.608 92.472 540.016 86.1573 542.832 80.696C545.648 75.1493 549.616 70.8827 554.736 67.896C559.856 64.824 565.787 63.288 572.528 63.288C575.685 63.288 578.971 63.672 582.384 64.44C585.883 65.1227 588.571 65.9333 590.448 66.872L586.992 82.104C585.029 81.1653 582.853 80.44 580.464 79.928C578.16 79.3307 575.984 79.032 573.936 79.032C568.645 79.032 564.379 80.824 561.136 84.408C557.979 87.992 556.4 92.728 556.4 98.616C556.4 104.589 558.021 109.197 561.264 112.44C564.592 115.683 569.285 117.304 575.344 117.304C579.355 117.304 583.664 116.536 588.272 115L590.96 129.592C585.413 131.811 579.44 132.92 573.04 132.92ZM634.299 132.92C623.632 132.92 615.227 129.848 609.083 123.704C603.024 117.56 599.995 109.027 599.995 98.104C599.995 91.0213 601.318 84.8773 603.963 79.672C606.608 74.3813 610.32 70.328 615.099 67.512C619.963 64.696 625.638 63.288 632.123 63.288C641.68 63.288 649.019 66.36 654.139 72.504C659.259 78.648 661.819 87.5227 661.819 99.128C661.819 101.091 661.776 102.541 661.691 103.48H618.171C619.024 108.003 620.987 111.459 624.059 113.848C627.131 116.152 631.27 117.304 636.475 117.304C639.632 117.304 642.918 116.92 646.331 116.152C649.744 115.299 652.731 114.189 655.291 112.824L658.235 127.288C654.822 129.08 651.024 130.445 646.843 131.384C642.747 132.408 638.566 132.92 634.299 132.92ZM644.539 89.912C644.283 86.2427 643.003 83.3413 640.699 81.208C638.395 78.9893 635.323 77.88 631.483 77.88C627.814 77.88 624.784 78.9467 622.395 81.08C620.091 83.2133 618.64 86.1573 618.043 89.912H644.539Z" fill="#001253"/>
<path d="M688.504 135.352C684.92 135.352 681.805 134.029 679.16 131.384C676.6 128.824 675.32 125.752 675.32 122.168C675.32 118.499 676.6 115.384 679.16 112.824C681.805 110.179 684.92 108.856 688.504 108.856C692.173 108.856 695.288 110.179 697.848 112.824C700.408 115.384 701.688 118.499 701.688 122.168C701.688 125.752 700.408 128.824 697.848 131.384C695.288 134.029 692.173 135.352 688.504 135.352Z" fill="white"/>
</svg>

        </a>
        <ul className={active}>
          <li className="nav__item">
            <a href="https://github.com/SayantanmPaul" className="nav__link">
              Source Code
            </a>
          </li>
          <li className="nav__item">
            <a href="https://github.com/SayantanmPaul" className="nav__link">
              Blogs
            </a>
          </li>
          <li className="nav__item">
            <a href="https://github.com/SayantanmPaul" className="nav__link">
              Sign In
            </a>
          </li>
          <li className="nav__item">
          <button className="nav__link lg:block md:block hidden transition ease-in-out delay-30 bg-black text-white py-2 px-4 rounded-full scale-80 hover:scale-110 hover:bg-black duration-300">
            Get Started </button>
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;