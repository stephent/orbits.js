!function(r,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.orbitsjs=t():r.orbitsjs=t()}(self,(()=>(()=>{"use strict";var r={d:(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o:(r,t)=>Object.prototype.hasOwnProperty.call(r,t),r:r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})}},t={};function e(r){return r-360*Math.floor(r/360)}function n(r,t){void 0===r&&(r=0),void 0===t&&(t=0);const o=e(r),c=e(t);if(o<=c){const r=c-o;return r<=180?r:c-(o+360)}return-n(t,r)}function o(r,t,n){return e(r+t/60+n/3600)}function c(r){let t=e(r),n=Math.floor(t),o=Math.floor(60*(t-n));return{deg:n,arcMin:o,arcSec:3600*(t-n-o/60)}}function u(r){let t=e(r);const n=Math.floor(t/15),o=Math.floor((t-15*n)/.25);return{hour:n,minute:o,second:(t-15*n-.25*o)/.004166666666666667}}function i(r,t,n){return e(15*r+.25*t+.004166666666666667*n)}function s(r){return Math.sin(r*Math.PI/180)}function d(r){return Math.cos(r*Math.PI/180)}function f(r){return 180*r/Math.PI}r.r(t),r.d(t,{angleArcDeg:()=>o,angleDegArc:()=>c,angleDegHms:()=>u,angleDiff:()=>n,angleHmsDeg:()=>i,coordAzElEnu:()=>O,coordEclEq:()=>h,coordEfiEnu:()=>S,coordEfiPef:()=>z,coordEnuAzEl:()=>A,coordEnuEfi:()=>x,coordEqEcl:()=>g,coordInePer:()=>_,coordJ2000Mod:()=>P,coordModJ2000:()=>m,coordModTod:()=>E,coordPefEfi:()=>I,coordPefTod:()=>j,coordPerIne:()=>q,coordTodMod:()=>b,coordTodPef:()=>y,limitAngleDeg:()=>e,nutationTerms:()=>T,timeGast:()=>J,timeGmst:()=>v});const a=[[0,0,0,0,1,-6798.4,-171996,-174.2,92025,8.9],[0,0,2,-2,2,182.6,-13187,-1.6,5736,-3.1],[0,0,2,0,2,13.7,-2274,-.2,977,-.5],[0,0,0,0,2,-3399.2,2062,.2,-895,.5],[0,-1,0,0,0,-365.3,-1426,3.4,54,-.1],[1,0,0,0,0,27.6,712,.1,-7,0],[0,1,2,-2,2,121.7,-517,1.2,224,-.6],[0,0,2,0,1,13.6,-386,-.4,200,0],[1,0,2,0,2,9.1,-301,0,129,-.1],[0,-1,2,-2,2,365.2,217,-.5,-95,.3],[-1,0,0,2,0,31.8,158,0,-1,0],[0,0,2,-2,1,177.8,129,.1,-70,0],[-1,0,2,0,2,27.1,123,0,-53,0],[1,0,0,0,1,27.7,63,.1,-33,0],[0,0,0,2,0,14.8,63,0,-2,0],[-1,0,2,2,2,9.6,-59,0,26,0],[-1,0,0,0,1,-27.4,-58,-.1,32,0],[1,0,2,0,1,9.1,-51,0,27,0],[-2,0,0,2,0,-205.9,-48,0,1,0],[-2,0,2,0,1,1305.5,46,0,-24,0],[0,0,2,2,2,7.1,-38,0,16,0],[2,0,2,0,2,6.9,-31,0,13,0],[2,0,0,0,0,13.8,29,0,-1,0],[1,0,2,-2,2,23.9,29,0,-12,0],[0,0,2,0,0,13.6,26,0,-1,0],[0,0,2,-2,0,173.3,-22,0,0,0],[-1,0,2,0,1,27,21,0,-10,0],[0,2,0,0,0,182.6,17,-.1,0,0],[0,2,2,-2,2,91.3,-16,.1,7,0],[-1,0,0,2,1,32,16,0,-8,0],[0,1,0,0,1,386,-15,0,9,0],[1,0,0,-2,1,-31.7,-13,0,7,0],[0,-1,0,0,1,-346.6,-12,0,6,0],[2,0,-2,0,0,-1095.2,11,0,0,0],[-1,0,2,2,1,9.5,-10,0,5,0],[1,0,2,2,2,5.6,-8,0,3,0],[0,-1,2,0,2,14.2,-7,0,3,0],[0,0,2,2,1,7.1,-7,0,3,0],[1,1,0,-2,0,-34.8,-7,0,0,0],[0,1,2,0,2,13.2,7,0,-3,0],[-2,0,0,2,1,-199.8,-6,0,3,0],[0,0,0,2,1,14.8,-6,0,3,0],[2,0,2,-2,2,12.8,6,0,-3,0],[1,0,0,2,0,9.6,6,0,0,0],[1,0,2,-2,1,23.9,6,0,-3,0],[0,0,0,-2,1,-14.7,-5,0,3,0],[0,-1,2,-2,1,346.6,-5,0,3,0],[2,0,2,0,1,6.9,-5,0,3,0],[1,-1,0,0,0,29.8,5,0,0,0],[1,0,0,-1,0,411.8,-4,0,0,0],[0,0,0,1,0,29.5,-4,0,0,0],[0,1,0,-2,0,-15.4,-4,0,0,0],[1,0,-2,0,0,-26.9,4,0,0,0],[2,0,0,-2,1,212.3,4,0,-2,0],[0,1,2,-2,1,119.6,4,0,-2,0],[1,1,0,0,0,25.6,-3,0,0,0],[1,-1,0,-1,0,-3232.9,-3,0,0,0],[-1,-1,2,2,2,9.8,-3,0,1,0],[0,-1,2,2,2,7.2,-3,0,1,0],[1,-1,2,0,2,9.4,-3,0,1,0],[3,0,2,0,2,5.5,-3,0,1,0],[-2,0,2,0,2,1615.7,-3,0,1,0],[1,0,2,0,0,9.1,3,0,0,0],[-1,0,2,4,2,5.8,-2,0,1,0],[1,0,0,0,2,27.8,-2,0,1,0],[-1,0,2,-2,1,-32.6,-2,0,1,0],[0,-2,2,-2,1,6786.3,-2,0,1,0],[-2,0,0,0,1,-13.7,-2,0,1,0],[2,0,0,0,1,13.8,2,0,-1,0],[3,0,0,0,0,9.2,2,0,0,0],[1,1,2,0,2,8.9,2,0,-1,0],[0,0,2,1,2,9.3,2,0,-1,0],[1,0,0,2,1,9.6,-1,0,0,0],[1,0,2,2,1,5.6,-1,0,1,0],[1,1,0,-2,1,-34.7,-1,0,0,0],[0,1,0,2,0,14.2,-1,0,0,0],[0,1,2,-2,0,117.5,-1,0,0,0],[0,1,-2,2,0,-329.8,-1,0,0,0],[1,0,-2,2,0,23.8,-1,0,0,0],[1,0,-2,-2,0,-9.5,-1,0,0,0],[1,0,2,-2,0,32.8,-1,0,0,0],[1,0,0,-4,0,-10.1,-1,0,0,0],[2,0,0,-4,0,-15.9,-1,0,0,0],[0,0,2,4,2,4.8,-1,0,0,0],[0,0,2,-1,2,25.4,-1,0,0,0],[-2,0,2,4,2,7.3,-1,0,1,0],[2,0,2,2,2,4.7,-1,0,0,0],[0,-1,2,0,1,14.2,-1,0,0,0],[0,0,-2,0,1,-13.6,-1,0,0,0],[0,0,4,-2,2,12.7,1,0,0,0],[0,1,0,0,2,409.2,1,0,0,0],[1,1,2,-2,2,22.5,1,0,-1,0],[3,0,2,-2,2,8.7,1,0,0,0],[-2,0,2,2,2,14.6,1,0,-1,0],[-1,0,0,0,2,-27.3,1,0,-1,0],[0,0,-2,2,1,-169,1,0,0,0],[0,1,2,0,1,13.1,1,0,0,0],[-1,0,4,0,2,9.1,1,0,0,0],[2,1,0,-2,0,131.7,1,0,0,0],[2,0,0,2,0,7.1,1,0,0,0],[2,0,2,-2,1,12.8,1,0,-1,0],[2,0,-2,0,1,-943.2,1,0,0,0],[1,-1,0,-2,0,-29.3,1,0,0,0],[-1,0,0,1,1,-388.3,1,0,0,0],[-1,-1,0,2,1,35,1,0,0,0],[0,1,0,1,0,27.3,1,0,0,0]];function T(r){const t=r*r,e=t*r,n=23.4392911111-.0130041667*r-1.6388888889e-7*t+5.0361111111e-7*e,o=134.9629813889+198.8673980555*r+.0086972222222*t+17777777778e-15*e+477e3*r%360,c=357.5277233333+359.05034*r-.00016027777778*t-33333333333e-16*e+35640*r%360,u=93.2719102778+82.0175380556*r-.0036825*t+30555555555e-16*e+483120*r%360,i=297.8503630555+307.11148*r-.0019141666667*t+52777777778e-16*e+444960*r%360,f=125.0445222222-134.1362608333*r+.0020708333333*t+22222222222e-16*e-1800*r%360,T=1/36e6,v=a.length;let J=0,l=0;for(let t=0;t<v;t++){const e=a[t],n=e[0]*o+e[1]*c+e[2]*u+e[3]*i+e[4]*f;J+=T*(e[6]+e[7]*r)*s(n),l+=T*(e[8]+e[9]*r)*d(n)}return{eps:n,deps:l%360,dpsi:J%360}}function v(r){const t=Math.floor(r)-.5,n=Math.floor(r)+.5;let o=0;r>t&&(o=t),r>n&&(o=n);const c=(o-2451545)/36525;return e(24*(r-o)*15*1.002737909350795+(100.460618375+36000.77005360834*c+.0003879333333333333*c*c-2.583333333333333e-8*c*c*c))}function J(r,t){void 0===t&&(t=T((r-2451545)/36525));const n=v(r),o=d(t.dpsi);return e(n-(c=-d(t.eps)*s(t.dpsi)/o,f(Math.atan(c))));var c}function l(r,t){return[r[0],d(t)*r[1]+s(t)*r[2],-s(t)*r[1]+d(t)*r[2]]}function p(r,t){return[d(t)*r[0]-s(t)*r[2],r[1],s(t)*r[0]+d(t)*r[2]]}function M(r,t){return[d(t)*r[0]+s(t)*r[1],-s(t)*r[0]+d(t)*r[1],r[2]]}function h(r){const t=(r.JT-2451545)/36525,e=t*t,n=e*t,o=n*t,c=23.439279444444445-.013010213611111*t-5.086111111111112e-8*e+5.65e-8*n-1.6e-10*o-o*t*1205555555555555e-26;return{r:l(r.r,-c),v:l(r.v,-c),JT:r.JT}}function g(r){const t=(r.JT-2451545)/36525,e=t*t,n=e*t,o=n*t,c=23.439279444444445-.013010213611111*t-5.086111111111112e-8*e+5.65e-8*n-1.6e-10*o-o*t*1205555555555555e-26;return t=matrix_rot1d(-c),{r:l(r.r,c),v:l(r.v,c),JT:r.JT}}function P(r){const t=(r.JT-2451545)/36525,e=t*t,n=e*t,o=.6406161388*t+.00030407777777*e+50563888888e-16*n,c=.5567530277*t-.00011851388888*e-11620277777e-15*n,u=.6406161388*t+83855555555e-15*e+49994444444e-16*n;return{r:M(p(M(r.r,-u),c),-o),v:M(p(M(r.v,-u),c),-o),JT:r.JT}}function m(r){const t=(r.JT-2451545)/36525,e=t*t,n=e*t,o=.6406161388*t+.00030407777777*e+50563888888e-16*n,c=.5567530277*t-.00011851388888*e-11620277777e-15*n,u=.6406161388*t+83855555555e-15*e+49994444444e-16*n;return{r:M(p(M(r.r,o),-c),u),v:M(p(M(r.v,o),-c),u),JT:r.JT}}function E(r,t){const e=(r.JT-2451545)/36525;return void 0===t&&(t=T(e)),{r:l(M(l(r.r,t.eps),-t.dpsi),-t.eps-t.deps),v:l(M(l(r.v,t.eps),-t.dpsi),-t.eps-t.deps),JT:r.JT}}function b(r,t){const e=(r.JT-2451545)/36525;return void 0===t&&(t=T(e)),{r:l(M(l(r.r,t.eps+t.deps),t.dpsi),-t.eps),v:l(M(l(r.v,t.eps+t.deps),t.dpsi),-t.eps),JT:r.JT}}function y(r,t){const e=J(r.JT,t),n=M(r.r,e),o=M(r.v,e),c=r.JT-2451544.5,u=1/86400*(360.985647366+581576e-18*c+-159048e-26*c*c);return o[0]+=u*(Math.PI/180)*(-s(e)*r.r[0]+d(e)*r.r[1]),o[1]+=u*(Math.PI/180)*(-d(e)*r.r[0]-s(e)*r.r[1]),{r:n,v:o,JT:r.JT}}function j(r,t){const e=J(r.JT,t),n=M(r.r,-e),o=r.JT-2451544.5,c=1/86400*(360.985647366+581576e-18*o+-159048e-26*o*o);let u=[0,0,0];return u[0]=c*(Math.PI/180)*(-s(e)*n[0]+d(e)*n[1]),u[1]=c*(Math.PI/180)*(-d(e)*n[0]-s(e)*n[1]),{r:n,v:M([r.v[0]-u[0],r.v[1]-u[1],r.v[2]],-e),JT:r.JT}}function I(r,t,e){return{r:p(l(r.r,-e),-t),v:p(l(r.v,-e),-t),JT:r.JT}}function z(r,t,e){return{r:l(p(r.r,t),e),v:l(p(r.v,t),e),JT:r.JT}}function D(r,t,e){const n=6378137/Math.sqrt(1-Math.pow(.081819190842966*s(r),2));return[(n+e)*d(r)*d(t),(n+e)*d(r)*s(t),(.9933056200098023*n+e)*s(r)]}function S(r,t,e,n){const o=D(t,e,n);var c,u;return{r:l(M((c=r.r,u=o,[c[0]-u[0],c[1]-u[1],c[2]-u[2]]),90+e),90-t),v:l(M(r.v,90+e),90-t),JT:r.JT}}function x(r,t,e,n){const o=D(t,e,n);var c,u;return{r:(c=M(l(r.r,t-90),-90-e),u=o,[c[0]+u[0],c[1]+u[1],c[2]+u[2]]),v:M(l(r.v,t-90),-90-e),JT:r.JT}}function A(r){const t=(e=r.r,Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]));var e;const n=[r.r[0]/t,r.r[1]/t,r.r[2]/t];var o,c,u;return{az:(o=n[0],c=n[1],f(Math.atan2(o,c))),el:(u=n[2],f(Math.asin(u))),dazdt:0,deldt:0,dist:t,JT:r.JT}}function O(r){return{r:[r.dist*s(r.az)*d(r.el),r.dist*d(r.az)*d(r.el),r.dist*s(r.el)],v:[0,0,0],JT:r.JT}}function q(r,t,e,n){return{r:M(l(M(r.r,-n),-e),-t),v:M(l(M(r.v,-n),-e),-t),JT:r.JT}}function _(r,t,e,n){return{r:M(l(M(r.r,t),e),n),v:M(l(M(r.v,t),e),n),JT:r.JT}}return t})()));