!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.orbitsjs=t():e.orbitsjs=t()}(self,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function o(e){return e-360*Math.floor(e/360)}function r(e,t){void 0===e&&(e=0),void 0===t&&(t=0);const n=o(e),c=o(t);if(n<=c){const e=c-n;return e<=180?e:c-(n+360)}return-r(t,e)}function n(e,t,r){return o(e+t/60+r/3600)}function c(e){let t=o(e),r=Math.floor(t),n=Math.floor(60*(t-r));return{deg:r,arcMin:n,arcSec:3600*(t-r-n/60)}}function i(e){let t=o(e);const r=Math.floor(t/15),n=Math.floor((t-15*r)/.25);return{hour:r,minute:n,second:(t-15*r-.25*n)/.004166666666666667}}function u(e,t,r){return o(15*e+.25*t+.004166666666666667*r)}function s(e){return Math.sin(e*Math.PI/180)}function f(e){return Math.cos(e*Math.PI/180)}e.r(t),e.d(t,{angleArcDeg:()=>n,angleDegArc:()=>c,angleDegHms:()=>i,angleDiff:()=>r,angleHmsDeg:()=>u,coordEclEq:()=>M,coordEfiPef:()=>D,coordEqEcl:()=>h,coordJ2000Mod:()=>g,coordModJ2000:()=>m,coordModTod:()=>P,coordPefEfi:()=>I,coordPefTod:()=>j,coordTodMod:()=>b,coordTodPef:()=>y,limitAngleDeg:()=>o,nutationTerms:()=>a,timeGast:()=>T,timeGmst:()=>p});const d=[[0,0,0,0,1,-6798.4,-171996,-174.2,92025,8.9],[0,0,2,-2,2,182.6,-13187,-1.6,5736,-3.1],[0,0,2,0,2,13.7,-2274,-.2,977,-.5],[0,0,0,0,2,-3399.2,2062,.2,-895,.5],[0,-1,0,0,0,-365.3,-1426,3.4,54,-.1],[1,0,0,0,0,27.6,712,.1,-7,0],[0,1,2,-2,2,121.7,-517,1.2,224,-.6],[0,0,2,0,1,13.6,-386,-.4,200,0],[1,0,2,0,2,9.1,-301,0,129,-.1],[0,-1,2,-2,2,365.2,217,-.5,-95,.3],[-1,0,0,2,0,31.8,158,0,-1,0],[0,0,2,-2,1,177.8,129,.1,-70,0],[-1,0,2,0,2,27.1,123,0,-53,0],[1,0,0,0,1,27.7,63,.1,-33,0],[0,0,0,2,0,14.8,63,0,-2,0],[-1,0,2,2,2,9.6,-59,0,26,0],[-1,0,0,0,1,-27.4,-58,-.1,32,0],[1,0,2,0,1,9.1,-51,0,27,0],[-2,0,0,2,0,-205.9,-48,0,1,0],[-2,0,2,0,1,1305.5,46,0,-24,0],[0,0,2,2,2,7.1,-38,0,16,0],[2,0,2,0,2,6.9,-31,0,13,0],[2,0,0,0,0,13.8,29,0,-1,0],[1,0,2,-2,2,23.9,29,0,-12,0],[0,0,2,0,0,13.6,26,0,-1,0],[0,0,2,-2,0,173.3,-22,0,0,0],[-1,0,2,0,1,27,21,0,-10,0],[0,2,0,0,0,182.6,17,-.1,0,0],[0,2,2,-2,2,91.3,-16,.1,7,0],[-1,0,0,2,1,32,16,0,-8,0],[0,1,0,0,1,386,-15,0,9,0],[1,0,0,-2,1,-31.7,-13,0,7,0],[0,-1,0,0,1,-346.6,-12,0,6,0],[2,0,-2,0,0,-1095.2,11,0,0,0],[-1,0,2,2,1,9.5,-10,0,5,0],[1,0,2,2,2,5.6,-8,0,3,0],[0,-1,2,0,2,14.2,-7,0,3,0],[0,0,2,2,1,7.1,-7,0,3,0],[1,1,0,-2,0,-34.8,-7,0,0,0],[0,1,2,0,2,13.2,7,0,-3,0],[-2,0,0,2,1,-199.8,-6,0,3,0],[0,0,0,2,1,14.8,-6,0,3,0],[2,0,2,-2,2,12.8,6,0,-3,0],[1,0,0,2,0,9.6,6,0,0,0],[1,0,2,-2,1,23.9,6,0,-3,0],[0,0,0,-2,1,-14.7,-5,0,3,0],[0,-1,2,-2,1,346.6,-5,0,3,0],[2,0,2,0,1,6.9,-5,0,3,0],[1,-1,0,0,0,29.8,5,0,0,0],[1,0,0,-1,0,411.8,-4,0,0,0],[0,0,0,1,0,29.5,-4,0,0,0],[0,1,0,-2,0,-15.4,-4,0,0,0],[1,0,-2,0,0,-26.9,4,0,0,0],[2,0,0,-2,1,212.3,4,0,-2,0],[0,1,2,-2,1,119.6,4,0,-2,0],[1,1,0,0,0,25.6,-3,0,0,0],[1,-1,0,-1,0,-3232.9,-3,0,0,0],[-1,-1,2,2,2,9.8,-3,0,1,0],[0,-1,2,2,2,7.2,-3,0,1,0],[1,-1,2,0,2,9.4,-3,0,1,0],[3,0,2,0,2,5.5,-3,0,1,0],[-2,0,2,0,2,1615.7,-3,0,1,0],[1,0,2,0,0,9.1,3,0,0,0],[-1,0,2,4,2,5.8,-2,0,1,0],[1,0,0,0,2,27.8,-2,0,1,0],[-1,0,2,-2,1,-32.6,-2,0,1,0],[0,-2,2,-2,1,6786.3,-2,0,1,0],[-2,0,0,0,1,-13.7,-2,0,1,0],[2,0,0,0,1,13.8,2,0,-1,0],[3,0,0,0,0,9.2,2,0,0,0],[1,1,2,0,2,8.9,2,0,-1,0],[0,0,2,1,2,9.3,2,0,-1,0],[1,0,0,2,1,9.6,-1,0,0,0],[1,0,2,2,1,5.6,-1,0,1,0],[1,1,0,-2,1,-34.7,-1,0,0,0],[0,1,0,2,0,14.2,-1,0,0,0],[0,1,2,-2,0,117.5,-1,0,0,0],[0,1,-2,2,0,-329.8,-1,0,0,0],[1,0,-2,2,0,23.8,-1,0,0,0],[1,0,-2,-2,0,-9.5,-1,0,0,0],[1,0,2,-2,0,32.8,-1,0,0,0],[1,0,0,-4,0,-10.1,-1,0,0,0],[2,0,0,-4,0,-15.9,-1,0,0,0],[0,0,2,4,2,4.8,-1,0,0,0],[0,0,2,-1,2,25.4,-1,0,0,0],[-2,0,2,4,2,7.3,-1,0,1,0],[2,0,2,2,2,4.7,-1,0,0,0],[0,-1,2,0,1,14.2,-1,0,0,0],[0,0,-2,0,1,-13.6,-1,0,0,0],[0,0,4,-2,2,12.7,1,0,0,0],[0,1,0,0,2,409.2,1,0,0,0],[1,1,2,-2,2,22.5,1,0,-1,0],[3,0,2,-2,2,8.7,1,0,0,0],[-2,0,2,2,2,14.6,1,0,-1,0],[-1,0,0,0,2,-27.3,1,0,-1,0],[0,0,-2,2,1,-169,1,0,0,0],[0,1,2,0,1,13.1,1,0,0,0],[-1,0,4,0,2,9.1,1,0,0,0],[2,1,0,-2,0,131.7,1,0,0,0],[2,0,0,2,0,7.1,1,0,0,0],[2,0,2,-2,1,12.8,1,0,-1,0],[2,0,-2,0,1,-943.2,1,0,0,0],[1,-1,0,-2,0,-29.3,1,0,0,0],[-1,0,0,1,1,-388.3,1,0,0,0],[-1,-1,0,2,1,35,1,0,0,0],[0,1,0,1,0,27.3,1,0,0,0]];function a(e){const t=e*e,o=t*e,r=23.4392911111-.0130041667*e-1.6388888889e-7*t+5.0361111111e-7*o,n=134.9629813889+198.8673980555*e+.0086972222222*t+17777777778e-15*o+477e3*e%360,c=357.5277233333+359.05034*e-.00016027777778*t-33333333333e-16*o+35640*e%360,i=93.2719102778+82.0175380556*e-.0036825*t+30555555555e-16*o+483120*e%360,u=297.8503630555+307.11148*e-.0019141666667*t+52777777778e-16*o+444960*e%360,a=125.0445222222-134.1362608333*e+.0020708333333*t+22222222222e-16*o-1800*e%360,p=1/36e6,T=d.length;let l=0,v=0;for(let t=0;t<T;t++){const o=d[t],r=o[0]*n+o[1]*c+o[2]*i+o[3]*u+o[4]*a;l+=p*(o[6]+o[7]*e)*s(r),v+=p*(o[8]+o[9]*e)*f(r)}return{eps:r,deps:v%360,dpsi:l%360}}function p(e){const t=Math.floor(e)-.5,r=Math.floor(e)+.5;let n=0;e>t&&(n=t),e>r&&(n=r);const c=(n-2451545)/36525;return o(24*(e-n)*15*1.002737909350795+(100.460618375+36000.77005360834*c+.0003879333333333333*c*c-2.583333333333333e-8*c*c*c))}function T(e,t){void 0===t&&(t=a((e-2451545)/36525));const r=p(e),n=f(t.dpsi);return o(r-(c=-f(t.eps)*s(t.dpsi)/n,180*Math.atan(c)/Math.PI));var c}function l(e,t){return[e[0],f(t)*e[1]+s(t)*e[2],-s(t)*e[1]+f(t)*e[2]]}function v(e,t){return[f(t)*e[0]-s(t)*e[2],e[1],s(t)*e[0]+f(t)*e[2]]}function J(e,t){return[f(t)*e[0]+s(t)*e[1],-s(t)*e[0]+f(t)*e[1],e[2]]}function M(e){const t=(e.JT-2451545)/36525,o=t*t,r=o*t,n=r*t,c=23.439279444444445-.013010213611111*t-5.086111111111112e-8*o+5.65e-8*r-1.6e-10*n-n*t*1205555555555555e-26;return{r:l(e.r,-c),v:l(e.v,-c),JT:e.JT}}function h(e){const t=(e.JT-2451545)/36525,o=t*t,r=o*t,n=r*t,c=23.439279444444445-.013010213611111*t-5.086111111111112e-8*o+5.65e-8*r-1.6e-10*n-n*t*1205555555555555e-26;return t=matrix_rot1d(-c),{r:l(e.r,c),v:l(e.v,c),JT:e.JT}}function g(e){const t=(e.JT-2451545)/36525,o=t*t,r=o*t,n=.6406161388*t+.00030407777777*o+50563888888e-16*r,c=.5567530277*t-.00011851388888*o-11620277777e-15*r,i=.6406161388*t+83855555555e-15*o+49994444444e-16*r;return{r:J(v(J(e.r,-i),c),-n),v:J(v(J(e.v,-i),c),-n),JT:e.JT}}function m(e){const t=(e.JT-2451545)/36525,o=t*t,r=o*t,n=.6406161388*t+.00030407777777*o+50563888888e-16*r,c=.5567530277*t-.00011851388888*o-11620277777e-15*r,i=.6406161388*t+83855555555e-15*o+49994444444e-16*r;return{r:J(v(J(e.r,n),-c),i),v:J(v(J(e.v,n),-c),i),JT:e.JT}}function P(e,t){const o=(e.JT-2451545)/36525;return void 0===t&&(t=a(o)),{r:l(J(l(e.r,t.eps),-t.dpsi),-t.eps-t.deps),v:l(J(l(e.v,t.eps),-t.dpsi),-t.eps-t.deps),JT:e.JT}}function b(e,t){const o=(e.JT-2451545)/36525;return void 0===t&&(t=a(o)),{r:l(J(l(e.r,t.eps+t.deps),t.dpsi),-t.eps),v:l(J(l(e.v,t.eps+t.deps),t.dpsi),-t.eps),JT:e.JT}}function y(e,t){const o=T(e.JT,t),r=J(e.r,o),n=J(e.v,o),c=e.JT-2451544.5,i=1/86400*(360.985647366+581576e-18*c+-159048e-26*c*c);return n[0]+=i*(Math.PI/180)*(-s(o)*e.r[0]+f(o)*e.r[1]),n[1]+=i*(Math.PI/180)*(-f(o)*e.r[0]-s(o)*e.r[1]),{r,v:n,JT:e.JT}}function j(e,t){const o=T(e.JT,t),r=J(e.r,-o),n=e.JT-2451544.5,c=1/86400*(360.985647366+581576e-18*n+-159048e-26*n*n);let i=[0,0,0];return i[0]=c*(Math.PI/180)*(-s(o)*r[0]+f(o)*r[1]),i[1]=c*(Math.PI/180)*(-f(o)*r[0]-s(o)*r[1]),{r,v:J([e.v[0]-i[0],e.v[1]-i[1],e.v[2]],-o),JT:e.JT}}function I(e,t,o){return{r:v(l(e.r,-o),-t),v:v(l(e.v,-o),-t),JT:e.JT}}function D(e,t,o){return{r:l(v(e.r,t),o),v:l(v(e.v,t),o),JT:e.JT}}return t})()));