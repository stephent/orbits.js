!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.orbitsjs=r():e.orbitsjs=r()}(self,(()=>(()=>{"use strict";var e={d:(r,t)=>{for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};function t(e){return e-360*Math.floor(e/360)}function n(e,r){void 0===e&&(e=0),void 0===r&&(r=0);const o=t(e),i=t(r);if(o<=i){const e=i-o;return e<=180?e:i-(o+360)}return-n(r,e)}function o(e,r,n){return t(e+r/60+n/3600)}function i(e){let r=t(e),n=Math.floor(r),o=Math.floor(60*(r-n));return{deg:n,arcMin:o,arcSec:3600*(r-n-o/60)}}function c(e){let r=t(e);const n=Math.floor(r/15),o=Math.floor((r-15*n)/.25);return{hour:n,minute:o,second:(r-15*n-.25*o)/.004166666666666667}}function u(e,r,n){return t(15*e+.25*r+.004166666666666667*n)}function a(e){return Math.sin(e*Math.PI/180)}function s(e){return Math.cos(e*Math.PI/180)}function f(e){return 180*e/Math.PI}e.r(r),e.d(r,{angleArcDeg:()=>o,angleDegArc:()=>i,angleDegHms:()=>c,angleDiff:()=>n,angleHmsDeg:()=>u,coordAzElEnu:()=>D,coordEclEq:()=>h,coordEfiEnu:()=>q,coordEfiPef:()=>O,coordEnuAzEl:()=>z,coordEnuEfi:()=>S,coordEqEcl:()=>g,coordInePer:()=>A,coordJ2000Mod:()=>m,coordModJ2000:()=>P,coordModTod:()=>L,coordPefEfi:()=>I,coordPefTod:()=>y,coordPerIne:()=>x,coordTodMod:()=>b,coordTodPef:()=>E,keplerPerifocal:()=>_,keplerPlanets:()=>w,keplerSolve:()=>k,limitAngleDeg:()=>t,nutationTerms:()=>l,timeGast:()=>T,timeGmst:()=>p});const d=[[0,0,0,0,1,-6798.4,-171996,-174.2,92025,8.9],[0,0,2,-2,2,182.6,-13187,-1.6,5736,-3.1],[0,0,2,0,2,13.7,-2274,-.2,977,-.5],[0,0,0,0,2,-3399.2,2062,.2,-895,.5],[0,-1,0,0,0,-365.3,-1426,3.4,54,-.1],[1,0,0,0,0,27.6,712,.1,-7,0],[0,1,2,-2,2,121.7,-517,1.2,224,-.6],[0,0,2,0,1,13.6,-386,-.4,200,0],[1,0,2,0,2,9.1,-301,0,129,-.1],[0,-1,2,-2,2,365.2,217,-.5,-95,.3],[-1,0,0,2,0,31.8,158,0,-1,0],[0,0,2,-2,1,177.8,129,.1,-70,0],[-1,0,2,0,2,27.1,123,0,-53,0],[1,0,0,0,1,27.7,63,.1,-33,0],[0,0,0,2,0,14.8,63,0,-2,0],[-1,0,2,2,2,9.6,-59,0,26,0],[-1,0,0,0,1,-27.4,-58,-.1,32,0],[1,0,2,0,1,9.1,-51,0,27,0],[-2,0,0,2,0,-205.9,-48,0,1,0],[-2,0,2,0,1,1305.5,46,0,-24,0],[0,0,2,2,2,7.1,-38,0,16,0],[2,0,2,0,2,6.9,-31,0,13,0],[2,0,0,0,0,13.8,29,0,-1,0],[1,0,2,-2,2,23.9,29,0,-12,0],[0,0,2,0,0,13.6,26,0,-1,0],[0,0,2,-2,0,173.3,-22,0,0,0],[-1,0,2,0,1,27,21,0,-10,0],[0,2,0,0,0,182.6,17,-.1,0,0],[0,2,2,-2,2,91.3,-16,.1,7,0],[-1,0,0,2,1,32,16,0,-8,0],[0,1,0,0,1,386,-15,0,9,0],[1,0,0,-2,1,-31.7,-13,0,7,0],[0,-1,0,0,1,-346.6,-12,0,6,0],[2,0,-2,0,0,-1095.2,11,0,0,0],[-1,0,2,2,1,9.5,-10,0,5,0],[1,0,2,2,2,5.6,-8,0,3,0],[0,-1,2,0,2,14.2,-7,0,3,0],[0,0,2,2,1,7.1,-7,0,3,0],[1,1,0,-2,0,-34.8,-7,0,0,0],[0,1,2,0,2,13.2,7,0,-3,0],[-2,0,0,2,1,-199.8,-6,0,3,0],[0,0,0,2,1,14.8,-6,0,3,0],[2,0,2,-2,2,12.8,6,0,-3,0],[1,0,0,2,0,9.6,6,0,0,0],[1,0,2,-2,1,23.9,6,0,-3,0],[0,0,0,-2,1,-14.7,-5,0,3,0],[0,-1,2,-2,1,346.6,-5,0,3,0],[2,0,2,0,1,6.9,-5,0,3,0],[1,-1,0,0,0,29.8,5,0,0,0],[1,0,0,-1,0,411.8,-4,0,0,0],[0,0,0,1,0,29.5,-4,0,0,0],[0,1,0,-2,0,-15.4,-4,0,0,0],[1,0,-2,0,0,-26.9,4,0,0,0],[2,0,0,-2,1,212.3,4,0,-2,0],[0,1,2,-2,1,119.6,4,0,-2,0],[1,1,0,0,0,25.6,-3,0,0,0],[1,-1,0,-1,0,-3232.9,-3,0,0,0],[-1,-1,2,2,2,9.8,-3,0,1,0],[0,-1,2,2,2,7.2,-3,0,1,0],[1,-1,2,0,2,9.4,-3,0,1,0],[3,0,2,0,2,5.5,-3,0,1,0],[-2,0,2,0,2,1615.7,-3,0,1,0],[1,0,2,0,0,9.1,3,0,0,0],[-1,0,2,4,2,5.8,-2,0,1,0],[1,0,0,0,2,27.8,-2,0,1,0],[-1,0,2,-2,1,-32.6,-2,0,1,0],[0,-2,2,-2,1,6786.3,-2,0,1,0],[-2,0,0,0,1,-13.7,-2,0,1,0],[2,0,0,0,1,13.8,2,0,-1,0],[3,0,0,0,0,9.2,2,0,0,0],[1,1,2,0,2,8.9,2,0,-1,0],[0,0,2,1,2,9.3,2,0,-1,0],[1,0,0,2,1,9.6,-1,0,0,0],[1,0,2,2,1,5.6,-1,0,1,0],[1,1,0,-2,1,-34.7,-1,0,0,0],[0,1,0,2,0,14.2,-1,0,0,0],[0,1,2,-2,0,117.5,-1,0,0,0],[0,1,-2,2,0,-329.8,-1,0,0,0],[1,0,-2,2,0,23.8,-1,0,0,0],[1,0,-2,-2,0,-9.5,-1,0,0,0],[1,0,2,-2,0,32.8,-1,0,0,0],[1,0,0,-4,0,-10.1,-1,0,0,0],[2,0,0,-4,0,-15.9,-1,0,0,0],[0,0,2,4,2,4.8,-1,0,0,0],[0,0,2,-1,2,25.4,-1,0,0,0],[-2,0,2,4,2,7.3,-1,0,1,0],[2,0,2,2,2,4.7,-1,0,0,0],[0,-1,2,0,1,14.2,-1,0,0,0],[0,0,-2,0,1,-13.6,-1,0,0,0],[0,0,4,-2,2,12.7,1,0,0,0],[0,1,0,0,2,409.2,1,0,0,0],[1,1,2,-2,2,22.5,1,0,-1,0],[3,0,2,-2,2,8.7,1,0,0,0],[-2,0,2,2,2,14.6,1,0,-1,0],[-1,0,0,0,2,-27.3,1,0,-1,0],[0,0,-2,2,1,-169,1,0,0,0],[0,1,2,0,1,13.1,1,0,0,0],[-1,0,4,0,2,9.1,1,0,0,0],[2,1,0,-2,0,131.7,1,0,0,0],[2,0,0,2,0,7.1,1,0,0,0],[2,0,2,-2,1,12.8,1,0,-1,0],[2,0,-2,0,1,-943.2,1,0,0,0],[1,-1,0,-2,0,-29.3,1,0,0,0],[-1,0,0,1,1,-388.3,1,0,0,0],[-1,-1,0,2,1,35,1,0,0,0],[0,1,0,1,0,27.3,1,0,0,0]];function l(e){const r=e*e,t=r*e,n=23.4392911111-.0130041667*e-1.6388888889e-7*r+5.0361111111e-7*t,o=134.9629813889+198.8673980555*e+.0086972222222*r+17777777778e-15*t+477e3*e%360,i=357.5277233333+359.05034*e-.00016027777778*r-33333333333e-16*t+35640*e%360,c=93.2719102778+82.0175380556*e-.0036825*r+30555555555e-16*t+483120*e%360,u=297.8503630555+307.11148*e-.0019141666667*r+52777777778e-16*t+444960*e%360,f=125.0445222222-134.1362608333*e+.0020708333333*r+22222222222e-16*t-1800*e%360,l=1/36e6,p=d.length;let T=0,v=0;for(let r=0;r<p;r++){const t=d[r],n=t[0]*o+t[1]*i+t[2]*c+t[3]*u+t[4]*f;T+=l*(t[6]+t[7]*e)*a(n),v+=l*(t[8]+t[9]*e)*s(n)}return{eps:n,deps:v%360,dpsi:T%360}}function p(e){const r=Math.floor(e)-.5,n=Math.floor(e)+.5;let o=0;e>r&&(o=r),e>n&&(o=n);const i=(o-2451545)/36525;return t(24*(e-o)*15*1.002737909350795+(100.460618375+36000.77005360834*i+.0003879333333333333*i*i-2.583333333333333e-8*i*i*i))}function T(e,r){void 0===r&&(r=l((e-2451545)/36525));const n=p(e),o=s(r.dpsi);return t(n-(i=-s(r.eps)*a(r.dpsi)/o,f(Math.atan(i))));var i}function v(e,r){return[e[0],s(r)*e[1]+a(r)*e[2],-a(r)*e[1]+s(r)*e[2]]}function J(e,r){return[s(r)*e[0]-a(r)*e[2],e[1],a(r)*e[0]+s(r)*e[2]]}function M(e,r){return[s(r)*e[0]+a(r)*e[1],-a(r)*e[0]+s(r)*e[1],e[2]]}function h(e){const r=(e.JT-2451545)/36525,t=r*r,n=t*r,o=n*r,i=23.439279444444445-.013010213611111*r-5.086111111111112e-8*t+5.65e-8*n-1.6e-10*o-o*r*1205555555555555e-26;return{r:v(e.r,-i),v:v(e.v,-i),JT:e.JT}}function g(e){const r=(e.JT-2451545)/36525,t=r*r,n=t*r,o=n*r,i=23.439279444444445-.013010213611111*r-5.086111111111112e-8*t+5.65e-8*n-1.6e-10*o-o*r*1205555555555555e-26;return r=matrix_rot1d(-i),{r:v(e.r,i),v:v(e.v,i),JT:e.JT}}function m(e){const r=(e.JT-2451545)/36525,t=r*r,n=t*r,o=.6406161388*r+.00030407777777*t+50563888888e-16*n,i=.5567530277*r-.00011851388888*t-11620277777e-15*n,c=.6406161388*r+83855555555e-15*t+49994444444e-16*n;return{r:M(J(M(e.r,-c),i),-o),v:M(J(M(e.v,-c),i),-o),JT:e.JT}}function P(e){const r=(e.JT-2451545)/36525,t=r*r,n=t*r,o=.6406161388*r+.00030407777777*t+50563888888e-16*n,i=.5567530277*r-.00011851388888*t-11620277777e-15*n,c=.6406161388*r+83855555555e-15*t+49994444444e-16*n;return{r:M(J(M(e.r,o),-i),c),v:M(J(M(e.v,o),-i),c),JT:e.JT}}function L(e,r){const t=(e.JT-2451545)/36525;return void 0===r&&(r=l(t)),{r:v(M(v(e.r,r.eps),-r.dpsi),-r.eps-r.deps),v:v(M(v(e.v,r.eps),-r.dpsi),-r.eps-r.deps),JT:e.JT}}function b(e,r){const t=(e.JT-2451545)/36525;return void 0===r&&(r=l(t)),{r:v(M(v(e.r,r.eps+r.deps),r.dpsi),-r.eps),v:v(M(v(e.v,r.eps+r.deps),r.dpsi),-r.eps),JT:e.JT}}function E(e,r){const t=T(e.JT,r),n=M(e.r,t),o=M(e.v,t),i=e.JT-2451544.5,c=1/86400*(360.985647366+581576e-18*i+-159048e-26*i*i);return o[0]+=c*(Math.PI/180)*(-a(t)*e.r[0]+s(t)*e.r[1]),o[1]+=c*(Math.PI/180)*(-s(t)*e.r[0]-a(t)*e.r[1]),{r:n,v:o,JT:e.JT}}function y(e,r){const t=T(e.JT,r),n=M(e.r,-t),o=e.JT-2451544.5,i=1/86400*(360.985647366+581576e-18*o+-159048e-26*o*o);let c=[0,0,0];return c[0]=i*(Math.PI/180)*(-a(t)*n[0]+s(t)*n[1]),c[1]=i*(Math.PI/180)*(-s(t)*n[0]-a(t)*n[1]),{r:n,v:M([e.v[0]-c[0],e.v[1]-c[1],e.v[2]],-t),JT:e.JT}}function I(e,r,t){return{r:J(v(e.r,-t),-r),v:J(v(e.v,-t),-r),JT:e.JT}}function O(e,r,t){return{r:v(J(e.r,r),t),v:v(J(e.v,r),t),JT:e.JT}}function j(e,r,t){const n=6378137/Math.sqrt(1-Math.pow(.081819190842966*a(e),2));return[(n+t)*s(e)*s(r),(n+t)*s(e)*a(r),(.9933056200098023*n+t)*a(e)]}function q(e,r,t,n){const o=j(r,t,n);var i,c;return{r:v(M((i=e.r,c=o,[i[0]-c[0],i[1]-c[1],i[2]-c[2]]),90+t),90-r),v:v(M(e.v,90+t),90-r),JT:e.JT}}function S(e,r,t,n){const o=j(r,t,n);var i,c;return{r:(i=M(v(e.r,r-90),-90-t),c=o,[i[0]+c[0],i[1]+c[1],i[2]+c[2]]),v:M(v(e.v,r-90),-90-t),JT:e.JT}}function z(e){const r=(t=e.r,Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]));var t;const n=[e.r[0]/r,e.r[1]/r,e.r[2]/r];var o,i,c;return{az:(o=n[0],i=n[1],f(Math.atan2(o,i))),el:(c=n[2],f(Math.asin(c))),dazdt:0,deldt:0,dist:r,JT:e.JT}}function D(e){return{r:[e.dist*a(e.az)*s(e.el),e.dist*s(e.az)*s(e.el),e.dist*a(e.el)],v:[0,0,0],JT:e.JT}}function x(e,r,t,n){return{r:M(v(M(e.r,-n),-t),-r),v:M(v(M(e.v,-n),-t),-r),JT:e.JT}}function A(e,r,t,n){return{r:M(v(M(e.r,r),t),n),v:M(v(M(e.v,r),t),n),JT:e.JT}}function k(e,r,n,o){let i=0,c=n+1,u=e;for(;c>n;){i+=1,i>o&&console.error("Convergence failed");const t=Math.PI/180;u-=(e-u+r/t*a(u))/(r*s(u)-1),c=Math.abs(a(e)-a(u-r/t*a(u)))+Math.abs(s(e)-s(u-r/t*a(u)))}return t(u)}function _(e,r,t,n,o){const i=Math.sqrt(1-(r/e)**2),c=360/Math.sqrt(4*Math.PI*Math.PI*e*e*e/n),u=[e*(s(t)-i),r*a(t),0],f=c/(1-i*s(t));return{r:u,v:[-e*f*a(t)*(Math.PI/180),r*f*s(t)*(Math.PI/180),0],JT:o}}function w(e){const r=(e-2451545)/36525,t=149597870700;let n={mercury:{a:(.38709927+37e-8*r)*t,e:.20563593+1906e-8*r,i:7.00497902-.00594749*r,L:252.2503235+149472.67411175*r,Lperi:77.45779628+.16047689*r,Omega:48.33076593-.12534081*r},venus:{a:(.72333566+39e-7*r)*t,e:.00677672-4107e-8*r,i:3.39467605-7889e-7*r,L:181.9790995+58517.81538729*r,Lperi:131.60246718+.00268329*r,Omega:76.67984255-.27769418*r},earth:{a:(1.00000261+562e-8*r)*t,e:.01671123-4392e-8*r,i:-1531e-8-.01294668*r,L:100.46457166+35999.37244981*r,Lperi:102.93768193+.32327364*r,Omega:-11.26064-5.0634027*r},mars:{a:(1.52371034+1847e-8*r)*t,e:.0933941+7882e-8*r,i:1.84969142-.00813131*r,L:19140.30268499*r-4.55343205,Lperi:.44441088*r-23.94362959,Omega:49.55953891-.29257343*r},jupiter:{a:(5.202887-11607e-8*r)*t,e:.04838624-13253e-8*r,i:1.30439695-.00183714*r,L:34.39644051+3034.74612775*r,Lperi:14.72847983+.21252668*r,Omega:100.47390909+.20469106*r},saturn:{a:(9.53667594-.0012506*r)*t,e:.05386179-50991e-8*r,i:2.48599187+.00193609*r,L:49.95424423+1222.49362201*r,Lperi:92.59887831-.41897216*r,Omega:113.66242448-.28867794*r},uranus:{a:(19.18916464-.00196176*r)*t,e:.04725744-4397e-8*r,i:.77263783-.00242939*r,L:313.23810451+428.48202785*r,Lperi:170.9542763+.40805281*r,Omega:74.01692503+.04240589*r},neptune:{a:(30.06992276+26291e-8*r)*t,e:.00859048+5105e-8*r,i:1.77004347+35372e-8*r,L:218.45945325*r-55.12002969,Lperi:44.96476227-.32241464*r,Omega:131.78422574-.00508664*r}};for(let e in n){let r=n[e];r.b=r.a*Math.sqrt(1-r.e*r.e),r.omega=r.Lperi-r.Omega,r.M=r.L-r.Lperi,r.E=k(r.M,r.e,1e-6,10),r.mu=132712440018e9}return n}return r})()));