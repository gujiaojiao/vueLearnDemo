import{E as Mp,K as Ep,j as Sp,b as Vo,O as jc,s as Tp,o as bp,y as wp,a as Ap,W as qc,Q as Yc,C as $c,r as Rp,i as Cp,D as Lp}from"./index-4eac733d.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rc="180",hn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},sn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pp=0,Zc=1,Dp=2,Fu=1,Up=2,Gi=3,ur=0,qt=1,ui=2,or=0,lr=1,rr=2,Kc=3,Jc=4,Ip=5,br=100,Np=101,Op=102,Fp=103,zp=104,Bp=200,kp=201,Hp=202,Vp=203,Go=204,Wo=205,Gp=206,Wp=207,Xp=208,jp=209,qp=210,Yp=211,$p=212,Zp=213,Kp=214,Xo=0,jo=1,qo=2,fn=3,Yo=4,$o=5,Zo=6,Ko=7,nc=0,Jp=1,Qp=2,cr=0,ef=1,tf=2,rf=3,nf=4,af=5,sf=6,of=7,zu=300,mn=301,gn=302,Jo=303,Qo=304,zs=306,Ar=1e3,Rr=1001,el=1002,Si=1003,lf=1004,Aa=1005,Ri=1006,js=1007,Cr=1008,Di=1009,Bu=1010,ku=1011,ta=1012,ac=1013,Ur=1014,Xi=1015,xa=1016,sc=1017,oc=1018,ia=1020,Hu=35902,Vu=35899,Gu=1021,Wu=1022,Ei=1023,ra=1026,na=1027,Xu=1028,lc=1029,ju=1030,cc=1031,hc=1033,ps=33776,fs=33777,ms=33778,gs=33779,tl=35840,il=35841,rl=35842,nl=35843,al=36196,sl=37492,ol=37496,ll=37808,cl=37809,hl=37810,ul=37811,dl=37812,pl=37813,fl=37814,ml=37815,gl=37816,_l=37817,vl=37818,xl=37819,yl=37820,Ml=37821,El=36492,Sl=36494,Tl=36495,bl=36283,wl=36284,Al=36285,Rl=36286,cf=3200,hf=3201,qu=0,uf=1,ar="",li="srgb",_n="srgb-linear",Es="linear",tt="srgb",kr=7680,Qc=519,df=512,pf=513,ff=514,Yu=515,mf=516,gf=517,_f=518,vf=519,Cl=35044,eh="300 es",Ci=2e3,Ss=2001;class Fr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const a=n.indexOf(t);a!==-1&&n.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let a=0,s=n.length;a<s;a++)n[a].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let th=1234567;const un=Math.PI/180,aa=180/Math.PI;function Li(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[r&255]+Nt[r>>8&255]+Nt[r>>16&255]+Nt[r>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function je(r,e,t){return Math.max(e,Math.min(t,r))}function uc(r,e){return(r%e+e)%e}function xf(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function yf(r,e,t){return r!==e?(t-r)/(e-r):0}function Yn(r,e,t){return(1-t)*r+t*e}function Mf(r,e,t,i){return Yn(r,e,1-Math.exp(-t*i))}function Ef(r,e=1){return e-Math.abs(uc(r,e*2)-e)}function Sf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Tf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function bf(r,e){return r+Math.floor(Math.random()*(e-r+1))}function wf(r,e){return r+Math.random()*(e-r)}function Af(r){return r*(.5-Math.random())}function Rf(r){r!==void 0&&(th=r);let e=th+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cf(r){return r*un}function Lf(r){return r*aa}function Pf(r){return(r&r-1)===0&&r!==0}function Df(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Uf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function If(r,e,t,i,n){const a=Math.cos,s=Math.sin,o=a(t/2),c=s(t/2),l=a((e+i)/2),h=s((e+i)/2),u=a((e-i)/2),d=s((e-i)/2),p=a((i-e)/2),g=s((i-e)/2);switch(n){case"XYX":r.set(o*h,c*u,c*d,o*l);break;case"YZY":r.set(c*d,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*d,o*h,o*l);break;case"XZX":r.set(o*h,c*g,c*p,o*l);break;case"YXY":r.set(c*p,o*h,c*g,o*l);break;case"ZYZ":r.set(c*g,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function yi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function et(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Nf={DEG2RAD:un,RAD2DEG:aa,generateUUID:Li,clamp:je,euclideanModulo:uc,mapLinear:xf,inverseLerp:yf,lerp:Yn,damp:Mf,pingpong:Ef,smoothstep:Sf,smootherstep:Tf,randInt:bf,randFloat:wf,randFloatSpread:Af,seededRandom:Rf,degToRad:Cf,radToDeg:Lf,isPowerOfTwo:Pf,ceilPowerOfTwo:Df,floorPowerOfTwo:Uf,setQuaternionFromProperEuler:If,normalize:et,denormalize:yi};class re{constructor(e=0,t=0){re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*n+e.x,this.y=a*n+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ir{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,a,s,o){let c=i[n+0],l=i[n+1],h=i[n+2],u=i[n+3];const d=a[s+0],p=a[s+1],g=a[s+2],_=a[s+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==p||h!==g){let m=1-o;const f=c*d+l*p+h*g+u*_,T=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const L=Math.sqrt(E),R=Math.atan2(L,f*T);m=Math.sin(m*R)/L,o=Math.sin(o*R)/L}const v=o*T;if(c=c*m+d*v,l=l*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-o){const L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,a,s){const o=i[n],c=i[n+1],l=i[n+2],h=i[n+3],u=a[s],d=a[s+1],p=a[s+2],g=a[s+3];return e[t]=o*g+h*u+c*p-l*d,e[t+1]=c*g+h*d+l*u-o*p,e[t+2]=l*g+h*p+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,a=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(n/2),u=o(a/2),d=c(i/2),p=c(n/2),g=c(a/2);switch(s){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],a=t[8],s=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(a-l)*p,this._z=(s-n)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(n+s)/p,this._z=(a+l)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(a-l)/p,this._x=(n+s)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(s-n)/p,this._x=(a+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,a=e._z,s=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+s*o+n*l-a*c,this._y=n*h+s*c+a*o-i*l,this._z=a*h+s*l+i*c-n*o,this._w=s*h-i*o-n*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+n*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=n,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=s*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=a*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ih.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ih.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*n,this.y=a[1]*t+a[4]*i+a[7]*n,this.z=a[2]*t+a[5]*i+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*n+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*n+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*n+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,a=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*n-o*i),h=2*(o*t-a*n),u=2*(a*i-s*t);return this.x=t+c*l+s*u-o*h,this.y=i+c*h+o*l-a*u,this.z=n+c*u+a*h-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n,this.y=a[1]*t+a[5]*i+a[9]*n,this.z=a[2]*t+a[6]*i+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,a=e.z,s=t.x,o=t.y,c=t.z;return this.x=n*c-a*o,this.y=a*s-i*c,this.z=i*o-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qs.copy(this).projectOnVector(e),this.sub(qs)}reflect(e){return this.sub(qs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qs=new N,ih=new Ir;class We{constructor(e,t,i,n,a,s,o,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,s,o,c,l)}set(e,t,i,n,a,s,o,c,l){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=a,h[5]=c,h[6]=i,h[7]=s,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,a=this.elements,s=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],_=n[0],m=n[3],f=n[6],T=n[1],E=n[4],v=n[7],L=n[2],R=n[5],w=n[8];return a[0]=s*_+o*T+c*L,a[3]=s*m+o*E+c*R,a[6]=s*f+o*v+c*w,a[1]=l*_+h*T+u*L,a[4]=l*m+h*E+u*R,a[7]=l*f+h*v+u*w,a[2]=d*_+p*T+g*L,a[5]=d*m+p*E+g*R,a[8]=d*f+p*v+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*s*h-t*o*l-i*a*h+i*o*c+n*a*l-n*s*c}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*s-o*l,d=o*c-h*a,p=l*a-s*c,g=t*u+i*d+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(n*l-h*i)*_,e[2]=(o*i-n*s)*_,e[3]=d*_,e[4]=(h*t-n*c)*_,e[5]=(n*a-o*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(s*t-i*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,a,s,o){const c=Math.cos(a),l=Math.sin(a);return this.set(i*c,i*l,-i*(c*s+l*o)+s+e,-n*l,n*c,-n*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ys.makeScale(e,t)),this}rotate(e){return this.premultiply(Ys.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ys.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ys=new We;function $u(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function sa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Of(){const r=sa("canvas");return r.style.display="block",r}const rh={};function oa(r){r in rh||(rh[r]=!0,console.warn(r))}function Ff(r,e,t){return new Promise(function(i,n){function a(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const nh=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ah=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zf(){const r={enabled:!0,workingColorSpace:_n,spaces:{},convert:function(n,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===tt&&(n.r=qi(n.r),n.g=qi(n.g),n.b=qi(n.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(n.applyMatrix3(this.spaces[a].toXYZ),n.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===tt&&(n.r=dn(n.r),n.g=dn(n.g),n.b=dn(n.b))),n},workingToColorSpace:function(n,a){return this.convert(n,this.workingColorSpace,a)},colorSpaceToWorking:function(n,a){return this.convert(n,a,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ar?Es:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,a=this.workingColorSpace){return n.fromArray(this.spaces[a].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,a,s){return n.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,a){return oa("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,a)},toWorkingColorSpace:function(n,a){return oa("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[_n]:{primaries:e,whitePoint:i,transfer:Es,toXYZ:nh,fromXYZ:ah,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:nh,fromXYZ:ah,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),r}const Je=zf();function qi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function dn(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Hr;class Bf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hr===void 0&&(Hr=sa("canvas")),Hr.width=e.width,Hr.height=e.height;const n=Hr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Hr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),a=n.data;for(let s=0;s<a.length;s++)a[s]=qi(a[s]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qi(t[i]/255)*255):t[i]=qi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kf=0;class dc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Li(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?a.push($s(n[s].image)):a.push($s(n[s]))}else a=$s(n);i.url=a}return t||(e.images[this.uuid]=i),i}}function $s(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Bf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hf=0;const Zs=new N;class Ft extends Fr{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,i=Rr,n=Rr,a=Ri,s=Cr,o=Ei,c=Di,l=Ft.DEFAULT_ANISOTROPY,h=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Li(),this.name="",this.source=new dc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zs).x}get height(){return this.source.getSize(Zs).y}get depth(){return this.source.getSize(Zs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ar:e.x=e.x-Math.floor(e.x);break;case Rr:e.x=e.x<0?0:1;break;case el:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ar:e.y=e.y-Math.floor(e.y);break;case Rr:e.y=e.y<0?0:1;break;case el:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=zu;Ft.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,n=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*n+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*n+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*n+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,a;const s=e.elements,o=s[0],c=s[4],l=s[8],h=s[1],u=s[5],d=s[9],p=s[2],g=s[6],_=s[10];if(Math.abs(c-h)<.01&&Math.abs(l-p)<.01&&Math.abs(d-g)<.01){if(Math.abs(c+h)<.1&&Math.abs(l+p)<.1&&Math.abs(d+g)<.1&&Math.abs(o+u+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const f=(o+1)/2,T=(u+1)/2,E=(_+1)/2,v=(c+h)/4,L=(l+p)/4,R=(d+g)/4;return f>T&&f>E?f<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(f),n=v/i,a=L/i):T>E?T<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(T),i=v/n,a=R/n):E<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(E),i=L/a,n=R/a),this.set(i,n,a,t),this}let m=Math.sqrt((g-d)*(g-d)+(l-p)*(l-p)+(h-c)*(h-c));return Math.abs(m)<.001&&(m=1),this.x=(g-d)/m,this.y=(l-p)/m,this.z=(h-c)/m,this.w=Math.acos((o+u+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vf extends Fr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const n={width:e,height:t,depth:i.depth},a=new Ft(n);this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Ri,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isArrayTexture=this.textures[n].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new dc(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends Vf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Zu extends Ft{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Si,this.minFilter=Si,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gf extends Ft{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Si,this.minFilter=Si,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ya{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,_i):_i.fromBufferAttribute(a,s),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ra.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ra.copy(i.boundingBox)),Ra.applyMatrix4(e.matrixWorld),this.union(Ra)}const n=e.children;for(let a=0,s=n.length;a<s;a++)this.expandByObject(n[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dn),Ca.subVectors(this.max,Dn),Vr.subVectors(e.a,Dn),Gr.subVectors(e.b,Dn),Wr.subVectors(e.c,Dn),Ki.subVectors(Gr,Vr),Ji.subVectors(Wr,Gr),vr.subVectors(Vr,Wr);let t=[0,-Ki.z,Ki.y,0,-Ji.z,Ji.y,0,-vr.z,vr.y,Ki.z,0,-Ki.x,Ji.z,0,-Ji.x,vr.z,0,-vr.x,-Ki.y,Ki.x,0,-Ji.y,Ji.x,0,-vr.y,vr.x,0];return!Ks(t,Vr,Gr,Wr,Ca)||(t=[1,0,0,0,1,0,0,0,1],!Ks(t,Vr,Gr,Wr,Ca))?!1:(La.crossVectors(Ki,Ji),t=[La.x,La.y,La.z],Ks(t,Vr,Gr,Wr,Ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zi=[new N,new N,new N,new N,new N,new N,new N,new N],_i=new N,Ra=new ya,Vr=new N,Gr=new N,Wr=new N,Ki=new N,Ji=new N,vr=new N,Dn=new N,Ca=new N,La=new N,xr=new N;function Ks(r,e,t,i,n){for(let a=0,s=r.length-3;a<=s;a+=3){xr.fromArray(r,a);const o=n.x*Math.abs(xr.x)+n.y*Math.abs(xr.y)+n.z*Math.abs(xr.z),c=e.dot(xr),l=t.dot(xr),h=i.dot(xr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Wf=new ya,Un=new N,Js=new N;class Ma{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Wf.setFromPoints(e).getCenter(i);let n=0;for(let a=0,s=e.length;a<s;a++)n=Math.max(n,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Un.subVectors(e,this.center);const t=Un.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Un,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Js.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Un.copy(e.center).add(Js)),this.expandByPoint(Un.copy(e.center).sub(Js))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Bi=new N,Qs=new N,Pa=new N,Qi=new N,eo=new N,Da=new N,to=new N;class Ea{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Qs.copy(e).add(t).multiplyScalar(.5),Pa.copy(t).sub(e).normalize(),Qi.copy(this.origin).sub(Qs);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Pa),o=Qi.dot(this.direction),c=-Qi.dot(Pa),l=Qi.lengthSq(),h=Math.abs(1-s*s);let u,d,p,g;if(h>0)if(u=s*c-o,d=s*o-c,g=a*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+s*d+2*o)+d*(s*u+d+2*c)+l}else d=a,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*c)+l;else d=-a,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-s*a+o)),d=u>0?-a:Math.min(Math.max(-a,-c),a),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-a,-c),a),p=d*(d+2*c)+l):(u=Math.max(0,-(s*a+o)),d=u>0?a:Math.min(Math.max(-a,-c),a),p=-u*u+d*(d+2*c)+l);else d=s>0?-a:a,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Qs).addScaledVector(Pa,d),p}intersectSphere(e,t){Bi.subVectors(e.center,this.origin);const i=Bi.dot(this.direction),n=Bi.dot(Bi)-i*i,a=e.radius*e.radius;if(n>a)return null;const s=Math.sqrt(a-n),o=i-s,c=i+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,a,s,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,n=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,n=(e.min.x-d.x)*l),h>=0?(a=(e.min.y-d.y)*h,s=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,s=(e.min.y-d.y)*h),i>s||a>n||((a>i||isNaN(i))&&(i=a),(s<n||isNaN(n))&&(n=s),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||o>n)||((o>i||i!==i)&&(i=o),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,i,n,a){eo.subVectors(t,e),Da.subVectors(i,e),to.crossVectors(eo,Da);let s=this.direction.dot(to),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Qi.subVectors(this.origin,e);const c=o*this.direction.dot(Da.crossVectors(Qi,Da));if(c<0)return null;const l=o*this.direction.dot(eo.cross(Qi));if(l<0||c+l>s)return null;const h=-o*Qi.dot(to);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,i,n,a,s,o,c,l,h,u,d,p,g,_,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,s,o,c,l,h,u,d,p,g,_,m)}set(e,t,i,n,a,s,o,c,l,h,u,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=n,f[1]=a,f[5]=s,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Xr.setFromMatrixColumn(e,0).length(),a=1/Xr.setFromMatrixColumn(e,1).length(),s=1/Xr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),c=Math.cos(n),l=Math.sin(n),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const d=s*h,p=s*u,g=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+p*l,t[10]=s*c}else if(e.order==="YXZ"){const d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d+_*o,t[4]=g*o-p,t[8]=s*l,t[1]=s*u,t[5]=s*h,t[9]=-o,t[2]=p*o-g,t[6]=_+d*o,t[10]=s*c}else if(e.order==="ZXY"){const d=c*h,p=c*u,g=l*h,_=l*u;t[0]=d-_*o,t[4]=-s*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=s*h,t[9]=_-d*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const d=s*h,p=s*u,g=o*h,_=o*u;t[0]=c*h,t[4]=g*l-p,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const d=s*c,p=s*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=s*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=s*c,p=s*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=s*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xf,e,jf)}lookAt(e,t,i){const n=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),er.crossVectors(i,Zt),er.lengthSq()===0&&(Math.abs(i.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),er.crossVectors(i,Zt)),er.normalize(),Ua.crossVectors(Zt,er),n[0]=er.x,n[4]=Ua.x,n[8]=Zt.x,n[1]=er.y,n[5]=Ua.y,n[9]=Zt.y,n[2]=er.z,n[6]=Ua.z,n[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,a=this.elements,s=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],T=i[3],E=i[7],v=i[11],L=i[15],R=n[0],w=n[4],C=n[8],x=n[12],y=n[1],b=n[5],U=n[9],F=n[13],I=n[2],D=n[6],O=n[10],W=n[14],V=n[3],q=n[7],ee=n[11],se=n[15];return a[0]=s*R+o*y+c*I+l*V,a[4]=s*w+o*b+c*D+l*q,a[8]=s*C+o*U+c*O+l*ee,a[12]=s*x+o*F+c*W+l*se,a[1]=h*R+u*y+d*I+p*V,a[5]=h*w+u*b+d*D+p*q,a[9]=h*C+u*U+d*O+p*ee,a[13]=h*x+u*F+d*W+p*se,a[2]=g*R+_*y+m*I+f*V,a[6]=g*w+_*b+m*D+f*q,a[10]=g*C+_*U+m*O+f*ee,a[14]=g*x+_*F+m*W+f*se,a[3]=T*R+E*y+v*I+L*V,a[7]=T*w+E*b+v*D+L*q,a[11]=T*C+E*U+v*O+L*ee,a[15]=T*x+E*F+v*W+L*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],a=e[12],s=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+a*c*u-n*l*u-a*o*d+i*l*d+n*o*p-i*c*p)+_*(+t*c*p-t*l*d+a*s*d-n*s*p+n*l*h-a*c*h)+m*(+t*l*u-t*o*p-a*s*u+i*s*p+a*o*h-i*l*h)+f*(-n*o*h-t*c*u+t*o*d+n*s*u-i*s*d+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],T=u*m*l-_*d*l+_*c*p-o*m*p-u*c*f+o*d*f,E=g*d*l-h*m*l-g*c*p+s*m*p+h*c*f-s*d*f,v=h*_*l-g*u*l+g*o*p-s*_*p-h*o*f+s*u*f,L=g*u*c-h*_*c-g*o*d+s*_*d+h*o*m-s*u*m,R=t*T+i*E+n*v+a*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=T*w,e[1]=(_*d*a-u*m*a-_*n*p+i*m*p+u*n*f-i*d*f)*w,e[2]=(o*m*a-_*c*a+_*n*l-i*m*l-o*n*f+i*c*f)*w,e[3]=(u*c*a-o*d*a-u*n*l+i*d*l+o*n*p-i*c*p)*w,e[4]=E*w,e[5]=(h*m*a-g*d*a+g*n*p-t*m*p-h*n*f+t*d*f)*w,e[6]=(g*c*a-s*m*a-g*n*l+t*m*l+s*n*f-t*c*f)*w,e[7]=(s*d*a-h*c*a+h*n*l-t*d*l-s*n*p+t*c*p)*w,e[8]=v*w,e[9]=(g*u*a-h*_*a-g*i*p+t*_*p+h*i*f-t*u*f)*w,e[10]=(s*_*a-g*o*a+g*i*l-t*_*l-s*i*f+t*o*f)*w,e[11]=(h*o*a-s*u*a-h*i*l+t*u*l+s*i*p-t*o*p)*w,e[12]=L*w,e[13]=(h*_*n-g*u*n+g*i*d-t*_*d-h*i*m+t*u*m)*w,e[14]=(g*o*n-s*_*n-g*i*c+t*_*c+s*i*m-t*o*m)*w,e[15]=(s*u*n-h*o*n+h*i*c-t*u*c-s*i*d+t*o*d)*w,this}scale(e){const t=this.elements,i=e.x,n=e.y,a=e.z;return t[0]*=i,t[4]*=n,t[8]*=a,t[1]*=i,t[5]*=n,t[9]*=a,t[2]*=i,t[6]*=n,t[10]*=a,t[3]*=i,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),a=1-i,s=e.x,o=e.y,c=e.z,l=a*s,h=a*o;return this.set(l*s+i,l*o-n*c,l*c+n*o,0,l*o+n*c,h*o+i,h*c-n*s,0,l*c-n*o,h*c+n*s,a*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,a,s){return this.set(1,i,a,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,a=t._x,s=t._y,o=t._z,c=t._w,l=a+a,h=s+s,u=o+o,d=a*l,p=a*h,g=a*u,_=s*h,m=s*u,f=o*u,T=c*l,E=c*h,v=c*u,L=i.x,R=i.y,w=i.z;return n[0]=(1-(_+f))*L,n[1]=(p+v)*L,n[2]=(g-E)*L,n[3]=0,n[4]=(p-v)*R,n[5]=(1-(d+f))*R,n[6]=(m+T)*R,n[7]=0,n[8]=(g+E)*w,n[9]=(m-T)*w,n[10]=(1-(d+_))*w,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let a=Xr.set(n[0],n[1],n[2]).length();const s=Xr.set(n[4],n[5],n[6]).length(),o=Xr.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],vi.copy(this);const c=1/a,l=1/s,h=1/o;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=l,vi.elements[5]*=l,vi.elements[6]*=l,vi.elements[8]*=h,vi.elements[9]*=h,vi.elements[10]*=h,t.setFromRotationMatrix(vi),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,n,a,s,o=Ci,c=!1){const l=this.elements,h=2*a/(t-e),u=2*a/(i-n),d=(t+e)/(t-e),p=(i+n)/(i-n);let g,_;if(c)g=a/(s-a),_=s*a/(s-a);else if(o===Ci)g=-(s+a)/(s-a),_=-2*s*a/(s-a);else if(o===Ss)g=-s/(s-a),_=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,a,s,o=Ci,c=!1){const l=this.elements,h=2/(t-e),u=2/(i-n),d=-(t+e)/(t-e),p=-(i+n)/(i-n);let g,_;if(c)g=1/(s-a),_=s/(s-a);else if(o===Ci)g=-2/(s-a),_=-(s+a)/(s-a);else if(o===Ss)g=-1/(s-a),_=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Xr=new N,vi=new lt,Xf=new N(0,0,0),jf=new N(1,1,1),er=new N,Ua=new N,Zt=new N,sh=new lt,oh=new Ir;class Ui{constructor(e=0,t=0,i=0,n=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,a=n[0],s=n[4],o=n[8],c=n[1],l=n[5],h=n[9],u=n[2],d=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-je(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return sh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oh.setFromEuler(this),this.setFromQuaternion(oh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class pc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qf=0;const lh=new N,jr=new Ir,ki=new lt,Ia=new N,In=new N,Yf=new N,$f=new Ir,ch=new N(1,0,0),hh=new N(0,1,0),uh=new N(0,0,1),dh={type:"added"},Zf={type:"removed"},qr={type:"childadded",child:null},io={type:"childremoved",child:null};class Rt extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new N,t=new Ui,i=new Ir,n=new N(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new lt},normalMatrix:{value:new We}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.multiply(jr),this}rotateOnWorldAxis(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.premultiply(jr),this}rotateX(e){return this.rotateOnAxis(ch,e)}rotateY(e){return this.rotateOnAxis(hh,e)}rotateZ(e){return this.rotateOnAxis(uh,e)}translateOnAxis(e,t){return lh.copy(e).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ch,e)}translateY(e){return this.translateOnAxis(hh,e)}translateZ(e){return this.translateOnAxis(uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ia.copy(e):Ia.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),In.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(In,Ia,this.up):ki.lookAt(Ia,In,this.up),this.quaternion.setFromRotationMatrix(ki),n&&(ki.extractRotation(n.matrixWorld),jr.setFromRotationMatrix(ki),this.quaternion.premultiply(jr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dh),qr.child=e,this.dispatchEvent(qr),qr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zf),io.child=e,this.dispatchEvent(io),io.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dh),qr.child=e,this.dispatchEvent(qr),qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(In,e,Yf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(In,$f,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];a(e.shapes,u)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));n.material=o}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];n.animations.push(a(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),l=s(e.textures),h=s(e.images),u=s(e.shapes),d=s(e.skeletons),p=s(e.animations),g=s(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=n,i;function s(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}Rt.DEFAULT_UP=new N(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new N,Hi=new N,ro=new N,Vi=new N,Yr=new N,$r=new N,ph=new N,no=new N,ao=new N,so=new N,oo=new gt,lo=new gt,co=new gt;class ei{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),xi.subVectors(e,t),n.cross(xi);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,i,n,a){xi.subVectors(n,t),Hi.subVectors(i,t),ro.subVectors(e,t);const s=xi.dot(xi),o=xi.dot(Hi),c=xi.dot(ro),l=Hi.dot(Hi),h=Hi.dot(ro),u=s*l-o*o;if(u===0)return a.set(0,0,0),null;const d=1/u,p=(l*c-o*h)*d,g=(s*h-o*c)*d;return a.set(1-p-g,g,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,i,n,a,s,o,c){return this.getBarycoord(e,t,i,n,Vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Vi.x),c.addScaledVector(s,Vi.y),c.addScaledVector(o,Vi.z),c)}static getInterpolatedAttribute(e,t,i,n,a,s){return oo.setScalar(0),lo.setScalar(0),co.setScalar(0),oo.fromBufferAttribute(e,t),lo.fromBufferAttribute(e,i),co.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(oo,a.x),s.addScaledVector(lo,a.y),s.addScaledVector(co,a.z),s}static isFrontFacing(e,t,i,n){return xi.subVectors(i,t),Hi.subVectors(e,t),xi.cross(Hi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),xi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,a){return ei.getInterpolation(e,this.a,this.b,this.c,t,i,n,a)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,a=this.c;let s,o;Yr.subVectors(n,i),$r.subVectors(a,i),no.subVectors(e,i);const c=Yr.dot(no),l=$r.dot(no);if(c<=0&&l<=0)return t.copy(i);ao.subVectors(e,n);const h=Yr.dot(ao),u=$r.dot(ao);if(h>=0&&u<=h)return t.copy(n);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return s=c/(c-h),t.copy(i).addScaledVector(Yr,s);so.subVectors(e,a);const p=Yr.dot(so),g=$r.dot(so);if(g>=0&&p<=g)return t.copy(a);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector($r,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return ph.subVectors(a,n),o=(u-h)/(u-h+(p-g)),t.copy(n).addScaledVector(ph,o);const f=1/(m+_+d);return s=_*f,o=d*f,t.copy(i).addScaledVector(Yr,s).addScaledVector($r,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},Na={h:0,s:0,l:0};function ho(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=Je.workingColorSpace){if(e=uc(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=ho(s,a,e+1/3),this.g=ho(s,a,e),this.b=ho(s,a,e-1/3)}return Je.colorSpaceToWorking(this,n),this}setStyle(e,t=li){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=li){const i=Ku[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=dn(e.r),this.g=dn(e.g),this.b=dn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return Je.workingToColorSpace(Ot.copy(this),e),Math.round(je(Ot.r*255,0,255))*65536+Math.round(je(Ot.g*255,0,255))*256+Math.round(je(Ot.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Ot.copy(this),t);const i=Ot.r,n=Ot.g,a=Ot.b,s=Math.max(i,n,a),o=Math.min(i,n,a);let c,l;const h=(o+s)/2;if(o===s)c=0,l=0;else{const u=s-o;switch(l=h<=.5?u/(s+o):u/(2-s-o),s){case i:c=(n-a)/u+(n<a?6:0);break;case n:c=(a-i)/u+2;break;case a:c=(i-n)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=li){Je.workingToColorSpace(Ot.copy(this),e);const t=Ot.r,i=Ot.g,n=Ot.b;return e!==li?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+t,tr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(tr),e.getHSL(Na);const i=Yn(tr.h,Na.h,t),n=Yn(tr.s,Na.s,t),a=Yn(tr.l,Na.l,t);return this.setHSL(i,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*n,this.g=a[1]*t+a[4]*i+a[7]*n,this.b=a[2]*t+a[5]*i+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new ke;ke.NAMES=Ku;let Kf=0;class fr extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=lr,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Go,this.blendDst=Wo,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=fn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(i.blending=this.blending),this.side!==ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Go&&(i.blendSrc=this.blendSrc),this.blendDst!==Wo&&(i.blendDst=this.blendDst),this.blendEquation!==br&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==kr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==kr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const s=[];for(const o in a){const c=a[o];delete c.metadata,s.push(c)}return s}if(t){const a=n(e.textures),s=n(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class on extends fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new N,Oa=new re;let Jf=0;class Wt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Cl,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Oa.fromBufferAttribute(this,t),Oa.applyMatrix3(e),this.setXY(t,Oa.x,Oa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=yi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=et(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,a){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array),n=et(n,this.array),a=et(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cl&&(e.usage=this.usage),e}}class Ju extends Wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Qu extends Wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ht extends Wt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Qf=0;const si=new lt,uo=new Rt,Zr=new N,Kt=new ya,Nn=new ya,Pt=new N;class bt extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($u(e)?Qu:Ju)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new We().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,i){return si.makeTranslation(e,t,i),this.applyMatrix4(si),this}scale(e,t,i){return si.makeScale(e,t,i),this.applyMatrix4(si),this}lookAt(e){return uo.lookAt(e),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,a=e.length;n<a;n++){const s=e[n];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new ht(i,3))}else{const i=Math.min(e.length,t.count);for(let n=0;n<i;n++){const a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const a=t[i];Kt.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ma);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Nn.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(Kt.min,Nn.min),Kt.expandByPoint(Pt),Pt.addVectors(Kt.max,Nn.max),Kt.expandByPoint(Pt)):(Kt.expandByPoint(Nn.min),Kt.expandByPoint(Nn.max))}Kt.getCenter(i);let n=0;for(let a=0,s=e.count;a<s;a++)Pt.fromBufferAttribute(e,a),n=Math.max(n,i.distanceToSquared(Pt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Pt.fromBufferAttribute(o,l),c&&(Zr.fromBufferAttribute(e,l),Pt.add(Zr)),n=Math.max(n,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<i.count;C++)o[C]=new N,c[C]=new N;const l=new N,h=new N,u=new N,d=new re,p=new re,g=new re,_=new N,m=new N;function f(C,x,y){l.fromBufferAttribute(i,C),h.fromBufferAttribute(i,x),u.fromBufferAttribute(i,y),d.fromBufferAttribute(a,C),p.fromBufferAttribute(a,x),g.fromBufferAttribute(a,y),h.sub(l),u.sub(l),p.sub(d),g.sub(d);const b=1/(p.x*g.y-g.x*p.y);isFinite(b)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(b),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(b),o[C].add(_),o[x].add(_),o[y].add(_),c[C].add(m),c[x].add(m),c[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let C=0,x=T.length;C<x;++C){const y=T[C],b=y.start,U=y.count;for(let F=b,I=b+U;F<I;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const E=new N,v=new N,L=new N,R=new N;function w(C){L.fromBufferAttribute(n,C),R.copy(L);const x=o[C];E.copy(x),E.sub(L.multiplyScalar(L.dot(x))).normalize(),v.crossVectors(R,x);const y=v.dot(c[C])<0?-1:1;s.setXYZW(C,E.x,E.y,E.z,y)}for(let C=0,x=T.length;C<x;++C){const y=T[C],b=y.start,U=y.count;for(let F=b,I=b+U;F<I;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const n=new N,a=new N,s=new N,o=new N,c=new N,l=new N,h=new N,u=new N;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),h.subVectors(s,a),u.subVectors(n,a),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)n.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),h.subVectors(s,a),u.subVectors(n,a),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new Wt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bt,i=this.index.array,n=this.attributes;for(const o in n){const c=n[o],l=e(c,i);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=e(d,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const n={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(n[c]=h,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const n=e.attributes;for(const l in n){const h=n[l];this.setAttribute(l,h.clone(t))}const a=e.morphAttributes;for(const l in a){const h=[],u=a[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,h=s.length;l<h;l++){const u=s[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fh=new lt,yr=new Ea,Fa=new Ma,mh=new N,za=new N,Ba=new N,ka=new N,po=new N,Ha=new N,gh=new N,Va=new N;class Vt extends Rt{constructor(e=new bt,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(a&&o){Ha.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const h=o[c],u=a[c];h!==0&&(po.fromBufferAttribute(u,e),s?Ha.addScaledVector(po,h):Ha.addScaledVector(po.sub(t),h))}t.add(Ha)}return t}raycast(e,t){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(a),yr.copy(e.ray).recast(e.near),!(Fa.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Fa,mh)===null||yr.origin.distanceToSquared(mh)>(e.far-e.near)**2))&&(fh.copy(a).invert(),yr.copy(e.ray).applyMatrix4(fh),!(i.boundingBox!==null&&yr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,yr)))}_computeIntersections(e,t,i){let n;const a=this.geometry,s=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=s[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=T,L=E;v<L;v+=3){const R=o.getX(v),w=o.getX(v+1),C=o.getX(v+2);n=Ga(this,f,e,i,l,h,u,R,w,C),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const T=o.getX(m),E=o.getX(m+1),v=o.getX(m+2);n=Ga(this,s,e,i,l,h,u,T,E,v),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(c!==void 0)if(Array.isArray(s))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=s[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=T,L=E;v<L;v+=3){const R=v,w=v+1,C=v+2;n=Ga(this,f,e,i,l,h,u,R,w,C),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const T=m,E=m+1,v=m+2;n=Ga(this,s,e,i,l,h,u,T,E,v),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function em(r,e,t,i,n,a,s,o){let c;if(e.side===qt?c=i.intersectTriangle(s,a,n,!0,o):c=i.intersectTriangle(n,a,s,e.side===ur,o),c===null)return null;Va.copy(o),Va.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Va);return l<t.near||l>t.far?null:{distance:l,point:Va.clone(),object:r}}function Ga(r,e,t,i,n,a,s,o,c,l){r.getVertexPosition(o,za),r.getVertexPosition(c,Ba),r.getVertexPosition(l,ka);const h=em(r,e,t,i,za,Ba,ka,gh);if(h){const u=new N;ei.getBarycoord(gh,za,Ba,ka,u),n&&(h.uv=ei.getInterpolatedAttribute(n,o,c,l,u,new re)),a&&(h.uv1=ei.getInterpolatedAttribute(a,o,c,l,u,new re)),s&&(h.normal=ei.getInterpolatedAttribute(s,o,c,l,u,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new N,materialIndex:0};ei.getNormal(za,Ba,ka,d.normal),h.face=d,h.barycoord=u}return h}class Sa extends bt{constructor(e=1,t=1,i=1,n=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:a,depthSegments:s};const o=this;n=Math.floor(n),a=Math.floor(a),s=Math.floor(s);const c=[],l=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,s,a,0),g("z","y","x",1,-1,i,t,-e,s,a,1),g("x","z","y",1,1,e,i,t,n,s,2),g("x","z","y",1,-1,e,i,-t,n,s,3),g("x","y","z",1,-1,e,t,i,n,a,4),g("x","y","z",-1,-1,e,t,-i,n,a,5),this.setIndex(c),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(u,2));function g(_,m,f,T,E,v,L,R,w,C,x){const y=v/w,b=L/C,U=v/2,F=L/2,I=R/2,D=w+1,O=C+1;let W=0,V=0;const q=new N;for(let ee=0;ee<O;ee++){const se=ee*b-F;for(let oe=0;oe<D;oe++){const ue=oe*y-U;q[_]=ue*T,q[m]=se*E,q[f]=I,l.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[f]=R>0?1:-1,h.push(q.x,q.y,q.z),u.push(oe/w),u.push(1-ee/C),W+=1}}for(let ee=0;ee<C;ee++)for(let se=0;se<w;se++){const oe=d+se+D*ee,ue=d+se+D*(ee+1),Me=d+(se+1)+D*(ee+1),Ee=d+(se+1)+D*ee;c.push(oe,ue,Ee),c.push(ue,Me,Ee),V+=6}o.addGroup(p,V,x),p+=V,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vn(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Ht(r){const e={};for(let t=0;t<r.length;t++){const i=vn(r[t]);for(const n in i)e[n]=i[n]}return e}function tm(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ed(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const im={clone:vn,merge:Ht};var rm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends fr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rm,this.fragmentShader=nm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vn(e.uniforms),this.uniformsGroups=tm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class td extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ir=new N,_h=new re,vh=new re;class hi extends td{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=aa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(un*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return aa*2*Math.atan(Math.tan(un*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,t){return this.getViewBounds(e,_h,vh),t.subVectors(vh,_h)}setViewOffset(e,t,i,n,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(un*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,a=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;a+=s.offsetX*n/c,t-=s.offsetY*i/l,n*=s.width/c,i*=s.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Kr=-90,Jr=1;class am extends Rt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new hi(Kr,Jr,e,t);n.layers=this.layers,this.add(n);const a=new hi(Kr,Jr,e,t);a.layers=this.layers,this.add(a);const s=new hi(Kr,Jr,e,t);s.layers=this.layers,this.add(s);const o=new hi(Kr,Jr,e,t);o.layers=this.layers,this.add(o);const c=new hi(Kr,Jr,e,t);c.layers=this.layers,this.add(c);const l=new hi(Kr,Jr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,a,s,o,c]=t;for(const l of t)this.remove(l);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ss)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,a),e.setRenderTarget(i,1,n),e.render(t,s),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,c),e.setRenderTarget(i,4,n),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class id extends Ft{constructor(e=[],t=mn,i,n,a,s,o,c,l,h){super(e,t,i,n,a,s,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sm extends Nr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new id(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Sa(5,5,5),a=new Yi({name:"CubemapFromEquirect",uniforms:vn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:or});a.uniforms.tEquirect.value=t;const s=new Vt(n,a),o=t.minFilter;return t.minFilter===Cr&&(t.minFilter=Ri),new am(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,n);e.setRenderTarget(a)}}class kn extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const om={type:"move"};class fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,a=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(om)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new kn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class lm extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class cm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cl,this.updateRanges=[],this.version=0,this.uuid=Li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,a=this.stride;n<a;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new N;class Ts{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=yi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=et(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array),n=et(n,this.array),a=et(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[n+a])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ts(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[n+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ll extends fr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Qr;const On=new N,en=new N,tn=new N,rn=new re,Fn=new re,rd=new lt,Wa=new N,zn=new N,Xa=new N,xh=new re,mo=new re,yh=new re;class Mh extends Rt{constructor(e=new Ll){if(super(),this.isSprite=!0,this.type="Sprite",Qr===void 0){Qr=new bt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new cm(t,5);Qr.setIndex([0,1,2,0,2,3]),Qr.setAttribute("position",new Ts(i,3,0,!1)),Qr.setAttribute("uv",new Ts(i,2,3,!1))}this.geometry=Qr,this.material=e,this.center=new re(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),en.setFromMatrixScale(this.matrixWorld),rd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),tn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&en.multiplyScalar(-tn.z);const i=this.material.rotation;let n,a;i!==0&&(a=Math.cos(i),n=Math.sin(i));const s=this.center;ja(Wa.set(-.5,-.5,0),tn,s,en,n,a),ja(zn.set(.5,-.5,0),tn,s,en,n,a),ja(Xa.set(.5,.5,0),tn,s,en,n,a),xh.set(0,0),mo.set(1,0),yh.set(1,1);let o=e.ray.intersectTriangle(Wa,zn,Xa,!1,On);if(o===null&&(ja(zn.set(-.5,.5,0),tn,s,en,n,a),mo.set(0,1),o=e.ray.intersectTriangle(Wa,Xa,zn,!1,On),o===null))return;const c=e.ray.origin.distanceTo(On);c<e.near||c>e.far||t.push({distance:c,point:On.clone(),uv:ei.getInterpolation(On,Wa,zn,Xa,xh,mo,yh,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ja(r,e,t,i,n,a){rn.subVectors(r,t).addScalar(.5).multiply(i),n!==void 0?(Fn.x=a*rn.x-n*rn.y,Fn.y=n*rn.x+a*rn.y):Fn.copy(rn),r.copy(e),r.x+=Fn.x,r.y+=Fn.y,r.applyMatrix4(rd)}const go=new N,hm=new N,um=new We;class nr{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=go.subVectors(i,t).cross(hm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(go),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||um.getNormalMatrix(e),n=this.coplanarPoint(go).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new Ma,dm=new re(.5,.5),qa=new N;class fc{constructor(e=new nr,t=new nr,i=new nr,n=new nr,a=new nr,s=new nr){this.planes=[e,t,i,n,a,s]}set(e,t,i,n,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ci,i=!1){const n=this.planes,a=e.elements,s=a[0],o=a[1],c=a[2],l=a[3],h=a[4],u=a[5],d=a[6],p=a[7],g=a[8],_=a[9],m=a[10],f=a[11],T=a[12],E=a[13],v=a[14],L=a[15];if(n[0].setComponents(l-s,p-h,f-g,L-T).normalize(),n[1].setComponents(l+s,p+h,f+g,L+T).normalize(),n[2].setComponents(l+o,p+u,f+_,L+E).normalize(),n[3].setComponents(l-o,p-u,f-_,L-E).normalize(),i)n[4].setComponents(c,d,m,v).normalize(),n[5].setComponents(l-c,p-d,f-m,L-v).normalize();else if(n[4].setComponents(l-c,p-d,f-m,L-v).normalize(),t===Ci)n[5].setComponents(l+c,p+d,f+m,L+v).normalize();else if(t===Ss)n[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){Mr.center.set(0,0,0);const t=dm.distanceTo(e.center);return Mr.radius=.7071067811865476+t,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(qa.x=n.normal.x>0?e.max.x:e.min.x,qa.y=n.normal.y>0?e.max.y:e.min.y,qa.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bs extends fr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ws=new N,As=new N,Eh=new lt,Bn=new Ea,Ya=new Ma,_o=new N,Sh=new N;class pm extends Rt{constructor(e=new bt,t=new bs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,a=t.count;n<a;n++)ws.fromBufferAttribute(t,n-1),As.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=ws.distanceTo(As);e.setAttribute("lineDistance",new ht(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,a=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(n),Ya.radius+=a,e.ray.intersectsSphere(Ya)===!1)return;Eh.copy(n).invert(),Bn.copy(e.ray).applyMatrix4(Eh);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const d=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let g=d,_=p-1;g<_;g+=l){const m=h.getX(g),f=h.getX(g+1),T=$a(this,e,Bn,c,m,f,g);T&&t.push(T)}if(this.isLineLoop){const g=h.getX(p-1),_=h.getX(d),m=$a(this,e,Bn,c,g,_,p-1);m&&t.push(m)}}else{const d=Math.max(0,s.start),p=Math.min(u.count,s.start+s.count);for(let g=d,_=p-1;g<_;g+=l){const m=$a(this,e,Bn,c,g,g+1,g);m&&t.push(m)}if(this.isLineLoop){const g=$a(this,e,Bn,c,p-1,d,p-1);g&&t.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}}function $a(r,e,t,i,n,a,s){const o=r.geometry.attributes.position;if(ws.fromBufferAttribute(o,n),As.fromBufferAttribute(o,a),t.distanceSqToSegment(ws,As,_o,Sh)>i)return;_o.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(_o);if(!(c<e.near||c>e.far))return{distance:c,point:Sh.clone().applyMatrix4(r.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:r}}const Th=new N,bh=new N;class Pl extends pm{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,a=t.count;n<a;n+=2)Th.fromBufferAttribute(t,n),bh.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Th.distanceTo(bh);e.setAttribute("lineDistance",new ht(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Dl extends fr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wh=new lt,Ul=new Ea,Za=new Ma,Ka=new N;class Ah extends Rt{constructor(e=new bt,t=new Dl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,a=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Za.copy(i.boundingSphere),Za.applyMatrix4(n),Za.radius+=a,e.ray.intersectsSphere(Za)===!1)return;wh.copy(n).invert(),Ul.copy(e.ray).applyMatrix4(wh);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,h=i.attributes.position;if(l!==null){const u=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);for(let p=u,g=d;p<g;p++){const _=l.getX(p);Ka.fromBufferAttribute(h,_),Rh(Ka,_,c,n,e,t,this)}}else{const u=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);for(let p=u,g=d;p<g;p++)Ka.fromBufferAttribute(h,p),Rh(Ka,p,c,n,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}}function Rh(r,e,t,i,n,a,s){const o=Ul.distanceSqToPoint(r);if(o<t){const c=new N;Ul.closestPointToPoint(r,c),c.applyMatrix4(i);const l=n.ray.origin.distanceTo(c);if(l<n.near||l>n.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class vo extends Ft{constructor(e,t,i,n,a,s,o,c,l){super(e,t,i,n,a,s,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nd extends Ft{constructor(e,t,i=Ur,n,a,s,o=Si,c=Si,l,h=ra,u=1){if(h!==ra&&h!==na)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,n,a,s,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ad extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Rs extends bt{constructor(e=1,t=1,i=1,n=32,a=1,s=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:c};const l=this;n=Math.floor(n),a=Math.floor(a);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=i/2;let f=0;T(),s===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(p,2));function T(){const v=new N,L=new N;let R=0;const w=(t-e)/i;for(let C=0;C<=a;C++){const x=[],y=C/a,b=y*(t-e)+e;for(let U=0;U<=n;U++){const F=U/n,I=F*c+o,D=Math.sin(I),O=Math.cos(I);L.x=b*D,L.y=-y*i+m,L.z=b*O,u.push(L.x,L.y,L.z),v.set(D,w,O).normalize(),d.push(v.x,v.y,v.z),p.push(F,1-y),x.push(g++)}_.push(x)}for(let C=0;C<n;C++)for(let x=0;x<a;x++){const y=_[x][C],b=_[x+1][C],U=_[x+1][C+1],F=_[x][C+1];(e>0||x!==0)&&(h.push(y,b,F),R+=3),(t>0||x!==a-1)&&(h.push(b,U,F),R+=3)}l.addGroup(f,R,0),f+=R}function E(v){const L=g,R=new re,w=new N;let C=0;const x=v===!0?e:t,y=v===!0?1:-1;for(let U=1;U<=n;U++)u.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),g++;const b=g;for(let U=0;U<=n;U++){const F=U/n*c+o,I=Math.cos(F),D=Math.sin(F);w.x=x*D,w.y=m*y,w.z=x*I,u.push(w.x,w.y,w.z),d.push(0,y,0),R.x=I*.5+.5,R.y=D*.5*y+.5,p.push(R.x,R.y),g++}for(let U=0;U<n;U++){const F=L+U,I=b+U;v===!0?h.push(I,I+1,F):h.push(I+1,I,F),C+=3}l.addGroup(f,C,v===!0?1:2),f+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Ja=new N,Qa=new N,xo=new N,es=new ei;class fm extends bt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),n=Math.cos(un*t),a=e.getIndex(),s=e.getAttribute("position"),o=a?a.count:s.count,c=[0,0,0],l=["a","b","c"],h=new Array(3),u={},d=[];for(let p=0;p<o;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:g,b:_,c:m}=es;if(g.fromBufferAttribute(s,c[0]),_.fromBufferAttribute(s,c[1]),m.fromBufferAttribute(s,c[2]),es.getNormal(xo),h[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[1]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let f=0;f<3;f++){const T=(f+1)%3,E=h[f],v=h[T],L=es[l[f]],R=es[l[T]],w=`${E}_${v}`,C=`${v}_${E}`;C in u&&u[C]?(xo.dot(u[C].normal)<=n&&(d.push(L.x,L.y,L.z),d.push(R.x,R.y,R.z)),u[C]=null):w in u||(u[w]={index0:c[f],index1:c[T],normal:xo.clone()})}}for(const p in u)if(u[p]){const{index0:g,index1:_}=u[p];Ja.fromBufferAttribute(s,g),Qa.fromBufferAttribute(s,_),d.push(Ja.x,Ja.y,Ja.z),d.push(Qa.x,Qa.y,Qa.z)}this.setAttribute("position",new ht(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ni{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),a+=i.distanceTo(n),t.push(a),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let n=0;const a=i.length;let s;t?s=t:s=e*i[a-1];let o=0,c=a-1,l;for(;o<=c;)if(n=Math.floor(o+(c-o)/2),l=i[n]-s,l<0)o=n+1;else if(l>0)c=n-1;else{c=n;break}if(n=c,i[n]===s)return n/(a-1);const h=i[n],u=i[n+1]-h,d=(s-h)/u;return(n+d)/(a-1)}getTangent(e,t){let i=e-1e-4,n=e+1e-4;i<0&&(i=0),n>1&&(n=1);const a=this.getPoint(i),s=this.getPoint(n),o=t||(a.isVector2?new re:new N);return o.copy(s).sub(a).normalize(),o}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new N,n=[],a=[],s=[],o=new N,c=new lt;for(let p=0;p<=e;p++){const g=p/e;n[p]=this.getTangentAt(g,new N)}a[0]=new N,s[0]=new N;let l=Number.MAX_VALUE;const h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),a[0].crossVectors(n[0],o),s[0].crossVectors(n[0],a[0]);for(let p=1;p<=e;p++){if(a[p]=a[p-1].clone(),s[p]=s[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(je(n[p-1].dot(n[p]),-1,1));a[p].applyMatrix4(c.makeRotationAxis(o,g))}s[p].crossVectors(n[p],a[p])}if(t===!0){let p=Math.acos(je(a[0].dot(a[e]),-1,1));p/=e,n[0].dot(o.crossVectors(a[0],a[e]))>0&&(p=-p);for(let g=1;g<=e;g++)a[g].applyMatrix4(c.makeRotationAxis(n[g],p*g)),s[g].crossVectors(n[g],a[g])}return{tangents:n,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class mc extends Ni{constructor(e=0,t=0,i=1,n=1,a=0,s=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new re){const i=t,n=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=n;for(;a>n;)a-=n;a<Number.EPSILON&&(s?a=0:a=n),this.aClockwise===!0&&!s&&(a===n?a=-n:a=a-n);const o=this.aStartAngle+e*a;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class mm extends mc{constructor(e,t,i,n,a,s){super(e,t,i,i,n,a,s),this.isArcCurve=!0,this.type="ArcCurve"}}function gc(){let r=0,e=0,t=0,i=0;function n(a,s,o,c){r=a,e=o,t=-3*a+3*s-2*o-c,i=2*a-2*s+o+c}return{initCatmullRom:function(a,s,o,c,l){n(s,o,l*(o-a),l*(c-s))},initNonuniformCatmullRom:function(a,s,o,c,l,h,u){let d=(s-a)/l-(o-a)/(l+h)+(o-s)/h,p=(o-s)/h-(c-s)/(h+u)+(c-o)/u;d*=h,p*=h,n(s,o,d,p)},calc:function(a){const s=a*a,o=s*a;return r+e*a+t*s+i*o}}}const ts=new N,yo=new gc,Mo=new gc,Eo=new gc;class gm extends Ni{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new N){const i=t,n=this.points,a=n.length,s=(a-(this.closed?0:1))*e;let o=Math.floor(s),c=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:c===0&&o===a-1&&(o=a-2,c=1);let l,h;this.closed||o>0?l=n[(o-1)%a]:(ts.subVectors(n[0],n[1]).add(n[0]),l=ts);const u=n[o%a],d=n[(o+1)%a];if(this.closed||o+2<a?h=n[(o+2)%a]:(ts.subVectors(n[a-1],n[a-2]).add(n[a-1]),h=ts),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),yo.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),Mo.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),Eo.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(yo.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Mo.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Eo.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(yo.calc(c),Mo.calc(c),Eo.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new N().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ch(r,e,t,i,n){const a=(i-e)*.5,s=(n-t)*.5,o=r*r,c=r*o;return(2*t-2*i+a+s)*c+(-3*t+3*i-2*a-s)*o+a*r+t}function _m(r,e){const t=1-r;return t*t*e}function vm(r,e){return 2*(1-r)*r*e}function xm(r,e){return r*r*e}function $n(r,e,t,i){return _m(r,e)+vm(r,t)+xm(r,i)}function ym(r,e){const t=1-r;return t*t*t*e}function Mm(r,e){const t=1-r;return 3*t*t*r*e}function Em(r,e){return 3*(1-r)*r*r*e}function Sm(r,e){return r*r*r*e}function Zn(r,e,t,i,n){return ym(r,e)+Mm(r,t)+Em(r,i)+Sm(r,n)}class sd extends Ni{constructor(e=new re,t=new re,i=new re,n=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new re){const i=t,n=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(Zn(e,n.x,a.x,s.x,o.x),Zn(e,n.y,a.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Tm extends Ni{constructor(e=new N,t=new N,i=new N,n=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new N){const i=t,n=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(Zn(e,n.x,a.x,s.x,o.x),Zn(e,n.y,a.y,s.y,o.y),Zn(e,n.z,a.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class od extends Ni{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bm extends Ni{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ld extends Ni{constructor(e=new re,t=new re,i=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new re){const i=t,n=this.v0,a=this.v1,s=this.v2;return i.set($n(e,n.x,a.x,s.x),$n(e,n.y,a.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wm extends Ni{constructor(e=new N,t=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new N){const i=t,n=this.v0,a=this.v1,s=this.v2;return i.set($n(e,n.x,a.x,s.x),$n(e,n.y,a.y,s.y),$n(e,n.z,a.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cd extends Ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){const i=t,n=this.points,a=(n.length-1)*e,s=Math.floor(a),o=a-s,c=n[s===0?s:s-1],l=n[s],h=n[s>n.length-2?n.length-1:s+1],u=n[s>n.length-3?n.length-1:s+2];return i.set(Ch(o,c.x,l.x,h.x,u.x),Ch(o,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new re().fromArray(n))}return this}}var Il=Object.freeze({__proto__:null,ArcCurve:mm,CatmullRomCurve3:gm,CubicBezierCurve:sd,CubicBezierCurve3:Tm,EllipseCurve:mc,LineCurve:od,LineCurve3:bm,QuadraticBezierCurve:ld,QuadraticBezierCurve3:wm,SplineCurve:cd});class Am extends Ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Il[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let a=0;for(;a<n.length;){if(n[a]>=i){const s=n[a]-i,o=this.curves[a],c=o.getLength(),l=c===0?0:1-s/c;return o.getPointAt(l,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,a=this.curves;n<a.length;n++){const s=a[n],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,c=s.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new Il[n.type]().fromJSON(n))}return this}}class Lh extends Am{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new od(this.currentPoint.clone(),new re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){const a=new ld(this.currentPoint.clone(),new re(e,t),new re(i,n));return this.curves.push(a),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,a,s){const o=new sd(this.currentPoint.clone(),new re(e,t),new re(i,n),new re(a,s));return this.curves.push(o),this.currentPoint.set(a,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new cd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,a,s){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,n,a,s),this}absarc(e,t,i,n,a,s){return this.absellipse(e,t,i,i,n,a,s),this}ellipse(e,t,i,n,a,s,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,n,a,s,o,c),this}absellipse(e,t,i,n,a,s,o,c){const l=new mc(e,t,i,n,a,s,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class _c extends Lh{constructor(e){super(e),this.uuid=Li(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(new Lh().fromJSON(n))}return this}}function Rm(r,e,t=2){const i=e&&e.length,n=i?e[0]*t:r.length;let a=hd(r,0,n,t,!0);const s=[];if(!a||a.next===a.prev)return s;let o,c,l;if(i&&(a=Um(r,e,a,t)),r.length>80*t){o=1/0,c=1/0;let h=-1/0,u=-1/0;for(let d=t;d<n;d+=t){const p=r[d],g=r[d+1];p<o&&(o=p),g<c&&(c=g),p>h&&(h=p),g>u&&(u=g)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return la(a,s,t,o,c,l,0),s}function hd(r,e,t,i,n){let a;if(n===Wm(r,e,t,i)>0)for(let s=e;s<t;s+=i)a=Ph(s/i|0,r[s],r[s+1],a);else for(let s=t-i;s>=e;s-=i)a=Ph(s/i|0,r[s],r[s+1],a);return a&&xn(a,a.next)&&(ha(a),a=a.next),a}function Or(r,e){if(!r)return r;e||(e=r);let t=r,i;do if(i=!1,!t.steiner&&(xn(t,t.next)||mt(t.prev,t,t.next)===0)){if(ha(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function la(r,e,t,i,n,a,s){if(!r)return;!s&&a&&zm(r,i,n,a);let o=r;for(;r.prev!==r.next;){const c=r.prev,l=r.next;if(a?Lm(r,i,n,a):Cm(r)){e.push(c.i,r.i,l.i),ha(r),r=l.next,o=l.next;continue}if(r=l,r===o){s?s===1?(r=Pm(Or(r),e),la(r,e,t,i,n,a,2)):s===2&&Dm(r,e,t,i,n,a):la(Or(r),e,t,i,n,a,1);break}}}function Cm(r){const e=r.prev,t=r,i=r.next;if(mt(e,t,i)>=0)return!1;const n=e.x,a=t.x,s=i.x,o=e.y,c=t.y,l=i.y,h=Math.min(n,a,s),u=Math.min(o,c,l),d=Math.max(n,a,s),p=Math.max(o,c,l);let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Hn(n,o,a,c,s,l,g.x,g.y)&&mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Lm(r,e,t,i){const n=r.prev,a=r,s=r.next;if(mt(n,a,s)>=0)return!1;const o=n.x,c=a.x,l=s.x,h=n.y,u=a.y,d=s.y,p=Math.min(o,c,l),g=Math.min(h,u,d),_=Math.max(o,c,l),m=Math.max(h,u,d),f=Nl(p,g,e,t,i),T=Nl(_,m,e,t,i);let E=r.prevZ,v=r.nextZ;for(;E&&E.z>=f&&v&&v.z<=T;){if(E.x>=p&&E.x<=_&&E.y>=g&&E.y<=m&&E!==n&&E!==s&&Hn(o,h,c,u,l,d,E.x,E.y)&&mt(E.prev,E,E.next)>=0||(E=E.prevZ,v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==n&&v!==s&&Hn(o,h,c,u,l,d,v.x,v.y)&&mt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;E&&E.z>=f;){if(E.x>=p&&E.x<=_&&E.y>=g&&E.y<=m&&E!==n&&E!==s&&Hn(o,h,c,u,l,d,E.x,E.y)&&mt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;v&&v.z<=T;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==n&&v!==s&&Hn(o,h,c,u,l,d,v.x,v.y)&&mt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Pm(r,e){let t=r;do{const i=t.prev,n=t.next.next;!xn(i,n)&&dd(i,t,t.next,n)&&ca(i,n)&&ca(n,i)&&(e.push(i.i,t.i,n.i),ha(t),ha(t.next),t=r=n),t=t.next}while(t!==r);return Or(t)}function Dm(r,e,t,i,n,a){let s=r;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&Hm(s,o)){let c=pd(s,o);s=Or(s,s.next),c=Or(c,c.next),la(s,e,t,i,n,a,0),la(c,e,t,i,n,a,0);return}o=o.next}s=s.next}while(s!==r)}function Um(r,e,t,i){const n=[];for(let a=0,s=e.length;a<s;a++){const o=e[a]*i,c=a<s-1?e[a+1]*i:r.length,l=hd(r,o,c,i,!1);l===l.next&&(l.steiner=!0),n.push(km(l))}n.sort(Im);for(let a=0;a<n.length;a++)t=Nm(n[a],t);return t}function Im(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const i=(r.next.y-r.y)/(r.next.x-r.x),n=(e.next.y-e.y)/(e.next.x-e.x);t=i-n}return t}function Nm(r,e){const t=Om(r,e);if(!t)return e;const i=pd(t,r);return Or(i,i.next),Or(t,t.next)}function Om(r,e){let t=e;const i=r.x,n=r.y;let a=-1/0,s;if(xn(r,t))return t;do{if(xn(r,t.next))return t.next;if(n<=t.y&&n>=t.next.y&&t.next.y!==t.y){const u=t.x+(n-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>a&&(a=u,s=t.x<t.next.x?t:t.next,u===i))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,c=s.x,l=s.y;let h=1/0;t=s;do{if(i>=t.x&&t.x>=c&&i!==t.x&&ud(n<l?i:a,n,c,l,n<l?a:i,n,t.x,t.y)){const u=Math.abs(n-t.y)/(i-t.x);ca(t,r)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Fm(s,t)))&&(s=t,h=u)}t=t.next}while(t!==o);return s}function Fm(r,e){return mt(r.prev,r,e.prev)<0&&mt(e.next,r,r.next)<0}function zm(r,e,t,i){let n=r;do n.z===0&&(n.z=Nl(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==r);n.prevZ.nextZ=null,n.prevZ=null,Bm(n)}function Bm(r){let e,t=1;do{let i=r,n;r=null;let a=null;for(e=0;i;){e++;let s=i,o=0;for(let l=0;l<t&&(o++,s=s.nextZ,!!s);l++);let c=t;for(;o>0||c>0&&s;)o!==0&&(c===0||!s||i.z<=s.z)?(n=i,i=i.nextZ,o--):(n=s,s=s.nextZ,c--),a?a.nextZ=n:r=n,n.prevZ=a,a=n;i=s}a.nextZ=null,t*=2}while(e>1);return r}function Nl(r,e,t,i,n){return r=(r-t)*n|0,e=(e-i)*n|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function km(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function ud(r,e,t,i,n,a,s,o){return(n-s)*(e-o)>=(r-s)*(a-o)&&(r-s)*(i-o)>=(t-s)*(e-o)&&(t-s)*(a-o)>=(n-s)*(i-o)}function Hn(r,e,t,i,n,a,s,o){return!(r===s&&e===o)&&ud(r,e,t,i,n,a,s,o)}function Hm(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Vm(r,e)&&(ca(r,e)&&ca(e,r)&&Gm(r,e)&&(mt(r.prev,r,e.prev)||mt(r,e.prev,e))||xn(r,e)&&mt(r.prev,r,r.next)>0&&mt(e.prev,e,e.next)>0)}function mt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function xn(r,e){return r.x===e.x&&r.y===e.y}function dd(r,e,t,i){const n=rs(mt(r,e,t)),a=rs(mt(r,e,i)),s=rs(mt(t,i,r)),o=rs(mt(t,i,e));return!!(n!==a&&s!==o||n===0&&is(r,t,e)||a===0&&is(r,i,e)||s===0&&is(t,r,i)||o===0&&is(t,e,i))}function is(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function rs(r){return r>0?1:r<0?-1:0}function Vm(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&dd(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function ca(r,e){return mt(r.prev,r,r.next)<0?mt(r,e,r.next)>=0&&mt(r,r.prev,e)>=0:mt(r,e,r.prev)<0||mt(r,r.next,e)<0}function Gm(r,e){let t=r,i=!1;const n=(r.x+e.x)/2,a=(r.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&n<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==r);return i}function pd(r,e){const t=Ol(r.i,r.x,r.y),i=Ol(e.i,e.x,e.y),n=r.next,a=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function Ph(r,e,t,i){const n=Ol(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function ha(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ol(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Wm(r,e,t,i){let n=0;for(let a=e,s=t-i;a<t;a+=i)n+=(r[s]-r[a])*(r[a+1]+r[s+1]),s=a;return n}class Xm{static triangulate(e,t,i=2){return Rm(e,t,i)}}class ji{static area(e){const t=e.length;let i=0;for(let n=t-1,a=0;a<t;n=a++)i+=e[n].x*e[a].y-e[a].x*e[n].y;return i*.5}static isClockWise(e){return ji.area(e)<0}static triangulateShape(e,t){const i=[],n=[],a=[];Dh(e),Uh(i,e);let s=e.length;t.forEach(Dh);for(let c=0;c<t.length;c++)n.push(s),s+=t[c].length,Uh(i,t[c]);const o=Xm.triangulate(i,n);for(let c=0;c<o.length;c+=3)a.push(o.slice(c,c+3));return a}}function Dh(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Uh(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class vc extends bt{constructor(e=new _c([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,n=[],a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];s(l)}this.setAttribute("position",new ht(n,3)),this.setAttribute("uv",new ht(a,2)),this.computeVertexNormals();function s(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:jm;let E,v=!1,L,R,w,C;f&&(E=f.getSpacedPoints(h),v=!0,d=!1,L=f.computeFrenetFrames(h,!1),R=new N,w=new N,C=new N),d||(m=0,p=0,g=0,_=0);const x=o.extractPoints(l);let y=x.shape;const b=x.holes;if(!ji.isClockWise(y)){y=y.reverse();for(let A=0,ie=b.length;A<ie;A++){const te=b[A];ji.isClockWise(te)&&(b[A]=te.reverse())}}function U(A){const ie=10000000000000001e-36;let te=A[0];for(let pe=1;pe<=A.length;pe++){const K=pe%A.length,Ae=A[K],ne=Ae.x-te.x,Se=Ae.y-te.y,Ge=ne*ne+Se*Se,He=Math.max(Math.abs(Ae.x),Math.abs(Ae.y),Math.abs(te.x),Math.abs(te.y)),P=ie*He*He;if(Ge<=P){A.splice(K,1),pe--;continue}te=Ae}}U(y),b.forEach(U);const F=b.length,I=y;for(let A=0;A<F;A++){const ie=b[A];y=y.concat(ie)}function D(A,ie,te){return ie||console.error("THREE.ExtrudeGeometry: vec does not exist"),A.clone().addScaledVector(ie,te)}const O=y.length;function W(A,ie,te){let pe,K,Ae;const ne=A.x-ie.x,Se=A.y-ie.y,Ge=te.x-A.x,He=te.y-A.y,P=ne*ne+Se*Se,M=ne*He-Se*Ge;if(Math.abs(M)>Number.EPSILON){const H=Math.sqrt(P),Y=Math.sqrt(Ge*Ge+He*He),J=ie.x-Se/H,$=ie.y+ne/H,Ne=te.x-He/Y,de=te.y+Ge/Y,Le=((Ne-J)*He-(de-$)*Ge)/(ne*He-Se*Ge);pe=J+ne*Le-A.x,K=$+Se*Le-A.y;const xe=pe*pe+K*K;if(xe<=2)return new re(pe,K);Ae=Math.sqrt(xe/2)}else{let H=!1;ne>Number.EPSILON?Ge>Number.EPSILON&&(H=!0):ne<-Number.EPSILON?Ge<-Number.EPSILON&&(H=!0):Math.sign(Se)===Math.sign(He)&&(H=!0),H?(pe=-Se,K=ne,Ae=Math.sqrt(P)):(pe=ne,K=Se,Ae=Math.sqrt(P/2))}return new re(pe/Ae,K/Ae)}const V=[];for(let A=0,ie=I.length,te=ie-1,pe=A+1;A<ie;A++,te++,pe++)te===ie&&(te=0),pe===ie&&(pe=0),V[A]=W(I[A],I[te],I[pe]);const q=[];let ee,se=V.concat();for(let A=0,ie=F;A<ie;A++){const te=b[A];ee=[];for(let pe=0,K=te.length,Ae=K-1,ne=pe+1;pe<K;pe++,Ae++,ne++)Ae===K&&(Ae=0),ne===K&&(ne=0),ee[pe]=W(te[pe],te[Ae],te[ne]);q.push(ee),se=se.concat(ee)}let oe;if(m===0)oe=ji.triangulateShape(I,b);else{const A=[],ie=[];for(let te=0;te<m;te++){const pe=te/m,K=p*Math.cos(pe*Math.PI/2),Ae=g*Math.sin(pe*Math.PI/2)+_;for(let ne=0,Se=I.length;ne<Se;ne++){const Ge=D(I[ne],V[ne],Ae);fe(Ge.x,Ge.y,-K),pe===0&&A.push(Ge)}for(let ne=0,Se=F;ne<Se;ne++){const Ge=b[ne];ee=q[ne];const He=[];for(let P=0,M=Ge.length;P<M;P++){const H=D(Ge[P],ee[P],Ae);fe(H.x,H.y,-K),pe===0&&He.push(H)}pe===0&&ie.push(He)}}oe=ji.triangulateShape(A,ie)}const ue=oe.length,Me=g+_;for(let A=0;A<O;A++){const ie=d?D(y[A],se[A],Me):y[A];v?(w.copy(L.normals[0]).multiplyScalar(ie.x),R.copy(L.binormals[0]).multiplyScalar(ie.y),C.copy(E[0]).add(w).add(R),fe(C.x,C.y,C.z)):fe(ie.x,ie.y,0)}for(let A=1;A<=h;A++)for(let ie=0;ie<O;ie++){const te=d?D(y[ie],se[ie],Me):y[ie];v?(w.copy(L.normals[A]).multiplyScalar(te.x),R.copy(L.binormals[A]).multiplyScalar(te.y),C.copy(E[A]).add(w).add(R),fe(C.x,C.y,C.z)):fe(te.x,te.y,u/h*A)}for(let A=m-1;A>=0;A--){const ie=A/m,te=p*Math.cos(ie*Math.PI/2),pe=g*Math.sin(ie*Math.PI/2)+_;for(let K=0,Ae=I.length;K<Ae;K++){const ne=D(I[K],V[K],pe);fe(ne.x,ne.y,u+te)}for(let K=0,Ae=b.length;K<Ae;K++){const ne=b[K];ee=q[K];for(let Se=0,Ge=ne.length;Se<Ge;Se++){const He=D(ne[Se],ee[Se],pe);v?fe(He.x,He.y+E[h-1].y,E[h-1].x+te):fe(He.x,He.y,u+te)}}}Ee(),G();function Ee(){const A=n.length/3;if(d){let ie=0,te=O*ie;for(let pe=0;pe<ue;pe++){const K=oe[pe];De(K[2]+te,K[1]+te,K[0]+te)}ie=h+m*2,te=O*ie;for(let pe=0;pe<ue;pe++){const K=oe[pe];De(K[0]+te,K[1]+te,K[2]+te)}}else{for(let ie=0;ie<ue;ie++){const te=oe[ie];De(te[2],te[1],te[0])}for(let ie=0;ie<ue;ie++){const te=oe[ie];De(te[0]+O*h,te[1]+O*h,te[2]+O*h)}}i.addGroup(A,n.length/3-A,0)}function G(){const A=n.length/3;let ie=0;Z(I,ie),ie+=I.length;for(let te=0,pe=b.length;te<pe;te++){const K=b[te];Z(K,ie),ie+=K.length}i.addGroup(A,n.length/3-A,1)}function Z(A,ie){let te=A.length;for(;--te>=0;){const pe=te;let K=te-1;K<0&&(K=A.length-1);for(let Ae=0,ne=h+m*2;Ae<ne;Ae++){const Se=O*Ae,Ge=O*(Ae+1),He=ie+pe+Se,P=ie+K+Se,M=ie+K+Ge,H=ie+pe+Ge;Ce(He,P,M,H)}}}function fe(A,ie,te){c.push(A),c.push(ie),c.push(te)}function De(A,ie,te){we(A),we(ie),we(te);const pe=n.length/3,K=T.generateTopUV(i,n,pe-3,pe-2,pe-1);qe(K[0]),qe(K[1]),qe(K[2])}function Ce(A,ie,te,pe){we(A),we(ie),we(pe),we(ie),we(te),we(pe);const K=n.length/3,Ae=T.generateSideWallUV(i,n,K-6,K-3,K-2,K-1);qe(Ae[0]),qe(Ae[1]),qe(Ae[3]),qe(Ae[1]),qe(Ae[2]),qe(Ae[3])}function we(A){n.push(c[A*3+0]),n.push(c[A*3+1]),n.push(c[A*3+2])}function qe(A){a.push(A.x),a.push(A.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return qm(t,i,e)}static fromJSON(e,t){const i=[];for(let a=0,s=e.shapes.length;a<s;a++){const o=t[e.shapes[a]];i.push(o)}const n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Il[n.type]().fromJSON(n)),new vc(i,e.options)}}const jm={generateTopUV:function(r,e,t,i,n){const a=e[t*3],s=e[t*3+1],o=e[i*3],c=e[i*3+1],l=e[n*3],h=e[n*3+1];return[new re(a,s),new re(o,c),new re(l,h)]},generateSideWallUV:function(r,e,t,i,n,a){const s=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[n*3],p=e[n*3+1],g=e[n*3+2],_=e[a*3],m=e[a*3+1],f=e[a*3+2];return Math.abs(o-h)<Math.abs(s-l)?[new re(s,1-c),new re(l,1-u),new re(d,1-g),new re(_,1-f)]:[new re(o,1-c),new re(h,1-u),new re(p,1-g),new re(m,1-f)]}};function qm(r,e,t){if(t.shapes=[],Array.isArray(r))for(let i=0,n=r.length;i<n;i++){const a=r[i];t.shapes.push(a.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class yn extends bt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const a=e/2,s=t/2,o=Math.floor(i),c=Math.floor(n),l=o+1,h=c+1,u=e/o,d=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const T=f*d-s;for(let E=0;E<l;E++){const v=E*u-a;g.push(v,-T,0),_.push(0,0,1),m.push(E/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let T=0;T<o;T++){const E=T+l*f,v=T+l*(f+1),L=T+1+l*(f+1),R=T+1+l*f;p.push(E,v,R),p.push(v,L,R)}this.setIndex(p),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yn(e.width,e.height,e.widthSegments,e.heightSegments)}}class xc extends bt{constructor(e=.5,t=1,i=32,n=1,a=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:a,thetaLength:s},i=Math.max(3,i),n=Math.max(1,n);const o=[],c=[],l=[],h=[];let u=e;const d=(t-e)/n,p=new N,g=new re;for(let _=0;_<=n;_++){for(let m=0;m<=i;m++){const f=a+m/i*s;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<n;_++){const m=_*(i+1);for(let f=0;f<i;f++){const T=f+m,E=T,v=T+i+1,L=T+i+2,R=T+1;o.push(E,v,R),o.push(v,L,R)}}this.setIndex(o),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class yc extends bt{constructor(e=new _c([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],n=[],a=[],s=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(i),this.setAttribute("position",new ht(n,3)),this.setAttribute("normal",new ht(a,3)),this.setAttribute("uv",new ht(s,2));function l(h){const u=n.length/3,d=h.extractPoints(t);let p=d.shape;const g=d.holes;ji.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){const T=g[m];ji.isClockWise(T)===!0&&(g[m]=T.reverse())}const _=ji.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){const T=g[m];p=p.concat(T)}for(let m=0,f=p.length;m<f;m++){const T=p[m];n.push(T.x,T.y,0),a.push(0,0,1),s.push(T.x,T.y)}for(let m=0,f=_.length;m<f;m++){const T=_[m],E=T[0]+u,v=T[1]+u,L=T[2]+u;i.push(E,v,L),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Ym(t,e)}static fromJSON(e,t){const i=[];for(let n=0,a=e.shapes.length;n<a;n++){const s=t[e.shapes[n]];i.push(s)}return new yc(i,e.curveSegments)}}function Ym(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,i=r.length;t<i;t++){const n=r[t];e.shapes.push(n.uuid)}else e.shapes.push(r.uuid);return e}class Ih extends fr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qu,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $m extends fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zm extends fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const So={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Km{constructor(e,t,i){const n=this;let a=!1,s=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,a===!1&&n.onStart!==void 0&&n.onStart(h,s,o),a=!0},this.itemEnd=function(h){s++,n.onProgress!==void 0&&n.onProgress(h,s,o),s===o&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Jm=new Km;class Mc{constructor(e){this.manager=e!==void 0?e:Jm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,a){i.load(e,n,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Mc.DEFAULT_MATERIAL_NAME="__DEFAULT";const nn=new WeakMap;class Qm extends Mc{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=So.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0);else{let u=nn.get(s);u===void 0&&(u=[],nn.set(s,u)),u.push({onLoad:t,onError:n})}return s}const o=sa("img");function c(){h(),t&&t(this);const u=nn.get(this)||[];for(let d=0;d<u.length;d++){const p=u[d];p.onLoad&&p.onLoad(this)}nn.delete(this),a.manager.itemEnd(e)}function l(u){h(),n&&n(u),So.remove(`image:${e}`);const d=nn.get(this)||[];for(let p=0;p<d.length;p++){const g=d[p];g.onError&&g.onError(u)}nn.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),So.add(`image:${e}`,o),a.manager.itemStart(e),o.src=e,o}}class Nh extends Mc{constructor(e){super(e)}load(e,t,i,n){const a=new Ft,s=new Qm(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},i,n),a}}class fd extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const To=new lt,Oh=new N,Fh=new N;class eg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=Di,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fc,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Oh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oh),Fh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fh),t.updateMatrixWorld(),To.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(To,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(To)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class md extends td{constructor(e=-1,t=1,i=1,n=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=n+t,c=n-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class tg extends eg{constructor(){super(new md(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ig extends fd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new tg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rg extends fd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ng extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const zh=new lt;class ag{constructor(e,t,i=0,n=1/0){this.ray=new Ea(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new pc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zh),this}intersectObject(e,t=!0,i=[]){return Fl(e,this,i,t),i.sort(Bh),i}intersectObjects(e,t=!0,i=[]){for(let n=0,a=e.length;n<a;n++)Fl(e[n],this,i,t);return i.sort(Bh),i}}function Bh(r,e){return r.distance-e.distance}function Fl(r,e,t,i){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){const a=r.children;for(let s=0,o=a.length;s<o;s++)Fl(a[s],e,t,!0)}}class kh{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class sg extends Pl{constructor(e=10,t=10,i=4473924,n=8947848){i=new ke(i),n=new ke(n);const a=t/2,s=e/t,o=e/2,c=[],l=[];for(let d=0,p=0,g=-o;d<=t;d++,g+=s){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);const _=d===a?i:n;_.toArray(l,p),p+=3,_.toArray(l,p),p+=3,_.toArray(l,p),p+=3,_.toArray(l,p),p+=3}const h=new bt;h.setAttribute("position",new ht(c,3)),h.setAttribute("color",new ht(l,3));const u=new bs({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class og extends Fr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Hh(r,e,t,i){const n=lg(i);switch(t){case Gu:return r*e;case Xu:return r*e/n.components*n.byteLength;case lc:return r*e/n.components*n.byteLength;case ju:return r*e*2/n.components*n.byteLength;case cc:return r*e*2/n.components*n.byteLength;case Wu:return r*e*3/n.components*n.byteLength;case Ei:return r*e*4/n.components*n.byteLength;case hc:return r*e*4/n.components*n.byteLength;case ps:case fs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ms:case gs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case il:case nl:return Math.max(r,16)*Math.max(e,8)/4;case tl:case rl:return Math.max(r,8)*Math.max(e,8)/2;case al:case sl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ol:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ll:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case hl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ul:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case dl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case pl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case fl:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ml:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case gl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case _l:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case vl:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case xl:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case yl:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ml:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case El:case Sl:case Tl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case bl:case wl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Al:case Rl:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lg(r){switch(r){case Di:case Bu:return{byteLength:1,components:1};case ta:case ku:case xa:return{byteLength:2,components:1};case sc:case oc:return{byteLength:2,components:4};case Ur:case ac:case Xi:return{byteLength:4,components:1};case Hu:case Vu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gd(){let r=null,e=!1,t=null,i=null;function n(a,s){t(a,s),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function cg(r){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=r.SHORT;else if(l instanceof Uint32Array)p=r.UNSIGNED_INT;else if(l instanceof Int32Array)p=r.INT;else if(l instanceof Int8Array)p=r.BYTE;else if(l instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){const h=c.array,u=c.updateRanges;if(r.bindBuffer(l,o),u.length===0)r.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:n,remove:a,update:s}}var hg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ug=`#ifdef USE_ALPHAHASH
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
#endif`,dg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gg=`#ifdef USE_AOMAP
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
#endif`,_g=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vg=`#ifdef USE_BATCHING
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
#endif`,xg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sg=`#ifdef USE_IRIDESCENCE
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
#endif`,Tg=`#ifdef USE_BUMPMAP
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
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ug=`#define PI 3.141592653589793
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
} // validated`,Ig=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ng=`vec3 transformedNormal = objectNormal;
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
#endif`,Og=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vg=`#ifdef USE_ENVMAP
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
#endif`,Gg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wg=`#ifdef USE_ENVMAP
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
#endif`,Xg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jg=`#ifdef USE_ENVMAP
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
#endif`,qg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$g=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kg=`#ifdef USE_GRADIENTMAP
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
}`,Jg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t_=`uniform bool receiveShadow;
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
#endif`,i_=`#ifdef USE_ENVMAP
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
#endif`,r_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o_=`PhysicalMaterial material;
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
#endif`,l_=`struct PhysicalMaterial {
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
}`,c_=`
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
#endif`,h_=`#if defined( RE_IndirectDiffuse )
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
#endif`,u_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,g_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,__=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,x_=`#if defined( USE_POINTS_UV )
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
#endif`,y_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b_=`#ifdef USE_MORPHTARGETS
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
#endif`,w_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,R_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,C_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D_=`#ifdef USE_NORMALMAP
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
#endif`,U_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,O_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,B_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Y_=`float getShadowMask() {
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
}`,$_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z_=`#ifdef USE_SKINNING
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
#endif`,K_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J_=`#ifdef USE_SKINNING
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
#endif`,Q_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,r0=`#ifdef USE_TRANSMISSION
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
#endif`,n0=`#ifdef USE_TRANSMISSION
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
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const c0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h0=`uniform sampler2D t2D;
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
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`#include <common>
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
}`,g0=`#if DEPTH_PACKING == 3200
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
}`,_0=`#define DISTANCE
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
}`,v0=`#define DISTANCE
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
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M0=`uniform float scale;
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
}`,E0=`uniform vec3 diffuse;
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
}`,S0=`#include <common>
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
}`,T0=`uniform vec3 diffuse;
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
}`,b0=`#define LAMBERT
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
}`,w0=`#define LAMBERT
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
}`,A0=`#define MATCAP
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
}`,R0=`#define MATCAP
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
}`,C0=`#define NORMAL
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
}`,L0=`#define NORMAL
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
}`,P0=`#define PHONG
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
}`,D0=`#define PHONG
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
}`,U0=`#define STANDARD
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
}`,I0=`#define STANDARD
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
}`,N0=`#define TOON
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
}`,O0=`#define TOON
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
}`,F0=`uniform float size;
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
}`,z0=`uniform vec3 diffuse;
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
}`,B0=`#include <common>
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
}`,k0=`uniform vec3 color;
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
}`,H0=`uniform float rotation;
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
}`,V0=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:hg,alphahash_pars_fragment:ug,alphamap_fragment:dg,alphamap_pars_fragment:pg,alphatest_fragment:fg,alphatest_pars_fragment:mg,aomap_fragment:gg,aomap_pars_fragment:_g,batching_pars_vertex:vg,batching_vertex:xg,begin_vertex:yg,beginnormal_vertex:Mg,bsdfs:Eg,iridescence_fragment:Sg,bumpmap_pars_fragment:Tg,clipping_planes_fragment:bg,clipping_planes_pars_fragment:wg,clipping_planes_pars_vertex:Ag,clipping_planes_vertex:Rg,color_fragment:Cg,color_pars_fragment:Lg,color_pars_vertex:Pg,color_vertex:Dg,common:Ug,cube_uv_reflection_fragment:Ig,defaultnormal_vertex:Ng,displacementmap_pars_vertex:Og,displacementmap_vertex:Fg,emissivemap_fragment:zg,emissivemap_pars_fragment:Bg,colorspace_fragment:kg,colorspace_pars_fragment:Hg,envmap_fragment:Vg,envmap_common_pars_fragment:Gg,envmap_pars_fragment:Wg,envmap_pars_vertex:Xg,envmap_physical_pars_fragment:i_,envmap_vertex:jg,fog_vertex:qg,fog_pars_vertex:Yg,fog_fragment:$g,fog_pars_fragment:Zg,gradientmap_pars_fragment:Kg,lightmap_pars_fragment:Jg,lights_lambert_fragment:Qg,lights_lambert_pars_fragment:e_,lights_pars_begin:t_,lights_toon_fragment:r_,lights_toon_pars_fragment:n_,lights_phong_fragment:a_,lights_phong_pars_fragment:s_,lights_physical_fragment:o_,lights_physical_pars_fragment:l_,lights_fragment_begin:c_,lights_fragment_maps:h_,lights_fragment_end:u_,logdepthbuf_fragment:d_,logdepthbuf_pars_fragment:p_,logdepthbuf_pars_vertex:f_,logdepthbuf_vertex:m_,map_fragment:g_,map_pars_fragment:__,map_particle_fragment:v_,map_particle_pars_fragment:x_,metalnessmap_fragment:y_,metalnessmap_pars_fragment:M_,morphinstance_vertex:E_,morphcolor_vertex:S_,morphnormal_vertex:T_,morphtarget_pars_vertex:b_,morphtarget_vertex:w_,normal_fragment_begin:A_,normal_fragment_maps:R_,normal_pars_fragment:C_,normal_pars_vertex:L_,normal_vertex:P_,normalmap_pars_fragment:D_,clearcoat_normal_fragment_begin:U_,clearcoat_normal_fragment_maps:I_,clearcoat_pars_fragment:N_,iridescence_pars_fragment:O_,opaque_fragment:F_,packing:z_,premultiplied_alpha_fragment:B_,project_vertex:k_,dithering_fragment:H_,dithering_pars_fragment:V_,roughnessmap_fragment:G_,roughnessmap_pars_fragment:W_,shadowmap_pars_fragment:X_,shadowmap_pars_vertex:j_,shadowmap_vertex:q_,shadowmask_pars_fragment:Y_,skinbase_vertex:$_,skinning_pars_vertex:Z_,skinning_vertex:K_,skinnormal_vertex:J_,specularmap_fragment:Q_,specularmap_pars_fragment:e0,tonemapping_fragment:t0,tonemapping_pars_fragment:i0,transmission_fragment:r0,transmission_pars_fragment:n0,uv_pars_fragment:a0,uv_pars_vertex:s0,uv_vertex:o0,worldpos_vertex:l0,background_vert:c0,background_frag:h0,backgroundCube_vert:u0,backgroundCube_frag:d0,cube_vert:p0,cube_frag:f0,depth_vert:m0,depth_frag:g0,distanceRGBA_vert:_0,distanceRGBA_frag:v0,equirect_vert:x0,equirect_frag:y0,linedashed_vert:M0,linedashed_frag:E0,meshbasic_vert:S0,meshbasic_frag:T0,meshlambert_vert:b0,meshlambert_frag:w0,meshmatcap_vert:A0,meshmatcap_frag:R0,meshnormal_vert:C0,meshnormal_frag:L0,meshphong_vert:P0,meshphong_frag:D0,meshphysical_vert:U0,meshphysical_frag:I0,meshtoon_vert:N0,meshtoon_frag:O0,points_vert:F0,points_frag:z0,shadow_vert:B0,shadow_frag:k0,sprite_vert:H0,sprite_frag:V0},ge={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},wi={basic:{uniforms:Ht([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Ht([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ke(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Ht([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Ht([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Ht([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new ke(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Ht([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Ht([ge.points,ge.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Ht([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Ht([ge.common,ge.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Ht([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Ht([ge.sprite,ge.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Ht([ge.common,ge.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Ht([ge.lights,ge.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};wi.physical={uniforms:Ht([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const ns={r:0,b:0,g:0},Er=new Ui,G0=new lt;function W0(r,e,t,i,n,a,s){const o=new ke(0);let c=a===!0?0:1,l,h,u=null,d=0,p=null;function g(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?t:e).get(v)),v}function _(E){let v=!1;const L=g(E);L===null?f(o,c):L&&L.isColor&&(f(L,1),v=!0);const R=r.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(r.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(E,v){const L=g(v);L&&(L.isCubeTexture||L.mapping===zs)?(h===void 0&&(h=new Vt(new Sa(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:vn(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Er.copy(v.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(G0.makeRotationFromEuler(Er)),h.material.toneMapped=Je.getTransfer(L.colorSpace)!==tt,(u!==L||d!==L.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,u=L,d=L.version,p=r.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new Vt(new yn(2,2),new Yi({name:"BackgroundMaterial",uniforms:vn(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Je.getTransfer(L.colorSpace)!==tt,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(u!==L||d!==L.version||p!==r.toneMapping)&&(l.material.needsUpdate=!0,u=L,d=L.version,p=r.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function f(E,v){E.getRGB(ns,ed(r)),i.buffers.color.setClear(ns.r,ns.g,ns.b,v,s)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,v=1){o.set(E),c=v,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,f(o,c)},render:_,addToRenderList:m,dispose:T}}function X0(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null);let a=n,s=!1;function o(y,b,U,F,I){let D=!1;const O=u(F,U,b);a!==O&&(a=O,l(a.object)),D=p(y,F,U,I),D&&g(y,F,U,I),I!==null&&e.update(I,r.ELEMENT_ARRAY_BUFFER),(D||s)&&(s=!1,v(y,b,U,F),I!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function c(){return r.createVertexArray()}function l(y){return r.bindVertexArray(y)}function h(y){return r.deleteVertexArray(y)}function u(y,b,U){const F=U.wireframe===!0;let I=i[y.id];I===void 0&&(I={},i[y.id]=I);let D=I[b.id];D===void 0&&(D={},I[b.id]=D);let O=D[F];return O===void 0&&(O=d(c()),D[F]=O),O}function d(y){const b=[],U=[],F=[];for(let I=0;I<t;I++)b[I]=0,U[I]=0,F[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:U,attributeDivisors:F,object:y,attributes:{},index:null}}function p(y,b,U,F){const I=a.attributes,D=b.attributes;let O=0;const W=U.getAttributes();for(const V in W)if(W[V].location>=0){const q=I[V];let ee=D[V];if(ee===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(ee=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(ee=y.instanceColor)),q===void 0||q.attribute!==ee||ee&&q.data!==ee.data)return!0;O++}return a.attributesNum!==O||a.index!==F}function g(y,b,U,F){const I={},D=b.attributes;let O=0;const W=U.getAttributes();for(const V in W)if(W[V].location>=0){let q=D[V];q===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(q=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(q=y.instanceColor));const ee={};ee.attribute=q,q&&q.data&&(ee.data=q.data),I[V]=ee,O++}a.attributes=I,a.attributesNum=O,a.index=F}function _(){const y=a.newAttributes;for(let b=0,U=y.length;b<U;b++)y[b]=0}function m(y){f(y,0)}function f(y,b){const U=a.newAttributes,F=a.enabledAttributes,I=a.attributeDivisors;U[y]=1,F[y]===0&&(r.enableVertexAttribArray(y),F[y]=1),I[y]!==b&&(r.vertexAttribDivisor(y,b),I[y]=b)}function T(){const y=a.newAttributes,b=a.enabledAttributes;for(let U=0,F=b.length;U<F;U++)b[U]!==y[U]&&(r.disableVertexAttribArray(U),b[U]=0)}function E(y,b,U,F,I,D,O){O===!0?r.vertexAttribIPointer(y,b,U,I,D):r.vertexAttribPointer(y,b,U,F,I,D)}function v(y,b,U,F){_();const I=F.attributes,D=U.getAttributes(),O=b.defaultAttributeValues;for(const W in D){const V=D[W];if(V.location>=0){let q=I[W];if(q===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(q=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(q=y.instanceColor)),q!==void 0){const ee=q.normalized,se=q.itemSize,oe=e.get(q);if(oe===void 0)continue;const ue=oe.buffer,Me=oe.type,Ee=oe.bytesPerElement,G=Me===r.INT||Me===r.UNSIGNED_INT||q.gpuType===ac;if(q.isInterleavedBufferAttribute){const Z=q.data,fe=Z.stride,De=q.offset;if(Z.isInstancedInterleavedBuffer){for(let Ce=0;Ce<V.locationSize;Ce++)f(V.location+Ce,Z.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Ce=0;Ce<V.locationSize;Ce++)m(V.location+Ce);r.bindBuffer(r.ARRAY_BUFFER,ue);for(let Ce=0;Ce<V.locationSize;Ce++)E(V.location+Ce,se/V.locationSize,Me,ee,fe*Ee,(De+se/V.locationSize*Ce)*Ee,G)}else{if(q.isInstancedBufferAttribute){for(let Z=0;Z<V.locationSize;Z++)f(V.location+Z,q.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Z=0;Z<V.locationSize;Z++)m(V.location+Z);r.bindBuffer(r.ARRAY_BUFFER,ue);for(let Z=0;Z<V.locationSize;Z++)E(V.location+Z,se/V.locationSize,Me,ee,se*Ee,se/V.locationSize*Z*Ee,G)}}else if(O!==void 0){const ee=O[W];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(V.location,ee);break;case 3:r.vertexAttrib3fv(V.location,ee);break;case 4:r.vertexAttrib4fv(V.location,ee);break;default:r.vertexAttrib1fv(V.location,ee)}}}}T()}function L(){C();for(const y in i){const b=i[y];for(const U in b){const F=b[U];for(const I in F)h(F[I].object),delete F[I];delete b[U]}delete i[y]}}function R(y){if(i[y.id]===void 0)return;const b=i[y.id];for(const U in b){const F=b[U];for(const I in F)h(F[I].object),delete F[I];delete b[U]}delete i[y.id]}function w(y){for(const b in i){const U=i[b];if(U[y.id]===void 0)continue;const F=U[y.id];for(const I in F)h(F[I].object),delete F[I];delete U[y.id]}}function C(){x(),s=!0,a!==n&&(a=n,l(a.object))}function x(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:C,resetDefaultState:x,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function j0(r,e,t){let i;function n(l){i=l}function a(l,h){r.drawArrays(i,l,h),t.update(h,i,1)}function s(l,h,u){u!==0&&(r.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];t.update(d,i,1)}function c(l,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)s(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,i,1)}}this.setMode=n,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function q0(r,e,t,i){let n;function a(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){return!(w!==Ei&&i.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const C=w===xa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Di&&i.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Xi&&!C)}function c(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,R=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:L,maxSamples:R}}function Y0(r){const e=this;let t=null,i=0,n=!1,a=!1;const s=new nr,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||n;return n=d,i=u.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=r.get(u);if(!n||g===null||g.length===0||a&&!m)a?h(null):l();else{const T=a?0:i,E=T*4;let v=f.clippingState||null;c.value=v,v=h(g,d,E,p);for(let L=0;L!==E;++L)v[L]=t[L];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,v=p;E!==_;++E,v+=4)s.copy(u[E]).applyMatrix4(T,o),s.normal.toArray(m,v),m[v+3]=s.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function $0(r){let e=new WeakMap;function t(s,o){return o===Jo?s.mapping=mn:o===Qo&&(s.mapping=gn),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===Jo||o===Qo)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const l=new sm(c.height);return l.fromEquirectangularTexture(r,s),e.set(s,l),s.addEventListener("dispose",n),t(l.texture,s.mapping)}else return null}}return s}function n(s){const o=s.target;o.removeEventListener("dispose",n);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const ln=4,Vh=[.125,.215,.35,.446,.526,.582],wr=20,bo=new md,Gh=new ke;let wo=null,Ao=0,Ro=0,Co=!1;const Tr=(1+Math.sqrt(5))/2,an=1/Tr,Wh=[new N(-Tr,an,0),new N(Tr,an,0),new N(-an,0,Tr),new N(an,0,Tr),new N(0,Tr,-an),new N(0,Tr,an),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Z0=new N;class Xh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100,a={}){const{size:s=256,position:o=Z0}=a;wo=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,n,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wo,Ao,Ro),this._renderer.xr.enabled=Co,e.scissorTest=!1,as(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mn||e.mapping===gn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wo=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:xa,format:Ei,colorSpace:_n,depthBuffer:!1},n=jh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jh(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=K0(a)),this._blurMaterial=J0(a,e,t)}return n}_compileMaterial(e){const t=new Vt(this._lodPlanes[0],e);this._renderer.compile(t,bo)}_sceneToCubeUV(e,t,i,n,a){const s=new hi(90,1,t,i),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,u=l.toneMapping;l.getClearColor(Gh),l.toneMapping=cr,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(n),l.clearDepth(),l.setRenderTarget(null));const d=new on({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),p=new Vt(new Sa,d);let g=!1;const _=e.background;_?_.isColor&&(d.color.copy(_),e.background=null,g=!0):(d.color.copy(Gh),g=!0);for(let m=0;m<6;m++){const f=m%3;f===0?(s.up.set(0,o[m],0),s.position.set(a.x,a.y,a.z),s.lookAt(a.x+c[m],a.y,a.z)):f===1?(s.up.set(0,0,o[m]),s.position.set(a.x,a.y,a.z),s.lookAt(a.x,a.y+c[m],a.z)):(s.up.set(0,o[m],0),s.position.set(a.x,a.y,a.z),s.lookAt(a.x,a.y,a.z+c[m]));const T=this._cubeSize;as(n,f*T,m>2?T:0,T,T),l.setRenderTarget(n),g&&l.render(p,s),l.render(e,s)}p.geometry.dispose(),p.material.dispose(),l.toneMapping=u,l.autoClear=h,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===mn||e.mapping===gn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qh());const a=n?this._cubemapMaterial:this._equirectMaterial,s=new Vt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;as(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(s,bo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let a=1;a<n;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Wh[(n-a-1)%Wh.length];this._blur(e,a-1,a,s,o)}t.autoClear=i}_blur(e,t,i,n,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,n,"latitudinal",a),this._halfBlur(s,e,i,i,n,"longitudinal",a)}_halfBlur(e,t,i,n,a,s,o){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Vt(this._lodPlanes[n],l),d=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*wr-1),_=a/g,m=isFinite(a)?1+Math.floor(h*_):wr;m>wr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wr}`);const f=[];let T=0;for(let w=0;w<wr;++w){const C=w/_,x=Math.exp(-C*C/2);f.push(x),w===0?T+=x:w<m&&(T+=2*x)}for(let w=0;w<f.length;w++)f[w]=f[w]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-i;const v=this._sizeLods[n],L=3*v*(n>E-ln?n-E+ln:0),R=4*(this._cubeSize-v);as(t,L,R,3*v,2*v),c.setRenderTarget(t),c.render(u,bo)}}function K0(r){const e=[],t=[],i=[];let n=r;const a=r-ln+1+Vh.length;for(let s=0;s<a;s++){const o=Math.pow(2,n);t.push(o);let c=1/o;s>r-ln?c=Vh[s-r+ln-1]:s===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,T=new Float32Array(_*g*p),E=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let R=0;R<p;R++){const w=R%3*2/3-1,C=R>2?0:-1,x=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];T.set(x,_*g*R),E.set(d,m*g*R);const y=[R,R,R,R,R,R];v.set(y,f*g*R)}const L=new bt;L.setAttribute("position",new Wt(T,_)),L.setAttribute("uv",new Wt(E,m)),L.setAttribute("faceIndex",new Wt(v,f)),e.push(L),n>ln&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function jh(r,e,t){const i=new Nr(r,e,t);return i.texture.mapping=zs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function as(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function J0(r,e,t){const i=new Float32Array(wr),n=new N(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function qh(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function Yh(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Ec(){return`

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
	`}function Q0(r){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Jo||c===Qo,h=c===mn||c===gn;if(l||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Xh(r)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&n(p)?(t===null&&(t=new Xh(r)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o}function n(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function ev(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&oa("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function tv(r,e,t,i){const n={},a=new WeakMap;function s(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",s),delete n[d.id];const p=a.get(d);p&&(e.remove(p),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",s),n[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const p in d)e.update(d[p],r.ARRAY_BUFFER)}function l(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const T=p.array;_=p.version;for(let E=0,v=T.length;E<v;E+=3){const L=T[E+0],R=T[E+1],w=T[E+2];d.push(L,R,R,w,w,L)}}else if(g!==void 0){const T=g.array;_=g.version;for(let E=0,v=T.length/3-1;E<v;E+=3){const L=E+0,R=E+1,w=E+2;d.push(L,R,R,w,w,L)}}else return;const m=new($u(d)?Qu:Ju)(d,1);m.version=_;const f=a.get(u);f&&e.remove(f),a.set(u,m)}function h(u){const d=a.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return a.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function iv(r,e,t){let i;function n(d){i=d}let a,s;function o(d){a=d.type,s=d.bytesPerElement}function c(d,p){r.drawElements(i,p,a,d*s),t.update(p,i,1)}function l(d,p,g){g!==0&&(r.drawElementsInstanced(i,p,a,d*s,g),t.update(p,i,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,d,0,g);let _=0;for(let m=0;m<g;m++)_+=p[m];t.update(_,i,1)}function u(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/s,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,d,0,_,0,g);let f=0;for(let T=0;T<g;T++)f+=p[T]*_[T];t.update(f,i,1)}}this.setMode=n,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function rv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case r.TRIANGLES:t.triangles+=o*(a/3);break;case r.LINES:t.lines+=o*(a/2);break;case r.LINE_STRIP:t.lines+=o*(a-1);break;case r.LINE_LOOP:t.lines+=o*a;break;case r.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function nv(r,e,t){const i=new WeakMap,n=new gt;function a(s,o,c){const l=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let p=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",p)};d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let L=o.attributes.position.count*v,R=1;L>e.maxTextureSize&&(R=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const w=new Float32Array(L*R*4*u),C=new Zu(w,L,R,u);C.type=Xi,C.needsUpdate=!0;const x=v*4;for(let y=0;y<u;y++){const b=f[y],U=T[y],F=E[y],I=L*R*4*y;for(let D=0;D<b.count;D++){const O=D*x;g===!0&&(n.fromBufferAttribute(b,D),w[I+O+0]=n.x,w[I+O+1]=n.y,w[I+O+2]=n.z,w[I+O+3]=0),_===!0&&(n.fromBufferAttribute(U,D),w[I+O+4]=n.x,w[I+O+5]=n.y,w[I+O+6]=n.z,w[I+O+7]=0),m===!0&&(n.fromBufferAttribute(F,D),w[I+O+8]=n.x,w[I+O+9]=n.y,w[I+O+10]=n.z,w[I+O+11]=F.itemSize===4?n.w:1)}}d={count:u,texture:C,size:new re(L,R)},i.set(o,d),o.addEventListener("dispose",p)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];const g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:a}}function av(r,e,t,i){let n=new WeakMap;function a(c){const l=i.render.frame,h=c.geometry,u=e.get(c,h);if(n.get(u)!==l&&(e.update(u),n.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),n.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),n.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;n.get(d)!==l&&(d.update(),n.set(d,l))}return u}function s(){n=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:s}}const _d=new Ft,$h=new nd(1,1),vd=new Zu,xd=new Gf,yd=new id,Zh=[],Kh=[],Jh=new Float32Array(16),Qh=new Float32Array(9),eu=new Float32Array(4);function Cn(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let a=Zh[n];if(a===void 0&&(a=new Float32Array(n),Zh[n]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,r[s].toArray(a,o)}return a}function Ct(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Lt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Bs(r,e){let t=Kh[e];t===void 0&&(t=new Int32Array(e),Kh[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function sv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ov(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2fv(this.addr,e),Lt(t,e)}}function lv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;r.uniform3fv(this.addr,e),Lt(t,e)}}function cv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4fv(this.addr,e),Lt(t,e)}}function hv(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Ct(t,i))return;eu.set(i),r.uniformMatrix2fv(this.addr,!1,eu),Lt(t,i)}}function uv(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Ct(t,i))return;Qh.set(i),r.uniformMatrix3fv(this.addr,!1,Qh),Lt(t,i)}}function dv(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Ct(t,i))return;Jh.set(i),r.uniformMatrix4fv(this.addr,!1,Jh),Lt(t,i)}}function pv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function fv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2iv(this.addr,e),Lt(t,e)}}function mv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;r.uniform3iv(this.addr,e),Lt(t,e)}}function gv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4iv(this.addr,e),Lt(t,e)}}function _v(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function vv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2uiv(this.addr,e),Lt(t,e)}}function xv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;r.uniform3uiv(this.addr,e),Lt(t,e)}}function yv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4uiv(this.addr,e),Lt(t,e)}}function Mv(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let a;this.type===r.SAMPLER_2D_SHADOW?($h.compareFunction=Yu,a=$h):a=_d,t.setTexture2D(e||a,n)}function Ev(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||xd,n)}function Sv(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||yd,n)}function Tv(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||vd,n)}function bv(r){switch(r){case 5126:return sv;case 35664:return ov;case 35665:return lv;case 35666:return cv;case 35674:return hv;case 35675:return uv;case 35676:return dv;case 5124:case 35670:return pv;case 35667:case 35671:return fv;case 35668:case 35672:return mv;case 35669:case 35673:return gv;case 5125:return _v;case 36294:return vv;case 36295:return xv;case 36296:return yv;case 35678:case 36198:case 36298:case 36306:case 35682:return Mv;case 35679:case 36299:case 36307:return Ev;case 35680:case 36300:case 36308:case 36293:return Sv;case 36289:case 36303:case 36311:case 36292:return Tv}}function wv(r,e){r.uniform1fv(this.addr,e)}function Av(r,e){const t=Cn(e,this.size,2);r.uniform2fv(this.addr,t)}function Rv(r,e){const t=Cn(e,this.size,3);r.uniform3fv(this.addr,t)}function Cv(r,e){const t=Cn(e,this.size,4);r.uniform4fv(this.addr,t)}function Lv(r,e){const t=Cn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Pv(r,e){const t=Cn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Dv(r,e){const t=Cn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Uv(r,e){r.uniform1iv(this.addr,e)}function Iv(r,e){r.uniform2iv(this.addr,e)}function Nv(r,e){r.uniform3iv(this.addr,e)}function Ov(r,e){r.uniform4iv(this.addr,e)}function Fv(r,e){r.uniform1uiv(this.addr,e)}function zv(r,e){r.uniform2uiv(this.addr,e)}function Bv(r,e){r.uniform3uiv(this.addr,e)}function kv(r,e){r.uniform4uiv(this.addr,e)}function Hv(r,e,t){const i=this.cache,n=e.length,a=Bs(t,n);Ct(i,a)||(r.uniform1iv(this.addr,a),Lt(i,a));for(let s=0;s!==n;++s)t.setTexture2D(e[s]||_d,a[s])}function Vv(r,e,t){const i=this.cache,n=e.length,a=Bs(t,n);Ct(i,a)||(r.uniform1iv(this.addr,a),Lt(i,a));for(let s=0;s!==n;++s)t.setTexture3D(e[s]||xd,a[s])}function Gv(r,e,t){const i=this.cache,n=e.length,a=Bs(t,n);Ct(i,a)||(r.uniform1iv(this.addr,a),Lt(i,a));for(let s=0;s!==n;++s)t.setTextureCube(e[s]||yd,a[s])}function Wv(r,e,t){const i=this.cache,n=e.length,a=Bs(t,n);Ct(i,a)||(r.uniform1iv(this.addr,a),Lt(i,a));for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||vd,a[s])}function Xv(r){switch(r){case 5126:return wv;case 35664:return Av;case 35665:return Rv;case 35666:return Cv;case 35674:return Lv;case 35675:return Pv;case 35676:return Dv;case 5124:case 35670:return Uv;case 35667:case 35671:return Iv;case 35668:case 35672:return Nv;case 35669:case 35673:return Ov;case 5125:return Fv;case 36294:return zv;case 36295:return Bv;case 36296:return kv;case 35678:case 36198:case 36298:case 36306:case 35682:return Hv;case 35679:case 36299:case 36307:return Vv;case 35680:case 36300:case 36308:case 36293:return Gv;case 36289:case 36303:case 36311:case 36292:return Wv}}class jv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=bv(t.type)}}class qv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xv(t.type)}}class Yv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let a=0,s=n.length;a!==s;++a){const o=n[a];o.setValue(e,t[o.id],i)}}}const Lo=/(\w+)(\])?(\[|\.)?/g;function tu(r,e){r.seq.push(e),r.map[e.id]=e}function $v(r,e,t){const i=r.name,n=i.length;for(Lo.lastIndex=0;;){const a=Lo.exec(i),s=Lo.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===n){tu(t,l===void 0?new jv(o,r,e):new qv(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new Yv(o),tu(t,h)),t=h}}}class _s{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=e.getActiveUniform(t,n),s=e.getUniformLocation(t,a.name);$v(a,s,this)}}setValue(e,t,i,n){const a=this.map[t];a!==void 0&&a.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let a=0,s=t.length;a!==s;++a){const o=t[a],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,a=e.length;n!==a;++n){const s=e[n];s.id in t&&i.push(s)}return i}}function iu(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const Zv=37297;let Kv=0;function Jv(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=n;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const ru=new We;function Qv(r){Je._getMatrix(ru,Je.workingColorSpace,r);const e=`mat3( ${ru.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(r)){case Es:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function nu(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=(r.getShaderInfoLog(e)||"").trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+n+`

`+Jv(r.getShaderSource(e),s)}else return n}function ex(r,e){const t=Qv(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function tx(r,e){let t;switch(e){case ef:t="Linear";break;case tf:t="Reinhard";break;case rf:t="Cineon";break;case nf:t="ACESFilmic";break;case sf:t="AgX";break;case of:t="Neutral";break;case af:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ss=new N;function ix(){Je.getLuminanceCoefficients(ss);const r=ss.x.toFixed(4),e=ss.y.toFixed(4),t=ss.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vn).join(`
`)}function nx(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ax(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=r.getActiveAttrib(e,n),s=a.name;let o=1;a.type===r.FLOAT_MAT2&&(o=2),a.type===r.FLOAT_MAT3&&(o=3),a.type===r.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:r.getAttribLocation(e,s),locationSize:o}}return t}function Vn(r){return r!==""}function au(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function su(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sx=/^[ \t]*#include +<([\w\d./]+)>/gm;function zl(r){return r.replace(sx,lx)}const ox=new Map;function lx(r,e){let t=Xe[e];if(t===void 0){const i=ox.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zl(t)}const cx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ou(r){return r.replace(cx,hx)}function hx(r,e,t,i){let n="";for(let a=parseInt(e);a<parseInt(t);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function lu(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ux(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Fu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Up?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Gi&&(e="SHADOWMAP_TYPE_VSM"),e}function dx(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case mn:case gn:e="ENVMAP_TYPE_CUBE";break;case zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function px(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case gn:e="ENVMAP_MODE_REFRACTION";break}return e}function fx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case nc:e="ENVMAP_BLENDING_MULTIPLY";break;case Jp:e="ENVMAP_BLENDING_MIX";break;case Qp:e="ENVMAP_BLENDING_ADD";break}return e}function mx(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function gx(r,e,t,i){const n=r.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=ux(t),l=dx(t),h=px(t),u=fx(t),d=mx(t),p=rx(t),g=nx(a),_=n.createProgram();let m,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vn).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vn).join(`
`),f.length>0&&(f+=`
`)):(m=[lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vn).join(`
`),f=[lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cr?"#define TONE_MAPPING":"",t.toneMapping!==cr?Xe.tonemapping_pars_fragment:"",t.toneMapping!==cr?tx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,ex("linearToOutputTexel",t.outputColorSpace),ix(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vn).join(`
`)),s=zl(s),s=au(s,t),s=su(s,t),o=zl(o),o=au(o,t),o=su(o,t),s=ou(s),o=ou(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=T+m+s,v=T+f+o,L=iu(n,n.VERTEX_SHADER,E),R=iu(n,n.FRAGMENT_SHADER,v);n.attachShader(_,L),n.attachShader(_,R),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function w(b){if(r.debug.checkShaderErrors){const U=n.getProgramInfoLog(_)||"",F=n.getShaderInfoLog(L)||"",I=n.getShaderInfoLog(R)||"",D=U.trim(),O=F.trim(),W=I.trim();let V=!0,q=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,_,L,R);else{const ee=nu(n,L,"vertex"),se=nu(n,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+D+`
`+ee+`
`+se)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(O===""||W==="")&&(q=!1);q&&(b.diagnostics={runnable:V,programLog:D,vertexShader:{log:O,prefix:m},fragmentShader:{log:W,prefix:f}})}n.deleteShader(L),n.deleteShader(R),C=new _s(n,_),x=ax(n,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let x;this.getAttributes=function(){return x===void 0&&w(this),x};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=n.getProgramParameter(_,Zv)),y},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=R,this}let _x=0;class vx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new xx(e),t.set(e,i)),i}}class xx{constructor(e){this.id=_x++,this.code=e,this.usedTimes=0}}function yx(r,e,t,i,n,a,s){const o=new pc,c=new vx,l=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures;let p=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,y,b,U,F){const I=U.fog,D=F.geometry,O=x.isMeshStandardMaterial?U.environment:null,W=(x.isMeshStandardMaterial?t:e).get(x.envMap||O),V=W&&W.mapping===zs?W.image.height:null,q=g[x.type];x.precision!==null&&(p=n.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const ee=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,se=ee!==void 0?ee.length:0;let oe=0;D.morphAttributes.position!==void 0&&(oe=1),D.morphAttributes.normal!==void 0&&(oe=2),D.morphAttributes.color!==void 0&&(oe=3);let ue,Me,Ee,G;if(q){const Qe=wi[q];ue=Qe.vertexShader,Me=Qe.fragmentShader}else ue=x.vertexShader,Me=x.fragmentShader,c.update(x),Ee=c.getVertexShaderID(x),G=c.getFragmentShaderID(x);const Z=r.getRenderTarget(),fe=r.state.buffers.depth.getReversed(),De=F.isInstancedMesh===!0,Ce=F.isBatchedMesh===!0,we=!!x.map,qe=!!x.matcap,A=!!W,ie=!!x.aoMap,te=!!x.lightMap,pe=!!x.bumpMap,K=!!x.normalMap,Ae=!!x.displacementMap,ne=!!x.emissiveMap,Se=!!x.metalnessMap,Ge=!!x.roughnessMap,He=x.anisotropy>0,P=x.clearcoat>0,M=x.dispersion>0,H=x.iridescence>0,Y=x.sheen>0,J=x.transmission>0,$=He&&!!x.anisotropyMap,Ne=P&&!!x.clearcoatMap,de=P&&!!x.clearcoatNormalMap,Le=P&&!!x.clearcoatRoughnessMap,xe=H&&!!x.iridescenceMap,ce=H&&!!x.iridescenceThicknessMap,ve=Y&&!!x.sheenColorMap,Ve=Y&&!!x.sheenRoughnessMap,Ue=!!x.specularMap,_e=!!x.specularColorMap,Ye=!!x.specularIntensityMap,z=J&&!!x.transmissionMap,he=J&&!!x.thicknessMap,me=!!x.gradientMap,Pe=!!x.alphaMap,le=x.alphaTest>0,Q=!!x.alphaHash,Re=!!x.extensions;let Oe=cr;x.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Oe=r.toneMapping);const wt={shaderID:q,shaderType:x.type,shaderName:x.name,vertexShader:ue,fragmentShader:Me,defines:x.defines,customVertexShaderID:Ee,customFragmentShaderID:G,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Ce,batchingColor:Ce&&F._colorsTexture!==null,instancing:De,instancingColor:De&&F.instanceColor!==null,instancingMorph:De&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?r.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:_n,alphaToCoverage:!!x.alphaToCoverage,map:we,matcap:qe,envMap:A,envMapMode:A&&W.mapping,envMapCubeUVHeight:V,aoMap:ie,lightMap:te,bumpMap:pe,normalMap:K,displacementMap:d&&Ae,emissiveMap:ne,normalMapObjectSpace:K&&x.normalMapType===uf,normalMapTangentSpace:K&&x.normalMapType===qu,metalnessMap:Se,roughnessMap:Ge,anisotropy:He,anisotropyMap:$,clearcoat:P,clearcoatMap:Ne,clearcoatNormalMap:de,clearcoatRoughnessMap:Le,dispersion:M,iridescence:H,iridescenceMap:xe,iridescenceThicknessMap:ce,sheen:Y,sheenColorMap:ve,sheenRoughnessMap:Ve,specularMap:Ue,specularColorMap:_e,specularIntensityMap:Ye,transmission:J,transmissionMap:z,thicknessMap:he,gradientMap:me,opaque:x.transparent===!1&&x.blending===lr&&x.alphaToCoverage===!1,alphaMap:Pe,alphaTest:le,alphaHash:Q,combine:x.combine,mapUv:we&&_(x.map.channel),aoMapUv:ie&&_(x.aoMap.channel),lightMapUv:te&&_(x.lightMap.channel),bumpMapUv:pe&&_(x.bumpMap.channel),normalMapUv:K&&_(x.normalMap.channel),displacementMapUv:Ae&&_(x.displacementMap.channel),emissiveMapUv:ne&&_(x.emissiveMap.channel),metalnessMapUv:Se&&_(x.metalnessMap.channel),roughnessMapUv:Ge&&_(x.roughnessMap.channel),anisotropyMapUv:$&&_(x.anisotropyMap.channel),clearcoatMapUv:Ne&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:de&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&_(x.sheenRoughnessMap.channel),specularMapUv:Ue&&_(x.specularMap.channel),specularColorMapUv:_e&&_(x.specularColorMap.channel),specularIntensityMapUv:Ye&&_(x.specularIntensityMap.channel),transmissionMapUv:z&&_(x.transmissionMap.channel),thicknessMapUv:he&&_(x.thicknessMap.channel),alphaMapUv:Pe&&_(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(K||He),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!D.attributes.uv&&(we||Pe),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:fe,skinning:F.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:oe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&b.length>0,shadowMapType:r.shadowMap.type,toneMapping:Oe,decodeVideoTexture:we&&x.map.isVideoTexture===!0&&Je.getTransfer(x.map.colorSpace)===tt,decodeVideoTextureEmissive:ne&&x.emissiveMap.isVideoTexture===!0&&Je.getTransfer(x.emissiveMap.colorSpace)===tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ui,flipSided:x.side===qt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Re&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&x.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return wt.vertexUv1s=l.has(1),wt.vertexUv2s=l.has(2),wt.vertexUv3s=l.has(3),l.clear(),wt}function f(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const b in x.defines)y.push(b),y.push(x.defines[b]);return x.isRawShaderMaterial===!1&&(T(y,x),E(y,x),y.push(r.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function T(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function E(x,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),x.push(o.mask)}function v(x){const y=g[x.type];let b;if(y){const U=wi[y];b=im.clone(U.uniforms)}else b=x.uniforms;return b}function L(x,y){let b;for(let U=0,F=h.length;U<F;U++){const I=h[U];if(I.cacheKey===y){b=I,++b.usedTimes;break}}return b===void 0&&(b=new gx(r,y,x,a),h.push(b)),b}function R(x){if(--x.usedTimes===0){const y=h.indexOf(x);h[y]=h[h.length-1],h.pop(),x.destroy()}}function w(x){c.remove(x)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:L,releaseProgram:R,releaseShaderCache:w,programs:h,dispose:C}}function Mx(){let r=new WeakMap;function e(s){return r.has(s)}function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function i(s){r.delete(s)}function n(s,o,c){r.get(s)[o]=c}function a(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:a}}function Ex(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function cu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function hu(){const r=[];let e=0;const t=[],i=[],n=[];function a(){e=0,t.length=0,i.length=0,n.length=0}function s(u,d,p,g,_,m){let f=r[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function o(u,d,p,g,_,m){const f=s(u,d,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?n.push(f):t.push(f)}function c(u,d,p,g,_,m){const f=s(u,d,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?n.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||Ex),i.length>1&&i.sort(d||cu),n.length>1&&n.sort(d||cu)}function h(){for(let u=e,d=r.length;u<d;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:n,init:a,push:o,unshift:c,finish:h,sort:l}}function Sx(){let r=new WeakMap;function e(i,n){const a=r.get(i);let s;return a===void 0?(s=new hu,r.set(i,[s])):n>=a.length?(s=new hu,a.push(s)):s=a[n],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function Tx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new ke};break;case"SpotLight":t={position:new N,direction:new N,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new N,halfWidth:new N,halfHeight:new N};break}return r[e.id]=t,t}}}function bx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let wx=0;function Ax(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Rx(r){const e=new Tx,t=bx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new N);const n=new N,a=new lt,s=new lt;function o(l){let h=0,u=0,d=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,T=0,E=0,v=0,L=0,R=0,w=0;l.sort(Ax);for(let x=0,y=l.length;x<y;x++){const b=l[x],U=b.color,F=b.intensity,I=b.distance,D=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=U.r*F,u+=U.g*F,d+=U.b*F;else if(b.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(b.sh.coefficients[O],F);w++}else if(b.isDirectionalLight){const O=e.get(b);if(O.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const W=b.shadow,V=t.get(b);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=D,i.directionalShadowMatrix[p]=b.shadow.matrix,T++}i.directional[p]=O,p++}else if(b.isSpotLight){const O=e.get(b);O.position.setFromMatrixPosition(b.matrixWorld),O.color.copy(U).multiplyScalar(F),O.distance=I,O.coneCos=Math.cos(b.angle),O.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),O.decay=b.decay,i.spot[_]=O;const W=b.shadow;if(b.map&&(i.spotLightMap[L]=b.map,L++,W.updateMatrices(b),b.castShadow&&R++),i.spotLightMatrix[_]=W.matrix,b.castShadow){const V=t.get(b);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=D,v++}_++}else if(b.isRectAreaLight){const O=e.get(b);O.color.copy(U).multiplyScalar(F),O.halfWidth.set(b.width*.5,0,0),O.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=O,m++}else if(b.isPointLight){const O=e.get(b);if(O.color.copy(b.color).multiplyScalar(b.intensity),O.distance=b.distance,O.decay=b.decay,b.castShadow){const W=b.shadow,V=t.get(b);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,V.shadowCameraNear=W.camera.near,V.shadowCameraFar=W.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=D,i.pointShadowMatrix[g]=b.shadow.matrix,E++}i.point[g]=O,g++}else if(b.isHemisphereLight){const O=e.get(b);O.skyColor.copy(b.color).multiplyScalar(F),O.groundColor.copy(b.groundColor).multiplyScalar(F),i.hemi[f]=O,f++}}m>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==T||C.numPointShadows!==E||C.numSpotShadows!==v||C.numSpotMaps!==L||C.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=v+L-R,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=T,C.numPointShadows=E,C.numSpotShadows=v,C.numSpotMaps=L,C.numLightProbes=w,i.version=wx++)}function c(l,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,T=l.length;f<T;f++){const E=l[f];if(E.isDirectionalLight){const v=i.directional[u];v.direction.setFromMatrixPosition(E.matrixWorld),n.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(m),u++}else if(E.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),n.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),s.identity(),a.copy(E.matrixWorld),a.premultiply(m),s.extractRotation(a),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),g++}else if(E.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:i}}function uu(r){const e=new Rx(r),t=[],i=[];function n(h){l.camera=h,t.length=0,i.length=0}function a(h){t.push(h)}function s(h){i.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:s}}function Cx(r){let e=new WeakMap;function t(n,a=0){const s=e.get(n);let o;return s===void 0?(o=new uu(r),e.set(n,[o])):a>=s.length?(o=new uu(r),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Lx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Px=`uniform sampler2D shadow_pass;
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
}`;function Dx(r,e,t){let i=new fc;const n=new re,a=new re,s=new gt,o=new $m({depthPacking:hf}),c=new Zm,l={},h=t.maxTextureSize,u={[ur]:qt,[qt]:ur,[ui]:ui},d=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Lx,fragmentShader:Px}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new bt;g.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Vt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fu;let f=this.type;this.render=function(R,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const x=r.getRenderTarget(),y=r.getActiveCubeFace(),b=r.getActiveMipmapLevel(),U=r.state;U.setBlending(or),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const F=f!==Gi&&this.type===Gi,I=f===Gi&&this.type!==Gi;for(let D=0,O=R.length;D<O;D++){const W=R[D],V=W.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;n.copy(V.mapSize);const q=V.getFrameExtents();if(n.multiply(q),a.copy(V.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(a.x=Math.floor(h/q.x),n.x=a.x*q.x,V.mapSize.x=a.x),n.y>h&&(a.y=Math.floor(h/q.y),n.y=a.y*q.y,V.mapSize.y=a.y)),V.map===null||F===!0||I===!0){const se=this.type!==Gi?{minFilter:Si,magFilter:Si}:{};V.map!==null&&V.map.dispose(),V.map=new Nr(n.x,n.y,se),V.map.texture.name=W.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const ee=V.getViewportCount();for(let se=0;se<ee;se++){const oe=V.getViewport(se);s.set(a.x*oe.x,a.y*oe.y,a.x*oe.z,a.y*oe.w),U.viewport(s),V.updateMatrices(W,se),i=V.getFrustum(),v(w,C,V.camera,W,this.type)}V.isPointLightShadow!==!0&&this.type===Gi&&T(V,C),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(x,y,b)};function T(R,w){const C=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Nr(n.x,n.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(w,null,C,d,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(w,null,C,p,_,null)}function E(R,w,C,x){let y=null;const b=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(b!==void 0)y=b;else if(y=C.isPointLight===!0?c:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const U=y.uuid,F=w.uuid;let I=l[U];I===void 0&&(I={},l[U]=I);let D=I[F];D===void 0&&(D=y.clone(),I[F]=D,w.addEventListener("dispose",L)),y=D}if(y.visible=w.visible,y.wireframe=w.wireframe,x===Gi?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:u[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=r.properties.get(y);U.light=C}return y}function v(R,w,C,x,y){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Gi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);const U=e.update(R),F=R.material;if(Array.isArray(F)){const I=U.groups;for(let D=0,O=I.length;D<O;D++){const W=I[D],V=F[W.materialIndex];if(V&&V.visible){const q=E(R,V,x,y);R.onBeforeShadow(r,R,w,C,U,q,W),r.renderBufferDirect(C,null,U,q,R,W),R.onAfterShadow(r,R,w,C,U,q,W)}}}else if(F.visible){const I=E(R,F,x,y);R.onBeforeShadow(r,R,w,C,U,I,null),r.renderBufferDirect(C,null,U,I,R,null),R.onAfterShadow(r,R,w,C,U,I,null)}}const b=R.children;for(let U=0,F=b.length;U<F;U++)v(b[U],w,C,x,y)}function L(R){R.target.removeEventListener("dispose",L);for(const w in l){const C=l[w],x=R.target.uuid;x in C&&(C[x].dispose(),delete C[x])}}}const Ux={[Xo]:jo,[qo]:Zo,[Yo]:Ko,[fn]:$o,[jo]:Xo,[Zo]:qo,[Ko]:Yo,[$o]:fn};function Ix(r,e){function t(){let z=!1;const he=new gt;let me=null;const Pe=new gt(0,0,0,0);return{setMask:function(le){me!==le&&!z&&(r.colorMask(le,le,le,le),me=le)},setLocked:function(le){z=le},setClear:function(le,Q,Re,Oe,wt){wt===!0&&(le*=Oe,Q*=Oe,Re*=Oe),he.set(le,Q,Re,Oe),Pe.equals(he)===!1&&(r.clearColor(le,Q,Re,Oe),Pe.copy(he))},reset:function(){z=!1,me=null,Pe.set(-1,0,0,0)}}}function i(){let z=!1,he=!1,me=null,Pe=null,le=null;return{setReversed:function(Q){if(he!==Q){const Re=e.get("EXT_clip_control");Q?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),he=Q;const Oe=le;le=null,this.setClear(Oe)}},getReversed:function(){return he},setTest:function(Q){Q?Z(r.DEPTH_TEST):fe(r.DEPTH_TEST)},setMask:function(Q){me!==Q&&!z&&(r.depthMask(Q),me=Q)},setFunc:function(Q){if(he&&(Q=Ux[Q]),Pe!==Q){switch(Q){case Xo:r.depthFunc(r.NEVER);break;case jo:r.depthFunc(r.ALWAYS);break;case qo:r.depthFunc(r.LESS);break;case fn:r.depthFunc(r.LEQUAL);break;case Yo:r.depthFunc(r.EQUAL);break;case $o:r.depthFunc(r.GEQUAL);break;case Zo:r.depthFunc(r.GREATER);break;case Ko:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Pe=Q}},setLocked:function(Q){z=Q},setClear:function(Q){le!==Q&&(he&&(Q=1-Q),r.clearDepth(Q),le=Q)},reset:function(){z=!1,me=null,Pe=null,le=null,he=!1}}}function n(){let z=!1,he=null,me=null,Pe=null,le=null,Q=null,Re=null,Oe=null,wt=null;return{setTest:function(Qe){z||(Qe?Z(r.STENCIL_TEST):fe(r.STENCIL_TEST))},setMask:function(Qe){he!==Qe&&!z&&(r.stencilMask(Qe),he=Qe)},setFunc:function(Qe,Oi,Ti){(me!==Qe||Pe!==Oi||le!==Ti)&&(r.stencilFunc(Qe,Oi,Ti),me=Qe,Pe=Oi,le=Ti)},setOp:function(Qe,Oi,Ti){(Q!==Qe||Re!==Oi||Oe!==Ti)&&(r.stencilOp(Qe,Oi,Ti),Q=Qe,Re=Oi,Oe=Ti)},setLocked:function(Qe){z=Qe},setClear:function(Qe){wt!==Qe&&(r.clearStencil(Qe),wt=Qe)},reset:function(){z=!1,he=null,me=null,Pe=null,le=null,Q=null,Re=null,Oe=null,wt=null}}}const a=new t,s=new i,o=new n,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,T=null,E=null,v=null,L=null,R=null,w=new ke(0,0,0),C=0,x=!1,y=null,b=null,U=null,F=null,I=null;const D=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,W=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(V)[1]),O=W>=1):V.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),O=W>=2);let q=null,ee={};const se=r.getParameter(r.SCISSOR_BOX),oe=r.getParameter(r.VIEWPORT),ue=new gt().fromArray(se),Me=new gt().fromArray(oe);function Ee(z,he,me,Pe){const le=new Uint8Array(4),Q=r.createTexture();r.bindTexture(z,Q),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Re=0;Re<me;Re++)z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?r.texImage3D(he,0,r.RGBA,1,1,Pe,0,r.RGBA,r.UNSIGNED_BYTE,le):r.texImage2D(he+Re,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,le);return Q}const G={};G[r.TEXTURE_2D]=Ee(r.TEXTURE_2D,r.TEXTURE_2D,1),G[r.TEXTURE_CUBE_MAP]=Ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[r.TEXTURE_2D_ARRAY]=Ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),G[r.TEXTURE_3D]=Ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Z(r.DEPTH_TEST),s.setFunc(fn),pe(!1),K(Zc),Z(r.CULL_FACE),ie(or);function Z(z){h[z]!==!0&&(r.enable(z),h[z]=!0)}function fe(z){h[z]!==!1&&(r.disable(z),h[z]=!1)}function De(z,he){return u[z]!==he?(r.bindFramebuffer(z,he),u[z]=he,z===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=he),z===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=he),!0):!1}function Ce(z,he){let me=p,Pe=!1;if(z){me=d.get(he),me===void 0&&(me=[],d.set(he,me));const le=z.textures;if(me.length!==le.length||me[0]!==r.COLOR_ATTACHMENT0){for(let Q=0,Re=le.length;Q<Re;Q++)me[Q]=r.COLOR_ATTACHMENT0+Q;me.length=le.length,Pe=!0}}else me[0]!==r.BACK&&(me[0]=r.BACK,Pe=!0);Pe&&r.drawBuffers(me)}function we(z){return g!==z?(r.useProgram(z),g=z,!0):!1}const qe={[br]:r.FUNC_ADD,[Np]:r.FUNC_SUBTRACT,[Op]:r.FUNC_REVERSE_SUBTRACT};qe[Fp]=r.MIN,qe[zp]=r.MAX;const A={[Bp]:r.ZERO,[kp]:r.ONE,[Hp]:r.SRC_COLOR,[Go]:r.SRC_ALPHA,[qp]:r.SRC_ALPHA_SATURATE,[Xp]:r.DST_COLOR,[Gp]:r.DST_ALPHA,[Vp]:r.ONE_MINUS_SRC_COLOR,[Wo]:r.ONE_MINUS_SRC_ALPHA,[jp]:r.ONE_MINUS_DST_COLOR,[Wp]:r.ONE_MINUS_DST_ALPHA,[Yp]:r.CONSTANT_COLOR,[$p]:r.ONE_MINUS_CONSTANT_COLOR,[Zp]:r.CONSTANT_ALPHA,[Kp]:r.ONE_MINUS_CONSTANT_ALPHA};function ie(z,he,me,Pe,le,Q,Re,Oe,wt,Qe){if(z===or){_===!0&&(fe(r.BLEND),_=!1);return}if(_===!1&&(Z(r.BLEND),_=!0),z!==Ip){if(z!==m||Qe!==x){if((f!==br||v!==br)&&(r.blendEquation(r.FUNC_ADD),f=br,v=br),Qe)switch(z){case lr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case rr:r.blendFunc(r.ONE,r.ONE);break;case Kc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Jc:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case lr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case rr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Kc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}T=null,E=null,L=null,R=null,w.set(0,0,0),C=0,m=z,x=Qe}return}le=le||he,Q=Q||me,Re=Re||Pe,(he!==f||le!==v)&&(r.blendEquationSeparate(qe[he],qe[le]),f=he,v=le),(me!==T||Pe!==E||Q!==L||Re!==R)&&(r.blendFuncSeparate(A[me],A[Pe],A[Q],A[Re]),T=me,E=Pe,L=Q,R=Re),(Oe.equals(w)===!1||wt!==C)&&(r.blendColor(Oe.r,Oe.g,Oe.b,wt),w.copy(Oe),C=wt),m=z,x=!1}function te(z,he){z.side===ui?fe(r.CULL_FACE):Z(r.CULL_FACE);let me=z.side===qt;he&&(me=!me),pe(me),z.blending===lr&&z.transparent===!1?ie(or):ie(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),s.setFunc(z.depthFunc),s.setTest(z.depthTest),s.setMask(z.depthWrite),a.setMask(z.colorWrite);const Pe=z.stencilWrite;o.setTest(Pe),Pe&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ne(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Z(r.SAMPLE_ALPHA_TO_COVERAGE):fe(r.SAMPLE_ALPHA_TO_COVERAGE)}function pe(z){y!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),y=z)}function K(z){z!==Pp?(Z(r.CULL_FACE),z!==b&&(z===Zc?r.cullFace(r.BACK):z===Dp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):fe(r.CULL_FACE),b=z}function Ae(z){z!==U&&(O&&r.lineWidth(z),U=z)}function ne(z,he,me){z?(Z(r.POLYGON_OFFSET_FILL),(F!==he||I!==me)&&(r.polygonOffset(he,me),F=he,I=me)):fe(r.POLYGON_OFFSET_FILL)}function Se(z){z?Z(r.SCISSOR_TEST):fe(r.SCISSOR_TEST)}function Ge(z){z===void 0&&(z=r.TEXTURE0+D-1),q!==z&&(r.activeTexture(z),q=z)}function He(z,he,me){me===void 0&&(q===null?me=r.TEXTURE0+D-1:me=q);let Pe=ee[me];Pe===void 0&&(Pe={type:void 0,texture:void 0},ee[me]=Pe),(Pe.type!==z||Pe.texture!==he)&&(q!==me&&(r.activeTexture(me),q=me),r.bindTexture(z,he||G[z]),Pe.type=z,Pe.texture=he)}function P(){const z=ee[q];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function H(){try{r.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Y(){try{r.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function J(){try{r.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ne(){try{r.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function de(){try{r.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Le(){try{r.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xe(){try{r.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{r.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ve(z){ue.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),ue.copy(z))}function Ve(z){Me.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),Me.copy(z))}function Ue(z,he){let me=l.get(he);me===void 0&&(me=new WeakMap,l.set(he,me));let Pe=me.get(z);Pe===void 0&&(Pe=r.getUniformBlockIndex(he,z.name),me.set(z,Pe))}function _e(z,he){const me=l.get(he).get(z);c.get(he)!==me&&(r.uniformBlockBinding(he,me,z.__bindingPointIndex),c.set(he,me))}function Ye(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),s.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},q=null,ee={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,T=null,E=null,v=null,L=null,R=null,w=new ke(0,0,0),C=0,x=!1,y=null,b=null,U=null,F=null,I=null,ue.set(0,0,r.canvas.width,r.canvas.height),Me.set(0,0,r.canvas.width,r.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:Z,disable:fe,bindFramebuffer:De,drawBuffers:Ce,useProgram:we,setBlending:ie,setMaterial:te,setFlipSided:pe,setCullFace:K,setLineWidth:Ae,setPolygonOffset:ne,setScissorTest:Se,activeTexture:Ge,bindTexture:He,unbindTexture:P,compressedTexImage2D:M,compressedTexImage3D:H,texImage2D:xe,texImage3D:ce,updateUBOMapping:Ue,uniformBlockBinding:_e,texStorage2D:de,texStorage3D:Le,texSubImage2D:Y,texSubImage3D:J,compressedTexSubImage2D:$,compressedTexSubImage3D:Ne,scissor:ve,viewport:Ve,reset:Ye}}function Nx(r,e,t,i,n,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new re,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,M){return p?new OffscreenCanvas(P,M):sa("canvas")}function _(P,M,H){let Y=1;const J=He(P);if((J.width>H||J.height>H)&&(Y=H/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const $=Math.floor(Y*J.width),Ne=Math.floor(Y*J.height);u===void 0&&(u=g($,Ne));const de=M?g($,Ne):u;return de.width=$,de.height=Ne,de.getContext("2d").drawImage(P,0,0,$,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+$+"x"+Ne+")."),de}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),P;return P}function m(P){return P.generateMipmaps}function f(P){r.generateMipmap(P)}function T(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(P,M,H,Y,J=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let $=M;if(M===r.RED&&(H===r.FLOAT&&($=r.R32F),H===r.HALF_FLOAT&&($=r.R16F),H===r.UNSIGNED_BYTE&&($=r.R8)),M===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&($=r.R8UI),H===r.UNSIGNED_SHORT&&($=r.R16UI),H===r.UNSIGNED_INT&&($=r.R32UI),H===r.BYTE&&($=r.R8I),H===r.SHORT&&($=r.R16I),H===r.INT&&($=r.R32I)),M===r.RG&&(H===r.FLOAT&&($=r.RG32F),H===r.HALF_FLOAT&&($=r.RG16F),H===r.UNSIGNED_BYTE&&($=r.RG8)),M===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&($=r.RG8UI),H===r.UNSIGNED_SHORT&&($=r.RG16UI),H===r.UNSIGNED_INT&&($=r.RG32UI),H===r.BYTE&&($=r.RG8I),H===r.SHORT&&($=r.RG16I),H===r.INT&&($=r.RG32I)),M===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&($=r.RGB8UI),H===r.UNSIGNED_SHORT&&($=r.RGB16UI),H===r.UNSIGNED_INT&&($=r.RGB32UI),H===r.BYTE&&($=r.RGB8I),H===r.SHORT&&($=r.RGB16I),H===r.INT&&($=r.RGB32I)),M===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&($=r.RGBA8UI),H===r.UNSIGNED_SHORT&&($=r.RGBA16UI),H===r.UNSIGNED_INT&&($=r.RGBA32UI),H===r.BYTE&&($=r.RGBA8I),H===r.SHORT&&($=r.RGBA16I),H===r.INT&&($=r.RGBA32I)),M===r.RGB&&(H===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),H===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),M===r.RGBA){const Ne=J?Es:Je.getTransfer(Y);H===r.FLOAT&&($=r.RGBA32F),H===r.HALF_FLOAT&&($=r.RGBA16F),H===r.UNSIGNED_BYTE&&($=Ne===tt?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(P,M){let H;return P?M===null||M===Ur||M===ia?H=r.DEPTH24_STENCIL8:M===Xi?H=r.DEPTH32F_STENCIL8:M===ta&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ur||M===ia?H=r.DEPTH_COMPONENT24:M===Xi?H=r.DEPTH_COMPONENT32F:M===ta&&(H=r.DEPTH_COMPONENT16),H}function L(P,M){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Si&&P.minFilter!==Ri?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function R(P){const M=P.target;M.removeEventListener("dispose",R),C(M),M.isVideoTexture&&h.delete(M)}function w(P){const M=P.target;M.removeEventListener("dispose",w),y(M)}function C(P){const M=i.get(P);if(M.__webglInit===void 0)return;const H=P.source,Y=d.get(H);if(Y){const J=Y[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&x(P),Object.keys(Y).length===0&&d.delete(H)}i.remove(P)}function x(P){const M=i.get(P);r.deleteTexture(M.__webglTexture);const H=P.source,Y=d.get(H);delete Y[M.__cacheKey],s.memory.textures--}function y(P){const M=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let J=0;J<M.__webglFramebuffer[Y].length;J++)r.deleteFramebuffer(M.__webglFramebuffer[Y][J]);else r.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)r.deleteFramebuffer(M.__webglFramebuffer[Y]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=P.textures;for(let Y=0,J=H.length;Y<J;Y++){const $=i.get(H[Y]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),s.memory.textures--),i.remove(H[Y])}i.remove(P)}let b=0;function U(){b=0}function F(){const P=b;return P>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+n.maxTextures),b+=1,P}function I(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function D(P,M){const H=i.get(P);if(P.isVideoTexture&&Se(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&H.__version!==P.version){const Y=P.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(H,P,M);return}}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+M)}function O(P,M){const H=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){G(H,P,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+M)}function W(P,M){const H=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){G(H,P,M);return}t.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+M)}function V(P,M){const H=i.get(P);if(P.version>0&&H.__version!==P.version){Z(H,P,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+M)}const q={[Ar]:r.REPEAT,[Rr]:r.CLAMP_TO_EDGE,[el]:r.MIRRORED_REPEAT},ee={[Si]:r.NEAREST,[lf]:r.NEAREST_MIPMAP_NEAREST,[Aa]:r.NEAREST_MIPMAP_LINEAR,[Ri]:r.LINEAR,[js]:r.LINEAR_MIPMAP_NEAREST,[Cr]:r.LINEAR_MIPMAP_LINEAR},se={[df]:r.NEVER,[vf]:r.ALWAYS,[pf]:r.LESS,[Yu]:r.LEQUAL,[ff]:r.EQUAL,[_f]:r.GEQUAL,[mf]:r.GREATER,[gf]:r.NOTEQUAL};function oe(P,M){if(M.type===Xi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Ri||M.magFilter===js||M.magFilter===Aa||M.magFilter===Cr||M.minFilter===Ri||M.minFilter===js||M.minFilter===Aa||M.minFilter===Cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,q[M.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,q[M.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,q[M.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,ee[M.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,ee[M.minFilter]),M.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,se[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Si||M.minFilter!==Aa&&M.minFilter!==Cr||M.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ue(P,M){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",R));const Y=M.source;let J=d.get(Y);J===void 0&&(J={},d.set(Y,J));const $=I(M);if($!==P.__cacheKey){J[$]===void 0&&(J[$]={texture:r.createTexture(),usedTimes:0},s.memory.textures++,H=!0),J[$].usedTimes++;const Ne=J[P.__cacheKey];Ne!==void 0&&(J[P.__cacheKey].usedTimes--,Ne.usedTimes===0&&x(M)),P.__cacheKey=$,P.__webglTexture=J[$].texture}return H}function Me(P,M,H){return Math.floor(Math.floor(P/H)/M)}function Ee(P,M,H,Y){const J=P.updateRanges;if(J.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,H,Y,M.data);else{J.sort((xe,ce)=>xe.start-ce.start);let $=0;for(let xe=1;xe<J.length;xe++){const ce=J[$],ve=J[xe],Ve=ce.start+ce.count,Ue=Me(ve.start,M.width,4),_e=Me(ce.start,M.width,4);ve.start<=Ve+1&&Ue===_e&&Me(ve.start+ve.count-1,M.width,4)===Ue?ce.count=Math.max(ce.count,ve.start+ve.count-ce.start):(++$,J[$]=ve)}J.length=$+1;const Ne=r.getParameter(r.UNPACK_ROW_LENGTH),de=r.getParameter(r.UNPACK_SKIP_PIXELS),Le=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let xe=0,ce=J.length;xe<ce;xe++){const ve=J[xe],Ve=Math.floor(ve.start/4),Ue=Math.ceil(ve.count/4),_e=Ve%M.width,Ye=Math.floor(Ve/M.width),z=Ue,he=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,_e),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ye),t.texSubImage2D(r.TEXTURE_2D,0,_e,Ye,z,he,H,Y,M.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ne),r.pixelStorei(r.UNPACK_SKIP_PIXELS,de),r.pixelStorei(r.UNPACK_SKIP_ROWS,Le)}}function G(P,M,H){let Y=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=r.TEXTURE_3D);const J=ue(P,M),$=M.source;t.bindTexture(Y,P.__webglTexture,r.TEXTURE0+H);const Ne=i.get($);if($.version!==Ne.__version||J===!0){t.activeTexture(r.TEXTURE0+H);const de=Je.getPrimaries(Je.workingColorSpace),Le=M.colorSpace===ar?null:Je.getPrimaries(M.colorSpace),xe=M.colorSpace===ar||de===Le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let ce=_(M.image,!1,n.maxTextureSize);ce=Ge(M,ce);const ve=a.convert(M.format,M.colorSpace),Ve=a.convert(M.type);let Ue=E(M.internalFormat,ve,Ve,M.colorSpace,M.isVideoTexture);oe(Y,M);let _e;const Ye=M.mipmaps,z=M.isVideoTexture!==!0,he=Ne.__version===void 0||J===!0,me=$.dataReady,Pe=L(M,ce);if(M.isDepthTexture)Ue=v(M.format===na,M.type),he&&(z?t.texStorage2D(r.TEXTURE_2D,1,Ue,ce.width,ce.height):t.texImage2D(r.TEXTURE_2D,0,Ue,ce.width,ce.height,0,ve,Ve,null));else if(M.isDataTexture)if(Ye.length>0){z&&he&&t.texStorage2D(r.TEXTURE_2D,Pe,Ue,Ye[0].width,Ye[0].height);for(let le=0,Q=Ye.length;le<Q;le++)_e=Ye[le],z?me&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,_e.width,_e.height,ve,Ve,_e.data):t.texImage2D(r.TEXTURE_2D,le,Ue,_e.width,_e.height,0,ve,Ve,_e.data);M.generateMipmaps=!1}else z?(he&&t.texStorage2D(r.TEXTURE_2D,Pe,Ue,ce.width,ce.height),me&&Ee(M,ce,ve,Ve)):t.texImage2D(r.TEXTURE_2D,0,Ue,ce.width,ce.height,0,ve,Ve,ce.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){z&&he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Pe,Ue,Ye[0].width,Ye[0].height,ce.depth);for(let le=0,Q=Ye.length;le<Q;le++)if(_e=Ye[le],M.format!==Ei)if(ve!==null)if(z){if(me)if(M.layerUpdates.size>0){const Re=Hh(_e.width,_e.height,M.format,M.type);for(const Oe of M.layerUpdates){const wt=_e.data.subarray(Oe*Re/_e.data.BYTES_PER_ELEMENT,(Oe+1)*Re/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,Oe,_e.width,_e.height,1,ve,wt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,_e.width,_e.height,ce.depth,ve,_e.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,le,Ue,_e.width,_e.height,ce.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?me&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,_e.width,_e.height,ce.depth,ve,Ve,_e.data):t.texImage3D(r.TEXTURE_2D_ARRAY,le,Ue,_e.width,_e.height,ce.depth,0,ve,Ve,_e.data)}else{z&&he&&t.texStorage2D(r.TEXTURE_2D,Pe,Ue,Ye[0].width,Ye[0].height);for(let le=0,Q=Ye.length;le<Q;le++)_e=Ye[le],M.format!==Ei?ve!==null?z?me&&t.compressedTexSubImage2D(r.TEXTURE_2D,le,0,0,_e.width,_e.height,ve,_e.data):t.compressedTexImage2D(r.TEXTURE_2D,le,Ue,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?me&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,_e.width,_e.height,ve,Ve,_e.data):t.texImage2D(r.TEXTURE_2D,le,Ue,_e.width,_e.height,0,ve,Ve,_e.data)}else if(M.isDataArrayTexture)if(z){if(he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Pe,Ue,ce.width,ce.height,ce.depth),me)if(M.layerUpdates.size>0){const le=Hh(ce.width,ce.height,M.format,M.type);for(const Q of M.layerUpdates){const Re=ce.data.subarray(Q*le/ce.data.BYTES_PER_ELEMENT,(Q+1)*le/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,ce.width,ce.height,1,ve,Ve,Re)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ve,Ve,ce.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ue,ce.width,ce.height,ce.depth,0,ve,Ve,ce.data);else if(M.isData3DTexture)z?(he&&t.texStorage3D(r.TEXTURE_3D,Pe,Ue,ce.width,ce.height,ce.depth),me&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ve,Ve,ce.data)):t.texImage3D(r.TEXTURE_3D,0,Ue,ce.width,ce.height,ce.depth,0,ve,Ve,ce.data);else if(M.isFramebufferTexture){if(he)if(z)t.texStorage2D(r.TEXTURE_2D,Pe,Ue,ce.width,ce.height);else{let le=ce.width,Q=ce.height;for(let Re=0;Re<Pe;Re++)t.texImage2D(r.TEXTURE_2D,Re,Ue,le,Q,0,ve,Ve,null),le>>=1,Q>>=1}}else if(Ye.length>0){if(z&&he){const le=He(Ye[0]);t.texStorage2D(r.TEXTURE_2D,Pe,Ue,le.width,le.height)}for(let le=0,Q=Ye.length;le<Q;le++)_e=Ye[le],z?me&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,ve,Ve,_e):t.texImage2D(r.TEXTURE_2D,le,Ue,ve,Ve,_e);M.generateMipmaps=!1}else if(z){if(he){const le=He(ce);t.texStorage2D(r.TEXTURE_2D,Pe,Ue,le.width,le.height)}me&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve,Ve,ce)}else t.texImage2D(r.TEXTURE_2D,0,Ue,ve,Ve,ce);m(M)&&f(Y),Ne.__version=$.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Z(P,M,H){if(M.image.length!==6)return;const Y=ue(P,M),J=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+H);const $=i.get(J);if(J.version!==$.__version||Y===!0){t.activeTexture(r.TEXTURE0+H);const Ne=Je.getPrimaries(Je.workingColorSpace),de=M.colorSpace===ar?null:Je.getPrimaries(M.colorSpace),Le=M.colorSpace===ar||Ne===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const xe=M.isCompressedTexture||M.image[0].isCompressedTexture,ce=M.image[0]&&M.image[0].isDataTexture,ve=[];for(let Q=0;Q<6;Q++)!xe&&!ce?ve[Q]=_(M.image[Q],!0,n.maxCubemapSize):ve[Q]=ce?M.image[Q].image:M.image[Q],ve[Q]=Ge(M,ve[Q]);const Ve=ve[0],Ue=a.convert(M.format,M.colorSpace),_e=a.convert(M.type),Ye=E(M.internalFormat,Ue,_e,M.colorSpace),z=M.isVideoTexture!==!0,he=$.__version===void 0||Y===!0,me=J.dataReady;let Pe=L(M,Ve);oe(r.TEXTURE_CUBE_MAP,M);let le;if(xe){z&&he&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Pe,Ye,Ve.width,Ve.height);for(let Q=0;Q<6;Q++){le=ve[Q].mipmaps;for(let Re=0;Re<le.length;Re++){const Oe=le[Re];M.format!==Ei?Ue!==null?z?me&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re,0,0,Oe.width,Oe.height,Ue,Oe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re,Ye,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re,0,0,Oe.width,Oe.height,Ue,_e,Oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re,Ye,Oe.width,Oe.height,0,Ue,_e,Oe.data)}}}else{if(le=M.mipmaps,z&&he){le.length>0&&Pe++;const Q=He(ve[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Pe,Ye,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ce){z?me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ve[Q].width,ve[Q].height,Ue,_e,ve[Q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ye,ve[Q].width,ve[Q].height,0,Ue,_e,ve[Q].data);for(let Re=0;Re<le.length;Re++){const Oe=le[Re].image[Q].image;z?me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re+1,0,0,Oe.width,Oe.height,Ue,_e,Oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re+1,Ye,Oe.width,Oe.height,0,Ue,_e,Oe.data)}}else{z?me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ue,_e,ve[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ye,Ue,_e,ve[Q]);for(let Re=0;Re<le.length;Re++){const Oe=le[Re];z?me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re+1,0,0,Ue,_e,Oe.image[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Re+1,Ye,Ue,_e,Oe.image[Q])}}}m(M)&&f(r.TEXTURE_CUBE_MAP),$.__version=J.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function fe(P,M,H,Y,J,$){const Ne=a.convert(H.format,H.colorSpace),de=a.convert(H.type),Le=E(H.internalFormat,Ne,de,H.colorSpace),xe=i.get(M),ce=i.get(H);if(ce.__renderTarget=M,!xe.__hasExternalTextures){const ve=Math.max(1,M.width>>$),Ve=Math.max(1,M.height>>$);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,$,Le,ve,Ve,M.depth,0,Ne,de,null):t.texImage2D(J,$,Le,ve,Ve,0,Ne,de,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),ne(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,J,ce.__webglTexture,0,Ae(M)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,J,ce.__webglTexture,$),t.bindFramebuffer(r.FRAMEBUFFER,null)}function De(P,M,H){if(r.bindRenderbuffer(r.RENDERBUFFER,P),M.depthBuffer){const Y=M.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,$=v(M.stencilBuffer,J),Ne=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=Ae(M);ne(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,de,$,M.width,M.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,de,$,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,$,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ne,r.RENDERBUFFER,P)}else{const Y=M.textures;for(let J=0;J<Y.length;J++){const $=Y[J],Ne=a.convert($.format,$.colorSpace),de=a.convert($.type),Le=E($.internalFormat,Ne,de,$.colorSpace),xe=Ae(M);H&&ne(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,xe,Le,M.width,M.height):ne(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xe,Le,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Le,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ce(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=i.get(M.depthTexture);H.__renderTarget=M,(!H.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),D(M.depthTexture,0);const Y=H.__webglTexture,J=Ae(M);if(M.depthTexture.format===ra)ne(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Y,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Y,0);else if(M.depthTexture.format===na)ne(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Y,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function we(P){const M=i.get(P),H=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const Y=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=Y}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const Y=P.texture.mipmaps;Y&&Y.length>0?Ce(M.__webglFramebuffer[0],P):Ce(M.__webglFramebuffer,P)}else if(H){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=r.createRenderbuffer(),De(M.__webglDepthbuffer[Y],P,!1);else{const J=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[Y];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,$)}}else{const Y=P.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),De(M.__webglDepthbuffer,P,!1);else{const J=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,$)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function qe(P,M,H){const Y=i.get(P);M!==void 0&&fe(Y.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&we(P)}function A(P){const M=P.texture,H=i.get(P),Y=i.get(M);P.addEventListener("dispose",w);const J=P.textures,$=P.isWebGLCubeRenderTarget===!0,Ne=J.length>1;if(Ne||(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=M.version,s.memory.textures++),$){H.__webglFramebuffer=[];for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[de]=[];for(let Le=0;Le<M.mipmaps.length;Le++)H.__webglFramebuffer[de][Le]=r.createFramebuffer()}else H.__webglFramebuffer[de]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let de=0;de<M.mipmaps.length;de++)H.__webglFramebuffer[de]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(Ne)for(let de=0,Le=J.length;de<Le;de++){const xe=i.get(J[de]);xe.__webglTexture===void 0&&(xe.__webglTexture=r.createTexture(),s.memory.textures++)}if(P.samples>0&&ne(P)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let de=0;de<J.length;de++){const Le=J[de];H.__webglColorRenderbuffer[de]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[de]);const xe=a.convert(Le.format,Le.colorSpace),ce=a.convert(Le.type),ve=E(Le.internalFormat,xe,ce,Le.colorSpace,P.isXRRenderTarget===!0),Ve=Ae(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ve,ve,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,H.__webglColorRenderbuffer[de])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),De(H.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),oe(r.TEXTURE_CUBE_MAP,M);for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0)for(let Le=0;Le<M.mipmaps.length;Le++)fe(H.__webglFramebuffer[de][Le],P,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le);else fe(H.__webglFramebuffer[de],P,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(M)&&f(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let de=0,Le=J.length;de<Le;de++){const xe=J[de],ce=i.get(xe);let ve=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ve=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ve,ce.__webglTexture),oe(ve,xe),fe(H.__webglFramebuffer,P,xe,r.COLOR_ATTACHMENT0+de,ve,0),m(xe)&&f(ve)}t.unbindTexture()}else{let de=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(de,Y.__webglTexture),oe(de,M),M.mipmaps&&M.mipmaps.length>0)for(let Le=0;Le<M.mipmaps.length;Le++)fe(H.__webglFramebuffer[Le],P,M,r.COLOR_ATTACHMENT0,de,Le);else fe(H.__webglFramebuffer,P,M,r.COLOR_ATTACHMENT0,de,0);m(M)&&f(de),t.unbindTexture()}P.depthBuffer&&we(P)}function ie(P){const M=P.textures;for(let H=0,Y=M.length;H<Y;H++){const J=M[H];if(m(J)){const $=T(P),Ne=i.get(J).__webglTexture;t.bindTexture($,Ne),f($),t.unbindTexture()}}}const te=[],pe=[];function K(P){if(P.samples>0){if(ne(P)===!1){const M=P.textures,H=P.width,Y=P.height;let J=r.COLOR_BUFFER_BIT;const $=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ne=i.get(P),de=M.length>1;if(de)for(let xe=0;xe<M.length;xe++)t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const Le=P.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),de){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[xe]);const ce=i.get(M[xe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ce,0)}r.blitFramebuffer(0,0,H,Y,0,0,H,Y,J,r.NEAREST),c===!0&&(te.length=0,pe.length=0,te.push(r.COLOR_ATTACHMENT0+xe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(te.push($),pe.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,pe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),de)for(let xe=0;xe<M.length;xe++){t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[xe]);const ce=i.get(M[xe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,ce,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const M=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Ae(P){return Math.min(n.maxSamples,P.samples)}function ne(P){const M=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Se(P){const M=s.render.frame;h.get(P)!==M&&(h.set(P,M),P.update())}function Ge(P,M){const H=P.colorSpace,Y=P.format,J=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==_n&&H!==ar&&(Je.getTransfer(H)===tt?(Y!==Ei||J!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function He(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=U,this.setTexture2D=D,this.setTexture2DArray=O,this.setTexture3D=W,this.setTextureCube=V,this.rebindTextures=qe,this.setupRenderTarget=A,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ne}function Ox(r,e){function t(i,n=ar){let a;const s=Je.getTransfer(n);if(i===Di)return r.UNSIGNED_BYTE;if(i===sc)return r.UNSIGNED_SHORT_4_4_4_4;if(i===oc)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Hu)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Vu)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===Bu)return r.BYTE;if(i===ku)return r.SHORT;if(i===ta)return r.UNSIGNED_SHORT;if(i===ac)return r.INT;if(i===Ur)return r.UNSIGNED_INT;if(i===Xi)return r.FLOAT;if(i===xa)return r.HALF_FLOAT;if(i===Gu)return r.ALPHA;if(i===Wu)return r.RGB;if(i===Ei)return r.RGBA;if(i===ra)return r.DEPTH_COMPONENT;if(i===na)return r.DEPTH_STENCIL;if(i===Xu)return r.RED;if(i===lc)return r.RED_INTEGER;if(i===ju)return r.RG;if(i===cc)return r.RG_INTEGER;if(i===hc)return r.RGBA_INTEGER;if(i===ps||i===fs||i===ms||i===gs)if(s===tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===ps)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ms)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===ps)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ms)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tl||i===il||i===rl||i===nl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===tl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===il)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===al||i===sl||i===ol)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===al||i===sl)return s===tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===ol)return s===tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ll||i===cl||i===hl||i===ul||i===dl||i===pl||i===fl||i===ml||i===gl||i===_l||i===vl||i===xl||i===yl||i===Ml)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===ll)return s===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cl)return s===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hl)return s===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ul)return s===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dl)return s===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pl)return s===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fl)return s===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ml)return s===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gl)return s===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_l)return s===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vl)return s===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xl)return s===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yl)return s===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ml)return s===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===El||i===Sl||i===Tl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===El)return s===tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bl||i===wl||i===Al||i===Rl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===bl)return a.COMPRESSED_RED_RGTC1_EXT;if(i===wl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Al)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ia?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}const Fx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zx=`
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

}`;class Bx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new ad(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Yi({vertexShader:Fx,fragmentShader:zx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vt(new yn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kx extends Fr{constructor(e,t){super();const i=this;let n=null,a=1,s=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Bx,f={},T=t.getContextAttributes();let E=null,v=null;const L=[],R=[],w=new re;let C=null;const x=new hi;x.viewport=new gt;const y=new hi;y.viewport=new gt;const b=[x,y],U=new ng;let F=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Z=L[G];return Z===void 0&&(Z=new fo,L[G]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(G){let Z=L[G];return Z===void 0&&(Z=new fo,L[G]=Z),Z.getGripSpace()},this.getHand=function(G){let Z=L[G];return Z===void 0&&(Z=new fo,L[G]=Z),Z.getHandSpace()};function D(G){const Z=R.indexOf(G.inputSource);if(Z===-1)return;const fe=L[Z];fe!==void 0&&(fe.update(G.inputSource,G.frame,l||s),fe.dispatchEvent({type:G.type,data:G.inputSource}))}function O(){n.removeEventListener("select",D),n.removeEventListener("selectstart",D),n.removeEventListener("selectend",D),n.removeEventListener("squeeze",D),n.removeEventListener("squeezestart",D),n.removeEventListener("squeezeend",D),n.removeEventListener("end",O),n.removeEventListener("inputsourceschange",W);for(let G=0;G<L.length;G++){const Z=R[G];Z!==null&&(R[G]=null,L[G].disconnect(Z))}F=null,I=null,m.reset();for(const G in f)delete f[G];e.setRenderTarget(E),p=null,d=null,u=null,n=null,v=null,Ee.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(n,t)),u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(G){if(n=G,n!==null){if(E=e.getRenderTarget(),n.addEventListener("select",D),n.addEventListener("selectstart",D),n.addEventListener("selectend",D),n.addEventListener("squeeze",D),n.addEventListener("squeezestart",D),n.addEventListener("squeezeend",D),n.addEventListener("end",O),n.addEventListener("inputsourceschange",W),T.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Z=null,fe=null,De=null;T.depth&&(De=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=T.stencil?na:ra,fe=T.stencil?ia:Ur);const Ce={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:a};u=this.getBinding(),d=u.createProjectionLayer(Ce),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Nr(d.textureWidth,d.textureHeight,{format:Ei,type:Di,depthTexture:new nd(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Z={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(n,t,Z),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Nr(p.framebufferWidth,p.framebufferHeight,{format:Ei,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await n.requestReferenceSpace(o),Ee.setContext(n),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(G){for(let Z=0;Z<G.removed.length;Z++){const fe=G.removed[Z],De=R.indexOf(fe);De>=0&&(R[De]=null,L[De].disconnect(fe))}for(let Z=0;Z<G.added.length;Z++){const fe=G.added[Z];let De=R.indexOf(fe);if(De===-1){for(let we=0;we<L.length;we++)if(we>=R.length){R.push(fe),De=we;break}else if(R[we]===null){R[we]=fe,De=we;break}if(De===-1)break}const Ce=L[De];Ce&&Ce.connect(fe)}}const V=new N,q=new N;function ee(G,Z,fe){V.setFromMatrixPosition(Z.matrixWorld),q.setFromMatrixPosition(fe.matrixWorld);const De=V.distanceTo(q),Ce=Z.projectionMatrix.elements,we=fe.projectionMatrix.elements,qe=Ce[14]/(Ce[10]-1),A=Ce[14]/(Ce[10]+1),ie=(Ce[9]+1)/Ce[5],te=(Ce[9]-1)/Ce[5],pe=(Ce[8]-1)/Ce[0],K=(we[8]+1)/we[0],Ae=qe*pe,ne=qe*K,Se=De/(-pe+K),Ge=Se*-pe;if(Z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ge),G.translateZ(Se),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Ce[10]===-1)G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const He=qe+Se,P=A+Se,M=Ae-Ge,H=ne+(De-Ge),Y=ie*A/P*He,J=te*A/P*He;G.projectionMatrix.makePerspective(M,H,Y,J,He,P),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function se(G,Z){Z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(n===null)return;let Z=G.near,fe=G.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),U.near=y.near=x.near=Z,U.far=y.far=x.far=fe,(F!==U.near||I!==U.far)&&(n.updateRenderState({depthNear:U.near,depthFar:U.far}),F=U.near,I=U.far),U.layers.mask=G.layers.mask|6,x.layers.mask=U.layers.mask&3,y.layers.mask=U.layers.mask&5;const De=G.parent,Ce=U.cameras;se(U,De);for(let we=0;we<Ce.length;we++)se(Ce[we],De);Ce.length===2?ee(U,x,y):U.projectionMatrix.copy(x.projectionMatrix),oe(G,U,De)};function oe(G,Z,fe){fe===null?G.matrix.copy(Z.matrixWorld):(G.matrix.copy(fe.matrixWorld),G.matrix.invert(),G.matrix.multiply(Z.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=aa*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(G){return f[G]};let ue=null;function Me(G,Z){if(h=Z.getViewerPose(l||s),g=Z,h!==null){const fe=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let De=!1;fe.length!==U.cameras.length&&(U.cameras.length=0,De=!0);for(let we=0;we<fe.length;we++){const qe=fe[we];let A=null;if(p!==null)A=p.getViewport(qe);else{const te=u.getViewSubImage(d,qe);A=te.viewport,we===0&&(e.setRenderTargetTextures(v,te.colorTexture,te.depthStencilTexture),e.setRenderTarget(v))}let ie=b[we];ie===void 0&&(ie=new hi,ie.layers.enable(we),ie.viewport=new gt,b[we]=ie),ie.matrix.fromArray(qe.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(qe.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(A.x,A.y,A.width,A.height),we===0&&(U.matrix.copy(ie.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),De===!0&&U.cameras.push(ie)}const Ce=n.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&_){u=i.getBinding();const we=u.getDepthInformation(fe[0]);we&&we.isValid&&we.texture&&m.init(we,n.renderState)}if(Ce&&Ce.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let we=0;we<fe.length;we++){const qe=fe[we].camera;if(qe){let A=f[qe];A||(A=new ad,f[qe]=A);const ie=u.getCameraImage(qe);A.sourceTexture=ie}}}}for(let fe=0;fe<L.length;fe++){const De=R[fe],Ce=L[fe];De!==null&&Ce!==void 0&&Ce.update(De,Z,l||s)}ue&&ue(G,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Ee=new gd;Ee.setAnimationLoop(Me),this.setAnimationLoop=function(G){ue=G},this.dispose=function(){}}}const Sr=new Ui,Hx=new lt;function Vx(r,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,ed(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,T,E,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),u(m,f)):f.isMeshPhongMaterial?(a(m,f),h(m,f)):f.isMeshStandardMaterial?(a(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),_(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,T,E):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===qt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===qt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=e.get(f),E=T.envMap,v=T.envMapRotation;E&&(m.envMap.value=E,Sr.copy(v),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),m.envMapRotation.value.setFromMatrix4(Hx.makeRotationFromEuler(Sr)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,T,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=E*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===qt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const T=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Gx(r,e,t,i){let n={},a={},s=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,E){const v=E.program;i.uniformBlockBinding(T,v)}function l(T,E){let v=n[T.id];v===void 0&&(g(T),v=h(T),n[T.id]=v,T.addEventListener("dispose",m));const L=E.program;i.updateUBOMapping(T,L);const R=e.render.frame;a[T.id]!==R&&(d(T),a[T.id]=R)}function h(T){const E=u();T.__bindingPointIndex=E;const v=r.createBuffer(),L=T.__size,R=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,L,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,v),v}function u(){for(let T=0;T<o;T++)if(s.indexOf(T)===-1)return s.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const E=n[T.id],v=T.uniforms,L=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let R=0,w=v.length;R<w;R++){const C=Array.isArray(v[R])?v[R]:[v[R]];for(let x=0,y=C.length;x<y;x++){const b=C[x];if(p(b,R,x,L)===!0){const U=b.__offset,F=Array.isArray(b.value)?b.value:[b.value];let I=0;for(let D=0;D<F.length;D++){const O=F[D],W=_(O);typeof O=="number"||typeof O=="boolean"?(b.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,U+I,b.__data)):O.isMatrix3?(b.__data[0]=O.elements[0],b.__data[1]=O.elements[1],b.__data[2]=O.elements[2],b.__data[3]=0,b.__data[4]=O.elements[3],b.__data[5]=O.elements[4],b.__data[6]=O.elements[5],b.__data[7]=0,b.__data[8]=O.elements[6],b.__data[9]=O.elements[7],b.__data[10]=O.elements[8],b.__data[11]=0):(O.toArray(b.__data,I),I+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,b.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(T,E,v,L){const R=T.value,w=E+"_"+v;if(L[w]===void 0)return typeof R=="number"||typeof R=="boolean"?L[w]=R:L[w]=R.clone(),!0;{const C=L[w];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return L[w]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function g(T){const E=T.uniforms;let v=0;const L=16;for(let w=0,C=E.length;w<C;w++){const x=Array.isArray(E[w])?E[w]:[E[w]];for(let y=0,b=x.length;y<b;y++){const U=x[y],F=Array.isArray(U.value)?U.value:[U.value];for(let I=0,D=F.length;I<D;I++){const O=F[I],W=_(O),V=v%L,q=V%W.boundary,ee=V+q;v+=q,ee!==0&&L-ee<W.storage&&(v+=L-ee),U.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=W.storage}}}const R=v%L;return R>0&&(v+=L-R),T.__size=v,T.__cache={},this}function _(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){const E=T.target;E.removeEventListener("dispose",m);const v=s.indexOf(E.__bindingPointIndex);s.splice(v,1),r.deleteBuffer(n[E.id]),delete n[E.id],delete a[E.id]}function f(){for(const T in n)r.deleteBuffer(n[T]);s=[],n={},a={}}return{bind:c,update:l,dispose:f}}class Wx{constructor(e={}){const{canvas:t=Of(),context:i=null,depth:n=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let L=!1;this._outputColorSpace=li;let R=0,w=0,C=null,x=-1,y=null;const b=new gt,U=new gt;let F=null;const I=new ke(0);let D=0,O=t.width,W=t.height,V=1,q=null,ee=null;const se=new gt(0,0,O,W),oe=new gt(0,0,O,W);let ue=!1;const Me=new fc;let Ee=!1,G=!1;const Z=new lt,fe=new N,De=new gt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function qe(){return C===null?V:1}let A=i;function ie(S,k){return t.getContext(S,k)}try{const S={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rc}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",le,!1),A===null){const k="webgl2";if(A=ie(k,S),A===null)throw ie(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let te,pe,K,Ae,ne,Se,Ge,He,P,M,H,Y,J,$,Ne,de,Le,xe,ce,ve,Ve,Ue,_e,Ye;function z(){te=new ev(A),te.init(),Ue=new Ox(A,te),pe=new q0(A,te,e,Ue),K=new Ix(A,te),pe.reversedDepthBuffer&&d&&K.buffers.depth.setReversed(!0),Ae=new rv(A),ne=new Mx,Se=new Nx(A,te,K,ne,pe,Ue,Ae),Ge=new $0(v),He=new Q0(v),P=new cg(A),_e=new X0(A,P),M=new tv(A,P,Ae,_e),H=new av(A,M,P,Ae),ce=new nv(A,pe,Se),de=new Y0(ne),Y=new yx(v,Ge,He,te,pe,_e,de),J=new Vx(v,ne),$=new Sx,Ne=new Cx(te),xe=new W0(v,Ge,He,K,H,p,c),Le=new Dx(v,H,pe),Ye=new Gx(A,Ae,pe,K),ve=new j0(A,te,Ae),Ve=new iv(A,te,Ae),Ae.programs=Y.programs,v.capabilities=pe,v.extensions=te,v.properties=ne,v.renderLists=$,v.shadowMap=Le,v.state=K,v.info=Ae}z();const he=new kx(v,A);this.xr=he,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const S=te.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=te.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(S){S!==void 0&&(V=S,this.setSize(O,W,!1))},this.getSize=function(S){return S.set(O,W)},this.setSize=function(S,k,X=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=S,W=k,t.width=Math.floor(S*V),t.height=Math.floor(k*V),X===!0&&(t.style.width=S+"px",t.style.height=k+"px"),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(O*V,W*V).floor()},this.setDrawingBufferSize=function(S,k,X){O=S,W=k,V=X,t.width=Math.floor(S*X),t.height=Math.floor(k*X),this.setViewport(0,0,S,k)},this.getCurrentViewport=function(S){return S.copy(b)},this.getViewport=function(S){return S.copy(se)},this.setViewport=function(S,k,X,j){S.isVector4?se.set(S.x,S.y,S.z,S.w):se.set(S,k,X,j),K.viewport(b.copy(se).multiplyScalar(V).round())},this.getScissor=function(S){return S.copy(oe)},this.setScissor=function(S,k,X,j){S.isVector4?oe.set(S.x,S.y,S.z,S.w):oe.set(S,k,X,j),K.scissor(U.copy(oe).multiplyScalar(V).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(S){K.setScissorTest(ue=S)},this.setOpaqueSort=function(S){q=S},this.setTransparentSort=function(S){ee=S},this.getClearColor=function(S){return S.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(S=!0,k=!0,X=!0){let j=0;if(S){let B=!1;if(C!==null){const ae=C.texture.format;B=ae===hc||ae===cc||ae===lc}if(B){const ae=C.texture.type,ye=ae===Di||ae===Ur||ae===ta||ae===ia||ae===sc||ae===oc,Te=xe.getClearColor(),be=xe.getClearAlpha(),Fe=Te.r,Be=Te.g,ze=Te.b;ye?(g[0]=Fe,g[1]=Be,g[2]=ze,g[3]=be,A.clearBufferuiv(A.COLOR,0,g)):(_[0]=Fe,_[1]=Be,_[2]=ze,_[3]=be,A.clearBufferiv(A.COLOR,0,_))}else j|=A.COLOR_BUFFER_BIT}k&&(j|=A.DEPTH_BUFFER_BIT),X&&(j|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",le,!1),xe.dispose(),$.dispose(),Ne.dispose(),ne.dispose(),Ge.dispose(),He.dispose(),H.dispose(),_e.dispose(),Ye.dispose(),Y.dispose(),he.dispose(),he.removeEventListener("sessionstart",Ti),he.removeEventListener("sessionend",kc),gr.stop()};function me(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const S=Ae.autoReset,k=Le.enabled,X=Le.autoUpdate,j=Le.needsUpdate,B=Le.type;z(),Ae.autoReset=S,Le.enabled=k,Le.autoUpdate=X,Le.needsUpdate=j,Le.type=B}function le(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Q(S){const k=S.target;k.removeEventListener("dispose",Q),Re(k)}function Re(S){Oe(S),ne.remove(S)}function Oe(S){const k=ne.get(S).programs;k!==void 0&&(k.forEach(function(X){Y.releaseProgram(X)}),S.isShaderMaterial&&Y.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,X,j,B,ae){k===null&&(k=Ce);const ye=B.isMesh&&B.matrixWorld.determinant()<0,Te=mp(S,k,X,j,B);K.setMaterial(j,ye);let be=X.index,Fe=1;if(j.wireframe===!0){if(be=M.getWireframeAttribute(X),be===void 0)return;Fe=2}const Be=X.drawRange,ze=X.attributes.position;let Ke=Be.start*Fe,at=(Be.start+Be.count)*Fe;ae!==null&&(Ke=Math.max(Ke,ae.start*Fe),at=Math.min(at,(ae.start+ae.count)*Fe)),be!==null?(Ke=Math.max(Ke,0),at=Math.min(at,be.count)):ze!=null&&(Ke=Math.max(Ke,0),at=Math.min(at,ze.count));const ct=at-Ke;if(ct<0||ct===1/0)return;_e.setup(B,j,Te,X,be);let dt,st=ve;if(be!==null&&(dt=P.get(be),st=Ve,st.setIndex(dt)),B.isMesh)j.wireframe===!0?(K.setLineWidth(j.wireframeLinewidth*qe()),st.setMode(A.LINES)):st.setMode(A.TRIANGLES);else if(B.isLine){let Ie=j.linewidth;Ie===void 0&&(Ie=1),K.setLineWidth(Ie*qe()),B.isLineSegments?st.setMode(A.LINES):B.isLineLoop?st.setMode(A.LINE_LOOP):st.setMode(A.LINE_STRIP)}else B.isPoints?st.setMode(A.POINTS):B.isSprite&&st.setMode(A.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)oa("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))st.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ie=B._multiDrawStarts,Dt=B._multiDrawCounts,Fi=B._multiDrawCount,mi=be?P.get(be).bytesPerElement:1,Br=ne.get(j).currentProgram.getUniforms();for(let $t=0;$t<Fi;$t++)Br.setValue(A,"_gl_DrawID",$t),st.render(Ie[$t]/mi,Dt[$t])}else if(B.isInstancedMesh)st.renderInstances(Ke,ct,B.count);else if(X.isInstancedBufferGeometry){const Ie=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Dt=Math.min(X.instanceCount,Ie);st.renderInstances(Ke,ct,Dt)}else st.render(Ke,ct)};function wt(S,k,X){S.transparent===!0&&S.side===ui&&S.forceSinglePass===!1?(S.side=qt,S.needsUpdate=!0,wa(S,k,X),S.side=ur,S.needsUpdate=!0,wa(S,k,X),S.side=ui):wa(S,k,X)}this.compile=function(S,k,X=null){X===null&&(X=S),f=Ne.get(X),f.init(k),E.push(f),X.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),S!==X&&S.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const j=new Set;return S.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ae=B.material;if(ae)if(Array.isArray(ae))for(let ye=0;ye<ae.length;ye++){const Te=ae[ye];wt(Te,X,B),j.add(Te)}else wt(ae,X,B),j.add(ae)}),f=E.pop(),j},this.compileAsync=function(S,k,X=null){const j=this.compile(S,k,X);return new Promise(B=>{function ae(){if(j.forEach(function(ye){ne.get(ye).currentProgram.isReady()&&j.delete(ye)}),j.size===0){B(S);return}setTimeout(ae,10)}te.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Qe=null;function Oi(S){Qe&&Qe(S)}function Ti(){gr.stop()}function kc(){gr.start()}const gr=new gd;gr.setAnimationLoop(Oi),typeof self<"u"&&gr.setContext(self),this.setAnimationLoop=function(S){Qe=S,he.setAnimationLoop(S),S===null?gr.stop():gr.start()},he.addEventListener("sessionstart",Ti),he.addEventListener("sessionend",kc),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(k),k=he.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,k,C),f=Ne.get(S,E.length),f.init(k),E.push(f),Z.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Me.setFromProjectionMatrix(Z,Ci,k.reversedDepth),G=this.localClippingEnabled,Ee=de.init(this.clippingPlanes,G),m=$.get(S,T.length),m.init(),T.push(m),he.enabled===!0&&he.isPresenting===!0){const ae=v.xr.getDepthSensingMesh();ae!==null&&Ws(ae,k,-1/0,v.sortObjects)}Ws(S,k,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(q,ee),we=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,we&&xe.addToRenderList(m,S),this.info.render.frame++,Ee===!0&&de.beginShadows();const X=f.state.shadowsArray;Le.render(X,S,k),Ee===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,B=m.transmissive;if(f.setupLights(),k.isArrayCamera){const ae=k.cameras;if(B.length>0)for(let ye=0,Te=ae.length;ye<Te;ye++){const be=ae[ye];Vc(j,B,S,be)}we&&xe.render(S);for(let ye=0,Te=ae.length;ye<Te;ye++){const be=ae[ye];Hc(m,S,be,be.viewport)}}else B.length>0&&Vc(j,B,S,k),we&&xe.render(S),Hc(m,S,k);C!==null&&w===0&&(Se.updateMultisampleRenderTarget(C),Se.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(v,S,k),_e.resetDefaultState(),x=-1,y=null,E.pop(),E.length>0?(f=E[E.length-1],Ee===!0&&de.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Ws(S,k,X,j){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Me.intersectsSprite(S)){j&&De.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Z);const ae=H.update(S),ye=S.material;ye.visible&&m.push(S,ae,ye,X,De.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Me.intersectsObject(S))){const ae=H.update(S),ye=S.material;if(j&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),De.copy(S.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),De.copy(ae.boundingSphere.center)),De.applyMatrix4(S.matrixWorld).applyMatrix4(Z)),Array.isArray(ye)){const Te=ae.groups;for(let be=0,Fe=Te.length;be<Fe;be++){const Be=Te[be],ze=ye[Be.materialIndex];ze&&ze.visible&&m.push(S,ae,ze,X,De.z,Be)}}else ye.visible&&m.push(S,ae,ye,X,De.z,null)}}const B=S.children;for(let ae=0,ye=B.length;ae<ye;ae++)Ws(B[ae],k,X,j)}function Hc(S,k,X,j){const B=S.opaque,ae=S.transmissive,ye=S.transparent;f.setupLightsView(X),Ee===!0&&de.setGlobalState(v.clippingPlanes,X),j&&K.viewport(b.copy(j)),B.length>0&&ba(B,k,X),ae.length>0&&ba(ae,k,X),ye.length>0&&ba(ye,k,X),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Vc(S,k,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[j.id]===void 0&&(f.state.transmissionRenderTarget[j.id]=new Nr(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?xa:Di,minFilter:Cr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const B=f.state.transmissionRenderTarget[j.id],ae=j.viewport||b;B.setSize(ae.z*v.transmissionResolutionScale,ae.w*v.transmissionResolutionScale);const ye=v.getRenderTarget(),Te=v.getActiveCubeFace(),be=v.getActiveMipmapLevel();v.setRenderTarget(B),v.getClearColor(I),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear(),we&&xe.render(X);const Fe=v.toneMapping;v.toneMapping=cr;const Be=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),f.setupLightsView(j),Ee===!0&&de.setGlobalState(v.clippingPlanes,j),ba(S,X,j),Se.updateMultisampleRenderTarget(B),Se.updateRenderTargetMipmap(B),te.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ke=0,at=k.length;Ke<at;Ke++){const ct=k[Ke],dt=ct.object,st=ct.geometry,Ie=ct.material,Dt=ct.group;if(Ie.side===ui&&dt.layers.test(j.layers)){const Fi=Ie.side;Ie.side=qt,Ie.needsUpdate=!0,Gc(dt,X,j,st,Ie,Dt),Ie.side=Fi,Ie.needsUpdate=!0,ze=!0}}ze===!0&&(Se.updateMultisampleRenderTarget(B),Se.updateRenderTargetMipmap(B))}v.setRenderTarget(ye,Te,be),v.setClearColor(I,D),Be!==void 0&&(j.viewport=Be),v.toneMapping=Fe}function ba(S,k,X){const j=k.isScene===!0?k.overrideMaterial:null;for(let B=0,ae=S.length;B<ae;B++){const ye=S[B],Te=ye.object,be=ye.geometry,Fe=ye.group;let Be=ye.material;Be.allowOverride===!0&&j!==null&&(Be=j),Te.layers.test(X.layers)&&Gc(Te,k,X,be,Be,Fe)}}function Gc(S,k,X,j,B,ae){S.onBeforeRender(v,k,X,j,B,ae),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(v,k,X,j,S,ae),B.transparent===!0&&B.side===ui&&B.forceSinglePass===!1?(B.side=qt,B.needsUpdate=!0,v.renderBufferDirect(X,k,j,B,S,ae),B.side=ur,B.needsUpdate=!0,v.renderBufferDirect(X,k,j,B,S,ae),B.side=ui):v.renderBufferDirect(X,k,j,B,S,ae),S.onAfterRender(v,k,X,j,B,ae)}function wa(S,k,X){k.isScene!==!0&&(k=Ce);const j=ne.get(S),B=f.state.lights,ae=f.state.shadowsArray,ye=B.state.version,Te=Y.getParameters(S,B.state,ae,k,X),be=Y.getProgramCacheKey(Te);let Fe=j.programs;j.environment=S.isMeshStandardMaterial?k.environment:null,j.fog=k.fog,j.envMap=(S.isMeshStandardMaterial?He:Ge).get(S.envMap||j.environment),j.envMapRotation=j.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,Fe===void 0&&(S.addEventListener("dispose",Q),Fe=new Map,j.programs=Fe);let Be=Fe.get(be);if(Be!==void 0){if(j.currentProgram===Be&&j.lightsStateVersion===ye)return Xc(S,Te),Be}else Te.uniforms=Y.getUniforms(S),S.onBeforeCompile(Te,v),Be=Y.acquireProgram(Te,be),Fe.set(be,Be),j.uniforms=Te.uniforms;const ze=j.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ze.clippingPlanes=de.uniform),Xc(S,Te),j.needsLights=_p(S),j.lightsStateVersion=ye,j.needsLights&&(ze.ambientLightColor.value=B.state.ambient,ze.lightProbe.value=B.state.probe,ze.directionalLights.value=B.state.directional,ze.directionalLightShadows.value=B.state.directionalShadow,ze.spotLights.value=B.state.spot,ze.spotLightShadows.value=B.state.spotShadow,ze.rectAreaLights.value=B.state.rectArea,ze.ltc_1.value=B.state.rectAreaLTC1,ze.ltc_2.value=B.state.rectAreaLTC2,ze.pointLights.value=B.state.point,ze.pointLightShadows.value=B.state.pointShadow,ze.hemisphereLights.value=B.state.hemi,ze.directionalShadowMap.value=B.state.directionalShadowMap,ze.directionalShadowMatrix.value=B.state.directionalShadowMatrix,ze.spotShadowMap.value=B.state.spotShadowMap,ze.spotLightMatrix.value=B.state.spotLightMatrix,ze.spotLightMap.value=B.state.spotLightMap,ze.pointShadowMap.value=B.state.pointShadowMap,ze.pointShadowMatrix.value=B.state.pointShadowMatrix),j.currentProgram=Be,j.uniformsList=null,Be}function Wc(S){if(S.uniformsList===null){const k=S.currentProgram.getUniforms();S.uniformsList=_s.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function Xc(S,k){const X=ne.get(S);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function mp(S,k,X,j,B){k.isScene!==!0&&(k=Ce),Se.resetTextureUnits();const ae=k.fog,ye=j.isMeshStandardMaterial?k.environment:null,Te=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:_n,be=(j.isMeshStandardMaterial?He:Ge).get(j.envMap||ye),Fe=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Be=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),ze=!!X.morphAttributes.position,Ke=!!X.morphAttributes.normal,at=!!X.morphAttributes.color;let ct=cr;j.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ct=v.toneMapping);const dt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,st=dt!==void 0?dt.length:0,Ie=ne.get(j),Dt=f.state.lights;if(Ee===!0&&(G===!0||S!==y)){const Ut=S===y&&j.id===x;de.setState(j,S,Ut)}let Fi=!1;j.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Dt.state.version||Ie.outputColorSpace!==Te||B.isBatchedMesh&&Ie.batching===!1||!B.isBatchedMesh&&Ie.batching===!0||B.isBatchedMesh&&Ie.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ie.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ie.instancing===!1||!B.isInstancedMesh&&Ie.instancing===!0||B.isSkinnedMesh&&Ie.skinning===!1||!B.isSkinnedMesh&&Ie.skinning===!0||B.isInstancedMesh&&Ie.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ie.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ie.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ie.instancingMorph===!1&&B.morphTexture!==null||Ie.envMap!==be||j.fog===!0&&Ie.fog!==ae||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==de.numPlanes||Ie.numIntersection!==de.numIntersection)||Ie.vertexAlphas!==Fe||Ie.vertexTangents!==Be||Ie.morphTargets!==ze||Ie.morphNormals!==Ke||Ie.morphColors!==at||Ie.toneMapping!==ct||Ie.morphTargetsCount!==st)&&(Fi=!0):(Fi=!0,Ie.__version=j.version);let mi=Ie.currentProgram;Fi===!0&&(mi=wa(j,k,B));let Br=!1,$t=!1,Pn=!1;const pt=mi.getUniforms(),ni=Ie.uniforms;if(K.useProgram(mi.program)&&(Br=!0,$t=!0,Pn=!0),j.id!==x&&(x=j.id,$t=!0),Br||y!==S){K.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),pt.setValue(A,"projectionMatrix",S.projectionMatrix),pt.setValue(A,"viewMatrix",S.matrixWorldInverse);const Ut=pt.map.cameraPosition;Ut!==void 0&&Ut.setValue(A,fe.setFromMatrixPosition(S.matrixWorld)),pe.logarithmicDepthBuffer&&pt.setValue(A,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&pt.setValue(A,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,$t=!0,Pn=!0)}if(B.isSkinnedMesh){pt.setOptional(A,B,"bindMatrix"),pt.setOptional(A,B,"bindMatrixInverse");const Ut=B.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),pt.setValue(A,"boneTexture",Ut.boneTexture,Se))}B.isBatchedMesh&&(pt.setOptional(A,B,"batchingTexture"),pt.setValue(A,"batchingTexture",B._matricesTexture,Se),pt.setOptional(A,B,"batchingIdTexture"),pt.setValue(A,"batchingIdTexture",B._indirectTexture,Se),pt.setOptional(A,B,"batchingColorTexture"),B._colorsTexture!==null&&pt.setValue(A,"batchingColorTexture",B._colorsTexture,Se));const ai=X.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&ce.update(B,X,mi),($t||Ie.receiveShadow!==B.receiveShadow)&&(Ie.receiveShadow=B.receiveShadow,pt.setValue(A,"receiveShadow",B.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(ni.envMap.value=be,ni.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&k.environment!==null&&(ni.envMapIntensity.value=k.environmentIntensity),$t&&(pt.setValue(A,"toneMappingExposure",v.toneMappingExposure),Ie.needsLights&&gp(ni,Pn),ae&&j.fog===!0&&J.refreshFogUniforms(ni,ae),J.refreshMaterialUniforms(ni,j,V,W,f.state.transmissionRenderTarget[S.id]),_s.upload(A,Wc(Ie),ni,Se)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(_s.upload(A,Wc(Ie),ni,Se),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&pt.setValue(A,"center",B.center),pt.setValue(A,"modelViewMatrix",B.modelViewMatrix),pt.setValue(A,"normalMatrix",B.normalMatrix),pt.setValue(A,"modelMatrix",B.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Ut=j.uniformsGroups;for(let gi=0,Xs=Ut.length;gi<Xs;gi++){const _r=Ut[gi];Ye.update(_r,mi),Ye.bind(_r,mi)}}return mi}function gp(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function _p(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,k,X){const j=ne.get(S);j.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),ne.get(S.texture).__webglTexture=k,ne.get(S.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:X,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,k){const X=ne.get(S);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0};const vp=A.createFramebuffer();this.setRenderTarget=function(S,k=0,X=0){C=S,R=k,w=X;let j=!0,B=null,ae=!1,ye=!1;if(S){const Te=ne.get(S);if(Te.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(A.FRAMEBUFFER,null),j=!1;else if(Te.__webglFramebuffer===void 0)Se.setupRenderTarget(S);else if(Te.__hasExternalTextures)Se.rebindTextures(S,ne.get(S.texture).__webglTexture,ne.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Be=S.depthTexture;if(Te.__boundDepthTexture!==Be){if(Be!==null&&ne.has(Be)&&(S.width!==Be.image.width||S.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Se.setupDepthRenderbuffer(S)}}const be=S.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ye=!0);const Fe=ne.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Fe[k])?B=Fe[k][X]:B=Fe[k],ae=!0):S.samples>0&&Se.useMultisampledRTT(S)===!1?B=ne.get(S).__webglMultisampledFramebuffer:Array.isArray(Fe)?B=Fe[X]:B=Fe,b.copy(S.viewport),U.copy(S.scissor),F=S.scissorTest}else b.copy(se).multiplyScalar(V).floor(),U.copy(oe).multiplyScalar(V).floor(),F=ue;if(X!==0&&(B=vp),K.bindFramebuffer(A.FRAMEBUFFER,B)&&j&&K.drawBuffers(S,B),K.viewport(b),K.scissor(U),K.setScissorTest(F),ae){const Te=ne.get(S.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+k,Te.__webglTexture,X)}else if(ye){const Te=k;for(let be=0;be<S.textures.length;be++){const Fe=ne.get(S.textures[be]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+be,Fe.__webglTexture,X,Te)}}else if(S!==null&&X!==0){const Te=ne.get(S.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Te.__webglTexture,X)}x=-1},this.readRenderTargetPixels=function(S,k,X,j,B,ae,ye,Te=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=ne.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(be=be[ye]),be){K.bindFramebuffer(A.FRAMEBUFFER,be);try{const Fe=S.textures[Te],Be=Fe.format,ze=Fe.type;if(!pe.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-j&&X>=0&&X<=S.height-B&&(S.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Te),A.readPixels(k,X,j,B,Ue.convert(Be),Ue.convert(ze),ae))}finally{const Fe=C!==null?ne.get(C).__webglFramebuffer:null;K.bindFramebuffer(A.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(S,k,X,j,B,ae,ye,Te=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=ne.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(be=be[ye]),be)if(k>=0&&k<=S.width-j&&X>=0&&X<=S.height-B){K.bindFramebuffer(A.FRAMEBUFFER,be);const Fe=S.textures[Te],Be=Fe.format,ze=Fe.type;if(!pe.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ke),A.bufferData(A.PIXEL_PACK_BUFFER,ae.byteLength,A.STREAM_READ),S.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Te),A.readPixels(k,X,j,B,Ue.convert(Be),Ue.convert(ze),0);const at=C!==null?ne.get(C).__webglFramebuffer:null;K.bindFramebuffer(A.FRAMEBUFFER,at);const ct=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Ff(A,ct,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Ke),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ae),A.deleteBuffer(Ke),A.deleteSync(ct),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,k=null,X=0){const j=Math.pow(2,-X),B=Math.floor(S.image.width*j),ae=Math.floor(S.image.height*j),ye=k!==null?k.x:0,Te=k!==null?k.y:0;Se.setTexture2D(S,0),A.copyTexSubImage2D(A.TEXTURE_2D,X,0,0,ye,Te,B,ae),K.unbindTexture()};const xp=A.createFramebuffer(),yp=A.createFramebuffer();this.copyTextureToTexture=function(S,k,X=null,j=null,B=0,ae=null){ae===null&&(B!==0?(oa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=B,B=0):ae=0);let ye,Te,be,Fe,Be,ze,Ke,at,ct;const dt=S.isCompressedTexture?S.mipmaps[ae]:S.image;if(X!==null)ye=X.max.x-X.min.x,Te=X.max.y-X.min.y,be=X.isBox3?X.max.z-X.min.z:1,Fe=X.min.x,Be=X.min.y,ze=X.isBox3?X.min.z:0;else{const ai=Math.pow(2,-B);ye=Math.floor(dt.width*ai),Te=Math.floor(dt.height*ai),S.isDataArrayTexture?be=dt.depth:S.isData3DTexture?be=Math.floor(dt.depth*ai):be=1,Fe=0,Be=0,ze=0}j!==null?(Ke=j.x,at=j.y,ct=j.z):(Ke=0,at=0,ct=0);const st=Ue.convert(k.format),Ie=Ue.convert(k.type);let Dt;k.isData3DTexture?(Se.setTexture3D(k,0),Dt=A.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Se.setTexture2DArray(k,0),Dt=A.TEXTURE_2D_ARRAY):(Se.setTexture2D(k,0),Dt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,k.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,k.unpackAlignment);const Fi=A.getParameter(A.UNPACK_ROW_LENGTH),mi=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Br=A.getParameter(A.UNPACK_SKIP_PIXELS),$t=A.getParameter(A.UNPACK_SKIP_ROWS),Pn=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,dt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,dt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Fe),A.pixelStorei(A.UNPACK_SKIP_ROWS,Be),A.pixelStorei(A.UNPACK_SKIP_IMAGES,ze);const pt=S.isDataArrayTexture||S.isData3DTexture,ni=k.isDataArrayTexture||k.isData3DTexture;if(S.isDepthTexture){const ai=ne.get(S),Ut=ne.get(k),gi=ne.get(ai.__renderTarget),Xs=ne.get(Ut.__renderTarget);K.bindFramebuffer(A.READ_FRAMEBUFFER,gi.__webglFramebuffer),K.bindFramebuffer(A.DRAW_FRAMEBUFFER,Xs.__webglFramebuffer);for(let _r=0;_r<be;_r++)pt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ne.get(S).__webglTexture,B,ze+_r),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ne.get(k).__webglTexture,ae,ct+_r)),A.blitFramebuffer(Fe,Be,ye,Te,Ke,at,ye,Te,A.DEPTH_BUFFER_BIT,A.NEAREST);K.bindFramebuffer(A.READ_FRAMEBUFFER,null),K.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(B!==0||S.isRenderTargetTexture||ne.has(S)){const ai=ne.get(S),Ut=ne.get(k);K.bindFramebuffer(A.READ_FRAMEBUFFER,xp),K.bindFramebuffer(A.DRAW_FRAMEBUFFER,yp);for(let gi=0;gi<be;gi++)pt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ai.__webglTexture,B,ze+gi):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ai.__webglTexture,B),ni?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ut.__webglTexture,ae,ct+gi):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ut.__webglTexture,ae),B!==0?A.blitFramebuffer(Fe,Be,ye,Te,Ke,at,ye,Te,A.COLOR_BUFFER_BIT,A.NEAREST):ni?A.copyTexSubImage3D(Dt,ae,Ke,at,ct+gi,Fe,Be,ye,Te):A.copyTexSubImage2D(Dt,ae,Ke,at,Fe,Be,ye,Te);K.bindFramebuffer(A.READ_FRAMEBUFFER,null),K.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else ni?S.isDataTexture||S.isData3DTexture?A.texSubImage3D(Dt,ae,Ke,at,ct,ye,Te,be,st,Ie,dt.data):k.isCompressedArrayTexture?A.compressedTexSubImage3D(Dt,ae,Ke,at,ct,ye,Te,be,st,dt.data):A.texSubImage3D(Dt,ae,Ke,at,ct,ye,Te,be,st,Ie,dt):S.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,ae,Ke,at,ye,Te,st,Ie,dt.data):S.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,ae,Ke,at,dt.width,dt.height,st,dt.data):A.texSubImage2D(A.TEXTURE_2D,ae,Ke,at,ye,Te,st,Ie,dt);A.pixelStorei(A.UNPACK_ROW_LENGTH,Fi),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,mi),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Br),A.pixelStorei(A.UNPACK_SKIP_ROWS,$t),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Pn),ae===0&&k.generateMipmaps&&A.generateMipmap(Dt),K.unbindTexture()},this.initRenderTarget=function(S){ne.get(S).__webglFramebuffer===void 0&&Se.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Se.setTextureCube(S,0):S.isData3DTexture?Se.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Se.setTexture2DArray(S,0):Se.setTexture2D(S,0),K.unbindTexture()},this.resetState=function(){R=0,w=0,C=null,K.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const du={type:"change"},Sc={type:"start"},Md={type:"end"},os=new Ea,pu=new nr,Xx=Math.cos(70*Nf.DEG2RAD),At=new N,Xt=2*Math.PI,it={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Po=1e-6;class jx extends og{constructor(e,t=null){super(e,t),this.state=it.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hn.ROTATE,MIDDLE:hn.DOLLY,RIGHT:hn.PAN},this.touches={ONE:sn.ROTATE,TWO:sn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Ir,this._lastTargetPosition=new N,this._quat=new Ir().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new kh,this._sphericalDelta=new kh,this._scale=1,this._panOffset=new N,this._rotateStart=new re,this._rotateEnd=new re,this._rotateDelta=new re,this._panStart=new re,this._panEnd=new re,this._panDelta=new re,this._dollyStart=new re,this._dollyEnd=new re,this._dollyDelta=new re,this._dollyDirection=new N,this._mouse=new re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Yx.bind(this),this._onPointerDown=qx.bind(this),this._onPointerUp=$x.bind(this),this._onContextMenu=iy.bind(this),this._onMouseWheel=Jx.bind(this),this._onKeyDown=Qx.bind(this),this._onTouchStart=ey.bind(this),this._onTouchMove=ty.bind(this),this._onMouseDown=Zx.bind(this),this._onMouseMove=Kx.bind(this),this._interceptControlDown=ry.bind(this),this._interceptControlUp=ny.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(du),this.update(),this.state=it.NONE}update(e=null){const t=this.object.position;At.copy(t).sub(this.target),At.applyQuaternion(this._quat),this._spherical.setFromVector3(At),this.autoRotate&&this.state===it.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=Xt:i>Math.PI&&(i-=Xt),n<-Math.PI?n+=Xt:n>Math.PI&&(n-=Xt),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=s!=this._spherical.radius}if(At.setFromSpherical(this._spherical),At.applyQuaternion(this._quatInverse),t.copy(this.target).add(At),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=At.length();s=this._clampDistance(o*this._scale);const c=o-s;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),a=!!c}else if(this.object.isOrthographicCamera){const o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=c!==this.object.zoom;const l=new N(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),s=At.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(os.origin.copy(this.object.position),os.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(os.direction))<Xx?this.object.lookAt(this.target):(pu.setFromNormalAndCoplanarPoint(this.object.up,this.target),os.intersectPlane(pu,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Po||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Po||this._lastTargetPosition.distanceToSquared(this.target)>Po?(this.dispatchEvent(du),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Xt/60*this.autoRotateSpeed*e:Xt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){At.setFromMatrixColumn(t,0),At.multiplyScalar(-e),this._panOffset.add(At)}_panUp(e,t){this.screenSpacePanning===!0?At.setFromMatrixColumn(t,1):(At.setFromMatrixColumn(t,0),At.crossVectors(this.object.up,At)),At.multiplyScalar(e),this._panOffset.add(At)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;At.copy(n).sub(this.target);let a=At.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),n=e-i.left,a=t-i.top,s=i.width,o=i.height;this._mouse.x=n/s*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(i,n)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,a=Math.sqrt(i*i+n*n);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),n=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(n,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,a=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function qx(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function Yx(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function $x(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Md),this.state=it.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Zx(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case hn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=it.DOLLY;break;case hn.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=it.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=it.ROTATE}break;case hn.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=it.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=it.PAN}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Sc)}function Kx(r){switch(this.state){case it.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case it.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case it.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function Jx(r){this.enabled===!1||this.enableZoom===!1||this.state!==it.NONE||(r.preventDefault(),this.dispatchEvent(Sc),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Md))}function Qx(r){this.enabled!==!1&&this._handleKeyDown(r)}function ey(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case sn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=it.TOUCH_ROTATE;break;case sn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=it.TOUCH_PAN;break;default:this.state=it.NONE}break;case 2:switch(this.touches.TWO){case sn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=it.TOUCH_DOLLY_PAN;break;case sn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=it.TOUCH_DOLLY_ROTATE;break;default:this.state=it.NONE}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Sc)}function ty(r){switch(this._trackPointer(r),this.state){case it.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case it.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case it.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case it.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=it.NONE}}function iy(r){this.enabled!==!1&&r.preventDefault()}function ry(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ny(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Wi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Ed(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */var Mn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},En={duration:.5,overwrite:!1,delay:0},Tc,It,ut,di=1e8,nt=1/di,Bl=Math.PI*2,ay=Bl/4,sy=0,Sd=Math.sqrt,oy=Math.cos,ly=Math.sin,Bt=function(r){return typeof r=="string"},_t=function(r){return typeof r=="function"},$i=function(r){return typeof r=="number"},Td=function(r){return typeof r>"u"},Ii=function(r){return typeof r=="object"},Yt=function(r){return r!==!1},bc=function(){return typeof window<"u"},ls=function(r){return _t(r)||Bt(r)},bd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},zt=Array.isArray,kl=/(?:-?\.?\d|\.)+/gi,cy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,wd=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Do=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,hy=/[+-]=-?[.\d]+/,Ad=/[^,'"\[\]\s]+/gi,uy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ft,bi,Hl,wc,ii={},Cs={},Rd,Cd=function(r){return(Cs=Sn(r,ii))&&Qt},Ld=function(r,e){return console.warn("Invalid property",r,"set to",e,"Missing plugin? gsap.registerPlugin()")},ua=function(r,e){return!e&&console.warn(r)},Pd=function(r,e){return r&&(ii[r]=e)&&Cs&&(Cs[r]=e)||ii},da=function(){return 0},dy={suppressEvents:!0,isStart:!0,kill:!1},vs={suppressEvents:!0,kill:!1},py={suppressEvents:!0},Ac={},hr=[],Vl={},Dd,ci={},Uo={},fu=30,xs=[],Rc="",Cc=function(r){var e=r[0],t,i;if(Ii(e)||_t(e)||(r=[r]),!(t=(e._gsap||{}).harness)){for(i=xs.length;i--&&!xs[i].targetTest(e););t=xs[i]}for(i=r.length;i--;)r[i]&&(r[i]._gsap||(r[i]._gsap=new ky(r[i],t)))||r.splice(i,1);return r},Kn=function(r){return r._gsap||Cc(pi(r))[0]._gsap},fy=function(r,e,t){return(t=r[e])&&_t(t)?r[e]():Td(t)&&r.getAttribute&&r.getAttribute(e)||t},Zi=function(r,e){return(r=r.split(",")).forEach(e)||r},my=function(r){return Math.round(r*1e5)/1e5||0},Tt=function(r){return Math.round(r*1e7)/1e7||0},Ud=function(r,e){var t=e.charAt(0),i=parseFloat(e.substr(2));return r=parseFloat(r),t==="+"?r+i:t==="-"?r-i:t==="*"?r*i:r/i},gy=function(r,e){for(var t=e.length,i=0;r.indexOf(e[i])<0&&++i<t;);return i<t},Ls=function(){var r=hr.length,e=hr.slice(0),t,i;for(Vl={},hr.length=0,t=0;t<r;t++)i=e[t],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Lc=function(r){return!!(r._initted||r._startAt||r.add)},Id=function(r,e,t,i){hr.length&&!It&&Ls(),r.render(e,t,i||!!(It&&e<0&&Lc(r))),hr.length&&!It&&Ls()},Nd=function(r){var e=parseFloat(r);return(e||e===0)&&(r+"").match(Ad).length<2?e:Bt(r)?r.trim():r},Od=function(r){return r},ri=function(r,e){for(var t in e)t in r||(r[t]=e[t]);return r},_y=function(r){return function(e,t){for(var i in t)i in e||i==="duration"&&r||i==="ease"||(e[i]=t[i])}},Sn=function(r,e){for(var t in e)r[t]=e[t];return r},mu=function r(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Ii(t[i])?r(e[i]||(e[i]={}),t[i]):t[i]);return e},Ps=function(r,e){var t={},i;for(i in r)i in e||(t[i]=r[i]);return t},Jn=function(r){var e=r.parent||ft,t=r.keyframes?_y(zt(r.keyframes)):ri;if(Yt(r.inherit))for(;e;)t(r,e.vars.defaults),e=e.parent||e._dp;return r},vy=function(r,e){for(var t=r.length,i=t===e.length;i&&t--&&r[t]===e[t];);return t<0},Fd=function(r,e,t,i,n){t===void 0&&(t="_first"),i===void 0&&(i="_last");var a=r[i],s;if(n)for(s=e[n];a&&a[n]>s;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=r[t],r[t]=e),e._next?e._next._prev=e:r[i]=e,e._prev=a,e.parent=e._dp=r,e},ks=function(r,e,t,i){t===void 0&&(t="_first"),i===void 0&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:r[t]===e&&(r[t]=a),a?a._prev=n:r[i]===e&&(r[i]=n),e._next=e._prev=e.parent=null},dr=function(r,e){r.parent&&(!e||r.parent.autoRemoveChildren)&&r.parent.remove&&r.parent.remove(r),r._act=0},Lr=function(r,e){if(r&&(!e||e._end>r._dur||e._start<0))for(var t=r;t;)t._dirty=1,t=t.parent;return r},xy=function(r){for(var e=r.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return r},Gl=function(r,e,t,i){return r._startAt&&(It?r._startAt.revert(vs):r.vars.immediateRender&&!r.vars.autoRevert||r._startAt.render(e,!0,i))},yy=function r(e){return!e||e._ts&&r(e.parent)},gu=function(r){return r._repeat?Tn(r._tTime,r=r.duration()+r._rDelay)*r:0},Tn=function(r,e){var t=Math.floor(r=Tt(r/e));return r&&t===r?t-1:t},Ds=function(r,e){return(r-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Hs=function(r){return r._end=Tt(r._start+(r._tDur/Math.abs(r._ts||r._rts||nt)||0))},Vs=function(r,e){var t=r._dp;return t&&t.smoothChildTiming&&r._ts&&(r._start=Tt(t._time-(r._ts>0?e/r._ts:((r._dirty?r.totalDuration():r._tDur)-e)/-r._ts)),Hs(r),t._dirty||Lr(t,r)),r},zd=function(r,e){var t;if((e._time||!e._dur&&e._initted||e._start<r._time&&(e._dur||!e.add))&&(t=Ds(r.rawTime(),e),(!e._dur||Ta(0,e.totalDuration(),t)-e._tTime>nt)&&e.render(t,!0)),Lr(r,e)._dp&&r._initted&&r._time>=r._dur&&r._ts){if(r._dur<r.duration())for(t=r;t._dp;)t.rawTime()>=0&&t.totalTime(t._tTime),t=t._dp;r._zTime=-nt}},Ai=function(r,e,t,i){return e.parent&&dr(e),e._start=Tt(($i(t)?t:t||r!==ft?oi(r,t,e):r._time)+e._delay),e._end=Tt(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Fd(r,e,"_first","_last",r._sort?"_start":0),Wl(e)||(r._recent=e),i||zd(r,e),r._ts<0&&Vs(r,r._tTime),r},Bd=function(r,e){return(ii.ScrollTrigger||Ld("scrollTrigger",e))&&ii.ScrollTrigger.create(e,r)},kd=function(r,e,t,i,n){if(Uc(r,e,n),!r._initted)return 1;if(!t&&r._pt&&!It&&(r._dur&&r.vars.lazy!==!1||!r._dur&&r.vars.lazy)&&Dd!==Mi.frame)return hr.push(r),r._lazy=[n,i],1},My=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Wl=function(r){var e=r.data;return e==="isFromStart"||e==="isStart"},Ey=function(r,e,t,i){var n=r.ratio,a=e<0||!e&&(!r._start&&My(r)&&!(!r._initted&&Wl(r))||(r._ts<0||r._dp._ts<0)&&!Wl(r))?0:1,s=r._rDelay,o=0,c,l,h;if(s&&r._repeat&&(o=Ta(0,r._tDur,e),l=Tn(o,s),r._yoyo&&l&1&&(a=1-a),l!==Tn(r._tTime,s)&&(n=1-a,r.vars.repeatRefresh&&r._initted&&r.invalidate())),a!==n||It||i||r._zTime===nt||!e&&r._zTime){if(!r._initted&&kd(r,e,i,t,o))return;for(h=r._zTime,r._zTime=e||(t?nt:0),t||(t=e&&!h),r.ratio=a,r._from&&(a=1-a),r._time=0,r._tTime=o,c=r._pt;c;)c.r(a,c.d),c=c._next;e<0&&Gl(r,e,t,!0),r._onUpdate&&!t&&ti(r,"onUpdate"),o&&r._repeat&&!t&&r.parent&&ti(r,"onRepeat"),(e>=r._tDur||e<0)&&r.ratio===a&&(a&&dr(r,1),!t&&!It&&(ti(r,a?"onComplete":"onReverseComplete",!0),r._prom&&r._prom()))}else r._zTime||(r._zTime=e)},Sy=function(r,e,t){var i;if(t>e)for(i=r._first;i&&i._start<=t;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=r._last;i&&i._start>=t;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},bn=function(r,e,t,i){var n=r._repeat,a=Tt(e)||0,s=r._tTime/r._tDur;return s&&!i&&(r._time*=a/r._dur),r._dur=a,r._tDur=n?n<0?1e10:Tt(a*(n+1)+r._rDelay*n):a,s>0&&!i&&Vs(r,r._tTime=r._tDur*s),r.parent&&Hs(r),t||Lr(r.parent,r),r},_u=function(r){return r instanceof Gt?Lr(r):bn(r,r._dur)},Ty={_start:0,endTime:da,totalDuration:da},oi=function r(e,t,i){var n=e.labels,a=e._recent||Ty,s=e.duration()>=di?a.endTime(!1):e._dur,o,c,l;return Bt(t)&&(isNaN(t)||t in n)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?a:i).totalDuration()/100:1)):o<0?(t in n||(n[t]=s),n[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&i&&(c=c/100*(zt(i)?i[0]:i).totalDuration()),o>1?r(e,t.substr(0,o-1),i)+c:s+c)):t==null?s:+t},Qn=function(r,e,t){var i=$i(e[1]),n=(i?2:1)+(r<2?0:1),a=e[n],s,o;if(i&&(a.duration=e[1]),a.parent=t,r){for(s=a,o=t;o&&!("immediateRender"in s);)s=o.vars.defaults||{},o=Yt(o.vars.inherit)&&o.parent;a.immediateRender=Yt(s.immediateRender),r<2?a.runBackwards=1:a.startAt=e[n-1]}return new St(e[0],a,e[n+1])},mr=function(r,e){return r||r===0?e(r):e},Ta=function(r,e,t){return t<r?r:t>e?e:t},pr=function(r,e){return!Bt(r)||!(e=uy.exec(r))?"":e[1]},by=function(r,e,t){return mr(t,function(i){return Ta(r,e,i)})},Xl=[].slice,Hd=function(r,e){return r&&Ii(r)&&"length"in r&&(!e&&!r.length||r.length-1 in r&&Ii(r[0]))&&!r.nodeType&&r!==bi},wy=function(r,e,t){return t===void 0&&(t=[]),r.forEach(function(i){var n;return Bt(i)&&!e||Hd(i,1)?(n=t).push.apply(n,pi(i)):t.push(i)})||t},pi=function(r,e,t){return ut&&!e&&ut.selector?ut.selector(r):Bt(r)&&!t&&(Hl||!wn())?Xl.call((e||wc).querySelectorAll(r),0):zt(r)?wy(r,t):Hd(r)?Xl.call(r,0):r?[r]:[]},jl=function(r){return r=pi(r)[0]||ua("Invalid scope")||{},function(e){var t=r.current||r.nativeElement||r;return pi(e,t.querySelectorAll?t:t===r?ua("Invalid scope")||wc.createElement("div"):r)}},Vd=function(r){return r.sort(function(){return .5-Math.random()})},Gd=function(r){if(_t(r))return r;var e=Ii(r)?r:{each:r},t=Pr(e.ease),i=e.from||0,n=parseFloat(e.base)||0,a={},s=i>0&&i<1,o=isNaN(i)||s,c=e.axis,l=i,h=i;return Bt(i)?l=h={center:.5,edges:.5,end:1}[i]||0:!s&&o&&(l=i[0],h=i[1]),function(u,d,p){var g=(p||e).length,_=a[g],m,f,T,E,v,L,R,w,C;if(!_){if(C=e.grid==="auto"?0:(e.grid||[1,di])[1],!C){for(R=-di;R<(R=p[C++].getBoundingClientRect().left)&&C<g;);C<g&&C--}for(_=a[g]=[],m=o?Math.min(C,g)*l-.5:i%C,f=C===di?0:o?g*h/C-.5:i/C|0,R=0,w=di,L=0;L<g;L++)T=L%C-m,E=f-(L/C|0),_[L]=v=c?Math.abs(c==="y"?E:T):Sd(T*T+E*E),v>R&&(R=v),v<w&&(w=v);i==="random"&&Vd(_),_.max=R-w,_.min=w,_.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(C>g?g-1:c?c==="y"?g/C:C:Math.max(C,g/C))||0)*(i==="edges"?-1:1),_.b=g<0?n-g:n,_.u=pr(e.amount||e.each)||0,t=t&&g<0?Jd(t):t}return g=(_[u]-_.min)/_.max||0,Tt(_.b+(t?t(g):g)*_.v)+_.u}},ql=function(r){var e=Math.pow(10,((r+"").split(".")[1]||"").length);return function(t){var i=Tt(Math.round(parseFloat(t)/r)*r*e);return(i-i%1)/e+($i(t)?0:pr(t))}},Wd=function(r,e){var t=zt(r),i,n;return!t&&Ii(r)&&(i=t=r.radius||di,r.values?(r=pi(r.values),(n=!$i(r[0]))&&(i*=i)):r=ql(r.increment)),mr(e,t?_t(r)?function(a){return n=r(a),Math.abs(n-a)<=i?n:a}:function(a){for(var s=parseFloat(n?a.x:a),o=parseFloat(n?a.y:0),c=di,l=0,h=r.length,u,d;h--;)n?(u=r[h].x-s,d=r[h].y-o,u=u*u+d*d):u=Math.abs(r[h]-s),u<c&&(c=u,l=h);return l=!i||c<=i?r[l]:a,n||l===a||$i(a)?l:l+pr(a)}:ql(r))},Xd=function(r,e,t,i){return mr(zt(r)?!e:t===!0?!!(t=0):!i,function(){return zt(r)?r[~~(Math.random()*r.length)]:(t=t||1e-5)&&(i=t<1?Math.pow(10,(t+"").length-2):1)&&Math.floor(Math.round((r-t/2+Math.random()*(e-r+t*.99))/t)*t*i)/i})},Ay=function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return function(i){return e.reduce(function(n,a){return a(n)},i)}},Ry=function(r,e){return function(t){return r(parseFloat(t))+(e||pr(t))}},Cy=function(r,e,t){return qd(r,e,0,1,t)},jd=function(r,e,t){return mr(t,function(i){return r[~~e(i)]})},Ly=function r(e,t,i){var n=t-e;return zt(e)?jd(e,r(0,e.length),t):mr(i,function(a){return(n+(a-e)%n)%n+e})},Py=function r(e,t,i){var n=t-e,a=n*2;return zt(e)?jd(e,r(0,e.length-1),t):mr(i,function(s){return s=(a+(s-e)%a)%a||0,e+(s>n?a-s:s)})},Pc=function(r){for(var e=0,t="",i,n,a,s;~(i=r.indexOf("random(",e));)a=r.indexOf(")",i),s=r.charAt(i+7)==="[",n=r.substr(i+7,a-i-7).match(s?Ad:kl),t+=r.substr(e,i-e)+Xd(s?n:+n[0],s?0:+n[1],+n[2]||1e-5),e=a+1;return t+r.substr(e,r.length-e)},qd=function(r,e,t,i,n){var a=e-r,s=i-t;return mr(n,function(o){return t+((o-r)/a*s||0)})},Dy=function r(e,t,i,n){var a=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!a){var s=Bt(e),o={},c,l,h,u,d;if(i===!0&&(n=1)&&(i=null),s)e={p:e},t={p:t};else if(zt(e)&&!zt(t)){for(h=[],u=e.length,d=u-2,l=1;l<u;l++)h.push(r(e[l-1],e[l]));u--,a=function(p){p*=u;var g=Math.min(d,~~p);return h[g](p-g)},i=t}else n||(e=Sn(zt(e)?[]:{},e));if(!h){for(c in t)Dc.call(o,e,c,"get",t[c]);a=function(p){return Nc(p,o)||(s?e.p:e)}}}return mr(i,a)},vu=function(r,e,t){var i=r.labels,n=di,a,s,o;for(a in i)s=i[a]-e,s<0==!!t&&s&&n>(s=Math.abs(s))&&(o=a,n=s);return o},ti=function(r,e,t){var i=r.vars,n=i[e],a=ut,s=r._ctx,o,c,l;if(n)return o=i[e+"Params"],c=i.callbackScope||r,t&&hr.length&&Ls(),s&&(ut=s),l=o?n.apply(c,o):n.call(c),ut=a,l},Gn=function(r){return dr(r),r.scrollTrigger&&r.scrollTrigger.kill(!!It),r.progress()<1&&ti(r,"onInterrupt"),r},cn,Yd=[],$d=function(r){if(r)if(r=!r.name&&r.default||r,bc()||r.headless){var e=r.name,t=_t(r),i=e&&!t&&r.init?function(){this._props=[]}:r,n={init:da,render:Nc,add:Dc,kill:Jy,modifier:Ky,rawVars:0},a={targetTest:0,get:0,getSetter:np,aliases:{},register:0};if(wn(),r!==i){if(ci[e])return;ri(i,ri(Ps(r,n),a)),Sn(i.prototype,Sn(n,Ps(r,a))),ci[i.prop=e]=i,r.targetTest&&(xs.push(i),Ac[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Pd(e,i),r.register&&r.register(Qt,i,Ln)}else Yd.push(r)},rt=255,Wn={aqua:[0,rt,rt],lime:[0,rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,rt],navy:[0,0,128],white:[rt,rt,rt],olive:[128,128,0],yellow:[rt,rt,0],orange:[rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[rt,0,0],pink:[rt,192,203],cyan:[0,rt,rt],transparent:[rt,rt,rt,0]},Io=function(r,e,t){return r+=r<0?1:r>1?-1:0,(r*6<1?e+(t-e)*r*6:r<.5?t:r*3<2?e+(t-e)*(2/3-r)*6:e)*rt+.5|0},Zd=function(r,e,t){var i=r?$i(r)?[r>>16,r>>8&rt,r&rt]:0:Wn.black,n,a,s,o,c,l,h,u,d,p;if(!i){if(r.substr(-1)===","&&(r=r.substr(0,r.length-1)),Wn[r])i=Wn[r];else if(r.charAt(0)==="#"){if(r.length<6&&(n=r.charAt(1),a=r.charAt(2),s=r.charAt(3),r="#"+n+n+a+a+s+s+(r.length===5?r.charAt(4)+r.charAt(4):"")),r.length===9)return i=parseInt(r.substr(1,6),16),[i>>16,i>>8&rt,i&rt,parseInt(r.substr(7),16)/255];r=parseInt(r.substr(1),16),i=[r>>16,r>>8&rt,r&rt]}else if(r.substr(0,3)==="hsl"){if(i=p=r.match(kl),!e)o=+i[0]%360/360,c=+i[1]/100,l=+i[2]/100,a=l<=.5?l*(c+1):l+c-l*c,n=l*2-a,i.length>3&&(i[3]*=1),i[0]=Io(o+1/3,n,a),i[1]=Io(o,n,a),i[2]=Io(o-1/3,n,a);else if(~r.indexOf("="))return i=r.match(cy),t&&i.length<4&&(i[3]=1),i}else i=r.match(kl)||Wn.transparent;i=i.map(Number)}return e&&!p&&(n=i[0]/rt,a=i[1]/rt,s=i[2]/rt,h=Math.max(n,a,s),u=Math.min(n,a,s),l=(h+u)/2,h===u?o=c=0:(d=h-u,c=l>.5?d/(2-h-u):d/(h+u),o=h===n?(a-s)/d+(a<s?6:0):h===a?(s-n)/d+2:(n-a)/d+4,o*=60),i[0]=~~(o+.5),i[1]=~~(c*100+.5),i[2]=~~(l*100+.5)),t&&i.length<4&&(i[3]=1),i},Kd=function(r){var e=[],t=[],i=-1;return r.split(pn).forEach(function(n){var a=n.match(wd)||[];e.push.apply(e,a),t.push(i+=a.length+1)}),e.c=t,e},xu=function(r,e,t){var i="",n=(r+i).match(pn),a=e?"hsla(":"rgba(",s=0,o,c,l,h;if(!n)return r;if(n=n.map(function(u){return(u=Zd(u,e,1))&&a+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),t&&(l=Kd(r),o=t.c,o.join(i)!==l.c.join(i)))for(c=r.replace(pn,"1").split(wd),h=c.length-1;s<h;s++)i+=c[s]+(~o.indexOf(s)?n.shift()||a+"0,0,0,0)":(l.length?l:n.length?n:t).shift());if(!c)for(c=r.split(pn),h=c.length-1;s<h;s++)i+=c[s]+n[s];return i+c[h]},pn=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Wn)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Uy=/hsl[a]?\(/,Iy=function(r){var e=r.join(" "),t;if(pn.lastIndex=0,pn.test(e))return t=Uy.test(e),r[1]=xu(r[1],t),r[0]=xu(r[0],t,Kd(r[1])),!0},pa,Mi=function(){var r=Date.now,e=500,t=33,i=r(),n=i,a=1e3/240,s=a,o=[],c,l,h,u,d,p,g=function _(m){var f=r()-n,T=m===!0,E,v,L,R;if((f>e||f<0)&&(i+=f-t),n+=f,L=n-i,E=L-s,(E>0||T)&&(R=++u.frame,d=L-u.time*1e3,u.time=L=L/1e3,s+=E+(E>=a?4:a-E),v=1),T||(c=l(_)),v)for(p=0;p<o.length;p++)o[p](L,d,R,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(_){return d/(1e3/(_||60))},wake:function(){Rd&&(!Hl&&bc()&&(bi=Hl=window,wc=bi.document||{},ii.gsap=Qt,(bi.gsapVersions||(bi.gsapVersions=[])).push(Qt.version),Cd(Cs||bi.GreenSockGlobals||!bi.gsap&&bi||{}),Yd.forEach($d)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&u.sleep(),l=h||function(_){return setTimeout(_,s-u.time*1e3+1|0)},pa=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),pa=0,l=da},lagSmoothing:function(_,m){e=_||1/0,t=Math.min(m||33,e)},fps:function(_){a=1e3/(_||240),s=u.time*1e3+a},add:function(_,m,f){var T=m?function(E,v,L,R){_(E,v,L,R),u.remove(T)}:_;return u.remove(_),o[f?"unshift":"push"](T),wn(),T},remove:function(_,m){~(m=o.indexOf(_))&&o.splice(m,1)&&p>=m&&p--},_listeners:o},u}(),wn=function(){return!pa&&Mi.wake()},$e={},Ny=/^[\d.\-M][\d.\-,\s]/,Oy=/["']/g,Fy=function(r){for(var e={},t=r.substr(1,r.length-3).split(":"),i=t[0],n=1,a=t.length,s,o,c;n<a;n++)o=t[n],s=n!==a-1?o.lastIndexOf(","):o.length,c=o.substr(0,s),e[i]=isNaN(c)?c.replace(Oy,"").trim():+c,i=o.substr(s+1).trim();return e},zy=function(r){var e=r.indexOf("(")+1,t=r.indexOf(")"),i=r.indexOf("(",e);return r.substring(e,~i&&i<t?r.indexOf(")",t+1):t)},By=function(r){var e=(r+"").split("("),t=$e[e[0]];return t&&e.length>1&&t.config?t.config.apply(null,~r.indexOf("{")?[Fy(e[1])]:zy(r).split(",").map(Nd)):$e._CE&&Ny.test(r)?$e._CE("",r):t},Jd=function(r){return function(e){return 1-r(1-e)}},Qd=function r(e,t){for(var i=e._first,n;i;)i instanceof Gt?r(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?r(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},Pr=function(r,e){return r&&(_t(r)?r:$e[r]||By(r))||e},zr=function(r,e,t,i){t===void 0&&(t=function(s){return 1-e(1-s)}),i===void 0&&(i=function(s){return s<.5?e(s*2)/2:1-e((1-s)*2)/2});var n={easeIn:e,easeOut:t,easeInOut:i},a;return Zi(r,function(s){$e[s]=ii[s]=n,$e[a=s.toLowerCase()]=t;for(var o in n)$e[a+(o==="easeIn"?".in":o==="easeOut"?".out":".inOut")]=$e[s+"."+o]=n[o]}),n},ep=function(r){return function(e){return e<.5?(1-r(1-e*2))/2:.5+r((e-.5)*2)/2}},No=function r(e,t,i){var n=t>=1?t:1,a=(i||(e?.3:.45))/(t<1?t:1),s=a/Bl*(Math.asin(1/n)||0),o=function(l){return l===1?1:n*Math.pow(2,-10*l)*ly((l-s)*a)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:ep(o);return a=Bl/a,c.config=function(l,h){return r(e,l,h)},c},Oo=function r(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},n=e==="out"?i:e==="in"?function(a){return 1-i(1-a)}:ep(i);return n.config=function(a){return r(e,a)},n};Zi("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;zr(r+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});$e.Linear.easeNone=$e.none=$e.Linear.easeIn;zr("Elastic",No("in"),No("out"),No());(function(r,e){var t=1/e,i=2*t,n=2.5*t,a=function(s){return s<t?r*s*s:s<i?r*Math.pow(s-1.5/e,2)+.75:s<n?r*(s-=2.25/e)*s+.9375:r*Math.pow(s-2.625/e,2)+.984375};zr("Bounce",function(s){return 1-a(1-s)},a)})(7.5625,2.75);zr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});zr("Circ",function(r){return-(Sd(1-r*r)-1)});zr("Sine",function(r){return r===1?1:-oy(r*ay)+1});zr("Back",Oo("in"),Oo("out"),Oo());$e.SteppedEase=$e.steps=ii.SteppedEase={config:function(r,e){r===void 0&&(r=1);var t=1/r,i=r+(e?0:1),n=e?1:0,a=1-nt;return function(s){return((i*Ta(0,a,s)|0)+n)*t}}};En.ease=$e["quad.out"];Zi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Rc+=r+","+r+"Params,"});var ky=function(r,e){this.id=sy++,r._gsap=this,this.target=r,this.harness=e,this.get=e?e.get:fy,this.set=e?e.getSetter:np},fa=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,bn(this,+t.duration,1,1),this.data=t.data,ut&&(this._ctx=ut,ut.data.push(this)),pa||Mi.wake()}var e=r.prototype;return e.delay=function(t){return t||t===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},e.duration=function(t){return arguments.length?this.totalDuration(this._repeat>0?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},e.totalDuration=function(t){return arguments.length?(this._dirty=0,bn(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(t,i){if(wn(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Vs(this,t),!n._dp||n.parent||zd(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&t<this._tDur||this._ts<0&&t>0||!this._tDur&&!t)&&Ai(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===nt||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),Id(this,t,i)),this},e.time=function(t,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+gu(this))%(this._dur+this._rDelay)||(t?this._dur:0),i):this._time},e.totalProgress=function(t,i){return arguments.length?this.totalTime(this.totalDuration()*t,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(t,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-t:t)+gu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(t,i){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*n,i):this._repeat?Tn(this._tTime,n)+1:1},e.timeScale=function(t,i){if(!arguments.length)return this._rts===-nt?0:this._rts;if(this._rts===t)return this;var n=this.parent&&this._ts?Ds(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-nt?0:this._rts,this.totalTime(Ta(-Math.abs(this._delay),this.totalDuration(),n),i!==!1),Hs(this),xy(this)},e.paused=function(t){return arguments.length?(this._ps!==t&&(this._ps=t,t?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(wn(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==nt&&(this._tTime-=nt)))),this):this._ps},e.startTime=function(t){if(arguments.length){this._start=t;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ai(i,this,t-this._delay),this}return this._start},e.endTime=function(t){return this._start+(Yt(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(t){var i=this.parent||this._dp;return i?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ds(i.rawTime(t),this):this._tTime:this._tTime},e.revert=function(t){t===void 0&&(t=py);var i=It;return It=t,Lc(this)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),this.data!=="nested"&&t.kill!==!1&&this.kill(),It=i,this},e.globalTime=function(t){for(var i=this,n=arguments.length?t:i.rawTime();i;)n=i._start+n/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(t):n},e.repeat=function(t){return arguments.length?(this._repeat=t===1/0?-2:t,_u(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(t){if(arguments.length){var i=this._time;return this._rDelay=t,_u(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},e.seek=function(t,i){return this.totalTime(oi(this,t),Yt(i))},e.restart=function(t,i){return this.play().totalTime(t?-this._delay:0,Yt(i)),this._dur||(this._zTime=-nt),this},e.play=function(t,i){return t!=null&&this.seek(t,i),this.reversed(!1).paused(!1)},e.reverse=function(t,i){return t!=null&&this.seek(t||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(t,i){return t!=null&&this.seek(t,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-nt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-nt,this},e.isActive=function(){var t=this.parent||this._dp,i=this._start,n;return!!(!t||this._ts&&this._initted&&t.isActive()&&(n=t.rawTime(!0))>=i&&n<this.endTime(!0)-nt)},e.eventCallback=function(t,i,n){var a=this.vars;return arguments.length>1?(i?(a[t]=i,n&&(a[t+"Params"]=n),t==="onUpdate"&&(this._onUpdate=i)):delete a[t],this):a[t]},e.then=function(t){var i=this;return new Promise(function(n){var a=_t(t)?t:Od,s=function(){var o=i.then;i.then=null,_t(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=o),n(a),i.then=o};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},e.kill=function(){Gn(this)},r}();ri(fa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-nt,_prom:0,_ps:!1,_rts:1});var Gt=function(r){Ed(e,r);function e(i,n){var a;return i===void 0&&(i={}),a=r.call(this,i)||this,a.labels={},a.smoothChildTiming=!!i.smoothChildTiming,a.autoRemoveChildren=!!i.autoRemoveChildren,a._sort=Yt(i.sortChildren),ft&&Ai(i.parent||ft,Wi(a),n),i.reversed&&a.reverse(),i.paused&&a.paused(!0),i.scrollTrigger&&Bd(Wi(a),i.scrollTrigger),a}var t=e.prototype;return t.to=function(i,n,a){return Qn(0,arguments,this),this},t.from=function(i,n,a){return Qn(1,arguments,this),this},t.fromTo=function(i,n,a,s){return Qn(2,arguments,this),this},t.set=function(i,n,a){return n.duration=0,n.parent=this,Jn(n).repeatDelay||(n.repeat=0),n.immediateRender=!!n.immediateRender,new St(i,n,oi(this,a),1),this},t.call=function(i,n,a){return Ai(this,St.delayedCall(0,i,n),a)},t.staggerTo=function(i,n,a,s,o,c,l){return a.duration=n,a.stagger=a.stagger||s,a.onComplete=c,a.onCompleteParams=l,a.parent=this,new St(i,a,oi(this,o)),this},t.staggerFrom=function(i,n,a,s,o,c,l){return a.runBackwards=1,Jn(a).immediateRender=Yt(a.immediateRender),this.staggerTo(i,n,a,s,o,c,l)},t.staggerFromTo=function(i,n,a,s,o,c,l,h){return s.startAt=a,Jn(s).immediateRender=Yt(s.immediateRender),this.staggerTo(i,n,s,o,c,l,h)},t.render=function(i,n,a){var s=this._time,o=this._dirty?this.totalDuration():this._tDur,c=this._dur,l=i<=0?0:Tt(i),h=this._zTime<0!=i<0&&(this._initted||!c),u,d,p,g,_,m,f,T,E,v,L,R;if(this!==ft&&l>o&&i>=0&&(l=o),l!==this._tTime||a||h){if(s!==this._time&&c&&(l+=this._time-s,i+=this._time-s),u=l,E=this._start,T=this._ts,m=!T,h&&(c||(s=this._zTime),(i||!n)&&(this._zTime=i)),this._repeat){if(L=this._yoyo,_=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,n,a);if(u=Tt(l%_),l===o?(g=this._repeat,u=c):(v=Tt(l/_),g=~~v,g&&g===v&&(u=c,g--),u>c&&(u=c)),v=Tn(this._tTime,_),!s&&this._tTime&&v!==g&&this._tTime-v*_-this._dur<=0&&(v=g),L&&g&1&&(u=c-u,R=1),g!==v&&!this._lock){var w=L&&v&1,C=w===(L&&g&1);if(g<v&&(w=!w),s=w?0:l%c?c:l,this._lock=1,this.render(s||(R?0:Tt(g*_)),n,!c)._lock=0,this._tTime=l,!n&&this.parent&&ti(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1),s&&s!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,o=this._tDur,C&&(this._lock=2,s=w?c:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Qd(this,R)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(f=Sy(this,Tt(s),Tt(u)),f&&(l-=u-(u=f._start))),this._tTime=l,this._time=u,this._act=!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&l&&!n&&!v&&(ti(this,"onStart"),this._tTime!==l))return this;if(u>=s&&i>=0)for(d=this._first;d;){if(p=d._next,(d._act||u>=d._start)&&d._ts&&f!==d){if(d.parent!==this)return this.render(i,n,a);if(d.render(d._ts>0?(u-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(u-d._start)*d._ts,n,a),u!==this._time||!this._ts&&!m){f=0,p&&(l+=this._zTime=-nt);break}}d=p}else{d=this._last;for(var x=i<0?i:u;d;){if(p=d._prev,(d._act||x<=d._end)&&d._ts&&f!==d){if(d.parent!==this)return this.render(i,n,a);if(d.render(d._ts>0?(x-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(x-d._start)*d._ts,n,a||It&&Lc(d)),u!==this._time||!this._ts&&!m){f=0,p&&(l+=this._zTime=x?-nt:nt);break}}d=p}}if(f&&!n&&(this.pause(),f.render(u>=s?0:-nt)._zTime=u>=s?1:-1,this._ts))return this._start=E,Hs(this),this.render(i,n,a);this._onUpdate&&!n&&ti(this,"onUpdate",!0),(l===o&&this._tTime>=this.totalDuration()||!l&&s)&&(E===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(l===o&&this._ts>0||!l&&this._ts<0)&&dr(this,1),!n&&!(i<0&&!s)&&(l||s||!o)&&(ti(this,l===o&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(l<o&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,n){var a=this;if($i(n)||(n=oi(this,n,i)),!(i instanceof fa)){if(zt(i))return i.forEach(function(s){return a.add(s,n)}),this;if(Bt(i))return this.addLabel(i,n);if(_t(i))i=St.delayedCall(0,i);else return this}return this!==i?Ai(this,i,n):this},t.getChildren=function(i,n,a,s){i===void 0&&(i=!0),n===void 0&&(n=!0),a===void 0&&(a=!0),s===void 0&&(s=-di);for(var o=[],c=this._first;c;)c._start>=s&&(c instanceof St?n&&o.push(c):(a&&o.push(c),i&&o.push.apply(o,c.getChildren(!0,n,a)))),c=c._next;return o},t.getById=function(i){for(var n=this.getChildren(1,1,1),a=n.length;a--;)if(n[a].vars.id===i)return n[a]},t.remove=function(i){return Bt(i)?this.removeLabel(i):_t(i)?this.killTweensOf(i):(i.parent===this&&ks(this,i),i===this._recent&&(this._recent=this._last),Lr(this))},t.totalTime=function(i,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Tt(Mi.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,n),this._forcing=0,this):this._tTime},t.addLabel=function(i,n){return this.labels[i]=oi(this,n),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,n,a){var s=St.delayedCall(0,n||da,a);return s.data="isPause",this._hasPause=1,Ai(this,s,oi(this,i))},t.removePause=function(i){var n=this._first;for(i=oi(this,i);n;)n._start===i&&n.data==="isPause"&&dr(n),n=n._next},t.killTweensOf=function(i,n,a){for(var s=this.getTweensOf(i,a),o=s.length;o--;)sr!==s[o]&&s[o].kill(i,n);return this},t.getTweensOf=function(i,n){for(var a=[],s=pi(i),o=this._first,c=$i(n),l;o;)o instanceof St?gy(o._targets,s)&&(c?(!sr||o._initted&&o._ts)&&o.globalTime(0)<=n&&o.globalTime(o.totalDuration())>n:!n||o.isActive())&&a.push(o):(l=o.getTweensOf(s,n)).length&&a.push.apply(a,l),o=o._next;return a},t.tweenTo=function(i,n){n=n||{};var a=this,s=oi(a,i),o=n,c=o.startAt,l=o.onStart,h=o.onStartParams,u=o.immediateRender,d,p=St.to(a,ri({ease:n.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:n.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale())||nt,onStart:function(){if(a.pause(),!d){var g=n.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale());p._dur!==g&&bn(p,g,0,1).render(p._time,!0,!0),d=1}l&&l.apply(p,h||[])}},n));return u?p.render(0):p},t.tweenFromTo=function(i,n,a){return this.tweenTo(n,ri({startAt:{time:oi(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),vu(this,oi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),vu(this,oi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+nt)},t.shiftChildren=function(i,n,a){a===void 0&&(a=0);for(var s=this._first,o=this.labels,c;s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(n)for(c in o)o[c]>=a&&(o[c]+=i);return Lr(this)},t.invalidate=function(i){var n=this._first;for(this._lock=0;n;)n.invalidate(i),n=n._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var n=this._first,a;n;)a=n._next,this.remove(n),n=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Lr(this)},t.totalDuration=function(i){var n=0,a=this,s=a._last,o=di,c,l,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;s;)c=s._prev,s._dirty&&s.totalDuration(),l=s._start,l>o&&a._sort&&s._ts&&!a._lock?(a._lock=1,Ai(a,s,l-s._delay,1)._lock=0):o=l,l<0&&s._ts&&(n-=l,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=l/a._ts,a._time-=l,a._tTime-=l),a.shiftChildren(-l,!1,-1/0),o=0),s._end>n&&s._ts&&(n=s._end),s=c;bn(a,a===ft&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(ft._ts&&(Id(ft,Ds(i,ft)),Dd=Mi.frame),Mi.frame>=fu){fu+=Mn.autoSleep||120;var n=ft._first;if((!n||!n._ts)&&Mn.autoSleep&&Mi._listeners.length<2){for(;n&&!n._ts;)n=n._next;n||Mi.sleep()}}},e}(fa);ri(Gt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Hy=function(r,e,t,i,n,a,s){var o=new Ln(this._pt,r,e,0,1,Zy,null,n),c=0,l=0,h,u,d,p,g,_,m,f;for(o.b=t,o.e=i,t+="",i+="",(m=~i.indexOf("random("))&&(i=Pc(i)),a&&(f=[t,i],a(f,r,e),t=f[0],i=f[1]),u=t.match(Do)||[];h=Do.exec(i);)p=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),p!==u[l++]&&(_=parseFloat(u[l-1])||0,o._pt={_next:o._pt,p:g||l===1?g:",",s:_,c:p.charAt(1)==="="?Ud(_,p)-_:parseFloat(p)-_,m:d&&d<4?Math.round:0},c=Do.lastIndex);return o.c=c<i.length?i.substring(c,i.length):"",o.fp=s,(hy.test(i)||m)&&(o.e=0),this._pt=o,o},Dc=function(r,e,t,i,n,a,s,o,c,l){_t(i)&&(i=i(n||0,r,a));var h=r[e],u=t!=="get"?t:_t(h)?c?r[e.indexOf("set")||!_t(r["get"+e.substr(3)])?e:"get"+e.substr(3)](c):r[e]():h,d=_t(h)?c?qy:rp:Ic,p;if(Bt(i)&&(~i.indexOf("random(")&&(i=Pc(i)),i.charAt(1)==="="&&(p=Ud(u,i)+(pr(u)||0),(p||p===0)&&(i=p))),!l||u!==i||Yl)return!isNaN(u*i)&&i!==""?(p=new Ln(this._pt,r,e,+u||0,i-(u||0),typeof h=="boolean"?$y:ap,0,d),c&&(p.fp=c),s&&p.modifier(s,this,r),this._pt=p):(!h&&!(e in r)&&Ld(e,i),Hy.call(this,r,e,u,i,d,o||Mn.stringFilter,c))},Vy=function(r,e,t,i,n){if(_t(r)&&(r=ea(r,n,e,t,i)),!Ii(r)||r.style&&r.nodeType||zt(r)||bd(r))return Bt(r)?ea(r,n,e,t,i):r;var a={},s;for(s in r)a[s]=ea(r[s],n,e,t,i);return a},Gy=function(r,e,t,i,n,a){var s,o,c,l;if(ci[r]&&(s=new ci[r]).init(n,s.rawVars?e[r]:Vy(e[r],i,n,a,t),t,i,a)!==!1&&(t._pt=o=new Ln(t._pt,n,r,0,1,s.render,s,0,s.priority),t!==cn))for(c=t._ptLookup[t._targets.indexOf(n)],l=s._props.length;l--;)c[s._props[l]]=o;return s},sr,Yl,Uc=function r(e,t,i){var n=e.vars,a=n.ease,s=n.startAt,o=n.immediateRender,c=n.lazy,l=n.onUpdate,h=n.runBackwards,u=n.yoyoEase,d=n.keyframes,p=n.autoRevert,g=e._dur,_=e._startAt,m=e._targets,f=e.parent,T=f&&f.data==="nested"?f.vars.targets:m,E=e._overwrite==="auto"&&!Tc,v=e.timeline,L,R,w,C,x,y,b,U,F,I,D,O,W;if(v&&(!d||!a)&&(a="none"),e._ease=Pr(a,En.ease),e._yEase=u?Jd(Pr(u===!0?a:u,En.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!v&&!!n.runBackwards,!v||d&&!n.stagger){if(U=m[0]?Kn(m[0]).harness:0,O=U&&n[U.prop],L=Ps(n,Ac),_&&(_._zTime<0&&_.progress(1),t<0&&h&&o&&!p?_.render(-1,!0):_.revert(h&&g?vs:dy),_._lazy=0),s){if(dr(e._startAt=St.set(m,ri({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!_&&Yt(c),startAt:null,delay:0,onUpdate:l&&function(){return ti(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(It||!o&&!p)&&e._startAt.revert(vs),o&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&g&&!_){if(t&&(o=!1),w=ri({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Yt(c),immediateRender:o,stagger:0,parent:f},L),O&&(w[U.prop]=O),dr(e._startAt=St.set(m,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(It?e._startAt.revert(vs):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,nt,nt);else if(!t)return}for(e._pt=e._ptCache=0,c=g&&Yt(c)||c&&!g,R=0;R<m.length;R++){if(x=m[R],b=x._gsap||Cc(m)[R]._gsap,e._ptLookup[R]=I={},Vl[b.id]&&hr.length&&Ls(),D=T===m?R:T.indexOf(x),U&&(F=new U).init(x,O||L,e,D,T)!==!1&&(e._pt=C=new Ln(e._pt,x,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(V){I[V]=C}),F.priority&&(y=1)),!U||O)for(w in L)ci[w]&&(F=Gy(w,L,e,D,x,T))?F.priority&&(y=1):I[w]=C=Dc.call(e,x,w,"get",L[w],D,T,0,n.stringFilter);e._op&&e._op[R]&&e.kill(x,e._op[R]),E&&e._pt&&(sr=e,ft.killTweensOf(x,I,e.globalTime(t)),W=!e.parent,sr=0),e._pt&&c&&(Vl[b.id]=1)}y&&eM(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!W,d&&t<=0&&v.render(di,!0,!0)},Wy=function(r,e,t,i,n,a,s,o){var c=(r._pt&&r._ptCache||(r._ptCache={}))[e],l,h,u,d;if(!c)for(c=r._ptCache[e]=[],u=r._ptLookup,d=r._targets.length;d--;){if(l=u[d][e],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==e&&l.fp!==e;)l=l._next;if(!l)return Yl=1,r.vars[e]="+=0",Uc(r,s),Yl=0,o?ua(e+" not eligible for reset"):1;c.push(l)}for(d=c.length;d--;)h=c[d],l=h._pt||h,l.s=(i||i===0)&&!n?i:l.s+(i||0)+a*l.c,l.c=t-l.s,h.e&&(h.e=my(t)+pr(h.e)),h.b&&(h.b=l.s+pr(h.b))},Xy=function(r,e){var t=r[0]?Kn(r[0]).harness:0,i=t&&t.aliases,n,a,s,o;if(!i)return e;n=Sn({},e);for(a in i)if(a in n)for(o=i[a].split(","),s=o.length;s--;)n[o[s]]=n[a];return n},jy=function(r,e,t,i){var n=e.ease||i||"power1.inOut",a,s;if(zt(e))s=t[r]||(t[r]=[]),e.forEach(function(o,c){return s.push({t:c/(e.length-1)*100,v:o,e:n})});else for(a in e)s=t[a]||(t[a]=[]),a==="ease"||s.push({t:parseFloat(r),v:e[a],e:n})},ea=function(r,e,t,i,n){return _t(r)?r.call(e,t,i,n):Bt(r)&&~r.indexOf("random(")?Pc(r):r},tp=Rc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ip={};Zi(tp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return ip[r]=1});var St=function(r){Ed(e,r);function e(i,n,a,s){var o;typeof n=="number"&&(a.duration=n,n=a,a=null),o=r.call(this,s?n:Jn(n))||this;var c=o.vars,l=c.duration,h=c.delay,u=c.immediateRender,d=c.stagger,p=c.overwrite,g=c.keyframes,_=c.defaults,m=c.scrollTrigger,f=c.yoyoEase,T=n.parent||ft,E=(zt(i)||bd(i)?$i(i[0]):"length"in n)?[i]:pi(i),v,L,R,w,C,x,y,b;if(o._targets=E.length?Cc(E):ua("GSAP target "+i+" not found. https://gsap.com",!Mn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||d||ls(l)||ls(h)){if(n=o.vars,v=o.timeline=new Gt({data:"nested",defaults:_||{},targets:T&&T.data==="nested"?T.vars.targets:E}),v.kill(),v.parent=v._dp=Wi(o),v._start=0,d||ls(l)||ls(h)){if(w=E.length,y=d&&Gd(d),Ii(d))for(C in d)~tp.indexOf(C)&&(b||(b={}),b[C]=d[C]);for(L=0;L<w;L++)R=Ps(n,ip),R.stagger=0,f&&(R.yoyoEase=f),b&&Sn(R,b),x=E[L],R.duration=+ea(l,Wi(o),L,x,E),R.delay=(+ea(h,Wi(o),L,x,E)||0)-o._delay,!d&&w===1&&R.delay&&(o._delay=h=R.delay,o._start+=h,R.delay=0),v.to(x,R,y?y(L,x,E):0),v._ease=$e.none;v.duration()?l=h=0:o.timeline=0}else if(g){Jn(ri(v.vars.defaults,{ease:"none"})),v._ease=Pr(g.ease||n.ease||"none");var U=0,F,I,D;if(zt(g))g.forEach(function(O){return v.to(E,O,">")}),v.duration();else{R={};for(C in g)C==="ease"||C==="easeEach"||jy(C,g[C],R,g.easeEach);for(C in R)for(F=R[C].sort(function(O,W){return O.t-W.t}),U=0,L=0;L<F.length;L++)I=F[L],D={ease:I.e,duration:(I.t-(L?F[L-1].t:0))/100*l},D[C]=I.v,v.to(E,D,U),U+=D.duration;v.duration()<l&&v.to({},{duration:l-v.duration()})}}l||o.duration(l=v.duration())}else o.timeline=0;return p===!0&&!Tc&&(sr=Wi(o),ft.killTweensOf(E),sr=0),Ai(T,Wi(o),a),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(u||!l&&!g&&o._start===Tt(T._time)&&Yt(u)&&yy(Wi(o))&&T.data!=="nested")&&(o._tTime=-nt,o.render(Math.max(0,-h)||0)),m&&Bd(Wi(o),m),o}var t=e.prototype;return t.render=function(i,n,a){var s=this._time,o=this._tDur,c=this._dur,l=i<0,h=i>o-nt&&!l?o:i<nt?0:i,u,d,p,g,_,m,f,T,E;if(!c)Ey(this,i,n,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==l||this._lazy){if(u=h,T=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&l)return this.totalTime(g*100+i,n,a);if(u=Tt(h%g),h===o?(p=this._repeat,u=c):(_=Tt(h/g),p=~~_,p&&p===_?(u=c,p--):u>c&&(u=c)),m=this._yoyo&&p&1,m&&(E=this._yEase,u=c-u),_=Tn(this._tTime,g),u===s&&!a&&this._initted&&p===_)return this._tTime=h,this;p!==_&&(T&&this._yEase&&Qd(T,m),this.vars.repeatRefresh&&!m&&!this._lock&&u!==g&&this._initted&&(this._lock=a=1,this.render(Tt(g*p),!0).invalidate()._lock=0))}if(!this._initted){if(kd(this,l?i:u,a,n,h))return this._tTime=0,this;if(s!==this._time&&!(a&&this.vars.repeatRefresh&&p!==_))return this;if(c!==this._dur)return this.render(i,n,a)}if(this._tTime=h,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=f=(E||this._ease)(u/c),this._from&&(this.ratio=f=1-f),!s&&h&&!n&&!_&&(ti(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(f,d.d),d=d._next;T&&T.render(i<0?i:T._dur*T._ease(u/this._dur),n,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!n&&(l&&Gl(this,i,n,a),ti(this,"onUpdate")),this._repeat&&p!==_&&this.vars.onRepeat&&!n&&this.parent&&ti(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(l&&!this._onUpdate&&Gl(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&dr(this,1),!n&&!(l&&!s)&&(h||s||m)&&(ti(this,h===o?"onComplete":"onReverseComplete",!0),this._prom&&!(h<o&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,n,a,s,o){pa||Mi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),l;return this._initted||Uc(this,c),l=this._ease(c/this._dur),Wy(this,i,n,a,s,l,c,o)?this.resetTo(i,n,a,s,1):(Vs(this,0),this.parent||Fd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,n){if(n===void 0&&(n="all"),!i&&(!n||n==="all"))return this._lazy=this._pt=0,this.parent?Gn(this):this.scrollTrigger&&this.scrollTrigger.kill(!!It),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,n,sr&&sr.vars.overwrite!==!0)._first||Gn(this),this.parent&&a!==this.timeline.totalDuration()&&bn(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,o=i?pi(i):s,c=this._ptLookup,l=this._pt,h,u,d,p,g,_,m;if((!n||n==="all")&&vy(s,o))return n==="all"&&(this._pt=0),Gn(this);for(h=this._op=this._op||[],n!=="all"&&(Bt(n)&&(g={},Zi(n,function(f){return g[f]=1}),n=g),n=Xy(s,n)),m=s.length;m--;)if(~o.indexOf(s[m])){u=c[m],n==="all"?(h[m]=n,p=u,d={}):(d=h[m]=h[m]||{},p=n);for(g in p)_=u&&u[g],_&&((!("kill"in _.d)||_.d.kill(g)===!0)&&ks(this,_,"_pt"),delete u[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&l&&Gn(this),this},e.to=function(i,n){return new e(i,n,arguments[2])},e.from=function(i,n){return Qn(1,arguments)},e.delayedCall=function(i,n,a,s){return new e(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:n,onReverseComplete:n,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},e.fromTo=function(i,n,a){return Qn(2,arguments)},e.set=function(i,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new e(i,n)},e.killTweensOf=function(i,n,a){return ft.killTweensOf(i,n,a)},e}(fa);ri(St.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Zi("staggerTo,staggerFrom,staggerFromTo",function(r){St[r]=function(){var e=new Gt,t=Xl.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Ic=function(r,e,t){return r[e]=t},rp=function(r,e,t){return r[e](t)},qy=function(r,e,t,i){return r[e](i.fp,t)},Yy=function(r,e,t){return r.setAttribute(e,t)},np=function(r,e){return _t(r[e])?rp:Td(r[e])&&r.setAttribute?Yy:Ic},ap=function(r,e){return e.set(e.t,e.p,Math.round((e.s+e.c*r)*1e6)/1e6,e)},$y=function(r,e){return e.set(e.t,e.p,!!(e.s+e.c*r),e)},Zy=function(r,e){var t=e._pt,i="";if(!r&&e.b)i=e.b;else if(r===1&&e.e)i=e.e;else{for(;t;)i=t.p+(t.m?t.m(t.s+t.c*r):Math.round((t.s+t.c*r)*1e4)/1e4)+i,t=t._next;i+=e.c}e.set(e.t,e.p,i,e)},Nc=function(r,e){for(var t=e._pt;t;)t.r(r,t.d),t=t._next},Ky=function(r,e,t,i){for(var n=this._pt,a;n;)a=n._next,n.p===i&&n.modifier(r,e,t),n=a},Jy=function(r){for(var e=this._pt,t,i;e;)i=e._next,e.p===r&&!e.op||e.op===r?ks(this,e,"_pt"):e.dep||(t=1),e=i;return!t},Qy=function(r,e,t,i){i.mSet(r,e,i.m.call(i.tween,t,i.mt),i)},eM=function(r){for(var e=r._pt,t,i,n,a;e;){for(t=e._next,i=n;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:n=e,(e._next=i)?i._prev=e:a=e,e=t}r._pt=n},Ln=function(){function r(t,i,n,a,s,o,c,l,h){this.t=i,this.s=a,this.c=s,this.p=n,this.r=o||ap,this.d=c||this,this.set=l||Ic,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(t,i,n){this.mSet=this.mSet||this.set,this.set=Qy,this.m=t,this.mt=n,this.tween=i},r}();Zi(Rc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Ac[r]=1});ii.TweenMax=ii.TweenLite=St;ii.TimelineLite=ii.TimelineMax=Gt;ft=new Gt({sortChildren:!1,defaults:En,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Mn.stringFilter=Iy;var Dr=[],ys={},tM=[],yu=0,iM=0,Fo=function(r){return(ys[r]||tM).map(function(e){return e()})},$l=function(){var r=Date.now(),e=[];r-yu>2&&(Fo("matchMediaInit"),Dr.forEach(function(t){var i=t.queries,n=t.conditions,a,s,o,c;for(s in i)a=bi.matchMedia(i[s]).matches,a&&(o=1),a!==n[s]&&(n[s]=a,c=1);c&&(t.revert(),o&&e.push(t))}),Fo("matchMediaRevert"),e.forEach(function(t){return t.onMatch(t,function(i){return t.add(null,i)})}),yu=r,Fo("matchMedia"))},sp=function(){function r(t,i){this.selector=i&&jl(i),this.data=[],this._r=[],this.isReverted=!1,this.id=iM++,t&&this.add(t)}var e=r.prototype;return e.add=function(t,i,n){_t(t)&&(n=i,i=t,t=_t);var a=this,s=function(){var o=ut,c=a.selector,l;return o&&o!==a&&o.data.push(a),n&&(a.selector=jl(n)),ut=a,l=i.apply(a,arguments),_t(l)&&a._r.push(l),ut=o,a.selector=c,a.isReverted=!1,l};return a.last=s,t===_t?s(a,function(o){return a.add(null,o)}):t?a[t]=s:s},e.ignore=function(t){var i=ut;ut=null,t(this),ut=i},e.getTweens=function(){var t=[];return this.data.forEach(function(i){return i instanceof r?t.push.apply(t,i.getTweens()):i instanceof St&&!(i.parent&&i.parent.data==="nested")&&t.push(i)}),t},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(t,i){var n=this;if(t?function(){for(var s=n.getTweens(),o=n.data.length,c;o--;)c=n.data[o],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(l){return s.splice(s.indexOf(l),1)}));for(s.map(function(l){return{g:l._dur||l._delay||l._sat&&!l._sat.vars.immediateRender?l.globalTime(0):-1/0,t:l}}).sort(function(l,h){return h.g-l.g||-1/0}).forEach(function(l){return l.t.revert(t)}),o=n.data.length;o--;)c=n.data[o],c instanceof Gt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof St)&&c.revert&&c.revert(t);n._r.forEach(function(l){return l(t,n)}),n.isReverted=!0}():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),i)for(var a=Dr.length;a--;)Dr[a].id===this.id&&Dr.splice(a,1)},e.revert=function(t){this.kill(t||{})},r}(),rM=function(){function r(t){this.contexts=[],this.scope=t,ut&&ut.data.push(this)}var e=r.prototype;return e.add=function(t,i,n){Ii(t)||(t={matches:t});var a=new sp(0,n||this.scope),s=a.conditions={},o,c,l;ut&&!a.selector&&(a.selector=ut.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=t;for(c in t)c==="all"?l=1:(o=bi.matchMedia(t[c]),o&&(Dr.indexOf(a)<0&&Dr.push(a),(s[c]=o.matches)&&(l=1),o.addListener?o.addListener($l):o.addEventListener("change",$l)));return l&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(t){this.kill(t||{})},e.kill=function(t){this.contexts.forEach(function(i){return i.kill(t,!0)})},r}(),Us={registerPlugin:function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];e.forEach(function(i){return $d(i)})},timeline:function(r){return new Gt(r)},getTweensOf:function(r,e){return ft.getTweensOf(r,e)},getProperty:function(r,e,t,i){Bt(r)&&(r=pi(r)[0]);var n=Kn(r||{}).get,a=t?Od:Nd;return t==="native"&&(t=""),r&&(e?a((ci[e]&&ci[e].get||n)(r,e,t,i)):function(s,o,c){return a((ci[s]&&ci[s].get||n)(r,s,o,c))})},quickSetter:function(r,e,t){if(r=pi(r),r.length>1){var i=r.map(function(l){return Qt.quickSetter(l,e,t)}),n=i.length;return function(l){for(var h=n;h--;)i[h](l)}}r=r[0]||{};var a=ci[e],s=Kn(r),o=s.harness&&(s.harness.aliases||{})[e]||e,c=a?function(l){var h=new a;cn._pt=0,h.init(r,t?l+t:l,cn,0,[r]),h.render(1,h),cn._pt&&Nc(1,cn)}:s.set(r,o);return a?c:function(l){return c(r,o,t?l+t:l,s,1)}},quickTo:function(r,e,t){var i,n=Qt.to(r,ri((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),t||{})),a=function(s,o,c){return n.resetTo(e,s,o,c)};return a.tween=n,a},isTweening:function(r){return ft.getTweensOf(r,!0).length>0},defaults:function(r){return r&&r.ease&&(r.ease=Pr(r.ease,En.ease)),mu(En,r||{})},config:function(r){return mu(Mn,r||{})},registerEffect:function(r){var e=r.name,t=r.effect,i=r.plugins,n=r.defaults,a=r.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!ci[s]&&!ii[s]&&ua(e+" effect requires "+s+" plugin.")}),Uo[e]=function(s,o,c){return t(pi(s),ri(o||{},n),c)},a&&(Gt.prototype[e]=function(s,o,c){return this.add(Uo[e](s,Ii(o)?o:(c=o)&&{},this),c)})},registerEase:function(r,e){$e[r]=Pr(e)},parseEase:function(r,e){return arguments.length?Pr(r,e):$e},getById:function(r){return ft.getById(r)},exportRoot:function(r,e){r===void 0&&(r={});var t=new Gt(r),i,n;for(t.smoothChildTiming=Yt(r.smoothChildTiming),ft.remove(t),t._dp=0,t._time=t._tTime=ft._time,i=ft._first;i;)n=i._next,(e||!(!i._dur&&i instanceof St&&i.vars.onComplete===i._targets[0]))&&Ai(t,i,i._start-i._delay),i=n;return Ai(ft,t,0),t},context:function(r,e){return r?new sp(r,e):ut},matchMedia:function(r){return new rM(r)},matchMediaRefresh:function(){return Dr.forEach(function(r){var e=r.conditions,t,i;for(i in e)e[i]&&(e[i]=!1,t=1);t&&r.revert()})||$l()},addEventListener:function(r,e){var t=ys[r]||(ys[r]=[]);~t.indexOf(e)||t.push(e)},removeEventListener:function(r,e){var t=ys[r],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)},utils:{wrap:Ly,wrapYoyo:Py,distribute:Gd,random:Xd,snap:Wd,normalize:Cy,getUnit:pr,clamp:by,splitColor:Zd,toArray:pi,selector:jl,mapRange:qd,pipe:Ay,unitize:Ry,interpolate:Dy,shuffle:Vd},install:Cd,effects:Uo,ticker:Mi,updateRoot:Gt.updateRoot,plugins:ci,globalTimeline:ft,core:{PropTween:Ln,globals:Pd,Tween:St,Timeline:Gt,Animation:fa,getCache:Kn,_removeLinkedListItem:ks,reverting:function(){return It},context:function(r){return r&&ut&&(ut.data.push(r),r._ctx=ut),ut},suppressOverwrites:function(r){return Tc=r}}};Zi("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Us[r]=St[r]});Mi.add(Gt.updateRoot);cn=Us.to({},{duration:0});var nM=function(r,e){for(var t=r._pt;t&&t.p!==e&&t.op!==e&&t.fp!==e;)t=t._next;return t},aM=function(r,e){var t=r._targets,i,n,a;for(i in e)for(n=t.length;n--;)a=r._ptLookup[n][i],a&&(a=a.d)&&(a._pt&&(a=nM(a,i)),a&&a.modifier&&a.modifier(e[i],r,t[n],i))},zo=function(r,e){return{name:r,headless:1,rawVars:1,init:function(t,i,n){n._onInit=function(a){var s,o;if(Bt(i)&&(s={},Zi(i,function(c){return s[c]=1}),i=s),e){s={};for(o in i)s[o]=e(i[o]);i=s}aM(a,i)}}}},Qt=Us.registerPlugin({name:"attr",init:function(r,e,t,i,n){var a,s,o;this.tween=t;for(a in e)o=r.getAttribute(a)||"",s=this.add(r,"setAttribute",(o||0)+"",e[a],i,n,0,0,a),s.op=a,s.b=o,this._props.push(a)},render:function(r,e){for(var t=e._pt;t;)It?t.set(t.t,t.p,t.b,t):t.r(r,t.d),t=t._next}},{name:"endArray",headless:1,init:function(r,e){for(var t=e.length;t--;)this.add(r,t,r[t]||0,e[t],0,0,0,0,0,1)}},zo("roundProps",ql),zo("modifiers"),zo("snap",Wd))||Us;St.version=Gt.version=Qt.version="3.13.0";Rd=1;bc()&&wn();$e.Power0;$e.Power1;$e.Power2;$e.Power3;$e.Power4;$e.Linear;$e.Quad;$e.Cubic;$e.Quart;$e.Quint;$e.Strong;$e.Elastic;$e.Back;$e.SteppedEase;$e.Bounce;$e.Sine;$e.Expo;$e.Circ;/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class Pi{constructor(e,t,i,n,a="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(n),this.$name=document.createElement("div"),this.$name.classList.add("name"),Pi.nextNameID=Pi.nextNameID||0,this.$name.id="lil-gui-name-"+ ++Pi.nextNameID,this.$widget=document.createElement(a),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class sM extends Pi{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Zl(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!t&&"#"+t}const oM={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:Zl,toHexString:Zl},ma={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},lM={isPrimitive:!1,match:Array.isArray,fromHexString(r,e,t=1){const i=ma.fromHexString(r);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(255&i)/255*t},toHexString:([r,e,t],i=1)=>ma.toHexString(r*(i=255/i)<<16^e*i<<8^t*i<<0)},cM={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const i=ma.fromHexString(r);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(255&i)/255*t},toHexString:({r,g:e,b:t},i=1)=>ma.toHexString(r*(i=255/i)<<16^e*i<<8^t*i<<0)},hM=[oM,ma,lM,cM];class uM extends Pi{constructor(e,t,i,n){var a;super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(a=this.initialValue,hM.find(s=>s.match(a))),this._rgbScale=n,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Zl(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Bo extends Pi{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",n=>{n.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class dM extends Pi{constructor(e,t,i,n,a,s){super(e,t,i,"number"),this._initInput(),this.min(n),this.max(a);const o=s!==void 0;this.step(o?s:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=100*t+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=h=>{const u=parseFloat(this.$input.value);isNaN(u)||(this._snapClampSetValue(u+h),this.$input.value=this.getValue())};let t,i,n,a,s,o=!1;const c=h=>{if(o){const u=h.clientX-t,d=h.clientY-i;Math.abs(d)>5?(h.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(u)>5&&l()}if(!o){const u=h.clientY-n;s-=u*this._step*this._arrowKeyMultiplier(h),a+s>this._max?s=this._max-a:a+s<this._min&&(s=this._min-a),this._snapClampSetValue(a+s)}n=h.clientY},l=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",c),window.removeEventListener("mouseup",l)};this.$input.addEventListener("input",()=>{let h=parseFloat(this.$input.value);isNaN(h)||(this._stepExplicit&&(h=this._snap(h)),this.setValue(this._clamp(h)))}),this.$input.addEventListener("keydown",h=>{h.code==="Enter"&&this.$input.blur(),h.code==="ArrowUp"&&(h.preventDefault(),e(this._step*this._arrowKeyMultiplier(h))),h.code==="ArrowDown"&&(h.preventDefault(),e(this._step*this._arrowKeyMultiplier(h)*-1))}),this.$input.addEventListener("wheel",h=>{this._inputFocused&&(h.preventDefault(),e(this._step*this._normalizeMouseWheel(h)))},{passive:!1}),this.$input.addEventListener("mousedown",h=>{t=h.clientX,i=n=h.clientY,o=!0,a=this.getValue(),s=0,window.addEventListener("mousemove",c),window.addEventListener("mouseup",l)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=d=>{const p=this.$slider.getBoundingClientRect();let g=(_=d,m=p.left,f=p.right,T=this._min,E=this._max,(_-m)/(f-m)*(E-T)+T);var _,m,f,T,E;this._snapClampSetValue(g)},t=d=>{e(d.clientX)},i=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",i)};let n,a,s=!1;const o=d=>{d.preventDefault(),this._setDraggingStyle(!0),e(d.touches[0].clientX),s=!1},c=d=>{if(s){const p=d.touches[0].clientX-n,g=d.touches[0].clientY-a;Math.abs(p)>Math.abs(g)?o(d):(window.removeEventListener("touchmove",c),window.removeEventListener("touchend",l))}else d.preventDefault(),e(d.touches[0].clientX)},l=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",l)},h=this._callOnFinishChange.bind(this);let u;this.$slider.addEventListener("mousedown",d=>{this._setDraggingStyle(!0),e(d.clientX),window.addEventListener("mousemove",t),window.addEventListener("mouseup",i)}),this.$slider.addEventListener("touchstart",d=>{d.touches.length>1||(this._hasScrollBar?(n=d.touches[0].clientX,a=d.touches[0].clientY,s=!0):o(d),window.addEventListener("touchmove",c,{passive:!1}),window.addEventListener("touchend",l))},{passive:!1}),this.$slider.addEventListener("wheel",d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();const p=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+p),this.$input.value=this.getValue(),clearTimeout(u),u=setTimeout(h,400)},{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle("lil-gui-"+t,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class pM extends Pi{constructor(e,t,i,n){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(n)?n:Object.values(n),this._names=Array.isArray(n)?n:Object.keys(n),this._names.forEach(a=>{const s=document.createElement("option");s.innerHTML=a,this.$select.appendChild(s)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class fM extends Pi{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",n=>{n.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let Mu=!1;class Oc{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:n,title:a="Controls",injectStyles:s=!0,touchStyles:o=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{c.code!=="Enter"&&c.code!=="Space"||(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(a),o&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!Mu&&s&&(function(c){const l=document.createElement("style");l.innerHTML=c;const h=document.querySelector("head link[rel=stylesheet], head style");h?document.head.insertBefore(l,h):document.head.appendChild(l)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),Mu=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),n&&this.domElement.style.setProperty("--width",n+"px"),this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation())}add(e,t,i,n,a){if(Object(i)===i)return new pM(this,e,t,i);const s=e[t];switch(typeof s){case"number":return new dM(this,e,t,i,n,a);case"boolean":return new sM(this,e,t);case"string":return new fM(this,e,t);case"function":return new Bo(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,s)}addColor(e,t,i=1){return new uM(this,e,t,i)}addFolder(e){return new Oc({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof Bo||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof Bo)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=a=>{a.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const n=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=n+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const mM=Oc;class gM{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){const t=this._partials;let i=0;for(let n=0;n<this._n&&n<32;n++){const a=t[n],s=e+a,o=Math.abs(e)<Math.abs(a)?e-(s-a):a-(s-e);o&&(t[i++]=o),e=s}return t[i]=e,this._n=i+1,this}valueOf(){const e=this._partials;let t=this._n,i,n,a,s=0;if(t>0){for(s=e[--t];t>0&&(i=s,n=e[--t],s=i+n,a=n-(s-i),!a););t>0&&(a<0&&e[t-1]<0||a>0&&e[t-1]>0)&&(n=a*2,i=s+n,n==i-s&&(s=i))}return s}}function*_M(r){for(const e of r)yield*e}function op(r){return Array.from(_M(r))}var ot=1e-6,vM=1e-12,Ze=Math.PI,jt=Ze/2,Eu=Ze/4,fi=Ze*2,Jt=180/Ze,Et=Ze/180,vt=Math.abs,lp=Math.atan,ga=Math.atan2,xt=Math.cos,xM=Math.exp,yM=Math.log,yt=Math.sin,MM=Math.sign||function(r){return r>0?1:r<0?-1:0},Gs=Math.sqrt,EM=Math.tan;function SM(r){return r>1?0:r<-1?Ze:Math.acos(r)}function _a(r){return r>1?jt:r<-1?-jt:Math.asin(r)}function Xn(){}function Is(r,e){r&&Tu.hasOwnProperty(r.type)&&Tu[r.type](r,e)}var Su={Feature:function(r,e){Is(r.geometry,e)},FeatureCollection:function(r,e){for(var t=r.features,i=-1,n=t.length;++i<n;)Is(t[i].geometry,e)}},Tu={Sphere:function(r,e){e.sphere()},Point:function(r,e){r=r.coordinates,e.point(r[0],r[1],r[2])},MultiPoint:function(r,e){for(var t=r.coordinates,i=-1,n=t.length;++i<n;)r=t[i],e.point(r[0],r[1],r[2])},LineString:function(r,e){Kl(r.coordinates,e,0)},MultiLineString:function(r,e){for(var t=r.coordinates,i=-1,n=t.length;++i<n;)Kl(t[i],e,0)},Polygon:function(r,e){bu(r.coordinates,e)},MultiPolygon:function(r,e){for(var t=r.coordinates,i=-1,n=t.length;++i<n;)bu(t[i],e)},GeometryCollection:function(r,e){for(var t=r.geometries,i=-1,n=t.length;++i<n;)Is(t[i],e)}};function Kl(r,e,t){var i=-1,n=r.length-t,a;for(e.lineStart();++i<n;)a=r[i],e.point(a[0],a[1],a[2]);e.lineEnd()}function bu(r,e){var t=-1,i=r.length;for(e.polygonStart();++t<i;)Kl(r[t],e,1);e.polygonEnd()}function TM(r,e){r&&Su.hasOwnProperty(r.type)?Su[r.type](r,e):Is(r,e)}function Jl(r){return[ga(r[1],r[0]),_a(r[2])]}function An(r){var e=r[0],t=r[1],i=xt(t);return[i*xt(e),i*yt(e),yt(t)]}function cs(r,e){return r[0]*e[0]+r[1]*e[1]+r[2]*e[2]}function Ns(r,e){return[r[1]*e[2]-r[2]*e[1],r[2]*e[0]-r[0]*e[2],r[0]*e[1]-r[1]*e[0]]}function ko(r,e){r[0]+=e[0],r[1]+=e[1],r[2]+=e[2]}function hs(r,e){return[r[0]*e,r[1]*e,r[2]*e]}function Ql(r){var e=Gs(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);r[0]/=e,r[1]/=e,r[2]/=e}function ec(r,e){function t(i,n){return i=r(i,n),e(i[0],i[1])}return r.invert&&e.invert&&(t.invert=function(i,n){return i=e.invert(i,n),i&&r.invert(i[0],i[1])}),t}function tc(r,e){return vt(r)>Ze&&(r-=Math.round(r/fi)*fi),[r,e]}tc.invert=tc;function cp(r,e,t){return(r%=fi)?e||t?ec(Au(r),Ru(e,t)):Au(r):e||t?Ru(e,t):tc}function wu(r){return function(e,t){return e+=r,vt(e)>Ze&&(e-=Math.round(e/fi)*fi),[e,t]}}function Au(r){var e=wu(r);return e.invert=wu(-r),e}function Ru(r,e){var t=xt(r),i=yt(r),n=xt(e),a=yt(e);function s(o,c){var l=xt(c),h=xt(o)*l,u=yt(o)*l,d=yt(c),p=d*t+h*i;return[ga(u*n-p*a,h*t-d*i),_a(p*n+u*a)]}return s.invert=function(o,c){var l=xt(c),h=xt(o)*l,u=yt(o)*l,d=yt(c),p=d*n-u*a;return[ga(u*n+d*a,h*t+p*i),_a(p*t-h*i)]},s}function bM(r){r=cp(r[0]*Et,r[1]*Et,r.length>2?r[2]*Et:0);function e(t){return t=r(t[0]*Et,t[1]*Et),t[0]*=Jt,t[1]*=Jt,t}return e.invert=function(t){return t=r.invert(t[0]*Et,t[1]*Et),t[0]*=Jt,t[1]*=Jt,t},e}function wM(r,e,t,i,n,a){if(t){var s=xt(e),o=yt(e),c=i*t;n==null?(n=e+i*fi,a=e-c/2):(n=Cu(s,n),a=Cu(s,a),(i>0?n<a:n>a)&&(n+=i*fi));for(var l,h=n;i>0?h>a:h<a;h-=c)l=Jl([s,-o*xt(h),-o*yt(h)]),r.point(l[0],l[1])}}function Cu(r,e){e=An(e),e[0]-=r,Ql(e);var t=SM(-e[1]);return((-e[2]<0?-t:t)+fi-ot)%fi}function hp(){var r=[],e;return{point:function(t,i,n){e.push([t,i,n])},lineStart:function(){r.push(e=[])},lineEnd:Xn,rejoin:function(){r.length>1&&r.push(r.pop().concat(r.shift()))},result:function(){var t=r;return r=[],e=null,t}}}function Ms(r,e){return vt(r[0]-e[0])<ot&&vt(r[1]-e[1])<ot}function us(r,e,t,i){this.x=r,this.z=e,this.o=t,this.e=i,this.v=!1,this.n=this.p=null}function up(r,e,t,i,n){var a=[],s=[],o,c;if(r.forEach(function(g){if(!((_=g.length-1)<=0)){var _,m=g[0],f=g[_],T;if(Ms(m,f)){if(!m[2]&&!f[2]){for(n.lineStart(),o=0;o<_;++o)n.point((m=g[o])[0],m[1]);n.lineEnd();return}f[0]+=2*ot}a.push(T=new us(m,g,null,!0)),s.push(T.o=new us(m,null,T,!1)),a.push(T=new us(f,g,null,!1)),s.push(T.o=new us(f,null,T,!0))}}),!!a.length){for(s.sort(e),Lu(a),Lu(s),o=0,c=s.length;o<c;++o)s[o].e=t=!t;for(var l=a[0],h,u;;){for(var d=l,p=!0;d.v;)if((d=d.n)===l)return;h=d.z,n.lineStart();do{if(d.v=d.o.v=!0,d.e){if(p)for(o=0,c=h.length;o<c;++o)n.point((u=h[o])[0],u[1]);else i(d.x,d.n.x,1,n);d=d.n}else{if(p)for(h=d.p.z,o=h.length-1;o>=0;--o)n.point((u=h[o])[0],u[1]);else i(d.x,d.p.x,-1,n);d=d.p}d=d.o,h=d.z,p=!p}while(!d.v);n.lineEnd()}}}function Lu(r){if(e=r.length){for(var e,t=0,i=r[0],n;++t<e;)i.n=n=r[t],n.p=i,i=n;i.n=n=r[0],n.p=i}}function Ho(r){return vt(r[0])<=Ze?r[0]:MM(r[0])*((vt(r[0])+Ze)%fi-Ze)}function AM(r,e){var t=Ho(e),i=e[1],n=yt(i),a=[yt(t),-xt(t),0],s=0,o=0,c=new gM;n===1?i=jt+ot:n===-1&&(i=-jt-ot);for(var l=0,h=r.length;l<h;++l)if(d=(u=r[l]).length)for(var u,d,p=u[d-1],g=Ho(p),_=p[1]/2+Eu,m=yt(_),f=xt(_),T=0;T<d;++T,g=v,m=R,f=w,p=E){var E=u[T],v=Ho(E),L=E[1]/2+Eu,R=yt(L),w=xt(L),C=v-g,x=C>=0?1:-1,y=x*C,b=y>Ze,U=m*R;if(c.add(ga(U*x*yt(y),f*w+U*xt(y))),s+=b?C+x*fi:C,b^g>=t^v>=t){var F=Ns(An(p),An(E));Ql(F);var I=Ns(a,F);Ql(I);var D=(b^C>=0?-1:1)*_a(I[2]);(i>D||i===D&&(F[0]||F[1]))&&(o+=b^C>=0?1:-1)}}return(s<-ot||s<ot&&c<-vM)^o&1}function dp(r,e,t,i){return function(n){var a=e(n),s=hp(),o=e(s),c=!1,l,h,u,d={point:p,lineStart:_,lineEnd:m,polygonStart:function(){d.point=f,d.lineStart=T,d.lineEnd=E,h=[],l=[]},polygonEnd:function(){d.point=p,d.lineStart=_,d.lineEnd=m,h=op(h);var v=AM(l,i);h.length?(c||(n.polygonStart(),c=!0),up(h,CM,v,t,n)):v&&(c||(n.polygonStart(),c=!0),n.lineStart(),t(null,null,1,n),n.lineEnd()),c&&(n.polygonEnd(),c=!1),h=l=null},sphere:function(){n.polygonStart(),n.lineStart(),t(null,null,1,n),n.lineEnd(),n.polygonEnd()}};function p(v,L){r(v,L)&&n.point(v,L)}function g(v,L){a.point(v,L)}function _(){d.point=g,a.lineStart()}function m(){d.point=p,a.lineEnd()}function f(v,L){u.push([v,L]),o.point(v,L)}function T(){o.lineStart(),u=[]}function E(){f(u[0][0],u[0][1]),o.lineEnd();var v=o.clean(),L=s.result(),R,w=L.length,C,x,y;if(u.pop(),l.push(u),u=null,!!w){if(v&1){if(x=L[0],(C=x.length-1)>0){for(c||(n.polygonStart(),c=!0),n.lineStart(),R=0;R<C;++R)n.point((y=x[R])[0],y[1]);n.lineEnd()}return}w>1&&v&2&&L.push(L.pop().concat(L.shift())),h.push(L.filter(RM))}}return d}}function RM(r){return r.length>1}function CM(r,e){return((r=r.x)[0]<0?r[1]-jt-ot:jt-r[1])-((e=e.x)[0]<0?e[1]-jt-ot:jt-e[1])}const Pu=dp(function(){return!0},LM,DM,[-Ze,-jt]);function LM(r){var e=NaN,t=NaN,i=NaN,n;return{lineStart:function(){r.lineStart(),n=1},point:function(a,s){var o=a>0?Ze:-Ze,c=vt(a-e);vt(c-Ze)<ot?(r.point(e,t=(t+s)/2>0?jt:-jt),r.point(i,t),r.lineEnd(),r.lineStart(),r.point(o,t),r.point(a,t),n=0):i!==o&&c>=Ze&&(vt(e-i)<ot&&(e-=i*ot),vt(a-o)<ot&&(a-=o*ot),t=PM(e,t,a,s),r.point(i,t),r.lineEnd(),r.lineStart(),r.point(o,t),n=0),r.point(e=a,t=s),i=o},lineEnd:function(){r.lineEnd(),e=t=NaN},clean:function(){return 2-n}}}function PM(r,e,t,i){var n,a,s=yt(r-t);return vt(s)>ot?lp((yt(e)*(a=xt(i))*yt(t)-yt(i)*(n=xt(e))*yt(r))/(n*a*s)):(e+i)/2}function DM(r,e,t,i){var n;if(r==null)n=t*jt,i.point(-Ze,n),i.point(0,n),i.point(Ze,n),i.point(Ze,0),i.point(Ze,-n),i.point(0,-n),i.point(-Ze,-n),i.point(-Ze,0),i.point(-Ze,n);else if(vt(r[0]-e[0])>ot){var a=r[0]<e[0]?Ze:-Ze;n=t*a/2,i.point(-a,n),i.point(0,n),i.point(a,n)}else i.point(e[0],e[1])}function UM(r){var e=xt(r),t=2*Et,i=e>0,n=vt(e)>ot;function a(h,u,d,p){wM(p,r,t,d,h,u)}function s(h,u){return xt(h)*xt(u)>e}function o(h){var u,d,p,g,_;return{lineStart:function(){g=p=!1,_=1},point:function(m,f){var T=[m,f],E,v=s(m,f),L=i?v?0:l(m,f):v?l(m+(m<0?Ze:-Ze),f):0;if(!u&&(g=p=v)&&h.lineStart(),v!==p&&(E=c(u,T),(!E||Ms(u,E)||Ms(T,E))&&(T[2]=1)),v!==p)_=0,v?(h.lineStart(),E=c(T,u),h.point(E[0],E[1])):(E=c(u,T),h.point(E[0],E[1],2),h.lineEnd()),u=E;else if(n&&u&&i^v){var R;!(L&d)&&(R=c(T,u,!0))&&(_=0,i?(h.lineStart(),h.point(R[0][0],R[0][1]),h.point(R[1][0],R[1][1]),h.lineEnd()):(h.point(R[1][0],R[1][1]),h.lineEnd(),h.lineStart(),h.point(R[0][0],R[0][1],3)))}v&&(!u||!Ms(u,T))&&h.point(T[0],T[1]),u=T,p=v,d=L},lineEnd:function(){p&&h.lineEnd(),u=null},clean:function(){return _|(g&&p)<<1}}}function c(h,u,d){var p=An(h),g=An(u),_=[1,0,0],m=Ns(p,g),f=cs(m,m),T=m[0],E=f-T*T;if(!E)return!d&&h;var v=e*f/E,L=-e*T/E,R=Ns(_,m),w=hs(_,v),C=hs(m,L);ko(w,C);var x=R,y=cs(w,x),b=cs(x,x),U=y*y-b*(cs(w,w)-1);if(!(U<0)){var F=Gs(U),I=hs(x,(-y-F)/b);if(ko(I,w),I=Jl(I),!d)return I;var D=h[0],O=u[0],W=h[1],V=u[1],q;O<D&&(q=D,D=O,O=q);var ee=O-D,se=vt(ee-Ze)<ot,oe=se||ee<ot;if(!se&&V<W&&(q=W,W=V,V=q),oe?se?W+V>0^I[1]<(vt(I[0]-D)<ot?W:V):W<=I[1]&&I[1]<=V:ee>Ze^(D<=I[0]&&I[0]<=O)){var ue=hs(x,(-y+F)/b);return ko(ue,w),[I,Jl(ue)]}}}function l(h,u){var d=i?r:Ze-r,p=0;return h<-d?p|=1:h>d&&(p|=2),u<-d?p|=4:u>d&&(p|=8),p}return dp(s,o,a,i?[0,-r]:[-Ze,r-Ze])}function IM(r,e,t,i,n,a){var s=r[0],o=r[1],c=e[0],l=e[1],h=0,u=1,d=c-s,p=l-o,g;if(g=t-s,!(!d&&g>0)){if(g/=d,d<0){if(g<h)return;g<u&&(u=g)}else if(d>0){if(g>u)return;g>h&&(h=g)}if(g=n-s,!(!d&&g<0)){if(g/=d,d<0){if(g>u)return;g>h&&(h=g)}else if(d>0){if(g<h)return;g<u&&(u=g)}if(g=i-o,!(!p&&g>0)){if(g/=p,p<0){if(g<h)return;g<u&&(u=g)}else if(p>0){if(g>u)return;g>h&&(h=g)}if(g=a-o,!(!p&&g<0)){if(g/=p,p<0){if(g>u)return;g>h&&(h=g)}else if(p>0){if(g<h)return;g<u&&(u=g)}return h>0&&(r[0]=s+h*d,r[1]=o+h*p),u<1&&(e[0]=s+u*d,e[1]=o+u*p),!0}}}}}var jn=1e9,ds=-jn;function NM(r,e,t,i){function n(l,h){return r<=l&&l<=t&&e<=h&&h<=i}function a(l,h,u,d){var p=0,g=0;if(l==null||(p=s(l,u))!==(g=s(h,u))||c(l,h)<0^u>0)do d.point(p===0||p===3?r:t,p>1?i:e);while((p=(p+u+4)%4)!==g);else d.point(h[0],h[1])}function s(l,h){return vt(l[0]-r)<ot?h>0?0:3:vt(l[0]-t)<ot?h>0?2:1:vt(l[1]-e)<ot?h>0?1:0:h>0?3:2}function o(l,h){return c(l.x,h.x)}function c(l,h){var u=s(l,1),d=s(h,1);return u!==d?u-d:u===0?h[1]-l[1]:u===1?l[0]-h[0]:u===2?l[1]-h[1]:h[0]-l[0]}return function(l){var h=l,u=hp(),d,p,g,_,m,f,T,E,v,L,R,w={point:C,lineStart:U,lineEnd:F,polygonStart:y,polygonEnd:b};function C(D,O){n(D,O)&&h.point(D,O)}function x(){for(var D=0,O=0,W=p.length;O<W;++O)for(var V=p[O],q=1,ee=V.length,se=V[0],oe,ue,Me=se[0],Ee=se[1];q<ee;++q)oe=Me,ue=Ee,se=V[q],Me=se[0],Ee=se[1],ue<=i?Ee>i&&(Me-oe)*(i-ue)>(Ee-ue)*(r-oe)&&++D:Ee<=i&&(Me-oe)*(i-ue)<(Ee-ue)*(r-oe)&&--D;return D}function y(){h=u,d=[],p=[],R=!0}function b(){var D=x(),O=R&&D,W=(d=op(d)).length;(O||W)&&(l.polygonStart(),O&&(l.lineStart(),a(null,null,1,l),l.lineEnd()),W&&up(d,o,D,a,l),l.polygonEnd()),h=l,d=p=g=null}function U(){w.point=I,p&&p.push(g=[]),L=!0,v=!1,T=E=NaN}function F(){d&&(I(_,m),f&&v&&u.rejoin(),d.push(u.result())),w.point=C,v&&h.lineEnd()}function I(D,O){var W=n(D,O);if(p&&g.push([D,O]),L)_=D,m=O,f=W,L=!1,W&&(h.lineStart(),h.point(D,O));else if(W&&v)h.point(D,O);else{var V=[T=Math.max(ds,Math.min(jn,T)),E=Math.max(ds,Math.min(jn,E))],q=[D=Math.max(ds,Math.min(jn,D)),O=Math.max(ds,Math.min(jn,O))];IM(V,q,r,e,t,i)?(v||(h.lineStart(),h.point(V[0],V[1])),h.point(q[0],q[1]),W||h.lineEnd(),R=!1):W&&(h.lineStart(),h.point(D,O),R=!1)}T=D,E=O,v=W}return w}}const Du=r=>r;var Rn=1/0,Os=Rn,va=-Rn,Fs=va,OM={point:FM,lineStart:Xn,lineEnd:Xn,polygonStart:Xn,polygonEnd:Xn,result:function(){var r=[[Rn,Os],[va,Fs]];return va=Fs=-(Os=Rn=1/0),r}};function FM(r,e){r<Rn&&(Rn=r),r>va&&(va=r),e<Os&&(Os=e),e>Fs&&(Fs=e)}const Uu=OM;function Fc(r){return function(e){var t=new ic;for(var i in r)t[i]=r[i];return t.stream=e,t}}function ic(){}ic.prototype={constructor:ic,point:function(r,e){this.stream.point(r,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function zc(r,e,t){var i=r.clipExtent&&r.clipExtent();return r.scale(150).translate([0,0]),i!=null&&r.clipExtent(null),TM(t,r.stream(Uu)),e(Uu.result()),i!=null&&r.clipExtent(i),r}function pp(r,e,t){return zc(r,function(i){var n=e[1][0]-e[0][0],a=e[1][1]-e[0][1],s=Math.min(n/(i[1][0]-i[0][0]),a/(i[1][1]-i[0][1])),o=+e[0][0]+(n-s*(i[1][0]+i[0][0]))/2,c=+e[0][1]+(a-s*(i[1][1]+i[0][1]))/2;r.scale(150*s).translate([o,c])},t)}function zM(r,e,t){return pp(r,[[0,0],e],t)}function BM(r,e,t){return zc(r,function(i){var n=+e,a=n/(i[1][0]-i[0][0]),s=(n-a*(i[1][0]+i[0][0]))/2,o=-a*i[0][1];r.scale(150*a).translate([s,o])},t)}function kM(r,e,t){return zc(r,function(i){var n=+e,a=n/(i[1][1]-i[0][1]),s=-a*i[0][0],o=(n-a*(i[1][1]+i[0][1]))/2;r.scale(150*a).translate([s,o])},t)}var Iu=16,HM=xt(30*Et);function Nu(r,e){return+e?GM(r,e):VM(r)}function VM(r){return Fc({point:function(e,t){e=r(e,t),this.stream.point(e[0],e[1])}})}function GM(r,e){function t(i,n,a,s,o,c,l,h,u,d,p,g,_,m){var f=l-i,T=h-n,E=f*f+T*T;if(E>4*e&&_--){var v=s+d,L=o+p,R=c+g,w=Gs(v*v+L*L+R*R),C=_a(R/=w),x=vt(vt(R)-1)<ot||vt(a-u)<ot?(a+u)/2:ga(L,v),y=r(x,C),b=y[0],U=y[1],F=b-i,I=U-n,D=T*F-f*I;(D*D/E>e||vt((f*F+T*I)/E-.5)>.3||s*d+o*p+c*g<HM)&&(t(i,n,a,s,o,c,b,U,x,v/=w,L/=w,R,_,m),m.point(b,U),t(b,U,x,v,L,R,l,h,u,d,p,g,_,m))}}return function(i){var n,a,s,o,c,l,h,u,d,p,g,_,m={point:f,lineStart:T,lineEnd:v,polygonStart:function(){i.polygonStart(),m.lineStart=L},polygonEnd:function(){i.polygonEnd(),m.lineStart=T}};function f(C,x){C=r(C,x),i.point(C[0],C[1])}function T(){u=NaN,m.point=E,i.lineStart()}function E(C,x){var y=An([C,x]),b=r(C,x);t(u,d,h,p,g,_,u=b[0],d=b[1],h=C,p=y[0],g=y[1],_=y[2],Iu,i),i.point(u,d)}function v(){m.point=f,i.lineEnd()}function L(){T(),m.point=R,m.lineEnd=w}function R(C,x){E(n=C,x),a=u,s=d,o=p,c=g,l=_,m.point=E}function w(){t(u,d,h,p,g,_,a,s,n,o,c,l,Iu,i),m.lineEnd=v,v()}return m}}var WM=Fc({point:function(r,e){this.stream.point(r*Et,e*Et)}});function XM(r){return Fc({point:function(e,t){var i=r(e,t);return this.stream.point(i[0],i[1])}})}function jM(r,e,t,i,n){function a(s,o){return s*=i,o*=n,[e+r*s,t-r*o]}return a.invert=function(s,o){return[(s-e)/r*i,(t-o)/r*n]},a}function Ou(r,e,t,i,n,a){if(!a)return jM(r,e,t,i,n);var s=xt(a),o=yt(a),c=s*r,l=o*r,h=s/r,u=o/r,d=(o*t-s*e)/r,p=(o*e+s*t)/r;function g(_,m){return _*=i,m*=n,[c*_-l*m+e,t-l*_-c*m]}return g.invert=function(_,m){return[i*(h*_-u*m+d),n*(p-u*_-h*m)]},g}function qM(r){return YM(function(){return r})()}function YM(r){var e,t=150,i=480,n=250,a=0,s=0,o=0,c=0,l=0,h,u=0,d=1,p=1,g=null,_=Pu,m=null,f,T,E,v=Du,L=.5,R,w,C,x,y;function b(D){return C(D[0]*Et,D[1]*Et)}function U(D){return D=C.invert(D[0],D[1]),D&&[D[0]*Jt,D[1]*Jt]}b.stream=function(D){return x&&y===D?x:x=WM(XM(h)(_(R(v(y=D)))))},b.preclip=function(D){return arguments.length?(_=D,g=void 0,I()):_},b.postclip=function(D){return arguments.length?(v=D,m=f=T=E=null,I()):v},b.clipAngle=function(D){return arguments.length?(_=+D?UM(g=D*Et):(g=null,Pu),I()):g*Jt},b.clipExtent=function(D){return arguments.length?(v=D==null?(m=f=T=E=null,Du):NM(m=+D[0][0],f=+D[0][1],T=+D[1][0],E=+D[1][1]),I()):m==null?null:[[m,f],[T,E]]},b.scale=function(D){return arguments.length?(t=+D,F()):t},b.translate=function(D){return arguments.length?(i=+D[0],n=+D[1],F()):[i,n]},b.center=function(D){return arguments.length?(a=D[0]%360*Et,s=D[1]%360*Et,F()):[a*Jt,s*Jt]},b.rotate=function(D){return arguments.length?(o=D[0]%360*Et,c=D[1]%360*Et,l=D.length>2?D[2]%360*Et:0,F()):[o*Jt,c*Jt,l*Jt]},b.angle=function(D){return arguments.length?(u=D%360*Et,F()):u*Jt},b.reflectX=function(D){return arguments.length?(d=D?-1:1,F()):d<0},b.reflectY=function(D){return arguments.length?(p=D?-1:1,F()):p<0},b.precision=function(D){return arguments.length?(R=Nu(w,L=D*D),I()):Gs(L)},b.fitExtent=function(D,O){return pp(b,D,O)},b.fitSize=function(D,O){return zM(b,D,O)},b.fitWidth=function(D,O){return BM(b,D,O)},b.fitHeight=function(D,O){return kM(b,D,O)};function F(){var D=Ou(t,0,0,d,p,u).apply(null,e(a,s)),O=Ou(t,i-D[0],n-D[1],d,p,u);return h=cp(o,c,l),w=ec(e,O),C=ec(h,w),R=Nu(w,L),I()}function I(){return x=y=null,b}return function(){return e=r.apply(this,arguments),b.invert=e.invert&&U,F()}}function Bc(r,e){return[r,yM(EM((jt+e)/2))]}Bc.invert=function(r,e){return[r,2*lp(xM(e))-jt]};function $M(){return ZM(Bc).scale(961/fi)}function ZM(r){var e=qM(r),t=e.center,i=e.scale,n=e.translate,a=e.clipExtent,s=null,o,c,l;e.scale=function(u){return arguments.length?(i(u),h()):i()},e.translate=function(u){return arguments.length?(n(u),h()):n()},e.center=function(u){return arguments.length?(t(u),h()):t()},e.clipExtent=function(u){return arguments.length?(u==null?s=o=c=l=null:(s=+u[0][0],o=+u[0][1],c=+u[1][0],l=+u[1][1]),h()):s==null?null:[[s,o],[c,l]]};function h(){var u=Ze*i(),d=e(bM(e.rotate()).invert([0,0]));return a(s==null?[[d[0]-u,d[1]-u],[d[0]+u,d[1]+u]]:r===Bc?[[Math.max(d[0]-u,s),o],[Math.min(d[0]+u,c),l]]:[[s,Math.max(d[1]-u,o)],[c,Math.min(d[1]+u,l)]])}return h()}function qn(r,e,t){this.k=r,this.x=e,this.y=t}qn.prototype={constructor:qn,scale:function(r){return r===1?this:new qn(this.k*r,this.x,this.y)},translate:function(r,e){return r===0&e===0?this:new qn(this.k,this.x+this.k*r,this.y+this.k*e)},apply:function(r){return[r[0]*this.k+this.x,r[1]*this.k+this.y]},applyX:function(r){return r*this.k+this.x},applyY:function(r){return r*this.k+this.y},invert:function(r){return[(r[0]-this.x)/this.k,(r[1]-this.y)/this.k]},invertX:function(r){return(r-this.x)/this.k},invertY:function(r){return(r-this.y)/this.k},rescaleX:function(r){return r.copy().domain(r.range().map(this.invertX,this).map(r.invert,r))},rescaleY:function(r){return r.copy().domain(r.range().map(this.invertY,this).map(r.invert,r))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};qn.prototype;var fp=typeof window<"u"&&window.THREE?window.THREE:{BufferGeometry:bt,Float32BufferAttribute:ht};new fp.BufferGeometry().setAttribute;fp.BufferGeometry;const KM="/assets/borderBlue-31169e52.png",JM="/assets/borderTwo-25bd46d9.png",QM=r=>(Ep("data-v-f99c5559"),r=r(),Sp(),r),e1={class:"container",ref:"container"},t1={class:"addContent"},i1=QM(()=>Vo("span",null,"增加3D特效",-1)),r1={__name:"map",setup(r){let e=new Map,t=null,i,n,a,s,o,c,l=!0;const h=new N(0,160,.1),u=new N(4,10,11);let d=jc(null),p=jc(!1);const g=()=>{const w=x=>{const y=new sg(x.gridSize||100,x.gridDivision||20,x.gridColor||26316,x.gridColor||13158);y.position.copy(x.position||new N(0,-5,0)),i.add(y);const b=new bt,U=[],F=x.pointLayout||{row:50,col:50},I=x.shapeSize||1;for(let ue=0;ue<F.row;ue++)for(let Me=0;Me<F.col;Me++){const Ee=(ue-F.row/2)*I,G=(Me-F.col/2)*I;U.push(Ee,.1,G)}b.setAttribute("position",new ht(U,3));const D=new Float32Array(U.length/3);for(let ue=0;ue<U.length;ue+=3){const Me=U[ue],Ee=U[ue+2],G=Math.sqrt(Me*Me+Ee*Ee);D[ue/3]=G}const O=new Float32Array(U.length),W=new ke(x.pointColor||2969459);for(let ue=0;ue<O.length;ue+=3)O[ue]=W.r,O[ue+1]=W.g,O[ue+2]=W.b;b.setAttribute("color",new Wt(O,3));const V=new Dl({size:x.pointSize||.05,vertexColors:!0,transparent:!0,opacity:.8,blending:rr}),q=new Ah(b,V);q.position.copy(x.position||new N(0,-5,0)),i.add(q);let ee=0;const se=ue=>{if(!x.diffuse)return;ee+=ue*(x.diffuseSpeed||1);const Me=b.attributes.color.array,Ee=ee*10,G=x.diffuseWidth||5,Z=new ke(x.diffuseColor||65535),fe=new ke(x.pointColor||2969459);for(let De=0;De<U.length;De+=3){const Ce=D[De/3],we=Math.abs(Ce-Ee);let qe=0;if(we<=G){qe=Math.max(0,1-we/G);const te=Math.max(0,ee-Ce/10),pe=Math.max(.2,1-te*.5);qe*=pe}const A=De,ie=fe.clone().lerp(Z,qe);Me[A]=ie.r,Me[A+1]=ie.g,Me[A+2]=ie.b}b.attributes.color.needsUpdate=!0},oe=_(i,{particleCount:30,layout:x.pointLayout,shapeSize:x.shapeSize,yMin:.1,yMax:4,particleColor:x.particleColor||6939378,pointColor:x.pointColor||2969459,position:x.position||new N(0,-5,0),particleSize:.25});return{gridHelper:y,pointsSystem:q,updateDiffusion:se,...oe,updateParticles:oe.updateParticles}},C={position:new N(0,0,0),gridSize:40,gridDivision:20,gridColor:2969459,shapeSize:.5,pointSize:.1,pointColor:2969459,pointLayout:{row:80,col:80},pointBlending:rr,diffuse:!0,diffuseSpeed:1,diffuseColor:65535,diffuseWidth:10,diffuseDir:1};return{gridSystem:w(C)}},_=(w,C={})=>{var x,y;let b=null,U=null,F=null,I=null,D=null,O=null,W=C.particleCount||30;const V={x:(((x=C.layout)==null?void 0:x.row)||80)*(C.shapeSize||.5),z:(((y=C.layout)==null?void 0:y.col)||80)*(C.shapeSize||.5),yMin:C.yMin||.1,yMax:C.yMax||4},q=(ee=W)=>{if(b)return;W=ee,U=new bt,I=new Float32Array(W*3),D=new Float32Array(W),O=new Float32Array(W*3);const se=new ke(C.particleColor||6939378);for(let Ee=0;Ee<W;Ee++){const G=Ee*3;I[G]=(Math.random()-.5)*V.x*2,I[G+1]=V.yMin+Math.random()*.5,I[G+2]=(Math.random()-.5)*V.z*2,D[Ee]=.5+Math.random()*1.5,O[G]=se.r,O[G+1]=se.g,O[G+2]=se.b}U.setAttribute("position",new Wt(I,3)),U.setAttribute("color",new Wt(O,3));const oe=document.createElement("canvas");oe.width=128,oe.height=128;const ue=oe.getContext("2d");ue.beginPath(),ue.arc(64,64,60,0,Math.PI*2),ue.fillStyle="rgba(220, 255, 255, 1.0)",ue.fill();const Me=new vo(oe);F=new Dl({size:C.particleSize||.25,vertexColors:!0,transparent:!0,opacity:.8,blending:rr,depthWrite:!1,map:Me}),b=new Ah(U,F),b.position.copy(C.position||new N(0,-5,0)),w.add(b)};return{addParticle:ee=>{q(ee)},removeParticle:()=>{b&&(w.remove(b),U.dispose(),F.dispose(),U=F=b=null,I=D=O=null)},updateParticles:ee=>{if(!b)return;const se=U.attributes.position.array,oe=U.attributes.color.array,ue=new ke(C.particleColor||6939378),Me=new ke(C.pointColor||2969459);for(let Ee=0;Ee<W;Ee++){const G=Ee*3;se[G+1]+=D[Ee]*ee,se[G]+=(Math.random()-.5)*.01,se[G+2]+=(Math.random()-.5)*.01;const Z=Math.min(1,(se[G+1]-V.yMin)/(V.yMax-V.yMin)),fe=ue.clone().lerp(Me,Z);oe[G]=fe.r,oe[G+1]=fe.g,oe[G+2]=fe.b,se[G+1]>V.yMax&&(se[G]=(Math.random()-.5)*V.x*2,se[G+1]=V.yMin,se[G+2]=(Math.random()-.5)*V.z*2,D[Ee]=.5+Math.random()*1.5)}U.attributes.position.needsUpdate=!0,U.attributes.color.needsUpdate=!0},particleSystem:b}},m=(w,C,x)=>{const y=document.createElement("canvas"),b=y.getContext("2d");y.width=256,y.height=64;const U=O=>{b.clearRect(0,0,y.width,y.height),b.fillStyle="rgba(13, 22, 129, 0.3)",b.roundRect(5,5,y.width-10,y.height-10,5),b.fill(),b.font=`bold ${O?30:28}px Microsoft Yahei`,b.textAlign="center",b.textBaseline="middle",b.fillStyle="#ffffff",b.fillText(w,y.width/2,y.height/2)};U(!1);const F=new vo(y),I=new Ll({map:F,transparent:!0,depthWrite:!1}),D=new Mh(I);return D.name=`label_${w}`,D.position.set(C.x,C.y+2.2,C.z),D.scale.set(2.5,.6,1),x.add(D),{sprite:D,updateHover:O=>{U(O),F.needsUpdate=!0,Qt.to(D.scale,{x:O?2.8:2.5,y:O?.68:.6,duration:.2,ease:"power1.out"}),Qt.to(D.position,{y:O?C.y+.9:C.y+.8,duration:.2,ease:"power1.out"})}}},f=(w,C,x)=>{const y=document.createElement("canvas"),b=y.getContext("2d");y.width=160,y.height=80;const U=O=>{b.clearRect(0,0,y.width,y.height),b.font="bold 30px Arial",b.textAlign="center",b.textBaseline="middle",b.fillStyle="#ffffff",b.fillText(w,y.width/2,y.height/2)};U();const F=new vo(y),I=new Ll({map:F,transparent:!0,depthWrite:!1}),D=new Mh(I);return D.position.set(C.x,C.y,C.z),D.scale.set(2,.5,1),x.add(D),{sprite:D,updateHover:O=>{U(),F.needsUpdate=!0}}},T=(w,C,x)=>{const y=x,b=new Rs(.1,.1,y,15),U=new Float32Array(b.attributes.position.count*3);for(let oe=0;oe<b.attributes.position.count;oe++){const ue=(b.attributes.position.getY(oe)+y/2)/y,Me=new ke(671074),Ee=new ke(11730687),G=Me.lerp(Ee,ue);U[oe*3]=G.r,U[oe*3+1]=G.g,U[oe*3+2]=G.b}b.setAttribute("color",new Wt(U,3));const F=new on({vertexColors:!0,transparent:!0,opacity:.8,blending:rr}),I=new Vt(b,F);I.position.set(w.x,w.y+y/2,w.z),t.add(I);const D=new Rs(.1+.05,.1+.05,y+.1,15),O=new Yi({uniforms:{glowColor:{value:new ke(6939378)},opacity:{value:.5}},vertexShader:`
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
    `,transparent:!0,blending:rr,depthWrite:!1}),W=new Vt(D,O);W.position.set(w.x,w.y+y/2,w.z),t.add(W);const V=new xc(.1+.1,.1+.15,30,1);V.rotateX(-Math.PI/2);const q=new on({color:6939378,transparent:!0,opacity:1,blending:rr}),ee=new Vt(V,q);ee.position.set(w.x,w.y+.05,w.z),t.add(ee);const se=f(C,{x:w.x+.2,y:w.y+y+1,z:w.z},t);return se.sprite.scale.set(1,.5,1),se.updateHover(!0),{cylinderMesh:I,glowMesh:W}},E=(w,C)=>{if(!(w!=null&&w.geometry))return new N(0,0,0);let x=[];if((w.geometry.type==="MultiPolygon"?w.geometry.coordinates.flat(2):w.geometry.coordinates.flat(1)).forEach(([U,F])=>{const[I,D]=C([U,F]);x.push({x:I,y:D})}),x.length===0)return new N(0,0,0);const y=x.reduce((U,F)=>U+F.x,0)/x.length,b=x.reduce((U,F)=>U+F.y,0)/x.length;return new N(y,0,b)},v=()=>({loadChinaMap:(async()=>{try{const w=await(await fetch("https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json")).json(),C=await(await fetch("https://geo.datav.aliyun.com/areas_v3/bound/320000_full.json")).json();if(!(w!=null&&w.features)||!(C!=null&&C.features))return;const x=i.getObjectByName("provinceGroup");x&&i.remove(x),t=new kn,t.name="provinceGroup",t.position.set(0,0,0),i.add(t);const y=[119.84,32.98],b=$M().center(y).scale(130).translate([2,0]),U={normal:{color:2242647,height:.2,borderColor:2968696,opacity:1},jiangsu:{color:6862590,height:.5,borderColor:16777215,opacity:1},jiangsuCity:{borderColor:16777215,linewidth:1.5,heightOffset:.72}};e.clear();let F=0;w.features.forEach(I=>{var D;if(!(I!=null&&I.geometry))return;const O=((D=I.properties)==null?void 0:D.name)||"未知区域",W=O==="江苏省",V=E(I,b);V.y=W?.7:U.normal.height;const q=m(O,V,t);e.set(O,q),(I.geometry.type==="MultiPolygon"?I.geometry.coordinates.flat(1):I.geometry.coordinates).forEach(ee=>{const se=ee.map(([G,Z])=>{const[fe,De]=b([G,Z]);return new re(fe,De)});if(se.length<3)return;const oe=new _c(se);let ue;W?ue=new vc(oe,{depth:U.jiangsu.height,bevelEnabled:!0,bevelThickness:.1,bevelSize:.05}):ue=new yc(oe),ue.rotateX(Math.PI/2);let Me;W?Me=new Ih({color:U.jiangsu.color,opacity:.8,transparent:!0}):Me=new Ih({color:U.normal.color,side:ui,transparent:!1});const Ee=new Vt(ue,Me);if(Ee.position.y=W?.7:U.normal.height,Ee.userData={province:O},t.add(Ee),F++,!W){const G=new fm(ue),Z=new bs({color:W?U.jiangsu.borderColor:U.normal.borderColor,linewidth:1,transparent:!0}),fe=new Pl(G,Z);fe.position.y=W?.5:U.normal.height+.01,t.add(fe)}})}),C.features.forEach(I=>{var D;if(!(I!=null&&I.geometry))return;const O=((D=I.properties)==null?void 0:D.name)||"未知城市",W=Math.random()*3+1;(I.geometry.type==="MultiPolygon"?I.geometry.coordinates:[I.geometry.coordinates]).forEach(V=>{const q=V[0];if(!Array.isArray(q)||q.length<4)return;const ee=E(I,b);ee.y=.8;const se=q.map(Me=>{if(!Array.isArray(Me)||Me.length!==2)return null;const[Ee,G]=Me,[Z,fe]=b([Ee,G]);return new N(Z,.8,fe)}).filter(Me=>Me!==null);if(se.length<4)return;T(ee,O,W);const oe=new bt().setFromPoints(se),ue=new Pl(oe,new bs({color:16777215,linewidth:2,depthTest:!0}));ue.renderOrder=999,t.add(ue)})})}catch(w){console.error("渲染错误:",w)}})()}),L=()=>{i=new lm,i.background=new ke(1649473),n=new hi(60,window.innerWidth/window.innerHeight,.1,1e3),n.position.copy(h),n.lookAt(0,0,0),i.add(n),a=new Wx({antialias:!0}),a.setSize(window.innerWidth,window.innerHeight),d.value.appendChild(a.domElement);const w=new rg(16427690);i.add(w);const C=new ig(16777215,1);C.position.set(0,0,1),i.add(C),s=new jx(n,a.domElement),s.enableDamping=!0,s.dampingFactor=.25,s.enableZoom=!0,s.enablePan=!0,s.enabled=!1,s.minDistance=1,s.maxDistance=1e3,s.target.set(0,0,0),s.update();const x=()=>{l&&(l=!1,s.enabled=!1,Qt.to(n.position,{x:u.x,y:u.y,z:u.z,duration:1.2,ease:"power2.inOut",onUpdate:()=>{n.lookAt(0,0,0),s.update()},onComplete:()=>{s.enabled=!0,s.minDistance=2,s.maxDistance=80,s.update()}}))},y=()=>{l||(l=!0,s.enabled=!1,Qt.to(n.position,{x:h.x,y:h.y,z:h.z,duration:1.2,ease:"power2.inOut",onUpdate:()=>{n.lookAt(0,0,0),s.update()},onComplete:()=>{s.enabled=!1,s.minDistance=1,s.maxDistance=1e3,s.update()}}))},b=q=>{l&&x()};window.addEventListener("wheel",b,{passive:!0}),window.addEventListener("click",b),window.addEventListener("dblclick",y),new Nh().load(KM,q=>{q.wrapS=Ar,q.wrapT=Ar;const ee=new yn(18,18),se=new on({map:q,transparent:!0,side:ui,blending:lr,depthWrite:!1}),oe=new Vt(ee,se);oe.position.set(1,.5,-2),oe.rotation.x=-Math.PI/2,i.add(oe),Qt.to(oe.rotation,{z:Math.PI*2,duration:45,repeat:-1,ease:"linear"})}),new Nh().load(JM,q=>{q.wrapS=Ar,q.wrapT=Ar;const ee=new yn(20,20),se=new on({map:q,transparent:!0,side:ui,blending:lr,depthWrite:!1}),oe=new Vt(ee,se);oe.position.set(1,.5,-2),oe.rotation.x=-Math.PI/2,i.add(oe),Qt.to(oe.rotation,{z:-Math.PI*2,duration:35,repeat:-1,ease:"linear"})});try{o=new mM;const q=o.addFolder("AmbientLight环境光"),ee={color:16777215,intensity:1};q.add(ee,"color",0,16777215).onChange(ue=>{w.color.set(ue)}).name("环境光颜色"),q.add(ee,"intensity",0,1,.1).name("环境光强度");const se=o.addFolder("DirectionalLight直射光"),oe={color:16777215,intensity:1,x:0,y:0,z:0};se.add(oe,"color",0,16777215).onChange(ue=>{C.color.set(ue)}).name("直射光颜色"),se.add(oe,"intensity",0,1,.1).name("直射光强度"),se.add(oe,"x",-10,10,1).name("直射光x轴位置")}catch{}const{gridSystem:U}=g();c=U,v();const F=new ag,I=new re;let D=null;const O=q=>{var ee,se;if(!t)return;I.x=q.clientX/window.innerWidth*2-1,I.y=-(q.clientY/window.innerHeight)*2+1,F.setFromCamera(I,n);const oe=t.children.filter(Me=>Me.isMesh),ue=F.intersectObjects(oe);if(D&&(!ue.length||ue[0].object.userData.province!==D)&&((ee=e.get(D))==null||ee.updateHover(!1),D=null),ue.length){const Me=ue[0].object.userData.province;Me&&Me!==D&&(D=Me,(se=e.get(Me))==null||se.updateHover(!0))}};window.addEventListener("mousemove",O),Lp(()=>{window.removeEventListener("mousemove",O),window.removeEventListener("wheel",b),window.removeEventListener("click",b),window.removeEventListener("dblclick",y)});let W=performance.now();function V(q){requestAnimationFrame(V);const ee=(q-W)/1e3;W=q,c&&c.updateParticles&&c.updateParticles(ee),a.render(i,n)}V()};function R(){p.value=!p.value,p.value?c.addParticle():c.removeParticle()}return Tp(()=>{L()}),(w,C)=>{const x=bp("el-button");return wp(),Ap("div",e1,[Vo("div",{class:"mapWeb",ref_key:"mapWeb",ref:d},[Vo("div",t1,[i1,qc(x,{onClick:w.addEffect},{default:Yc(()=>[$c("飞线特效")]),_:1},8,["onClick"]),qc(x,{class:Rp(Cp(p)?"activeButton":""),onClick:R},{default:Yc(()=>[$c(" 粒子特效 ")]),_:1},8,["class"])])],512)],512)}}},a1=Mp(r1,[["__scopeId","data-v-f99c5559"]]);export{a1 as default};
