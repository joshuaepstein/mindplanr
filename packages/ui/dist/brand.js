var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Brand = ({ size, className }) => {
    const sizing = size !== null && size !== void 0 ? size : 100;
    // if the width is 914, the height is 150
    const height = (150 / 914) * sizing;
    return (_jsx("svg", { viewBox: "0 0 914 150", fill: "none", xmlns: "http://www.w3.org/2000/svg", width: sizing, height: height, className: className, children: _jsxs("g", { children: [_jsx("path", { d: "M128.747 71.1295C131.36 98.8393 132.392 115.246 131.842 120.344C131.429 123.929 130.157 127.339 128.025 130.58C125.893 133.817 123.383 136.268 120.495 137.92C116.231 140.125 111.727 140.817 106.981 139.987C102.236 139.161 98.2822 136.955 95.1188 133.371C92.918 131.027 91.233 128.375 90.0642 125.411C88.895 122.446 87.9667 118.138 87.279 112.487C87.1413 111.522 87.0037 110.625 86.8665 109.799C86.7289 108.973 86.5913 108.317 86.4536 107.835C86.316 107.353 86.2474 107.143 86.2474 107.214C86.2474 107.281 85.9035 108.661 85.2158 111.348C84.5281 114.04 83.084 117 80.8832 120.241C78.6828 123.482 75.6567 125.929 71.8056 127.58C69.1927 128.821 66.3042 129.442 63.1408 129.442C60.1151 129.442 57.3642 128.893 54.8885 127.79C52.4129 126.687 50.5903 125.549 49.4215 124.375C48.2522 123.205 46.4296 121.241 43.954 118.482L43.7477 122.205C43.7477 124.272 43.2319 126.58 42.2003 129.134C41.1687 131.683 39.8966 133.714 38.3835 135.232C37.0085 136.75 35.0139 138.13 32.4007 139.366C29.7874 140.607 27.0369 141.161 24.1484 141.022C20.985 141.022 18.8532 140.817 17.7531 140.402C15.1398 139.576 12.5608 137.853 10.0161 135.232C7.4719 132.612 5.58065 129.647 4.34283 126.339C1.59192 118.759 0.147872 108.491 0.0102377 95.5312C-0.127397 82.5714 1.11042 69.6831 3.7237 56.8661C7.85006 36.875 15.7585 22.6786 27.4494 14.2679C34.7391 9.16971 42.166 7.23658 49.7306 8.47765C57.2956 9.71872 63.4161 13.9241 68.0921 21.0937L70.5677 24.8125L74.075 21.9197C81.64 15.5759 89.7546 13.1652 98.4198 14.6831C107.085 16.1965 113.961 21.2992 119.05 29.9822C123.589 37.7009 126.821 51.4196 128.747 71.1295Z", fill: "#7800D4" }), _jsx("path", { d: "M175.166 57.2767C176.542 96.0133 176.954 117.036 176.404 120.344C175.029 126.96 171.453 131.821 165.676 134.924C159.9 138.022 154.054 138.196 148.14 135.437C143.051 132.96 139.613 129.165 137.825 124.067C136.862 121.585 136.243 117.036 135.968 110.42C134.455 83.6785 133.698 63.8259 133.698 50.8661C133.698 46.5938 133.802 43.8036 134.008 42.4956C134.214 41.1831 134.73 39.6339 135.555 37.8392C138.031 32.4642 141.813 28.7098 146.902 26.5714C151.991 24.433 157.046 24.4017 162.066 26.4687C167.086 28.5357 170.834 32.3974 173.31 38.0491C174.135 39.9777 174.754 46.3883 175.166 57.2767Z", fill: "#7800D4" }), _jsx("path", { d: "M211.889 139.781C207.075 141.848 201.986 141.987 196.623 140.196C194.284 139.504 191.946 138.161 189.608 136.161C187.27 134.165 185.55 132.129 184.45 130.063C183.212 127.304 182.353 124.549 181.871 121.79C181.39 119.036 181.012 114.554 180.737 108.353C180.462 98.1519 180.84 87.9152 181.871 77.6474C182.903 67.3751 184.485 57.8616 186.617 49.1116C188.749 40.3571 191.327 33.0849 194.353 27.2947C198.204 19.8527 203.087 14.6831 209.001 11.7858C211.339 10.6831 213.024 10.0312 214.056 9.82142C215.087 9.61606 216.91 9.51341 219.523 9.51341C222.136 9.51341 223.993 9.61606 225.093 9.82142C226.194 10.0312 227.844 10.6831 230.045 11.7858C231.97 12.7501 233.758 13.8884 235.408 15.1964C237.059 16.5089 238.4 17.75 239.431 18.9197C240.463 20.0938 241.667 21.7455 243.042 23.8839C244.417 26.0223 245.415 27.6741 246.033 28.8483C246.653 30.0179 247.719 31.9822 249.231 34.7411C250.194 28.6741 250.916 24.4688 251.398 22.125C251.879 19.7813 252.704 17.2992 253.873 14.6831C255.043 12.0625 256.659 9.79021 258.722 7.85717C263.123 3.72325 268.349 1.86164 274.401 2.27682C282.653 2.68753 288.499 6.4777 291.937 13.6473C293.312 16.4063 294.138 19.1295 294.413 21.817C294.688 24.5045 294.619 28.6742 294.206 34.3259C292.556 55.0045 291.387 69.3036 290.699 77.2321C290.011 85.1562 289.393 91.0536 288.843 94.9107C288.293 98.7724 287.674 102.147 286.986 105.045C284.235 115.933 279.009 123.308 271.306 127.17C265.117 130.201 258.859 130.616 252.532 128.411C243.18 125.103 234.996 116.415 227.982 102.353L224.887 96.3572L224.474 114.763C224.199 120.138 223.958 123.585 223.752 125.103C223.546 126.616 223.03 128.134 222.205 129.647C221.242 131.719 219.764 133.714 217.769 135.647C215.775 137.576 213.815 138.955 211.889 139.781Z", fill: "#7800D4" }), _jsx("path", { d: "M310.711 62.6563C308.236 61.6875 305.829 60.0358 303.49 57.6921C301.152 55.3483 299.639 53.0046 298.952 50.6608C297.026 45.1474 297.233 39.8393 299.571 34.7411C302.046 29.3616 306.654 25.0224 313.393 21.7143C317.657 19.6429 321.199 18.2991 324.018 17.6786C326.838 17.0581 330.723 16.75 335.675 16.75C344.064 16.75 351.698 18.3349 358.575 21.5045C363.664 23.8483 368.959 27.2947 374.461 31.8438C379.962 36.3929 384.088 40.7366 386.839 44.8705C393.991 55.7634 396.882 67.0671 395.504 78.7813C393.441 95.4644 386.496 108.214 374.667 117.036C368.615 121.723 362.495 125.17 356.305 127.375C352.317 128.893 347.641 129.96 342.277 130.58C336.912 131.201 332.924 131.165 330.311 130.478C321.508 127.996 316.213 121.585 314.425 111.246C313.462 106.009 313.325 90.2233 314.012 63.8929L310.711 62.6563Z", fill: "#7800D4" }), _jsx("path", { d: "M442.132 106.491C441.994 107.179 441.82 111.214 441.615 118.589C441.406 125.964 440.894 130.888 440.065 133.371C438.279 138.058 434.943 141.643 430.061 144.125C425.179 146.603 420.4 147.156 415.723 145.777C406.507 143.161 401.006 136.473 399.216 125.719C398.668 121.862 398.632 111.969 399.113 96.0492C399.594 80.1251 400.454 66.0983 401.692 53.9688C402.107 46.3885 402.107 42.5983 401.692 42.5983C401.144 42.5983 400.147 42.25 398.704 41.5625C397.256 40.875 395.779 40.0447 394.266 39.0804C392.753 38.1161 391.653 37.2903 390.965 36.5983C387.527 33.018 385.808 28.4688 385.808 22.951C385.808 12.201 392.616 5.03125 406.231 1.44642C409.398 0.482138 414.209 0 420.676 0C426.863 0 432.088 0.553663 436.355 1.65634C451.21 5.65188 463.24 12.2679 472.456 21.5045C476.309 25.3661 478.924 28.4688 480.295 30.8125C489.101 45.5625 488.754 60.1027 479.267 74.442C476.242 78.9911 471.356 84.2278 464.617 90.1563C457.877 96.0849 451.895 100.357 446.671 102.973C443.918 104.353 442.404 105.527 442.132 106.491Z", fill: "#7800D4" }), _jsx("path", { d: "M562.408 105.665C569.972 109.384 573.891 115.384 574.167 123.652C574.444 127.098 573.891 129.996 572.519 132.339C569.767 138.679 564.952 142.746 558.074 144.536C556.426 145.089 551.54 145.639 543.429 146.192C536.69 146.741 529.194 147.5 520.94 148.464C511.586 149.567 505.399 149.982 502.37 149.705C498.384 149.295 494.74 147.813 491.44 145.264C488.139 142.71 485.801 139.576 484.424 135.853C483.462 133.647 483.048 130.755 483.186 127.17C483.324 124.411 483.837 122 484.732 119.929C485.627 117.862 486.554 116.246 487.516 115.071C488.482 113.902 490.063 112.281 492.264 110.214C492.812 109.661 493.226 109.246 493.502 108.973C491.44 83.884 490.611 61.8974 491.026 43.009L491.23 29.3617L493.293 25.0224C496.184 19.3706 500.446 15.7502 506.085 14.1653C511.724 12.5805 517.056 13.2323 522.076 16.1296C527.096 19.0224 530.361 23.4376 531.875 29.3617C532.423 31.0179 532.837 41.9778 533.113 62.2412C533.523 82.3662 534.009 96.2188 534.556 103.804H546.73C552.778 103.804 556.458 103.871 557.767 104.009C559.072 104.147 560.622 104.697 562.408 105.665Z", fill: "#7800D4" }), _jsx("path", { d: "M671.959 125.719C671.545 129.58 670.204 133.13 667.937 136.371C665.665 139.607 662.882 141.987 659.581 143.504C657.514 144.33 655.007 144.813 652.049 144.951C649.091 145.089 646.651 144.812 644.726 144.125C640.735 142.607 637.573 140.335 635.234 137.299C632.896 134.268 631.177 130.134 630.076 124.893C629.938 123.929 627.943 123.513 624.095 123.652L618.522 123.862L617.493 125.929C615.431 130.062 612.197 133.165 607.797 135.232C603.668 136.888 599.614 137.402 595.623 136.781C591.637 136.161 588.096 134.335 585 131.304C581.904 128.272 579.945 124.549 579.121 120.138C578.292 116.138 578.395 112.107 579.428 108.04C580.461 103.973 582.831 98.2901 586.546 90.9821C590.399 83.2634 594.318 74.9241 598.305 65.9642C602.706 56.7276 605.939 50.2142 608.002 46.4241C610.064 42.6294 612.197 39.6339 614.398 37.4286C620.175 31.5 626.95 29.1919 634.718 30.5C642.49 31.808 648.575 36.1875 652.976 43.6295C657.652 51.7634 662.467 68.3036 667.42 93.2545C670.859 110.763 672.369 121.585 671.959 125.719Z", fill: "#7800D4" }), _jsx("path", { d: "M707.441 139.781C702.631 141.848 697.54 141.987 692.177 140.196C689.838 139.504 687.5 138.161 685.161 136.161C682.823 134.165 681.104 132.129 680.003 130.063C678.765 127.304 677.906 124.549 677.425 121.79C676.943 119.036 676.565 114.554 676.289 108.353C676.017 98.1519 676.396 87.9152 677.425 77.6474C678.458 67.3751 680.039 57.8616 682.168 49.1116C684.302 40.3571 686.881 33.0849 689.905 27.2947C693.758 19.8527 698.64 14.6831 704.555 11.7858C706.893 10.6831 708.577 10.0312 709.611 9.82142C710.639 9.61606 712.461 9.51341 715.076 9.51341C717.69 9.51341 719.548 9.61606 720.648 9.82142C721.748 10.0312 723.396 10.6831 725.597 11.7858C727.525 12.7501 729.311 13.8884 730.964 15.1964C732.612 16.5089 733.953 17.75 734.986 18.9197C736.015 20.0938 737.222 21.7455 738.594 23.8839C739.97 26.0223 740.968 27.6741 741.587 28.8483C742.206 30.0179 743.271 31.9822 744.785 34.7411C745.747 28.6741 746.469 24.4688 746.95 22.125C747.431 19.7813 748.26 17.2992 749.427 14.6831C750.598 12.0625 752.21 9.79021 754.277 7.85717C758.678 3.72325 763.903 1.86164 769.956 2.27682C778.205 2.68753 784.053 6.4777 787.492 13.6473C788.868 16.4063 789.692 19.1295 789.964 21.817C790.24 24.5045 790.173 28.6742 789.759 34.3259C788.111 55.0045 786.94 69.3036 786.254 77.2321C785.563 85.1562 784.944 91.0536 784.396 94.9107C783.844 98.7724 783.229 102.147 782.539 105.045C779.791 115.933 774.561 123.308 766.86 127.17C760.669 130.201 754.411 130.616 748.086 128.411C738.732 125.103 730.55 116.415 723.534 102.353L720.439 96.3572L720.029 114.763C719.753 120.138 719.512 123.585 719.307 125.103C719.098 126.616 718.581 128.134 717.757 129.647C716.795 131.719 715.316 133.714 713.321 135.647C711.33 137.576 709.37 138.955 707.441 139.781Z", fill: "#7800D4" }), _jsx("path", { d: "M801.933 54.384L799.456 51.4866C796.57 48.317 794.882 44.5625 794.401 40.2188C793.92 35.875 794.712 31.7768 796.775 27.9152C798.561 24.6071 801.006 21.884 804.097 19.7456C807.193 17.6117 811.834 15.5759 818.026 13.6473C829.304 9.7902 840.239 7.85718 850.826 7.85718C856.465 7.85718 860.697 8.13401 863.516 8.68758C866.336 9.23669 869.601 10.4063 873.315 12.2009C875.102 13.0268 877.03 14.2679 879.093 15.9242C881.155 17.576 883.012 19.4019 884.66 21.4019C886.313 23.4019 887.551 25.3661 888.375 27.2947C891.676 34.1876 892.571 41.5269 891.056 49.3171C889.546 57.1072 885.76 64.7902 879.712 72.3706L875.378 77.7501L879.297 80.2322C886.727 85.1921 893.671 91.2947 900.134 98.5313C906.602 105.768 910.726 112.071 912.512 117.451C913.751 120.897 914.062 124.447 913.443 128.098C912.824 131.75 911.345 135.027 909.007 137.92C906.945 140.402 903.951 142.299 900.032 143.607C896.112 144.915 892.638 145.228 889.613 144.536C886.589 143.71 884.077 142.54 882.086 141.022C880.09 139.505 878.3 137.679 876.718 135.545C875.137 133.406 873.454 131.129 871.663 128.719C869.877 126.308 867.093 123.513 863.311 120.344C859.525 117.174 855.022 114.143 849.797 111.246L845.463 108.763C845.049 110.558 844.777 114.281 844.639 119.929C844.501 125.446 843.815 129.513 842.577 132.13C840.377 137.232 836.764 140.817 831.744 142.884C826.725 144.951 821.669 145.018 816.578 143.089C814.106 142.263 811.767 140.714 809.567 138.438C807.367 136.161 805.852 133.786 805.028 131.304C804.2 129.237 803.688 126.134 803.478 122C803.273 117.862 802.966 104.491 802.552 81.884L801.933 54.384Z", fill: "#7800D4" })] }) }));
};
export const BrandWithoutSize = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("svg", Object.assign({ viewBox: "0 0 914 150", xmlns: "http://www.w3.org/2000/svg", className: className }, props, { children: _jsxs("g", { children: [_jsx("path", { d: "M128.747 71.1295C131.36 98.8393 132.392 115.246 131.842 120.344C131.429 123.929 130.157 127.339 128.025 130.58C125.893 133.817 123.383 136.268 120.495 137.92C116.231 140.125 111.727 140.817 106.981 139.987C102.236 139.161 98.2822 136.955 95.1188 133.371C92.918 131.027 91.233 128.375 90.0642 125.411C88.895 122.446 87.9667 118.138 87.279 112.487C87.1413 111.522 87.0037 110.625 86.8665 109.799C86.7289 108.973 86.5913 108.317 86.4536 107.835C86.316 107.353 86.2474 107.143 86.2474 107.214C86.2474 107.281 85.9035 108.661 85.2158 111.348C84.5281 114.04 83.084 117 80.8832 120.241C78.6828 123.482 75.6567 125.929 71.8056 127.58C69.1927 128.821 66.3042 129.442 63.1408 129.442C60.1151 129.442 57.3642 128.893 54.8885 127.79C52.4129 126.687 50.5903 125.549 49.4215 124.375C48.2522 123.205 46.4296 121.241 43.954 118.482L43.7477 122.205C43.7477 124.272 43.2319 126.58 42.2003 129.134C41.1687 131.683 39.8966 133.714 38.3835 135.232C37.0085 136.75 35.0139 138.13 32.4007 139.366C29.7874 140.607 27.0369 141.161 24.1484 141.022C20.985 141.022 18.8532 140.817 17.7531 140.402C15.1398 139.576 12.5608 137.853 10.0161 135.232C7.4719 132.612 5.58065 129.647 4.34283 126.339C1.59192 118.759 0.147872 108.491 0.0102377 95.5312C-0.127397 82.5714 1.11042 69.6831 3.7237 56.8661C7.85006 36.875 15.7585 22.6786 27.4494 14.2679C34.7391 9.16971 42.166 7.23658 49.7306 8.47765C57.2956 9.71872 63.4161 13.9241 68.0921 21.0937L70.5677 24.8125L74.075 21.9197C81.64 15.5759 89.7546 13.1652 98.4198 14.6831C107.085 16.1965 113.961 21.2992 119.05 29.9822C123.589 37.7009 126.821 51.4196 128.747 71.1295Z", fill: "currentColor" }), _jsx("path", { d: "M175.166 57.2767C176.542 96.0133 176.954 117.036 176.404 120.344C175.029 126.96 171.453 131.821 165.676 134.924C159.9 138.022 154.054 138.196 148.14 135.437C143.051 132.96 139.613 129.165 137.825 124.067C136.862 121.585 136.243 117.036 135.968 110.42C134.455 83.6785 133.698 63.8259 133.698 50.8661C133.698 46.5938 133.802 43.8036 134.008 42.4956C134.214 41.1831 134.73 39.6339 135.555 37.8392C138.031 32.4642 141.813 28.7098 146.902 26.5714C151.991 24.433 157.046 24.4017 162.066 26.4687C167.086 28.5357 170.834 32.3974 173.31 38.0491C174.135 39.9777 174.754 46.3883 175.166 57.2767Z", fill: "currentColor" }), _jsx("path", { d: "M211.889 139.781C207.075 141.848 201.986 141.987 196.623 140.196C194.284 139.504 191.946 138.161 189.608 136.161C187.27 134.165 185.55 132.129 184.45 130.063C183.212 127.304 182.353 124.549 181.871 121.79C181.39 119.036 181.012 114.554 180.737 108.353C180.462 98.1519 180.84 87.9152 181.871 77.6474C182.903 67.3751 184.485 57.8616 186.617 49.1116C188.749 40.3571 191.327 33.0849 194.353 27.2947C198.204 19.8527 203.087 14.6831 209.001 11.7858C211.339 10.6831 213.024 10.0312 214.056 9.82142C215.087 9.61606 216.91 9.51341 219.523 9.51341C222.136 9.51341 223.993 9.61606 225.093 9.82142C226.194 10.0312 227.844 10.6831 230.045 11.7858C231.97 12.7501 233.758 13.8884 235.408 15.1964C237.059 16.5089 238.4 17.75 239.431 18.9197C240.463 20.0938 241.667 21.7455 243.042 23.8839C244.417 26.0223 245.415 27.6741 246.033 28.8483C246.653 30.0179 247.719 31.9822 249.231 34.7411C250.194 28.6741 250.916 24.4688 251.398 22.125C251.879 19.7813 252.704 17.2992 253.873 14.6831C255.043 12.0625 256.659 9.79021 258.722 7.85717C263.123 3.72325 268.349 1.86164 274.401 2.27682C282.653 2.68753 288.499 6.4777 291.937 13.6473C293.312 16.4063 294.138 19.1295 294.413 21.817C294.688 24.5045 294.619 28.6742 294.206 34.3259C292.556 55.0045 291.387 69.3036 290.699 77.2321C290.011 85.1562 289.393 91.0536 288.843 94.9107C288.293 98.7724 287.674 102.147 286.986 105.045C284.235 115.933 279.009 123.308 271.306 127.17C265.117 130.201 258.859 130.616 252.532 128.411C243.18 125.103 234.996 116.415 227.982 102.353L224.887 96.3572L224.474 114.763C224.199 120.138 223.958 123.585 223.752 125.103C223.546 126.616 223.03 128.134 222.205 129.647C221.242 131.719 219.764 133.714 217.769 135.647C215.775 137.576 213.815 138.955 211.889 139.781Z", fill: "currentColor" }), _jsx("path", { d: "M310.711 62.6563C308.236 61.6875 305.829 60.0358 303.49 57.6921C301.152 55.3483 299.639 53.0046 298.952 50.6608C297.026 45.1474 297.233 39.8393 299.571 34.7411C302.046 29.3616 306.654 25.0224 313.393 21.7143C317.657 19.6429 321.199 18.2991 324.018 17.6786C326.838 17.0581 330.723 16.75 335.675 16.75C344.064 16.75 351.698 18.3349 358.575 21.5045C363.664 23.8483 368.959 27.2947 374.461 31.8438C379.962 36.3929 384.088 40.7366 386.839 44.8705C393.991 55.7634 396.882 67.0671 395.504 78.7813C393.441 95.4644 386.496 108.214 374.667 117.036C368.615 121.723 362.495 125.17 356.305 127.375C352.317 128.893 347.641 129.96 342.277 130.58C336.912 131.201 332.924 131.165 330.311 130.478C321.508 127.996 316.213 121.585 314.425 111.246C313.462 106.009 313.325 90.2233 314.012 63.8929L310.711 62.6563Z", fill: "currentColor" }), _jsx("path", { d: "M442.132 106.491C441.994 107.179 441.82 111.214 441.615 118.589C441.406 125.964 440.894 130.888 440.065 133.371C438.279 138.058 434.943 141.643 430.061 144.125C425.179 146.603 420.4 147.156 415.723 145.777C406.507 143.161 401.006 136.473 399.216 125.719C398.668 121.862 398.632 111.969 399.113 96.0492C399.594 80.1251 400.454 66.0983 401.692 53.9688C402.107 46.3885 402.107 42.5983 401.692 42.5983C401.144 42.5983 400.147 42.25 398.704 41.5625C397.256 40.875 395.779 40.0447 394.266 39.0804C392.753 38.1161 391.653 37.2903 390.965 36.5983C387.527 33.018 385.808 28.4688 385.808 22.951C385.808 12.201 392.616 5.03125 406.231 1.44642C409.398 0.482138 414.209 0 420.676 0C426.863 0 432.088 0.553663 436.355 1.65634C451.21 5.65188 463.24 12.2679 472.456 21.5045C476.309 25.3661 478.924 28.4688 480.295 30.8125C489.101 45.5625 488.754 60.1027 479.267 74.442C476.242 78.9911 471.356 84.2278 464.617 90.1563C457.877 96.0849 451.895 100.357 446.671 102.973C443.918 104.353 442.404 105.527 442.132 106.491Z", fill: "currentColor" }), _jsx("path", { d: "M562.408 105.665C569.972 109.384 573.891 115.384 574.167 123.652C574.444 127.098 573.891 129.996 572.519 132.339C569.767 138.679 564.952 142.746 558.074 144.536C556.426 145.089 551.54 145.639 543.429 146.192C536.69 146.741 529.194 147.5 520.94 148.464C511.586 149.567 505.399 149.982 502.37 149.705C498.384 149.295 494.74 147.813 491.44 145.264C488.139 142.71 485.801 139.576 484.424 135.853C483.462 133.647 483.048 130.755 483.186 127.17C483.324 124.411 483.837 122 484.732 119.929C485.627 117.862 486.554 116.246 487.516 115.071C488.482 113.902 490.063 112.281 492.264 110.214C492.812 109.661 493.226 109.246 493.502 108.973C491.44 83.884 490.611 61.8974 491.026 43.009L491.23 29.3617L493.293 25.0224C496.184 19.3706 500.446 15.7502 506.085 14.1653C511.724 12.5805 517.056 13.2323 522.076 16.1296C527.096 19.0224 530.361 23.4376 531.875 29.3617C532.423 31.0179 532.837 41.9778 533.113 62.2412C533.523 82.3662 534.009 96.2188 534.556 103.804H546.73C552.778 103.804 556.458 103.871 557.767 104.009C559.072 104.147 560.622 104.697 562.408 105.665Z", fill: "currentColor" }), _jsx("path", { d: "M671.959 125.719C671.545 129.58 670.204 133.13 667.937 136.371C665.665 139.607 662.882 141.987 659.581 143.504C657.514 144.33 655.007 144.813 652.049 144.951C649.091 145.089 646.651 144.812 644.726 144.125C640.735 142.607 637.573 140.335 635.234 137.299C632.896 134.268 631.177 130.134 630.076 124.893C629.938 123.929 627.943 123.513 624.095 123.652L618.522 123.862L617.493 125.929C615.431 130.062 612.197 133.165 607.797 135.232C603.668 136.888 599.614 137.402 595.623 136.781C591.637 136.161 588.096 134.335 585 131.304C581.904 128.272 579.945 124.549 579.121 120.138C578.292 116.138 578.395 112.107 579.428 108.04C580.461 103.973 582.831 98.2901 586.546 90.9821C590.399 83.2634 594.318 74.9241 598.305 65.9642C602.706 56.7276 605.939 50.2142 608.002 46.4241C610.064 42.6294 612.197 39.6339 614.398 37.4286C620.175 31.5 626.95 29.1919 634.718 30.5C642.49 31.808 648.575 36.1875 652.976 43.6295C657.652 51.7634 662.467 68.3036 667.42 93.2545C670.859 110.763 672.369 121.585 671.959 125.719Z", fill: "currentColor" }), _jsx("path", { d: "M707.441 139.781C702.631 141.848 697.54 141.987 692.177 140.196C689.838 139.504 687.5 138.161 685.161 136.161C682.823 134.165 681.104 132.129 680.003 130.063C678.765 127.304 677.906 124.549 677.425 121.79C676.943 119.036 676.565 114.554 676.289 108.353C676.017 98.1519 676.396 87.9152 677.425 77.6474C678.458 67.3751 680.039 57.8616 682.168 49.1116C684.302 40.3571 686.881 33.0849 689.905 27.2947C693.758 19.8527 698.64 14.6831 704.555 11.7858C706.893 10.6831 708.577 10.0312 709.611 9.82142C710.639 9.61606 712.461 9.51341 715.076 9.51341C717.69 9.51341 719.548 9.61606 720.648 9.82142C721.748 10.0312 723.396 10.6831 725.597 11.7858C727.525 12.7501 729.311 13.8884 730.964 15.1964C732.612 16.5089 733.953 17.75 734.986 18.9197C736.015 20.0938 737.222 21.7455 738.594 23.8839C739.97 26.0223 740.968 27.6741 741.587 28.8483C742.206 30.0179 743.271 31.9822 744.785 34.7411C745.747 28.6741 746.469 24.4688 746.95 22.125C747.431 19.7813 748.26 17.2992 749.427 14.6831C750.598 12.0625 752.21 9.79021 754.277 7.85717C758.678 3.72325 763.903 1.86164 769.956 2.27682C778.205 2.68753 784.053 6.4777 787.492 13.6473C788.868 16.4063 789.692 19.1295 789.964 21.817C790.24 24.5045 790.173 28.6742 789.759 34.3259C788.111 55.0045 786.94 69.3036 786.254 77.2321C785.563 85.1562 784.944 91.0536 784.396 94.9107C783.844 98.7724 783.229 102.147 782.539 105.045C779.791 115.933 774.561 123.308 766.86 127.17C760.669 130.201 754.411 130.616 748.086 128.411C738.732 125.103 730.55 116.415 723.534 102.353L720.439 96.3572L720.029 114.763C719.753 120.138 719.512 123.585 719.307 125.103C719.098 126.616 718.581 128.134 717.757 129.647C716.795 131.719 715.316 133.714 713.321 135.647C711.33 137.576 709.37 138.955 707.441 139.781Z", fill: "currentColor" }), _jsx("path", { d: "M801.933 54.384L799.456 51.4866C796.57 48.317 794.882 44.5625 794.401 40.2188C793.92 35.875 794.712 31.7768 796.775 27.9152C798.561 24.6071 801.006 21.884 804.097 19.7456C807.193 17.6117 811.834 15.5759 818.026 13.6473C829.304 9.7902 840.239 7.85718 850.826 7.85718C856.465 7.85718 860.697 8.13401 863.516 8.68758C866.336 9.23669 869.601 10.4063 873.315 12.2009C875.102 13.0268 877.03 14.2679 879.093 15.9242C881.155 17.576 883.012 19.4019 884.66 21.4019C886.313 23.4019 887.551 25.3661 888.375 27.2947C891.676 34.1876 892.571 41.5269 891.056 49.3171C889.546 57.1072 885.76 64.7902 879.712 72.3706L875.378 77.7501L879.297 80.2322C886.727 85.1921 893.671 91.2947 900.134 98.5313C906.602 105.768 910.726 112.071 912.512 117.451C913.751 120.897 914.062 124.447 913.443 128.098C912.824 131.75 911.345 135.027 909.007 137.92C906.945 140.402 903.951 142.299 900.032 143.607C896.112 144.915 892.638 145.228 889.613 144.536C886.589 143.71 884.077 142.54 882.086 141.022C880.09 139.505 878.3 137.679 876.718 135.545C875.137 133.406 873.454 131.129 871.663 128.719C869.877 126.308 867.093 123.513 863.311 120.344C859.525 117.174 855.022 114.143 849.797 111.246L845.463 108.763C845.049 110.558 844.777 114.281 844.639 119.929C844.501 125.446 843.815 129.513 842.577 132.13C840.377 137.232 836.764 140.817 831.744 142.884C826.725 144.951 821.669 145.018 816.578 143.089C814.106 142.263 811.767 140.714 809.567 138.438C807.367 136.161 805.852 133.786 805.028 131.304C804.2 129.237 803.688 126.134 803.478 122C803.273 117.862 802.966 104.491 802.552 81.884L801.933 54.384Z", fill: "currentColor" })] }) })));
};
