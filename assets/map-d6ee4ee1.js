import{_ as Xd,r as ia,B as Yd,c as $d,o as qd,e as Zd,h as ra,f as ch,w as hh,A as uh,g as Kd,I as jd,j as fh}from"./index-a3411c79.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yc="180",mr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ur={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jd=0,dh=1,Qd=2,rf=1,tp=2,Xn=3,pi=0,Qe=1,Ke=2,hi=0,ui=1,Yn=2,ph=3,mh=4,ep=5,Ri=100,np=101,ip=102,rp=103,sp=104,op=200,ap=201,lp=202,cp=203,nl=204,il=205,hp=206,up=207,fp=208,dp=209,pp=210,mp=211,_p=212,gp=213,vp=214,rl=0,sl=1,ol=2,xr=3,al=4,ll=5,cl=6,hl=7,Mc=0,xp=1,yp=2,fi=0,Mp=1,Sp=2,Ep=3,bp=4,Tp=5,Ap=6,wp=7,sf=300,yr=301,Mr=302,ul=303,fl=304,Ko=306,Di=1e3,Li=1001,dl=1002,wn=1003,Cp=1004,Is=1005,je=1006,sa=1007,Ii=1008,Nn=1009,of=1010,af=1011,cs=1012,Sc=1013,Bi=1014,qn=1015,Ts=1016,Ec=1017,bc=1018,hs=1020,lf=35902,cf=35899,hf=1021,uf=1022,An=1023,us=1026,fs=1027,ff=1028,Tc=1029,df=1030,Ac=1031,wc=1033,yo=33776,Mo=33777,So=33778,Eo=33779,pl=35840,ml=35841,_l=35842,gl=35843,vl=36196,xl=37492,yl=37496,Ml=37808,Sl=37809,El=37810,bl=37811,Tl=37812,Al=37813,wl=37814,Cl=37815,Rl=37816,Pl=37817,Dl=37818,Ll=37819,Il=37820,Ul=37821,Nl=36492,Fl=36494,Ol=36495,Bl=36283,zl=36284,kl=36285,Hl=36286,Rp=3200,Pp=3201,pf=0,Dp=1,li="",pn="srgb",Sr="srgb-linear",Lo="linear",re="srgb",Yi=7680,_h=519,Lp=512,Ip=513,Up=514,mf=515,Np=516,Fp=517,Op=518,Bp=519,Vl=35044,gh="300 es",Ln=2e3,Io=2001;class Gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vh=1234567;const _r=Math.PI/180,ds=180/Math.PI;function In(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function qt(i,t,e){return Math.max(t,Math.min(e,i))}function Cc(i,t){return(i%t+t)%t}function zp(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function kp(i,t,e){return i!==t?(e-i)/(t-i):0}function es(i,t,e){return(1-e)*i+e*t}function Hp(i,t,e,n){return es(i,t,1-Math.exp(-e*n))}function Vp(i,t=1){return t-Math.abs(Cc(i,t*2)-t)}function Gp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Wp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Xp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Yp(i,t){return i+Math.random()*(t-i)}function $p(i){return i*(.5-Math.random())}function qp(i){i!==void 0&&(vh=i);let t=vh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Zp(i){return i*_r}function Kp(i){return i*ds}function jp(i){return(i&i-1)===0&&i!==0}function Jp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Qp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function tm(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),f=o((t-n)/2),d=s((n-t)/2),_=o((n-t)/2);switch(r){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*_,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*_,a*c);break;case"ZYZ":i.set(l*_,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function En(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const em={DEG2RAD:_r,RAD2DEG:ds,generateUUID:In,clamp:qt,euclideanModulo:Cc,mapLinear:zp,inverseLerp:kp,lerp:es,damp:Hp,pingpong:Vp,smoothstep:Gp,smootherstep:Wp,randInt:Xp,randFloat:Yp,randFloatSpread:$p,seededRandom:qp,degToRad:Zp,radToDeg:Kp,isPowerOfTwo:jp,ceilPowerOfTwo:Jp,floorPowerOfTwo:Qp,setQuaternionFromProperEuler:tm,normalize:ne,denormalize:En};class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const f=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==f||c!==d||h!==_){let p=1-a;const m=l*f+c*d+h*_+u*g,S=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const A=Math.sqrt(y),T=Math.atan2(A,m*S);p=Math.sin(p*T)/A,a=Math.sin(a*T)/A}const v=a*S;if(l=l*p+f*v,c=c*p+d*v,h=h*p+_*v,u=u*p+g*v,p===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return t[e]=a*_+h*u+l*d-c*f,t[e+1]=l*_+h*f+c*u-a*d,t[e+2]=c*_+h*d+a*f-l*u,t[e+3]=h*_-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),f=l(n/2),d=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"YXZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"ZXY":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"ZYX":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"YZX":this._x=f*h*u+c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u-f*d*_;break;case"XZY":this._x=f*h*u-c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),h=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return oa.copy(this).projectOnVector(t),this.sub(oa)}reflect(t){return this.sub(oa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oa=new I,xh=new zi;class Yt{constructor(t,e,n,r,s,o,a,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],_=n[8],g=r[0],p=r[3],m=r[6],S=r[1],y=r[4],v=r[7],A=r[2],T=r[5],R=r[8];return s[0]=o*g+a*S+l*A,s[3]=o*p+a*y+l*T,s[6]=o*m+a*v+l*R,s[1]=c*g+h*S+u*A,s[4]=c*p+h*y+u*T,s[7]=c*m+h*v+u*R,s[2]=f*g+d*S+_*A,s[5]=f*p+d*y+_*T,s[8]=f*m+d*v+_*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,_=e*u+n*f+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(r*c-h*n)*g,t[2]=(a*n-r*o)*g,t[3]=f*g,t[4]=(h*e-r*l)*g,t[5]=(r*s-a*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(aa.makeScale(t,e)),this}rotate(t){return this.premultiply(aa.makeRotation(-t)),this}translate(t,e){return this.premultiply(aa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const aa=new Yt;function _f(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nm(){const i=ps("canvas");return i.style.display="block",i}const yh={};function ms(i){i in yh||(yh[i]=!0,console.warn(i))}function im(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Mh=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sh=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rm(){const i={enabled:!0,workingColorSpace:Sr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===re&&(r.r=Kn(r.r),r.g=Kn(r.g),r.b=Kn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===re&&(r.r=gr(r.r),r.g=gr(r.g),r.b=gr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===li?Lo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ms("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ms("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Sr]:{primaries:t,whitePoint:n,transfer:Lo,toXYZ:Mh,fromXYZ:Sh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:t,whitePoint:n,transfer:re,toXYZ:Mh,fromXYZ:Sh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),i}const Qt=rm();function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let $i;class sm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{$i===void 0&&($i=ps("canvas")),$i.width=t.width,$i.height=t.height;const r=$i.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=$i}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ps("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Kn(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kn(e[n]/255)*255):e[n]=Kn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let om=0;class Rc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=In(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(la(r[o].image)):s.push(la(r[o]))}else s=la(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function la(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let am=0;const ca=new I;class ze extends Gi{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,n=Li,r=Li,s=je,o=Ii,a=An,l=Nn,c=ze.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=In(),this.name="",this.source=new Rc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ca).x}get height(){return this.source.getSize(ca).y}get depth(){return this.source.getSize(ca).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Di:t.x=t.x-Math.floor(t.x);break;case Li:t.x=t.x<0?0:1;break;case dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Di:t.y=t.y-Math.floor(t.y);break;case Li:t.y=t.y<0?0:1;break;case dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=sf;ze.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,n=0,r=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,v=(d+1)/2,A=(m+1)/2,T=(h+f)/4,R=(u+g)/4,D=(_+p)/4;return y>v&&y>A?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=T/n,s=R/n):v>A?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=T/r,s=D/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=R/s,r=D/s),this.set(n,r,s,e),this}let S=Math.sqrt((p-_)*(p-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(u-g)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lm extends Gi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new ze(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Rc(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends lm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class gf extends ze{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cm extends ze{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class As{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yn):yn.fromBufferAttribute(s,o),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Us.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Us.copy(n.boundingBox)),Us.applyMatrix4(t.matrixWorld),this.union(Us)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Br),Ns.subVectors(this.max,Br),qi.subVectors(t.a,Br),Zi.subVectors(t.b,Br),Ki.subVectors(t.c,Br),ti.subVectors(Zi,qi),ei.subVectors(Ki,Zi),Si.subVectors(qi,Ki);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-Si.z,Si.y,ti.z,0,-ti.x,ei.z,0,-ei.x,Si.z,0,-Si.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-Si.y,Si.x,0];return!ha(e,qi,Zi,Ki,Ns)||(e=[1,0,0,0,1,0,0,0,1],!ha(e,qi,Zi,Ki,Ns))?!1:(Fs.crossVectors(ti,ei),e=[Fs.x,Fs.y,Fs.z],ha(e,qi,Zi,Ki,Ns))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const kn=[new I,new I,new I,new I,new I,new I,new I,new I],yn=new I,Us=new As,qi=new I,Zi=new I,Ki=new I,ti=new I,ei=new I,Si=new I,Br=new I,Ns=new I,Fs=new I,Ei=new I;function ha(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ei.fromArray(i,s);const a=r.x*Math.abs(Ei.x)+r.y*Math.abs(Ei.y)+r.z*Math.abs(Ei.z),l=t.dot(Ei),c=e.dot(Ei),h=n.dot(Ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const hm=new As,zr=new I,ua=new I;class ws{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):hm.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zr.subVectors(t,this.center);const e=zr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(zr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ua.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zr.copy(t.center).add(ua)),this.expandByPoint(zr.copy(t.center).sub(ua))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Hn=new I,fa=new I,Os=new I,ni=new I,da=new I,Bs=new I,pa=new I;class Cs{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){fa.copy(t).add(e).multiplyScalar(.5),Os.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(fa);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Os),a=ni.dot(this.direction),l=-ni.dot(Os),c=ni.lengthSq(),h=Math.abs(1-o*o);let u,f,d,_;if(h>0)if(u=o*l-a,f=o*a-l,_=s*h,u>=0)if(f>=-_)if(f<=_){const g=1/h;u*=g,f*=g,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(fa).addScaledVector(Os,f),d}intersectSphere(t,e){Hn.subVectors(t.center,this.origin);const n=Hn.dot(this.direction),r=Hn.dot(Hn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,n,r,s){da.subVectors(e,t),Bs.subVectors(n,t),pa.crossVectors(da,Bs);let o=this.direction.dot(pa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ni.subVectors(this.origin,t);const l=a*this.direction.dot(Bs.crossVectors(ni,Bs));if(l<0)return null;const c=a*this.direction.dot(da.cross(ni));if(c<0||l+c>o)return null;const h=-a*ni.dot(pa);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,n,r,s,o,a,l,c,h,u,f,d,_,g,p){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,h,u,f,d,_,g,p)}set(t,e,n,r,s,o,a,l,c,h,u,f,d,_,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/ji.setFromMatrixColumn(t,0).length(),s=1/ji.setFromMatrixColumn(t,1).length(),o=1/ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=o*h,d=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+_*c,e[5]=f-g*c,e[9]=-a*l,e[2]=g-f*c,e[6]=_+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,_=c*h,g=c*u;e[0]=f+g*a,e[4]=_*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-_,e[6]=g+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,_=c*h,g=c*u;e[0]=f-g*a,e[4]=-o*u,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*h,e[9]=g-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=_*c-d,e[8]=f*c+g,e[1]=l*u,e[5]=g*c+f,e[9]=d*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=g-f*u,e[8]=_*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+_,e[10]=f-g*u}else if(t.order==="XZY"){const f=o*l,d=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+g,e[5]=o*h,e[9]=d*u-_,e[2]=_*u-d,e[6]=a*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(um,t,fm)}lookAt(t,e,n){const r=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ii.crossVectors(n,rn),ii.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ii.crossVectors(n,rn)),ii.normalize(),zs.crossVectors(rn,ii),r[0]=ii.x,r[4]=zs.x,r[8]=rn.x,r[1]=ii.y,r[5]=zs.y,r[9]=rn.y,r[2]=ii.z,r[6]=zs.z,r[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],S=n[3],y=n[7],v=n[11],A=n[15],T=r[0],R=r[4],D=r[8],M=r[12],E=r[1],P=r[5],F=r[9],O=r[13],G=r[2],L=r[6],B=r[10],et=r[14],U=r[3],V=r[7],it=r[11],q=r[15];return s[0]=o*T+a*E+l*G+c*U,s[4]=o*R+a*P+l*L+c*V,s[8]=o*D+a*F+l*B+c*it,s[12]=o*M+a*O+l*et+c*q,s[1]=h*T+u*E+f*G+d*U,s[5]=h*R+u*P+f*L+d*V,s[9]=h*D+u*F+f*B+d*it,s[13]=h*M+u*O+f*et+d*q,s[2]=_*T+g*E+p*G+m*U,s[6]=_*R+g*P+p*L+m*V,s[10]=_*D+g*F+p*B+m*it,s[14]=_*M+g*O+p*et+m*q,s[3]=S*T+y*E+v*G+A*U,s[7]=S*R+y*P+v*L+A*V,s[11]=S*D+y*F+v*B+A*it,s[15]=S*M+y*O+v*et+A*q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],_=t[3],g=t[7],p=t[11],m=t[15];return _*(+s*l*u-r*c*u-s*a*f+n*c*f+r*a*d-n*l*d)+g*(+e*l*d-e*c*f+s*o*f-r*o*d+r*c*h-s*l*h)+p*(+e*c*u-e*a*d-s*o*u+n*o*d+s*a*h-n*c*h)+m*(-r*a*h-e*l*u+e*a*f+r*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],_=t[12],g=t[13],p=t[14],m=t[15],S=u*p*c-g*f*c+g*l*d-a*p*d-u*l*m+a*f*m,y=_*f*c-h*p*c-_*l*d+o*p*d+h*l*m-o*f*m,v=h*g*c-_*u*c+_*a*d-o*g*d-h*a*m+o*u*m,A=_*u*l-h*g*l-_*a*f+o*g*f+h*a*p-o*u*p,T=e*S+n*y+r*v+s*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=S*R,t[1]=(g*f*s-u*p*s-g*r*d+n*p*d+u*r*m-n*f*m)*R,t[2]=(a*p*s-g*l*s+g*r*c-n*p*c-a*r*m+n*l*m)*R,t[3]=(u*l*s-a*f*s-u*r*c+n*f*c+a*r*d-n*l*d)*R,t[4]=y*R,t[5]=(h*p*s-_*f*s+_*r*d-e*p*d-h*r*m+e*f*m)*R,t[6]=(_*l*s-o*p*s-_*r*c+e*p*c+o*r*m-e*l*m)*R,t[7]=(o*f*s-h*l*s+h*r*c-e*f*c-o*r*d+e*l*d)*R,t[8]=v*R,t[9]=(_*u*s-h*g*s-_*n*d+e*g*d+h*n*m-e*u*m)*R,t[10]=(o*g*s-_*a*s+_*n*c-e*g*c-o*n*m+e*a*m)*R,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*d-e*a*d)*R,t[12]=A*R,t[13]=(h*g*r-_*u*r+_*n*f-e*g*f-h*n*p+e*u*p)*R,t[14]=(_*a*r-o*g*r-_*n*l+e*g*l+o*n*p-e*a*p)*R,t[15]=(o*u*r-h*a*r+h*n*l-e*u*l-o*n*f+e*a*f)*R,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,_=s*u,g=o*h,p=o*u,m=a*u,S=l*c,y=l*h,v=l*u,A=n.x,T=n.y,R=n.z;return r[0]=(1-(g+m))*A,r[1]=(d+v)*A,r[2]=(_-y)*A,r[3]=0,r[4]=(d-v)*T,r[5]=(1-(f+m))*T,r[6]=(p+S)*T,r[7]=0,r[8]=(_+y)*R,r[9]=(p-S)*R,r[10]=(1-(f+g))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=ji.set(r[0],r[1],r[2]).length();const o=ji.set(r[4],r[5],r[6]).length(),a=ji.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Mn.copy(this);const c=1/s,h=1/o,u=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,e.setFromRotationMatrix(Mn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Ln,l=!1){const c=this.elements,h=2*s/(e-t),u=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r);let _,g;if(l)_=s/(o-s),g=o*s/(o-s);else if(a===Ln)_=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Io)_=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Ln,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r);let _,g;if(l)_=1/(o-s),g=o/(o-s);else if(a===Ln)_=-2/(o-s),g=-(o+s)/(o-s);else if(a===Io)_=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ji=new I,Mn=new de,um=new I(0,0,0),fm=new I(1,1,1),ii=new I,zs=new I,rn=new I,Eh=new de,bh=new zi;class Fn{constructor(t=0,e=0,n=0,r=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Eh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Eh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bh.setFromEuler(this),this.setFromQuaternion(bh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class Pc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dm=0;const Th=new I,Ji=new zi,Vn=new de,ks=new I,kr=new I,pm=new I,mm=new zi,Ah=new I(1,0,0),wh=new I(0,1,0),Ch=new I(0,0,1),Rh={type:"added"},_m={type:"removed"},Qi={type:"childadded",child:null},ma={type:"childremoved",child:null};class Pe extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new I,e=new Fn,n=new zi,r=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new de},normalMatrix:{value:new Yt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(Ah,t)}rotateY(t){return this.rotateOnAxis(wh,t)}rotateZ(t){return this.rotateOnAxis(Ch,t)}translateOnAxis(t,e){return Th.copy(t).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ah,t)}translateY(t){return this.translateOnAxis(wh,t)}translateZ(t){return this.translateOnAxis(Ch,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ks.copy(t):ks.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(kr,ks,this.up):Vn.lookAt(ks,kr,this.up),this.quaternion.setFromRotationMatrix(Vn),r&&(Vn.extractRotation(r.matrixWorld),Ji.setFromRotationMatrix(Vn),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rh),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_m),ma.child=t,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rh),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,t,pm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,mm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Pe.DEFAULT_UP=new I(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new I,Gn=new I,_a=new I,Wn=new I,tr=new I,er=new I,Ph=new I,ga=new I,va=new I,xa=new I,ya=new be,Ma=new be,Sa=new be;class on{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Sn.subVectors(t,e),r.cross(Sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Sn.subVectors(r,e),Gn.subVectors(n,e),_a.subVectors(t,e);const o=Sn.dot(Sn),a=Sn.dot(Gn),l=Sn.dot(_a),c=Gn.dot(Gn),h=Gn.dot(_a),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,_=(o*h-a*l)*f;return s.set(1-d-_,_,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Wn.x),l.addScaledVector(o,Wn.y),l.addScaledVector(a,Wn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return ya.setScalar(0),Ma.setScalar(0),Sa.setScalar(0),ya.fromBufferAttribute(t,e),Ma.fromBufferAttribute(t,n),Sa.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(ya,s.x),o.addScaledVector(Ma,s.y),o.addScaledVector(Sa,s.z),o}static isFrontFacing(t,e,n,r){return Sn.subVectors(n,e),Gn.subVectors(t,e),Sn.cross(Gn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),Sn.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return on.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;tr.subVectors(r,n),er.subVectors(s,n),ga.subVectors(t,n);const l=tr.dot(ga),c=er.dot(ga);if(l<=0&&c<=0)return e.copy(n);va.subVectors(t,r);const h=tr.dot(va),u=er.dot(va);if(h>=0&&u<=h)return e.copy(r);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(tr,o);xa.subVectors(t,s);const d=tr.dot(xa),_=er.dot(xa);if(_>=0&&d<=_)return e.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(er,a);const p=h*_-d*u;if(p<=0&&u-h>=0&&d-_>=0)return Ph.subVectors(s,r),a=(u-h)/(u-h+(d-_)),e.copy(r).addScaledVector(Ph,a);const m=1/(p+g+f);return o=g*m,a=f*m,e.copy(n).addScaledVector(tr,o).addScaledVector(er,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function Ea(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=Qt.workingColorSpace){if(t=Cc(t,1),e=qt(e,0,1),n=qt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Ea(o,s,t+1/3),this.g=Ea(o,s,t),this.b=Ea(o,s,t-1/3)}return Qt.colorSpaceToWorking(this,r),this}setStyle(t,e=pn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pn){const n=vf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=gr(t.r),this.g=gr(t.g),this.b=gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pn){return Qt.workingToColorSpace(Be.copy(this),t),Math.round(qt(Be.r*255,0,255))*65536+Math.round(qt(Be.g*255,0,255))*256+Math.round(qt(Be.b*255,0,255))}getHexString(t=pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(Be.copy(this),e);const n=Be.r,r=Be.g,s=Be.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=pn){Qt.workingToColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,r=Be.b;return t!==pn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(Hs);const n=es(ri.h,Hs.h,e),r=es(ri.s,Hs.s,e),s=es(ri.l,Hs.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new Gt;Gt.NAMES=vf;let gm=0;class vi extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=In(),this.name="",this.type="Material",this.blending=ui,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nl,this.blendDst=il,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nl&&(n.blendSrc=this.blendSrc),this.blendDst!==il&&(n.blendDst=this.blendDst),this.blendEquation!==Ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_h&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class oi extends vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new I,Vs=new ht;let vm=0;class Ye{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vl,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vs.fromBufferAttribute(this,e),Vs.applyMatrix3(t),this.setXY(e,Vs.x,Vs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=En(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=En(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=En(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=En(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=En(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),r=ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),r=ne(r,this.array),s=ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vl&&(t.usage=this.usage),t}}class xf extends Ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class yf extends Ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends Ye{constructor(t,e,n){super(new Float32Array(t),e,n)}}let xm=0;const fn=new de,ba=new Pe,nr=new I,sn=new As,Hr=new As,Ie=new I;class Ae extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_f(t)?yf:xf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Yt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return ba.lookAt(t),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new me(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new As);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ie.addVectors(sn.min,Hr.min),sn.expandByPoint(Ie),Ie.addVectors(sn.max,Hr.max),sn.expandByPoint(Ie)):(sn.expandByPoint(Hr.min),sn.expandByPoint(Hr.max))}sn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Ie.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ie));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ie.fromBufferAttribute(a,c),l&&(nr.fromBufferAttribute(t,c),Ie.add(nr)),r=Math.max(r,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new I,l[D]=new I;const c=new I,h=new I,u=new I,f=new ht,d=new ht,_=new ht,g=new I,p=new I;function m(D,M,E){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,E),f.fromBufferAttribute(s,D),d.fromBufferAttribute(s,M),_.fromBufferAttribute(s,E),h.sub(c),u.sub(c),d.sub(f),_.sub(f);const P=1/(d.x*_.y-_.x*d.y);isFinite(P)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-d.y).multiplyScalar(P),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(P),a[D].add(g),a[M].add(g),a[E].add(g),l[D].add(p),l[M].add(p),l[E].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let D=0,M=S.length;D<M;++D){const E=S[D],P=E.start,F=E.count;for(let O=P,G=P+F;O<G;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const y=new I,v=new I,A=new I,T=new I;function R(D){A.fromBufferAttribute(r,D),T.copy(A);const M=a[D];y.copy(M),y.sub(A.multiplyScalar(A.dot(M))).normalize(),v.crossVectors(T,M);const P=v.dot(l[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,P)}for(let D=0,M=S.length;D<M;++D){const E=S[D],P=E.start,F=E.count;for(let O=P,G=P+F;O<G;O+=3)R(t.getX(O+0)),R(t.getX(O+1)),R(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),g=t.getX(f+1),p=t.getX(f+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,p),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*h;for(let m=0;m<h;m++)f[_++]=c[d++]}return new Ye(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dh=new de,bi=new Cs,Gs=new ws,Lh=new I,Ws=new I,Xs=new I,Ys=new I,Ta=new I,$s=new I,Ih=new I,qs=new I;class Ue extends Pe{constructor(t=new Ae,e=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){$s.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(Ta.fromBufferAttribute(u,t),o?$s.addScaledVector(Ta,h):$s.addScaledVector(Ta.sub(e),h))}e.add($s)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(s),bi.copy(t.ray).recast(t.near),!(Gs.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Gs,Lh)===null||bi.origin.distanceToSquared(Lh)>(t.far-t.near)**2))&&(Dh.copy(s).invert(),bi.copy(t.ray).applyMatrix4(Dh),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],S=Math.max(p.start,d.start),y=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=S,A=y;v<A;v+=3){const T=a.getX(v),R=a.getX(v+1),D=a.getX(v+2);r=Zs(this,m,t,n,c,h,u,T,R,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const S=a.getX(p),y=a.getX(p+1),v=a.getX(p+2);r=Zs(this,o,t,n,c,h,u,S,y,v),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],S=Math.max(p.start,d.start),y=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=S,A=y;v<A;v+=3){const T=v,R=v+1,D=v+2;r=Zs(this,m,t,n,c,h,u,T,R,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const S=p,y=p+1,v=p+2;r=Zs(this,o,t,n,c,h,u,S,y,v),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function ym(i,t,e,n,r,s,o,a){let l;if(t.side===Qe?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===pi,a),l===null)return null;qs.copy(a),qs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(qs);return c<e.near||c>e.far?null:{distance:c,point:qs.clone(),object:i}}function Zs(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,Ws),i.getVertexPosition(l,Xs),i.getVertexPosition(c,Ys);const h=ym(i,t,e,n,Ws,Xs,Ys,Ih);if(h){const u=new I;on.getBarycoord(Ih,Ws,Xs,Ys,u),r&&(h.uv=on.getInterpolatedAttribute(r,a,l,c,u,new ht)),s&&(h.uv1=on.getInterpolatedAttribute(s,a,l,c,u,new ht)),o&&(h.normal=on.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};on.getNormal(Ws,Xs,Ys,f.normal),h.face=f,h.barycoord=u}return h}class Rs extends Ae{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,r,o,2),_("x","z","y",1,-1,t,n,-e,r,o,3),_("x","y","z",1,-1,t,e,n,r,s,4),_("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(u,2));function _(g,p,m,S,y,v,A,T,R,D,M){const E=v/R,P=A/D,F=v/2,O=A/2,G=T/2,L=R+1,B=D+1;let et=0,U=0;const V=new I;for(let it=0;it<B;it++){const q=it*P-O;for(let lt=0;lt<L;lt++){const _t=lt*E-F;V[g]=_t*S,V[p]=q*y,V[m]=G,c.push(V.x,V.y,V.z),V[g]=0,V[p]=0,V[m]=T>0?1:-1,h.push(V.x,V.y,V.z),u.push(lt/R),u.push(1-it/D),et+=1}}for(let it=0;it<D;it++)for(let q=0;q<R;q++){const lt=f+q+L*it,_t=f+q+L*(it+1),Et=f+(q+1)+L*(it+1),xt=f+(q+1)+L*it;l.push(lt,_t,xt),l.push(_t,Et,xt),U+=6}a.addGroup(d,U,M),d+=U,f+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Er(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function We(i){const t={};for(let e=0;e<i.length;e++){const n=Er(i[e]);for(const r in n)t[r]=n[r]}return t}function Mm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Mf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Sm={clone:Er,merge:We};var Em=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Em,this.fragmentShader=bm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Er(t.uniforms),this.uniformsGroups=Mm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Sf extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new I,Uh=new ht,Nh=new ht;class _n extends Sf{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ds*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,Uh,Nh),e.subVectors(Nh,Uh)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_r*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ir=-90,rr=1;class Tm extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(ir,rr,t,e);r.layers=this.layers,this.add(r);const s=new _n(ir,rr,t,e);s.layers=this.layers,this.add(s);const o=new _n(ir,rr,t,e);o.layers=this.layers,this.add(o);const a=new _n(ir,rr,t,e);a.layers=this.layers,this.add(a);const l=new _n(ir,rr,t,e);l.layers=this.layers,this.add(l);const c=new _n(ir,rr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Io)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Ef extends ze{constructor(t=[],e=yr,n,r,s,o,a,l,c,h){super(t,e,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Am extends ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Ef(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Rs(5,5,5),s=new jn({name:"CubemapFromEquirect",uniforms:Er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:hi});s.uniforms.tEquirect.value=e;const o=new Ue(r,s),a=e.minFilter;return e.minFilter===Ii&&(e.minFilter=je),new Tm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}class fr extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wm={type:"move"};class Aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wm)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Dc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new Dc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Cm extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Rm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Vl,this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ge=new I;class Uo{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=En(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=En(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=En(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=En(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=En(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),r=ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),r=ne(r,this.array),s=ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Uo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class bo extends vi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let sr;const Vr=new I,or=new I,ar=new I,lr=new ht,Gr=new ht,bf=new de,Ks=new I,Wr=new I,js=new I,Fh=new ht,wa=new ht,Oh=new ht;class Ca extends Pe{constructor(t=new bo){if(super(),this.isSprite=!0,this.type="Sprite",sr===void 0){sr=new Ae;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Rm(e,5);sr.setIndex([0,1,2,0,2,3]),sr.setAttribute("position",new Uo(n,3,0,!1)),sr.setAttribute("uv",new Uo(n,2,3,!1))}this.geometry=sr,this.material=t,this.center=new ht(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),or.setFromMatrixScale(this.matrixWorld),bf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ar.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&or.multiplyScalar(-ar.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;Js(Ks.set(-.5,-.5,0),ar,o,or,r,s),Js(Wr.set(.5,-.5,0),ar,o,or,r,s),Js(js.set(.5,.5,0),ar,o,or,r,s),Fh.set(0,0),wa.set(1,0),Oh.set(1,1);let a=t.ray.intersectTriangle(Ks,Wr,js,!1,Vr);if(a===null&&(Js(Wr.set(-.5,.5,0),ar,o,or,r,s),wa.set(0,1),a=t.ray.intersectTriangle(Ks,js,Wr,!1,Vr),a===null))return;const l=t.ray.origin.distanceTo(Vr);l<t.near||l>t.far||e.push({distance:l,point:Vr.clone(),uv:on.getInterpolation(Vr,Ks,Wr,js,Fh,wa,Oh,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Js(i,t,e,n,r,s){lr.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Gr.x=s*lr.x-r*lr.y,Gr.y=r*lr.x+s*lr.y):Gr.copy(lr),i.copy(t),i.x+=Gr.x,i.y+=Gr.y,i.applyMatrix4(bf)}const Ra=new I,Pm=new I,Dm=new Yt;class ai{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Ra.subVectors(n,e).cross(Pm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ra),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Dm.getNormalMatrix(t),r=this.coplanarPoint(Ra).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new ws,Lm=new ht(.5,.5),Qs=new I;class Lc{constructor(t=new ai,e=new ai,n=new ai,r=new ai,s=new ai,o=new ai){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ln,n=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],d=s[7],_=s[8],g=s[9],p=s[10],m=s[11],S=s[12],y=s[13],v=s[14],A=s[15];if(r[0].setComponents(c-o,d-h,m-_,A-S).normalize(),r[1].setComponents(c+o,d+h,m+_,A+S).normalize(),r[2].setComponents(c+a,d+u,m+g,A+y).normalize(),r[3].setComponents(c-a,d-u,m-g,A-y).normalize(),n)r[4].setComponents(l,f,p,v).normalize(),r[5].setComponents(c-l,d-f,m-p,A-v).normalize();else if(r[4].setComponents(c-l,d-f,m-p,A-v).normalize(),e===Ln)r[5].setComponents(c+l,d+f,m+p,A+v).normalize();else if(e===Io)r[5].setComponents(l,f,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){Ti.center.set(0,0,0);const e=Lm.distanceTo(t.center);return Ti.radius=.7071067811865476+e,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Qs.x=r.normal.x>0?t.max.x:t.min.x,Qs.y=r.normal.y>0?t.max.y:t.min.y,Qs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ns extends vi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const No=new I,Fo=new I,Bh=new de,Xr=new Cs,to=new ws,Pa=new I,zh=new I;class Tf extends Pe{constructor(t=new Ae,e=new ns){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)No.fromBufferAttribute(e,r-1),Fo.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=No.distanceTo(Fo);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(r),to.radius+=s,t.ray.intersectsSphere(to)===!1)return;Bh.copy(r).invert(),Xr.copy(t.ray).applyMatrix4(Bh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=d,p=_-1;g<p;g+=c){const m=h.getX(g),S=h.getX(g+1),y=eo(this,t,Xr,l,m,S,g);y&&e.push(y)}if(this.isLineLoop){const g=h.getX(_-1),p=h.getX(d),m=eo(this,t,Xr,l,g,p,_-1);m&&e.push(m)}}else{const d=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=d,p=_-1;g<p;g+=c){const m=eo(this,t,Xr,l,g,g+1,g);m&&e.push(m)}if(this.isLineLoop){const g=eo(this,t,Xr,l,_-1,d,_-1);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function eo(i,t,e,n,r,s,o){const a=i.geometry.attributes.position;if(No.fromBufferAttribute(a,r),Fo.fromBufferAttribute(a,s),e.distanceSqToSegment(No,Fo,Pa,zh)>n)return;Pa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Pa);if(!(c<t.near||c>t.far))return{distance:c,point:zh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const kh=new I,Hh=new I;class Gl extends Tf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)kh.fromBufferAttribute(e,r),Hh.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+kh.distanceTo(Hh);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wl extends vi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Vh=new de,Xl=new Cs,no=new ws,io=new I;class Gh extends Pe{constructor(t=new Ae,e=new Wl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(r),no.radius+=s,t.ray.intersectsSphere(no)===!1)return;Vh.copy(r).invert(),Xl.copy(t.ray).applyMatrix4(Vh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=f,g=d;_<g;_++){const p=c.getX(_);io.fromBufferAttribute(u,p),Wh(io,p,l,r,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let _=f,g=d;_<g;_++)io.fromBufferAttribute(u,_),Wh(io,_,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Wh(i,t,e,n,r,s,o){const a=Xl.distanceSqToPoint(i);if(a<e){const l=new I;Xl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Yr extends ze{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Af extends ze{constructor(t,e,n=Bi,r,s,o,a=wn,l=wn,c,h=us,u=1){if(h!==us&&h!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Rc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class wf extends ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Oo extends Ae{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],f=[],d=[];let _=0;const g=[],p=n/2;let m=0;S(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(f,3)),this.setAttribute("uv",new me(d,2));function S(){const v=new I,A=new I;let T=0;const R=(e-t)/n;for(let D=0;D<=s;D++){const M=[],E=D/s,P=E*(e-t)+t;for(let F=0;F<=r;F++){const O=F/r,G=O*l+a,L=Math.sin(G),B=Math.cos(G);A.x=P*L,A.y=-E*n+p,A.z=P*B,u.push(A.x,A.y,A.z),v.set(L,R,B).normalize(),f.push(v.x,v.y,v.z),d.push(O,1-E),M.push(_++)}g.push(M)}for(let D=0;D<r;D++)for(let M=0;M<s;M++){const E=g[M][D],P=g[M+1][D],F=g[M+1][D+1],O=g[M][D+1];(t>0||M!==0)&&(h.push(E,P,O),T+=3),(e>0||M!==s-1)&&(h.push(P,F,O),T+=3)}c.addGroup(m,T,0),m+=T}function y(v){const A=_,T=new ht,R=new I;let D=0;const M=v===!0?t:e,E=v===!0?1:-1;for(let F=1;F<=r;F++)u.push(0,p*E,0),f.push(0,E,0),d.push(.5,.5),_++;const P=_;for(let F=0;F<=r;F++){const G=F/r*l+a,L=Math.cos(G),B=Math.sin(G);R.x=M*B,R.y=p*E,R.z=M*L,u.push(R.x,R.y,R.z),f.push(0,E,0),T.x=L*.5+.5,T.y=B*.5*E+.5,d.push(T.x,T.y),_++}for(let F=0;F<r;F++){const O=A+F,G=P+F;v===!0?h.push(G,G+1,O):h.push(G+1,G,O),D+=3}c.addGroup(m,D,v===!0?1:2),m+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const ro=new I,so=new I,Da=new I,oo=new on;class Im extends Ae{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(_r*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},d=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:g,b:p,c:m}=oo;if(g.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),oo.getNormal(Da),u[0]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,u[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let S=0;S<3;S++){const y=(S+1)%3,v=u[S],A=u[y],T=oo[h[S]],R=oo[h[y]],D=`${v}_${A}`,M=`${A}_${v}`;M in f&&f[M]?(Da.dot(f[M].normal)<=s&&(d.push(T.x,T.y,T.z),d.push(R.x,R.y,R.z)),f[M]=null):D in f||(f[D]={index0:c[S],index1:c[y],normal:Da.clone()})}}for(const _ in f)if(f[_]){const{index0:g,index1:p}=f[_];ro.fromBufferAttribute(a,g),so.fromBufferAttribute(a,p),d.push(ro.x,ro.y,ro.z),d.push(so.x,so.y,so.z)}this.setAttribute("position",new me(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Bn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const h=n[r],f=n[r+1]-h,d=(o-h)/f;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new ht:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,r=[],s=[],o=[],a=new I,l=new de;for(let d=0;d<=t;d++){const _=d/t;r[d]=this.getTangentAt(_,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(qt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(qt(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],d*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ic extends Bn{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ht){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Um extends Ic{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Uc(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const ao=new I,La=new Uc,Ia=new Uc,Ua=new Uc;class Nm extends Bn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new I){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(ao.subVectors(r[0],r[1]).add(r[0]),c=ao);const u=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(ao.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=ao),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),La.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,_,g,p),Ia.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,_,g,p),Ua.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,_,g,p)}else this.curveType==="catmullrom"&&(La.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Ia.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ua.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(La.calc(l),Ia.calc(l),Ua.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new I().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Xh(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function Fm(i,t){const e=1-i;return e*e*t}function Om(i,t){return 2*(1-i)*i*t}function Bm(i,t){return i*i*t}function is(i,t,e,n){return Fm(i,t)+Om(i,e)+Bm(i,n)}function zm(i,t){const e=1-i;return e*e*e*t}function km(i,t){const e=1-i;return 3*e*e*i*t}function Hm(i,t){return 3*(1-i)*i*i*t}function Vm(i,t){return i*i*i*t}function rs(i,t,e,n,r){return zm(i,t)+km(i,e)+Hm(i,n)+Vm(i,r)}class Cf extends Bn{constructor(t=new ht,e=new ht,n=new ht,r=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new ht){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(rs(t,r.x,s.x,o.x,a.x),rs(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Gm extends Bn{constructor(t=new I,e=new I,n=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new I){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(rs(t,r.x,s.x,o.x,a.x),rs(t,r.y,s.y,o.y,a.y),rs(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Rf extends Bn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wm extends Bn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pf extends Bn{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(is(t,r.x,s.x,o.x),is(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Df extends Bn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(is(t,r.x,s.x,o.x),is(t,r.y,s.y,o.y),is(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lf extends Bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(Xh(a,l.x,c.x,h.x,u.x),Xh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new ht().fromArray(r))}return this}}var Yl=Object.freeze({__proto__:null,ArcCurve:Um,CatmullRomCurve3:Nm,CubicBezierCurve:Cf,CubicBezierCurve3:Gm,EllipseCurve:Ic,LineCurve:Rf,LineCurve3:Wm,QuadraticBezierCurve:Pf,QuadraticBezierCurve3:Df,SplineCurve:Lf});class Xm extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new Yl[r.type]().fromJSON(r))}return this}}class Yh extends Xm{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Rf(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Pf(this.currentPoint.clone(),new ht(t,e),new ht(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){const a=new Cf(this.currentPoint.clone(),new ht(t,e),new ht(n,r),new ht(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Lf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,r,s,o,a,l),this}absellipse(t,e,n,r,s,o,a,l){const c=new Ic(t,e,n,r,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Bo extends Yh{constructor(t){super(t),this.uuid=In(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Yh().fromJSON(r))}return this}}function Ym(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=If(i,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=jm(i,t,s,e)),i.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=e;f<r;f+=e){const d=i[f],_=i[f+1];d<a&&(a=d),_<l&&(l=_),d>h&&(h=d),_>u&&(u=_)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return _s(s,o,e,a,l,c,0),o}function If(i,t,e,n,r){let s;if(r===l_(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=$h(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=$h(o/n|0,i[o],i[o+1],s);return s&&br(s,s.next)&&(vs(s),s=s.next),s}function Hi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(br(e,e.next)||Me(e.prev,e,e.next)===0)){if(vs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function _s(i,t,e,n,r,s,o){if(!i)return;!o&&s&&n_(i,n,r,s);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(s?qm(i,n,r,s):$m(i)){t.push(l.i,i.i,c.i),vs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Zm(Hi(i),t),_s(i,t,e,n,r,s,2)):o===2&&Km(i,t,e,n,r,s):_s(Hi(i),t,e,n,r,s,1);break}}}function $m(i){const t=i.prev,e=i,n=i.next;if(Me(t,e,n)>=0)return!1;const r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(r,s,o),u=Math.min(a,l,c),f=Math.max(r,s,o),d=Math.max(a,l,c);let _=n.next;for(;_!==t;){if(_.x>=h&&_.x<=f&&_.y>=u&&_.y<=d&&Zr(r,a,s,l,o,c,_.x,_.y)&&Me(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function qm(i,t,e,n){const r=i.prev,s=i,o=i.next;if(Me(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,h=r.y,u=s.y,f=o.y,d=Math.min(a,l,c),_=Math.min(h,u,f),g=Math.max(a,l,c),p=Math.max(h,u,f),m=$l(d,_,t,e,n),S=$l(g,p,t,e,n);let y=i.prevZ,v=i.nextZ;for(;y&&y.z>=m&&v&&v.z<=S;){if(y.x>=d&&y.x<=g&&y.y>=_&&y.y<=p&&y!==r&&y!==o&&Zr(a,h,l,u,c,f,y.x,y.y)&&Me(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=d&&v.x<=g&&v.y>=_&&v.y<=p&&v!==r&&v!==o&&Zr(a,h,l,u,c,f,v.x,v.y)&&Me(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=m;){if(y.x>=d&&y.x<=g&&y.y>=_&&y.y<=p&&y!==r&&y!==o&&Zr(a,h,l,u,c,f,y.x,y.y)&&Me(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=S;){if(v.x>=d&&v.x<=g&&v.y>=_&&v.y<=p&&v!==r&&v!==o&&Zr(a,h,l,u,c,f,v.x,v.y)&&Me(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Zm(i,t){let e=i;do{const n=e.prev,r=e.next.next;!br(n,r)&&Nf(n,e,e.next,r)&&gs(n,r)&&gs(r,n)&&(t.push(n.i,e.i,r.i),vs(e),vs(e.next),e=i=r),e=e.next}while(e!==i);return Hi(e)}function Km(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&s_(o,a)){let l=Ff(o,a);o=Hi(o,o.next),l=Hi(l,l.next),_s(o,t,e,n,r,s,0),_s(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function jm(i,t,e,n){const r=[];for(let s=0,o=t.length;s<o;s++){const a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=If(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(r_(c))}r.sort(Jm);for(let s=0;s<r.length;s++)e=Qm(r[s],e);return e}function Jm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function Qm(i,t){const e=t_(i,t);if(!e)return t;const n=Ff(e,i);return Hi(n,n.next),Hi(e,e.next)}function t_(i,t){let e=t;const n=i.x,r=i.y;let s=-1/0,o;if(br(i,e))return e;do{if(br(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>s&&(s=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Uf(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){const u=Math.abs(r-e.y)/(n-e.x);gs(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&e_(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function e_(i,t){return Me(i.prev,i,t.prev)<0&&Me(t.next,i,i.next)<0}function n_(i,t,e,n){let r=i;do r.z===0&&(r.z=$l(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,i_(r)}function i_(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function $l(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function r_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Uf(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function Zr(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&Uf(i,t,e,n,r,s,o,a)}function s_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!o_(i,t)&&(gs(i,t)&&gs(t,i)&&a_(i,t)&&(Me(i.prev,i,t.prev)||Me(i,t.prev,t))||br(i,t)&&Me(i.prev,i,i.next)>0&&Me(t.prev,t,t.next)>0)}function Me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function br(i,t){return i.x===t.x&&i.y===t.y}function Nf(i,t,e,n){const r=co(Me(i,t,e)),s=co(Me(i,t,n)),o=co(Me(e,n,i)),a=co(Me(e,n,t));return!!(r!==s&&o!==a||r===0&&lo(i,e,t)||s===0&&lo(i,n,t)||o===0&&lo(e,i,n)||a===0&&lo(e,t,n))}function lo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function co(i){return i>0?1:i<0?-1:0}function o_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Nf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function gs(i,t){return Me(i.prev,i,i.next)<0?Me(i,t,i.next)>=0&&Me(i,i.prev,t)>=0:Me(i,t,i.prev)<0||Me(i,i.next,t)<0}function a_(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ff(i,t){const e=ql(i.i,i.x,i.y),n=ql(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function $h(i,t,e,n){const r=ql(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function vs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ql(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function l_(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class c_{static triangulate(t,e,n=2){return Ym(t,e,n)}}class Zn{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return Zn.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];qh(t),Zh(n,t);let o=t.length;e.forEach(qh);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Zh(n,e[l]);const a=c_.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function qh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Zh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class zo extends Ae{constructor(t=new Bo([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new me(r,3)),this.setAttribute("uv",new me(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:d-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:h_;let y,v=!1,A,T,R,D;m&&(y=m.getSpacedPoints(h),v=!0,f=!1,A=m.computeFrenetFrames(h,!1),T=new I,R=new I,D=new I),f||(p=0,d=0,_=0,g=0);const M=a.extractPoints(c);let E=M.shape;const P=M.holes;if(!Zn.isClockWise(E)){E=E.reverse();for(let K=0,H=P.length;K<H;K++){const $=P[K];Zn.isClockWise($)&&(P[K]=$.reverse())}}function O(K){const $=10000000000000001e-36;let J=K[0];for(let at=1;at<=K.length;at++){const nt=at%K.length,rt=K[nt],Ut=rt.x-J.x,Rt=rt.y-J.y,w=Ut*Ut+Rt*Rt,x=Math.max(Math.abs(rt.x),Math.abs(rt.y),Math.abs(J.x),Math.abs(J.y)),z=$*x*x;if(w<=z){K.splice(nt,1),at--;continue}J=rt}}O(E),P.forEach(O);const G=P.length,L=E;for(let K=0;K<G;K++){const H=P[K];E=E.concat(H)}function B(K,H,$){return H||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(H,$)}const et=E.length;function U(K,H,$){let J,at,nt;const rt=K.x-H.x,Ut=K.y-H.y,Rt=$.x-K.x,w=$.y-K.y,x=rt*rt+Ut*Ut,z=rt*w-Ut*Rt;if(Math.abs(z)>Number.EPSILON){const Y=Math.sqrt(x),ot=Math.sqrt(Rt*Rt+w*w),tt=H.x-Ut/Y,Pt=H.y+rt/Y,gt=$.x-w/ot,Ct=$.y+Rt/ot,yt=((gt-tt)*w-(Ct-Pt)*Rt)/(rt*w-Ut*Rt);J=tt+rt*yt-K.x,at=Pt+Ut*yt-K.y;const ct=J*J+at*at;if(ct<=2)return new ht(J,at);nt=Math.sqrt(ct/2)}else{let Y=!1;rt>Number.EPSILON?Rt>Number.EPSILON&&(Y=!0):rt<-Number.EPSILON?Rt<-Number.EPSILON&&(Y=!0):Math.sign(Ut)===Math.sign(w)&&(Y=!0),Y?(J=-Ut,at=rt,nt=Math.sqrt(x)):(J=rt,at=Ut,nt=Math.sqrt(x/2))}return new ht(J/nt,at/nt)}const V=[];for(let K=0,H=L.length,$=H-1,J=K+1;K<H;K++,$++,J++)$===H&&($=0),J===H&&(J=0),V[K]=U(L[K],L[$],L[J]);const it=[];let q,lt=V.concat();for(let K=0,H=G;K<H;K++){const $=P[K];q=[];for(let J=0,at=$.length,nt=at-1,rt=J+1;J<at;J++,nt++,rt++)nt===at&&(nt=0),rt===at&&(rt=0),q[J]=U($[J],$[nt],$[rt]);it.push(q),lt=lt.concat(q)}let _t;if(p===0)_t=Zn.triangulateShape(L,P);else{const K=[],H=[];for(let $=0;$<p;$++){const J=$/p,at=d*Math.cos(J*Math.PI/2),nt=_*Math.sin(J*Math.PI/2)+g;for(let rt=0,Ut=L.length;rt<Ut;rt++){const Rt=B(L[rt],V[rt],nt);ut(Rt.x,Rt.y,-at),J===0&&K.push(Rt)}for(let rt=0,Ut=G;rt<Ut;rt++){const Rt=P[rt];q=it[rt];const w=[];for(let x=0,z=Rt.length;x<z;x++){const Y=B(Rt[x],q[x],nt);ut(Y.x,Y.y,-at),J===0&&w.push(Y)}J===0&&H.push(w)}}_t=Zn.triangulateShape(K,H)}const Et=_t.length,xt=_+g;for(let K=0;K<et;K++){const H=f?B(E[K],lt[K],xt):E[K];v?(R.copy(A.normals[0]).multiplyScalar(H.x),T.copy(A.binormals[0]).multiplyScalar(H.y),D.copy(y[0]).add(R).add(T),ut(D.x,D.y,D.z)):ut(H.x,H.y,0)}for(let K=1;K<=h;K++)for(let H=0;H<et;H++){const $=f?B(E[H],lt[H],xt):E[H];v?(R.copy(A.normals[K]).multiplyScalar($.x),T.copy(A.binormals[K]).multiplyScalar($.y),D.copy(y[K]).add(R).add(T),ut(D.x,D.y,D.z)):ut($.x,$.y,u/h*K)}for(let K=p-1;K>=0;K--){const H=K/p,$=d*Math.cos(H*Math.PI/2),J=_*Math.sin(H*Math.PI/2)+g;for(let at=0,nt=L.length;at<nt;at++){const rt=B(L[at],V[at],J);ut(rt.x,rt.y,u+$)}for(let at=0,nt=P.length;at<nt;at++){const rt=P[at];q=it[at];for(let Ut=0,Rt=rt.length;Ut<Rt;Ut++){const w=B(rt[Ut],q[Ut],J);v?ut(w.x,w.y+y[h-1].y,y[h-1].x+$):ut(w.x,w.y,u+$)}}}X(),Z();function X(){const K=r.length/3;if(f){let H=0,$=et*H;for(let J=0;J<Et;J++){const at=_t[J];mt(at[2]+$,at[1]+$,at[0]+$)}H=h+p*2,$=et*H;for(let J=0;J<Et;J++){const at=_t[J];mt(at[0]+$,at[1]+$,at[2]+$)}}else{for(let H=0;H<Et;H++){const $=_t[H];mt($[2],$[1],$[0])}for(let H=0;H<Et;H++){const $=_t[H];mt($[0]+et*h,$[1]+et*h,$[2]+et*h)}}n.addGroup(K,r.length/3-K,0)}function Z(){const K=r.length/3;let H=0;vt(L,H),H+=L.length;for(let $=0,J=P.length;$<J;$++){const at=P[$];vt(at,H),H+=at.length}n.addGroup(K,r.length/3-K,1)}function vt(K,H){let $=K.length;for(;--$>=0;){const J=$;let at=$-1;at<0&&(at=K.length-1);for(let nt=0,rt=h+p*2;nt<rt;nt++){const Ut=et*nt,Rt=et*(nt+1),w=H+J+Ut,x=H+at+Ut,z=H+at+Rt,Y=H+J+Rt;It(w,x,z,Y)}}}function ut(K,H,$){l.push(K),l.push(H),l.push($)}function mt(K,H,$){wt(K),wt(H),wt($);const J=r.length/3,at=S.generateTopUV(n,r,J-3,J-2,J-1);C(at[0]),C(at[1]),C(at[2])}function It(K,H,$,J){wt(K),wt(H),wt(J),wt(H),wt($),wt(J);const at=r.length/3,nt=S.generateSideWallUV(n,r,at-6,at-3,at-2,at-1);C(nt[0]),C(nt[1]),C(nt[3]),C(nt[1]),C(nt[2]),C(nt[3])}function wt(K){r.push(l[K*3+0]),r.push(l[K*3+1]),r.push(l[K*3+2])}function C(K){s.push(K.x),s.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return u_(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Yl[r.type]().fromJSON(r)),new zo(n,t.options)}}const h_={generateTopUV:function(i,t,e,n,r){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[r*3],h=t[r*3+1];return[new ht(s,o),new ht(a,l),new ht(c,h)]},generateSideWallUV:function(i,t,e,n,r,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[r*3],d=t[r*3+1],_=t[r*3+2],g=t[s*3],p=t[s*3+1],m=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ht(o,1-l),new ht(c,1-u),new ht(f,1-_),new ht(g,1-m)]:[new ht(a,1-l),new ht(h,1-u),new ht(d,1-_),new ht(p,1-m)]}};function u_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ui extends Ae{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=t/a,f=e/l,d=[],_=[],g=[],p=[];for(let m=0;m<h;m++){const S=m*f-o;for(let y=0;y<c;y++){const v=y*u-s;_.push(v,-S,0),g.push(0,0,1),p.push(y/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const y=S+c*m,v=S+c*(m+1),A=S+1+c*(m+1),T=S+1+c*m;d.push(y,v,T),d.push(v,A,T)}this.setIndex(d),this.setAttribute("position",new me(_,3)),this.setAttribute("normal",new me(g,3)),this.setAttribute("uv",new me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.width,t.height,t.widthSegments,t.heightSegments)}}class Nc extends Ae{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],l=[],c=[],h=[];let u=t;const f=(e-t)/r,d=new I,_=new ht;for(let g=0;g<=r;g++){for(let p=0;p<=n;p++){const m=s+p/n*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),_.x=(d.x/e+1)/2,_.y=(d.y/e+1)/2,h.push(_.x,_.y)}u+=f}for(let g=0;g<r;g++){const p=g*(n+1);for(let m=0;m<n;m++){const S=m+p,y=S,v=S+n+1,A=S+n+2,T=S+1;a.push(y,v,T),a.push(v,A,T)}}this.setIndex(a),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Fc extends Ae{constructor(t=new Bo([new ht(0,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new me(r,3)),this.setAttribute("normal",new me(s,3)),this.setAttribute("uv",new me(o,2));function c(h){const u=r.length/3,f=h.extractPoints(e);let d=f.shape;const _=f.holes;Zn.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=_.length;p<m;p++){const S=_[p];Zn.isClockWise(S)===!0&&(_[p]=S.reverse())}const g=Zn.triangulateShape(d,_);for(let p=0,m=_.length;p<m;p++){const S=_[p];d=d.concat(S)}for(let p=0,m=d.length;p<m;p++){const S=d[p];r.push(S.x,S.y,0),s.push(0,0,1),o.push(S.x,S.y)}for(let p=0,m=g.length;p<m;p++){const S=g[p],y=S[0]+u,v=S[1]+u,A=S[2]+u;n.push(y,v,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return f_(e,t)}static fromJSON(t,e){const n=[];for(let r=0,s=t.shapes.length;r<s;r++){const o=e[t.shapes[r]];n.push(o)}return new Fc(n,t.curveSegments)}}function f_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const r=i[e];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t}class Na extends vi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pf,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class d_ extends vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class p_ extends vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Fa={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class m_{constructor(t,e,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],_=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const __=new m_;class Oc{constructor(t){this.manager=t!==void 0?t:__,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Oc.DEFAULT_MATERIAL_NAME="__DEFAULT";const cr=new WeakMap;class g_ extends Oc{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Fa.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let u=cr.get(o);u===void 0&&(u=[],cr.set(o,u)),u.push({onLoad:e,onError:r})}return o}const a=ps("img");function l(){h(),e&&e(this);const u=cr.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}cr.delete(this),s.manager.itemEnd(t)}function c(u){h(),r&&r(u),Fa.remove(`image:${t}`);const f=cr.get(this)||[];for(let d=0;d<f.length;d++){const _=f[d];_.onError&&_.onError(u)}cr.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Fa.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}}class Kh extends Oc{constructor(t){super(t)}load(t,e,n,r){const s=new ze,o=new g_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class Of extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Oa=new de,jh=new I,Jh=new I;class v_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lc,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;jh.setFromMatrixPosition(t.matrixWorld),e.position.copy(jh),Jh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jh),e.updateMatrixWorld(),Oa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oa,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Bf extends Sf{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class x_ extends v_{constructor(){super(new Bf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class y_ extends Of{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new x_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class M_ extends Of{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class S_ extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Qh=new de;class E_{constructor(t,e,n=0,r=1/0){this.ray=new Cs(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Pc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Qh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qh),this}intersectObject(t,e=!0,n=[]){return Zl(t,this,n,e),n.sort(tu),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Zl(t[r],this,n,e);return n.sort(tu),n}}function tu(i,t){return i.distance-t.distance}function Zl(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)Zl(s[o],t,e,!0)}}class eu{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(qt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class b_ extends Gl{constructor(t=10,e=10,n=4473924,r=8947848){n=new Gt(n),r=new Gt(r);const s=e/2,o=t/e,a=t/2,l=[],c=[];for(let f=0,d=0,_=-a;f<=e;f++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const g=f===s?n:r;g.toArray(c,d),d+=3,g.toArray(c,d),d+=3,g.toArray(c,d),d+=3,g.toArray(c,d),d+=3}const h=new Ae;h.setAttribute("position",new me(l,3)),h.setAttribute("color",new me(c,3));const u=new ns({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class T_ extends Gi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function nu(i,t,e,n){const r=A_(n);switch(e){case hf:return i*t;case ff:return i*t/r.components*r.byteLength;case Tc:return i*t/r.components*r.byteLength;case df:return i*t*2/r.components*r.byteLength;case Ac:return i*t*2/r.components*r.byteLength;case uf:return i*t*3/r.components*r.byteLength;case An:return i*t*4/r.components*r.byteLength;case wc:return i*t*4/r.components*r.byteLength;case yo:case Mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case So:case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ml:case gl:return Math.max(i,16)*Math.max(t,8)/4;case pl:case _l:return Math.max(i,8)*Math.max(t,8)/2;case vl:case xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case El:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case bl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Al:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case wl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Il:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ul:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Nl:case Fl:case Ol:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Bl:case zl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case kl:case Hl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function A_(i){switch(i){case Nn:case of:return{byteLength:1,components:1};case cs:case af:case Ts:return{byteLength:2,components:1};case Ec:case bc:return{byteLength:2,components:4};case Bi:case Sc:case qn:return{byteLength:4,components:1};case lf:case cf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zf(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function w_(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<u.length;d++){const _=u[f],g=u[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,u[f]=g)}u.length=f+1;for(let d=0,_=u.length;d<_;d++){const g=u[d];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var C_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,R_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,P_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,I_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,N_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,F_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,O_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,B_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,H_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,V_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,G_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,W_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,q_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Z_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,K_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,j_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,J_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Q_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ng=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ig=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rg="gl_FragColor = linearToOutputTexel( gl_FragColor );",sg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,og=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ag=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ug=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_g=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Mg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ag=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ig=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ug=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ng=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Og=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,i0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,u0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,f0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,d0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,m0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,g0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,M0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,S0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,A0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const w0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,U0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,N0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,F0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,V0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Y0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,q0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Z0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,J0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ev=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ov=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$t={alphahash_fragment:C_,alphahash_pars_fragment:R_,alphamap_fragment:P_,alphamap_pars_fragment:D_,alphatest_fragment:L_,alphatest_pars_fragment:I_,aomap_fragment:U_,aomap_pars_fragment:N_,batching_pars_vertex:F_,batching_vertex:O_,begin_vertex:B_,beginnormal_vertex:z_,bsdfs:k_,iridescence_fragment:H_,bumpmap_pars_fragment:V_,clipping_planes_fragment:G_,clipping_planes_pars_fragment:W_,clipping_planes_pars_vertex:X_,clipping_planes_vertex:Y_,color_fragment:$_,color_pars_fragment:q_,color_pars_vertex:Z_,color_vertex:K_,common:j_,cube_uv_reflection_fragment:J_,defaultnormal_vertex:Q_,displacementmap_pars_vertex:tg,displacementmap_vertex:eg,emissivemap_fragment:ng,emissivemap_pars_fragment:ig,colorspace_fragment:rg,colorspace_pars_fragment:sg,envmap_fragment:og,envmap_common_pars_fragment:ag,envmap_pars_fragment:lg,envmap_pars_vertex:cg,envmap_physical_pars_fragment:yg,envmap_vertex:hg,fog_vertex:ug,fog_pars_vertex:fg,fog_fragment:dg,fog_pars_fragment:pg,gradientmap_pars_fragment:mg,lightmap_pars_fragment:_g,lights_lambert_fragment:gg,lights_lambert_pars_fragment:vg,lights_pars_begin:xg,lights_toon_fragment:Mg,lights_toon_pars_fragment:Sg,lights_phong_fragment:Eg,lights_phong_pars_fragment:bg,lights_physical_fragment:Tg,lights_physical_pars_fragment:Ag,lights_fragment_begin:wg,lights_fragment_maps:Cg,lights_fragment_end:Rg,logdepthbuf_fragment:Pg,logdepthbuf_pars_fragment:Dg,logdepthbuf_pars_vertex:Lg,logdepthbuf_vertex:Ig,map_fragment:Ug,map_pars_fragment:Ng,map_particle_fragment:Fg,map_particle_pars_fragment:Og,metalnessmap_fragment:Bg,metalnessmap_pars_fragment:zg,morphinstance_vertex:kg,morphcolor_vertex:Hg,morphnormal_vertex:Vg,morphtarget_pars_vertex:Gg,morphtarget_vertex:Wg,normal_fragment_begin:Xg,normal_fragment_maps:Yg,normal_pars_fragment:$g,normal_pars_vertex:qg,normal_vertex:Zg,normalmap_pars_fragment:Kg,clearcoat_normal_fragment_begin:jg,clearcoat_normal_fragment_maps:Jg,clearcoat_pars_fragment:Qg,iridescence_pars_fragment:t0,opaque_fragment:e0,packing:n0,premultiplied_alpha_fragment:i0,project_vertex:r0,dithering_fragment:s0,dithering_pars_fragment:o0,roughnessmap_fragment:a0,roughnessmap_pars_fragment:l0,shadowmap_pars_fragment:c0,shadowmap_pars_vertex:h0,shadowmap_vertex:u0,shadowmask_pars_fragment:f0,skinbase_vertex:d0,skinning_pars_vertex:p0,skinning_vertex:m0,skinnormal_vertex:_0,specularmap_fragment:g0,specularmap_pars_fragment:v0,tonemapping_fragment:x0,tonemapping_pars_fragment:y0,transmission_fragment:M0,transmission_pars_fragment:S0,uv_pars_fragment:E0,uv_pars_vertex:b0,uv_vertex:T0,worldpos_vertex:A0,background_vert:w0,background_frag:C0,backgroundCube_vert:R0,backgroundCube_frag:P0,cube_vert:D0,cube_frag:L0,depth_vert:I0,depth_frag:U0,distanceRGBA_vert:N0,distanceRGBA_frag:F0,equirect_vert:O0,equirect_frag:B0,linedashed_vert:z0,linedashed_frag:k0,meshbasic_vert:H0,meshbasic_frag:V0,meshlambert_vert:G0,meshlambert_frag:W0,meshmatcap_vert:X0,meshmatcap_frag:Y0,meshnormal_vert:$0,meshnormal_frag:q0,meshphong_vert:Z0,meshphong_frag:K0,meshphysical_vert:j0,meshphysical_frag:J0,meshtoon_vert:Q0,meshtoon_frag:tv,points_vert:ev,points_frag:nv,shadow_vert:iv,shadow_frag:rv,sprite_vert:sv,sprite_frag:ov},bt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Pn={basic:{uniforms:We([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:We([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:We([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:We([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:We([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:We([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:We([bt.points,bt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:We([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:We([bt.common,bt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:We([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:We([bt.sprite,bt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:We([bt.common,bt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:We([bt.lights,bt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Pn.physical={uniforms:We([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const ho={r:0,b:0,g:0},Ai=new Fn,av=new de;function lv(i,t,e,n,r,s,o){const a=new Gt(0);let l=s===!0?0:1,c,h,u=null,f=0,d=null;function _(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function g(y){let v=!1;const A=_(y);A===null?m(a,l):A&&A.isColor&&(m(A,1),v=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(y,v){const A=_(v);A&&(A.isCubeTexture||A.mapping===Ko)?(h===void 0&&(h=new Ue(new Rs(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:Er(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ai.copy(v.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(av.makeRotationFromEuler(Ai)),h.material.toneMapped=Qt.getTransfer(A.colorSpace)!==re,(u!==A||f!==A.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,d=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Ue(new Ui(2,2),new jn({name:"BackgroundMaterial",uniforms:Er(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(A.colorSpace)!==re,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,f=A.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,v){y.getRGB(ho,Mf(i)),n.buffers.color.setClear(ho.r,ho.g,ho.b,v,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:g,addToRenderList:p,dispose:S}}function cv(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(E,P,F,O,G){let L=!1;const B=u(O,F,P);s!==B&&(s=B,c(s.object)),L=d(E,O,F,G),L&&_(E,O,F,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(L||o)&&(o=!1,v(E,P,F,O),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function u(E,P,F){const O=F.wireframe===!0;let G=n[E.id];G===void 0&&(G={},n[E.id]=G);let L=G[P.id];L===void 0&&(L={},G[P.id]=L);let B=L[O];return B===void 0&&(B=f(l()),L[O]=B),B}function f(E){const P=[],F=[],O=[];for(let G=0;G<e;G++)P[G]=0,F[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:O,object:E,attributes:{},index:null}}function d(E,P,F,O){const G=s.attributes,L=P.attributes;let B=0;const et=F.getAttributes();for(const U in et)if(et[U].location>=0){const it=G[U];let q=L[U];if(q===void 0&&(U==="instanceMatrix"&&E.instanceMatrix&&(q=E.instanceMatrix),U==="instanceColor"&&E.instanceColor&&(q=E.instanceColor)),it===void 0||it.attribute!==q||q&&it.data!==q.data)return!0;B++}return s.attributesNum!==B||s.index!==O}function _(E,P,F,O){const G={},L=P.attributes;let B=0;const et=F.getAttributes();for(const U in et)if(et[U].location>=0){let it=L[U];it===void 0&&(U==="instanceMatrix"&&E.instanceMatrix&&(it=E.instanceMatrix),U==="instanceColor"&&E.instanceColor&&(it=E.instanceColor));const q={};q.attribute=it,it&&it.data&&(q.data=it.data),G[U]=q,B++}s.attributes=G,s.attributesNum=B,s.index=O}function g(){const E=s.newAttributes;for(let P=0,F=E.length;P<F;P++)E[P]=0}function p(E){m(E,0)}function m(E,P){const F=s.newAttributes,O=s.enabledAttributes,G=s.attributeDivisors;F[E]=1,O[E]===0&&(i.enableVertexAttribArray(E),O[E]=1),G[E]!==P&&(i.vertexAttribDivisor(E,P),G[E]=P)}function S(){const E=s.newAttributes,P=s.enabledAttributes;for(let F=0,O=P.length;F<O;F++)P[F]!==E[F]&&(i.disableVertexAttribArray(F),P[F]=0)}function y(E,P,F,O,G,L,B){B===!0?i.vertexAttribIPointer(E,P,F,G,L):i.vertexAttribPointer(E,P,F,O,G,L)}function v(E,P,F,O){g();const G=O.attributes,L=F.getAttributes(),B=P.defaultAttributeValues;for(const et in L){const U=L[et];if(U.location>=0){let V=G[et];if(V===void 0&&(et==="instanceMatrix"&&E.instanceMatrix&&(V=E.instanceMatrix),et==="instanceColor"&&E.instanceColor&&(V=E.instanceColor)),V!==void 0){const it=V.normalized,q=V.itemSize,lt=t.get(V);if(lt===void 0)continue;const _t=lt.buffer,Et=lt.type,xt=lt.bytesPerElement,X=Et===i.INT||Et===i.UNSIGNED_INT||V.gpuType===Sc;if(V.isInterleavedBufferAttribute){const Z=V.data,vt=Z.stride,ut=V.offset;if(Z.isInstancedInterleavedBuffer){for(let mt=0;mt<U.locationSize;mt++)m(U.location+mt,Z.meshPerAttribute);E.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let mt=0;mt<U.locationSize;mt++)p(U.location+mt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let mt=0;mt<U.locationSize;mt++)y(U.location+mt,q/U.locationSize,Et,it,vt*xt,(ut+q/U.locationSize*mt)*xt,X)}else{if(V.isInstancedBufferAttribute){for(let Z=0;Z<U.locationSize;Z++)m(U.location+Z,V.meshPerAttribute);E.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Z=0;Z<U.locationSize;Z++)p(U.location+Z);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let Z=0;Z<U.locationSize;Z++)y(U.location+Z,q/U.locationSize,Et,it,q*xt,q/U.locationSize*Z*xt,X)}}else if(B!==void 0){const it=B[et];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(U.location,it);break;case 3:i.vertexAttrib3fv(U.location,it);break;case 4:i.vertexAttrib4fv(U.location,it);break;default:i.vertexAttrib1fv(U.location,it)}}}}S()}function A(){D();for(const E in n){const P=n[E];for(const F in P){const O=P[F];for(const G in O)h(O[G].object),delete O[G];delete P[F]}delete n[E]}}function T(E){if(n[E.id]===void 0)return;const P=n[E.id];for(const F in P){const O=P[F];for(const G in O)h(O[G].object),delete O[G];delete P[F]}delete n[E.id]}function R(E){for(const P in n){const F=n[P];if(F[E.id]===void 0)continue;const O=F[E.id];for(const G in O)h(O[G].object),delete O[G];delete F[E.id]}}function D(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:p,disableUnusedAttributes:S}}function hv(i,t,e){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],h[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*f[g];e.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function uv(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==An&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const D=R===Ts&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Nn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==qn&&!D)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:A,maxSamples:T}}function fv(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new ai,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||r;return r=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const _=u.clippingPlanes,g=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!r||_===null||_.length===0||s&&!p)s?h(null):c();else{const S=s?0:n,y=S*4;let v=m.clippingState||null;l.value=v,v=h(_,f,y,d);for(let A=0;A!==y;++A)v[A]=e[A];m.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,_){const g=u!==null?u.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,v=d;y!==g;++y,v+=4)o.copy(u[y]).applyMatrix4(S,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function dv(i){let t=new WeakMap;function e(o,a){return a===ul?o.mapping=yr:a===fl&&(o.mapping=Mr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ul||a===fl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Am(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const dr=4,iu=[.125,.215,.35,.446,.526,.582],Pi=20,Ba=new Bf,ru=new Gt;let za=null,ka=0,Ha=0,Va=!1;const Ci=(1+Math.sqrt(5))/2,hr=1/Ci,su=[new I(-Ci,hr,0),new I(Ci,hr,0),new I(-hr,0,Ci),new I(hr,0,Ci),new I(0,Ci,-hr),new I(0,Ci,hr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],pv=new I;class ou{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){const{size:o=256,position:a=pv}=s;za=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(za,ka,Ha),this._renderer.xr.enabled=Va,t.scissorTest=!1,uo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===yr||t.mapping===Mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),za=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:Ts,format:An,colorSpace:Sr,depthBuffer:!1},r=au(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=au(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mv(s)),this._blurMaterial=_v(s,t,e)}return r}_compileMaterial(t){const e=new Ue(this._lodPlanes[0],t);this._renderer.compile(e,Ba)}_sceneToCubeUV(t,e,n,r,s){const l=new _n(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(ru),u.toneMapping=fi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const g=new oi({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),p=new Ue(new Rs,g);let m=!1;const S=t.background;S?S.isColor&&(g.color.copy(S),t.background=null,m=!0):(g.color.copy(ru),m=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));const A=this._cubeSize;uo(r,v*A,y>2?A:0,A,A),u.setRenderTarget(r),m&&u.render(p,l),u.render(t,l)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===yr||t.mapping===Mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ue(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;uo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ba)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=su[(r-s-1)%su.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ue(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Pi-1),g=s/_,p=isFinite(s)?1+Math.floor(h*g):Pi;p>Pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Pi}`);const m=[];let S=0;for(let R=0;R<Pi;++R){const D=R/g,M=Math.exp(-D*D/2);m.push(M),R===0?S+=M:R<p&&(S+=2*M)}for(let R=0;R<m.length;R++)m[R]=m[R]/S;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-n;const v=this._sizeLods[r],A=3*v*(r>y-dr?r-y+dr:0),T=4*(this._cubeSize-v);uo(e,A,T,3*v,2*v),l.setRenderTarget(e),l.render(u,Ba)}}function mv(i){const t=[],e=[],n=[];let r=i;const s=i-dr+1+iu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-dr?l=iu[o-i+dr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,_=6,g=3,p=2,m=1,S=new Float32Array(g*_*d),y=new Float32Array(p*_*d),v=new Float32Array(m*_*d);for(let T=0;T<d;T++){const R=T%3*2/3-1,D=T>2?0:-1,M=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];S.set(M,g*_*T),y.set(f,p*_*T);const E=[T,T,T,T,T,T];v.set(E,m*_*T)}const A=new Ae;A.setAttribute("position",new Ye(S,g)),A.setAttribute("uv",new Ye(y,p)),A.setAttribute("faceIndex",new Ye(v,m)),t.push(A),r>dr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function au(i,t,e){const n=new ki(i,t,e);return n.texture.mapping=Ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function uo(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function _v(i,t,e){const n=new Float32Array(Pi),r=new I(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function lu(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function cu(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Bc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gv(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ul||l===fl,h=l===yr||l===Mr;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new ou(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&r(d)?(e===null&&(e=new ou(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function vv(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&ms("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function xv(i,t,e,n){const r={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,_=u.attributes.position;let g=0;if(d!==null){const S=d.array;g=d.version;for(let y=0,v=S.length;y<v;y+=3){const A=S[y+0],T=S[y+1],R=S[y+2];f.push(A,T,T,R,R,A)}}else if(_!==void 0){const S=_.array;g=_.version;for(let y=0,v=S.length/3-1;y<v;y+=3){const A=y+0,T=y+1,R=y+2;f.push(A,T,T,R,R,A)}}else return;const p=new(_f(f)?yf:xf)(f,1);p.version=g;const m=s.get(u);m&&t.remove(m),s.set(u,p)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function yv(i,t,e){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,s,f*o),e.update(d,n,1)}function c(f,d,_){_!==0&&(i.drawElementsInstanced(n,d,s,f*o,_),e.update(d,n,_))}function h(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];e.update(p,n,1)}function u(f,d,_,g){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,g,0,_);let m=0;for(let S=0;S<_;S++)m+=d[S]*g[S];e.update(m,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Mv(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Sv(i,t,e){const n=new WeakMap,r=new be;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let M=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let y=0;d===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let v=a.attributes.position.count*y,A=1;v>t.maxTextureSize&&(A=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const T=new Float32Array(v*A*4*u),R=new gf(T,v,A,u);R.type=qn,R.needsUpdate=!0;const D=y*4;for(let E=0;E<u;E++){const P=p[E],F=m[E],O=S[E],G=v*A*4*E;for(let L=0;L<P.count;L++){const B=L*D;d===!0&&(r.fromBufferAttribute(P,L),T[G+B+0]=r.x,T[G+B+1]=r.y,T[G+B+2]=r.z,T[G+B+3]=0),_===!0&&(r.fromBufferAttribute(F,L),T[G+B+4]=r.x,T[G+B+5]=r.y,T[G+B+6]=r.z,T[G+B+7]=0),g===!0&&(r.fromBufferAttribute(O,L),T[G+B+8]=r.x,T[G+B+9]=r.y,T[G+B+10]=r.z,T[G+B+11]=O.itemSize===4?r.w:1)}}f={count:u,texture:R,size:new ht(v,A)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];const _=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Ev(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const kf=new ze,hu=new Af(1,1),Hf=new gf,Vf=new cm,Gf=new Ef,uu=[],fu=[],du=new Float32Array(16),pu=new Float32Array(9),mu=new Float32Array(4);function Nr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=uu[r];if(s===void 0&&(s=new Float32Array(r),uu[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function jo(i,t){let e=fu[t];e===void 0&&(e=new Int32Array(t),fu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function bv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Tv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Le(e,t)}}function Av(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Le(e,t)}}function wv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Le(e,t)}}function Cv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(De(e,n))return;mu.set(n),i.uniformMatrix2fv(this.addr,!1,mu),Le(e,n)}}function Rv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(De(e,n))return;pu.set(n),i.uniformMatrix3fv(this.addr,!1,pu),Le(e,n)}}function Pv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(De(e,n))return;du.set(n),i.uniformMatrix4fv(this.addr,!1,du),Le(e,n)}}function Dv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Lv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Le(e,t)}}function Iv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Le(e,t)}}function Uv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Le(e,t)}}function Nv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Fv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Le(e,t)}}function Ov(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Le(e,t)}}function Bv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Le(e,t)}}function zv(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(hu.compareFunction=mf,s=hu):s=kf,e.setTexture2D(t||s,r)}function kv(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Vf,r)}function Hv(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Gf,r)}function Vv(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Hf,r)}function Gv(i){switch(i){case 5126:return bv;case 35664:return Tv;case 35665:return Av;case 35666:return wv;case 35674:return Cv;case 35675:return Rv;case 35676:return Pv;case 5124:case 35670:return Dv;case 35667:case 35671:return Lv;case 35668:case 35672:return Iv;case 35669:case 35673:return Uv;case 5125:return Nv;case 36294:return Fv;case 36295:return Ov;case 36296:return Bv;case 35678:case 36198:case 36298:case 36306:case 35682:return zv;case 35679:case 36299:case 36307:return kv;case 35680:case 36300:case 36308:case 36293:return Hv;case 36289:case 36303:case 36311:case 36292:return Vv}}function Wv(i,t){i.uniform1fv(this.addr,t)}function Xv(i,t){const e=Nr(t,this.size,2);i.uniform2fv(this.addr,e)}function Yv(i,t){const e=Nr(t,this.size,3);i.uniform3fv(this.addr,e)}function $v(i,t){const e=Nr(t,this.size,4);i.uniform4fv(this.addr,e)}function qv(i,t){const e=Nr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Zv(i,t){const e=Nr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Kv(i,t){const e=Nr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function jv(i,t){i.uniform1iv(this.addr,t)}function Jv(i,t){i.uniform2iv(this.addr,t)}function Qv(i,t){i.uniform3iv(this.addr,t)}function tx(i,t){i.uniform4iv(this.addr,t)}function ex(i,t){i.uniform1uiv(this.addr,t)}function nx(i,t){i.uniform2uiv(this.addr,t)}function ix(i,t){i.uniform3uiv(this.addr,t)}function rx(i,t){i.uniform4uiv(this.addr,t)}function sx(i,t,e){const n=this.cache,r=t.length,s=jo(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Le(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||kf,s[o])}function ox(i,t,e){const n=this.cache,r=t.length,s=jo(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Le(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Vf,s[o])}function ax(i,t,e){const n=this.cache,r=t.length,s=jo(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Le(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Gf,s[o])}function lx(i,t,e){const n=this.cache,r=t.length,s=jo(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Le(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Hf,s[o])}function cx(i){switch(i){case 5126:return Wv;case 35664:return Xv;case 35665:return Yv;case 35666:return $v;case 35674:return qv;case 35675:return Zv;case 35676:return Kv;case 5124:case 35670:return jv;case 35667:case 35671:return Jv;case 35668:case 35672:return Qv;case 35669:case 35673:return tx;case 5125:return ex;case 36294:return nx;case 36295:return ix;case 36296:return rx;case 35678:case 36198:case 36298:case 36306:case 35682:return sx;case 35679:case 36299:case 36307:return ox;case 35680:case 36300:case 36308:case 36293:return ax;case 36289:case 36303:case 36311:case 36292:return lx}}class hx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Gv(e.type)}}class ux{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cx(e.type)}}class fx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function _u(i,t){i.seq.push(t),i.map[t.id]=t}function dx(i,t,e){const n=i.name,r=n.length;for(Ga.lastIndex=0;;){const s=Ga.exec(n),o=Ga.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){_u(e,c===void 0?new hx(a,i,t):new ux(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new fx(a),_u(e,u)),e=u}}}class To{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);dx(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function gu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const px=37297;let mx=0;function _x(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const vu=new Yt;function gx(i){Qt._getMatrix(vu,Qt.workingColorSpace,i);const t=`mat3( ${vu.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case Lo:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function xu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+_x(i.getShaderSource(t),a)}else return s}function vx(i,t){const e=gx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function xx(i,t){let e;switch(t){case Mp:e="Linear";break;case Sp:e="Reinhard";break;case Ep:e="Cineon";break;case bp:e="ACESFilmic";break;case Ap:e="AgX";break;case wp:e="Neutral";break;case Tp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fo=new I;function yx(){Qt.getLuminanceCoefficients(fo);const i=fo.x.toFixed(4),t=fo.y.toFixed(4),e=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function Sx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ex(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Kr(i){return i!==""}function yu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kl(i){return i.replace(bx,Ax)}const Tx=new Map;function Ax(i,t){let e=$t[t];if(e===void 0){const n=Tx.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Kl(e)}const wx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Su(i){return i.replace(wx,Cx)}function Cx(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Eu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Rx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===tp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xn&&(t="SHADOWMAP_TYPE_VSM"),t}function Px(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case yr:case Mr:t="ENVMAP_TYPE_CUBE";break;case Ko:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Dx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Mr:t="ENVMAP_MODE_REFRACTION";break}return t}function Lx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Mc:t="ENVMAP_BLENDING_MULTIPLY";break;case xp:t="ENVMAP_BLENDING_MIX";break;case yp:t="ENVMAP_BLENDING_ADD";break}return t}function Ix(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ux(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Rx(e),c=Px(e),h=Dx(e),u=Lx(e),f=Ix(e),d=Mx(e),_=Sx(s),g=r.createProgram();let p,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Kr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Kr).join(`
`),m.length>0&&(m+=`
`)):(p=[Eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),m=[Eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?$t.tonemapping_pars_fragment:"",e.toneMapping!==fi?xx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,vx("linearToOutputTexel",e.outputColorSpace),yx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Kr).join(`
`)),o=Kl(o),o=yu(o,e),o=Mu(o,e),a=Kl(a),a=yu(a,e),a=Mu(a,e),o=Su(o),a=Su(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=S+p+o,v=S+m+a,A=gu(r,r.VERTEX_SHADER,y),T=gu(r,r.FRAGMENT_SHADER,v);r.attachShader(g,A),r.attachShader(g,T),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function R(P){if(i.debug.checkShaderErrors){const F=r.getProgramInfoLog(g)||"",O=r.getShaderInfoLog(A)||"",G=r.getShaderInfoLog(T)||"",L=F.trim(),B=O.trim(),et=G.trim();let U=!0,V=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,A,T);else{const it=xu(r,A,"vertex"),q=xu(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+it+`
`+q)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(B===""||et==="")&&(V=!1);V&&(P.diagnostics={runnable:U,programLog:L,vertexShader:{log:B,prefix:p},fragmentShader:{log:et,prefix:m}})}r.deleteShader(A),r.deleteShader(T),D=new To(r,g),M=Ex(r,g)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(g,px)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mx++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=T,this}let Nx=0;class Fx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ox(t),e.set(t,n)),n}}class Ox{constructor(t){this.id=Nx++,this.code=t,this.usedTimes=0}}function Bx(i,t,e,n,r,s,o){const a=new Pc,l=new Fx,c=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,E,P,F,O){const G=F.fog,L=O.geometry,B=M.isMeshStandardMaterial?F.environment:null,et=(M.isMeshStandardMaterial?e:t).get(M.envMap||B),U=et&&et.mapping===Ko?et.image.height:null,V=_[M.type];M.precision!==null&&(d=r.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const it=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,q=it!==void 0?it.length:0;let lt=0;L.morphAttributes.position!==void 0&&(lt=1),L.morphAttributes.normal!==void 0&&(lt=2),L.morphAttributes.color!==void 0&&(lt=3);let _t,Et,xt,X;if(V){const ee=Pn[V];_t=ee.vertexShader,Et=ee.fragmentShader}else _t=M.vertexShader,Et=M.fragmentShader,l.update(M),xt=l.getVertexShaderID(M),X=l.getFragmentShaderID(M);const Z=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),ut=O.isInstancedMesh===!0,mt=O.isBatchedMesh===!0,It=!!M.map,wt=!!M.matcap,C=!!et,K=!!M.aoMap,H=!!M.lightMap,$=!!M.bumpMap,J=!!M.normalMap,at=!!M.displacementMap,nt=!!M.emissiveMap,rt=!!M.metalnessMap,Ut=!!M.roughnessMap,Rt=M.anisotropy>0,w=M.clearcoat>0,x=M.dispersion>0,z=M.iridescence>0,Y=M.sheen>0,ot=M.transmission>0,tt=Rt&&!!M.anisotropyMap,Pt=w&&!!M.clearcoatMap,gt=w&&!!M.clearcoatNormalMap,Ct=w&&!!M.clearcoatRoughnessMap,yt=z&&!!M.iridescenceMap,ct=z&&!!M.iridescenceThicknessMap,Mt=Y&&!!M.sheenColorMap,kt=Y&&!!M.sheenRoughnessMap,Ot=!!M.specularMap,Tt=!!M.specularColorMap,Xt=!!M.specularIntensityMap,N=ot&&!!M.transmissionMap,pt=ot&&!!M.thicknessMap,St=!!M.gradientMap,Lt=!!M.alphaMap,ft=M.alphaTest>0,st=!!M.alphaHash,Ft=!!M.extensions;let Wt=fi;M.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Wt=i.toneMapping);const ue={shaderID:V,shaderType:M.type,shaderName:M.name,vertexShader:_t,fragmentShader:Et,defines:M.defines,customVertexShaderID:xt,customFragmentShaderID:X,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:mt,batchingColor:mt&&O._colorsTexture!==null,instancing:ut,instancingColor:ut&&O.instanceColor!==null,instancingMorph:ut&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Sr,alphaToCoverage:!!M.alphaToCoverage,map:It,matcap:wt,envMap:C,envMapMode:C&&et.mapping,envMapCubeUVHeight:U,aoMap:K,lightMap:H,bumpMap:$,normalMap:J,displacementMap:f&&at,emissiveMap:nt,normalMapObjectSpace:J&&M.normalMapType===Dp,normalMapTangentSpace:J&&M.normalMapType===pf,metalnessMap:rt,roughnessMap:Ut,anisotropy:Rt,anisotropyMap:tt,clearcoat:w,clearcoatMap:Pt,clearcoatNormalMap:gt,clearcoatRoughnessMap:Ct,dispersion:x,iridescence:z,iridescenceMap:yt,iridescenceThicknessMap:ct,sheen:Y,sheenColorMap:Mt,sheenRoughnessMap:kt,specularMap:Ot,specularColorMap:Tt,specularIntensityMap:Xt,transmission:ot,transmissionMap:N,thicknessMap:pt,gradientMap:St,opaque:M.transparent===!1&&M.blending===ui&&M.alphaToCoverage===!1,alphaMap:Lt,alphaTest:ft,alphaHash:st,combine:M.combine,mapUv:It&&g(M.map.channel),aoMapUv:K&&g(M.aoMap.channel),lightMapUv:H&&g(M.lightMap.channel),bumpMapUv:$&&g(M.bumpMap.channel),normalMapUv:J&&g(M.normalMap.channel),displacementMapUv:at&&g(M.displacementMap.channel),emissiveMapUv:nt&&g(M.emissiveMap.channel),metalnessMapUv:rt&&g(M.metalnessMap.channel),roughnessMapUv:Ut&&g(M.roughnessMap.channel),anisotropyMapUv:tt&&g(M.anisotropyMap.channel),clearcoatMapUv:Pt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:gt&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:kt&&g(M.sheenRoughnessMap.channel),specularMapUv:Ot&&g(M.specularMap.channel),specularColorMapUv:Tt&&g(M.specularColorMap.channel),specularIntensityMapUv:Xt&&g(M.specularIntensityMap.channel),transmissionMapUv:N&&g(M.transmissionMap.channel),thicknessMapUv:pt&&g(M.thicknessMap.channel),alphaMapUv:Lt&&g(M.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(J||Rt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!L.attributes.uv&&(It||Lt),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:vt,skinning:O.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:lt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:It&&M.map.isVideoTexture===!0&&Qt.getTransfer(M.map.colorSpace)===re,decodeVideoTextureEmissive:nt&&M.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(M.emissiveMap.colorSpace)===re,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ke,flipSided:M.side===Qe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ft&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&M.extensions.multiDraw===!0||mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ue.vertexUv1s=c.has(1),ue.vertexUv2s=c.has(2),ue.vertexUv3s=c.has(3),c.clear(),ue}function m(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)E.push(P),E.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(S(E,M),y(E,M),E.push(i.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function S(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function y(M,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const E=_[M.type];let P;if(E){const F=Pn[E];P=Sm.clone(F.uniforms)}else P=M.uniforms;return P}function A(M,E){let P;for(let F=0,O=h.length;F<O;F++){const G=h[F];if(G.cacheKey===E){P=G,++P.usedTimes;break}}return P===void 0&&(P=new Ux(i,E,M,s),h.push(P)),P}function T(M){if(--M.usedTimes===0){const E=h.indexOf(M);h[E]=h[h.length-1],h.pop(),M.destroy()}}function R(M){l.remove(M)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:A,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:D}}function zx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function kx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function bu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Tu(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(u,f,d,_,g,p){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},i[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=g,m.group=p),t++,m}function a(u,f,d,_,g,p){const m=o(u,f,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?r.push(m):e.push(m)}function l(u,f,d,_,g,p){const m=o(u,f,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?r.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||kx),n.length>1&&n.sort(f||bu),r.length>1&&r.sort(f||bu)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function Hx(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Tu,i.set(n,[o])):r>=s.length?(o=new Tu,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Vx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Gt};break;case"SpotLight":e={position:new I,direction:new I,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Gx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Wx=0;function Xx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Yx(i){const t=new Vx,e=Gx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const r=new I,s=new de,o=new de;function a(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,_=0,g=0,p=0,m=0,S=0,y=0,v=0,A=0,T=0,R=0;c.sort(Xx);for(let M=0,E=c.length;M<E;M++){const P=c[M],F=P.color,O=P.intensity,G=P.distance,L=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=F.r*O,u+=F.g*O,f+=F.b*O;else if(P.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(P.sh.coefficients[B],O);R++}else if(P.isDirectionalLight){const B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const et=P.shadow,U=e.get(P);U.shadowIntensity=et.intensity,U.shadowBias=et.bias,U.shadowNormalBias=et.normalBias,U.shadowRadius=et.radius,U.shadowMapSize=et.mapSize,n.directionalShadow[d]=U,n.directionalShadowMap[d]=L,n.directionalShadowMatrix[d]=P.shadow.matrix,S++}n.directional[d]=B,d++}else if(P.isSpotLight){const B=t.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(F).multiplyScalar(O),B.distance=G,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,n.spot[g]=B;const et=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,et.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[g]=et.matrix,P.castShadow){const U=e.get(P);U.shadowIntensity=et.intensity,U.shadowBias=et.bias,U.shadowNormalBias=et.normalBias,U.shadowRadius=et.radius,U.shadowMapSize=et.mapSize,n.spotShadow[g]=U,n.spotShadowMap[g]=L,v++}g++}else if(P.isRectAreaLight){const B=t.get(P);B.color.copy(F).multiplyScalar(O),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=B,p++}else if(P.isPointLight){const B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const et=P.shadow,U=e.get(P);U.shadowIntensity=et.intensity,U.shadowBias=et.bias,U.shadowNormalBias=et.normalBias,U.shadowRadius=et.radius,U.shadowMapSize=et.mapSize,U.shadowCameraNear=et.camera.near,U.shadowCameraFar=et.camera.far,n.pointShadow[_]=U,n.pointShadowMap[_]=L,n.pointShadowMatrix[_]=P.shadow.matrix,y++}n.point[_]=B,_++}else if(P.isHemisphereLight){const B=t.get(P);B.skyColor.copy(P.color).multiplyScalar(O),B.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[m]=B,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==d||D.pointLength!==_||D.spotLength!==g||D.rectAreaLength!==p||D.hemiLength!==m||D.numDirectionalShadows!==S||D.numPointShadows!==y||D.numSpotShadows!==v||D.numSpotMaps!==A||D.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,D.directionalLength=d,D.pointLength=_,D.spotLength=g,D.rectAreaLength=p,D.hemiLength=m,D.numDirectionalShadows=S,D.numPointShadows=y,D.numSpotShadows=v,D.numSpotMaps=A,D.numLightProbes=R,n.version=Wx++)}function l(c,h){let u=0,f=0,d=0,_=0,g=0;const p=h.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const y=c[m];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),u++}else if(y.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),d++}else if(y.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),o.identity(),s.copy(y.matrixWorld),s.premultiply(p),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Au(i){const t=new Yx(i),e=[],n=[];function r(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function $x(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Au(i),t.set(r,[a])):s>=o.length?(a=new Au(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const qx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Kx(i,t,e){let n=new Lc;const r=new ht,s=new ht,o=new be,a=new d_({depthPacking:Pp}),l=new p_,c={},h=e.maxTextureSize,u={[pi]:Qe,[Qe]:pi,[Ke]:Ke},f=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:qx,fragmentShader:Zx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Ae;_.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ue(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rf;let m=this.type;this.render=function(T,R,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const M=i.getRenderTarget(),E=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.state;F.setBlending(hi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=m!==Xn&&this.type===Xn,G=m===Xn&&this.type!==Xn;for(let L=0,B=T.length;L<B;L++){const et=T[L],U=et.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const V=U.getFrameExtents();if(r.multiply(V),s.copy(U.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/V.x),r.x=s.x*V.x,U.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/V.y),r.y=s.y*V.y,U.mapSize.y=s.y)),U.map===null||O===!0||G===!0){const q=this.type!==Xn?{minFilter:wn,magFilter:wn}:{};U.map!==null&&U.map.dispose(),U.map=new ki(r.x,r.y,q),U.map.texture.name=et.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();const it=U.getViewportCount();for(let q=0;q<it;q++){const lt=U.getViewport(q);o.set(s.x*lt.x,s.y*lt.y,s.x*lt.z,s.y*lt.w),F.viewport(o),U.updateMatrices(et,q),n=U.getFrustum(),v(R,D,U.camera,et,this.type)}U.isPointLightShadow!==!0&&this.type===Xn&&S(U,D),U.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(M,E,P)};function S(T,R){const D=t.update(g);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ki(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,D,f,g,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,D,d,g,null)}function y(T,R,D,M){let E=null;const P=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)E=P;else if(E=D.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=E.uuid,O=R.uuid;let G=c[F];G===void 0&&(G={},c[F]=G);let L=G[O];L===void 0&&(L=E.clone(),G[O]=L,R.addEventListener("dispose",A)),E=L}if(E.visible=R.visible,E.wireframe=R.wireframe,M===Xn?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:u[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const F=i.properties.get(E);F.light=D}return E}function v(T,R,D,M,E){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===Xn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);const O=t.update(T),G=T.material;if(Array.isArray(G)){const L=O.groups;for(let B=0,et=L.length;B<et;B++){const U=L[B],V=G[U.materialIndex];if(V&&V.visible){const it=y(T,V,M,E);T.onBeforeShadow(i,T,R,D,O,it,U),i.renderBufferDirect(D,null,O,it,T,U),T.onAfterShadow(i,T,R,D,O,it,U)}}}else if(G.visible){const L=y(T,G,M,E);T.onBeforeShadow(i,T,R,D,O,L,null),i.renderBufferDirect(D,null,O,L,T,null),T.onAfterShadow(i,T,R,D,O,L,null)}}const F=T.children;for(let O=0,G=F.length;O<G;O++)v(F[O],R,D,M,E)}function A(T){T.target.removeEventListener("dispose",A);for(const D in c){const M=c[D],E=T.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}const jx={[rl]:sl,[ol]:cl,[al]:hl,[xr]:ll,[sl]:rl,[cl]:ol,[hl]:al,[ll]:xr};function Jx(i,t){function e(){let N=!1;const pt=new be;let St=null;const Lt=new be(0,0,0,0);return{setMask:function(ft){St!==ft&&!N&&(i.colorMask(ft,ft,ft,ft),St=ft)},setLocked:function(ft){N=ft},setClear:function(ft,st,Ft,Wt,ue){ue===!0&&(ft*=Wt,st*=Wt,Ft*=Wt),pt.set(ft,st,Ft,Wt),Lt.equals(pt)===!1&&(i.clearColor(ft,st,Ft,Wt),Lt.copy(pt))},reset:function(){N=!1,St=null,Lt.set(-1,0,0,0)}}}function n(){let N=!1,pt=!1,St=null,Lt=null,ft=null;return{setReversed:function(st){if(pt!==st){const Ft=t.get("EXT_clip_control");st?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),pt=st;const Wt=ft;ft=null,this.setClear(Wt)}},getReversed:function(){return pt},setTest:function(st){st?Z(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(st){St!==st&&!N&&(i.depthMask(st),St=st)},setFunc:function(st){if(pt&&(st=jx[st]),Lt!==st){switch(st){case rl:i.depthFunc(i.NEVER);break;case sl:i.depthFunc(i.ALWAYS);break;case ol:i.depthFunc(i.LESS);break;case xr:i.depthFunc(i.LEQUAL);break;case al:i.depthFunc(i.EQUAL);break;case ll:i.depthFunc(i.GEQUAL);break;case cl:i.depthFunc(i.GREATER);break;case hl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Lt=st}},setLocked:function(st){N=st},setClear:function(st){ft!==st&&(pt&&(st=1-st),i.clearDepth(st),ft=st)},reset:function(){N=!1,St=null,Lt=null,ft=null,pt=!1}}}function r(){let N=!1,pt=null,St=null,Lt=null,ft=null,st=null,Ft=null,Wt=null,ue=null;return{setTest:function(ee){N||(ee?Z(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(ee){pt!==ee&&!N&&(i.stencilMask(ee),pt=ee)},setFunc:function(ee,zn,Cn){(St!==ee||Lt!==zn||ft!==Cn)&&(i.stencilFunc(ee,zn,Cn),St=ee,Lt=zn,ft=Cn)},setOp:function(ee,zn,Cn){(st!==ee||Ft!==zn||Wt!==Cn)&&(i.stencilOp(ee,zn,Cn),st=ee,Ft=zn,Wt=Cn)},setLocked:function(ee){N=ee},setClear:function(ee){ue!==ee&&(i.clearStencil(ee),ue=ee)},reset:function(){N=!1,pt=null,St=null,Lt=null,ft=null,st=null,Ft=null,Wt=null,ue=null}}}const s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],_=null,g=!1,p=null,m=null,S=null,y=null,v=null,A=null,T=null,R=new Gt(0,0,0),D=0,M=!1,E=null,P=null,F=null,O=null,G=null;const L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,et=0;const U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(U)[1]),B=et>=1):U.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),B=et>=2);let V=null,it={};const q=i.getParameter(i.SCISSOR_BOX),lt=i.getParameter(i.VIEWPORT),_t=new be().fromArray(q),Et=new be().fromArray(lt);function xt(N,pt,St,Lt){const ft=new Uint8Array(4),st=i.createTexture();i.bindTexture(N,st),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<St;Ft++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,Lt,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(pt+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return st}const X={};X[i.TEXTURE_2D]=xt(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=xt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=xt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=xt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(i.DEPTH_TEST),o.setFunc(xr),$(!1),J(dh),Z(i.CULL_FACE),K(hi);function Z(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function vt(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function ut(N,pt){return u[N]!==pt?(i.bindFramebuffer(N,pt),u[N]=pt,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pt),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function mt(N,pt){let St=d,Lt=!1;if(N){St=f.get(pt),St===void 0&&(St=[],f.set(pt,St));const ft=N.textures;if(St.length!==ft.length||St[0]!==i.COLOR_ATTACHMENT0){for(let st=0,Ft=ft.length;st<Ft;st++)St[st]=i.COLOR_ATTACHMENT0+st;St.length=ft.length,Lt=!0}}else St[0]!==i.BACK&&(St[0]=i.BACK,Lt=!0);Lt&&i.drawBuffers(St)}function It(N){return _!==N?(i.useProgram(N),_=N,!0):!1}const wt={[Ri]:i.FUNC_ADD,[np]:i.FUNC_SUBTRACT,[ip]:i.FUNC_REVERSE_SUBTRACT};wt[rp]=i.MIN,wt[sp]=i.MAX;const C={[op]:i.ZERO,[ap]:i.ONE,[lp]:i.SRC_COLOR,[nl]:i.SRC_ALPHA,[pp]:i.SRC_ALPHA_SATURATE,[fp]:i.DST_COLOR,[hp]:i.DST_ALPHA,[cp]:i.ONE_MINUS_SRC_COLOR,[il]:i.ONE_MINUS_SRC_ALPHA,[dp]:i.ONE_MINUS_DST_COLOR,[up]:i.ONE_MINUS_DST_ALPHA,[mp]:i.CONSTANT_COLOR,[_p]:i.ONE_MINUS_CONSTANT_COLOR,[gp]:i.CONSTANT_ALPHA,[vp]:i.ONE_MINUS_CONSTANT_ALPHA};function K(N,pt,St,Lt,ft,st,Ft,Wt,ue,ee){if(N===hi){g===!0&&(vt(i.BLEND),g=!1);return}if(g===!1&&(Z(i.BLEND),g=!0),N!==ep){if(N!==p||ee!==M){if((m!==Ri||v!==Ri)&&(i.blendEquation(i.FUNC_ADD),m=Ri,v=Ri),ee)switch(N){case ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yn:i.blendFunc(i.ONE,i.ONE);break;case ph:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ph:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,y=null,A=null,T=null,R.set(0,0,0),D=0,p=N,M=ee}return}ft=ft||pt,st=st||St,Ft=Ft||Lt,(pt!==m||ft!==v)&&(i.blendEquationSeparate(wt[pt],wt[ft]),m=pt,v=ft),(St!==S||Lt!==y||st!==A||Ft!==T)&&(i.blendFuncSeparate(C[St],C[Lt],C[st],C[Ft]),S=St,y=Lt,A=st,T=Ft),(Wt.equals(R)===!1||ue!==D)&&(i.blendColor(Wt.r,Wt.g,Wt.b,ue),R.copy(Wt),D=ue),p=N,M=!1}function H(N,pt){N.side===Ke?vt(i.CULL_FACE):Z(i.CULL_FACE);let St=N.side===Qe;pt&&(St=!St),$(St),N.blending===ui&&N.transparent===!1?K(hi):K(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const Lt=N.stencilWrite;a.setTest(Lt),Lt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),nt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function $(N){E!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),E=N)}function J(N){N!==Jd?(Z(i.CULL_FACE),N!==P&&(N===dh?i.cullFace(i.BACK):N===Qd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),P=N}function at(N){N!==F&&(B&&i.lineWidth(N),F=N)}function nt(N,pt,St){N?(Z(i.POLYGON_OFFSET_FILL),(O!==pt||G!==St)&&(i.polygonOffset(pt,St),O=pt,G=St)):vt(i.POLYGON_OFFSET_FILL)}function rt(N){N?Z(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function Ut(N){N===void 0&&(N=i.TEXTURE0+L-1),V!==N&&(i.activeTexture(N),V=N)}function Rt(N,pt,St){St===void 0&&(V===null?St=i.TEXTURE0+L-1:St=V);let Lt=it[St];Lt===void 0&&(Lt={type:void 0,texture:void 0},it[St]=Lt),(Lt.type!==N||Lt.texture!==pt)&&(V!==St&&(i.activeTexture(St),V=St),i.bindTexture(N,pt||X[N]),Lt.type=N,Lt.texture=pt)}function w(){const N=it[V];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ct(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function yt(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ct(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(N){_t.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),_t.copy(N))}function kt(N){Et.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Et.copy(N))}function Ot(N,pt){let St=c.get(pt);St===void 0&&(St=new WeakMap,c.set(pt,St));let Lt=St.get(N);Lt===void 0&&(Lt=i.getUniformBlockIndex(pt,N.name),St.set(N,Lt))}function Tt(N,pt){const Lt=c.get(pt).get(N);l.get(pt)!==Lt&&(i.uniformBlockBinding(pt,Lt,N.__bindingPointIndex),l.set(pt,Lt))}function Xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},V=null,it={},u={},f=new WeakMap,d=[],_=null,g=!1,p=null,m=null,S=null,y=null,v=null,A=null,T=null,R=new Gt(0,0,0),D=0,M=!1,E=null,P=null,F=null,O=null,G=null,_t.set(0,0,i.canvas.width,i.canvas.height),Et.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Z,disable:vt,bindFramebuffer:ut,drawBuffers:mt,useProgram:It,setBlending:K,setMaterial:H,setFlipSided:$,setCullFace:J,setLineWidth:at,setPolygonOffset:nt,setScissorTest:rt,activeTexture:Ut,bindTexture:Rt,unbindTexture:w,compressedTexImage2D:x,compressedTexImage3D:z,texImage2D:yt,texImage3D:ct,updateUBOMapping:Ot,uniformBlockBinding:Tt,texStorage2D:gt,texStorage3D:Ct,texSubImage2D:Y,texSubImage3D:ot,compressedTexSubImage2D:tt,compressedTexSubImage3D:Pt,scissor:Mt,viewport:kt,reset:Xt}}function Qx(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,x){return d?new OffscreenCanvas(w,x):ps("canvas")}function g(w,x,z){let Y=1;const ot=Rt(w);if((ot.width>z||ot.height>z)&&(Y=z/Math.max(ot.width,ot.height)),Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const tt=Math.floor(Y*ot.width),Pt=Math.floor(Y*ot.height);u===void 0&&(u=_(tt,Pt));const gt=x?_(tt,Pt):u;return gt.width=tt,gt.height=Pt,gt.getContext("2d").drawImage(w,0,0,tt,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+tt+"x"+Pt+")."),gt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),w;return w}function p(w){return w.generateMipmaps}function m(w){i.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,x,z,Y,ot=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let tt=x;if(x===i.RED&&(z===i.FLOAT&&(tt=i.R32F),z===i.HALF_FLOAT&&(tt=i.R16F),z===i.UNSIGNED_BYTE&&(tt=i.R8)),x===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(tt=i.R8UI),z===i.UNSIGNED_SHORT&&(tt=i.R16UI),z===i.UNSIGNED_INT&&(tt=i.R32UI),z===i.BYTE&&(tt=i.R8I),z===i.SHORT&&(tt=i.R16I),z===i.INT&&(tt=i.R32I)),x===i.RG&&(z===i.FLOAT&&(tt=i.RG32F),z===i.HALF_FLOAT&&(tt=i.RG16F),z===i.UNSIGNED_BYTE&&(tt=i.RG8)),x===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(tt=i.RG8UI),z===i.UNSIGNED_SHORT&&(tt=i.RG16UI),z===i.UNSIGNED_INT&&(tt=i.RG32UI),z===i.BYTE&&(tt=i.RG8I),z===i.SHORT&&(tt=i.RG16I),z===i.INT&&(tt=i.RG32I)),x===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),z===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),z===i.UNSIGNED_INT&&(tt=i.RGB32UI),z===i.BYTE&&(tt=i.RGB8I),z===i.SHORT&&(tt=i.RGB16I),z===i.INT&&(tt=i.RGB32I)),x===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),z===i.UNSIGNED_INT&&(tt=i.RGBA32UI),z===i.BYTE&&(tt=i.RGBA8I),z===i.SHORT&&(tt=i.RGBA16I),z===i.INT&&(tt=i.RGBA32I)),x===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),x===i.RGBA){const Pt=ot?Lo:Qt.getTransfer(Y);z===i.FLOAT&&(tt=i.RGBA32F),z===i.HALF_FLOAT&&(tt=i.RGBA16F),z===i.UNSIGNED_BYTE&&(tt=Pt===re?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function v(w,x){let z;return w?x===null||x===Bi||x===hs?z=i.DEPTH24_STENCIL8:x===qn?z=i.DEPTH32F_STENCIL8:x===cs&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Bi||x===hs?z=i.DEPTH_COMPONENT24:x===qn?z=i.DEPTH_COMPONENT32F:x===cs&&(z=i.DEPTH_COMPONENT16),z}function A(w,x){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==wn&&w.minFilter!==je?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function T(w){const x=w.target;x.removeEventListener("dispose",T),D(x),x.isVideoTexture&&h.delete(x)}function R(w){const x=w.target;x.removeEventListener("dispose",R),E(x)}function D(w){const x=n.get(w);if(x.__webglInit===void 0)return;const z=w.source,Y=f.get(z);if(Y){const ot=Y[x.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&M(w),Object.keys(Y).length===0&&f.delete(z)}n.remove(w)}function M(w){const x=n.get(w);i.deleteTexture(x.__webglTexture);const z=w.source,Y=f.get(z);delete Y[x.__cacheKey],o.memory.textures--}function E(w){const x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let ot=0;ot<x.__webglFramebuffer[Y].length;ot++)i.deleteFramebuffer(x.__webglFramebuffer[Y][ot]);else i.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)i.deleteFramebuffer(x.__webglFramebuffer[Y]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const z=w.textures;for(let Y=0,ot=z.length;Y<ot;Y++){const tt=n.get(z[Y]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(z[Y])}n.remove(w)}let P=0;function F(){P=0}function O(){const w=P;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),P+=1,w}function G(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function L(w,x){const z=n.get(w);if(w.isVideoTexture&&rt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&z.__version!==w.version){const Y=w.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(z,w,x);return}}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+x)}function B(w,x){const z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){X(z,w,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+x)}function et(w,x){const z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){X(z,w,x);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+x)}function U(w,x){const z=n.get(w);if(w.version>0&&z.__version!==w.version){Z(z,w,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+x)}const V={[Di]:i.REPEAT,[Li]:i.CLAMP_TO_EDGE,[dl]:i.MIRRORED_REPEAT},it={[wn]:i.NEAREST,[Cp]:i.NEAREST_MIPMAP_NEAREST,[Is]:i.NEAREST_MIPMAP_LINEAR,[je]:i.LINEAR,[sa]:i.LINEAR_MIPMAP_NEAREST,[Ii]:i.LINEAR_MIPMAP_LINEAR},q={[Lp]:i.NEVER,[Bp]:i.ALWAYS,[Ip]:i.LESS,[mf]:i.LEQUAL,[Up]:i.EQUAL,[Op]:i.GEQUAL,[Np]:i.GREATER,[Fp]:i.NOTEQUAL};function lt(w,x){if(x.type===qn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===je||x.magFilter===sa||x.magFilter===Is||x.magFilter===Ii||x.minFilter===je||x.minFilter===sa||x.minFilter===Is||x.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,V[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,V[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,V[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,it[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,it[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,q[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===wn||x.minFilter!==Is&&x.minFilter!==Ii||x.type===qn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function _t(w,x){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",T));const Y=x.source;let ot=f.get(Y);ot===void 0&&(ot={},f.set(Y,ot));const tt=G(x);if(tt!==w.__cacheKey){ot[tt]===void 0&&(ot[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ot[tt].usedTimes++;const Pt=ot[w.__cacheKey];Pt!==void 0&&(ot[w.__cacheKey].usedTimes--,Pt.usedTimes===0&&M(x)),w.__cacheKey=tt,w.__webglTexture=ot[tt].texture}return z}function Et(w,x,z){return Math.floor(Math.floor(w/z)/x)}function xt(w,x,z,Y){const tt=w.updateRanges;if(tt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,z,Y,x.data);else{tt.sort((ct,Mt)=>ct.start-Mt.start);let Pt=0;for(let ct=1;ct<tt.length;ct++){const Mt=tt[Pt],kt=tt[ct],Ot=Mt.start+Mt.count,Tt=Et(kt.start,x.width,4),Xt=Et(Mt.start,x.width,4);kt.start<=Ot+1&&Tt===Xt&&Et(kt.start+kt.count-1,x.width,4)===Tt?Mt.count=Math.max(Mt.count,kt.start+kt.count-Mt.start):(++Pt,tt[Pt]=kt)}tt.length=Pt+1;const gt=i.getParameter(i.UNPACK_ROW_LENGTH),Ct=i.getParameter(i.UNPACK_SKIP_PIXELS),yt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let ct=0,Mt=tt.length;ct<Mt;ct++){const kt=tt[ct],Ot=Math.floor(kt.start/4),Tt=Math.ceil(kt.count/4),Xt=Ot%x.width,N=Math.floor(Ot/x.width),pt=Tt,St=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xt),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,Xt,N,pt,St,z,Y,x.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,gt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ct),i.pixelStorei(i.UNPACK_SKIP_ROWS,yt)}}function X(w,x,z){let Y=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=i.TEXTURE_3D);const ot=_t(w,x),tt=x.source;e.bindTexture(Y,w.__webglTexture,i.TEXTURE0+z);const Pt=n.get(tt);if(tt.version!==Pt.__version||ot===!0){e.activeTexture(i.TEXTURE0+z);const gt=Qt.getPrimaries(Qt.workingColorSpace),Ct=x.colorSpace===li?null:Qt.getPrimaries(x.colorSpace),yt=x.colorSpace===li||gt===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let ct=g(x.image,!1,r.maxTextureSize);ct=Ut(x,ct);const Mt=s.convert(x.format,x.colorSpace),kt=s.convert(x.type);let Ot=y(x.internalFormat,Mt,kt,x.colorSpace,x.isVideoTexture);lt(Y,x);let Tt;const Xt=x.mipmaps,N=x.isVideoTexture!==!0,pt=Pt.__version===void 0||ot===!0,St=tt.dataReady,Lt=A(x,ct);if(x.isDepthTexture)Ot=v(x.format===fs,x.type),pt&&(N?e.texStorage2D(i.TEXTURE_2D,1,Ot,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Ot,ct.width,ct.height,0,Mt,kt,null));else if(x.isDataTexture)if(Xt.length>0){N&&pt&&e.texStorage2D(i.TEXTURE_2D,Lt,Ot,Xt[0].width,Xt[0].height);for(let ft=0,st=Xt.length;ft<st;ft++)Tt=Xt[ft],N?St&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Tt.width,Tt.height,Mt,kt,Tt.data):e.texImage2D(i.TEXTURE_2D,ft,Ot,Tt.width,Tt.height,0,Mt,kt,Tt.data);x.generateMipmaps=!1}else N?(pt&&e.texStorage2D(i.TEXTURE_2D,Lt,Ot,ct.width,ct.height),St&&xt(x,ct,Mt,kt)):e.texImage2D(i.TEXTURE_2D,0,Ot,ct.width,ct.height,0,Mt,kt,ct.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){N&&pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,Ot,Xt[0].width,Xt[0].height,ct.depth);for(let ft=0,st=Xt.length;ft<st;ft++)if(Tt=Xt[ft],x.format!==An)if(Mt!==null)if(N){if(St)if(x.layerUpdates.size>0){const Ft=nu(Tt.width,Tt.height,x.format,x.type);for(const Wt of x.layerUpdates){const ue=Tt.data.subarray(Wt*Ft/Tt.data.BYTES_PER_ELEMENT,(Wt+1)*Ft/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,Wt,Tt.width,Tt.height,1,Mt,ue)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Tt.width,Tt.height,ct.depth,Mt,Tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,Ot,Tt.width,Tt.height,ct.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?St&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Tt.width,Tt.height,ct.depth,Mt,kt,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,Ot,Tt.width,Tt.height,ct.depth,0,Mt,kt,Tt.data)}else{N&&pt&&e.texStorage2D(i.TEXTURE_2D,Lt,Ot,Xt[0].width,Xt[0].height);for(let ft=0,st=Xt.length;ft<st;ft++)Tt=Xt[ft],x.format!==An?Mt!==null?N?St&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,Tt.width,Tt.height,Mt,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,Ot,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?St&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Tt.width,Tt.height,Mt,kt,Tt.data):e.texImage2D(i.TEXTURE_2D,ft,Ot,Tt.width,Tt.height,0,Mt,kt,Tt.data)}else if(x.isDataArrayTexture)if(N){if(pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,Ot,ct.width,ct.height,ct.depth),St)if(x.layerUpdates.size>0){const ft=nu(ct.width,ct.height,x.format,x.type);for(const st of x.layerUpdates){const Ft=ct.data.subarray(st*ft/ct.data.BYTES_PER_ELEMENT,(st+1)*ft/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,ct.width,ct.height,1,Mt,kt,Ft)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Mt,kt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,ct.width,ct.height,ct.depth,0,Mt,kt,ct.data);else if(x.isData3DTexture)N?(pt&&e.texStorage3D(i.TEXTURE_3D,Lt,Ot,ct.width,ct.height,ct.depth),St&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Mt,kt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,ct.width,ct.height,ct.depth,0,Mt,kt,ct.data);else if(x.isFramebufferTexture){if(pt)if(N)e.texStorage2D(i.TEXTURE_2D,Lt,Ot,ct.width,ct.height);else{let ft=ct.width,st=ct.height;for(let Ft=0;Ft<Lt;Ft++)e.texImage2D(i.TEXTURE_2D,Ft,Ot,ft,st,0,Mt,kt,null),ft>>=1,st>>=1}}else if(Xt.length>0){if(N&&pt){const ft=Rt(Xt[0]);e.texStorage2D(i.TEXTURE_2D,Lt,Ot,ft.width,ft.height)}for(let ft=0,st=Xt.length;ft<st;ft++)Tt=Xt[ft],N?St&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Mt,kt,Tt):e.texImage2D(i.TEXTURE_2D,ft,Ot,Mt,kt,Tt);x.generateMipmaps=!1}else if(N){if(pt){const ft=Rt(ct);e.texStorage2D(i.TEXTURE_2D,Lt,Ot,ft.width,ft.height)}St&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,kt,ct)}else e.texImage2D(i.TEXTURE_2D,0,Ot,Mt,kt,ct);p(x)&&m(Y),Pt.__version=tt.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Z(w,x,z){if(x.image.length!==6)return;const Y=_t(w,x),ot=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+z);const tt=n.get(ot);if(ot.version!==tt.__version||Y===!0){e.activeTexture(i.TEXTURE0+z);const Pt=Qt.getPrimaries(Qt.workingColorSpace),gt=x.colorSpace===li?null:Qt.getPrimaries(x.colorSpace),Ct=x.colorSpace===li||Pt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const yt=x.isCompressedTexture||x.image[0].isCompressedTexture,ct=x.image[0]&&x.image[0].isDataTexture,Mt=[];for(let st=0;st<6;st++)!yt&&!ct?Mt[st]=g(x.image[st],!0,r.maxCubemapSize):Mt[st]=ct?x.image[st].image:x.image[st],Mt[st]=Ut(x,Mt[st]);const kt=Mt[0],Ot=s.convert(x.format,x.colorSpace),Tt=s.convert(x.type),Xt=y(x.internalFormat,Ot,Tt,x.colorSpace),N=x.isVideoTexture!==!0,pt=tt.__version===void 0||Y===!0,St=ot.dataReady;let Lt=A(x,kt);lt(i.TEXTURE_CUBE_MAP,x);let ft;if(yt){N&&pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,Xt,kt.width,kt.height);for(let st=0;st<6;st++){ft=Mt[st].mipmaps;for(let Ft=0;Ft<ft.length;Ft++){const Wt=ft[Ft];x.format!==An?Ot!==null?N?St&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,0,0,Wt.width,Wt.height,Ot,Wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,Xt,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,0,0,Wt.width,Wt.height,Ot,Tt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,Xt,Wt.width,Wt.height,0,Ot,Tt,Wt.data)}}}else{if(ft=x.mipmaps,N&&pt){ft.length>0&&Lt++;const st=Rt(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,Xt,st.width,st.height)}for(let st=0;st<6;st++)if(ct){N?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Mt[st].width,Mt[st].height,Ot,Tt,Mt[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Xt,Mt[st].width,Mt[st].height,0,Ot,Tt,Mt[st].data);for(let Ft=0;Ft<ft.length;Ft++){const ue=ft[Ft].image[st].image;N?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,0,0,ue.width,ue.height,Ot,Tt,ue.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,Xt,ue.width,ue.height,0,Ot,Tt,ue.data)}}else{N?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ot,Tt,Mt[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Xt,Ot,Tt,Mt[st]);for(let Ft=0;Ft<ft.length;Ft++){const Wt=ft[Ft];N?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,0,0,Ot,Tt,Wt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,Xt,Ot,Tt,Wt.image[st])}}}p(x)&&m(i.TEXTURE_CUBE_MAP),tt.__version=ot.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function vt(w,x,z,Y,ot,tt){const Pt=s.convert(z.format,z.colorSpace),gt=s.convert(z.type),Ct=y(z.internalFormat,Pt,gt,z.colorSpace),yt=n.get(x),ct=n.get(z);if(ct.__renderTarget=x,!yt.__hasExternalTextures){const Mt=Math.max(1,x.width>>tt),kt=Math.max(1,x.height>>tt);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,tt,Ct,Mt,kt,x.depth,0,Pt,gt,null):e.texImage2D(ot,tt,Ct,Mt,kt,0,Pt,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),nt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,ot,ct.__webglTexture,0,at(x)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,ot,ct.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(w,x,z){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){const Y=x.depthTexture,ot=Y&&Y.isDepthTexture?Y.type:null,tt=v(x.stencilBuffer,ot),Pt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=at(x);nt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,tt,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,tt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,tt,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,w)}else{const Y=x.textures;for(let ot=0;ot<Y.length;ot++){const tt=Y[ot],Pt=s.convert(tt.format,tt.colorSpace),gt=s.convert(tt.type),Ct=y(tt.internalFormat,Pt,gt,tt.colorSpace),yt=at(x);z&&nt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,Ct,x.width,x.height):nt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,Ct,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Ct,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),L(x.depthTexture,0);const ot=Y.__webglTexture,tt=at(x);if(x.depthTexture.format===us)nt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(x.depthTexture.format===fs)nt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function It(w){const x=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const Y=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const ot=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",ot)};Y.addEventListener("dispose",ot),x.__depthDisposeCallback=ot}x.__boundDepthTexture=Y}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const Y=w.texture.mipmaps;Y&&Y.length>0?mt(x.__webglFramebuffer[0],w):mt(x.__webglFramebuffer,w)}else if(z){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=i.createRenderbuffer(),ut(x.__webglDepthbuffer[Y],w,!1);else{const ot=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=x.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,tt)}}else{const Y=w.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ut(x.__webglDepthbuffer,w,!1);else{const ot=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,tt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(w,x,z){const Y=n.get(w);x!==void 0&&vt(Y.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&It(w)}function C(w){const x=w.texture,z=n.get(w),Y=n.get(x);w.addEventListener("dispose",R);const ot=w.textures,tt=w.isWebGLCubeRenderTarget===!0,Pt=ot.length>1;if(Pt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=x.version,o.memory.textures++),tt){z.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[gt]=[];for(let Ct=0;Ct<x.mipmaps.length;Ct++)z.__webglFramebuffer[gt][Ct]=i.createFramebuffer()}else z.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let gt=0;gt<x.mipmaps.length;gt++)z.__webglFramebuffer[gt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let gt=0,Ct=ot.length;gt<Ct;gt++){const yt=n.get(ot[gt]);yt.__webglTexture===void 0&&(yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&nt(w)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let gt=0;gt<ot.length;gt++){const Ct=ot[gt];z.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[gt]);const yt=s.convert(Ct.format,Ct.colorSpace),ct=s.convert(Ct.type),Mt=y(Ct.internalFormat,yt,ct,Ct.colorSpace,w.isXRRenderTarget===!0),kt=at(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,Mt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,z.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(z.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),lt(i.TEXTURE_CUBE_MAP,x);for(let gt=0;gt<6;gt++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ct=0;Ct<x.mipmaps.length;Ct++)vt(z.__webglFramebuffer[gt][Ct],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct);else vt(z.__webglFramebuffer[gt],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);p(x)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let gt=0,Ct=ot.length;gt<Ct;gt++){const yt=ot[gt],ct=n.get(yt);let Mt=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Mt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,ct.__webglTexture),lt(Mt,yt),vt(z.__webglFramebuffer,w,yt,i.COLOR_ATTACHMENT0+gt,Mt,0),p(yt)&&m(Mt)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(gt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,Y.__webglTexture),lt(gt,x),x.mipmaps&&x.mipmaps.length>0)for(let Ct=0;Ct<x.mipmaps.length;Ct++)vt(z.__webglFramebuffer[Ct],w,x,i.COLOR_ATTACHMENT0,gt,Ct);else vt(z.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,gt,0);p(x)&&m(gt),e.unbindTexture()}w.depthBuffer&&It(w)}function K(w){const x=w.textures;for(let z=0,Y=x.length;z<Y;z++){const ot=x[z];if(p(ot)){const tt=S(w),Pt=n.get(ot).__webglTexture;e.bindTexture(tt,Pt),m(tt),e.unbindTexture()}}}const H=[],$=[];function J(w){if(w.samples>0){if(nt(w)===!1){const x=w.textures,z=w.width,Y=w.height;let ot=i.COLOR_BUFFER_BIT;const tt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(w),gt=x.length>1;if(gt)for(let yt=0;yt<x.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Ct=w.texture.mipmaps;Ct&&Ct.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let yt=0;yt<x.length;yt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[yt]);const ct=n.get(x[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ct,0)}i.blitFramebuffer(0,0,z,Y,0,0,z,Y,ot,i.NEAREST),l===!0&&(H.length=0,$.length=0,H.push(i.COLOR_ATTACHMENT0+yt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(H.push(tt),$.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,H))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let yt=0;yt<x.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[yt]);const ct=n.get(x[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,ct,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function at(w){return Math.min(r.maxSamples,w.samples)}function nt(w){const x=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function rt(w){const x=o.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function Ut(w,x){const z=w.colorSpace,Y=w.format,ot=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==Sr&&z!==li&&(Qt.getTransfer(z)===re?(Y!==An||ot!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),x}function Rt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=L,this.setTexture2DArray=B,this.setTexture3D=et,this.setTextureCube=U,this.rebindTextures=wt,this.setupRenderTarget=C,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=nt}function ty(i,t){function e(n,r=li){let s;const o=Qt.getTransfer(r);if(n===Nn)return i.UNSIGNED_BYTE;if(n===Ec)return i.UNSIGNED_SHORT_4_4_4_4;if(n===bc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===of)return i.BYTE;if(n===af)return i.SHORT;if(n===cs)return i.UNSIGNED_SHORT;if(n===Sc)return i.INT;if(n===Bi)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===Ts)return i.HALF_FLOAT;if(n===hf)return i.ALPHA;if(n===uf)return i.RGB;if(n===An)return i.RGBA;if(n===us)return i.DEPTH_COMPONENT;if(n===fs)return i.DEPTH_STENCIL;if(n===ff)return i.RED;if(n===Tc)return i.RED_INTEGER;if(n===df)return i.RG;if(n===Ac)return i.RG_INTEGER;if(n===wc)return i.RGBA_INTEGER;if(n===yo||n===Mo||n===So||n===Eo)if(o===re)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===yo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===yo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===So)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Eo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pl||n===ml||n===_l||n===gl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===pl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ml)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_l)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vl||n===xl||n===yl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===vl||n===xl)return o===re?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===yl)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ml||n===Sl||n===El||n===bl||n===Tl||n===Al||n===wl||n===Cl||n===Rl||n===Pl||n===Dl||n===Ll||n===Il||n===Ul)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ml)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sl)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===El)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bl)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tl)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Al)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wl)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cl)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rl)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pl)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dl)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ll)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Il)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ul)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nl||n===Fl||n===Ol)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Nl)return o===re?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ol)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bl||n===zl||n===kl||n===Hl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Bl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===zl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===kl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const ey=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ny=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class iy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new wf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new jn({vertexShader:ey,fragmentShader:ny,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ue(new Ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ry extends Gi{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,_=null;const g=typeof XRWebGLBinding<"u",p=new iy,m={},S=e.getContextAttributes();let y=null,v=null;const A=[],T=[],R=new ht;let D=null;const M=new _n;M.viewport=new be;const E=new _n;E.viewport=new be;const P=[M,E],F=new S_;let O=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Z=A[X];return Z===void 0&&(Z=new Aa,A[X]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(X){let Z=A[X];return Z===void 0&&(Z=new Aa,A[X]=Z),Z.getGripSpace()},this.getHand=function(X){let Z=A[X];return Z===void 0&&(Z=new Aa,A[X]=Z),Z.getHandSpace()};function L(X){const Z=T.indexOf(X.inputSource);if(Z===-1)return;const vt=A[Z];vt!==void 0&&(vt.update(X.inputSource,X.frame,c||o),vt.dispatchEvent({type:X.type,data:X.inputSource}))}function B(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",et);for(let X=0;X<A.length;X++){const Z=T[X];Z!==null&&(T[X]=null,A[X].disconnect(Z))}O=null,G=null,p.reset();for(const X in m)delete m[X];t.setRenderTarget(y),d=null,f=null,u=null,r=null,v=null,xt.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",B),r.addEventListener("inputsourceschange",et),S.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(R),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,ut=null,mt=null;S.depth&&(mt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=S.stencil?fs:us,ut=S.stencil?hs:Bi);const It={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(It),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new ki(f.textureWidth,f.textureHeight,{format:An,type:Nn,depthTexture:new Af(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const vt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,vt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new ki(d.framebufferWidth,d.framebufferHeight,{format:An,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),xt.setContext(r),xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function et(X){for(let Z=0;Z<X.removed.length;Z++){const vt=X.removed[Z],ut=T.indexOf(vt);ut>=0&&(T[ut]=null,A[ut].disconnect(vt))}for(let Z=0;Z<X.added.length;Z++){const vt=X.added[Z];let ut=T.indexOf(vt);if(ut===-1){for(let It=0;It<A.length;It++)if(It>=T.length){T.push(vt),ut=It;break}else if(T[It]===null){T[It]=vt,ut=It;break}if(ut===-1)break}const mt=A[ut];mt&&mt.connect(vt)}}const U=new I,V=new I;function it(X,Z,vt){U.setFromMatrixPosition(Z.matrixWorld),V.setFromMatrixPosition(vt.matrixWorld);const ut=U.distanceTo(V),mt=Z.projectionMatrix.elements,It=vt.projectionMatrix.elements,wt=mt[14]/(mt[10]-1),C=mt[14]/(mt[10]+1),K=(mt[9]+1)/mt[5],H=(mt[9]-1)/mt[5],$=(mt[8]-1)/mt[0],J=(It[8]+1)/It[0],at=wt*$,nt=wt*J,rt=ut/(-$+J),Ut=rt*-$;if(Z.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ut),X.translateZ(rt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),mt[10]===-1)X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Rt=wt+rt,w=C+rt,x=at-Ut,z=nt+(ut-Ut),Y=K*C/w*Rt,ot=H*C/w*Rt;X.projectionMatrix.makePerspective(x,z,Y,ot,Rt,w),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function q(X,Z){Z===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Z.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let Z=X.near,vt=X.far;p.texture!==null&&(p.depthNear>0&&(Z=p.depthNear),p.depthFar>0&&(vt=p.depthFar)),F.near=E.near=M.near=Z,F.far=E.far=M.far=vt,(O!==F.near||G!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),O=F.near,G=F.far),F.layers.mask=X.layers.mask|6,M.layers.mask=F.layers.mask&3,E.layers.mask=F.layers.mask&5;const ut=X.parent,mt=F.cameras;q(F,ut);for(let It=0;It<mt.length;It++)q(mt[It],ut);mt.length===2?it(F,M,E):F.projectionMatrix.copy(M.projectionMatrix),lt(X,F,ut)};function lt(X,Z,vt){vt===null?X.matrix.copy(Z.matrixWorld):(X.matrix.copy(vt.matrixWorld),X.matrix.invert(),X.matrix.multiply(Z.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ds*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(X){return m[X]};let _t=null;function Et(X,Z){if(h=Z.getViewerPose(c||o),_=Z,h!==null){const vt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let ut=!1;vt.length!==F.cameras.length&&(F.cameras.length=0,ut=!0);for(let C=0;C<vt.length;C++){const K=vt[C];let H=null;if(d!==null)H=d.getViewport(K);else{const J=u.getViewSubImage(f,K);H=J.viewport,C===0&&(t.setRenderTargetTextures(v,J.colorTexture,J.depthStencilTexture),t.setRenderTarget(v))}let $=P[C];$===void 0&&($=new _n,$.layers.enable(C),$.viewport=new be,P[C]=$),$.matrix.fromArray(K.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(K.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(H.x,H.y,H.width,H.height),C===0&&(F.matrix.copy($.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ut===!0&&F.cameras.push($)}const mt=r.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){u=n.getBinding();const C=u.getDepthInformation(vt[0]);C&&C.isValid&&C.texture&&p.init(C,r.renderState)}if(mt&&mt.includes("camera-access")&&g){t.state.unbindTexture(),u=n.getBinding();for(let C=0;C<vt.length;C++){const K=vt[C].camera;if(K){let H=m[K];H||(H=new wf,m[K]=H);const $=u.getCameraImage(K);H.sourceTexture=$}}}}for(let vt=0;vt<A.length;vt++){const ut=T[vt],mt=A[vt];ut!==null&&mt!==void 0&&mt.update(ut,Z,c||o)}_t&&_t(X,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),_=null}const xt=new zf;xt.setAnimationLoop(Et),this.setAnimationLoop=function(X){_t=X},this.dispose=function(){}}}const wi=new Fn,sy=new de;function oy(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Mf(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,S,y,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,v)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Qe&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Qe&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=t.get(m),y=S.envMap,v=S.envMapRotation;y&&(p.envMap.value=y,wi.copy(v),wi.x*=-1,wi.y*=-1,wi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),p.envMapRotation.value.setFromMatrix4(sy.makeRotationFromEuler(wi)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=y*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Qe&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const S=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function ay(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const v=y.program;n.uniformBlockBinding(S,v)}function c(S,y){let v=r[S.id];v===void 0&&(_(S),v=h(S),r[S.id]=v,S.addEventListener("dispose",p));const A=y.program;n.updateUBOMapping(S,A);const T=t.render.frame;s[S.id]!==T&&(f(S),s[S.id]=T)}function h(S){const y=u();S.__bindingPointIndex=y;const v=i.createBuffer(),A=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=r[S.id],v=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,R=v.length;T<R;T++){const D=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,E=D.length;M<E;M++){const P=D[M];if(d(P,T,M,A)===!0){const F=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let L=0;L<O.length;L++){const B=O[L],et=g(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,F+G,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,G),G+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,y,v,A){const T=S.value,R=y+"_"+v;if(A[R]===void 0)return typeof T=="number"||typeof T=="boolean"?A[R]=T:A[R]=T.clone(),!0;{const D=A[R];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return A[R]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function _(S){const y=S.uniforms;let v=0;const A=16;for(let R=0,D=y.length;R<D;R++){const M=Array.isArray(y[R])?y[R]:[y[R]];for(let E=0,P=M.length;E<P;E++){const F=M[E],O=Array.isArray(F.value)?F.value:[F.value];for(let G=0,L=O.length;G<L;G++){const B=O[G],et=g(B),U=v%A,V=U%et.boundary,it=U+V;v+=V,it!==0&&A-it<et.storage&&(v+=A-it),F.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=et.storage}}}const T=v%A;return T>0&&(v+=A-T),S.__size=v,S.__cache={},this}function g(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function p(S){const y=S.target;y.removeEventListener("dispose",p);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function m(){for(const S in r)i.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}class ly{constructor(t={}){const{canvas:e=nm(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),g=new Int32Array(4);let p=null,m=null;const S=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let A=!1;this._outputColorSpace=pn;let T=0,R=0,D=null,M=-1,E=null;const P=new be,F=new be;let O=null;const G=new Gt(0);let L=0,B=e.width,et=e.height,U=1,V=null,it=null;const q=new be(0,0,B,et),lt=new be(0,0,B,et);let _t=!1;const Et=new Lc;let xt=!1,X=!1;const Z=new de,vt=new I,ut=new be,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function wt(){return D===null?U:1}let C=n;function K(b,k){return e.getContext(b,k)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yc}`),e.addEventListener("webglcontextlost",St,!1),e.addEventListener("webglcontextrestored",Lt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),C===null){const k="webgl2";if(C=K(k,b),C===null)throw K(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let H,$,J,at,nt,rt,Ut,Rt,w,x,z,Y,ot,tt,Pt,gt,Ct,yt,ct,Mt,kt,Ot,Tt,Xt;function N(){H=new vv(C),H.init(),Ot=new ty(C,H),$=new uv(C,H,t,Ot),J=new Jx(C,H),$.reversedDepthBuffer&&f&&J.buffers.depth.setReversed(!0),at=new Mv(C),nt=new zx,rt=new Qx(C,H,J,nt,$,Ot,at),Ut=new dv(v),Rt=new gv(v),w=new w_(C),Tt=new cv(C,w),x=new xv(C,w,at,Tt),z=new Ev(C,x,w,at),ct=new Sv(C,$,rt),gt=new fv(nt),Y=new Bx(v,Ut,Rt,H,$,Tt,gt),ot=new oy(v,nt),tt=new Hx,Pt=new $x(H),yt=new lv(v,Ut,Rt,J,z,d,l),Ct=new Kx(v,z,$),Xt=new ay(C,at,$,J),Mt=new hv(C,H,at),kt=new yv(C,H,at),at.programs=Y.programs,v.capabilities=$,v.extensions=H,v.properties=nt,v.renderLists=tt,v.shadowMap=Ct,v.state=J,v.info=at}N();const pt=new ry(v,C);this.xr=pt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const b=H.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=H.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(b){b!==void 0&&(U=b,this.setSize(B,et,!1))},this.getSize=function(b){return b.set(B,et)},this.setSize=function(b,k,j=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=b,et=k,e.width=Math.floor(b*U),e.height=Math.floor(k*U),j===!0&&(e.style.width=b+"px",e.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(B*U,et*U).floor()},this.setDrawingBufferSize=function(b,k,j){B=b,et=k,U=j,e.width=Math.floor(b*j),e.height=Math.floor(k*j),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(q)},this.setViewport=function(b,k,j,Q){b.isVector4?q.set(b.x,b.y,b.z,b.w):q.set(b,k,j,Q),J.viewport(P.copy(q).multiplyScalar(U).round())},this.getScissor=function(b){return b.copy(lt)},this.setScissor=function(b,k,j,Q){b.isVector4?lt.set(b.x,b.y,b.z,b.w):lt.set(b,k,j,Q),J.scissor(F.copy(lt).multiplyScalar(U).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(b){J.setScissorTest(_t=b)},this.setOpaqueSort=function(b){V=b},this.setTransparentSort=function(b){it=b},this.getClearColor=function(b){return b.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,j=!0){let Q=0;if(b){let W=!1;if(D!==null){const dt=D.texture.format;W=dt===wc||dt===Ac||dt===Tc}if(W){const dt=D.texture.type,At=dt===Nn||dt===Bi||dt===cs||dt===hs||dt===Ec||dt===bc,Nt=yt.getClearColor(),Dt=yt.getClearAlpha(),Ht=Nt.r,Vt=Nt.g,Bt=Nt.b;At?(_[0]=Ht,_[1]=Vt,_[2]=Bt,_[3]=Dt,C.clearBufferuiv(C.COLOR,0,_)):(g[0]=Ht,g[1]=Vt,g[2]=Bt,g[3]=Dt,C.clearBufferiv(C.COLOR,0,g))}else Q|=C.COLOR_BUFFER_BIT}k&&(Q|=C.DEPTH_BUFFER_BIT),j&&(Q|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",St,!1),e.removeEventListener("webglcontextrestored",Lt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),yt.dispose(),tt.dispose(),Pt.dispose(),nt.dispose(),Ut.dispose(),Rt.dispose(),z.dispose(),Tt.dispose(),Xt.dispose(),Y.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",Cn),pt.removeEventListener("sessionend",ih),yi.stop()};function St(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const b=at.autoReset,k=Ct.enabled,j=Ct.autoUpdate,Q=Ct.needsUpdate,W=Ct.type;N(),at.autoReset=b,Ct.enabled=k,Ct.autoUpdate=j,Ct.needsUpdate=Q,Ct.type=W}function ft(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function st(b){const k=b.target;k.removeEventListener("dispose",st),Ft(k)}function Ft(b){Wt(b),nt.remove(b)}function Wt(b){const k=nt.get(b).programs;k!==void 0&&(k.forEach(function(j){Y.releaseProgram(j)}),b.isShaderMaterial&&Y.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,j,Q,W,dt){k===null&&(k=mt);const At=W.isMesh&&W.matrixWorld.determinant()<0,Nt=zd(b,k,j,Q,W);J.setMaterial(Q,At);let Dt=j.index,Ht=1;if(Q.wireframe===!0){if(Dt=x.getWireframeAttribute(j),Dt===void 0)return;Ht=2}const Vt=j.drawRange,Bt=j.attributes.position;let Zt=Vt.start*Ht,ie=(Vt.start+Vt.count)*Ht;dt!==null&&(Zt=Math.max(Zt,dt.start*Ht),ie=Math.min(ie,(dt.start+dt.count)*Ht)),Dt!==null?(Zt=Math.max(Zt,0),ie=Math.min(ie,Dt.count)):Bt!=null&&(Zt=Math.max(Zt,0),ie=Math.min(ie,Bt.count));const Ee=ie-Zt;if(Ee<0||Ee===1/0)return;Tt.setup(W,Q,Nt,j,Dt);let pe,le=Mt;if(Dt!==null&&(pe=w.get(Dt),le=kt,le.setIndex(pe)),W.isMesh)Q.wireframe===!0?(J.setLineWidth(Q.wireframeLinewidth*wt()),le.setMode(C.LINES)):le.setMode(C.TRIANGLES);else if(W.isLine){let zt=Q.linewidth;zt===void 0&&(zt=1),J.setLineWidth(zt*wt()),W.isLineSegments?le.setMode(C.LINES):W.isLineLoop?le.setMode(C.LINE_LOOP):le.setMode(C.LINE_STRIP)}else W.isPoints?le.setMode(C.POINTS):W.isSprite&&le.setMode(C.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ms("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),le.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(H.get("WEBGL_multi_draw"))le.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const zt=W._multiDrawStarts,ge=W._multiDrawCounts,Jt=W._multiDrawCount,en=Dt?w.get(Dt).bytesPerElement:1,Xi=nt.get(Q).currentProgram.getUniforms();for(let nn=0;nn<Jt;nn++)Xi.setValue(C,"_gl_DrawID",nn),le.render(zt[nn]/en,ge[nn])}else if(W.isInstancedMesh)le.renderInstances(Zt,Ee,W.count);else if(j.isInstancedBufferGeometry){const zt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ge=Math.min(j.instanceCount,zt);le.renderInstances(Zt,Ee,ge)}else le.render(Zt,Ee)};function ue(b,k,j){b.transparent===!0&&b.side===Ke&&b.forceSinglePass===!1?(b.side=Qe,b.needsUpdate=!0,Ls(b,k,j),b.side=pi,b.needsUpdate=!0,Ls(b,k,j),b.side=Ke):Ls(b,k,j)}this.compile=function(b,k,j=null){j===null&&(j=b),m=Pt.get(j),m.init(k),y.push(m),j.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),b!==j&&b.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights();const Q=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const dt=W.material;if(dt)if(Array.isArray(dt))for(let At=0;At<dt.length;At++){const Nt=dt[At];ue(Nt,j,W),Q.add(Nt)}else ue(dt,j,W),Q.add(dt)}),m=y.pop(),Q},this.compileAsync=function(b,k,j=null){const Q=this.compile(b,k,j);return new Promise(W=>{function dt(){if(Q.forEach(function(At){nt.get(At).currentProgram.isReady()&&Q.delete(At)}),Q.size===0){W(b);return}setTimeout(dt,10)}H.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let ee=null;function zn(b){ee&&ee(b)}function Cn(){yi.stop()}function ih(){yi.start()}const yi=new zf;yi.setAnimationLoop(zn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(b){ee=b,pt.setAnimationLoop(b),b===null?yi.stop():yi.start()},pt.addEventListener("sessionstart",Cn),pt.addEventListener("sessionend",ih),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(k),k=pt.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,k,D),m=Pt.get(b,y.length),m.init(k),y.push(m),Z.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Et.setFromProjectionMatrix(Z,Ln,k.reversedDepth),X=this.localClippingEnabled,xt=gt.init(this.clippingPlanes,X),p=tt.get(b,S.length),p.init(),S.push(p),pt.enabled===!0&&pt.isPresenting===!0){const dt=v.xr.getDepthSensingMesh();dt!==null&&ea(dt,k,-1/0,v.sortObjects)}ea(b,k,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(V,it),It=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,It&&yt.addToRenderList(p,b),this.info.render.frame++,xt===!0&&gt.beginShadows();const j=m.state.shadowsArray;Ct.render(j,b,k),xt===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=p.opaque,W=p.transmissive;if(m.setupLights(),k.isArrayCamera){const dt=k.cameras;if(W.length>0)for(let At=0,Nt=dt.length;At<Nt;At++){const Dt=dt[At];sh(Q,W,b,Dt)}It&&yt.render(b);for(let At=0,Nt=dt.length;At<Nt;At++){const Dt=dt[At];rh(p,b,Dt,Dt.viewport)}}else W.length>0&&sh(Q,W,b,k),It&&yt.render(b),rh(p,b,k);D!==null&&R===0&&(rt.updateMultisampleRenderTarget(D),rt.updateRenderTargetMipmap(D)),b.isScene===!0&&b.onAfterRender(v,b,k),Tt.resetDefaultState(),M=-1,E=null,y.pop(),y.length>0?(m=y[y.length-1],xt===!0&&gt.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,S.pop(),S.length>0?p=S[S.length-1]:p=null};function ea(b,k,j,Q){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Et.intersectsSprite(b)){Q&&ut.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Z);const At=z.update(b),Nt=b.material;Nt.visible&&p.push(b,At,Nt,j,ut.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Et.intersectsObject(b))){const At=z.update(b),Nt=b.material;if(Q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ut.copy(b.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),ut.copy(At.boundingSphere.center)),ut.applyMatrix4(b.matrixWorld).applyMatrix4(Z)),Array.isArray(Nt)){const Dt=At.groups;for(let Ht=0,Vt=Dt.length;Ht<Vt;Ht++){const Bt=Dt[Ht],Zt=Nt[Bt.materialIndex];Zt&&Zt.visible&&p.push(b,At,Zt,j,ut.z,Bt)}}else Nt.visible&&p.push(b,At,Nt,j,ut.z,null)}}const dt=b.children;for(let At=0,Nt=dt.length;At<Nt;At++)ea(dt[At],k,j,Q)}function rh(b,k,j,Q){const W=b.opaque,dt=b.transmissive,At=b.transparent;m.setupLightsView(j),xt===!0&&gt.setGlobalState(v.clippingPlanes,j),Q&&J.viewport(P.copy(Q)),W.length>0&&Ds(W,k,j),dt.length>0&&Ds(dt,k,j),At.length>0&&Ds(At,k,j),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function sh(b,k,j,Q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Q.id]===void 0&&(m.state.transmissionRenderTarget[Q.id]=new ki(1,1,{generateMipmaps:!0,type:H.has("EXT_color_buffer_half_float")||H.has("EXT_color_buffer_float")?Ts:Nn,minFilter:Ii,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const dt=m.state.transmissionRenderTarget[Q.id],At=Q.viewport||P;dt.setSize(At.z*v.transmissionResolutionScale,At.w*v.transmissionResolutionScale);const Nt=v.getRenderTarget(),Dt=v.getActiveCubeFace(),Ht=v.getActiveMipmapLevel();v.setRenderTarget(dt),v.getClearColor(G),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear(),It&&yt.render(j);const Vt=v.toneMapping;v.toneMapping=fi;const Bt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),m.setupLightsView(Q),xt===!0&&gt.setGlobalState(v.clippingPlanes,Q),Ds(b,j,Q),rt.updateMultisampleRenderTarget(dt),rt.updateRenderTargetMipmap(dt),H.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let ie=0,Ee=k.length;ie<Ee;ie++){const pe=k[ie],le=pe.object,zt=pe.geometry,ge=pe.material,Jt=pe.group;if(ge.side===Ke&&le.layers.test(Q.layers)){const en=ge.side;ge.side=Qe,ge.needsUpdate=!0,oh(le,j,Q,zt,ge,Jt),ge.side=en,ge.needsUpdate=!0,Zt=!0}}Zt===!0&&(rt.updateMultisampleRenderTarget(dt),rt.updateRenderTargetMipmap(dt))}v.setRenderTarget(Nt,Dt,Ht),v.setClearColor(G,L),Bt!==void 0&&(Q.viewport=Bt),v.toneMapping=Vt}function Ds(b,k,j){const Q=k.isScene===!0?k.overrideMaterial:null;for(let W=0,dt=b.length;W<dt;W++){const At=b[W],Nt=At.object,Dt=At.geometry,Ht=At.group;let Vt=At.material;Vt.allowOverride===!0&&Q!==null&&(Vt=Q),Nt.layers.test(j.layers)&&oh(Nt,k,j,Dt,Vt,Ht)}}function oh(b,k,j,Q,W,dt){b.onBeforeRender(v,k,j,Q,W,dt),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(v,k,j,Q,b,dt),W.transparent===!0&&W.side===Ke&&W.forceSinglePass===!1?(W.side=Qe,W.needsUpdate=!0,v.renderBufferDirect(j,k,Q,W,b,dt),W.side=pi,W.needsUpdate=!0,v.renderBufferDirect(j,k,Q,W,b,dt),W.side=Ke):v.renderBufferDirect(j,k,Q,W,b,dt),b.onAfterRender(v,k,j,Q,W,dt)}function Ls(b,k,j){k.isScene!==!0&&(k=mt);const Q=nt.get(b),W=m.state.lights,dt=m.state.shadowsArray,At=W.state.version,Nt=Y.getParameters(b,W.state,dt,k,j),Dt=Y.getProgramCacheKey(Nt);let Ht=Q.programs;Q.environment=b.isMeshStandardMaterial?k.environment:null,Q.fog=k.fog,Q.envMap=(b.isMeshStandardMaterial?Rt:Ut).get(b.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Ht===void 0&&(b.addEventListener("dispose",st),Ht=new Map,Q.programs=Ht);let Vt=Ht.get(Dt);if(Vt!==void 0){if(Q.currentProgram===Vt&&Q.lightsStateVersion===At)return lh(b,Nt),Vt}else Nt.uniforms=Y.getUniforms(b),b.onBeforeCompile(Nt,v),Vt=Y.acquireProgram(Nt,Dt),Ht.set(Dt,Vt),Q.uniforms=Nt.uniforms;const Bt=Q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Bt.clippingPlanes=gt.uniform),lh(b,Nt),Q.needsLights=Hd(b),Q.lightsStateVersion=At,Q.needsLights&&(Bt.ambientLightColor.value=W.state.ambient,Bt.lightProbe.value=W.state.probe,Bt.directionalLights.value=W.state.directional,Bt.directionalLightShadows.value=W.state.directionalShadow,Bt.spotLights.value=W.state.spot,Bt.spotLightShadows.value=W.state.spotShadow,Bt.rectAreaLights.value=W.state.rectArea,Bt.ltc_1.value=W.state.rectAreaLTC1,Bt.ltc_2.value=W.state.rectAreaLTC2,Bt.pointLights.value=W.state.point,Bt.pointLightShadows.value=W.state.pointShadow,Bt.hemisphereLights.value=W.state.hemi,Bt.directionalShadowMap.value=W.state.directionalShadowMap,Bt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Bt.spotShadowMap.value=W.state.spotShadowMap,Bt.spotLightMatrix.value=W.state.spotLightMatrix,Bt.spotLightMap.value=W.state.spotLightMap,Bt.pointShadowMap.value=W.state.pointShadowMap,Bt.pointShadowMatrix.value=W.state.pointShadowMatrix),Q.currentProgram=Vt,Q.uniformsList=null,Vt}function ah(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=To.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function lh(b,k){const j=nt.get(b);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.batchingColor=k.batchingColor,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.instancingMorph=k.instancingMorph,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function zd(b,k,j,Q,W){k.isScene!==!0&&(k=mt),rt.resetTextureUnits();const dt=k.fog,At=Q.isMeshStandardMaterial?k.environment:null,Nt=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Sr,Dt=(Q.isMeshStandardMaterial?Rt:Ut).get(Q.envMap||At),Ht=Q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Vt=!!j.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Bt=!!j.morphAttributes.position,Zt=!!j.morphAttributes.normal,ie=!!j.morphAttributes.color;let Ee=fi;Q.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ee=v.toneMapping);const pe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,le=pe!==void 0?pe.length:0,zt=nt.get(Q),ge=m.state.lights;if(xt===!0&&(X===!0||b!==E)){const Ve=b===E&&Q.id===M;gt.setState(Q,b,Ve)}let Jt=!1;Q.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==ge.state.version||zt.outputColorSpace!==Nt||W.isBatchedMesh&&zt.batching===!1||!W.isBatchedMesh&&zt.batching===!0||W.isBatchedMesh&&zt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&zt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&zt.instancing===!1||!W.isInstancedMesh&&zt.instancing===!0||W.isSkinnedMesh&&zt.skinning===!1||!W.isSkinnedMesh&&zt.skinning===!0||W.isInstancedMesh&&zt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&zt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&zt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&zt.instancingMorph===!1&&W.morphTexture!==null||zt.envMap!==Dt||Q.fog===!0&&zt.fog!==dt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==gt.numPlanes||zt.numIntersection!==gt.numIntersection)||zt.vertexAlphas!==Ht||zt.vertexTangents!==Vt||zt.morphTargets!==Bt||zt.morphNormals!==Zt||zt.morphColors!==ie||zt.toneMapping!==Ee||zt.morphTargetsCount!==le)&&(Jt=!0):(Jt=!0,zt.__version=Q.version);let en=zt.currentProgram;Jt===!0&&(en=Ls(Q,k,W));let Xi=!1,nn=!1,Or=!1;const ve=en.getUniforms(),hn=zt.uniforms;if(J.useProgram(en.program)&&(Xi=!0,nn=!0,Or=!0),Q.id!==M&&(M=Q.id,nn=!0),Xi||E!==b){J.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ve.setValue(C,"projectionMatrix",b.projectionMatrix),ve.setValue(C,"viewMatrix",b.matrixWorldInverse);const $e=ve.map.cameraPosition;$e!==void 0&&$e.setValue(C,vt.setFromMatrixPosition(b.matrixWorld)),$.logarithmicDepthBuffer&&ve.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&ve.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,nn=!0,Or=!0)}if(W.isSkinnedMesh){ve.setOptional(C,W,"bindMatrix"),ve.setOptional(C,W,"bindMatrixInverse");const Ve=W.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),ve.setValue(C,"boneTexture",Ve.boneTexture,rt))}W.isBatchedMesh&&(ve.setOptional(C,W,"batchingTexture"),ve.setValue(C,"batchingTexture",W._matricesTexture,rt),ve.setOptional(C,W,"batchingIdTexture"),ve.setValue(C,"batchingIdTexture",W._indirectTexture,rt),ve.setOptional(C,W,"batchingColorTexture"),W._colorsTexture!==null&&ve.setValue(C,"batchingColorTexture",W._colorsTexture,rt));const un=j.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&ct.update(W,j,en),(nn||zt.receiveShadow!==W.receiveShadow)&&(zt.receiveShadow=W.receiveShadow,ve.setValue(C,"receiveShadow",W.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(hn.envMap.value=Dt,hn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&k.environment!==null&&(hn.envMapIntensity.value=k.environmentIntensity),nn&&(ve.setValue(C,"toneMappingExposure",v.toneMappingExposure),zt.needsLights&&kd(hn,Or),dt&&Q.fog===!0&&ot.refreshFogUniforms(hn,dt),ot.refreshMaterialUniforms(hn,Q,U,et,m.state.transmissionRenderTarget[b.id]),To.upload(C,ah(zt),hn,rt)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(To.upload(C,ah(zt),hn,rt),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&ve.setValue(C,"center",W.center),ve.setValue(C,"modelViewMatrix",W.modelViewMatrix),ve.setValue(C,"normalMatrix",W.normalMatrix),ve.setValue(C,"modelMatrix",W.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Ve=Q.uniformsGroups;for(let $e=0,na=Ve.length;$e<na;$e++){const Mi=Ve[$e];Xt.update(Mi,en),Xt.bind(Mi,en)}}return en}function kd(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function Hd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,k,j){const Q=nt.get(b);Q.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),nt.get(b.texture).__webglTexture=k,nt.get(b.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:j,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,k){const j=nt.get(b);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0};const Vd=C.createFramebuffer();this.setRenderTarget=function(b,k=0,j=0){D=b,T=k,R=j;let Q=!0,W=null,dt=!1,At=!1;if(b){const Dt=nt.get(b);if(Dt.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(C.FRAMEBUFFER,null),Q=!1;else if(Dt.__webglFramebuffer===void 0)rt.setupRenderTarget(b);else if(Dt.__hasExternalTextures)rt.rebindTextures(b,nt.get(b.texture).__webglTexture,nt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Bt=b.depthTexture;if(Dt.__boundDepthTexture!==Bt){if(Bt!==null&&nt.has(Bt)&&(b.width!==Bt.image.width||b.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(b)}}const Ht=b.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(At=!0);const Vt=nt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Vt[k])?W=Vt[k][j]:W=Vt[k],dt=!0):b.samples>0&&rt.useMultisampledRTT(b)===!1?W=nt.get(b).__webglMultisampledFramebuffer:Array.isArray(Vt)?W=Vt[j]:W=Vt,P.copy(b.viewport),F.copy(b.scissor),O=b.scissorTest}else P.copy(q).multiplyScalar(U).floor(),F.copy(lt).multiplyScalar(U).floor(),O=_t;if(j!==0&&(W=Vd),J.bindFramebuffer(C.FRAMEBUFFER,W)&&Q&&J.drawBuffers(b,W),J.viewport(P),J.scissor(F),J.setScissorTest(O),dt){const Dt=nt.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+k,Dt.__webglTexture,j)}else if(At){const Dt=k;for(let Ht=0;Ht<b.textures.length;Ht++){const Vt=nt.get(b.textures[Ht]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ht,Vt.__webglTexture,j,Dt)}}else if(b!==null&&j!==0){const Dt=nt.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Dt.__webglTexture,j)}M=-1},this.readRenderTargetPixels=function(b,k,j,Q,W,dt,At,Nt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=nt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&At!==void 0&&(Dt=Dt[At]),Dt){J.bindFramebuffer(C.FRAMEBUFFER,Dt);try{const Ht=b.textures[Nt],Vt=Ht.format,Bt=Ht.type;if(!$.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-Q&&j>=0&&j<=b.height-W&&(b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Nt),C.readPixels(k,j,Q,W,Ot.convert(Vt),Ot.convert(Bt),dt))}finally{const Ht=D!==null?nt.get(D).__webglFramebuffer:null;J.bindFramebuffer(C.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(b,k,j,Q,W,dt,At,Nt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=nt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&At!==void 0&&(Dt=Dt[At]),Dt)if(k>=0&&k<=b.width-Q&&j>=0&&j<=b.height-W){J.bindFramebuffer(C.FRAMEBUFFER,Dt);const Ht=b.textures[Nt],Vt=Ht.format,Bt=Ht.type;if(!$.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Zt),C.bufferData(C.PIXEL_PACK_BUFFER,dt.byteLength,C.STREAM_READ),b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Nt),C.readPixels(k,j,Q,W,Ot.convert(Vt),Ot.convert(Bt),0);const ie=D!==null?nt.get(D).__webglFramebuffer:null;J.bindFramebuffer(C.FRAMEBUFFER,ie);const Ee=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await im(C,Ee,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Zt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,dt),C.deleteBuffer(Zt),C.deleteSync(Ee),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,k=null,j=0){const Q=Math.pow(2,-j),W=Math.floor(b.image.width*Q),dt=Math.floor(b.image.height*Q),At=k!==null?k.x:0,Nt=k!==null?k.y:0;rt.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,j,0,0,At,Nt,W,dt),J.unbindTexture()};const Gd=C.createFramebuffer(),Wd=C.createFramebuffer();this.copyTextureToTexture=function(b,k,j=null,Q=null,W=0,dt=null){dt===null&&(W!==0?(ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),dt=W,W=0):dt=0);let At,Nt,Dt,Ht,Vt,Bt,Zt,ie,Ee;const pe=b.isCompressedTexture?b.mipmaps[dt]:b.image;if(j!==null)At=j.max.x-j.min.x,Nt=j.max.y-j.min.y,Dt=j.isBox3?j.max.z-j.min.z:1,Ht=j.min.x,Vt=j.min.y,Bt=j.isBox3?j.min.z:0;else{const un=Math.pow(2,-W);At=Math.floor(pe.width*un),Nt=Math.floor(pe.height*un),b.isDataArrayTexture?Dt=pe.depth:b.isData3DTexture?Dt=Math.floor(pe.depth*un):Dt=1,Ht=0,Vt=0,Bt=0}Q!==null?(Zt=Q.x,ie=Q.y,Ee=Q.z):(Zt=0,ie=0,Ee=0);const le=Ot.convert(k.format),zt=Ot.convert(k.type);let ge;k.isData3DTexture?(rt.setTexture3D(k,0),ge=C.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(rt.setTexture2DArray(k,0),ge=C.TEXTURE_2D_ARRAY):(rt.setTexture2D(k,0),ge=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,k.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,k.unpackAlignment);const Jt=C.getParameter(C.UNPACK_ROW_LENGTH),en=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Xi=C.getParameter(C.UNPACK_SKIP_PIXELS),nn=C.getParameter(C.UNPACK_SKIP_ROWS),Or=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,pe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,pe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ht),C.pixelStorei(C.UNPACK_SKIP_ROWS,Vt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Bt);const ve=b.isDataArrayTexture||b.isData3DTexture,hn=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){const un=nt.get(b),Ve=nt.get(k),$e=nt.get(un.__renderTarget),na=nt.get(Ve.__renderTarget);J.bindFramebuffer(C.READ_FRAMEBUFFER,$e.__webglFramebuffer),J.bindFramebuffer(C.DRAW_FRAMEBUFFER,na.__webglFramebuffer);for(let Mi=0;Mi<Dt;Mi++)ve&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,nt.get(b).__webglTexture,W,Bt+Mi),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,nt.get(k).__webglTexture,dt,Ee+Mi)),C.blitFramebuffer(Ht,Vt,At,Nt,Zt,ie,At,Nt,C.DEPTH_BUFFER_BIT,C.NEAREST);J.bindFramebuffer(C.READ_FRAMEBUFFER,null),J.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||nt.has(b)){const un=nt.get(b),Ve=nt.get(k);J.bindFramebuffer(C.READ_FRAMEBUFFER,Gd),J.bindFramebuffer(C.DRAW_FRAMEBUFFER,Wd);for(let $e=0;$e<Dt;$e++)ve?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,un.__webglTexture,W,Bt+$e):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,un.__webglTexture,W),hn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ve.__webglTexture,dt,Ee+$e):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ve.__webglTexture,dt),W!==0?C.blitFramebuffer(Ht,Vt,At,Nt,Zt,ie,At,Nt,C.COLOR_BUFFER_BIT,C.NEAREST):hn?C.copyTexSubImage3D(ge,dt,Zt,ie,Ee+$e,Ht,Vt,At,Nt):C.copyTexSubImage2D(ge,dt,Zt,ie,Ht,Vt,At,Nt);J.bindFramebuffer(C.READ_FRAMEBUFFER,null),J.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else hn?b.isDataTexture||b.isData3DTexture?C.texSubImage3D(ge,dt,Zt,ie,Ee,At,Nt,Dt,le,zt,pe.data):k.isCompressedArrayTexture?C.compressedTexSubImage3D(ge,dt,Zt,ie,Ee,At,Nt,Dt,le,pe.data):C.texSubImage3D(ge,dt,Zt,ie,Ee,At,Nt,Dt,le,zt,pe):b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,dt,Zt,ie,At,Nt,le,zt,pe.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,dt,Zt,ie,pe.width,pe.height,le,pe.data):C.texSubImage2D(C.TEXTURE_2D,dt,Zt,ie,At,Nt,le,zt,pe);C.pixelStorei(C.UNPACK_ROW_LENGTH,Jt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,en),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Xi),C.pixelStorei(C.UNPACK_SKIP_ROWS,nn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Or),dt===0&&k.generateMipmaps&&C.generateMipmap(ge),J.unbindTexture()},this.initRenderTarget=function(b){nt.get(b).__webglFramebuffer===void 0&&rt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?rt.setTextureCube(b,0):b.isData3DTexture?rt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?rt.setTexture2DArray(b,0):rt.setTexture2D(b,0),J.unbindTexture()},this.resetState=function(){T=0,R=0,D=null,J.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}const wu={type:"change"},zc={type:"start"},Wf={type:"end"},po=new Cs,Cu=new ai,cy=Math.cos(70*em.DEG2RAD),Re=new I,qe=2*Math.PI,oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Wa=1e-6;class hy extends T_{constructor(t,e=null){super(t,e),this.state=oe.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mr.ROTATE,MIDDLE:mr.DOLLY,RIGHT:mr.PAN},this.touches={ONE:ur.ROTATE,TWO:ur.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new zi,this._lastTargetPosition=new I,this._quat=new zi().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new eu,this._sphericalDelta=new eu,this._scale=1,this._panOffset=new I,this._rotateStart=new ht,this._rotateEnd=new ht,this._rotateDelta=new ht,this._panStart=new ht,this._panEnd=new ht,this._panDelta=new ht,this._dollyStart=new ht,this._dollyEnd=new ht,this._dollyDelta=new ht,this._dollyDirection=new I,this._mouse=new ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fy.bind(this),this._onPointerDown=uy.bind(this),this._onPointerUp=dy.bind(this),this._onContextMenu=yy.bind(this),this._onMouseWheel=_y.bind(this),this._onKeyDown=gy.bind(this),this._onTouchStart=vy.bind(this),this._onTouchMove=xy.bind(this),this._onMouseDown=py.bind(this),this._onMouseMove=my.bind(this),this._interceptControlDown=My.bind(this),this._interceptControlUp=Sy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wu),this.update(),this.state=oe.NONE}update(t=null){const e=this.object.position;Re.copy(e).sub(this.target),Re.applyQuaternion(this._quat),this._spherical.setFromVector3(Re),this.autoRotate&&this.state===oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=qe:n>Math.PI&&(n-=qe),r<-Math.PI?r+=qe:r>Math.PI&&(r-=qe),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Re.setFromSpherical(this._spherical),Re.applyQuaternion(this._quatInverse),e.copy(this.target).add(Re),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Re.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Re.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(po.origin.copy(this.object.position),po.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(po.direction))<cy?this.object.lookAt(this.target):(Cu.setFromNormalAndCoplanarPoint(this.object.up,this.target),po.intersectPlane(Cu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Wa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Wa||this._lastTargetPosition.distanceToSquared(this.target)>Wa?(this.dispatchEvent(wu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?qe/60*this.autoRotateSpeed*t:qe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Re.setFromMatrixColumn(e,0),Re.multiplyScalar(-t),this._panOffset.add(Re)}_panUp(t,e){this.screenSpacePanning===!0?Re.setFromMatrixColumn(e,1):(Re.setFromMatrixColumn(e,0),Re.crossVectors(this.object.up,Re)),Re.multiplyScalar(t),this._panOffset.add(Re)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Re.copy(r).sub(this.target);let s=Re.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function uy(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function fy(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function dy(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wf),this.state=oe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function py(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case mr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=oe.DOLLY;break;case mr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=oe.ROTATE}break;case mr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=oe.PAN}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(zc)}function my(i){switch(this.state){case oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function _y(i){this.enabled===!1||this.enableZoom===!1||this.state!==oe.NONE||(i.preventDefault(),this.dispatchEvent(zc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Wf))}function gy(i){this.enabled!==!1&&this._handleKeyDown(i)}function vy(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ur.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=oe.TOUCH_ROTATE;break;case ur.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=oe.TOUCH_PAN;break;default:this.state=oe.NONE}break;case 2:switch(this.touches.TWO){case ur.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=oe.TOUCH_DOLLY_PAN;break;case ur.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=oe.TOUCH_DOLLY_ROTATE;break;default:this.state=oe.NONE}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(zc)}function xy(i){switch(this._trackPointer(i),this.state){case oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=oe.NONE}}function yy(i){this.enabled!==!1&&i.preventDefault()}function My(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Sy(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $n(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Xf(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Tr={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ar={duration:.5,overwrite:!1,delay:0},kc,Fe,_e,gn=1e8,he=1/gn,jl=Math.PI*2,Ey=jl/4,by=0,Yf=Math.sqrt,Ty=Math.cos,Ay=Math.sin,He=function(t){return typeof t=="string"},Te=function(t){return typeof t=="function"},Jn=function(t){return typeof t=="number"},$f=function(t){return typeof t>"u"},On=function(t){return typeof t=="object"},tn=function(t){return t!==!1},Hc=function(){return typeof window<"u"},mo=function(t){return Te(t)||He(t)},qf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ke=Array.isArray,wy=/random\([^)]+\)/g,Cy=/,\s*/g,Ru=/(?:-?\.?\d|\.)+/gi,Ry=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Zf=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Xa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Py=/[+-]=-?[.\d]+/,Dy=/[^,'"\[\]\s]+/gi,Ly=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ye,Rn,Jl,Vc,ln={},ko={},Kf,jf=function(t){return(ko=wr(t,ln))&&Ze},Jf=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},xs=function(t,e){return!e&&console.warn(t)},Qf=function(t,e){return t&&(ln[t]=e)&&ko&&(ko[t]=e)||ln},ys=function(){return 0},Iy={suppressEvents:!0,isStart:!0,kill:!1},Ao={suppressEvents:!0,kill:!1},Uy={suppressEvents:!0},Gc={},di=[],Ql={},td,mn={},Ya={},Pu=30,wo=[],Wc="",Xc=function(t){var e=t[0],n,r;if(On(e)||Te(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(r=wo.length;r--&&!wo[r].targetTest(e););n=wo[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new aM(t[r],n)))||t.splice(r,1);return t},ss=function(t){return t._gsap||Xc(vn(t))[0]._gsap},Ny=function(t,e,n){return(n=t[e])&&Te(n)?t[e]():$f(n)&&t.getAttribute&&t.getAttribute(e)||n},Qn=function(t,e){return(t=t.split(",")).forEach(e)||t},Fy=function(t){return Math.round(t*1e5)/1e5||0},xe=function(t){return Math.round(t*1e7)/1e7||0},ed=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},Oy=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},Ho=function(){var t=di.length,e=di.slice(0),n,r;for(Ql={},di.length=0,n=0;n<t;n++)r=e[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Yc=function(t){return!!(t._initted||t._startAt||t.add)},nd=function(t,e,n,r){di.length&&!Fe&&Ho(),t.render(e,n,r||!!(Fe&&e<0&&Yc(t))),di.length&&!Fe&&Ho()},id=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Dy).length<2?e:He(t)?t.trim():t},rd=function(t){return t},cn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},By=function(t){return function(e,n){for(var r in n)r in e||r==="duration"&&t||r==="ease"||(e[r]=n[r])}},wr=function(t,e){for(var n in e)t[n]=e[n];return t},Du=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=On(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},Vo=function(t,e){var n={},r;for(r in t)r in e||(n[r]=t[r]);return n},os=function(t){var e=t.parent||ye,n=t.keyframes?By(ke(t.keyframes)):cn;if(tn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},zy=function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0},sd=function(t,e,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},Jo=function(t,e,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},mi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ni=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},ky=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},tc=function(t,e,n,r){return t._startAt&&(Fe?t._startAt.revert(Ao):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},Hy=function i(t){return!t||t._ts&&i(t.parent)},Lu=function(t){return t._repeat?Cr(t._tTime,t=t.duration()+t._rDelay)*t:0},Cr=function(t,e){var n=Math.floor(t=xe(t/e));return t&&n===t?n-1:n},Go=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Qo=function(t){return t._end=xe(t._start+(t._tDur/Math.abs(t._ts||t._rts||he)||0))},ta=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=xe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Qo(t),n._dirty||Ni(n,t)),t},od=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Go(t.rawTime(),e),(!e._dur||Ps(0,e.totalDuration(),n)-e._tTime>he)&&e.render(n,!0)),Ni(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-he}},Dn=function(t,e,n,r){return e.parent&&mi(e),e._start=xe((Jn(n)?n:n||t!==ye?dn(t,n,e):t._time)+e._delay),e._end=xe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),sd(t,e,"_first","_last",t._sort?"_start":0),ec(e)||(t._recent=e),r||od(t,e),t._ts<0&&ta(t,t._tTime),t},ad=function(t,e){return(ln.ScrollTrigger||Jf("scrollTrigger",e))&&ln.ScrollTrigger.create(e,t)},ld=function(t,e,n,r,s){if(Zc(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Fe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&td!==bn.frame)return di.push(t),t._lazy=[s,r],1},Vy=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},ec=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Gy=function(t,e,n,r){var s=t.ratio,o=e<0||!e&&(!t._start&&Vy(t)&&!(!t._initted&&ec(t))||(t._ts<0||t._dp._ts<0)&&!ec(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=Ps(0,t._tDur,e),h=Cr(l,a),t._yoyo&&h&1&&(o=1-o),h!==Cr(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Fe||r||t._zTime===he||!e&&t._zTime){if(!t._initted&&ld(t,e,r,n,l))return;for(u=t._zTime,t._zTime=e||(n?he:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&tc(t,e,n,!0),t._onUpdate&&!n&&an(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&an(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&mi(t,1),!n&&!Fe&&(an(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Wy=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},Rr=function(t,e,n,r){var s=t._repeat,o=xe(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:xe(o*(s+1)+t._rDelay*s):o,a>0&&!r&&ta(t,t._tTime=t._tDur*a),t.parent&&Qo(t),n||Ni(t.parent,t),t},Iu=function(t){return t instanceof Xe?Ni(t):Rr(t,t._dur)},Xy={_start:0,endTime:ys,totalDuration:ys},dn=function i(t,e,n){var r=t.labels,s=t._recent||Xy,o=t.duration()>=gn?s.endTime(!1):t._dur,a,l,c;return He(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(ke(n)?n[0]:n).totalDuration()),a>1?i(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},as=function(t,e,n){var r=Jn(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,l;if(r&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=tn(l.vars.inherit)&&l.parent;o.immediateRender=tn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Ce(e[0],o,e[s+1])},xi=function(t,e){return t||t===0?e(t):e},Ps=function(t,e,n){return n<t?t:n>e?e:n},_i=function(t,e){return!He(t)||!(e=Ly.exec(t))?"":e[1]},Yy=function(t,e,n){return xi(n,function(r){return Ps(t,e,r)})},nc=[].slice,cd=function(t,e){return t&&On(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&On(t[0]))&&!t.nodeType&&t!==Rn},$y=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(r){var s;return He(r)&&!e||cd(r,1)?(s=n).push.apply(s,vn(r)):n.push(r)})||n},vn=function(t,e,n){return _e&&!e&&_e.selector?_e.selector(t):He(t)&&!n&&(Jl||!Pr())?nc.call((e||Vc).querySelectorAll(t),0):ke(t)?$y(t,n):cd(t)?nc.call(t,0):t?[t]:[]},ic=function(t){return t=vn(t)[0]||xs("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return vn(e,n.querySelectorAll?n:n===t?xs("Invalid scope")||Vc.createElement("div"):t)}},hd=function(t){return t.sort(function(){return .5-Math.random()})},ud=function(t){if(Te(t))return t;var e=On(t)?t:{each:t},n=Fi(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=e.axis,h=r,u=r;return He(r)?h=u={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(h=r[0],u=r[1]),function(f,d,_){var g=(_||e).length,p=o[g],m,S,y,v,A,T,R,D,M;if(!p){if(M=e.grid==="auto"?0:(e.grid||[1,gn])[1],!M){for(R=-gn;R<(R=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(p=o[g]=[],m=l?Math.min(M,g)*h-.5:r%M,S=M===gn?0:l?g*u/M-.5:r/M|0,R=0,D=gn,T=0;T<g;T++)y=T%M-m,v=S-(T/M|0),p[T]=A=c?Math.abs(c==="y"?v:y):Yf(y*y+v*v),A>R&&(R=A),A<D&&(D=A);r==="random"&&hd(p),p.max=R-D,p.min=D,p.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(r==="edges"?-1:1),p.b=g<0?s-g:s,p.u=_i(e.amount||e.each)||0,n=n&&g<0?yd(n):n}return g=(p[f]-p.min)/p.max||0,xe(p.b+(n?n(g):g)*p.v)+p.u}},rc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=xe(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(Jn(n)?0:_i(n))}},fd=function(t,e){var n=ke(t),r,s;return!n&&On(t)&&(r=n=t.radius||gn,t.values?(t=vn(t.values),(s=!Jn(t[0]))&&(r*=r)):t=rc(t.increment)),xi(e,n?Te(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=gn,h=0,u=t.length,f,d;u--;)s?(f=t[u].x-a,d=t[u].y-l,f=f*f+d*d):f=Math.abs(t[u]-a),f<c&&(c=f,h=u);return h=!r||c<=r?t[h]:o,s||h===o||Jn(o)?h:h+_i(o)}:rc(t))},dd=function(t,e,n,r){return xi(ke(t)?!e:n===!0?!!(n=0):!r,function(){return ke(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*r)/r})},qy=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduce(function(s,o){return o(s)},r)}},Zy=function(t,e){return function(n){return t(parseFloat(n))+(e||_i(n))}},Ky=function(t,e,n){return md(t,e,0,1,n)},pd=function(t,e,n){return xi(n,function(r){return t[~~e(r)]})},jy=function i(t,e,n){var r=e-t;return ke(t)?pd(t,i(0,t.length),e):xi(n,function(s){return(r+(s-t)%r)%r+t})},Jy=function i(t,e,n){var r=e-t,s=r*2;return ke(t)?pd(t,i(0,t.length-1),e):xi(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},$c=function(t){return t.replace(wy,function(e){var n=e.indexOf("[")+1,r=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Cy);return dd(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},md=function(t,e,n,r,s){var o=e-t,a=r-n;return xi(s,function(l){return n+((l-t)/o*a||0)})},Qy=function i(t,e,n,r){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=He(t),a={},l,c,h,u,f;if(n===!0&&(r=1)&&(n=null),o)t={p:t},e={p:e};else if(ke(t)&&!ke(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(i(t[c-1],t[c]));u--,s=function(_){_*=u;var g=Math.min(f,~~_);return h[g](_-g)},n=e}else r||(t=wr(ke(t)?[]:{},t));if(!h){for(l in e)qc.call(a,t,l,"get",e[l]);s=function(_){return jc(_,a)||(o?t.p:t)}}}return xi(n,s)},Uu=function(t,e,n){var r=t.labels,s=gn,o,a,l;for(o in r)a=r[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},an=function(t,e,n){var r=t.vars,s=r[e],o=_e,a=t._ctx,l,c,h;if(s)return l=r[e+"Params"],c=r.callbackScope||t,n&&di.length&&Ho(),a&&(_e=a),h=l?s.apply(c,l):s.call(c),_e=o,h},jr=function(t){return mi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Fe),t.progress()<1&&an(t,"onInterrupt"),t},pr,_d=[],gd=function(t){if(t)if(t=!t.name&&t.default||t,Hc()||t.headless){var e=t.name,n=Te(t),r=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ys,render:jc,add:qc,kill:xM,modifier:vM,rawVars:0},o={targetTest:0,get:0,getSetter:Ad,aliases:{},register:0};if(Pr(),t!==r){if(mn[e])return;cn(r,cn(Vo(t,s),o)),wr(r.prototype,wr(s,Vo(t,o))),mn[r.prop=e]=r,t.targetTest&&(wo.push(r),Gc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Qf(e,r),t.register&&t.register(Ze,r,Fr)}else _d.push(t)},ce=255,Jr={aqua:[0,ce,ce],lime:[0,ce,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ce],navy:[0,0,128],white:[ce,ce,ce],olive:[128,128,0],yellow:[ce,ce,0],orange:[ce,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ce,0,0],pink:[ce,192,203],cyan:[0,ce,ce],transparent:[ce,ce,ce,0]},$a=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ce+.5|0},vd=function(t,e,n){var r=t?Jn(t)?[t>>16,t>>8&ce,t&ce]:0:Jr.black,s,o,a,l,c,h,u,f,d,_;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Jr[t])r=Jr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&ce,r&ce,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&ce,t&ce]}else if(t.substr(0,3)==="hsl"){if(r=_=t.match(Ru),!e)l=+r[0]%360/360,c=+r[1]/100,h=+r[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,r.length>3&&(r[3]*=1),r[0]=$a(l+1/3,s,o),r[1]=$a(l,s,o),r[2]=$a(l-1/3,s,o);else if(~t.indexOf("="))return r=t.match(Ry),n&&r.length<4&&(r[3]=1),r}else r=t.match(Ru)||Jr.transparent;r=r.map(Number)}return e&&!_&&(s=r[0]/ce,o=r[1]/ce,a=r[2]/ce,u=Math.max(s,o,a),f=Math.min(s,o,a),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===s?(o-a)/d+(o<a?6:0):u===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(h*100+.5)),n&&r.length<4&&(r[3]=1),r},xd=function(t){var e=[],n=[],r=-1;return t.split(vr).forEach(function(s){var o=s.match(Zf)||[];e.push.apply(e,o),n.push(r+=o.length+1)}),e.c=n,e},Nu=function(t,e,n){var r="",s=(t+r).match(vr),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return t;if(s=s.map(function(f){return(f=vd(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=xd(t),l=n.c,l.join(r)!==h.c.join(r)))for(c=t.replace(vr,"1").split(Zf),u=c.length-1;a<u;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(vr),u=c.length-1;a<u;a++)r+=c[a]+s[a];return r+c[u]},vr=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Jr)i+="|"+t+"\\b";return new RegExp(i+")","gi")}(),tM=/hsl[a]?\(/,eM=function(t){var e=t.join(" "),n;if(vr.lastIndex=0,vr.test(e))return n=tM.test(e),t[1]=Nu(t[1],n),t[0]=Nu(t[0],n,xd(t[1])),!0},Ms,bn=function(){var i=Date.now,t=500,e=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,h,u,f,d,_=function g(p){var m=i()-r,S=p===!0,y,v,A,T;if((m>t||m<0)&&(n+=m-e),r+=m,A=r-n,y=A-o,(y>0||S)&&(T=++u.frame,f=A-u.time*1e3,u.time=A=A/1e3,o+=y+(y>=s?4:s-y),v=1),S||(l=c(g)),v)for(d=0;d<a.length;d++)a[d](A,f,T,p)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Kf&&(!Jl&&Hc()&&(Rn=Jl=window,Vc=Rn.document||{},ln.gsap=Ze,(Rn.gsapVersions||(Rn.gsapVersions=[])).push(Ze.version),jf(ko||Rn.GreenSockGlobals||!Rn.gsap&&Rn||{}),_d.forEach(gd)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(p){return setTimeout(p,o-u.time*1e3+1|0)},Ms=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Ms=0,c=ys},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),o=u.time*1e3+s},add:function(p,m,S){var y=m?function(v,A,T,R){p(v,A,T,R),u.remove(y)}:p;return u.remove(p),a[S?"unshift":"push"](y),Pr(),y},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},u}(),Pr=function(){return!Ms&&bn.wake()},Kt={},nM=/^[\d.\-M][\d.\-,\s]/,iM=/["']/g,rM=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[r]=isNaN(c)?c.replace(iM,"").trim():+c,r=l.substr(a+1).trim();return e},sM=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},oM=function(t){var e=(t+"").split("("),n=Kt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[rM(e[1])]:sM(t).split(",").map(id)):Kt._CE&&nM.test(t)?Kt._CE("",t):n},yd=function(t){return function(e){return 1-t(1-e)}},Md=function i(t,e){for(var n=t._first,r;n;)n instanceof Xe?i(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?i(n.timeline,e):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=e)),n=n._next},Fi=function(t,e){return t&&(Te(t)?t:Kt[t]||oM(t))||e},Wi=function(t,e,n,r){n===void 0&&(n=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:r},o;return Qn(t,function(a){Kt[a]=ln[a]=s,Kt[o=a.toLowerCase()]=n;for(var l in s)Kt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Kt[a+"."+l]=s[l]}),s},Sd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},qa=function i(t,e,n){var r=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/jl*(Math.asin(1/r)||0),a=function(h){return h===1?1:r*Math.pow(2,-10*h)*Ay((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Sd(a);return s=jl/s,l.config=function(c,h){return i(t,c,h)},l},Za=function i(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Sd(n);return r.config=function(s){return i(t,s)},r};Qn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;Wi(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Kt.Linear.easeNone=Kt.none=Kt.Linear.easeIn;Wi("Elastic",qa("in"),qa("out"),qa());(function(i,t){var e=1/t,n=2*e,r=2.5*e,s=function(a){return a<e?i*a*a:a<n?i*Math.pow(a-1.5/t,2)+.75:a<r?i*(a-=2.25/t)*a+.9375:i*Math.pow(a-2.625/t,2)+.984375};Wi("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Wi("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Wi("Circ",function(i){return-(Yf(1-i*i)-1)});Wi("Sine",function(i){return i===1?1:-Ty(i*Ey)+1});Wi("Back",Za("in"),Za("out"),Za());Kt.SteppedEase=Kt.steps=ln.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,r=t+(e?0:1),s=e?1:0,o=1-he;return function(a){return((r*Ps(0,o,a)|0)+s)*n}}};Ar.ease=Kt["quad.out"];Qn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Wc+=i+","+i+"Params,"});var aM=function(t,e){this.id=by++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Ny,this.set=e?e.getSetter:Ad},Ss=function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Rr(this,+e.duration,1,1),this.data=e.data,_e&&(this._ctx=_e,_e.data.push(this)),Ms||bn.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Rr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(Pr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ta(this,n),!s._dp||s.parent||od(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Dn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===he||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),nd(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Lu(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Lu(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Cr(this._tTime,s)+1:1},t.timeScale=function(n,r){if(!arguments.length)return this._rts===-he?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Go(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-he?0:this._rts,this.totalTime(Ps(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Qo(this),ky(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Pr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==he&&(this._tTime-=he)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=xe(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Dn(r,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(tn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Go(r.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Uy);var r=Fe;return Fe=n,Yc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Fe=r,this},t.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Iu(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Iu(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(dn(this,n),tn(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,tn(r)),this._dur||(this._zTime=-he),this},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-he:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-he,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-he)},t.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},t.then=function(n){var r=this,s=r._prom;return new Promise(function(o){var a=Te(n)?n:rd,l=function(){var h=r.then;r.then=null,s&&s(),Te(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=h),o(a),r.then=h};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},t.kill=function(){jr(this)},i}();cn(Ss.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-he,_prom:0,_ps:!1,_rts:1});var Xe=function(i){Xf(t,i);function t(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=tn(n.sortChildren),ye&&Dn(n.parent||ye,$n(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&ad($n(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return as(0,arguments,this),this},e.from=function(r,s,o){return as(1,arguments,this),this},e.fromTo=function(r,s,o,a){return as(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,os(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ce(r,s,dn(this,o),1),this},e.call=function(r,s,o){return Dn(this,Ce.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Ce(r,o,dn(this,l)),this},e.staggerFrom=function(r,s,o,a,l,c,h){return o.runBackwards=1,os(o).immediateRender=tn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,h)},e.staggerFromTo=function(r,s,o,a,l,c,h,u){return a.startAt=o,os(a).immediateRender=tn(a.immediateRender),this.staggerTo(r,s,a,l,c,h,u)},e.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=r<=0?0:xe(r),u=this._zTime<0!=r<0&&(this._initted||!c),f,d,_,g,p,m,S,y,v,A,T,R;if(this!==ye&&h>l&&r>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,r+=this._time-a),f=h,v=this._start,y=this._ts,m=!y,u&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(f=xe(h%p),h===l?(g=this._repeat,f=c):(A=xe(h/p),g=~~A,g&&g===A&&(f=c,g--),f>c&&(f=c)),A=Cr(this._tTime,p),!a&&this._tTime&&A!==g&&this._tTime-A*p-this._dur<=0&&(A=g),T&&g&1&&(f=c-f,R=1),g!==A&&!this._lock){var D=T&&A&1,M=D===(T&&g&1);if(g<A&&(D=!D),a=D?0:h%c?c:h,this._lock=1,this.render(a||(R?0:xe(g*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&an(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1,A=g),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=D?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Md(this,R)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Wy(this,xe(a),xe(f)),S&&(h-=f-(f=S._start))),this._tTime=h,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&c&&!s&&!A&&(an(this,"onStart"),this._tTime!==h))return this;if(f>=a&&r>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!m){S=0,_&&(h+=this._zTime=-he);break}}d=_}else{d=this._last;for(var E=r<0?r:f;d;){if(_=d._prev,(d._act||E<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(E-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(E-d._start)*d._ts,s,o||Fe&&Yc(d)),f!==this._time||!this._ts&&!m){S=0,_&&(h+=this._zTime=E?-he:he);break}}d=_}}if(S&&!s&&(this.pause(),S.render(f>=a?0:-he)._zTime=f>=a?1:-1,this._ts))return this._start=v,Qo(this),this.render(r,s,o);this._onUpdate&&!s&&an(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&mi(this,1),!s&&!(r<0&&!a)&&(h||a||!l)&&(an(this,h===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(Jn(s)||(s=dn(this,s,r)),!(r instanceof Ss)){if(ke(r))return r.forEach(function(a){return o.add(a,s)}),this;if(He(r))return this.addLabel(r,s);if(Te(r))r=Ce.delayedCall(0,r);else return this}return this!==r?Dn(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-gn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ce?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return He(r)?this.removeLabel(r):Te(r)?this.killTweensOf(r):(r.parent===this&&Jo(this,r),r===this._recent&&(this._recent=this._last),Ni(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=xe(bn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=dn(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=Ce.delayedCall(0,s||ys,o);return a.data="isPause",this._hasPause=1,Dn(this,a,dn(this,r))},e.removePause=function(r){var s=this._first;for(r=dn(this,r);s;)s._start===r&&s.data==="isPause"&&mi(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)ci!==a[l]&&a[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=vn(r),l=this._first,c=Jn(s),h;l;)l instanceof Ce?Oy(l._targets,a)&&(c?(!ci||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=dn(o,r),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,_=Ce.to(o,cn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||he,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&Rr(_,p,0,1).render(_._time,!0,!0),d=1}h&&h.apply(_,u||[])}},s));return f?_.render(0):_},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,cn({startAt:{time:dn(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),Uu(this,dn(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),Uu(this,dn(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+he)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=xe(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Ni(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ni(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,l=gn,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Dn(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=xe(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Rr(o,o===ye&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(ye._ts&&(nd(ye,Go(r,ye)),td=bn.frame),bn.frame>=Pu){Pu+=Tr.autoSleep||120;var s=ye._first;if((!s||!s._ts)&&Tr.autoSleep&&bn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||bn.sleep()}}},t}(Ss);cn(Xe.prototype,{_lock:0,_hasPause:0,_forcing:0});var lM=function(t,e,n,r,s,o,a){var l=new Fr(this._pt,t,e,0,1,gM,null,s),c=0,h=0,u,f,d,_,g,p,m,S;for(l.b=n,l.e=r,n+="",r+="",(m=~r.indexOf("random("))&&(r=$c(r)),o&&(S=[n,r],o(S,t,e),n=S[0],r=S[1]),f=n.match(Xa)||[];u=Xa.exec(r);)_=u[0],g=r.substring(c,u.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[h++]&&(p=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:p,c:_.charAt(1)==="="?ed(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=Xa.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Py.test(r)||m)&&(l.e=0),this._pt=l,l},qc=function(t,e,n,r,s,o,a,l,c,h){Te(r)&&(r=r(s||0,t,o));var u=t[e],f=n!=="get"?n:Te(u)?c?t[e.indexOf("set")||!Te(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,d=Te(u)?c?pM:Td:Kc,_;if(He(r)&&(~r.indexOf("random(")&&(r=$c(r)),r.charAt(1)==="="&&(_=ed(f,r)+(_i(f)||0),(_||_===0)&&(r=_))),!h||f!==r||sc)return!isNaN(f*r)&&r!==""?(_=new Fr(this._pt,t,e,+f||0,r-(f||0),typeof u=="boolean"?_M:wd,0,d),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!u&&!(e in t)&&Jf(e,r),lM.call(this,t,e,f,r,d,l||Tr.stringFilter,c))},cM=function(t,e,n,r,s){if(Te(t)&&(t=ls(t,s,e,n,r)),!On(t)||t.style&&t.nodeType||ke(t)||qf(t))return He(t)?ls(t,s,e,n,r):t;var o={},a;for(a in t)o[a]=ls(t[a],s,e,n,r);return o},hM=function(t,e,n,r,s,o){var a,l,c,h;if(mn[t]&&(a=new mn[t]).init(s,a.rawVars?e[t]:cM(e[t],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new Fr(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==pr))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},ci,sc,Zc=function i(t,e,n){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,h=r.runBackwards,u=r.yoyoEase,f=r.keyframes,d=r.autoRevert,_=t._dur,g=t._startAt,p=t._targets,m=t.parent,S=m&&m.data==="nested"?m.vars.targets:p,y=t._overwrite==="auto"&&!kc,v=t.timeline,A,T,R,D,M,E,P,F,O,G,L,B,et;if(v&&(!f||!s)&&(s="none"),t._ease=Fi(s,Ar.ease),t._yEase=u?yd(Fi(u===!0?s:u,Ar.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!v&&!!r.runBackwards,!v||f&&!r.stagger){if(F=p[0]?ss(p[0]).harness:0,B=F&&r[F.prop],A=Vo(r,Gc),g&&(g._zTime<0&&g.progress(1),e<0&&h&&a&&!d?g.render(-1,!0):g.revert(h&&_?Ao:Iy),g._lazy=0),o){if(mi(t._startAt=Ce.set(p,cn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&tn(l),startAt:null,delay:0,onUpdate:c&&function(){return an(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Fe||!a&&!d)&&t._startAt.revert(Ao),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(a=!1),R=cn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&tn(l),immediateRender:a,stagger:0,parent:m},A),B&&(R[F.prop]=B),mi(t._startAt=Ce.set(p,R)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Fe?t._startAt.revert(Ao):t._startAt.render(-1,!0)),t._zTime=e,!a)i(t._startAt,he,he);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&tn(l)||l&&!_,T=0;T<p.length;T++){if(M=p[T],P=M._gsap||Xc(p)[T]._gsap,t._ptLookup[T]=G={},Ql[P.id]&&di.length&&Ho(),L=S===p?T:S.indexOf(M),F&&(O=new F).init(M,B||A,t,L,S)!==!1&&(t._pt=D=new Fr(t._pt,M,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(U){G[U]=D}),O.priority&&(E=1)),!F||B)for(R in A)mn[R]&&(O=hM(R,A,t,L,M,S))?O.priority&&(E=1):G[R]=D=qc.call(t,M,R,"get",A[R],L,S,0,r.stringFilter);t._op&&t._op[T]&&t.kill(M,t._op[T]),y&&t._pt&&(ci=t,ye.killTweensOf(M,G,t.globalTime(e)),et=!t.parent,ci=0),t._pt&&l&&(Ql[P.id]=1)}E&&MM(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!et,f&&e<=0&&v.render(gn,!0,!0)},uM=function(t,e,n,r,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(h=f[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return sc=1,t.vars[e]="+=0",Zc(t,a),sc=0,l?xs(e+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(r||r===0)&&!s?r:h.s+(r||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Fy(n)+_i(u.e)),u.b&&(u.b=h.s+_i(u.b))},fM=function(t,e){var n=t[0]?ss(t[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return e;s=wr({},e);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},dM=function(t,e,n,r){var s=e.ease||r||"power1.inOut",o,a;if(ke(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},ls=function(t,e,n,r,s){return Te(t)?t.call(e,n,r,s):He(t)&&~t.indexOf("random(")?$c(t):t},Ed=Wc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",bd={};Qn(Ed+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return bd[i]=1});var Ce=function(i){Xf(t,i);function t(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:os(r))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,S=r.parent||ye,y=(ke(n)||qf(n)?Jn(n[0]):"length"in r)?[n]:vn(n),v,A,T,R,D,M,E,P;if(a._targets=y.length?Xc(y):xs("GSAP target "+n+" not found. https://gsap.com",!Tr.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||mo(c)||mo(h)){if(r=a.vars,v=a.timeline=new Xe({data:"nested",defaults:g||{},targets:S&&S.data==="nested"?S.vars.targets:y}),v.kill(),v.parent=v._dp=$n(a),v._start=0,f||mo(c)||mo(h)){if(R=y.length,E=f&&ud(f),On(f))for(D in f)~Ed.indexOf(D)&&(P||(P={}),P[D]=f[D]);for(A=0;A<R;A++)T=Vo(r,bd),T.stagger=0,m&&(T.yoyoEase=m),P&&wr(T,P),M=y[A],T.duration=+ls(c,$n(a),A,M,y),T.delay=(+ls(h,$n(a),A,M,y)||0)-a._delay,!f&&R===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),v.to(M,T,E?E(A,M,y):0),v._ease=Kt.none;v.duration()?c=h=0:a.timeline=0}else if(_){os(cn(v.vars.defaults,{ease:"none"})),v._ease=Fi(_.ease||r.ease||"none");var F=0,O,G,L;if(ke(_))_.forEach(function(B){return v.to(y,B,">")}),v.duration();else{T={};for(D in _)D==="ease"||D==="easeEach"||dM(D,_[D],T,_.easeEach);for(D in T)for(O=T[D].sort(function(B,et){return B.t-et.t}),F=0,A=0;A<O.length;A++)G=O[A],L={ease:G.e,duration:(G.t-(A?O[A-1].t:0))/100*c},L[D]=G.v,v.to(y,L,F),F+=L.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!kc&&(ci=$n(a),ye.killTweensOf(y),ci=0),Dn(S,$n(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(u||!c&&!_&&a._start===xe(S._time)&&tn(u)&&Hy($n(a))&&S.data!=="nested")&&(a._tTime=-he,a.render(Math.max(0,-h)||0)),p&&ad($n(a),p),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,h=r<0,u=r>l-he&&!h?l:r<he?0:r,f,d,_,g,p,m,S,y,v;if(!c)Gy(this,r,s,o);else if(u!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+r,s,o);if(f=xe(u%g),u===l?(_=this._repeat,f=c):(p=xe(u/g),_=~~p,_&&_===p?(f=c,_--):f>c&&(f=c)),m=this._yoyo&&_&1,m&&(v=this._yEase,f=c-f),p=Cr(this._tTime,g),f===a&&!o&&this._initted&&_===p)return this._tTime=u,this;_!==p&&(y&&this._yEase&&Md(y,m),this.vars.repeatRefresh&&!m&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(xe(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(ld(this,h?r:f,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(v||this._ease)(f/c),this._from&&(this.ratio=S=1-S),!a&&u&&!s&&!p&&(an(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;y&&y.render(r<0?r:y._dur*y._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(h&&tc(this,r,s,o),an(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&an(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&tc(this,r,!0,!0),(r||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&mi(this,1),!s&&!(h&&!a)&&(u||a||m)&&(an(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a,l){Ms||bn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Zc(this,c),h=this._ease(c/this._dur),uM(this,r,s,o,a,h,c,l)?this.resetTo(r,s,o,a,1):(ta(this,0),this.parent||sd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?jr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Fe),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ci&&ci.vars.overwrite!==!0)._first||jr(this),this.parent&&o!==this.timeline.totalDuration()&&Rr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?vn(r):a,c=this._ptLookup,h=this._pt,u,f,d,_,g,p,m;if((!s||s==="all")&&zy(a,l))return s==="all"&&(this._pt=0),jr(this);for(u=this._op=this._op||[],s!=="all"&&(He(s)&&(g={},Qn(s,function(S){return g[S]=1}),s=g),s=fM(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(u[m]=s,_=f,d={}):(d=u[m]=u[m]||{},_=s);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Jo(this,p,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&h&&jr(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return as(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return as(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return ye.killTweensOf(r,s,o)},t}(Ss);cn(Ce.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Qn("staggerTo,staggerFrom,staggerFromTo",function(i){Ce[i]=function(){var t=new Xe,e=nc.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var Kc=function(t,e,n){return t[e]=n},Td=function(t,e,n){return t[e](n)},pM=function(t,e,n,r){return t[e](r.fp,n)},mM=function(t,e,n){return t.setAttribute(e,n)},Ad=function(t,e){return Te(t[e])?Td:$f(t[e])&&t.setAttribute?mM:Kc},wd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},_M=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},gM=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},jc=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},vM=function(t,e,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,n),s=o},xM=function(t){for(var e=this._pt,n,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?Jo(this,e,"_pt"):e.dep||(n=1),e=r;return!n},yM=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},MM=function(t){for(var e=t._pt,n,r,s,o;e;){for(n=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=n}t._pt=s},Fr=function(){function i(e,n,r,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||wd,this.d=l||this,this.set=c||Kc,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=yM,this.m=n,this.mt=s,this.tween=r},i}();Qn(Wc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Gc[i]=1});ln.TweenMax=ln.TweenLite=Ce;ln.TimelineLite=ln.TimelineMax=Xe;ye=new Xe({sortChildren:!1,defaults:Ar,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Tr.stringFilter=eM;var Oi=[],Co={},SM=[],Fu=0,EM=0,Ka=function(t){return(Co[t]||SM).map(function(e){return e()})},oc=function(){var t=Date.now(),e=[];t-Fu>2&&(Ka("matchMediaInit"),Oi.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=Rn.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Ka("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Fu=t,Ka("matchMedia"))},Cd=function(){function i(e,n){this.selector=n&&ic(n),this.data=[],this._r=[],this.isReverted=!1,this.id=EM++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,r,s){Te(n)&&(s=r,r=n,n=Te);var o=this,a=function(){var c=_e,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=ic(s)),_e=o,u=r.apply(o,arguments),Te(u)&&o._r.push(u),_e=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Te?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var r=_e;_e=null,n(this),_e=r},t.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Ce&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,r){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Xe?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ce)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Oi.length;o--;)Oi[o].id===this.id&&Oi.splice(o,1)},t.revert=function(n){this.kill(n||{})},i}(),bM=function(){function i(e){this.contexts=[],this.scope=e,_e&&_e.data.push(this)}var t=i.prototype;return t.add=function(n,r,s){On(n)||(n={matches:n});var o=new Cd(0,s||this.scope),a=o.conditions={},l,c,h;_e&&!o.selector&&(o.selector=_e.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?h=1:(l=Rn.matchMedia(n[c]),l&&(Oi.indexOf(o)<0&&Oi.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(oc):l.addEventListener("change",oc)));return h&&r(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),Wo={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(r){return gd(r)})},timeline:function(t){return new Xe(t)},getTweensOf:function(t,e){return ye.getTweensOf(t,e)},getProperty:function(t,e,n,r){He(t)&&(t=vn(t)[0]);var s=ss(t||{}).get,o=n?rd:id;return n==="native"&&(n=""),t&&(e?o((mn[e]&&mn[e].get||s)(t,e,n,r)):function(a,l,c){return o((mn[a]&&mn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=vn(t),t.length>1){var r=t.map(function(h){return Ze.quickSetter(h,e,n)}),s=r.length;return function(h){for(var u=s;u--;)r[u](h)}}t=t[0]||{};var o=mn[e],a=ss(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;pr._pt=0,u.init(t,n?h+n:h,pr,0,[t]),u.render(1,u),pr._pt&&jc(1,pr)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var r,s=Ze.to(t,cn((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return ye.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Fi(t.ease,Ar.ease)),Du(Ar,t||{})},config:function(t){return Du(Tr,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!mn[a]&&!ln[a]&&xs(e+" effect requires "+a+" plugin.")}),Ya[e]=function(a,l,c){return n(vn(a),cn(l||{},s),c)},o&&(Xe.prototype[e]=function(a,l,c){return this.add(Ya[e](a,On(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Kt[t]=Fi(e)},parseEase:function(t,e){return arguments.length?Fi(t,e):Kt},getById:function(t){return ye.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Xe(t),r,s;for(n.smoothChildTiming=tn(t.smoothChildTiming),ye.remove(n),n._dp=0,n._time=n._tTime=ye._time,r=ye._first;r;)s=r._next,(e||!(!r._dur&&r instanceof Ce&&r.vars.onComplete===r._targets[0]))&&Dn(n,r,r._start-r._delay),r=s;return Dn(ye,n,0),n},context:function(t,e){return t?new Cd(t,e):_e},matchMedia:function(t){return new bM(t)},matchMediaRefresh:function(){return Oi.forEach(function(t){var e=t.conditions,n,r;for(r in e)e[r]&&(e[r]=!1,n=1);n&&t.revert()})||oc()},addEventListener:function(t,e){var n=Co[t]||(Co[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Co[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:jy,wrapYoyo:Jy,distribute:ud,random:dd,snap:fd,normalize:Ky,getUnit:_i,clamp:Yy,splitColor:vd,toArray:vn,selector:ic,mapRange:md,pipe:qy,unitize:Zy,interpolate:Qy,shuffle:hd},install:jf,effects:Ya,ticker:bn,updateRoot:Xe.updateRoot,plugins:mn,globalTimeline:ye,core:{PropTween:Fr,globals:Qf,Tween:Ce,Timeline:Xe,Animation:Ss,getCache:ss,_removeLinkedListItem:Jo,reverting:function(){return Fe},context:function(t){return t&&_e&&(_e.data.push(t),t._ctx=_e),_e},suppressOverwrites:function(t){return kc=t}}};Qn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Wo[i]=Ce[i]});bn.add(Xe.updateRoot);pr=Wo.to({},{duration:0});var TM=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},AM=function(t,e){var n=t._targets,r,s,o;for(r in e)for(s=n.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=TM(o,r)),o&&o.modifier&&o.modifier(e[r],t,n[s],r))},ja=function(t,e){return{name:t,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(He(s)&&(l={},Qn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}AM(a,s)}}}},Ze=Wo.registerPlugin({name:"attr",init:function(t,e,n,r,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Fe?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ja("roundProps",rc),ja("modifiers"),ja("snap",fd))||Wo;Ce.version=Xe.version=Ze.version="3.14.2";Kf=1;Hc()&&Pr();Kt.Power0;Kt.Power1;Kt.Power2;Kt.Power3;Kt.Power4;Kt.Linear;Kt.Quad;Kt.Cubic;Kt.Quart;Kt.Quint;Kt.Strong;Kt.Elastic;Kt.Back;Kt.SteppedEase;Kt.Bounce;Kt.Sine;Kt.Expo;Kt.Circ;/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class Un{constructor(t,e,n,r,s="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),Un.nextNameID=Un.nextNameID||0,this.$name.id="lil-gui-name-"+ ++Un.nextNameID,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled||(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t)),this}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class wM extends Un{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function ac(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),!!e&&"#"+e}const CM={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:ac,toHexString:ac},Es={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},RM={isPrimitive:!1,match:Array.isArray,fromHexString(i,t,e=1){const n=Es.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(255&n)/255*e},toHexString:([i,t,e],n=1)=>Es.toHexString(i*(n=255/n)<<16^t*n<<8^e*n<<0)},PM={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=Es.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(255&n)/255*e},toHexString:({r:i,g:t,b:e},n=1)=>Es.toHexString(i*(n=255/n)<<16^t*n<<8^e*n<<0)},DM=[CM,Es,RM,PM];class LM extends Un{constructor(t,e,n,r){var s;super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(s=this.initialValue,DM.find(o=>o.match(s))),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const o=ac(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ja extends Un{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class IM extends Un{constructor(t,e,n,r,s,o){super(t,e,n,"number"),this._initInput(),this.min(r),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=100*e+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=h=>{const u=parseFloat(this.$input.value);isNaN(u)||(this._snapClampSetValue(u+h),this.$input.value=this.getValue())};let e,n,r,s,o,a=!1;const l=h=>{if(a){const u=h.clientX-e,f=h.clientY-n;Math.abs(f)>5?(h.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(u)>5&&c()}if(!a){const u=h.clientY-r;o-=u*this._step*this._arrowKeyMultiplier(h),s+o>this._max?o=this._max-s:s+o<this._min&&(o=this._min-s),this._snapClampSetValue(s+o)}r=h.clientY},c=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c)};this.$input.addEventListener("input",()=>{let h=parseFloat(this.$input.value);isNaN(h)||(this._stepExplicit&&(h=this._snap(h)),this.setValue(this._clamp(h)))}),this.$input.addEventListener("keydown",h=>{h.code==="Enter"&&this.$input.blur(),h.code==="ArrowUp"&&(h.preventDefault(),t(this._step*this._arrowKeyMultiplier(h))),h.code==="ArrowDown"&&(h.preventDefault(),t(this._step*this._arrowKeyMultiplier(h)*-1))}),this.$input.addEventListener("wheel",h=>{this._inputFocused&&(h.preventDefault(),t(this._step*this._normalizeMouseWheel(h)))},{passive:!1}),this.$input.addEventListener("mousedown",h=>{e=h.clientX,n=r=h.clientY,a=!0,s=this.getValue(),o=0,window.addEventListener("mousemove",l),window.addEventListener("mouseup",c)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=f=>{const d=this.$slider.getBoundingClientRect();let _=(g=f,p=d.left,m=d.right,S=this._min,y=this._max,(g-p)/(m-p)*(y-S)+S);var g,p,m,S,y;this._snapClampSetValue(_)},e=f=>{t(f.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",n)};let r,s,o=!1;const a=f=>{f.preventDefault(),this._setDraggingStyle(!0),t(f.touches[0].clientX),o=!1},l=f=>{if(o){const d=f.touches[0].clientX-r,_=f.touches[0].clientY-s;Math.abs(d)>Math.abs(_)?a(f):(window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c))}else f.preventDefault(),t(f.touches[0].clientX)},c=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c)},h=this._callOnFinishChange.bind(this);let u;this.$slider.addEventListener("mousedown",f=>{this._setDraggingStyle(!0),t(f.clientX),window.addEventListener("mousemove",e),window.addEventListener("mouseup",n)}),this.$slider.addEventListener("touchstart",f=>{f.touches.length>1||(this._hasScrollBar?(r=f.touches[0].clientX,s=f.touches[0].clientY,o=!0):a(f),window.addEventListener("touchmove",l,{passive:!1}),window.addEventListener("touchend",c))},{passive:!1}),this.$slider.addEventListener("wheel",f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const d=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+d),this.$input.value=this.getValue(),clearTimeout(u),u=setTimeout(h,400)},{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle("lil-gui-"+e,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class UM extends Un{constructor(t,e,n,r){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(s=>{const o=document.createElement("option");o.innerHTML=s,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class NM extends Un{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let Ou=!1;class Jc{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:r,title:s="Controls",injectStyles:o=!0,touchStyles:a=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{l.code!=="Enter"&&l.code!=="Space"||(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),a&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!Ou&&o&&(function(l){const c=document.createElement("style");c.innerHTML=l;const h=document.querySelector("head link[rel=stylesheet], head style");h?document.head.insertBefore(c,h):document.head.appendChild(c)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),Ou=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(t,e,n,r,s){if(Object(n)===n)return new UM(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new IM(this,t,e,n,r,s);case"boolean":return new wM(this,t,e);case"string":return new NM(this,t,e);case"function":return new Ja(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new LM(this,t,e,n)}addFolder(t){return new Jc({parent:this,title:t})}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof Ja||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Ja)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const FM=Jc;class Rd{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){const e=this._partials;let n=0;for(let r=0;r<this._n&&r<32;r++){const s=e[r],o=t+s,a=Math.abs(t)<Math.abs(s)?t-(o-s):s-(o-t);a&&(e[n++]=a),t=o}return e[n]=t,this._n=n+1,this}valueOf(){const t=this._partials;let e=this._n,n,r,s,o=0;if(e>0){for(o=t[--e];e>0&&(n=o,r=t[--e],o=n+r,s=r-(o-n),!s););e>0&&(s<0&&t[e-1]<0||s>0&&t[e-1]>0)&&(r=s*2,n=o+r,r==n-o&&(o=n))}return o}}function*OM(i){for(const t of i)yield*t}function Pd(i){return Array.from(OM(i))}function BM(i,t){return i=+i,t=+t,function(e){return i*(1-e)+t*e}}var fe=1e-6,zM=1e-12,jt=Math.PI,Je=jt/2,Bu=jt/4,xn=jt*2,Ne=180/jt,se=jt/180,Se=Math.abs,Dd=Math.atan,gi=Math.atan2,ae=Math.cos,kM=Math.exp,HM=Math.log,te=Math.sin,VM=Math.sign||function(i){return i>0?1:i<0?-1:0},Vi=Math.sqrt,GM=Math.tan;function WM(i){return i>1?0:i<-1?jt:Math.acos(i)}function Dr(i){return i>1?Je:i<-1?-Je:Math.asin(i)}function zu(i){return(i=te(i/2))*i}function Tn(){}function Xo(i,t){i&&Hu.hasOwnProperty(i.type)&&Hu[i.type](i,t)}var ku={Feature:function(i,t){Xo(i.geometry,t)},FeatureCollection:function(i,t){for(var e=i.features,n=-1,r=e.length;++n<r;)Xo(e[n].geometry,t)}},Hu={Sphere:function(i,t){t.sphere()},Point:function(i,t){i=i.coordinates,t.point(i[0],i[1],i[2])},MultiPoint:function(i,t){for(var e=i.coordinates,n=-1,r=e.length;++n<r;)i=e[n],t.point(i[0],i[1],i[2])},LineString:function(i,t){lc(i.coordinates,t,0)},MultiLineString:function(i,t){for(var e=i.coordinates,n=-1,r=e.length;++n<r;)lc(e[n],t,0)},Polygon:function(i,t){Vu(i.coordinates,t)},MultiPolygon:function(i,t){for(var e=i.coordinates,n=-1,r=e.length;++n<r;)Vu(e[n],t)},GeometryCollection:function(i,t){for(var e=i.geometries,n=-1,r=e.length;++n<r;)Xo(e[n],t)}};function lc(i,t,e){var n=-1,r=i.length-e,s;for(t.lineStart();++n<r;)s=i[n],t.point(s[0],s[1],s[2]);t.lineEnd()}function Vu(i,t){var e=-1,n=i.length;for(t.polygonStart();++e<n;)lc(i[e],t,1);t.polygonEnd()}function Ld(i,t){i&&ku.hasOwnProperty(i.type)?ku[i.type](i,t):Xo(i,t)}function cc(i){return[gi(i[1],i[0]),Dr(i[2])]}function Lr(i){var t=i[0],e=i[1],n=ae(e);return[n*ae(t),n*te(t),te(e)]}function _o(i,t){return i[0]*t[0]+i[1]*t[1]+i[2]*t[2]}function Yo(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function Qa(i,t){i[0]+=t[0],i[1]+=t[1],i[2]+=t[2]}function go(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function hc(i){var t=Vi(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);i[0]/=t,i[1]/=t,i[2]/=t}function uc(i,t){function e(n,r){return n=i(n,r),t(n[0],n[1])}return i.invert&&t.invert&&(e.invert=function(n,r){return n=t.invert(n,r),n&&i.invert(n[0],n[1])}),e}function fc(i,t){return Se(i)>jt&&(i-=Math.round(i/xn)*xn),[i,t]}fc.invert=fc;function Id(i,t,e){return(i%=xn)?t||e?uc(Wu(i),Xu(t,e)):Wu(i):t||e?Xu(t,e):fc}function Gu(i){return function(t,e){return t+=i,Se(t)>jt&&(t-=Math.round(t/xn)*xn),[t,e]}}function Wu(i){var t=Gu(i);return t.invert=Gu(-i),t}function Xu(i,t){var e=ae(i),n=te(i),r=ae(t),s=te(t);function o(a,l){var c=ae(l),h=ae(a)*c,u=te(a)*c,f=te(l),d=f*e+h*n;return[gi(u*r-d*s,h*e-f*n),Dr(d*r+u*s)]}return o.invert=function(a,l){var c=ae(l),h=ae(a)*c,u=te(a)*c,f=te(l),d=f*r-u*s;return[gi(u*r+f*s,h*e+d*n),Dr(d*e-h*n)]},o}function XM(i){i=Id(i[0]*se,i[1]*se,i.length>2?i[2]*se:0);function t(e){return e=i(e[0]*se,e[1]*se),e[0]*=Ne,e[1]*=Ne,e}return t.invert=function(e){return e=i.invert(e[0]*se,e[1]*se),e[0]*=Ne,e[1]*=Ne,e},t}function YM(i,t,e,n,r,s){if(e){var o=ae(t),a=te(t),l=n*e;r==null?(r=t+n*xn,s=t-l/2):(r=Yu(o,r),s=Yu(o,s),(n>0?r<s:r>s)&&(r+=n*xn));for(var c,h=r;n>0?h>s:h<s;h-=l)c=cc([o,-a*ae(h),-a*te(h)]),i.point(c[0],c[1])}}function Yu(i,t){t=Lr(t),t[0]-=i,hc(t);var e=WM(-t[1]);return((-t[2]<0?-e:e)+xn-fe)%xn}function Ud(){var i=[],t;return{point:function(e,n,r){t.push([e,n,r])},lineStart:function(){i.push(t=[])},lineEnd:Tn,rejoin:function(){i.length>1&&i.push(i.pop().concat(i.shift()))},result:function(){var e=i;return i=[],t=null,e}}}function Ro(i,t){return Se(i[0]-t[0])<fe&&Se(i[1]-t[1])<fe}function vo(i,t,e,n){this.x=i,this.z=t,this.o=e,this.e=n,this.v=!1,this.n=this.p=null}function Nd(i,t,e,n,r){var s=[],o=[],a,l;if(i.forEach(function(_){if(!((g=_.length-1)<=0)){var g,p=_[0],m=_[g],S;if(Ro(p,m)){if(!p[2]&&!m[2]){for(r.lineStart(),a=0;a<g;++a)r.point((p=_[a])[0],p[1]);r.lineEnd();return}m[0]+=2*fe}s.push(S=new vo(p,_,null,!0)),o.push(S.o=new vo(p,null,S,!1)),s.push(S=new vo(m,_,null,!1)),o.push(S.o=new vo(m,null,S,!0))}}),!!s.length){for(o.sort(t),$u(s),$u(o),a=0,l=o.length;a<l;++a)o[a].e=e=!e;for(var c=s[0],h,u;;){for(var f=c,d=!0;f.v;)if((f=f.n)===c)return;h=f.z,r.lineStart();do{if(f.v=f.o.v=!0,f.e){if(d)for(a=0,l=h.length;a<l;++a)r.point((u=h[a])[0],u[1]);else n(f.x,f.n.x,1,r);f=f.n}else{if(d)for(h=f.p.z,a=h.length-1;a>=0;--a)r.point((u=h[a])[0],u[1]);else n(f.x,f.p.x,-1,r);f=f.p}f=f.o,h=f.z,d=!d}while(!f.v);r.lineEnd()}}}function $u(i){if(t=i.length){for(var t,e=0,n=i[0],r;++e<t;)n.n=r=i[e],r.p=n,n=r;n.n=r=i[0],r.p=n}}function tl(i){return Se(i[0])<=jt?i[0]:VM(i[0])*((Se(i[0])+jt)%xn-jt)}function $M(i,t){var e=tl(t),n=t[1],r=te(n),s=[te(e),-ae(e),0],o=0,a=0,l=new Rd;r===1?n=Je+fe:r===-1&&(n=-Je-fe);for(var c=0,h=i.length;c<h;++c)if(f=(u=i[c]).length)for(var u,f,d=u[f-1],_=tl(d),g=d[1]/2+Bu,p=te(g),m=ae(g),S=0;S<f;++S,_=v,p=T,m=R,d=y){var y=u[S],v=tl(y),A=y[1]/2+Bu,T=te(A),R=ae(A),D=v-_,M=D>=0?1:-1,E=M*D,P=E>jt,F=p*T;if(l.add(gi(F*M*te(E),m*R+F*ae(E))),o+=P?D+M*xn:D,P^_>=e^v>=e){var O=Yo(Lr(d),Lr(y));hc(O);var G=Yo(s,O);hc(G);var L=(P^D>=0?-1:1)*Dr(G[2]);(n>L||n===L&&(O[0]||O[1]))&&(a+=P^D>=0?1:-1)}}return(o<-fe||o<fe&&l<-zM)^a&1}function Fd(i,t,e,n){return function(r){var s=t(r),o=Ud(),a=t(o),l=!1,c,h,u,f={point:d,lineStart:g,lineEnd:p,polygonStart:function(){f.point=m,f.lineStart=S,f.lineEnd=y,h=[],c=[]},polygonEnd:function(){f.point=d,f.lineStart=g,f.lineEnd=p,h=Pd(h);var v=$M(c,n);h.length?(l||(r.polygonStart(),l=!0),Nd(h,ZM,v,e,r)):v&&(l||(r.polygonStart(),l=!0),r.lineStart(),e(null,null,1,r),r.lineEnd()),l&&(r.polygonEnd(),l=!1),h=c=null},sphere:function(){r.polygonStart(),r.lineStart(),e(null,null,1,r),r.lineEnd(),r.polygonEnd()}};function d(v,A){i(v,A)&&r.point(v,A)}function _(v,A){s.point(v,A)}function g(){f.point=_,s.lineStart()}function p(){f.point=d,s.lineEnd()}function m(v,A){u.push([v,A]),a.point(v,A)}function S(){a.lineStart(),u=[]}function y(){m(u[0][0],u[0][1]),a.lineEnd();var v=a.clean(),A=o.result(),T,R=A.length,D,M,E;if(u.pop(),c.push(u),u=null,!!R){if(v&1){if(M=A[0],(D=M.length-1)>0){for(l||(r.polygonStart(),l=!0),r.lineStart(),T=0;T<D;++T)r.point((E=M[T])[0],E[1]);r.lineEnd()}return}R>1&&v&2&&A.push(A.pop().concat(A.shift())),h.push(A.filter(qM))}}return f}}function qM(i){return i.length>1}function ZM(i,t){return((i=i.x)[0]<0?i[1]-Je-fe:Je-i[1])-((t=t.x)[0]<0?t[1]-Je-fe:Je-t[1])}const qu=Fd(function(){return!0},KM,JM,[-jt,-Je]);function KM(i){var t=NaN,e=NaN,n=NaN,r;return{lineStart:function(){i.lineStart(),r=1},point:function(s,o){var a=s>0?jt:-jt,l=Se(s-t);Se(l-jt)<fe?(i.point(t,e=(e+o)/2>0?Je:-Je),i.point(n,e),i.lineEnd(),i.lineStart(),i.point(a,e),i.point(s,e),r=0):n!==a&&l>=jt&&(Se(t-n)<fe&&(t-=n*fe),Se(s-a)<fe&&(s-=a*fe),e=jM(t,e,s,o),i.point(n,e),i.lineEnd(),i.lineStart(),i.point(a,e),r=0),i.point(t=s,e=o),n=a},lineEnd:function(){i.lineEnd(),t=e=NaN},clean:function(){return 2-r}}}function jM(i,t,e,n){var r,s,o=te(i-e);return Se(o)>fe?Dd((te(t)*(s=ae(n))*te(e)-te(n)*(r=ae(t))*te(i))/(r*s*o)):(t+n)/2}function JM(i,t,e,n){var r;if(i==null)r=e*Je,n.point(-jt,r),n.point(0,r),n.point(jt,r),n.point(jt,0),n.point(jt,-r),n.point(0,-r),n.point(-jt,-r),n.point(-jt,0),n.point(-jt,r);else if(Se(i[0]-t[0])>fe){var s=i[0]<t[0]?jt:-jt;r=e*s/2,n.point(-s,r),n.point(0,r),n.point(s,r)}else n.point(t[0],t[1])}function QM(i){var t=ae(i),e=2*se,n=t>0,r=Se(t)>fe;function s(h,u,f,d){YM(d,i,e,f,h,u)}function o(h,u){return ae(h)*ae(u)>t}function a(h){var u,f,d,_,g;return{lineStart:function(){_=d=!1,g=1},point:function(p,m){var S=[p,m],y,v=o(p,m),A=n?v?0:c(p,m):v?c(p+(p<0?jt:-jt),m):0;if(!u&&(_=d=v)&&h.lineStart(),v!==d&&(y=l(u,S),(!y||Ro(u,y)||Ro(S,y))&&(S[2]=1)),v!==d)g=0,v?(h.lineStart(),y=l(S,u),h.point(y[0],y[1])):(y=l(u,S),h.point(y[0],y[1],2),h.lineEnd()),u=y;else if(r&&u&&n^v){var T;!(A&f)&&(T=l(S,u,!0))&&(g=0,n?(h.lineStart(),h.point(T[0][0],T[0][1]),h.point(T[1][0],T[1][1]),h.lineEnd()):(h.point(T[1][0],T[1][1]),h.lineEnd(),h.lineStart(),h.point(T[0][0],T[0][1],3)))}v&&(!u||!Ro(u,S))&&h.point(S[0],S[1]),u=S,d=v,f=A},lineEnd:function(){d&&h.lineEnd(),u=null},clean:function(){return g|(_&&d)<<1}}}function l(h,u,f){var d=Lr(h),_=Lr(u),g=[1,0,0],p=Yo(d,_),m=_o(p,p),S=p[0],y=m-S*S;if(!y)return!f&&h;var v=t*m/y,A=-t*S/y,T=Yo(g,p),R=go(g,v),D=go(p,A);Qa(R,D);var M=T,E=_o(R,M),P=_o(M,M),F=E*E-P*(_o(R,R)-1);if(!(F<0)){var O=Vi(F),G=go(M,(-E-O)/P);if(Qa(G,R),G=cc(G),!f)return G;var L=h[0],B=u[0],et=h[1],U=u[1],V;B<L&&(V=L,L=B,B=V);var it=B-L,q=Se(it-jt)<fe,lt=q||it<fe;if(!q&&U<et&&(V=et,et=U,U=V),lt?q?et+U>0^G[1]<(Se(G[0]-L)<fe?et:U):et<=G[1]&&G[1]<=U:it>jt^(L<=G[0]&&G[0]<=B)){var _t=go(M,(-E+O)/P);return Qa(_t,R),[G,cc(_t)]}}}function c(h,u){var f=n?i:jt-i,d=0;return h<-f?d|=1:h>f&&(d|=2),u<-f?d|=4:u>f&&(d|=8),d}return Fd(o,a,s,n?[0,-i]:[-jt,i-jt])}function tS(i,t,e,n,r,s){var o=i[0],a=i[1],l=t[0],c=t[1],h=0,u=1,f=l-o,d=c-a,_;if(_=e-o,!(!f&&_>0)){if(_/=f,f<0){if(_<h)return;_<u&&(u=_)}else if(f>0){if(_>u)return;_>h&&(h=_)}if(_=r-o,!(!f&&_<0)){if(_/=f,f<0){if(_>u)return;_>h&&(h=_)}else if(f>0){if(_<h)return;_<u&&(u=_)}if(_=n-a,!(!d&&_>0)){if(_/=d,d<0){if(_<h)return;_<u&&(u=_)}else if(d>0){if(_>u)return;_>h&&(h=_)}if(_=s-a,!(!d&&_<0)){if(_/=d,d<0){if(_>u)return;_>h&&(h=_)}else if(d>0){if(_<h)return;_<u&&(u=_)}return h>0&&(i[0]=o+h*f,i[1]=a+h*d),u<1&&(t[0]=o+u*f,t[1]=a+u*d),!0}}}}}var Qr=1e9,xo=-Qr;function eS(i,t,e,n){function r(c,h){return i<=c&&c<=e&&t<=h&&h<=n}function s(c,h,u,f){var d=0,_=0;if(c==null||(d=o(c,u))!==(_=o(h,u))||l(c,h)<0^u>0)do f.point(d===0||d===3?i:e,d>1?n:t);while((d=(d+u+4)%4)!==_);else f.point(h[0],h[1])}function o(c,h){return Se(c[0]-i)<fe?h>0?0:3:Se(c[0]-e)<fe?h>0?2:1:Se(c[1]-t)<fe?h>0?1:0:h>0?3:2}function a(c,h){return l(c.x,h.x)}function l(c,h){var u=o(c,1),f=o(h,1);return u!==f?u-f:u===0?h[1]-c[1]:u===1?c[0]-h[0]:u===2?c[1]-h[1]:h[0]-c[0]}return function(c){var h=c,u=Ud(),f,d,_,g,p,m,S,y,v,A,T,R={point:D,lineStart:F,lineEnd:O,polygonStart:E,polygonEnd:P};function D(L,B){r(L,B)&&h.point(L,B)}function M(){for(var L=0,B=0,et=d.length;B<et;++B)for(var U=d[B],V=1,it=U.length,q=U[0],lt,_t,Et=q[0],xt=q[1];V<it;++V)lt=Et,_t=xt,q=U[V],Et=q[0],xt=q[1],_t<=n?xt>n&&(Et-lt)*(n-_t)>(xt-_t)*(i-lt)&&++L:xt<=n&&(Et-lt)*(n-_t)<(xt-_t)*(i-lt)&&--L;return L}function E(){h=u,f=[],d=[],T=!0}function P(){var L=M(),B=T&&L,et=(f=Pd(f)).length;(B||et)&&(c.polygonStart(),B&&(c.lineStart(),s(null,null,1,c),c.lineEnd()),et&&Nd(f,a,L,s,c),c.polygonEnd()),h=c,f=d=_=null}function F(){R.point=G,d&&d.push(_=[]),A=!0,v=!1,S=y=NaN}function O(){f&&(G(g,p),m&&v&&u.rejoin(),f.push(u.result())),R.point=D,v&&h.lineEnd()}function G(L,B){var et=r(L,B);if(d&&_.push([L,B]),A)g=L,p=B,m=et,A=!1,et&&(h.lineStart(),h.point(L,B));else if(et&&v)h.point(L,B);else{var U=[S=Math.max(xo,Math.min(Qr,S)),y=Math.max(xo,Math.min(Qr,y))],V=[L=Math.max(xo,Math.min(Qr,L)),B=Math.max(xo,Math.min(Qr,B))];tS(U,V,i,t,e,n)?(v||(h.lineStart(),h.point(U[0],U[1])),h.point(V[0],V[1]),et||h.lineEnd(),T=!1):et&&(h.lineStart(),h.point(L,B),T=!1)}S=L,y=B,v=et}return R}}var dc,pc,Po,Do,Ir={sphere:Tn,point:Tn,lineStart:nS,lineEnd:Tn,polygonStart:Tn,polygonEnd:Tn};function nS(){Ir.point=rS,Ir.lineEnd=iS}function iS(){Ir.point=Ir.lineEnd=Tn}function rS(i,t){i*=se,t*=se,pc=i,Po=te(t),Do=ae(t),Ir.point=sS}function sS(i,t){i*=se,t*=se;var e=te(t),n=ae(t),r=Se(i-pc),s=ae(r),o=te(r),a=n*o,l=Do*e-Po*n*s,c=Po*e+Do*n*s;dc.add(gi(Vi(a*a+l*l),c)),pc=i,Po=e,Do=n}function oS(i){return dc=new Rd,Ld(i,Ir),+dc}var mc=[null,null],aS={type:"LineString",coordinates:mc};function lS(i,t){return mc[0]=i,mc[1]=t,oS(aS)}function cS(i,t){var e=i[0]*se,n=i[1]*se,r=t[0]*se,s=t[1]*se,o=ae(n),a=te(n),l=ae(s),c=te(s),h=o*ae(e),u=o*te(e),f=l*ae(r),d=l*te(r),_=2*Dr(Vi(zu(s-n)+o*l*zu(r-e))),g=te(_),p=_?function(m){var S=te(m*=_)/g,y=te(_-m)/g,v=y*h+S*f,A=y*u+S*d,T=y*a+S*c;return[gi(A,v)*Ne,gi(T,Vi(v*v+A*A))*Ne]}:function(){return[e*Ne,n*Ne]};return p.distance=_,p}const Zu=i=>i;var Ur=1/0,$o=Ur,bs=-Ur,qo=bs,hS={point:uS,lineStart:Tn,lineEnd:Tn,polygonStart:Tn,polygonEnd:Tn,result:function(){var i=[[Ur,$o],[bs,qo]];return bs=qo=-($o=Ur=1/0),i}};function uS(i,t){i<Ur&&(Ur=i),i>bs&&(bs=i),t<$o&&($o=t),t>qo&&(qo=t)}const Ku=hS;function Qc(i){return function(t){var e=new _c;for(var n in i)e[n]=i[n];return e.stream=t,e}}function _c(){}_c.prototype={constructor:_c,point:function(i,t){this.stream.point(i,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function th(i,t,e){var n=i.clipExtent&&i.clipExtent();return i.scale(150).translate([0,0]),n!=null&&i.clipExtent(null),Ld(e,i.stream(Ku)),t(Ku.result()),n!=null&&i.clipExtent(n),i}function Od(i,t,e){return th(i,function(n){var r=t[1][0]-t[0][0],s=t[1][1]-t[0][1],o=Math.min(r/(n[1][0]-n[0][0]),s/(n[1][1]-n[0][1])),a=+t[0][0]+(r-o*(n[1][0]+n[0][0]))/2,l=+t[0][1]+(s-o*(n[1][1]+n[0][1]))/2;i.scale(150*o).translate([a,l])},e)}function fS(i,t,e){return Od(i,[[0,0],t],e)}function dS(i,t,e){return th(i,function(n){var r=+t,s=r/(n[1][0]-n[0][0]),o=(r-s*(n[1][0]+n[0][0]))/2,a=-s*n[0][1];i.scale(150*s).translate([o,a])},e)}function pS(i,t,e){return th(i,function(n){var r=+t,s=r/(n[1][1]-n[0][1]),o=-s*n[0][0],a=(r-s*(n[1][1]+n[0][1]))/2;i.scale(150*s).translate([o,a])},e)}var ju=16,mS=ae(30*se);function Ju(i,t){return+t?gS(i,t):_S(i)}function _S(i){return Qc({point:function(t,e){t=i(t,e),this.stream.point(t[0],t[1])}})}function gS(i,t){function e(n,r,s,o,a,l,c,h,u,f,d,_,g,p){var m=c-n,S=h-r,y=m*m+S*S;if(y>4*t&&g--){var v=o+f,A=a+d,T=l+_,R=Vi(v*v+A*A+T*T),D=Dr(T/=R),M=Se(Se(T)-1)<fe||Se(s-u)<fe?(s+u)/2:gi(A,v),E=i(M,D),P=E[0],F=E[1],O=P-n,G=F-r,L=S*O-m*G;(L*L/y>t||Se((m*O+S*G)/y-.5)>.3||o*f+a*d+l*_<mS)&&(e(n,r,s,o,a,l,P,F,M,v/=R,A/=R,T,g,p),p.point(P,F),e(P,F,M,v,A,T,c,h,u,f,d,_,g,p))}}return function(n){var r,s,o,a,l,c,h,u,f,d,_,g,p={point:m,lineStart:S,lineEnd:v,polygonStart:function(){n.polygonStart(),p.lineStart=A},polygonEnd:function(){n.polygonEnd(),p.lineStart=S}};function m(D,M){D=i(D,M),n.point(D[0],D[1])}function S(){u=NaN,p.point=y,n.lineStart()}function y(D,M){var E=Lr([D,M]),P=i(D,M);e(u,f,h,d,_,g,u=P[0],f=P[1],h=D,d=E[0],_=E[1],g=E[2],ju,n),n.point(u,f)}function v(){p.point=m,n.lineEnd()}function A(){S(),p.point=T,p.lineEnd=R}function T(D,M){y(r=D,M),s=u,o=f,a=d,l=_,c=g,p.point=y}function R(){e(u,f,h,d,_,g,s,o,r,a,l,c,ju,n),p.lineEnd=v,v()}return p}}var vS=Qc({point:function(i,t){this.stream.point(i*se,t*se)}});function xS(i){return Qc({point:function(t,e){var n=i(t,e);return this.stream.point(n[0],n[1])}})}function yS(i,t,e,n,r){function s(o,a){return o*=n,a*=r,[t+i*o,e-i*a]}return s.invert=function(o,a){return[(o-t)/i*n,(e-a)/i*r]},s}function Qu(i,t,e,n,r,s){if(!s)return yS(i,t,e,n,r);var o=ae(s),a=te(s),l=o*i,c=a*i,h=o/i,u=a/i,f=(a*e-o*t)/i,d=(a*t+o*e)/i;function _(g,p){return g*=n,p*=r,[l*g-c*p+t,e-c*g-l*p]}return _.invert=function(g,p){return[n*(h*g-u*p+f),r*(d-u*g-h*p)]},_}function MS(i){return SS(function(){return i})()}function SS(i){var t,e=150,n=480,r=250,s=0,o=0,a=0,l=0,c=0,h,u=0,f=1,d=1,_=null,g=qu,p=null,m,S,y,v=Zu,A=.5,T,R,D,M,E;function P(L){return D(L[0]*se,L[1]*se)}function F(L){return L=D.invert(L[0],L[1]),L&&[L[0]*Ne,L[1]*Ne]}P.stream=function(L){return M&&E===L?M:M=vS(xS(h)(g(T(v(E=L)))))},P.preclip=function(L){return arguments.length?(g=L,_=void 0,G()):g},P.postclip=function(L){return arguments.length?(v=L,p=m=S=y=null,G()):v},P.clipAngle=function(L){return arguments.length?(g=+L?QM(_=L*se):(_=null,qu),G()):_*Ne},P.clipExtent=function(L){return arguments.length?(v=L==null?(p=m=S=y=null,Zu):eS(p=+L[0][0],m=+L[0][1],S=+L[1][0],y=+L[1][1]),G()):p==null?null:[[p,m],[S,y]]},P.scale=function(L){return arguments.length?(e=+L,O()):e},P.translate=function(L){return arguments.length?(n=+L[0],r=+L[1],O()):[n,r]},P.center=function(L){return arguments.length?(s=L[0]%360*se,o=L[1]%360*se,O()):[s*Ne,o*Ne]},P.rotate=function(L){return arguments.length?(a=L[0]%360*se,l=L[1]%360*se,c=L.length>2?L[2]%360*se:0,O()):[a*Ne,l*Ne,c*Ne]},P.angle=function(L){return arguments.length?(u=L%360*se,O()):u*Ne},P.reflectX=function(L){return arguments.length?(f=L?-1:1,O()):f<0},P.reflectY=function(L){return arguments.length?(d=L?-1:1,O()):d<0},P.precision=function(L){return arguments.length?(T=Ju(R,A=L*L),G()):Vi(A)},P.fitExtent=function(L,B){return Od(P,L,B)},P.fitSize=function(L,B){return fS(P,L,B)},P.fitWidth=function(L,B){return dS(P,L,B)},P.fitHeight=function(L,B){return pS(P,L,B)};function O(){var L=Qu(e,0,0,f,d,u).apply(null,t(s,o)),B=Qu(e,n-L[0],r-L[1],f,d,u);return h=Id(a,l,c),R=uc(t,B),D=uc(h,R),T=Ju(R,A),G()}function G(){return M=E=null,P}return function(){return t=i.apply(this,arguments),P.invert=t.invert&&F,O()}}function eh(i,t){return[i,HM(GM((Je+t)/2))]}eh.invert=function(i,t){return[i,2*Dd(kM(t))-Je]};function ES(){return bS(eh).scale(961/xn)}function bS(i){var t=MS(i),e=t.center,n=t.scale,r=t.translate,s=t.clipExtent,o=null,a,l,c;t.scale=function(u){return arguments.length?(n(u),h()):n()},t.translate=function(u){return arguments.length?(r(u),h()):r()},t.center=function(u){return arguments.length?(e(u),h()):e()},t.clipExtent=function(u){return arguments.length?(u==null?o=a=l=c=null:(o=+u[0][0],a=+u[0][1],l=+u[1][0],c=+u[1][1]),h()):o==null?null:[[o,a],[l,c]]};function h(){var u=jt*n(),f=t(XM(t.rotate()).invert([0,0]));return s(o==null?[[f[0]-u,f[1]-u],[f[0]+u,f[1]+u]]:i===eh?[[Math.max(f[0]-u,o),a],[Math.min(f[0]+u,l),c]]:[[o,Math.max(f[1]-u,a)],[l,Math.min(f[1]+u,c)]])}return h()}function ts(i,t,e){this.k=i,this.x=t,this.y=e}ts.prototype={constructor:ts,scale:function(i){return i===1?this:new ts(this.k*i,this.x,this.y)},translate:function(i,t){return i===0&t===0?this:new ts(this.k,this.x+this.k*i,this.y+this.k*t)},apply:function(i){return[i[0]*this.k+this.x,i[1]*this.k+this.y]},applyX:function(i){return i*this.k+this.x},applyY:function(i){return i*this.k+this.y},invert:function(i){return[(i[0]-this.x)/this.k,(i[1]-this.y)/this.k]},invertX:function(i){return(i-this.x)/this.k},invertY:function(i){return(i-this.y)/this.k},rescaleX:function(i){return i.copy().domain(i.range().map(this.invertX,this).map(i.invert,i))},rescaleY:function(i){return i.copy().domain(i.range().map(this.invertY,this).map(i.invert,i))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};ts.prototype;function tf(i){const t=[],e=[],n=i[0][0].length;let r=0,s=0;for(const o of i){for(const a of o)for(let l=0;l<n;l++)t.push(a[l]);s&&(r+=s,e.push(r)),s=o.length}return{vertices:t,holes:e,dimensions:n}}function gc(i,t){(t==null||t>i.length)&&(t=i.length);for(var e=0,n=Array(t);e<t;e++)n[e]=i[e];return n}function TS(i){if(Array.isArray(i))return i}function AS(i){if(Array.isArray(i))return gc(i)}function wS(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function CS(i,t,e){return t=Zo(t),OS(i,Bd()?Reflect.construct(t,[],Zo(i).constructor):t.apply(i,e))}function RS(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function PS(i,t,e){return Object.defineProperty(i,"prototype",{writable:!1}),i}function DS(i,t){var e=typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(!e){if(Array.isArray(i)||(e=nh(i))||t){e&&(i=e);var n=0,r=function(){};return{s:r,n:function(){return n>=i.length?{done:!0}:{done:!1,value:i[n++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s,o=!0,a=!1;return{s:function(){e=e.call(i)},n:function(){var l=e.next();return o=l.done,l},e:function(l){a=!0,s=l},f:function(){try{o||e.return==null||e.return()}finally{if(a)throw s}}}}function Zo(i){return Zo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Zo(i)}function LS(i,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(t&&t.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),Object.defineProperty(i,"prototype",{writable:!1}),t&&vc(i,t)}function Bd(){try{var i=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Bd=function(){return!!i})()}function IS(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function US(i,t){var e=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(e!=null){var n,r,s,o,a=[],l=!0,c=!1;try{if(s=(e=e.call(i)).next,t===0){if(Object(e)!==e)return;l=!1}else for(;!(l=(n=s.call(e)).done)&&(a.push(n.value),a.length!==t);l=!0);}catch(h){c=!0,r=h}finally{try{if(!l&&e.return!=null&&(o=e.return(),Object(o)!==o))return}finally{if(c)throw r}}return a}}function NS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function FS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function OS(i,t){if(t&&(typeof t=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return wS(i)}function vc(i,t){return vc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},vc(i,t)}function $r(i,t){return TS(i)||US(i,t)||nh(i,t)||NS()}function BS(i){return AS(i)||IS(i)||nh(i)||FS()}function nh(i,t){if(i){if(typeof i=="string")return gc(i,t);var e={}.toString.call(i).slice(8,-1);return e==="Object"&&i.constructor&&(e=i.constructor.name),e==="Map"||e==="Set"?Array.from(i):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?gc(i,t):void 0}}var ef=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,n=[],r=null;return t.forEach(function(s){if(r){var o=lS(s,r)*180/Math.PI;if(o>e)for(var a=cS(r,s),l=r.length>2||s.length>2?BM(r[2]||0,s[2]||0):null,c=l?function(f){return[].concat(BS(a(f)),[l(f)])}:a,h=1/Math.ceil(o/e),u=h;u<1;)n.push(c(u)),u+=h}n.push(r=s)}),n},xc=typeof window<"u"&&window.THREE?window.THREE:{BufferGeometry:Ae,Float32BufferAttribute:me},zS=new xc.BufferGeometry().setAttribute?"setAttribute":"addAttribute";xc.BufferGeometry;function qr(i,t){var e=Math.round(i.vertices.length/3);nf(i.vertices,t.vertices),nf(i.indices,t.indices.map(function(n){return n+e}))}function nf(i,t){var e=DS(t),n;try{for(e.s();!(n=e.n()).done;){var r=n.value;i.push(r)}}catch(s){e.e(s)}finally{e.f()}}function el(i,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,n=(90-i)*Math.PI/180,r=(90-t)*Math.PI/180;return[e*Math.sin(n)*Math.cos(r),e*Math.cos(n),e*Math.sin(n)*Math.sin(r)]}const kS="/vueLearnDemo/assets/borderBlue-31169e52.png",HS="/vueLearnDemo/assets/borderTwo-25bd46d9.png";const VS={class:"container",ref:"container"},GS={class:"addContent"},WS={__name:"map",setup(i){let t=new Map,e=null,n,r,s,o,a,l,c=!0;const h=new I(0,160,.1),u=new I(4,10,11);let f=ia(null),d=new Map,_=null,g=ia(!1),p=null,m=[],S=[];const y=ia(!1),v=()=>{const U=q=>{const lt=new b_(q.gridSize||100,q.gridDivision||20,q.gridColor||26316,q.gridColor||13158);lt.position.copy(q.position||new I(0,-5,0)),n.add(lt);const _t=new Ae,Et=[],xt=q.pointLayout||{row:50,col:50},X=q.shapeSize||1;for(let H=0;H<xt.row;H++)for(let $=0;$<xt.col;$++){const J=(H-xt.row/2)*X,at=($-xt.col/2)*X;Et.push(J,.1,at)}_t.setAttribute("position",new me(Et,3));const Z=new Float32Array(Et.length/3);for(let H=0;H<Et.length;H+=3){const $=Et[H],J=Et[H+2],at=Math.sqrt($*$+J*J);Z[H/3]=at}const vt=new Float32Array(Et.length),ut=new Gt(q.pointColor||2969459);for(let H=0;H<vt.length;H+=3)vt[H]=ut.r,vt[H+1]=ut.g,vt[H+2]=ut.b;_t.setAttribute("color",new Ye(vt,3));const mt=new Wl({size:q.pointSize||.05,vertexColors:!0,transparent:!0,opacity:.8,blending:Yn}),It=new Gh(_t,mt);It.position.copy(q.position||new I(0,-5,0)),n.add(It);let wt=0;const C=H=>{if(!q.diffuse)return;wt+=H*(q.diffuseSpeed||1);const $=_t.attributes.color.array,J=wt*10,at=q.diffuseWidth||5,nt=new Gt(q.diffuseColor||65535),rt=new Gt(q.pointColor||2969459);for(let Ut=0;Ut<Et.length;Ut+=3){const Rt=Z[Ut/3],w=Math.abs(Rt-J);let x=0;if(w<=at){x=Math.max(0,1-w/at);const ot=Math.max(0,wt-Rt/10),tt=Math.max(.2,1-ot*.5);x*=tt}const z=Ut,Y=rt.clone().lerp(nt,x);$[z]=Y.r,$[z+1]=Y.g,$[z+2]=Y.b}_t.attributes.color.needsUpdate=!0},K=A(n,{particleCount:30,layout:q.pointLayout,shapeSize:q.shapeSize,yMin:.1,yMax:4,particleColor:q.particleColor||6939378,pointColor:q.pointColor||2969459,position:q.position||new I(0,-5,0),particleSize:.25});return{gridHelper:lt,pointsSystem:It,updateDiffusion:C,...K,updateParticles:K.updateParticles}},V={position:new I(0,0,0),gridSize:40,gridDivision:20,gridColor:2969459,shapeSize:.5,pointSize:.1,pointColor:2969459,pointLayout:{row:80,col:80},pointBlending:Yn,diffuse:!0,diffuseSpeed:1,diffuseColor:65535,diffuseWidth:10,diffuseDir:1};return{gridSystem:U(V)}},A=(U,V={})=>{var wt,C;let it=null,q=null,lt=null,_t=null,Et=null,xt=null,X=V.particleCount||30;const Z={x:(((wt=V.layout)==null?void 0:wt.row)||80)*(V.shapeSize||.5),z:(((C=V.layout)==null?void 0:C.col)||80)*(V.shapeSize||.5),yMin:V.yMin||.1,yMax:V.yMax||4},vt=(K=X)=>{if(it)return;X=K,q=new Ae,_t=new Float32Array(X*3),Et=new Float32Array(X),xt=new Float32Array(X*3);const H=new Gt(V.particleColor||6939378);for(let nt=0;nt<X;nt++){const rt=nt*3;_t[rt]=(Math.random()-.5)*Z.x*2,_t[rt+1]=Z.yMin+Math.random()*.5,_t[rt+2]=(Math.random()-.5)*Z.z*2,Et[nt]=.5+Math.random()*1.5,xt[rt]=H.r,xt[rt+1]=H.g,xt[rt+2]=H.b}q.setAttribute("position",new Ye(_t,3)),q.setAttribute("color",new Ye(xt,3));const $=document.createElement("canvas");$.width=128,$.height=128;const J=$.getContext("2d");J.beginPath(),J.arc(64,64,60,0,Math.PI*2),J.fillStyle="rgba(220, 255, 255, 1.0)",J.fill();const at=new Yr($);lt=new Wl({size:V.particleSize||.25,vertexColors:!0,transparent:!0,opacity:.8,blending:Yn,depthWrite:!1,map:at}),it=new Gh(q,lt),it.position.copy(V.position||new I(0,-5,0)),U.add(it)};return{addParticle:K=>{vt(K)},removeParticle:()=>{it&&(U.remove(it),q.dispose(),lt.dispose(),q=lt=it=null,_t=Et=xt=null)},updateParticles:K=>{if(!it)return;const H=q.attributes.position.array,$=q.attributes.color.array,J=new Gt(V.particleColor||6939378),at=new Gt(V.pointColor||2969459);for(let nt=0;nt<X;nt++){const rt=nt*3;H[rt+1]+=Et[nt]*K,H[rt]+=(Math.random()-.5)*.01,H[rt+2]+=(Math.random()-.5)*.01;const Ut=Math.min(1,(H[rt+1]-Z.yMin)/(Z.yMax-Z.yMin)),Rt=J.clone().lerp(at,Ut);$[rt]=Rt.r,$[rt+1]=Rt.g,$[rt+2]=Rt.b,H[rt+1]>Z.yMax&&(H[rt]=(Math.random()-.5)*Z.x*2,H[rt+1]=Z.yMin,H[rt+2]=(Math.random()-.5)*Z.z*2,Et[nt]=.5+Math.random()*1.5)}q.attributes.position.needsUpdate=!0,q.attributes.color.needsUpdate=!0},particleSystem:it}},T=(U,V,it)=>{const q=document.createElement("canvas"),lt=q.getContext("2d"),_t=U==="江苏省",Et=typeof window<"u"&&window.devicePixelRatio||1,xt=_t?360:256,X=_t?100:64,Z=_t?56:28;q.width=Math.floor(xt*Et),q.height=Math.floor(X*Et),q.style.width=`${xt}px`,q.style.height=`${X}px`,lt.scale(Et,Et);const vt=yt=>{if(lt.clearRect(0,0,xt,X),!_t){lt.fillStyle="rgba(13, 22, 129, 0.3)",lt.roundRect&&lt.roundRect(5,5,xt-10,X-10,5),lt.fill(),lt.font=`bold ${yt?30:28}px Microsoft Yahei`,lt.textAlign="center",lt.textBaseline="middle",lt.fillStyle="#ffffff",lt.fillText(U,xt/2,X/2);return}const ct=yt?46:56;lt.font=`bold ${ct}px Microsoft Yahei`,lt.textAlign="center",lt.textBaseline="middle";const Mt=xt/2,kt=X*.35;lt.fillStyle="#ffffff",lt.fillText(U,Mt,kt)};vt(!1);const ut=new Yr(q);ut.minFilter=je,ut.magFilter=je,ut.generateMipmaps=!1,ut.needsUpdate=!0;const mt=new bo({map:ut,transparent:!0,depthWrite:!1,depthTest:!1}),It=_t?V.y+.1:V.y+2.2,wt=_t?V.z+8:V.z,C=new I(V.x,It,wt);if(_t&&typeof r<"u")try{const yt=r.position.clone().sub(C).setY(0).normalize();C.add(yt.multiplyScalar(1))}catch{}const K=xt/X;if(!_t){const yt=new Ca(mt);yt.name=`label_${U}`,yt.position.copy(C),yt.renderOrder=9999;const ct=.6;return yt.scale.set(ct*K,ct,1),it.add(yt),{sprite:yt,updateHover:Mt=>{vt(Mt),ut.needsUpdate=!0}}}const H=1.8,$=2,J=H*K,at=H,nt=new Ui(J,at),rt=ut,Ut=new oi({map:rt,transparent:!0,depthWrite:!1,depthTest:!1,side:Ke}),Rt=new Ue(nt,Ut);Rt.name=`label_${U}_main`,Rt.position.copy(C),Rt.renderOrder=9999,it.add(Rt);const w=document.createElement("canvas");w.width=q.width,w.height=q.height,w.style.width=q.style.width,w.style.height=q.style.height;const x=w.getContext("2d");x.scale(Et,Et);const z=xt/2,Y=X*.35;x.clearRect(0,0,xt,X),x.font=`bold ${Z}px Microsoft Yahei`,x.textAlign="center",x.textBaseline="middle";const ot=Y+Z*.9;x.fillStyle="rgba(255,255,255,0.6)",x.fillText(U,z,ot),x.globalCompositeOperation="destination-in";const tt=x.createLinearGradient(0,Y,0,X);tt.addColorStop(0,"rgba(0,0,0,1)"),tt.addColorStop(1,"rgba(0,0,0,0)"),x.fillStyle=tt,x.fillRect(0,Y,xt,X-Y);const Pt=new Yr(w);Pt.minFilter=je,Pt.magFilter=je,Pt.generateMipmaps=!1,Pt.needsUpdate=!0;const gt=new oi({map:Pt,transparent:!0,opacity:.6,depthWrite:!1,depthTest:!1,side:Ke}),Ct=new Ue(nt,gt);return Ct.name=`label_${U}_reflect`,Ct.position.copy(C),Ct.position.y=C.y-at*.8,Ct.scale.y=-1,Ct.renderOrder=9998,it.add(Ct),{mesh:Rt,reflection:Ct,updateHover:yt=>{vt(yt),rt.needsUpdate=!0,x.clearRect(0,0,xt,X),x.font=`bold ${yt?46:56}px Microsoft Yahei`,x.textAlign="center",x.textBaseline="middle";const ct=Y+(yt?46:56)*.9;x.fillStyle="rgba(255,255,255,0.6)",x.fillText(U,z,ct),x.globalCompositeOperation="destination-in";const Mt=x.createLinearGradient(0,Y,0,X);Mt.addColorStop(0,"rgba(0,0,0,1)"),Mt.addColorStop(1,"rgba(0,0,0,0)"),x.fillStyle=Mt,x.fillRect(0,Y,xt,X-Y),Pt.needsUpdate=!0,Ze.to(Rt.scale,{x:(yt?$:H)*K,y:yt?$:H,duration:.2}),Ze.to(Rt.position,{y:yt?C.y+.4:C.y,duration:.2}),Ze.to(Ct.position,{y:yt?C.y-at*.5:C.y-at*.6,duration:.2})}}},R=(U,V,it)=>{const q=document.createElement("canvas"),lt=q.getContext("2d");q.width=160,q.height=80;const _t=Z=>{lt.clearRect(0,0,q.width,q.height),lt.font="bold 30px Arial",lt.textAlign="center",lt.textBaseline="middle",lt.fillStyle="#ffffff",lt.fillText(U,q.width/2,q.height/2)};_t(!1);const Et=new Yr(q),xt=new bo({map:Et,transparent:!0,depthWrite:!1}),X=new Ca(xt);return X.position.set(V.x,V.y,V.z),X.scale.set(2,.5,1),it.add(X),{sprite:X,updateHover:Z=>{_t(Z),Et.needsUpdate=!0}}},D=(U,V,it)=>{const lt=it,_t=new Oo(.1,.1,lt,15),Et=new Float32Array(_t.attributes.position.count*3);for(let K=0;K<_t.attributes.position.count;K++){const $=(_t.attributes.position.getY(K)+lt/2)/lt,J=new Gt(671074),at=new Gt(11730687),nt=J.lerp(at,$);Et[K*3]=nt.r,Et[K*3+1]=nt.g,Et[K*3+2]=nt.b}_t.setAttribute("color",new Ye(Et,3));const xt=new oi({vertexColors:!0,transparent:!0,opacity:.8,blending:Yn}),X=new Ue(_t,xt);X.position.set(U.x,U.y+lt/2,U.z),e.add(X);const Z=new Oo(.1+.05,.1+.05,lt+.1,15),vt=new jn({uniforms:{glowColor:{value:new Gt(6939378)},opacity:{value:.5}},vertexShader:`
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 glowColor;
      uniform float opacity;
      varying vec3 vNormal;
      void main() {
        float intensity = pow(0.7 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
        gl_FragColor = vec4(glowColor, opacity * intensity);
      }
    `,transparent:!0,blending:Yn,depthWrite:!1}),ut=new Ue(Z,vt);ut.position.set(U.x,U.y+lt/2,U.z),e.add(ut);const mt=new Nc(.1+.1,.1+.15,30,1);mt.rotateX(-Math.PI/2);const It=new oi({color:6939378,transparent:!0,opacity:1,blending:Yn}),wt=new Ue(mt,It);wt.position.set(U.x,U.y+.1,U.z),e.add(wt);const C=R(V,{x:U.x+.2,y:U.y+lt+1,z:U.z},e);return C.sprite.scale.set(1,.5,1),C.updateHover(!0),S.push({name:V,position:U.clone()}),{cylinderMesh:X,glowMesh:ut}},M=(U,V)=>{if(!(U!=null&&U.geometry))return new I(0,0,0);let it=[];if((U.geometry.type==="MultiPolygon"?U.geometry.coordinates.flat(2):U.geometry.coordinates.flat(1)).forEach(([Et,xt])=>{const[X,Z]=V([Et,xt]);it.push({x:X,y:Z})}),it.length===0)return new I(0,0,0);const lt=it.reduce((Et,xt)=>Et+xt.x,0)/it.length,_t=it.reduce((Et,xt)=>Et+xt.y,0)/it.length;return new I(lt,0,_t)},E=()=>({loadChinaMap:(async()=>{try{const q=await(await fetch("/vueLearnDemo/data/100000_full.json")).json(),_t=await(await fetch("/vueLearnDemo/data/320000_full.json")).json();if(!(q!=null&&q.features)||!(_t!=null&&_t.features))return;const Et=n.getObjectByName("provinceGroup");Et&&n.remove(Et),e=new fr,e.name="provinceGroup",e.position.set(0,0,0),n.add(e),S.length=0;const xt=[119.84,32.98],X=ES().center(xt).scale(130).translate([2,0]),Z={normal:{color:2242647,height:.2,borderColor:2968696,opacity:1},jiangsu:{color:6862590,height:.5,borderColor:16777215,opacity:1},jiangsuCity:{borderColor:16777215,linewidth:1.5,heightOffset:.72}};t.clear();let vt=0;q.features.forEach(ut=>{var H;if(!(ut!=null&&ut.geometry))return;const mt=((H=ut.properties)==null?void 0:H.name)||"未知区域",It=mt==="江苏省",wt=M(ut,X);wt.y=It?.7:Z.normal.height;const C=T(mt,wt,e);t.set(mt,C),(ut.geometry.type==="MultiPolygon"?ut.geometry.coordinates.flat(1):ut.geometry.coordinates).forEach($=>{const J=$.map(([Rt,w])=>{const[x,z]=X([Rt,w]);return new ht(x,z)});if(J.length<3)return;const at=new Bo(J);let nt;It?nt=new zo(at,{depth:Z.jiangsu.height,bevelEnabled:!0,bevelThickness:.1,bevelSize:.05}):nt=new Fc(at),nt.rotateX(Math.PI/2);let rt;It?rt=new Na({color:Z.jiangsu.color,opacity:.8,transparent:!1}):rt=new Na({color:Z.normal.color,side:Ke,transparent:!1});const Ut=new Ue(nt,rt);if(Ut.position.y=It?.7:Z.normal.height,Ut.userData={province:mt},e.add(Ut),vt++,!It){const Rt=new Im(nt),w=new ns({color:It?Z.jiangsu.borderColor:Z.normal.borderColor,linewidth:1,transparent:!0}),x=new Gl(Rt,w);x.position.y=It?.5:Z.normal.height+.01,e.add(x)}})}),_t.features.forEach(ut=>{var C;if(!(ut!=null&&ut.geometry))return;const mt=((C=ut.properties)==null?void 0:C.name)||"未知城市",It=Math.random()*3+1;(ut.geometry.type==="MultiPolygon"?ut.geometry.coordinates:[ut.geometry.coordinates]).forEach(K=>{const H=K[0];if(!Array.isArray(H)||H.length<4)return;const $=M(ut,X);$.y=.8;const J=H.map(x=>{if(!Array.isArray(x)||x.length!==2)return null;const[z,Y]=x,[ot,tt]=X([z,Y]);return new I(ot,.8,tt)}).filter(x=>x!==null);if(J.length<4)return;const at=new Bo(J.map(x=>new ht(x.x,x.z))),nt=new zo(at,{depth:.05,bevelEnabled:!1});nt.rotateX(Math.PI/2);const rt=new Na({color:9882853,transparent:!0,opacity:.3}),Ut=new Ue(nt,rt);Ut.position.y=Z.jiangsu.height+.35,Ut.userData={city:mt},e.add(Ut),d.has(mt)||d.set(mt,[]),d.get(mt).push(Ut),D($,mt,It);const Rt=new Ae().setFromPoints(J),w=new Gl(Rt,new ns({color:16777215,linewidth:2,depthTest:!0}));w.position.y=.05,console.log("line.position",w.position),e.add(w)})})}catch(it){console.error("渲染错误:",it)}})()});function P(U=6){if(!(!S||S.length<2)){F(),p=new fr,p.name="flyLineGroup",e.add(p),m=[];for(let V=0;V<U;V++){const it=S[Math.floor(Math.random()*S.length)];let q=S[Math.floor(Math.random()*S.length)];if(!it||!q||it===q)continue;const lt=it.position.clone(),_t=q.position.clone(),Et=lt.clone().lerp(_t,.5);Et.y+=3+Math.random()*3;const xt=new Df(lt,Et,_t),X=xt.getPoints(80),Z=new Ae().setFromPoints(X),vt=new ns({color:6939378}),ut=new Tf(Z,vt);ut.computeLineDistances(),p.add(ut);const mt=document.createElement("canvas");mt.width=64,mt.height=64;const It=mt.getContext("2d"),wt=It.createRadialGradient(32,32,2,32,32,30);wt.addColorStop(0,"rgba(255,255,255,1)"),wt.addColorStop(.2,"rgba(105,226,242,1)"),wt.addColorStop(1,"rgba(105,226,242,0)"),It.fillStyle=wt,It.fillRect(0,0,64,64);const C=new Yr(mt),K=new bo({map:C,blending:Yn,depthWrite:!1}),H=new Ca(K);H.scale.set(.6,.6,1),p.add(H),m.push({curve:xt,line:ut,comet:H,speed:.2+Math.random()*.6,progress:Math.random()})}}}function F(){p&&(m.forEach(U=>{try{U.line.geometry&&U.line.geometry.dispose(),U.line.material&&U.line.material.dispose(),U.comet.material&&U.comet.material.map&&U.comet.material.map.dispose(),U.comet.material&&U.comet.material.dispose()}catch(V){console.warn("dispose error",V)}}),e&&p&&e.remove(p),p=null,m=[])}function O(){y.value=!y.value,y.value?P(8):F()}function G(U){!y.value||!m.length||m.forEach(V=>{V.progress+=V.speed*U*.3,V.progress>1&&(V.progress-=1);const it=V.curve.getPointAt(V.progress);V.comet.position.copy(it),V.line&&V.line.material&&(V.line.material.dashOffset=-V.progress*10);const q=.4+Math.sin(V.progress*Math.PI*2)*.18;V.comet.scale.set(q,q,1)})}function L(U){if(_&&d.has(_)&&d.get(_).forEach(V=>{V.userData.origColor&&V.material.color.set(V.userData.origColor),V.material.opacity=V.userData.origOpacity??.8}),!U){_=null;return}d.has(U)&&(d.get(U).forEach(V=>{V.userData.origColor=V.userData.origColor||V.material.color.getHex(),V.userData.origOpacity=V.userData.origOpacity??V.material.opacity,V.material.color.set(10931686),V.material.opacity=1}),_=U)}const B=()=>{n=new Cm,n.background=new Gt(1649473),r=new _n(60,window.innerWidth/window.innerHeight,.1,1e3),r.position.copy(h),r.lookAt(0,0,0),n.add(r),s=new ly({antialias:!0}),s.setSize(window.innerWidth,window.innerHeight),f.value.appendChild(s.domElement),n.fog=new Dc(1649473,10,100),s.setClearColor(n.background),window.scene=n;const U=new M_(16427690);n.add(U);const V=new y_(16777215,1);V.position.set(0,0,1),n.add(V),o=new hy(r,s.domElement),o.enableDamping=!0,o.dampingFactor=.25,o.enableZoom=!0,o.enablePan=!0,o.enabled=!1,o.minDistance=1,o.maxDistance=1e3,o.target.set(0,0,0),o.update();const it=()=>{c&&(c=!1,o.enabled=!1,Ze.to(r.position,{x:u.x,y:u.y,z:u.z,duration:1.2,ease:"power2.inOut",onUpdate:()=>{r.lookAt(0,0,0),o.update()},onComplete:()=>{o.enabled=!0,o.minDistance=2,o.maxDistance=80,o.update()}}))},q=()=>{c||(c=!0,o.enabled=!1,Ze.to(r.position,{x:h.x,y:h.y,z:h.z,duration:1.2,ease:"power2.inOut",onUpdate:()=>{r.lookAt(0,0,0),o.update()},onComplete:()=>{o.enabled=!1,o.minDistance=1,o.maxDistance=1e3,o.update()}}))},lt=wt=>{c&&it()};window.addEventListener("wheel",lt,{passive:!0}),window.addEventListener("click",lt),window.addEventListener("dblclick",q),new Kh().load(kS,wt=>{wt.wrapS=Di,wt.wrapT=Di;const C=new Ui(18,18),K=new oi({map:wt,transparent:!0,side:Ke,blending:ui,depthWrite:!1}),H=new Ue(C,K);H.position.set(1,.5,-2),H.rotation.x=-Math.PI/2,n.add(H),Ze.to(H.rotation,{z:Math.PI*2,duration:45,repeat:-1,ease:"linear"})}),new Kh().load(HS,wt=>{wt.wrapS=Di,wt.wrapT=Di;const C=new Ui(20,20),K=new oi({map:wt,transparent:!0,side:Ke,blending:ui,depthWrite:!1}),H=new Ue(C,K);H.position.set(1,.5,-2),H.rotation.x=-Math.PI/2,n.add(H),Ze.to(H.rotation,{z:-Math.PI*2,duration:35,repeat:-1,ease:"linear"})});try{a=new FM;const wt=a.addFolder("AmbientLight环境光"),C={color:16777215,intensity:1};wt.add(C,"color",0,16777215).onChange($=>{U.color.set($)}).name("环境光颜色"),wt.add(C,"intensity",0,1,.1).name("环境光强度");const K=a.addFolder("DirectionalLight直射光"),H={color:16777215,intensity:1,x:0,y:0,z:0};K.add(H,"color",0,16777215).onChange($=>{V.color.set($)}).name("直射光颜色"),K.add(H,"intensity",0,1,.1).name("直射光强度"),K.add(H,"x",-10,10,1).name("直射光x轴位置")}catch{}const{gridSystem:xt}=v();l=xt,E();const X=new E_,Z=new ht,vt=wt=>{if(!e)return;Z.x=wt.clientX/window.innerWidth*2-1,Z.y=-(wt.clientY/window.innerHeight)*2+1,X.setFromCamera(Z,r);const C=e.children.filter(K=>K.isMesh);X.intersectObjects(C)};window.addEventListener("mousemove",vt);function ut(wt){if(!e)return;Z.x=wt.clientX/window.innerWidth*2-1,Z.y=-(wt.clientY/window.innerHeight)*2+1,X.setFromCamera(Z,r);const C=Array.from(d.values()).flat(),K=X.intersectObjects(C);if(K.length>0){const H=K[0].object.userData.city;L(H)}else L(null)}window.addEventListener("click",ut),jd(()=>{window.removeEventListener("mousemove",vt),window.removeEventListener("wheel",lt),window.removeEventListener("click",lt),window.removeEventListener("dblclick",q),window.removeEventListener("click",ut),F()});let mt=performance.now();function It(wt){requestAnimationFrame(It);const C=(wt-mt)/1e3;mt=wt,l&&l.updateParticles&&l.updateParticles(C),G(C);try{t.forEach(K=>{K.sprite&&K.sprite.quaternion.copy(r.quaternion)})}catch{}s.render(n,r)}It()};function et(){g.value=!g.value,g.value?l.addParticle():l.removeParticle()}return Yd(()=>{B()}),(U,V)=>{const it=$d("el-button");return qd(),Zd("div",VS,[ra("div",{class:"mapWeb",ref_key:"mapWeb",ref:f},[ra("div",GS,[V[2]||(V[2]=ra("span",null,"增加3D特效",-1)),ch(it,{class:uh(y.value?"activeButton":""),onClick:O},{default:hh(()=>[...V[0]||(V[0]=[fh(" 飞线特效 ",-1)])]),_:1},8,["class"]),ch(it,{class:uh(Kd(g)?"activeButton":""),onClick:et},{default:hh(()=>[...V[1]||(V[1]=[fh(" 粒子特效 ",-1)])]),_:1},8,["class"])])],512)],512)}}},YS=Xd(WS,[["__scopeId","data-v-3c1cdd83"]]);export{YS as default};
