import{o as Rc,L as lf}from"./index-8dd6ae0c.js";import{d as Ki,r as Nn,B as Gr,v as Cc,I as oa,o as On,e as Bn,h as Ct,_ as Ei,u as Kd,s as ul,t as Ye,A as vs,J as Ri,L as jd,f as Kn,w as Jd,F as Qd,m as tp,T as ep,j as np,g as ip}from"./index-f092b018.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pc="180",Er={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rp=0,gu=1,sp=2,cf=1,op=2,jn=3,xi=0,tn=1,Je=2,mi=0,_i=1,Dn=2,vu=3,xu=4,ap=5,Fi=100,lp=101,cp=102,up=103,hp=104,fp=200,dp=201,pp=202,mp=203,hl=204,fl=205,_p=206,gp=207,vp=208,xp=209,yp=210,Mp=211,Sp=212,Ep=213,Tp=214,dl=0,pl=1,ml=2,Ar=3,_l=4,gl=5,vl=6,xl=7,Dc=0,bp=1,wp=2,gi=0,Ap=1,Rp=2,Cp=3,Pp=4,Dp=5,Lp=6,Ip=7,uf=300,Rr=301,Cr=302,yl=303,Ml=304,aa=306,Bi=1e3,zi=1001,Sl=1002,Cn=1003,Up=1004,Vs=1005,vn=1006,pa=1007,ki=1008,kn=1009,hf=1010,ff=1011,xs=1012,Lc=1013,Xi=1014,ti=1015,Us=1016,Ic=1017,Uc=1018,ys=1020,df=35902,pf=35899,mf=1021,_f=1022,Rn=1023,Ms=1026,Ss=1027,gf=1028,Nc=1029,vf=1030,Fc=1031,Oc=1033,Co=33776,Po=33777,Do=33778,Lo=33779,El=35840,Tl=35841,bl=35842,wl=35843,Al=36196,Rl=37492,Cl=37496,Pl=37808,Dl=37809,Ll=37810,Il=37811,Ul=37812,Nl=37813,Fl=37814,Ol=37815,Bl=37816,zl=37817,kl=37818,Hl=37819,Vl=37820,Gl=37821,Wl=36492,Xl=36494,Yl=36495,ql=36283,$l=36284,Zl=36285,Kl=36286,Np=3200,Fp=3201,xf=0,Op=1,di="",an="srgb",Pr="srgb-linear",Ho="linear",se="srgb",tr=7680,yu=519,Bp=512,zp=513,kp=514,yf=515,Hp=516,Vp=517,Gp=518,Wp=519,jl=35044,Mu="300 es",Fn=2e3,Vo=2001;class ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Su=1234567;const Tr=Math.PI/180,Es=180/Math.PI;function zn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function $t(i,t,e){return Math.max(t,Math.min(e,i))}function Bc(i,t){return(i%t+t)%t}function Xp(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Yp(i,t,e){return i!==t?(e-i)/(t-i):0}function us(i,t,e){return(1-e)*i+e*t}function qp(i,t,e,n){return us(i,t,1-Math.exp(-e*n))}function $p(i,t=1){return t-Math.abs(Bc(i,t*2)-t)}function Zp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Kp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function jp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Jp(i,t){return i+Math.random()*(t-i)}function Qp(i){return i*(.5-Math.random())}function tm(i){i!==void 0&&(Su=i);let t=Su+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function em(i){return i*Tr}function nm(i){return i*Es}function im(i){return(i&i-1)===0&&i!==0}function rm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function om(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),u=o((t+n)/2),h=s((t-n)/2),f=o((t-n)/2),d=s((n-t)/2),_=o((n-t)/2);switch(r){case"XYX":i.set(a*u,c*h,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*_,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*_,a*l);break;case"ZYZ":i.set(c*_,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function bn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ie(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const am={DEG2RAD:Tr,RAD2DEG:Es,generateUUID:zn,clamp:$t,euclideanModulo:Bc,mapLinear:Xp,inverseLerp:Yp,lerp:us,damp:qp,pingpong:$p,smoothstep:Zp,smootherstep:Kp,randInt:jp,randFloat:Jp,randFloatSpread:Qp,seededRandom:tm,degToRad:em,radToDeg:nm,isPowerOfTwo:im,ceilPowerOfTwo:rm,floorPowerOfTwo:sm,setQuaternionFromProperEuler:om,normalize:ie,denormalize:bn};class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(h!==g||c!==f||l!==d||u!==_){let m=1-a;const p=c*f+l*d+u*_+h*g,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const A=Math.sqrt(y),w=Math.atan2(A,p*M);m=Math.sin(m*w)/A,a=Math.sin(a*w)/A}const v=a*M;if(c=c*m+f*v,l=l*m+d*v,u=u*m+_*v,h=h*m+g*v,m===1-a){const A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return t[e]=a*_+u*h+c*d-l*f,t[e+1]=c*_+u*f+l*h-a*d,t[e+2]=l*_+u*d+a*f-c*h,t[e+3]=u*_-a*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),h=a(s/2),f=c(n/2),d=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h+f*d*_;break;case"YZX":this._x=f*u*h+l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h-f*d*_;break;case"XZY":this._x=f*u*h-l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Eu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Eu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),u=2*(a*e-s*r),h=2*(s*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ma.copy(this).projectOnVector(t),this.sub(ma)}reflect(t){return this.sub(ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ma=new U,Eu=new Yi;class Yt{constructor(t,e,n,r,s,o,a,c,l){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=r[0],m=r[3],p=r[6],M=r[1],y=r[4],v=r[7],A=r[2],w=r[5],C=r[8];return s[0]=o*g+a*M+c*A,s[3]=o*m+a*y+c*w,s[6]=o*p+a*v+c*C,s[1]=l*g+u*M+h*A,s[4]=l*m+u*y+h*w,s[7]=l*p+u*v+h*C,s[2]=f*g+d*M+_*A,s[5]=f*m+d*y+_*w,s[8]=f*p+d*v+_*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*s,d=l*s-o*c,_=e*h+n*f+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=h*g,t[1]=(r*l-u*n)*g,t[2]=(a*n-r*o)*g,t[3]=f*g,t[4]=(u*e-r*c)*g,t[5]=(r*s-a*e)*g,t[6]=d*g,t[7]=(n*c-l*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(_a.makeScale(t,e)),this}rotate(t){return this.premultiply(_a.makeRotation(-t)),this}translate(t,e){return this.premultiply(_a.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _a=new Yt;function Mf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ts(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lm(){const i=Ts("canvas");return i.style.display="block",i}const Tu={};function bs(i){i in Tu||(Tu[i]=!0,console.warn(i))}function cm(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const bu=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wu=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function um(){const i={enabled:!0,workingColorSpace:Pr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===se&&(r.r=ni(r.r),r.g=ni(r.g),r.b=ni(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===se&&(r.r=br(r.r),r.g=br(r.g),r.b=br(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===di?Ho:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return bs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return bs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Pr]:{primaries:t,whitePoint:n,transfer:Ho,toXYZ:bu,fromXYZ:wu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:t,whitePoint:n,transfer:se,toXYZ:bu,fromXYZ:wu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),i}const te=um();function ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function br(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let er;class hm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{er===void 0&&(er=Ts("canvas")),er.width=t.width,er.height=t.height;const r=er.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=er}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ts("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ni(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ni(e[n]/255)*255):e[n]=ni(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let fm=0;class zc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=zn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ga(r[o].image)):s.push(ga(r[o]))}else s=ga(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function ga(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dm=0;const va=new U;class ke extends ji{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=zi,r=zi,s=vn,o=ki,a=Rn,c=kn,l=ke.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=zn(),this.name="",this.source=new zc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(va).x}get height(){return this.source.getSize(va).y}get depth(){return this.source.getSize(va).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bi:t.x=t.x-Math.floor(t.x);break;case zi:t.x=t.x<0?0:1;break;case Sl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bi:t.y=t.y-Math.floor(t.y);break;case zi:t.y=t.y<0?0:1;break;case Sl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=uf;ke.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,n=0,r=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,v=(d+1)/2,A=(p+1)/2,w=(u+f)/4,C=(h+g)/4,D=(_+m)/4;return y>v&&y>A?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=w/n,s=C/n):v>A?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=w/r,s=D/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=C/s,r=D/s),this.set(n,r,s,e),this}let M=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(h-g)/M,this.z=(f-u)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pm extends ji{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new ke(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new zc(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends pm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Sf extends ke{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mm extends ke{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ns{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Sn):Sn.fromBufferAttribute(s,o),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gs.copy(n.boundingBox)),Gs.applyMatrix4(t.matrixWorld),this.union(Gs)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qr),Ws.subVectors(this.max,qr),nr.subVectors(t.a,qr),ir.subVectors(t.b,qr),rr.subVectors(t.c,qr),oi.subVectors(ir,nr),ai.subVectors(rr,ir),Ci.subVectors(nr,rr);let e=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Ci.z,Ci.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Ci.z,0,-Ci.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Ci.y,Ci.x,0];return!xa(e,nr,ir,rr,Ws)||(e=[1,0,0,0,1,0,0,0,1],!xa(e,nr,ir,rr,Ws))?!1:(Xs.crossVectors(oi,ai),e=[Xs.x,Xs.y,Xs.z],xa(e,nr,ir,rr,Ws))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Xn=[new U,new U,new U,new U,new U,new U,new U,new U],Sn=new U,Gs=new Ns,nr=new U,ir=new U,rr=new U,oi=new U,ai=new U,Ci=new U,qr=new U,Ws=new U,Xs=new U,Pi=new U;function xa(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Pi.fromArray(i,s);const a=r.x*Math.abs(Pi.x)+r.y*Math.abs(Pi.y)+r.z*Math.abs(Pi.z),c=t.dot(Pi),l=e.dot(Pi),u=n.dot(Pi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const _m=new Ns,$r=new U,ya=new U;class Fs{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):_m.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$r.subVectors(t,this.center);const e=$r.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector($r,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ya.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($r.copy(t.center).add(ya)),this.expandByPoint($r.copy(t.center).sub(ya))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Yn=new U,Ma=new U,Ys=new U,li=new U,Sa=new U,qs=new U,Ea=new U;class Os{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Ma.copy(t).add(e).multiplyScalar(.5),Ys.copy(e).sub(t).normalize(),li.copy(this.origin).sub(Ma);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ys),a=li.dot(this.direction),c=-li.dot(Ys),l=li.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*c-a,f=o*a-c,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=_?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ma).addScaledVector(Ys,f),d}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);const n=Yn.dot(this.direction),r=Yn.dot(Yn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,r,s){Sa.subVectors(e,t),qs.subVectors(n,t),Ea.crossVectors(Sa,qs);let o=this.direction.dot(Ea),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,t);const c=a*this.direction.dot(qs.crossVectors(li,qs));if(c<0)return null;const l=a*this.direction.dot(Sa.cross(li));if(l<0||c+l>o)return null;const u=-a*li.dot(Ea);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,n,r,s,o,a,c,l,u,h,f,d,_,g,m){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,u,h,f,d,_,g,m)}set(t,e,n,r,s,o,a,c,l,u,h,f,d,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/sr.setFromMatrixColumn(t,0).length(),s=1/sr.setFromMatrixColumn(t,1).length(),o=1/sr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,d=o*h,_=a*u,g=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+_*l,e[5]=f-g*l,e[9]=-a*c,e[2]=g-f*l,e[6]=_+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,d=c*h,_=l*u,g=l*h;e[0]=f+g*a,e[4]=_*a-d,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-_,e[6]=g+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,d=c*h,_=l*u,g=l*h;e[0]=f-g*a,e[4]=-o*h,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*u,e[9]=g-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,d=o*h,_=a*u,g=a*h;e[0]=c*u,e[4]=_*l-d,e[8]=f*l+g,e[1]=c*h,e[5]=g*l+f,e[9]=d*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,_=a*c,g=a*l;e[0]=c*u,e[4]=g-f*h,e[8]=_*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*h+_,e[10]=f-g*h}else if(t.order==="XZY"){const f=o*c,d=o*l,_=a*c,g=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+g,e[5]=o*u,e[9]=d*h-_,e[2]=_*h-d,e[6]=a*u,e[10]=g*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gm,t,vm)}lookAt(t,e,n){const r=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),ci.crossVectors(n,sn),ci.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),ci.crossVectors(n,sn)),ci.normalize(),$s.crossVectors(sn,ci),r[0]=ci.x,r[4]=$s.x,r[8]=sn.x,r[1]=ci.y,r[5]=$s.y,r[9]=sn.y,r[2]=ci.z,r[6]=$s.z,r[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],M=n[3],y=n[7],v=n[11],A=n[15],w=r[0],C=r[4],D=r[8],S=r[12],E=r[1],P=r[5],O=r[9],B=r[13],H=r[2],L=r[6],z=r[10],it=r[14],X=r[3],pt=r[7],Et=r[11],bt=r[15];return s[0]=o*w+a*E+c*H+l*X,s[4]=o*C+a*P+c*L+l*pt,s[8]=o*D+a*O+c*z+l*Et,s[12]=o*S+a*B+c*it+l*bt,s[1]=u*w+h*E+f*H+d*X,s[5]=u*C+h*P+f*L+d*pt,s[9]=u*D+h*O+f*z+d*Et,s[13]=u*S+h*B+f*it+d*bt,s[2]=_*w+g*E+m*H+p*X,s[6]=_*C+g*P+m*L+p*pt,s[10]=_*D+g*O+m*z+p*Et,s[14]=_*S+g*B+m*it+p*bt,s[3]=M*w+y*E+v*H+A*X,s[7]=M*C+y*P+v*L+A*pt,s[11]=M*D+y*O+v*z+A*Et,s[15]=M*S+y*B+v*it+A*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+s*c*h-r*l*h-s*a*f+n*l*f+r*a*d-n*c*d)+g*(+e*c*d-e*l*f+s*o*f-r*o*d+r*l*u-s*c*u)+m*(+e*l*h-e*a*d-s*o*h+n*o*d+s*a*u-n*l*u)+p*(-r*a*u-e*c*h+e*a*f+r*o*h-n*o*f+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],_=t[12],g=t[13],m=t[14],p=t[15],M=h*m*l-g*f*l+g*c*d-a*m*d-h*c*p+a*f*p,y=_*f*l-u*m*l-_*c*d+o*m*d+u*c*p-o*f*p,v=u*g*l-_*h*l+_*a*d-o*g*d-u*a*p+o*h*p,A=_*h*c-u*g*c-_*a*f+o*g*f+u*a*m-o*h*m,w=e*M+n*y+r*v+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return t[0]=M*C,t[1]=(g*f*s-h*m*s-g*r*d+n*m*d+h*r*p-n*f*p)*C,t[2]=(a*m*s-g*c*s+g*r*l-n*m*l-a*r*p+n*c*p)*C,t[3]=(h*c*s-a*f*s-h*r*l+n*f*l+a*r*d-n*c*d)*C,t[4]=y*C,t[5]=(u*m*s-_*f*s+_*r*d-e*m*d-u*r*p+e*f*p)*C,t[6]=(_*c*s-o*m*s-_*r*l+e*m*l+o*r*p-e*c*p)*C,t[7]=(o*f*s-u*c*s+u*r*l-e*f*l-o*r*d+e*c*d)*C,t[8]=v*C,t[9]=(_*h*s-u*g*s-_*n*d+e*g*d+u*n*p-e*h*p)*C,t[10]=(o*g*s-_*a*s+_*n*l-e*g*l-o*n*p+e*a*p)*C,t[11]=(u*a*s-o*h*s-u*n*l+e*h*l+o*n*d-e*a*d)*C,t[12]=A*C,t[13]=(u*g*r-_*h*r+_*n*f-e*g*f-u*n*m+e*h*m)*C,t[14]=(_*a*r-o*g*r-_*n*c+e*g*c+o*n*m-e*a*m)*C,t[15]=(o*h*r-u*a*r+u*n*c-e*h*c-o*n*f+e*a*f)*C,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,h=a+a,f=s*l,d=s*u,_=s*h,g=o*u,m=o*h,p=a*h,M=c*l,y=c*u,v=c*h,A=n.x,w=n.y,C=n.z;return r[0]=(1-(g+p))*A,r[1]=(d+v)*A,r[2]=(_-y)*A,r[3]=0,r[4]=(d-v)*w,r[5]=(1-(f+p))*w,r[6]=(m+M)*w,r[7]=0,r[8]=(_+y)*C,r[9]=(m-M)*C,r[10]=(1-(f+g))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=sr.set(r[0],r[1],r[2]).length();const o=sr.set(r[4],r[5],r[6]).length(),a=sr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],En.copy(this);const l=1/s,u=1/o,h=1/a;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=h,En.elements[9]*=h,En.elements[10]*=h,e.setFromRotationMatrix(En),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Fn,c=!1){const l=this.elements,u=2*s/(e-t),h=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r);let _,g;if(c)_=s/(o-s),g=o*s/(o-s);else if(a===Fn)_=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Vo)_=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Fn,c=!1){const l=this.elements,u=2/(e-t),h=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r);let _,g;if(c)_=1/(o-s),g=o/(o-s);else if(a===Fn)_=-2/(o-s),g=-(o+s)/(o-s);else if(a===Vo)_=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=_,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const sr=new U,En=new pe,gm=new U(0,0,0),vm=new U(1,1,1),ci=new U,$s=new U,sn=new U,Au=new pe,Ru=new Yi;class Hn{constructor(t=0,e=0,n=0,r=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin($t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Au.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Au,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ru.setFromEuler(this),this.setFromQuaternion(Ru,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class kc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xm=0;const Cu=new U,or=new Yi,qn=new pe,Zs=new U,Zr=new U,ym=new U,Mm=new Yi,Pu=new U(1,0,0),Du=new U(0,1,0),Lu=new U(0,0,1),Iu={type:"added"},Sm={type:"removed"},ar={type:"childadded",child:null},Ta={type:"childremoved",child:null};class Le extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new U,e=new Hn,n=new Yi,r=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pe},normalMatrix:{value:new Yt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return or.setFromAxisAngle(t,e),this.quaternion.multiply(or),this}rotateOnWorldAxis(t,e){return or.setFromAxisAngle(t,e),this.quaternion.premultiply(or),this}rotateX(t){return this.rotateOnAxis(Pu,t)}rotateY(t){return this.rotateOnAxis(Du,t)}rotateZ(t){return this.rotateOnAxis(Lu,t)}translateOnAxis(t,e){return Cu.copy(t).applyQuaternion(this.quaternion),this.position.add(Cu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pu,t)}translateY(t){return this.translateOnAxis(Du,t)}translateZ(t){return this.translateOnAxis(Lu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zs.copy(t):Zs.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Zr,Zs,this.up):qn.lookAt(Zs,Zr,this.up),this.quaternion.setFromRotationMatrix(qn),r&&(qn.extractRotation(r.matrixWorld),or.setFromRotationMatrix(qn),this.quaternion.premultiply(or.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Iu),ar.child=t,this.dispatchEvent(ar),ar.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sm),Ta.child=t,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Iu),ar.child=t,this.dispatchEvent(ar),ar.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,t,ym),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,Mm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Le.DEFAULT_UP=new U(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new U,$n=new U,ba=new U,Zn=new U,lr=new U,cr=new U,Uu=new U,wa=new U,Aa=new U,Ra=new U,Ca=new be,Pa=new be,Da=new be;class ln{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Tn.subVectors(t,e),r.cross(Tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Tn.subVectors(r,e),$n.subVectors(n,e),ba.subVectors(t,e);const o=Tn.dot(Tn),a=Tn.dot($n),c=Tn.dot(ba),l=$n.dot($n),u=$n.dot(ba),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,_=(o*u-a*c)*f;return s.set(1-d-_,_,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,Zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Zn.x),c.addScaledVector(o,Zn.y),c.addScaledVector(a,Zn.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return Ca.setScalar(0),Pa.setScalar(0),Da.setScalar(0),Ca.fromBufferAttribute(t,e),Pa.fromBufferAttribute(t,n),Da.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Ca,s.x),o.addScaledVector(Pa,s.y),o.addScaledVector(Da,s.z),o}static isFrontFacing(t,e,n,r){return Tn.subVectors(n,e),$n.subVectors(t,e),Tn.cross($n).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Tn.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return ln.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;lr.subVectors(r,n),cr.subVectors(s,n),wa.subVectors(t,n);const c=lr.dot(wa),l=cr.dot(wa);if(c<=0&&l<=0)return e.copy(n);Aa.subVectors(t,r);const u=lr.dot(Aa),h=cr.dot(Aa);if(u>=0&&h<=u)return e.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(lr,o);Ra.subVectors(t,s);const d=lr.dot(Ra),_=cr.dot(Ra);if(_>=0&&d<=_)return e.copy(s);const g=d*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(cr,a);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return Uu.subVectors(s,r),a=(h-u)/(h-u+(d-_)),e.copy(r).addScaledVector(Uu,a);const p=1/(m+g+f);return o=g*p,a=f*p,e.copy(n).addScaledVector(lr,o).addScaledVector(cr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function La(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=an){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=te.workingColorSpace){if(t=Bc(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=La(o,s,t+1/3),this.g=La(o,s,t),this.b=La(o,s,t-1/3)}return te.colorSpaceToWorking(this,r),this}setStyle(t,e=an){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=an){const n=Ef[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=br(t.r),this.g=br(t.g),this.b=br(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=an){return te.workingToColorSpace(ze.copy(this),t),Math.round($t(ze.r*255,0,255))*65536+Math.round($t(ze.g*255,0,255))*256+Math.round($t(ze.b*255,0,255))}getHexString(t=an){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(ze.copy(this),e);const n=ze.r,r=ze.g,s=ze.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=an){te.workingToColorSpace(ze.copy(this),t);const e=ze.r,n=ze.g,r=ze.b;return t!==an?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+e,ui.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ui),t.getHSL(Ks);const n=us(ui.h,Ks.h,e),r=us(ui.s,Ks.s,e),s=us(ui.l,Ks.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new Gt;Gt.NAMES=Ef;let Em=0;class Ti extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=zn(),this.name="",this.type="Material",this.blending=_i,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hl,this.blendDst=fl,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hl&&(n.blendSrc=this.blendSrc),this.blendDst!==fl&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==tr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==tr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Jn extends Ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new U,js=new dt;let Tm=0;class Ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jl,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)js.fromBufferAttribute(this,e),js.applyMatrix3(t),this.setXY(e,js.x,js.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),r=ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),r=ie(r,this.array),s=ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jl&&(t.usage=this.usage),t}}class Tf extends Ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class bf extends Ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class _e extends Ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let bm=0;const pn=new pe,Ia=new Le,ur=new U,on=new Ns,Kr=new Ns,Ne=new U;class Ae extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mf(t)?bf:Tf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Yt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return Ia.lookAt(t),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _e(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Kr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(on.min,Kr.min),on.expandByPoint(Ne),Ne.addVectors(on.max,Kr.max),on.expandByPoint(Ne)):(on.expandByPoint(Kr.min),on.expandByPoint(Kr.max))}on.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Ne.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ne));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ne.fromBufferAttribute(a,l),c&&(ur.fromBufferAttribute(t,l),Ne.add(ur)),r=Math.max(r,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new U,c[D]=new U;const l=new U,u=new U,h=new U,f=new dt,d=new dt,_=new dt,g=new U,m=new U;function p(D,S,E){l.fromBufferAttribute(n,D),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,E),f.fromBufferAttribute(s,D),d.fromBufferAttribute(s,S),_.fromBufferAttribute(s,E),u.sub(l),h.sub(l),d.sub(f),_.sub(f);const P=1/(d.x*_.y-_.x*d.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(P),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(P),a[D].add(g),a[S].add(g),a[E].add(g),c[D].add(m),c[S].add(m),c[E].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let D=0,S=M.length;D<S;++D){const E=M[D],P=E.start,O=E.count;for(let B=P,H=P+O;B<H;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const y=new U,v=new U,A=new U,w=new U;function C(D){A.fromBufferAttribute(r,D),w.copy(A);const S=a[D];y.copy(S),y.sub(A.multiplyScalar(A.dot(S))).normalize(),v.crossVectors(w,S);const P=v.dot(c[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,P)}for(let D=0,S=M.length;D<S;++D){const E=M[D],P=E.start,O=E.count;for(let B=P,H=P+O;B<H;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new U,s=new U,o=new U,a=new U,c=new U,l=new U,u=new U,h=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?d=c[g]*a.data.stride+a.offset:d=c[g]*u;for(let p=0;p<u;p++)f[_++]=l[d++]}return new Ze(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nu=new pe,Di=new Os,Js=new Fs,Fu=new U,Qs=new U,to=new U,eo=new U,Ua=new U,no=new U,Ou=new U,io=new U;class De extends Le{constructor(t=new Ae,e=new Jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){no.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(Ua.fromBufferAttribute(h,t),o?no.addScaledVector(Ua,u):no.addScaledVector(Ua.sub(e),u))}e.add(no)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(s),Di.copy(t.ray).recast(t.near),!(Js.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Js,Fu)===null||Di.origin.distanceToSquared(Fu)>(t.far-t.near)**2))&&(Nu.copy(s).invert(),Di.copy(t.ray).applyMatrix4(Nu),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Di)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,A=y;v<A;v+=3){const w=a.getX(v),C=a.getX(v+1),D=a.getX(v+2);r=ro(this,p,t,n,l,u,h,w,C,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const M=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);r=ro(this,o,t,n,l,u,h,M,y,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,A=y;v<A;v+=3){const w=v,C=v+1,D=v+2;r=ro(this,p,t,n,l,u,h,w,C,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const M=m,y=m+1,v=m+2;r=ro(this,o,t,n,l,u,h,M,y,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function wm(i,t,e,n,r,s,o,a){let c;if(t.side===tn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===xi,a),c===null)return null;io.copy(a),io.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(io);return l<e.near||l>e.far?null:{distance:l,point:io.clone(),object:i}}function ro(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,Qs),i.getVertexPosition(c,to),i.getVertexPosition(l,eo);const u=wm(i,t,e,n,Qs,to,eo,Ou);if(u){const h=new U;ln.getBarycoord(Ou,Qs,to,eo,h),r&&(u.uv=ln.getInterpolatedAttribute(r,a,c,l,h,new dt)),s&&(u.uv1=ln.getInterpolatedAttribute(s,a,c,l,h,new dt)),o&&(u.normal=ln.getInterpolatedAttribute(o,a,c,l,h,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new U,materialIndex:0};ln.getNormal(Qs,to,eo,f.normal),u.face=f,u.barycoord=h}return u}class Bs extends Ae{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,r,o,2),_("x","z","y",1,-1,t,n,-e,r,o,3),_("x","y","z",1,-1,t,e,n,r,s,4),_("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(h,2));function _(g,m,p,M,y,v,A,w,C,D,S){const E=v/C,P=A/D,O=v/2,B=A/2,H=w/2,L=C+1,z=D+1;let it=0,X=0;const pt=new U;for(let Et=0;Et<z;Et++){const bt=Et*P-B;for(let Ot=0;Ot<L;Ot++){const Wt=Ot*E-O;pt[g]=Wt*M,pt[m]=bt*y,pt[p]=H,l.push(pt.x,pt.y,pt.z),pt[g]=0,pt[m]=0,pt[p]=w>0?1:-1,u.push(pt.x,pt.y,pt.z),h.push(Ot/C),h.push(1-Et/D),it+=1}}for(let Et=0;Et<D;Et++)for(let bt=0;bt<C;bt++){const Ot=f+bt+L*Et,Wt=f+bt+L*(Et+1),Zt=f+(bt+1)+L*(Et+1),rt=f+(bt+1)+L*Et;c.push(Ot,Wt,rt),c.push(Wt,Zt,rt),X+=6}a.addGroup(d,X,S),d+=X,f+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Dr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Xe(i){const t={};for(let e=0;e<i.length;e++){const n=Dr(i[e]);for(const r in n)t[r]=n[r]}return t}function Am(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Rm={clone:Dr,merge:Xe};var Cm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends Ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cm,this.fragmentShader=Pm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Dr(t.uniforms),this.uniformsGroups=Am(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Af extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new U,Bu=new dt,zu=new dt;class gn extends Af{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hi.x,hi.y).multiplyScalar(-t/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-t/hi.z)}getViewSize(t,e){return this.getViewBounds(t,Bu,zu),e.subVectors(zu,Bu)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Tr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const hr=-90,fr=1;class Dm extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(hr,fr,t,e);r.layers=this.layers,this.add(r);const s=new gn(hr,fr,t,e);s.layers=this.layers,this.add(s);const o=new gn(hr,fr,t,e);o.layers=this.layers,this.add(o);const a=new gn(hr,fr,t,e);a.layers=this.layers,this.add(a);const c=new gn(hr,fr,t,e);c.layers=this.layers,this.add(c);const l=new gn(hr,fr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Rf extends ke{constructor(t=[],e=Rr,n,r,s,o,a,c,l,u){super(t,e,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lm extends qi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Rf(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Bs(5,5,5),s=new ii({name:"CubemapFromEquirect",uniforms:Dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:mi});s.uniforms.tEquirect.value=e;const o=new De(r,s),a=e.minFilter;return e.minFilter===ki&&(e.minFilter=vn),new Dm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}class yr extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Im={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;l.inputState.pinching&&f>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Im)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new yr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Hc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new Hc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Um extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Nm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=jl,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const We=new U;class Go{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=bn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),r=ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),r=ie(r,this.array),s=ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Go(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Io extends Ti{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let dr;const jr=new U,pr=new U,mr=new U,_r=new dt,Jr=new dt,Cf=new pe,so=new U,Qr=new U,oo=new U,ku=new dt,Fa=new dt,Hu=new dt;class Oa extends Le{constructor(t=new Io){if(super(),this.isSprite=!0,this.type="Sprite",dr===void 0){dr=new Ae;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Nm(e,5);dr.setIndex([0,1,2,0,2,3]),dr.setAttribute("position",new Go(n,3,0,!1)),dr.setAttribute("uv",new Go(n,2,3,!1))}this.geometry=dr,this.material=t,this.center=new dt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),pr.setFromMatrixScale(this.matrixWorld),Cf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),mr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&pr.multiplyScalar(-mr.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;ao(so.set(-.5,-.5,0),mr,o,pr,r,s),ao(Qr.set(.5,-.5,0),mr,o,pr,r,s),ao(oo.set(.5,.5,0),mr,o,pr,r,s),ku.set(0,0),Fa.set(1,0),Hu.set(1,1);let a=t.ray.intersectTriangle(so,Qr,oo,!1,jr);if(a===null&&(ao(Qr.set(-.5,.5,0),mr,o,pr,r,s),Fa.set(0,1),a=t.ray.intersectTriangle(so,oo,Qr,!1,jr),a===null))return;const c=t.ray.origin.distanceTo(jr);c<t.near||c>t.far||e.push({distance:c,point:jr.clone(),uv:ln.getInterpolation(jr,so,Qr,oo,ku,Fa,Hu,new dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ao(i,t,e,n,r,s){_r.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Jr.x=s*_r.x-r*_r.y,Jr.y=r*_r.x+s*_r.y):Jr.copy(_r),i.copy(t),i.x+=Jr.x,i.y+=Jr.y,i.applyMatrix4(Cf)}const Ba=new U,Fm=new U,Om=new Yt;class fi{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Ba.subVectors(n,e).cross(Fm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ba),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Om.getNormalMatrix(t),r=this.coplanarPoint(Ba).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new Fs,Bm=new dt(.5,.5),lo=new U;class Vc{constructor(t=new fi,e=new fi,n=new fi,r=new fi,s=new fi,o=new fi){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn,n=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],h=s[5],f=s[6],d=s[7],_=s[8],g=s[9],m=s[10],p=s[11],M=s[12],y=s[13],v=s[14],A=s[15];if(r[0].setComponents(l-o,d-u,p-_,A-M).normalize(),r[1].setComponents(l+o,d+u,p+_,A+M).normalize(),r[2].setComponents(l+a,d+h,p+g,A+y).normalize(),r[3].setComponents(l-a,d-h,p-g,A-y).normalize(),n)r[4].setComponents(c,f,m,v).normalize(),r[5].setComponents(l-c,d-f,p-m,A-v).normalize();else if(r[4].setComponents(l-c,d-f,p-m,A-v).normalize(),e===Fn)r[5].setComponents(l+c,d+f,p+m,A+v).normalize();else if(e===Vo)r[5].setComponents(c,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(t){Li.center.set(0,0,0);const e=Bm.distanceTo(t.center);return Li.radius=.7071067811865476+e,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(lo.x=r.normal.x>0?t.max.x:t.min.x,lo.y=r.normal.y>0?t.max.y:t.min.y,lo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(lo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hs extends Ti{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Wo=new U,Xo=new U,Vu=new pe,ts=new Os,co=new Fs,za=new U,Gu=new U;class Pf extends Le{constructor(t=new Ae,e=new hs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Wo.fromBufferAttribute(e,r-1),Xo.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Wo.distanceTo(Xo);t.setAttribute("lineDistance",new _e(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(r),co.radius+=s,t.ray.intersectsSphere(co)===!1)return;Vu.copy(r).invert(),ts.copy(t.ray).applyMatrix4(Vu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=l){const p=u.getX(g),M=u.getX(g+1),y=uo(this,t,ts,c,p,M,g);y&&e.push(y)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(d),p=uo(this,t,ts,c,g,m,_-1);p&&e.push(p)}}else{const d=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=l){const p=uo(this,t,ts,c,g,g+1,g);p&&e.push(p)}if(this.isLineLoop){const g=uo(this,t,ts,c,_-1,d,_-1);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function uo(i,t,e,n,r,s,o){const a=i.geometry.attributes.position;if(Wo.fromBufferAttribute(a,r),Xo.fromBufferAttribute(a,s),e.distanceSqToSegment(Wo,Xo,za,Gu)>n)return;za.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(za);if(!(l<t.near||l>t.far))return{distance:l,point:Gu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Wu=new U,Xu=new U;class Jl extends Pf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Wu.fromBufferAttribute(e,r),Xu.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Wu.distanceTo(Xu);t.setAttribute("lineDistance",new _e(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ql extends Ti{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Yu=new pe,tc=new Os,ho=new Fs,fo=new U;class qu extends Le{constructor(t=new Ae,e=new Ql){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(r),ho.radius+=s,t.ray.intersectsSphere(ho)===!1)return;Yu.copy(r).invert(),tc.copy(t.ray).applyMatrix4(Yu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let _=f,g=d;_<g;_++){const m=l.getX(_);fo.fromBufferAttribute(h,m),$u(fo,m,c,r,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=f,g=d;_<g;_++)fo.fromBufferAttribute(h,_),$u(fo,_,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function $u(i,t,e,n,r,s,o){const a=tc.distanceSqToPoint(i);if(a<e){const c=new U;tc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class es extends ke{constructor(t,e,n,r,s,o,a,c,l){super(t,e,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Df extends ke{constructor(t,e,n=Xi,r,s,o,a=Cn,c=Cn,l,u=Ms,h=1){if(u!==Ms&&u!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:h};super(f,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new zc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Lf extends ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Yo extends Ae{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],d=[];let _=0;const g=[],m=n/2;let p=0;M(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new _e(h,3)),this.setAttribute("normal",new _e(f,3)),this.setAttribute("uv",new _e(d,2));function M(){const v=new U,A=new U;let w=0;const C=(e-t)/n;for(let D=0;D<=s;D++){const S=[],E=D/s,P=E*(e-t)+t;for(let O=0;O<=r;O++){const B=O/r,H=B*c+a,L=Math.sin(H),z=Math.cos(H);A.x=P*L,A.y=-E*n+m,A.z=P*z,h.push(A.x,A.y,A.z),v.set(L,C,z).normalize(),f.push(v.x,v.y,v.z),d.push(B,1-E),S.push(_++)}g.push(S)}for(let D=0;D<r;D++)for(let S=0;S<s;S++){const E=g[S][D],P=g[S+1][D],O=g[S+1][D+1],B=g[S][D+1];(t>0||S!==0)&&(u.push(E,P,B),w+=3),(e>0||S!==s-1)&&(u.push(P,O,B),w+=3)}l.addGroup(p,w,0),p+=w}function y(v){const A=_,w=new dt,C=new U;let D=0;const S=v===!0?t:e,E=v===!0?1:-1;for(let O=1;O<=r;O++)h.push(0,m*E,0),f.push(0,E,0),d.push(.5,.5),_++;const P=_;for(let O=0;O<=r;O++){const H=O/r*c+a,L=Math.cos(H),z=Math.sin(H);C.x=S*z,C.y=m*E,C.z=S*L,h.push(C.x,C.y,C.z),f.push(0,E,0),w.x=L*.5+.5,w.y=z*.5*E+.5,d.push(w.x,w.y),_++}for(let O=0;O<r;O++){const B=A+O,H=P+O;v===!0?u.push(H,H+1,B):u.push(H+1,H,B),D+=3}l.addGroup(p,D,v===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const po=new U,mo=new U,ka=new U,_o=new ln;class zm extends Ae{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(Tr*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let _=0;_<c;_+=3){o?(l[0]=o.getX(_),l[1]=o.getX(_+1),l[2]=o.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);const{a:g,b:m,c:p}=_o;if(g.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),_o.getNormal(ka),h[0]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let M=0;M<3;M++){const y=(M+1)%3,v=h[M],A=h[y],w=_o[u[M]],C=_o[u[y]],D=`${v}_${A}`,S=`${A}_${v}`;S in f&&f[S]?(ka.dot(f[S].normal)<=s&&(d.push(w.x,w.y,w.z),d.push(C.x,C.y,C.z)),f[S]=null):D in f||(f[D]={index0:l[M],index1:l[y],normal:ka.clone()})}}for(const _ in f)if(f[_]){const{index0:g,index1:m}=f[_];po.fromBufferAttribute(a,g),mo.fromBufferAttribute(a,m),d.push(po.x,po.y,po.z),d.push(mo.x,mo.y,mo.z)}this.setAttribute("position",new _e(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Gn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);const u=n[r],f=n[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new dt:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new U,r=[],s=[],o=[],a=new U,c=new pe;for(let d=0;d<=t;d++){const _=d/t;r[d]=this.getTangentAt(_,new U)}s[0]=new U,o[0]=new U;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos($t(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(a,_))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos($t(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let _=1;_<=t;_++)s[_].applyMatrix4(c.makeRotationAxis(r[_],d*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Gc extends Gn{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new dt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class km extends Gc{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Wc(){let i=0,t=0,e=0,n=0;function r(s,o,a,c){i=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let f=(o-s)/l-(a-s)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const go=new U,Ha=new Wc,Va=new Wc,Ga=new Wc;class Hm extends Gn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new U){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(go.subVectors(r[0],r[1]).add(r[0]),l=go);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(go.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=go),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),Ha.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,_,g,m),Va.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,_,g,m),Ga.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,_,g,m)}else this.curveType==="catmullrom"&&(Ha.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Va.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Ga.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(Ha.calc(c),Va.calc(c),Ga.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new U().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Zu(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,c=i*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*i+e}function Vm(i,t){const e=1-i;return e*e*t}function Gm(i,t){return 2*(1-i)*i*t}function Wm(i,t){return i*i*t}function fs(i,t,e,n){return Vm(i,t)+Gm(i,e)+Wm(i,n)}function Xm(i,t){const e=1-i;return e*e*e*t}function Ym(i,t){const e=1-i;return 3*e*e*i*t}function qm(i,t){return 3*(1-i)*i*i*t}function $m(i,t){return i*i*i*t}function ds(i,t,e,n,r){return Xm(i,t)+Ym(i,e)+qm(i,n)+$m(i,r)}class If extends Gn{constructor(t=new dt,e=new dt,n=new dt,r=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new dt){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ds(t,r.x,s.x,o.x,a.x),ds(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Zm extends Gn{constructor(t=new U,e=new U,n=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new U){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ds(t,r.x,s.x,o.x,a.x),ds(t,r.y,s.y,o.y,a.y),ds(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Uf extends Gn{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Km extends Gn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nf extends Gn{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(fs(t,r.x,s.x,o.x),fs(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ff extends Gn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(fs(t,r.x,s.x,o.x),fs(t,r.y,s.y,o.y),fs(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Of extends Gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(Zu(a,c.x,l.x,u.x,h.x),Zu(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new dt().fromArray(r))}return this}}var ec=Object.freeze({__proto__:null,ArcCurve:km,CatmullRomCurve3:Hm,CubicBezierCurve:If,CubicBezierCurve3:Zm,EllipseCurve:Gc,LineCurve:Uf,LineCurve3:Km,QuadraticBezierCurve:Nf,QuadraticBezierCurve3:Ff,SplineCurve:Of});class jm extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ec[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new ec[r.type]().fromJSON(r))}return this}}class Ku extends jm{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Uf(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Nf(this.currentPoint.clone(),new dt(t,e),new dt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){const a=new If(this.currentPoint.clone(),new dt(t,e),new dt(n,r),new dt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Of(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,r,s,o,a,c),this}absellipse(t,e,n,r,s,o,a,c){const l=new Gc(t,e,n,r,s,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class qo extends Ku{constructor(t){super(t),this.uuid=zn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Ku().fromJSON(r))}return this}}function Jm(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=Bf(i,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(n&&(s=i_(i,t,s,e)),i.length>80*e){a=1/0,c=1/0;let u=-1/0,h=-1/0;for(let f=e;f<r;f+=e){const d=i[f],_=i[f+1];d<a&&(a=d),_<c&&(c=_),d>u&&(u=d),_>h&&(h=_)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return ws(s,o,e,a,c,l,0),o}function Bf(i,t,e,n,r){let s;if(r===p_(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=ju(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=ju(o/n|0,i[o],i[o+1],s);return s&&Lr(s,s.next)&&(Rs(s),s=s.next),s}function $i(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Lr(e,e.next)||Se(e.prev,e,e.next)===0)){if(Rs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ws(i,t,e,n,r,s,o){if(!i)return;!o&&s&&l_(i,n,r,s);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(s?t_(i,n,r,s):Qm(i)){t.push(c.i,i.i,l.i),Rs(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=e_($i(i),t),ws(i,t,e,n,r,s,2)):o===2&&n_(i,t,e,n,r,s):ws($i(i),t,e,n,r,s,1);break}}}function Qm(i){const t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;const r=t.x,s=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=Math.min(r,s,o),h=Math.min(a,c,l),f=Math.max(r,s,o),d=Math.max(a,c,l);let _=n.next;for(;_!==t;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=d&&rs(r,a,s,c,o,l,_.x,_.y)&&Se(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function t_(i,t,e,n){const r=i.prev,s=i,o=i.next;if(Se(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,u=r.y,h=s.y,f=o.y,d=Math.min(a,c,l),_=Math.min(u,h,f),g=Math.max(a,c,l),m=Math.max(u,h,f),p=nc(d,_,t,e,n),M=nc(g,m,t,e,n);let y=i.prevZ,v=i.nextZ;for(;y&&y.z>=p&&v&&v.z<=M;){if(y.x>=d&&y.x<=g&&y.y>=_&&y.y<=m&&y!==r&&y!==o&&rs(a,u,c,h,l,f,y.x,y.y)&&Se(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=d&&v.x<=g&&v.y>=_&&v.y<=m&&v!==r&&v!==o&&rs(a,u,c,h,l,f,v.x,v.y)&&Se(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=g&&y.y>=_&&y.y<=m&&y!==r&&y!==o&&rs(a,u,c,h,l,f,y.x,y.y)&&Se(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=g&&v.y>=_&&v.y<=m&&v!==r&&v!==o&&rs(a,u,c,h,l,f,v.x,v.y)&&Se(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function e_(i,t){let e=i;do{const n=e.prev,r=e.next.next;!Lr(n,r)&&kf(n,e,e.next,r)&&As(n,r)&&As(r,n)&&(t.push(n.i,e.i,r.i),Rs(e),Rs(e.next),e=i=r),e=e.next}while(e!==i);return $i(e)}function n_(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&h_(o,a)){let c=Hf(o,a);o=$i(o,o.next),c=$i(c,c.next),ws(o,t,e,n,r,s,0),ws(c,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function i_(i,t,e,n){const r=[];for(let s=0,o=t.length;s<o;s++){const a=t[s]*n,c=s<o-1?t[s+1]*n:i.length,l=Bf(i,a,c,n,!1);l===l.next&&(l.steiner=!0),r.push(u_(l))}r.sort(r_);for(let s=0;s<r.length;s++)e=s_(r[s],e);return e}function r_(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function s_(i,t){const e=o_(i,t);if(!e)return t;const n=Hf(e,i);return $i(n,n.next),$i(e,e.next)}function o_(i,t){let e=t;const n=i.x,r=i.y;let s=-1/0,o;if(Lr(i,e))return e;do{if(Lr(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const h=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>s&&(s=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&zf(r<l?n:s,r,c,l,r<l?s:n,r,e.x,e.y)){const h=Math.abs(r-e.y)/(n-e.x);As(e,i)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&a_(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function a_(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function l_(i,t,e,n){let r=i;do r.z===0&&(r.z=nc(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,c_(r)}function c_(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function nc(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function u_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function zf(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function rs(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&zf(i,t,e,n,r,s,o,a)}function h_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!f_(i,t)&&(As(i,t)&&As(t,i)&&d_(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||Lr(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Lr(i,t){return i.x===t.x&&i.y===t.y}function kf(i,t,e,n){const r=xo(Se(i,t,e)),s=xo(Se(i,t,n)),o=xo(Se(e,n,i)),a=xo(Se(e,n,t));return!!(r!==s&&o!==a||r===0&&vo(i,e,t)||s===0&&vo(i,n,t)||o===0&&vo(e,i,n)||a===0&&vo(e,t,n))}function vo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function xo(i){return i>0?1:i<0?-1:0}function f_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&kf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function As(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function d_(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Hf(i,t){const e=ic(i.i,i.x,i.y),n=ic(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function ju(i,t,e,n){const r=ic(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Rs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ic(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function p_(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class m_{static triangulate(t,e,n=2){return Jm(t,e,n)}}class ei{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return ei.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];Ju(t),Qu(n,t);let o=t.length;e.forEach(Ju);for(let c=0;c<e.length;c++)r.push(o),o+=e[c].length,Qu(n,e[c]);const a=m_.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function Ju(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Qu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class $o extends Ae{constructor(t=new qo([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new _e(r,3)),this.setAttribute("uv",new _e(s,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:d-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:__;let y,v=!1,A,w,C,D;p&&(y=p.getSpacedPoints(u),v=!0,f=!1,A=p.computeFrenetFrames(u,!1),w=new U,C=new U,D=new U),f||(m=0,d=0,_=0,g=0);const S=a.extractPoints(l);let E=S.shape;const P=S.holes;if(!ei.isClockWise(E)){E=E.reverse();for(let Y=0,j=P.length;Y<j;Y++){const W=P[Y];ei.isClockWise(W)&&(P[Y]=W.reverse())}}function B(Y){const W=10000000000000001e-36;let $=Y[0];for(let st=1;st<=Y.length;st++){const et=st%Y.length,Q=Y[et],Mt=Q.x-$.x,at=Q.y-$.y,T=Mt*Mt+at*at,x=Math.max(Math.abs(Q.x),Math.abs(Q.y),Math.abs($.x),Math.abs($.y)),N=W*x*x;if(T<=N){Y.splice(et,1),st--;continue}$=Q}}B(E),P.forEach(B);const H=P.length,L=E;for(let Y=0;Y<H;Y++){const j=P[Y];E=E.concat(j)}function z(Y,j,W){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),Y.clone().addScaledVector(j,W)}const it=E.length;function X(Y,j,W){let $,st,et;const Q=Y.x-j.x,Mt=Y.y-j.y,at=W.x-Y.x,T=W.y-Y.y,x=Q*Q+Mt*Mt,N=Q*T-Mt*at;if(Math.abs(N)>Number.EPSILON){const G=Math.sqrt(x),tt=Math.sqrt(at*at+T*T),q=j.x-Mt/G,St=j.y+Q/G,ht=W.x-T/tt,mt=W.y+at/tt,Tt=((ht-q)*T-(mt-St)*at)/(Q*T-Mt*at);$=q+Q*Tt-Y.x,st=St+Mt*Tt-Y.y;const ut=$*$+st*st;if(ut<=2)return new dt($,st);et=Math.sqrt(ut/2)}else{let G=!1;Q>Number.EPSILON?at>Number.EPSILON&&(G=!0):Q<-Number.EPSILON?at<-Number.EPSILON&&(G=!0):Math.sign(Mt)===Math.sign(T)&&(G=!0),G?($=-Mt,st=Q,et=Math.sqrt(x)):($=Q,st=Mt,et=Math.sqrt(x/2))}return new dt($/et,st/et)}const pt=[];for(let Y=0,j=L.length,W=j-1,$=Y+1;Y<j;Y++,W++,$++)W===j&&(W=0),$===j&&($=0),pt[Y]=X(L[Y],L[W],L[$]);const Et=[];let bt,Ot=pt.concat();for(let Y=0,j=H;Y<j;Y++){const W=P[Y];bt=[];for(let $=0,st=W.length,et=st-1,Q=$+1;$<st;$++,et++,Q++)et===st&&(et=0),Q===st&&(Q=0),bt[$]=X(W[$],W[et],W[Q]);Et.push(bt),Ot=Ot.concat(bt)}let Wt;if(m===0)Wt=ei.triangulateShape(L,P);else{const Y=[],j=[];for(let W=0;W<m;W++){const $=W/m,st=d*Math.cos($*Math.PI/2),et=_*Math.sin($*Math.PI/2)+g;for(let Q=0,Mt=L.length;Q<Mt;Q++){const at=z(L[Q],pt[Q],et);ft(at.x,at.y,-st),$===0&&Y.push(at)}for(let Q=0,Mt=H;Q<Mt;Q++){const at=P[Q];bt=Et[Q];const T=[];for(let x=0,N=at.length;x<N;x++){const G=z(at[x],bt[x],et);ft(G.x,G.y,-st),$===0&&T.push(G)}$===0&&j.push(T)}}Wt=ei.triangulateShape(Y,j)}const Zt=Wt.length,rt=_+g;for(let Y=0;Y<it;Y++){const j=f?z(E[Y],Ot[Y],rt):E[Y];v?(C.copy(A.normals[0]).multiplyScalar(j.x),w.copy(A.binormals[0]).multiplyScalar(j.y),D.copy(y[0]).add(C).add(w),ft(D.x,D.y,D.z)):ft(j.x,j.y,0)}for(let Y=1;Y<=u;Y++)for(let j=0;j<it;j++){const W=f?z(E[j],Ot[j],rt):E[j];v?(C.copy(A.normals[Y]).multiplyScalar(W.x),w.copy(A.binormals[Y]).multiplyScalar(W.y),D.copy(y[Y]).add(C).add(w),ft(D.x,D.y,D.z)):ft(W.x,W.y,h/u*Y)}for(let Y=m-1;Y>=0;Y--){const j=Y/m,W=d*Math.cos(j*Math.PI/2),$=_*Math.sin(j*Math.PI/2)+g;for(let st=0,et=L.length;st<et;st++){const Q=z(L[st],pt[st],$);ft(Q.x,Q.y,h+W)}for(let st=0,et=P.length;st<et;st++){const Q=P[st];bt=Et[st];for(let Mt=0,at=Q.length;Mt<at;Mt++){const T=z(Q[Mt],bt[Mt],$);v?ft(T.x,T.y+y[u-1].y,y[u-1].x+W):ft(T.x,T.y,h+W)}}}F(),Z();function F(){const Y=r.length/3;if(f){let j=0,W=it*j;for(let $=0;$<Zt;$++){const st=Wt[$];ot(st[2]+W,st[1]+W,st[0]+W)}j=u+m*2,W=it*j;for(let $=0;$<Zt;$++){const st=Wt[$];ot(st[0]+W,st[1]+W,st[2]+W)}}else{for(let j=0;j<Zt;j++){const W=Wt[j];ot(W[2],W[1],W[0])}for(let j=0;j<Zt;j++){const W=Wt[j];ot(W[0]+it*u,W[1]+it*u,W[2]+it*u)}}n.addGroup(Y,r.length/3-Y,0)}function Z(){const Y=r.length/3;let j=0;nt(L,j),j+=L.length;for(let W=0,$=P.length;W<$;W++){const st=P[W];nt(st,j),j+=st.length}n.addGroup(Y,r.length/3-Y,1)}function nt(Y,j){let W=Y.length;for(;--W>=0;){const $=W;let st=W-1;st<0&&(st=Y.length-1);for(let et=0,Q=u+m*2;et<Q;et++){const Mt=it*et,at=it*(et+1),T=j+$+Mt,x=j+st+Mt,N=j+st+at,G=j+$+at;yt(T,x,N,G)}}}function ft(Y,j,W){c.push(Y),c.push(j),c.push(W)}function ot(Y,j,W){lt(Y),lt(j),lt(W);const $=r.length/3,st=M.generateTopUV(n,r,$-3,$-2,$-1);R(st[0]),R(st[1]),R(st[2])}function yt(Y,j,W,$){lt(Y),lt(j),lt($),lt(j),lt(W),lt($);const st=r.length/3,et=M.generateSideWallUV(n,r,st-6,st-3,st-2,st-1);R(et[0]),R(et[1]),R(et[3]),R(et[1]),R(et[2]),R(et[3])}function lt(Y){r.push(c[Y*3+0]),r.push(c[Y*3+1]),r.push(c[Y*3+2])}function R(Y){s.push(Y.x),s.push(Y.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return g_(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new ec[r.type]().fromJSON(r)),new $o(n,t.options)}}const __={generateTopUV:function(i,t,e,n,r){const s=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[r*3],u=t[r*3+1];return[new dt(s,o),new dt(a,c),new dt(l,u)]},generateSideWallUV:function(i,t,e,n,r,s){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[r*3],d=t[r*3+1],_=t[r*3+2],g=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new dt(o,1-c),new dt(l,1-h),new dt(f,1-_),new dt(g,1-p)]:[new dt(a,1-c),new dt(u,1-h),new dt(d,1-_),new dt(m,1-p)]}};function g_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Hi extends Ae{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,h=t/a,f=e/c,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const M=p*f-o;for(let y=0;y<l;y++){const v=y*h-s;_.push(v,-M,0),g.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const y=M+l*p,v=M+l*(p+1),A=M+1+l*(p+1),w=M+1+l*p;d.push(y,v,w),d.push(v,A,w)}this.setIndex(d),this.setAttribute("position",new _e(_,3)),this.setAttribute("normal",new _e(g,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hi(t.width,t.height,t.widthSegments,t.heightSegments)}}class Zo extends Ae{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],c=[],l=[],u=[];let h=t;const f=(e-t)/r,d=new U,_=new dt;for(let g=0;g<=r;g++){for(let m=0;m<=n;m++){const p=s+m/n*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),_.x=(d.x/e+1)/2,_.y=(d.y/e+1)/2,u.push(_.x,_.y)}h+=f}for(let g=0;g<r;g++){const m=g*(n+1);for(let p=0;p<n;p++){const M=p+m,y=M,v=M+n+1,A=M+n+2,w=M+1;a.push(y,v,w),a.push(v,A,w)}}this.setIndex(a),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(l,3)),this.setAttribute("uv",new _e(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Xc extends Ae{constructor(t=new qo([new dt(0,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new _e(r,3)),this.setAttribute("normal",new _e(s,3)),this.setAttribute("uv",new _e(o,2));function l(u){const h=r.length/3,f=u.extractPoints(e);let d=f.shape;const _=f.holes;ei.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=_.length;m<p;m++){const M=_[m];ei.isClockWise(M)===!0&&(_[m]=M.reverse())}const g=ei.triangulateShape(d,_);for(let m=0,p=_.length;m<p;m++){const M=_[m];d=d.concat(M)}for(let m=0,p=d.length;m<p;m++){const M=d[m];r.push(M.x,M.y,0),s.push(0,0,1),o.push(M.x,M.y)}for(let m=0,p=g.length;m<p;m++){const M=g[m],y=M[0]+h,v=M[1]+h,A=M[2]+h;n.push(y,v,A),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return v_(e,t)}static fromJSON(t,e){const n=[];for(let r=0,s=t.shapes.length;r<s;r++){const o=e[t.shapes[r]];n.push(o)}return new Xc(n,t.curveSegments)}}function v_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const r=i[e];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t}class Wa extends Ti{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xf,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class x_ extends Ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Np,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class y_ extends Ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Xa={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class M_{constructor(t,e,n){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],_=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const S_=new M_;class Yc{constructor(t){this.manager=t!==void 0?t:S_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Yc.DEFAULT_MATERIAL_NAME="__DEFAULT";const gr=new WeakMap;class E_ extends Yc{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Xa.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let h=gr.get(o);h===void 0&&(h=[],gr.set(o,h)),h.push({onLoad:e,onError:r})}return o}const a=Ts("img");function c(){u(),e&&e(this);const h=gr.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}gr.delete(this),s.manager.itemEnd(t)}function l(h){u(),r&&r(h),Xa.remove(`image:${t}`);const f=gr.get(this)||[];for(let d=0;d<f.length;d++){const _=f[d];_.onError&&_.onError(h)}gr.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Xa.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}}class th extends Yc{constructor(t){super(t)}load(t,e,n,r){const s=new ke,o=new E_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class Vf extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ya=new pe,eh=new U,nh=new U;class T_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vc,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;eh.setFromMatrixPosition(t.matrixWorld),e.position.copy(eh),nh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nh),e.updateMatrixWorld(),Ya.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ya,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ya)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Gf extends Af{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class b_ extends T_{constructor(){super(new Gf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class w_ extends Vf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new b_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class A_ extends Vf{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class R_ extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const ih=new pe;class C_{constructor(t,e,n=0,r=1/0){this.ray=new Os(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new kc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ih.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ih),this}intersectObject(t,e=!0,n=[]){return rc(t,this,n,e),n.sort(rh),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)rc(t[r],this,n,e);return n.sort(rh),n}}function rh(i,t){return i.distance-t.distance}function rc(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)rc(s[o],t,e,!0)}}class sh{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=$t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos($t(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class P_ extends Jl{constructor(t=10,e=10,n=4473924,r=8947848){n=new Gt(n),r=new Gt(r);const s=e/2,o=t/e,a=t/2,c=[],l=[];for(let f=0,d=0,_=-a;f<=e;f++,_+=o){c.push(-a,0,_,a,0,_),c.push(_,0,-a,_,0,a);const g=f===s?n:r;g.toArray(l,d),d+=3,g.toArray(l,d),d+=3,g.toArray(l,d),d+=3,g.toArray(l,d),d+=3}const u=new Ae;u.setAttribute("position",new _e(c,3)),u.setAttribute("color",new _e(l,3));const h=new hs({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class D_ extends ji{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function oh(i,t,e,n){const r=L_(n);switch(e){case mf:return i*t;case gf:return i*t/r.components*r.byteLength;case Nc:return i*t/r.components*r.byteLength;case vf:return i*t*2/r.components*r.byteLength;case Fc:return i*t*2/r.components*r.byteLength;case _f:return i*t*3/r.components*r.byteLength;case Rn:return i*t*4/r.components*r.byteLength;case Oc:return i*t*4/r.components*r.byteLength;case Co:case Po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Do:case Lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tl:case wl:return Math.max(i,16)*Math.max(t,8)/4;case El:case bl:return Math.max(i,8)*Math.max(t,8)/2;case Al:case Rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Cl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Il:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case zl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case kl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Gl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Wl:case Xl:case Yl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ql:case $l:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Zl:case Kl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function L_(i){switch(i){case kn:case hf:return{byteLength:1,components:1};case xs:case ff:case Us:return{byteLength:2,components:1};case Ic:case Uc:return{byteLength:2,components:4};case Xi:case Lc:case ti:return{byteLength:4,components:1};case df:case pf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wf(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function I_(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const g=h[d];i.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var U_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N_=`#ifdef USE_ALPHAHASH
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
#endif`,F_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,O_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,z_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,k_=`#ifdef USE_AOMAP
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
#endif`,H_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,V_=`#ifdef USE_BATCHING
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
#endif`,G_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,W_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,X_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Y_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,q_=`#ifdef USE_IRIDESCENCE
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
#endif`,$_=`#ifdef USE_BUMPMAP
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
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,K_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,j_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,J_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Q_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ng=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ig=`#define PI 3.141592653589793
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
} // validated`,rg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sg=`vec3 transformedNormal = objectNormal;
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
#endif`,og=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ag=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ug="gl_FragColor = linearToOutputTexel( gl_FragColor );",hg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fg=`#ifdef USE_ENVMAP
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
#endif`,dg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pg=`#ifdef USE_ENVMAP
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
#endif`,mg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_g=`#ifdef USE_ENVMAP
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
#endif`,gg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mg=`#ifdef USE_GRADIENTMAP
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
}`,Sg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Eg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bg=`uniform bool receiveShadow;
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
#endif`,wg=`#ifdef USE_ENVMAP
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
#endif`,Ag=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dg=`PhysicalMaterial material;
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
#endif`,Lg=`struct PhysicalMaterial {
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
}`,Ig=`
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
#endif`,Ug=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ng=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Og=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gg=`#if defined( USE_POINTS_UV )
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
#endif`,Wg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$g=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zg=`#ifdef USE_MORPHTARGETS
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
#endif`,Kg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,n0=`#ifdef USE_NORMALMAP
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
#endif`,i0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,c0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,h0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,v0=`float getShadowMask() {
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
}`,x0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,y0=`#ifdef USE_SKINNING
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
#endif`,M0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S0=`#ifdef USE_SKINNING
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
#endif`,E0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,A0=`#ifdef USE_TRANSMISSION
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
#endif`,R0=`#ifdef USE_TRANSMISSION
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
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const I0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U0=`uniform sampler2D t2D;
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
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`#include <common>
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
}`,k0=`#if DEPTH_PACKING == 3200
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
}`,H0=`#define DISTANCE
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
}`,V0=`#define DISTANCE
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
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`uniform float scale;
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
}`,Y0=`uniform vec3 diffuse;
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
}`,q0=`#include <common>
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
}`,$0=`uniform vec3 diffuse;
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
}`,Z0=`#define LAMBERT
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
}`,K0=`#define LAMBERT
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
}`,j0=`#define MATCAP
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
}`,J0=`#define MATCAP
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
}`,Q0=`#define NORMAL
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
}`,tv=`#define NORMAL
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
}`,ev=`#define PHONG
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
}`,nv=`#define PHONG
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
}`,iv=`#define STANDARD
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
}`,rv=`#define STANDARD
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
}`,sv=`#define TOON
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
}`,ov=`#define TOON
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
}`,av=`uniform float size;
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
}`,lv=`uniform vec3 diffuse;
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
}`,cv=`#include <common>
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
}`,uv=`uniform vec3 color;
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
}`,hv=`uniform float rotation;
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
}`,fv=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:U_,alphahash_pars_fragment:N_,alphamap_fragment:F_,alphamap_pars_fragment:O_,alphatest_fragment:B_,alphatest_pars_fragment:z_,aomap_fragment:k_,aomap_pars_fragment:H_,batching_pars_vertex:V_,batching_vertex:G_,begin_vertex:W_,beginnormal_vertex:X_,bsdfs:Y_,iridescence_fragment:q_,bumpmap_pars_fragment:$_,clipping_planes_fragment:Z_,clipping_planes_pars_fragment:K_,clipping_planes_pars_vertex:j_,clipping_planes_vertex:J_,color_fragment:Q_,color_pars_fragment:tg,color_pars_vertex:eg,color_vertex:ng,common:ig,cube_uv_reflection_fragment:rg,defaultnormal_vertex:sg,displacementmap_pars_vertex:og,displacementmap_vertex:ag,emissivemap_fragment:lg,emissivemap_pars_fragment:cg,colorspace_fragment:ug,colorspace_pars_fragment:hg,envmap_fragment:fg,envmap_common_pars_fragment:dg,envmap_pars_fragment:pg,envmap_pars_vertex:mg,envmap_physical_pars_fragment:wg,envmap_vertex:_g,fog_vertex:gg,fog_pars_vertex:vg,fog_fragment:xg,fog_pars_fragment:yg,gradientmap_pars_fragment:Mg,lightmap_pars_fragment:Sg,lights_lambert_fragment:Eg,lights_lambert_pars_fragment:Tg,lights_pars_begin:bg,lights_toon_fragment:Ag,lights_toon_pars_fragment:Rg,lights_phong_fragment:Cg,lights_phong_pars_fragment:Pg,lights_physical_fragment:Dg,lights_physical_pars_fragment:Lg,lights_fragment_begin:Ig,lights_fragment_maps:Ug,lights_fragment_end:Ng,logdepthbuf_fragment:Fg,logdepthbuf_pars_fragment:Og,logdepthbuf_pars_vertex:Bg,logdepthbuf_vertex:zg,map_fragment:kg,map_pars_fragment:Hg,map_particle_fragment:Vg,map_particle_pars_fragment:Gg,metalnessmap_fragment:Wg,metalnessmap_pars_fragment:Xg,morphinstance_vertex:Yg,morphcolor_vertex:qg,morphnormal_vertex:$g,morphtarget_pars_vertex:Zg,morphtarget_vertex:Kg,normal_fragment_begin:jg,normal_fragment_maps:Jg,normal_pars_fragment:Qg,normal_pars_vertex:t0,normal_vertex:e0,normalmap_pars_fragment:n0,clearcoat_normal_fragment_begin:i0,clearcoat_normal_fragment_maps:r0,clearcoat_pars_fragment:s0,iridescence_pars_fragment:o0,opaque_fragment:a0,packing:l0,premultiplied_alpha_fragment:c0,project_vertex:u0,dithering_fragment:h0,dithering_pars_fragment:f0,roughnessmap_fragment:d0,roughnessmap_pars_fragment:p0,shadowmap_pars_fragment:m0,shadowmap_pars_vertex:_0,shadowmap_vertex:g0,shadowmask_pars_fragment:v0,skinbase_vertex:x0,skinning_pars_vertex:y0,skinning_vertex:M0,skinnormal_vertex:S0,specularmap_fragment:E0,specularmap_pars_fragment:T0,tonemapping_fragment:b0,tonemapping_pars_fragment:w0,transmission_fragment:A0,transmission_pars_fragment:R0,uv_pars_fragment:C0,uv_pars_vertex:P0,uv_vertex:D0,worldpos_vertex:L0,background_vert:I0,background_frag:U0,backgroundCube_vert:N0,backgroundCube_frag:F0,cube_vert:O0,cube_frag:B0,depth_vert:z0,depth_frag:k0,distanceRGBA_vert:H0,distanceRGBA_frag:V0,equirect_vert:G0,equirect_frag:W0,linedashed_vert:X0,linedashed_frag:Y0,meshbasic_vert:q0,meshbasic_frag:$0,meshlambert_vert:Z0,meshlambert_frag:K0,meshmatcap_vert:j0,meshmatcap_frag:J0,meshnormal_vert:Q0,meshnormal_frag:tv,meshphong_vert:ev,meshphong_frag:nv,meshphysical_vert:iv,meshphysical_frag:rv,meshtoon_vert:sv,meshtoon_frag:ov,points_vert:av,points_frag:lv,shadow_vert:cv,shadow_frag:uv,sprite_vert:hv,sprite_frag:fv},Rt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},In={basic:{uniforms:Xe([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Xe([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Xe([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Xe([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Xe([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Xe([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Xe([Rt.points,Rt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Xe([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Xe([Rt.common,Rt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Xe([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Xe([Rt.sprite,Rt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Xe([Rt.common,Rt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Xe([Rt.lights,Rt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};In.physical={uniforms:Xe([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const yo={r:0,b:0,g:0},Ii=new Hn,dv=new pe;function pv(i,t,e,n,r,s,o){const a=new Gt(0);let c=s===!0?0:1,l,u,h=null,f=0,d=null;function _(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function g(y){let v=!1;const A=_(y);A===null?p(a,c):A&&A.isColor&&(p(A,1),v=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,v){const A=_(v);A&&(A.isCubeTexture||A.mapping===aa)?(u===void 0&&(u=new De(new Bs(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:Dr(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ii.copy(v.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(dv.makeRotationFromEuler(Ii)),u.material.toneMapped=te.getTransfer(A.colorSpace)!==se,(h!==A||f!==A.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=A,f=A.version,d=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new De(new Hi(2,2),new ii({name:"BackgroundMaterial",uniforms:Dr(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=te.getTransfer(A.colorSpace)!==se,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=A,f=A.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,v){y.getRGB(yo,wf(i)),n.buffers.color.setClear(yo.r,yo.g,yo.b,v,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:g,addToRenderList:m,dispose:M}}function mv(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(E,P,O,B,H){let L=!1;const z=h(B,O,P);s!==z&&(s=z,l(s.object)),L=d(E,B,O,H),L&&_(E,B,O,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(L||o)&&(o=!1,v(E,P,O,B),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(E){return i.bindVertexArray(E)}function u(E){return i.deleteVertexArray(E)}function h(E,P,O){const B=O.wireframe===!0;let H=n[E.id];H===void 0&&(H={},n[E.id]=H);let L=H[P.id];L===void 0&&(L={},H[P.id]=L);let z=L[B];return z===void 0&&(z=f(c()),L[B]=z),z}function f(E){const P=[],O=[],B=[];for(let H=0;H<e;H++)P[H]=0,O[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:B,object:E,attributes:{},index:null}}function d(E,P,O,B){const H=s.attributes,L=P.attributes;let z=0;const it=O.getAttributes();for(const X in it)if(it[X].location>=0){const Et=H[X];let bt=L[X];if(bt===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(bt=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(bt=E.instanceColor)),Et===void 0||Et.attribute!==bt||bt&&Et.data!==bt.data)return!0;z++}return s.attributesNum!==z||s.index!==B}function _(E,P,O,B){const H={},L=P.attributes;let z=0;const it=O.getAttributes();for(const X in it)if(it[X].location>=0){let Et=L[X];Et===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(Et=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(Et=E.instanceColor));const bt={};bt.attribute=Et,Et&&Et.data&&(bt.data=Et.data),H[X]=bt,z++}s.attributes=H,s.attributesNum=z,s.index=B}function g(){const E=s.newAttributes;for(let P=0,O=E.length;P<O;P++)E[P]=0}function m(E){p(E,0)}function p(E,P){const O=s.newAttributes,B=s.enabledAttributes,H=s.attributeDivisors;O[E]=1,B[E]===0&&(i.enableVertexAttribArray(E),B[E]=1),H[E]!==P&&(i.vertexAttribDivisor(E,P),H[E]=P)}function M(){const E=s.newAttributes,P=s.enabledAttributes;for(let O=0,B=P.length;O<B;O++)P[O]!==E[O]&&(i.disableVertexAttribArray(O),P[O]=0)}function y(E,P,O,B,H,L,z){z===!0?i.vertexAttribIPointer(E,P,O,H,L):i.vertexAttribPointer(E,P,O,B,H,L)}function v(E,P,O,B){g();const H=B.attributes,L=O.getAttributes(),z=P.defaultAttributeValues;for(const it in L){const X=L[it];if(X.location>=0){let pt=H[it];if(pt===void 0&&(it==="instanceMatrix"&&E.instanceMatrix&&(pt=E.instanceMatrix),it==="instanceColor"&&E.instanceColor&&(pt=E.instanceColor)),pt!==void 0){const Et=pt.normalized,bt=pt.itemSize,Ot=t.get(pt);if(Ot===void 0)continue;const Wt=Ot.buffer,Zt=Ot.type,rt=Ot.bytesPerElement,F=Zt===i.INT||Zt===i.UNSIGNED_INT||pt.gpuType===Lc;if(pt.isInterleavedBufferAttribute){const Z=pt.data,nt=Z.stride,ft=pt.offset;if(Z.isInstancedInterleavedBuffer){for(let ot=0;ot<X.locationSize;ot++)p(X.location+ot,Z.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ot=0;ot<X.locationSize;ot++)m(X.location+ot);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let ot=0;ot<X.locationSize;ot++)y(X.location+ot,bt/X.locationSize,Zt,Et,nt*rt,(ft+bt/X.locationSize*ot)*rt,F)}else{if(pt.isInstancedBufferAttribute){for(let Z=0;Z<X.locationSize;Z++)p(X.location+Z,pt.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Z=0;Z<X.locationSize;Z++)m(X.location+Z);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let Z=0;Z<X.locationSize;Z++)y(X.location+Z,bt/X.locationSize,Zt,Et,bt*rt,bt/X.locationSize*Z*rt,F)}}else if(z!==void 0){const Et=z[it];if(Et!==void 0)switch(Et.length){case 2:i.vertexAttrib2fv(X.location,Et);break;case 3:i.vertexAttrib3fv(X.location,Et);break;case 4:i.vertexAttrib4fv(X.location,Et);break;default:i.vertexAttrib1fv(X.location,Et)}}}}M()}function A(){D();for(const E in n){const P=n[E];for(const O in P){const B=P[O];for(const H in B)u(B[H].object),delete B[H];delete P[O]}delete n[E]}}function w(E){if(n[E.id]===void 0)return;const P=n[E.id];for(const O in P){const B=P[O];for(const H in B)u(B[H].object),delete B[H];delete P[O]}delete n[E.id]}function C(E){for(const P in n){const O=n[P];if(O[E.id]===void 0)continue;const B=O[E.id];for(const H in B)u(B[H].object),delete B[H];delete O[E.id]}}function D(){S(),o=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function _v(i,t,e){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];e.update(d,n,1)}function c(l,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<l.length;_++)o(l[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*f[g];e.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function gv(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Rn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const D=C===Us&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==kn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ti&&!D)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:A,maxSamples:w}}function vv(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new fi,a=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||_===null||_.length===0||s&&!m)s?u(null):l();else{const M=s?0:n,y=M*4;let v=p.clippingState||null;c.value=v,v=u(_,f,y,d);for(let A=0;A!==y;++A)v[A]=e[A];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const p=d+g*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=d;y!==g;++y,v+=4)o.copy(h[y]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function xv(i){let t=new WeakMap;function e(o,a){return a===yl?o.mapping=Rr:a===Ml&&(o.mapping=Cr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===yl||a===Ml)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Lm(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Mr=4,ah=[.125,.215,.35,.446,.526,.582],Oi=20,qa=new Gf,lh=new Gt;let $a=null,Za=0,Ka=0,ja=!1;const Ni=(1+Math.sqrt(5))/2,vr=1/Ni,ch=[new U(-Ni,vr,0),new U(Ni,vr,0),new U(-vr,0,Ni),new U(vr,0,Ni),new U(0,Ni,-vr),new U(0,Ni,vr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],yv=new U;class uh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){const{size:o=256,position:a=yv}=s;$a=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,r,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($a,Za,Ka),this._renderer.xr.enabled=ja,t.scissorTest=!1,Mo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Rr||t.mapping===Cr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$a=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Us,format:Rn,colorSpace:Pr,depthBuffer:!1},r=hh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hh(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mv(s)),this._blurMaterial=Sv(s,t,e)}return r}_compileMaterial(t){const e=new De(this._lodPlanes[0],t);this._renderer.compile(e,qa)}_sceneToCubeUV(t,e,n,r,s){const c=new gn(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(lh),h.toneMapping=gi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const g=new Jn({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),m=new De(new Bs,g);let p=!1;const M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,p=!0):(g.color.copy(lh),p=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[y],s.y,s.z)):v===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[y]));const A=this._cubeSize;Mo(r,v*A,y>2?A:0,A,A),h.setRenderTarget(r),p&&h.render(m,c),h.render(t,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Rr||t.mapping===Cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new De(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Mo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,qa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ch[(r-s-1)%ch.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new De(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Oi-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Oi;m>Oi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);const p=[];let M=0;for(let C=0;C<Oi;++C){const D=C/g,S=Math.exp(-D*D/2);p.push(S),C===0?M+=S:C<m&&(M+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-n;const v=this._sizeLods[r],A=3*v*(r>y-Mr?r-y+Mr:0),w=4*(this._cubeSize-v);Mo(e,A,w,3*v,2*v),c.setRenderTarget(e),c.render(h,qa)}}function Mv(i){const t=[],e=[],n=[];let r=i;const s=i-Mr+1+ah.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>i-Mr?c=ah[o-i+Mr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,m=2,p=1,M=new Float32Array(g*_*d),y=new Float32Array(m*_*d),v=new Float32Array(p*_*d);for(let w=0;w<d;w++){const C=w%3*2/3-1,D=w>2?0:-1,S=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];M.set(S,g*_*w),y.set(f,m*_*w);const E=[w,w,w,w,w,w];v.set(E,p*_*w)}const A=new Ae;A.setAttribute("position",new Ze(M,g)),A.setAttribute("uv",new Ze(y,m)),A.setAttribute("faceIndex",new Ze(v,p)),t.push(A),r>Mr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function hh(i,t,e){const n=new qi(i,t,e);return n.texture.mapping=aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Mo(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Sv(i,t,e){const n=new Float32Array(Oi),r=new U(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function fh(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function dh(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function qc(){return`

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
	`}function Ev(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===yl||c===Ml,u=c===Rr||c===Cr;if(l||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new uh(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new uh(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Tv(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&bs("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function bv(i,t,e,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const d in f)t.update(f[d],i.ARRAY_BUFFER)}function l(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const M=d.array;g=d.version;for(let y=0,v=M.length;y<v;y+=3){const A=M[y+0],w=M[y+1],C=M[y+2];f.push(A,w,w,C,C,A)}}else if(_!==void 0){const M=_.array;g=_.version;for(let y=0,v=M.length/3-1;y<v;y+=3){const A=y+0,w=y+1,C=y+2;f.push(A,w,w,C,C,A)}}else return;const m=new(Mf(f)?bf:Tf)(f,1);m.version=g;const p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function wv(i,t,e){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,s,f*o),e.update(d,n,1)}function l(f,d,_){_!==0&&(i.drawElementsInstanced(n,d,s,f*o,_),e.update(d,n,_))}function u(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];e.update(m,n,1)}function h(f,d,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,g,0,_);let p=0;for(let M=0;M<_;M++)p+=d[M]*g[M];e.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Av(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Rv(i,t,e){const n=new WeakMap,r=new be;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let y=0;d===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let v=a.attributes.position.count*y,A=1;v>t.maxTextureSize&&(A=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const w=new Float32Array(v*A*4*h),C=new Sf(w,v,A,h);C.type=ti,C.needsUpdate=!0;const D=y*4;for(let E=0;E<h;E++){const P=m[E],O=p[E],B=M[E],H=v*A*4*E;for(let L=0;L<P.count;L++){const z=L*D;d===!0&&(r.fromBufferAttribute(P,L),w[H+z+0]=r.x,w[H+z+1]=r.y,w[H+z+2]=r.z,w[H+z+3]=0),_===!0&&(r.fromBufferAttribute(O,L),w[H+z+4]=r.x,w[H+z+5]=r.y,w[H+z+6]=r.z,w[H+z+7]=0),g===!0&&(r.fromBufferAttribute(B,L),w[H+z+8]=r.x,w[H+z+9]=r.y,w[H+z+10]=r.z,w[H+z+11]=B.itemSize===4?r.w:1)}}f={count:h,texture:C,size:new dt(v,A)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let g=0;g<l.length;g++)d+=l[g];const _=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Cv(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(r.get(h)!==l&&(t.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const Xf=new ke,ph=new Df(1,1),Yf=new Sf,qf=new mm,$f=new Rf,mh=[],_h=[],gh=new Float32Array(16),vh=new Float32Array(9),xh=new Float32Array(4);function Wr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=mh[r];if(s===void 0&&(s=new Float32Array(r),mh[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function la(i,t){let e=_h[t];e===void 0&&(e=new Int32Array(t),_h[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Pv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Dv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function Lv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function Iv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function Uv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ie(e,n))return;xh.set(n),i.uniformMatrix2fv(this.addr,!1,xh),Ue(e,n)}}function Nv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ie(e,n))return;vh.set(n),i.uniformMatrix3fv(this.addr,!1,vh),Ue(e,n)}}function Fv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ie(e,n))return;gh.set(n),i.uniformMatrix4fv(this.addr,!1,gh),Ue(e,n)}}function Ov(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Bv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function zv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function kv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function Hv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Vv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function Gv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function Wv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function Xv(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ph.compareFunction=yf,s=ph):s=Xf,e.setTexture2D(t||s,r)}function Yv(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||qf,r)}function qv(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||$f,r)}function $v(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Yf,r)}function Zv(i){switch(i){case 5126:return Pv;case 35664:return Dv;case 35665:return Lv;case 35666:return Iv;case 35674:return Uv;case 35675:return Nv;case 35676:return Fv;case 5124:case 35670:return Ov;case 35667:case 35671:return Bv;case 35668:case 35672:return zv;case 35669:case 35673:return kv;case 5125:return Hv;case 36294:return Vv;case 36295:return Gv;case 36296:return Wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Xv;case 35679:case 36299:case 36307:return Yv;case 35680:case 36300:case 36308:case 36293:return qv;case 36289:case 36303:case 36311:case 36292:return $v}}function Kv(i,t){i.uniform1fv(this.addr,t)}function jv(i,t){const e=Wr(t,this.size,2);i.uniform2fv(this.addr,e)}function Jv(i,t){const e=Wr(t,this.size,3);i.uniform3fv(this.addr,e)}function Qv(i,t){const e=Wr(t,this.size,4);i.uniform4fv(this.addr,e)}function tx(i,t){const e=Wr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ex(i,t){const e=Wr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function nx(i,t){const e=Wr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ix(i,t){i.uniform1iv(this.addr,t)}function rx(i,t){i.uniform2iv(this.addr,t)}function sx(i,t){i.uniform3iv(this.addr,t)}function ox(i,t){i.uniform4iv(this.addr,t)}function ax(i,t){i.uniform1uiv(this.addr,t)}function lx(i,t){i.uniform2uiv(this.addr,t)}function cx(i,t){i.uniform3uiv(this.addr,t)}function ux(i,t){i.uniform4uiv(this.addr,t)}function hx(i,t,e){const n=this.cache,r=t.length,s=la(e,r);Ie(n,s)||(i.uniform1iv(this.addr,s),Ue(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Xf,s[o])}function fx(i,t,e){const n=this.cache,r=t.length,s=la(e,r);Ie(n,s)||(i.uniform1iv(this.addr,s),Ue(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||qf,s[o])}function dx(i,t,e){const n=this.cache,r=t.length,s=la(e,r);Ie(n,s)||(i.uniform1iv(this.addr,s),Ue(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||$f,s[o])}function px(i,t,e){const n=this.cache,r=t.length,s=la(e,r);Ie(n,s)||(i.uniform1iv(this.addr,s),Ue(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Yf,s[o])}function mx(i){switch(i){case 5126:return Kv;case 35664:return jv;case 35665:return Jv;case 35666:return Qv;case 35674:return tx;case 35675:return ex;case 35676:return nx;case 5124:case 35670:return ix;case 35667:case 35671:return rx;case 35668:case 35672:return sx;case 35669:case 35673:return ox;case 5125:return ax;case 36294:return lx;case 36295:return cx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return hx;case 35679:case 36299:case 36307:return fx;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return px}}class _x{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zv(e.type)}}class gx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mx(e.type)}}class vx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Ja=/(\w+)(\])?(\[|\.)?/g;function yh(i,t){i.seq.push(t),i.map[t.id]=t}function xx(i,t,e){const n=i.name,r=n.length;for(Ja.lastIndex=0;;){const s=Ja.exec(n),o=Ja.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){yh(e,l===void 0?new _x(a,i,t):new gx(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new vx(a),yh(e,h)),e=h}}}class Uo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);xx(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Mh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const yx=37297;let Mx=0;function Sx(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Sh=new Yt;function Ex(i){te._getMatrix(Sh,te.workingColorSpace,i);const t=`mat3( ${Sh.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case Ho:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Eh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Sx(i.getShaderSource(t),a)}else return s}function Tx(i,t){const e=Ex(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function bx(i,t){let e;switch(t){case Ap:e="Linear";break;case Rp:e="Reinhard";break;case Cp:e="Cineon";break;case Pp:e="ACESFilmic";break;case Lp:e="AgX";break;case Ip:e="Neutral";break;case Dp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const So=new U;function wx(){te.getLuminanceCoefficients(So);const i=So.x.toFixed(4),t=So.y.toFixed(4),e=So.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ax(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function Rx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Cx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ss(i){return i!==""}function Th(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Px=/^[ \t]*#include +<([\w\d./]+)>/gm;function sc(i){return i.replace(Px,Lx)}const Dx=new Map;function Lx(i,t){let e=qt[t];if(e===void 0){const n=Dx.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sc(e)}const Ix=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wh(i){return i.replace(Ix,Ux)}function Ux(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ah(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Nx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===op?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jn&&(t="SHADOWMAP_TYPE_VSM"),t}function Fx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Rr:case Cr:t="ENVMAP_TYPE_CUBE";break;case aa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ox(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Cr:t="ENVMAP_MODE_REFRACTION";break}return t}function Bx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Dc:t="ENVMAP_BLENDING_MULTIPLY";break;case bp:t="ENVMAP_BLENDING_MIX";break;case wp:t="ENVMAP_BLENDING_ADD";break}return t}function zx(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function kx(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Nx(e),l=Fx(e),u=Ox(e),h=Bx(e),f=zx(e),d=Ax(e),_=Rx(s),g=r.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ss).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ss).join(`
`),p.length>0&&(p+=`
`)):(m=[Ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),p=[Ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?qt.tonemapping_pars_fragment:"",e.toneMapping!==gi?bx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Tx("linearToOutputTexel",e.outputColorSpace),wx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ss).join(`
`)),o=sc(o),o=Th(o,e),o=bh(o,e),a=sc(a),a=Th(a,e),a=bh(a,e),o=wh(o),a=wh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Mu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+m+o,v=M+p+a,A=Mh(r,r.VERTEX_SHADER,y),w=Mh(r,r.FRAGMENT_SHADER,v);r.attachShader(g,A),r.attachShader(g,w),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function C(P){if(i.debug.checkShaderErrors){const O=r.getProgramInfoLog(g)||"",B=r.getShaderInfoLog(A)||"",H=r.getShaderInfoLog(w)||"",L=O.trim(),z=B.trim(),it=H.trim();let X=!0,pt=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,A,w);else{const Et=Eh(r,A,"vertex"),bt=Eh(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+Et+`
`+bt)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(z===""||it==="")&&(pt=!1);pt&&(P.diagnostics={runnable:X,programLog:L,vertexShader:{log:z,prefix:m},fragmentShader:{log:it,prefix:p}})}r.deleteShader(A),r.deleteShader(w),D=new Uo(r,g),S=Cx(r,g)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(g,yx)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Mx++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=w,this}let Hx=0;class Vx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Gx(t),e.set(t,n)),n}}class Gx{constructor(t){this.id=Hx++,this.code=t,this.usedTimes=0}}function Wx(i,t,e,n,r,s,o){const a=new kc,c=new Vx,l=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,E,P,O,B){const H=O.fog,L=B.geometry,z=S.isMeshStandardMaterial?O.environment:null,it=(S.isMeshStandardMaterial?e:t).get(S.envMap||z),X=it&&it.mapping===aa?it.image.height:null,pt=_[S.type];S.precision!==null&&(d=r.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const Et=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,bt=Et!==void 0?Et.length:0;let Ot=0;L.morphAttributes.position!==void 0&&(Ot=1),L.morphAttributes.normal!==void 0&&(Ot=2),L.morphAttributes.color!==void 0&&(Ot=3);let Wt,Zt,rt,F;if(pt){const ne=In[pt];Wt=ne.vertexShader,Zt=ne.fragmentShader}else Wt=S.vertexShader,Zt=S.fragmentShader,c.update(S),rt=c.getVertexShaderID(S),F=c.getFragmentShaderID(S);const Z=i.getRenderTarget(),nt=i.state.buffers.depth.getReversed(),ft=B.isInstancedMesh===!0,ot=B.isBatchedMesh===!0,yt=!!S.map,lt=!!S.matcap,R=!!it,Y=!!S.aoMap,j=!!S.lightMap,W=!!S.bumpMap,$=!!S.normalMap,st=!!S.displacementMap,et=!!S.emissiveMap,Q=!!S.metalnessMap,Mt=!!S.roughnessMap,at=S.anisotropy>0,T=S.clearcoat>0,x=S.dispersion>0,N=S.iridescence>0,G=S.sheen>0,tt=S.transmission>0,q=at&&!!S.anisotropyMap,St=T&&!!S.clearcoatMap,ht=T&&!!S.clearcoatNormalMap,mt=T&&!!S.clearcoatRoughnessMap,Tt=N&&!!S.iridescenceMap,ut=N&&!!S.iridescenceThicknessMap,wt=G&&!!S.sheenColorMap,Ft=G&&!!S.sheenRoughnessMap,It=!!S.specularMap,At=!!S.specularColorMap,kt=!!S.specularIntensityMap,I=tt&&!!S.transmissionMap,_t=tt&&!!S.thicknessMap,xt=!!S.gradientMap,Dt=!!S.alphaMap,gt=S.alphaTest>0,ct=!!S.alphaHash,Nt=!!S.extensions;let Xt=gi;S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Xt=i.toneMapping);const fe={shaderID:pt,shaderType:S.type,shaderName:S.name,vertexShader:Wt,fragmentShader:Zt,defines:S.defines,customVertexShaderID:rt,customFragmentShaderID:F,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:ot,batchingColor:ot&&B._colorsTexture!==null,instancing:ft,instancingColor:ft&&B.instanceColor!==null,instancingMorph:ft&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Pr,alphaToCoverage:!!S.alphaToCoverage,map:yt,matcap:lt,envMap:R,envMapMode:R&&it.mapping,envMapCubeUVHeight:X,aoMap:Y,lightMap:j,bumpMap:W,normalMap:$,displacementMap:f&&st,emissiveMap:et,normalMapObjectSpace:$&&S.normalMapType===Op,normalMapTangentSpace:$&&S.normalMapType===xf,metalnessMap:Q,roughnessMap:Mt,anisotropy:at,anisotropyMap:q,clearcoat:T,clearcoatMap:St,clearcoatNormalMap:ht,clearcoatRoughnessMap:mt,dispersion:x,iridescence:N,iridescenceMap:Tt,iridescenceThicknessMap:ut,sheen:G,sheenColorMap:wt,sheenRoughnessMap:Ft,specularMap:It,specularColorMap:At,specularIntensityMap:kt,transmission:tt,transmissionMap:I,thicknessMap:_t,gradientMap:xt,opaque:S.transparent===!1&&S.blending===_i&&S.alphaToCoverage===!1,alphaMap:Dt,alphaTest:gt,alphaHash:ct,combine:S.combine,mapUv:yt&&g(S.map.channel),aoMapUv:Y&&g(S.aoMap.channel),lightMapUv:j&&g(S.lightMap.channel),bumpMapUv:W&&g(S.bumpMap.channel),normalMapUv:$&&g(S.normalMap.channel),displacementMapUv:st&&g(S.displacementMap.channel),emissiveMapUv:et&&g(S.emissiveMap.channel),metalnessMapUv:Q&&g(S.metalnessMap.channel),roughnessMapUv:Mt&&g(S.roughnessMap.channel),anisotropyMapUv:q&&g(S.anisotropyMap.channel),clearcoatMapUv:St&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ht&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&g(S.sheenRoughnessMap.channel),specularMapUv:It&&g(S.specularMap.channel),specularColorMapUv:At&&g(S.specularColorMap.channel),specularIntensityMapUv:kt&&g(S.specularIntensityMap.channel),transmissionMapUv:I&&g(S.transmissionMap.channel),thicknessMapUv:_t&&g(S.thicknessMap.channel),alphaMapUv:Dt&&g(S.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&($||at),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!L.attributes.uv&&(yt||Dt),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:nt,skinning:B.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Ot,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:yt&&S.map.isVideoTexture===!0&&te.getTransfer(S.map.colorSpace)===se,decodeVideoTextureEmissive:et&&S.emissiveMap.isVideoTexture===!0&&te.getTransfer(S.emissiveMap.colorSpace)===se,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Je,flipSided:S.side===tn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Nt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&S.extensions.multiDraw===!0||ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return fe.vertexUv1s=l.has(1),fe.vertexUv2s=l.has(2),fe.vertexUv3s=l.has(3),l.clear(),fe}function p(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)E.push(P),E.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(M(E,S),y(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function M(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function y(S,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const E=_[S.type];let P;if(E){const O=In[E];P=Rm.clone(O.uniforms)}else P=S.uniforms;return P}function A(S,E){let P;for(let O=0,B=u.length;O<B;O++){const H=u[O];if(H.cacheKey===E){P=H,++P.usedTimes;break}}return P===void 0&&(P=new kx(i,E,S,s),u.push(P)),P}function w(S){if(--S.usedTimes===0){const E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function C(S){c.remove(S)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:D}}function Xx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Yx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Rh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ch(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(h,f,d,_,g,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),t++,p}function a(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):e.push(p)}function c(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function l(h,f){e.length>1&&e.sort(h||Yx),n.length>1&&n.sort(f||Rh),r.length>1&&r.sort(f||Rh)}function u(){for(let h=t,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function qx(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Ch,i.set(n,[o])):r>=s.length?(o=new Ch,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function $x(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Gt};break;case"SpotLight":e={position:new U,direction:new U,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Zx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Kx=0;function jx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Jx(i){const t=new $x,e=Zx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const r=new U,s=new pe,o=new pe;function a(l){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,M=0,y=0,v=0,A=0,w=0,C=0;l.sort(jx);for(let S=0,E=l.length;S<E;S++){const P=l[S],O=P.color,B=P.intensity,H=P.distance,L=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=O.r*B,h+=O.g*B,f+=O.b*B;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],B);C++}else if(P.isDirectionalLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const it=P.shadow,X=e.get(P);X.shadowIntensity=it.intensity,X.shadowBias=it.bias,X.shadowNormalBias=it.normalBias,X.shadowRadius=it.radius,X.shadowMapSize=it.mapSize,n.directionalShadow[d]=X,n.directionalShadowMap[d]=L,n.directionalShadowMatrix[d]=P.shadow.matrix,M++}n.directional[d]=z,d++}else if(P.isSpotLight){const z=t.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(O).multiplyScalar(B),z.distance=H,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[g]=z;const it=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,it.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[g]=it.matrix,P.castShadow){const X=e.get(P);X.shadowIntensity=it.intensity,X.shadowBias=it.bias,X.shadowNormalBias=it.normalBias,X.shadowRadius=it.radius,X.shadowMapSize=it.mapSize,n.spotShadow[g]=X,n.spotShadowMap[g]=L,v++}g++}else if(P.isRectAreaLight){const z=t.get(P);z.color.copy(O).multiplyScalar(B),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=z,m++}else if(P.isPointLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const it=P.shadow,X=e.get(P);X.shadowIntensity=it.intensity,X.shadowBias=it.bias,X.shadowNormalBias=it.normalBias,X.shadowRadius=it.radius,X.shadowMapSize=it.mapSize,X.shadowCameraNear=it.camera.near,X.shadowCameraFar=it.camera.far,n.pointShadow[_]=X,n.pointShadowMap[_]=L,n.pointShadowMatrix[_]=P.shadow.matrix,y++}n.point[_]=z,_++}else if(P.isHemisphereLight){const z=t.get(P);z.skyColor.copy(P.color).multiplyScalar(B),z.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[p]=z,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==d||D.pointLength!==_||D.spotLength!==g||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==M||D.numPointShadows!==y||D.numSpotShadows!==v||D.numSpotMaps!==A||D.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,D.directionalLength=d,D.pointLength=_,D.spotLength=g,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=M,D.numPointShadows=y,D.numSpotShadows=v,D.numSpotMaps=A,D.numLightProbes=C,n.version=Kx++)}function c(l,u){let h=0,f=0,d=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const y=l[p];if(y.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(y.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function Ph(i){const t=new Jx(i),e=[],n=[];function r(u){l.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Qx(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Ph(i),t.set(r,[a])):s>=o.length?(a=new Ph(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const ty=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ey=`uniform sampler2D shadow_pass;
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
}`;function ny(i,t,e){let n=new Vc;const r=new dt,s=new dt,o=new be,a=new x_({depthPacking:Fp}),c=new y_,l={},u=e.maxTextureSize,h={[xi]:tn,[tn]:xi,[Je]:Je},f=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:ty,fragmentShader:ey}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Ae;_.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new De(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cf;let p=this.type;this.render=function(w,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),E=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),O=i.state;O.setBlending(mi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=p!==jn&&this.type===jn,H=p===jn&&this.type!==jn;for(let L=0,z=w.length;L<z;L++){const it=w[L],X=it.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const pt=X.getFrameExtents();if(r.multiply(pt),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/pt.x),r.x=s.x*pt.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/pt.y),r.y=s.y*pt.y,X.mapSize.y=s.y)),X.map===null||B===!0||H===!0){const bt=this.type!==jn?{minFilter:Cn,magFilter:Cn}:{};X.map!==null&&X.map.dispose(),X.map=new qi(r.x,r.y,bt),X.map.texture.name=it.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const Et=X.getViewportCount();for(let bt=0;bt<Et;bt++){const Ot=X.getViewport(bt);o.set(s.x*Ot.x,s.y*Ot.y,s.x*Ot.z,s.y*Ot.w),O.viewport(o),X.updateMatrices(it,bt),n=X.getFrustum(),v(C,D,X.camera,it,this.type)}X.isPointLightShadow!==!0&&this.type===jn&&M(X,D),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,E,P)};function M(w,C){const D=t.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new qi(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,D,f,g,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,D,d,g,null)}function y(w,C,D,S){let E=null;const P=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)E=P;else if(E=D.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=E.uuid,B=C.uuid;let H=l[O];H===void 0&&(H={},l[O]=H);let L=H[B];L===void 0&&(L=E.clone(),H[B]=L,C.addEventListener("dispose",A)),E=L}if(E.visible=C.visible,E.wireframe=C.wireframe,S===jn?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:h[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const O=i.properties.get(E);O.light=D}return E}function v(w,C,D,S,E){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===jn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const B=t.update(w),H=w.material;if(Array.isArray(H)){const L=B.groups;for(let z=0,it=L.length;z<it;z++){const X=L[z],pt=H[X.materialIndex];if(pt&&pt.visible){const Et=y(w,pt,S,E);w.onBeforeShadow(i,w,C,D,B,Et,X),i.renderBufferDirect(D,null,B,Et,w,X),w.onAfterShadow(i,w,C,D,B,Et,X)}}}else if(H.visible){const L=y(w,H,S,E);w.onBeforeShadow(i,w,C,D,B,L,null),i.renderBufferDirect(D,null,B,L,w,null),w.onAfterShadow(i,w,C,D,B,L,null)}}const O=w.children;for(let B=0,H=O.length;B<H;B++)v(O[B],C,D,S,E)}function A(w){w.target.removeEventListener("dispose",A);for(const D in l){const S=l[D],E=w.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}const iy={[dl]:pl,[ml]:vl,[_l]:xl,[Ar]:gl,[pl]:dl,[vl]:ml,[xl]:_l,[gl]:Ar};function ry(i,t){function e(){let I=!1;const _t=new be;let xt=null;const Dt=new be(0,0,0,0);return{setMask:function(gt){xt!==gt&&!I&&(i.colorMask(gt,gt,gt,gt),xt=gt)},setLocked:function(gt){I=gt},setClear:function(gt,ct,Nt,Xt,fe){fe===!0&&(gt*=Xt,ct*=Xt,Nt*=Xt),_t.set(gt,ct,Nt,Xt),Dt.equals(_t)===!1&&(i.clearColor(gt,ct,Nt,Xt),Dt.copy(_t))},reset:function(){I=!1,xt=null,Dt.set(-1,0,0,0)}}}function n(){let I=!1,_t=!1,xt=null,Dt=null,gt=null;return{setReversed:function(ct){if(_t!==ct){const Nt=t.get("EXT_clip_control");ct?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),_t=ct;const Xt=gt;gt=null,this.setClear(Xt)}},getReversed:function(){return _t},setTest:function(ct){ct?Z(i.DEPTH_TEST):nt(i.DEPTH_TEST)},setMask:function(ct){xt!==ct&&!I&&(i.depthMask(ct),xt=ct)},setFunc:function(ct){if(_t&&(ct=iy[ct]),Dt!==ct){switch(ct){case dl:i.depthFunc(i.NEVER);break;case pl:i.depthFunc(i.ALWAYS);break;case ml:i.depthFunc(i.LESS);break;case Ar:i.depthFunc(i.LEQUAL);break;case _l:i.depthFunc(i.EQUAL);break;case gl:i.depthFunc(i.GEQUAL);break;case vl:i.depthFunc(i.GREATER);break;case xl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Dt=ct}},setLocked:function(ct){I=ct},setClear:function(ct){gt!==ct&&(_t&&(ct=1-ct),i.clearDepth(ct),gt=ct)},reset:function(){I=!1,xt=null,Dt=null,gt=null,_t=!1}}}function r(){let I=!1,_t=null,xt=null,Dt=null,gt=null,ct=null,Nt=null,Xt=null,fe=null;return{setTest:function(ne){I||(ne?Z(i.STENCIL_TEST):nt(i.STENCIL_TEST))},setMask:function(ne){_t!==ne&&!I&&(i.stencilMask(ne),_t=ne)},setFunc:function(ne,Wn,Pn){(xt!==ne||Dt!==Wn||gt!==Pn)&&(i.stencilFunc(ne,Wn,Pn),xt=ne,Dt=Wn,gt=Pn)},setOp:function(ne,Wn,Pn){(ct!==ne||Nt!==Wn||Xt!==Pn)&&(i.stencilOp(ne,Wn,Pn),ct=ne,Nt=Wn,Xt=Pn)},setLocked:function(ne){I=ne},setClear:function(ne){fe!==ne&&(i.clearStencil(ne),fe=ne)},reset:function(){I=!1,_t=null,xt=null,Dt=null,gt=null,ct=null,Nt=null,Xt=null,fe=null}}}const s=new e,o=new n,a=new r,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,M=null,y=null,v=null,A=null,w=null,C=new Gt(0,0,0),D=0,S=!1,E=null,P=null,O=null,B=null,H=null;const L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,it=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(X)[1]),z=it>=1):X.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),z=it>=2);let pt=null,Et={};const bt=i.getParameter(i.SCISSOR_BOX),Ot=i.getParameter(i.VIEWPORT),Wt=new be().fromArray(bt),Zt=new be().fromArray(Ot);function rt(I,_t,xt,Dt){const gt=new Uint8Array(4),ct=i.createTexture();i.bindTexture(I,ct),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<xt;Nt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,Dt,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(_t+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return ct}const F={};F[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),F[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),F[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(i.DEPTH_TEST),o.setFunc(Ar),W(!1),$(gu),Z(i.CULL_FACE),Y(mi);function Z(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function nt(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function ft(I,_t){return h[I]!==_t?(i.bindFramebuffer(I,_t),h[I]=_t,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=_t),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function ot(I,_t){let xt=d,Dt=!1;if(I){xt=f.get(_t),xt===void 0&&(xt=[],f.set(_t,xt));const gt=I.textures;if(xt.length!==gt.length||xt[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Nt=gt.length;ct<Nt;ct++)xt[ct]=i.COLOR_ATTACHMENT0+ct;xt.length=gt.length,Dt=!0}}else xt[0]!==i.BACK&&(xt[0]=i.BACK,Dt=!0);Dt&&i.drawBuffers(xt)}function yt(I){return _!==I?(i.useProgram(I),_=I,!0):!1}const lt={[Fi]:i.FUNC_ADD,[lp]:i.FUNC_SUBTRACT,[cp]:i.FUNC_REVERSE_SUBTRACT};lt[up]=i.MIN,lt[hp]=i.MAX;const R={[fp]:i.ZERO,[dp]:i.ONE,[pp]:i.SRC_COLOR,[hl]:i.SRC_ALPHA,[yp]:i.SRC_ALPHA_SATURATE,[vp]:i.DST_COLOR,[_p]:i.DST_ALPHA,[mp]:i.ONE_MINUS_SRC_COLOR,[fl]:i.ONE_MINUS_SRC_ALPHA,[xp]:i.ONE_MINUS_DST_COLOR,[gp]:i.ONE_MINUS_DST_ALPHA,[Mp]:i.CONSTANT_COLOR,[Sp]:i.ONE_MINUS_CONSTANT_COLOR,[Ep]:i.CONSTANT_ALPHA,[Tp]:i.ONE_MINUS_CONSTANT_ALPHA};function Y(I,_t,xt,Dt,gt,ct,Nt,Xt,fe,ne){if(I===mi){g===!0&&(nt(i.BLEND),g=!1);return}if(g===!1&&(Z(i.BLEND),g=!0),I!==ap){if(I!==m||ne!==S){if((p!==Fi||v!==Fi)&&(i.blendEquation(i.FUNC_ADD),p=Fi,v=Fi),ne)switch(I){case _i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dn:i.blendFunc(i.ONE,i.ONE);break;case vu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case _i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case vu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,y=null,A=null,w=null,C.set(0,0,0),D=0,m=I,S=ne}return}gt=gt||_t,ct=ct||xt,Nt=Nt||Dt,(_t!==p||gt!==v)&&(i.blendEquationSeparate(lt[_t],lt[gt]),p=_t,v=gt),(xt!==M||Dt!==y||ct!==A||Nt!==w)&&(i.blendFuncSeparate(R[xt],R[Dt],R[ct],R[Nt]),M=xt,y=Dt,A=ct,w=Nt),(Xt.equals(C)===!1||fe!==D)&&(i.blendColor(Xt.r,Xt.g,Xt.b,fe),C.copy(Xt),D=fe),m=I,S=!1}function j(I,_t){I.side===Je?nt(i.CULL_FACE):Z(i.CULL_FACE);let xt=I.side===tn;_t&&(xt=!xt),W(xt),I.blending===_i&&I.transparent===!1?Y(mi):Y(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const Dt=I.stencilWrite;a.setTest(Dt),Dt&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),et(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function W(I){E!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),E=I)}function $(I){I!==rp?(Z(i.CULL_FACE),I!==P&&(I===gu?i.cullFace(i.BACK):I===sp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):nt(i.CULL_FACE),P=I}function st(I){I!==O&&(z&&i.lineWidth(I),O=I)}function et(I,_t,xt){I?(Z(i.POLYGON_OFFSET_FILL),(B!==_t||H!==xt)&&(i.polygonOffset(_t,xt),B=_t,H=xt)):nt(i.POLYGON_OFFSET_FILL)}function Q(I){I?Z(i.SCISSOR_TEST):nt(i.SCISSOR_TEST)}function Mt(I){I===void 0&&(I=i.TEXTURE0+L-1),pt!==I&&(i.activeTexture(I),pt=I)}function at(I,_t,xt){xt===void 0&&(pt===null?xt=i.TEXTURE0+L-1:xt=pt);let Dt=Et[xt];Dt===void 0&&(Dt={type:void 0,texture:void 0},Et[xt]=Dt),(Dt.type!==I||Dt.texture!==_t)&&(pt!==xt&&(i.activeTexture(xt),pt=xt),i.bindTexture(I,_t||F[I]),Dt.type=I,Dt.texture=_t)}function T(){const I=Et[pt];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(I){Wt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Wt.copy(I))}function Ft(I){Zt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Zt.copy(I))}function It(I,_t){let xt=l.get(_t);xt===void 0&&(xt=new WeakMap,l.set(_t,xt));let Dt=xt.get(I);Dt===void 0&&(Dt=i.getUniformBlockIndex(_t,I.name),xt.set(I,Dt))}function At(I,_t){const Dt=l.get(_t).get(I);c.get(_t)!==Dt&&(i.uniformBlockBinding(_t,Dt,I.__bindingPointIndex),c.set(_t,Dt))}function kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},pt=null,Et={},h={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,M=null,y=null,v=null,A=null,w=null,C=new Gt(0,0,0),D=0,S=!1,E=null,P=null,O=null,B=null,H=null,Wt.set(0,0,i.canvas.width,i.canvas.height),Zt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Z,disable:nt,bindFramebuffer:ft,drawBuffers:ot,useProgram:yt,setBlending:Y,setMaterial:j,setFlipSided:W,setCullFace:$,setLineWidth:st,setPolygonOffset:et,setScissorTest:Q,activeTexture:Mt,bindTexture:at,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:N,texImage2D:Tt,texImage3D:ut,updateUBOMapping:It,uniformBlockBinding:At,texStorage2D:ht,texStorage3D:mt,texSubImage2D:G,texSubImage3D:tt,compressedTexSubImage2D:q,compressedTexSubImage3D:St,scissor:wt,viewport:Ft,reset:kt}}function sy(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new dt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,x){return d?new OffscreenCanvas(T,x):Ts("canvas")}function g(T,x,N){let G=1;const tt=at(T);if((tt.width>N||tt.height>N)&&(G=N/Math.max(tt.width,tt.height)),G<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(G*tt.width),St=Math.floor(G*tt.height);h===void 0&&(h=_(q,St));const ht=x?_(q,St):h;return ht.width=q,ht.height=St,ht.getContext("2d").drawImage(T,0,0,q,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+q+"x"+St+")."),ht}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(T,x,N,G,tt=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=x;if(x===i.RED&&(N===i.FLOAT&&(q=i.R32F),N===i.HALF_FLOAT&&(q=i.R16F),N===i.UNSIGNED_BYTE&&(q=i.R8)),x===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.R8UI),N===i.UNSIGNED_SHORT&&(q=i.R16UI),N===i.UNSIGNED_INT&&(q=i.R32UI),N===i.BYTE&&(q=i.R8I),N===i.SHORT&&(q=i.R16I),N===i.INT&&(q=i.R32I)),x===i.RG&&(N===i.FLOAT&&(q=i.RG32F),N===i.HALF_FLOAT&&(q=i.RG16F),N===i.UNSIGNED_BYTE&&(q=i.RG8)),x===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RG8UI),N===i.UNSIGNED_SHORT&&(q=i.RG16UI),N===i.UNSIGNED_INT&&(q=i.RG32UI),N===i.BYTE&&(q=i.RG8I),N===i.SHORT&&(q=i.RG16I),N===i.INT&&(q=i.RG32I)),x===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RGB8UI),N===i.UNSIGNED_SHORT&&(q=i.RGB16UI),N===i.UNSIGNED_INT&&(q=i.RGB32UI),N===i.BYTE&&(q=i.RGB8I),N===i.SHORT&&(q=i.RGB16I),N===i.INT&&(q=i.RGB32I)),x===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),N===i.UNSIGNED_INT&&(q=i.RGBA32UI),N===i.BYTE&&(q=i.RGBA8I),N===i.SHORT&&(q=i.RGBA16I),N===i.INT&&(q=i.RGBA32I)),x===i.RGB&&(N===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),x===i.RGBA){const St=tt?Ho:te.getTransfer(G);N===i.FLOAT&&(q=i.RGBA32F),N===i.HALF_FLOAT&&(q=i.RGBA16F),N===i.UNSIGNED_BYTE&&(q=St===se?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function v(T,x){let N;return T?x===null||x===Xi||x===ys?N=i.DEPTH24_STENCIL8:x===ti?N=i.DEPTH32F_STENCIL8:x===xs&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Xi||x===ys?N=i.DEPTH_COMPONENT24:x===ti?N=i.DEPTH_COMPONENT32F:x===xs&&(N=i.DEPTH_COMPONENT16),N}function A(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Cn&&T.minFilter!==vn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function w(T){const x=T.target;x.removeEventListener("dispose",w),D(x),x.isVideoTexture&&u.delete(x)}function C(T){const x=T.target;x.removeEventListener("dispose",C),E(x)}function D(T){const x=n.get(T);if(x.__webglInit===void 0)return;const N=T.source,G=f.get(N);if(G){const tt=G[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&S(T),Object.keys(G).length===0&&f.delete(N)}n.remove(T)}function S(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const N=T.source,G=f.get(N);delete G[x.__cacheKey],o.memory.textures--}function E(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let tt=0;tt<x.__webglFramebuffer[G].length;tt++)i.deleteFramebuffer(x.__webglFramebuffer[G][tt]);else i.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)i.deleteFramebuffer(x.__webglFramebuffer[G]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=T.textures;for(let G=0,tt=N.length;G<tt;G++){const q=n.get(N[G]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(N[G])}n.remove(T)}let P=0;function O(){P=0}function B(){const T=P;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),P+=1,T}function H(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function L(T,x){const N=n.get(T);if(T.isVideoTexture&&Q(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&N.__version!==T.version){const G=T.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(N,T,x);return}}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+x)}function z(T,x){const N=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){F(N,T,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+x)}function it(T,x){const N=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){F(N,T,x);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+x)}function X(T,x){const N=n.get(T);if(T.version>0&&N.__version!==T.version){Z(N,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+x)}const pt={[Bi]:i.REPEAT,[zi]:i.CLAMP_TO_EDGE,[Sl]:i.MIRRORED_REPEAT},Et={[Cn]:i.NEAREST,[Up]:i.NEAREST_MIPMAP_NEAREST,[Vs]:i.NEAREST_MIPMAP_LINEAR,[vn]:i.LINEAR,[pa]:i.LINEAR_MIPMAP_NEAREST,[ki]:i.LINEAR_MIPMAP_LINEAR},bt={[Bp]:i.NEVER,[Wp]:i.ALWAYS,[zp]:i.LESS,[yf]:i.LEQUAL,[kp]:i.EQUAL,[Gp]:i.GEQUAL,[Hp]:i.GREATER,[Vp]:i.NOTEQUAL};function Ot(T,x){if(x.type===ti&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===vn||x.magFilter===pa||x.magFilter===Vs||x.magFilter===ki||x.minFilter===vn||x.minFilter===pa||x.minFilter===Vs||x.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,pt[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,pt[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,pt[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Et[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Et[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,bt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Cn||x.minFilter!==Vs&&x.minFilter!==ki||x.type===ti&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Wt(T,x){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",w));const G=x.source;let tt=f.get(G);tt===void 0&&(tt={},f.set(G,tt));const q=H(x);if(q!==T.__cacheKey){tt[q]===void 0&&(tt[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),tt[q].usedTimes++;const St=tt[T.__cacheKey];St!==void 0&&(tt[T.__cacheKey].usedTimes--,St.usedTimes===0&&S(x)),T.__cacheKey=q,T.__webglTexture=tt[q].texture}return N}function Zt(T,x,N){return Math.floor(Math.floor(T/N)/x)}function rt(T,x,N,G){const q=T.updateRanges;if(q.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,N,G,x.data);else{q.sort((ut,wt)=>ut.start-wt.start);let St=0;for(let ut=1;ut<q.length;ut++){const wt=q[St],Ft=q[ut],It=wt.start+wt.count,At=Zt(Ft.start,x.width,4),kt=Zt(wt.start,x.width,4);Ft.start<=It+1&&At===kt&&Zt(Ft.start+Ft.count-1,x.width,4)===At?wt.count=Math.max(wt.count,Ft.start+Ft.count-wt.start):(++St,q[St]=Ft)}q.length=St+1;const ht=i.getParameter(i.UNPACK_ROW_LENGTH),mt=i.getParameter(i.UNPACK_SKIP_PIXELS),Tt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let ut=0,wt=q.length;ut<wt;ut++){const Ft=q[ut],It=Math.floor(Ft.start/4),At=Math.ceil(Ft.count/4),kt=It%x.width,I=Math.floor(It/x.width),_t=At,xt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,kt),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),e.texSubImage2D(i.TEXTURE_2D,0,kt,I,_t,xt,N,G,x.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ht),i.pixelStorei(i.UNPACK_SKIP_PIXELS,mt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Tt)}}function F(T,x,N){let G=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=i.TEXTURE_3D);const tt=Wt(T,x),q=x.source;e.bindTexture(G,T.__webglTexture,i.TEXTURE0+N);const St=n.get(q);if(q.version!==St.__version||tt===!0){e.activeTexture(i.TEXTURE0+N);const ht=te.getPrimaries(te.workingColorSpace),mt=x.colorSpace===di?null:te.getPrimaries(x.colorSpace),Tt=x.colorSpace===di||ht===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let ut=g(x.image,!1,r.maxTextureSize);ut=Mt(x,ut);const wt=s.convert(x.format,x.colorSpace),Ft=s.convert(x.type);let It=y(x.internalFormat,wt,Ft,x.colorSpace,x.isVideoTexture);Ot(G,x);let At;const kt=x.mipmaps,I=x.isVideoTexture!==!0,_t=St.__version===void 0||tt===!0,xt=q.dataReady,Dt=A(x,ut);if(x.isDepthTexture)It=v(x.format===Ss,x.type),_t&&(I?e.texStorage2D(i.TEXTURE_2D,1,It,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,It,ut.width,ut.height,0,wt,Ft,null));else if(x.isDataTexture)if(kt.length>0){I&&_t&&e.texStorage2D(i.TEXTURE_2D,Dt,It,kt[0].width,kt[0].height);for(let gt=0,ct=kt.length;gt<ct;gt++)At=kt[gt],I?xt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,At.width,At.height,wt,Ft,At.data):e.texImage2D(i.TEXTURE_2D,gt,It,At.width,At.height,0,wt,Ft,At.data);x.generateMipmaps=!1}else I?(_t&&e.texStorage2D(i.TEXTURE_2D,Dt,It,ut.width,ut.height),xt&&rt(x,ut,wt,Ft)):e.texImage2D(i.TEXTURE_2D,0,It,ut.width,ut.height,0,wt,Ft,ut.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,It,kt[0].width,kt[0].height,ut.depth);for(let gt=0,ct=kt.length;gt<ct;gt++)if(At=kt[gt],x.format!==Rn)if(wt!==null)if(I){if(xt)if(x.layerUpdates.size>0){const Nt=oh(At.width,At.height,x.format,x.type);for(const Xt of x.layerUpdates){const fe=At.data.subarray(Xt*Nt/At.data.BYTES_PER_ELEMENT,(Xt+1)*Nt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,Xt,At.width,At.height,1,wt,fe)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,At.width,At.height,ut.depth,wt,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,gt,It,At.width,At.height,ut.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?xt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,At.width,At.height,ut.depth,wt,Ft,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,gt,It,At.width,At.height,ut.depth,0,wt,Ft,At.data)}else{I&&_t&&e.texStorage2D(i.TEXTURE_2D,Dt,It,kt[0].width,kt[0].height);for(let gt=0,ct=kt.length;gt<ct;gt++)At=kt[gt],x.format!==Rn?wt!==null?I?xt&&e.compressedTexSubImage2D(i.TEXTURE_2D,gt,0,0,At.width,At.height,wt,At.data):e.compressedTexImage2D(i.TEXTURE_2D,gt,It,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?xt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,At.width,At.height,wt,Ft,At.data):e.texImage2D(i.TEXTURE_2D,gt,It,At.width,At.height,0,wt,Ft,At.data)}else if(x.isDataArrayTexture)if(I){if(_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,It,ut.width,ut.height,ut.depth),xt)if(x.layerUpdates.size>0){const gt=oh(ut.width,ut.height,x.format,x.type);for(const ct of x.layerUpdates){const Nt=ut.data.subarray(ct*gt/ut.data.BYTES_PER_ELEMENT,(ct+1)*gt/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,ut.width,ut.height,1,wt,Ft,Nt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,wt,Ft,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,ut.width,ut.height,ut.depth,0,wt,Ft,ut.data);else if(x.isData3DTexture)I?(_t&&e.texStorage3D(i.TEXTURE_3D,Dt,It,ut.width,ut.height,ut.depth),xt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,wt,Ft,ut.data)):e.texImage3D(i.TEXTURE_3D,0,It,ut.width,ut.height,ut.depth,0,wt,Ft,ut.data);else if(x.isFramebufferTexture){if(_t)if(I)e.texStorage2D(i.TEXTURE_2D,Dt,It,ut.width,ut.height);else{let gt=ut.width,ct=ut.height;for(let Nt=0;Nt<Dt;Nt++)e.texImage2D(i.TEXTURE_2D,Nt,It,gt,ct,0,wt,Ft,null),gt>>=1,ct>>=1}}else if(kt.length>0){if(I&&_t){const gt=at(kt[0]);e.texStorage2D(i.TEXTURE_2D,Dt,It,gt.width,gt.height)}for(let gt=0,ct=kt.length;gt<ct;gt++)At=kt[gt],I?xt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,wt,Ft,At):e.texImage2D(i.TEXTURE_2D,gt,It,wt,Ft,At);x.generateMipmaps=!1}else if(I){if(_t){const gt=at(ut);e.texStorage2D(i.TEXTURE_2D,Dt,It,gt.width,gt.height)}xt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Ft,ut)}else e.texImage2D(i.TEXTURE_2D,0,It,wt,Ft,ut);m(x)&&p(G),St.__version=q.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Z(T,x,N){if(x.image.length!==6)return;const G=Wt(T,x),tt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+N);const q=n.get(tt);if(tt.version!==q.__version||G===!0){e.activeTexture(i.TEXTURE0+N);const St=te.getPrimaries(te.workingColorSpace),ht=x.colorSpace===di?null:te.getPrimaries(x.colorSpace),mt=x.colorSpace===di||St===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Tt=x.isCompressedTexture||x.image[0].isCompressedTexture,ut=x.image[0]&&x.image[0].isDataTexture,wt=[];for(let ct=0;ct<6;ct++)!Tt&&!ut?wt[ct]=g(x.image[ct],!0,r.maxCubemapSize):wt[ct]=ut?x.image[ct].image:x.image[ct],wt[ct]=Mt(x,wt[ct]);const Ft=wt[0],It=s.convert(x.format,x.colorSpace),At=s.convert(x.type),kt=y(x.internalFormat,It,At,x.colorSpace),I=x.isVideoTexture!==!0,_t=q.__version===void 0||G===!0,xt=tt.dataReady;let Dt=A(x,Ft);Ot(i.TEXTURE_CUBE_MAP,x);let gt;if(Tt){I&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,kt,Ft.width,Ft.height);for(let ct=0;ct<6;ct++){gt=wt[ct].mipmaps;for(let Nt=0;Nt<gt.length;Nt++){const Xt=gt[Nt];x.format!==Rn?It!==null?I?xt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Nt,0,0,Xt.width,Xt.height,It,Xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Nt,kt,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Nt,0,0,Xt.width,Xt.height,It,At,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Nt,kt,Xt.width,Xt.height,0,It,At,Xt.data)}}}else{if(gt=x.mipmaps,I&&_t){gt.length>0&&Dt++;const ct=at(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,kt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(ut){I?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,wt[ct].width,wt[ct].height,It,At,wt[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,kt,wt[ct].width,wt[ct].height,0,It,At,wt[ct].data);for(let Nt=0;Nt<gt.length;Nt++){const fe=gt[Nt].image[ct].image;I?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Nt+1,0,0,fe.width,fe.height,It,At,fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Nt+1,kt,fe.width,fe.height,0,It,At,fe.data)}}else{I?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,It,At,wt[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,kt,It,At,wt[ct]);for(let Nt=0;Nt<gt.length;Nt++){const Xt=gt[Nt];I?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Nt+1,0,0,It,At,Xt.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Nt+1,kt,It,At,Xt.image[ct])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),q.__version=tt.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function nt(T,x,N,G,tt,q){const St=s.convert(N.format,N.colorSpace),ht=s.convert(N.type),mt=y(N.internalFormat,St,ht,N.colorSpace),Tt=n.get(x),ut=n.get(N);if(ut.__renderTarget=x,!Tt.__hasExternalTextures){const wt=Math.max(1,x.width>>q),Ft=Math.max(1,x.height>>q);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,q,mt,wt,Ft,x.depth,0,St,ht,null):e.texImage2D(tt,q,mt,wt,Ft,0,St,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),et(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,tt,ut.__webglTexture,0,st(x)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,tt,ut.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(T,x,N){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){const G=x.depthTexture,tt=G&&G.isDepthTexture?G.type:null,q=v(x.stencilBuffer,tt),St=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=st(x);et(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,q,x.width,x.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,T)}else{const G=x.textures;for(let tt=0;tt<G.length;tt++){const q=G[tt],St=s.convert(q.format,q.colorSpace),ht=s.convert(q.type),mt=y(q.internalFormat,St,ht,q.colorSpace),Tt=st(x);N&&et(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,mt,x.width,x.height):et(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,mt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,mt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=n.get(x.depthTexture);G.__renderTarget=x,(!G.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),L(x.depthTexture,0);const tt=G.__webglTexture,q=st(x);if(x.depthTexture.format===Ms)et(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(x.depthTexture.format===Ss)et(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function yt(T){const x=n.get(T),N=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const G=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){const tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",tt)};G.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=G}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const G=T.texture.mipmaps;G&&G.length>0?ot(x.__webglFramebuffer[0],T):ot(x.__webglFramebuffer,T)}else if(N){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=i.createRenderbuffer(),ft(x.__webglDepthbuffer[G],T,!1);else{const tt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,q)}}else{const G=T.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ft(x.__webglDepthbuffer,T,!1);else{const tt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,q)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(T,x,N){const G=n.get(T);x!==void 0&&nt(G.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&yt(T)}function R(T){const x=T.texture,N=n.get(T),G=n.get(x);T.addEventListener("dispose",C);const tt=T.textures,q=T.isWebGLCubeRenderTarget===!0,St=tt.length>1;if(St||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=x.version,o.memory.textures++),q){N.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[ht]=[];for(let mt=0;mt<x.mipmaps.length;mt++)N.__webglFramebuffer[ht][mt]=i.createFramebuffer()}else N.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let ht=0;ht<x.mipmaps.length;ht++)N.__webglFramebuffer[ht]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(St)for(let ht=0,mt=tt.length;ht<mt;ht++){const Tt=n.get(tt[ht]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&et(T)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ht=0;ht<tt.length;ht++){const mt=tt[ht];N.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ht]);const Tt=s.convert(mt.format,mt.colorSpace),ut=s.convert(mt.type),wt=y(mt.internalFormat,Tt,ut,mt.colorSpace,T.isXRRenderTarget===!0),Ft=st(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,wt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,N.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(N.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,x);for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0)for(let mt=0;mt<x.mipmaps.length;mt++)nt(N.__webglFramebuffer[ht][mt],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,mt);else nt(N.__webglFramebuffer[ht],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ht=0,mt=tt.length;ht<mt;ht++){const Tt=tt[ht],ut=n.get(Tt);let wt=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(wt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(wt,ut.__webglTexture),Ot(wt,Tt),nt(N.__webglFramebuffer,T,Tt,i.COLOR_ATTACHMENT0+ht,wt,0),m(Tt)&&p(wt)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ht=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,G.__webglTexture),Ot(ht,x),x.mipmaps&&x.mipmaps.length>0)for(let mt=0;mt<x.mipmaps.length;mt++)nt(N.__webglFramebuffer[mt],T,x,i.COLOR_ATTACHMENT0,ht,mt);else nt(N.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,ht,0);m(x)&&p(ht),e.unbindTexture()}T.depthBuffer&&yt(T)}function Y(T){const x=T.textures;for(let N=0,G=x.length;N<G;N++){const tt=x[N];if(m(tt)){const q=M(T),St=n.get(tt).__webglTexture;e.bindTexture(q,St),p(q),e.unbindTexture()}}}const j=[],W=[];function $(T){if(T.samples>0){if(et(T)===!1){const x=T.textures,N=T.width,G=T.height;let tt=i.COLOR_BUFFER_BIT;const q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(T),ht=x.length>1;if(ht)for(let Tt=0;Tt<x.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);const mt=T.texture.mipmaps;mt&&mt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Tt=0;Tt<x.length;Tt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[Tt]);const ut=n.get(x[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ut,0)}i.blitFramebuffer(0,0,N,G,0,0,N,G,tt,i.NEAREST),c===!0&&(j.length=0,W.length=0,j.push(i.COLOR_ATTACHMENT0+Tt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(j.push(q),W.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,W)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let Tt=0;Tt<x.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,St.__webglColorRenderbuffer[Tt]);const ut=n.get(x[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function st(T){return Math.min(r.maxSamples,T.samples)}function et(T){const x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Q(T){const x=o.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function Mt(T,x){const N=T.colorSpace,G=T.format,tt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==Pr&&N!==di&&(te.getTransfer(N)===se?(G!==Rn||tt!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function at(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=L,this.setTexture2DArray=z,this.setTexture3D=it,this.setTextureCube=X,this.rebindTextures=lt,this.setupRenderTarget=R,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=et}function oy(i,t){function e(n,r=di){let s;const o=te.getTransfer(r);if(n===kn)return i.UNSIGNED_BYTE;if(n===Ic)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Uc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===df)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===hf)return i.BYTE;if(n===ff)return i.SHORT;if(n===xs)return i.UNSIGNED_SHORT;if(n===Lc)return i.INT;if(n===Xi)return i.UNSIGNED_INT;if(n===ti)return i.FLOAT;if(n===Us)return i.HALF_FLOAT;if(n===mf)return i.ALPHA;if(n===_f)return i.RGB;if(n===Rn)return i.RGBA;if(n===Ms)return i.DEPTH_COMPONENT;if(n===Ss)return i.DEPTH_STENCIL;if(n===gf)return i.RED;if(n===Nc)return i.RED_INTEGER;if(n===vf)return i.RG;if(n===Fc)return i.RG_INTEGER;if(n===Oc)return i.RGBA_INTEGER;if(n===Co||n===Po||n===Do||n===Lo)if(o===se)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Co)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Do)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Co)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Po)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Do)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===El||n===Tl||n===bl||n===wl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===El)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Al||n===Rl||n===Cl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Al||n===Rl)return o===se?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Cl)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pl||n===Dl||n===Ll||n===Il||n===Ul||n===Nl||n===Fl||n===Ol||n===Bl||n===zl||n===kl||n===Hl||n===Vl||n===Gl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Pl)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dl)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ll)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Il)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ul)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nl)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fl)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ol)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bl)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zl)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kl)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hl)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vl)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gl)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wl||n===Xl||n===Yl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Wl)return o===se?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ql||n===$l||n===Zl||n===Kl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ql)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$l)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const ay=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ly=`
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

}`;class cy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Lf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ii({vertexShader:ay,fragmentShader:ly,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new De(new Hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uy extends ji{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,_=null;const g=typeof XRWebGLBinding<"u",m=new cy,p={},M=e.getContextAttributes();let y=null,v=null;const A=[],w=[],C=new dt;let D=null;const S=new gn;S.viewport=new be;const E=new gn;E.viewport=new be;const P=[S,E],O=new R_;let B=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let Z=A[F];return Z===void 0&&(Z=new Na,A[F]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(F){let Z=A[F];return Z===void 0&&(Z=new Na,A[F]=Z),Z.getGripSpace()},this.getHand=function(F){let Z=A[F];return Z===void 0&&(Z=new Na,A[F]=Z),Z.getHandSpace()};function L(F){const Z=w.indexOf(F.inputSource);if(Z===-1)return;const nt=A[Z];nt!==void 0&&(nt.update(F.inputSource,F.frame,l||o),nt.dispatchEvent({type:F.type,data:F.inputSource}))}function z(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",it);for(let F=0;F<A.length;F++){const Z=w[F];Z!==null&&(w[F]=null,A[F].disconnect(Z))}B=null,H=null,m.reset();for(const F in p)delete p[F];t.setRenderTarget(y),d=null,f=null,h=null,r=null,v=null,rt.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(r,e)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",z),r.addEventListener("inputsourceschange",it),M.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(C),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,ft=null,ot=null;M.depth&&(ot=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=M.stencil?Ss:Ms,ft=M.stencil?ys:Xi);const yt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(yt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new qi(f.textureWidth,f.textureHeight,{format:Rn,type:kn,depthTexture:new Df(f.textureWidth,f.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const nt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,nt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new qi(d.framebufferWidth,d.framebufferHeight,{format:Rn,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),rt.setContext(r),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function it(F){for(let Z=0;Z<F.removed.length;Z++){const nt=F.removed[Z],ft=w.indexOf(nt);ft>=0&&(w[ft]=null,A[ft].disconnect(nt))}for(let Z=0;Z<F.added.length;Z++){const nt=F.added[Z];let ft=w.indexOf(nt);if(ft===-1){for(let yt=0;yt<A.length;yt++)if(yt>=w.length){w.push(nt),ft=yt;break}else if(w[yt]===null){w[yt]=nt,ft=yt;break}if(ft===-1)break}const ot=A[ft];ot&&ot.connect(nt)}}const X=new U,pt=new U;function Et(F,Z,nt){X.setFromMatrixPosition(Z.matrixWorld),pt.setFromMatrixPosition(nt.matrixWorld);const ft=X.distanceTo(pt),ot=Z.projectionMatrix.elements,yt=nt.projectionMatrix.elements,lt=ot[14]/(ot[10]-1),R=ot[14]/(ot[10]+1),Y=(ot[9]+1)/ot[5],j=(ot[9]-1)/ot[5],W=(ot[8]-1)/ot[0],$=(yt[8]+1)/yt[0],st=lt*W,et=lt*$,Q=ft/(-W+$),Mt=Q*-W;if(Z.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Mt),F.translateZ(Q),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),ot[10]===-1)F.projectionMatrix.copy(Z.projectionMatrix),F.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const at=lt+Q,T=R+Q,x=st-Mt,N=et+(ft-Mt),G=Y*R/T*at,tt=j*R/T*at;F.projectionMatrix.makePerspective(x,N,G,tt,at,T),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function bt(F,Z){Z===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(Z.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;let Z=F.near,nt=F.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(nt=m.depthFar)),O.near=E.near=S.near=Z,O.far=E.far=S.far=nt,(B!==O.near||H!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),B=O.near,H=O.far),O.layers.mask=F.layers.mask|6,S.layers.mask=O.layers.mask&3,E.layers.mask=O.layers.mask&5;const ft=F.parent,ot=O.cameras;bt(O,ft);for(let yt=0;yt<ot.length;yt++)bt(ot[yt],ft);ot.length===2?Et(O,S,E):O.projectionMatrix.copy(S.projectionMatrix),Ot(F,O,ft)};function Ot(F,Z,nt){nt===null?F.matrix.copy(Z.matrixWorld):(F.matrix.copy(nt.matrixWorld),F.matrix.invert(),F.matrix.multiply(Z.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(Z.projectionMatrix),F.projectionMatrixInverse.copy(Z.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Es*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(F){c=F,f!==null&&(f.fixedFoveation=F),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=F)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(F){return p[F]};let Wt=null;function Zt(F,Z){if(u=Z.getViewerPose(l||o),_=Z,u!==null){const nt=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let ft=!1;nt.length!==O.cameras.length&&(O.cameras.length=0,ft=!0);for(let R=0;R<nt.length;R++){const Y=nt[R];let j=null;if(d!==null)j=d.getViewport(Y);else{const $=h.getViewSubImage(f,Y);j=$.viewport,R===0&&(t.setRenderTargetTextures(v,$.colorTexture,$.depthStencilTexture),t.setRenderTarget(v))}let W=P[R];W===void 0&&(W=new gn,W.layers.enable(R),W.viewport=new be,P[R]=W),W.matrix.fromArray(Y.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(Y.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(j.x,j.y,j.width,j.height),R===0&&(O.matrix.copy(W.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),ft===!0&&O.cameras.push(W)}const ot=r.enabledFeatures;if(ot&&ot.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){h=n.getBinding();const R=h.getDepthInformation(nt[0]);R&&R.isValid&&R.texture&&m.init(R,r.renderState)}if(ot&&ot.includes("camera-access")&&g){t.state.unbindTexture(),h=n.getBinding();for(let R=0;R<nt.length;R++){const Y=nt[R].camera;if(Y){let j=p[Y];j||(j=new Lf,p[Y]=j);const W=h.getCameraImage(Y);j.sourceTexture=W}}}}for(let nt=0;nt<A.length;nt++){const ft=w[nt],ot=A[nt];ft!==null&&ot!==void 0&&ot.update(ft,Z,l||o)}Wt&&Wt(F,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),_=null}const rt=new Wf;rt.setAnimationLoop(Zt),this.setAnimationLoop=function(F){Wt=F},this.dispose=function(){}}}const Ui=new Hn,hy=new pe;function fy(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,wf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),y=M.envMap,v=M.envMapRotation;y&&(m.envMap.value=y,Ui.copy(v),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),m.envMapRotation.value.setFromMatrix4(hy.makeRotationFromEuler(Ui)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function dy(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,y){const v=y.program;n.uniformBlockBinding(M,v)}function l(M,y){let v=r[M.id];v===void 0&&(_(M),v=u(M),r[M.id]=v,M.addEventListener("dispose",m));const A=y.program;n.updateUBOMapping(M,A);const w=t.render.frame;s[M.id]!==w&&(f(M),s[M.id]=w)}function u(M){const y=h();M.__bindingPointIndex=y;const v=i.createBuffer(),A=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const y=r[M.id],v=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,C=v.length;w<C;w++){const D=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,E=D.length;S<E;S++){const P=D[S];if(d(P,w,S,A)===!0){const O=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let L=0;L<B.length;L++){const z=B[L],it=g(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,O+H,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,H),H+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,y,v,A){const w=M.value,C=y+"_"+v;if(A[C]===void 0)return typeof w=="number"||typeof w=="boolean"?A[C]=w:A[C]=w.clone(),!0;{const D=A[C];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return A[C]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function _(M){const y=M.uniforms;let v=0;const A=16;for(let C=0,D=y.length;C<D;C++){const S=Array.isArray(y[C])?y[C]:[y[C]];for(let E=0,P=S.length;E<P;E++){const O=S[E],B=Array.isArray(O.value)?O.value:[O.value];for(let H=0,L=B.length;H<L;H++){const z=B[H],it=g(z),X=v%A,pt=X%it.boundary,Et=X+pt;v+=pt,Et!==0&&A-Et<it.storage&&(v+=A-Et),O.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=it.storage}}}const w=v%A;return w>0&&(v+=A-w),M.__size=v,M.__cache={},this}function g(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const M in r)i.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class py{constructor(t={}){const{canvas:e=lm(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const M=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let A=!1;this._outputColorSpace=an;let w=0,C=0,D=null,S=-1,E=null;const P=new be,O=new be;let B=null;const H=new Gt(0);let L=0,z=e.width,it=e.height,X=1,pt=null,Et=null;const bt=new be(0,0,z,it),Ot=new be(0,0,z,it);let Wt=!1;const Zt=new Vc;let rt=!1,F=!1;const Z=new pe,nt=new U,ft=new be,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function lt(){return D===null?X:1}let R=n;function Y(b,k){return e.getContext(b,k)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Pc}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",Dt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),R===null){const k="webgl2";if(R=Y(k,b),R===null)throw Y(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let j,W,$,st,et,Q,Mt,at,T,x,N,G,tt,q,St,ht,mt,Tt,ut,wt,Ft,It,At,kt;function I(){j=new Tv(R),j.init(),It=new oy(R,j),W=new gv(R,j,t,It),$=new ry(R,j),W.reversedDepthBuffer&&f&&$.buffers.depth.setReversed(!0),st=new Av(R),et=new Xx,Q=new sy(R,j,$,et,W,It,st),Mt=new xv(v),at=new Ev(v),T=new I_(R),At=new mv(R,T),x=new bv(R,T,st,At),N=new Cv(R,x,T,st),ut=new Rv(R,W,Q),ht=new vv(et),G=new Wx(v,Mt,at,j,W,At,ht),tt=new fy(v,et),q=new qx,St=new Qx(j),Tt=new pv(v,Mt,at,$,N,d,c),mt=new ny(v,N,W),kt=new dy(R,st,W,$),wt=new _v(R,j,st),Ft=new wv(R,j,st),st.programs=G.programs,v.capabilities=W,v.extensions=j,v.properties=et,v.renderLists=q,v.shadowMap=mt,v.state=$,v.info=st}I();const _t=new uy(v,R);this.xr=_t,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const b=j.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=j.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(z,it,!1))},this.getSize=function(b){return b.set(z,it)},this.setSize=function(b,k,K=!0){if(_t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=b,it=k,e.width=Math.floor(b*X),e.height=Math.floor(k*X),K===!0&&(e.style.width=b+"px",e.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(z*X,it*X).floor()},this.setDrawingBufferSize=function(b,k,K){z=b,it=k,X=K,e.width=Math.floor(b*K),e.height=Math.floor(k*K),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(bt)},this.setViewport=function(b,k,K,J){b.isVector4?bt.set(b.x,b.y,b.z,b.w):bt.set(b,k,K,J),$.viewport(P.copy(bt).multiplyScalar(X).round())},this.getScissor=function(b){return b.copy(Ot)},this.setScissor=function(b,k,K,J){b.isVector4?Ot.set(b.x,b.y,b.z,b.w):Ot.set(b,k,K,J),$.scissor(O.copy(Ot).multiplyScalar(X).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(b){$.setScissorTest(Wt=b)},this.setOpaqueSort=function(b){pt=b},this.setTransparentSort=function(b){Et=b},this.getClearColor=function(b){return b.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,K=!0){let J=0;if(b){let V=!1;if(D!==null){const vt=D.texture.format;V=vt===Oc||vt===Fc||vt===Nc}if(V){const vt=D.texture.type,Pt=vt===kn||vt===Xi||vt===xs||vt===ys||vt===Ic||vt===Uc,Ut=Tt.getClearColor(),Lt=Tt.getClearAlpha(),Ht=Ut.r,Vt=Ut.g,Bt=Ut.b;Pt?(_[0]=Ht,_[1]=Vt,_[2]=Bt,_[3]=Lt,R.clearBufferuiv(R.COLOR,0,_)):(g[0]=Ht,g[1]=Vt,g[2]=Bt,g[3]=Lt,R.clearBufferiv(R.COLOR,0,g))}else J|=R.COLOR_BUFFER_BIT}k&&(J|=R.DEPTH_BUFFER_BIT),K&&(J|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),Tt.dispose(),q.dispose(),St.dispose(),et.dispose(),Mt.dispose(),at.dispose(),N.dispose(),At.dispose(),kt.dispose(),G.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",Pn),_t.removeEventListener("sessionend",hu),wi.stop()};function xt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const b=st.autoReset,k=mt.enabled,K=mt.autoUpdate,J=mt.needsUpdate,V=mt.type;I(),st.autoReset=b,mt.enabled=k,mt.autoUpdate=K,mt.needsUpdate=J,mt.type=V}function gt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ct(b){const k=b.target;k.removeEventListener("dispose",ct),Nt(k)}function Nt(b){Xt(b),et.remove(b)}function Xt(b){const k=et.get(b).programs;k!==void 0&&(k.forEach(function(K){G.releaseProgram(K)}),b.isShaderMaterial&&G.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,K,J,V,vt){k===null&&(k=ot);const Pt=V.isMesh&&V.matrixWorld.determinant()<0,Ut=Wd(b,k,K,J,V);$.setMaterial(J,Pt);let Lt=K.index,Ht=1;if(J.wireframe===!0){if(Lt=x.getWireframeAttribute(K),Lt===void 0)return;Ht=2}const Vt=K.drawRange,Bt=K.attributes.position;let Kt=Vt.start*Ht,re=(Vt.start+Vt.count)*Ht;vt!==null&&(Kt=Math.max(Kt,vt.start*Ht),re=Math.min(re,(vt.start+vt.count)*Ht)),Lt!==null?(Kt=Math.max(Kt,0),re=Math.min(re,Lt.count)):Bt!=null&&(Kt=Math.max(Kt,0),re=Math.min(re,Bt.count));const Te=re-Kt;if(Te<0||Te===1/0)return;At.setup(V,J,Ut,K,Lt);let me,ce=wt;if(Lt!==null&&(me=T.get(Lt),ce=Ft,ce.setIndex(me)),V.isMesh)J.wireframe===!0?($.setLineWidth(J.wireframeLinewidth*lt()),ce.setMode(R.LINES)):ce.setMode(R.TRIANGLES);else if(V.isLine){let zt=J.linewidth;zt===void 0&&(zt=1),$.setLineWidth(zt*lt()),V.isLineSegments?ce.setMode(R.LINES):V.isLineLoop?ce.setMode(R.LINE_LOOP):ce.setMode(R.LINE_STRIP)}else V.isPoints?ce.setMode(R.POINTS):V.isSprite&&ce.setMode(R.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)bs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ce.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))ce.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const zt=V._multiDrawStarts,ve=V._multiDrawCounts,Qt=V._multiDrawCount,nn=Lt?T.get(Lt).bytesPerElement:1,Qi=et.get(J).currentProgram.getUniforms();for(let rn=0;rn<Qt;rn++)Qi.setValue(R,"_gl_DrawID",rn),ce.render(zt[rn]/nn,ve[rn])}else if(V.isInstancedMesh)ce.renderInstances(Kt,Te,V.count);else if(K.isInstancedBufferGeometry){const zt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ve=Math.min(K.instanceCount,zt);ce.renderInstances(Kt,Te,ve)}else ce.render(Kt,Te)};function fe(b,k,K){b.transparent===!0&&b.side===Je&&b.forceSinglePass===!1?(b.side=tn,b.needsUpdate=!0,Hs(b,k,K),b.side=xi,b.needsUpdate=!0,Hs(b,k,K),b.side=Je):Hs(b,k,K)}this.compile=function(b,k,K=null){K===null&&(K=b),p=St.get(K),p.init(k),y.push(p),K.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),b!==K&&b.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const J=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const vt=V.material;if(vt)if(Array.isArray(vt))for(let Pt=0;Pt<vt.length;Pt++){const Ut=vt[Pt];fe(Ut,K,V),J.add(Ut)}else fe(vt,K,V),J.add(vt)}),p=y.pop(),J},this.compileAsync=function(b,k,K=null){const J=this.compile(b,k,K);return new Promise(V=>{function vt(){if(J.forEach(function(Pt){et.get(Pt).currentProgram.isReady()&&J.delete(Pt)}),J.size===0){V(b);return}setTimeout(vt,10)}j.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let ne=null;function Wn(b){ne&&ne(b)}function Pn(){wi.stop()}function hu(){wi.start()}const wi=new Wf;wi.setAnimationLoop(Wn),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(b){ne=b,_t.setAnimationLoop(b),b===null?wi.stop():wi.start()},_t.addEventListener("sessionstart",Pn),_t.addEventListener("sessionend",hu),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(k),k=_t.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,k,D),p=St.get(b,y.length),p.init(k),y.push(p),Z.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Zt.setFromProjectionMatrix(Z,Fn,k.reversedDepth),F=this.localClippingEnabled,rt=ht.init(this.clippingPlanes,F),m=q.get(b,M.length),m.init(),M.push(m),_t.enabled===!0&&_t.isPresenting===!0){const vt=v.xr.getDepthSensingMesh();vt!==null&&fa(vt,k,-1/0,v.sortObjects)}fa(b,k,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(pt,Et),yt=_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1,yt&&Tt.addToRenderList(m,b),this.info.render.frame++,rt===!0&&ht.beginShadows();const K=p.state.shadowsArray;mt.render(K,b,k),rt===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,V=m.transmissive;if(p.setupLights(),k.isArrayCamera){const vt=k.cameras;if(V.length>0)for(let Pt=0,Ut=vt.length;Pt<Ut;Pt++){const Lt=vt[Pt];du(J,V,b,Lt)}yt&&Tt.render(b);for(let Pt=0,Ut=vt.length;Pt<Ut;Pt++){const Lt=vt[Pt];fu(m,b,Lt,Lt.viewport)}}else V.length>0&&du(J,V,b,k),yt&&Tt.render(b),fu(m,b,k);D!==null&&C===0&&(Q.updateMultisampleRenderTarget(D),Q.updateRenderTargetMipmap(D)),b.isScene===!0&&b.onAfterRender(v,b,k),At.resetDefaultState(),S=-1,E=null,y.pop(),y.length>0?(p=y[y.length-1],rt===!0&&ht.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function fa(b,k,K,J){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)K=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Zt.intersectsSprite(b)){J&&ft.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Z);const Pt=N.update(b),Ut=b.material;Ut.visible&&m.push(b,Pt,Ut,K,ft.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Zt.intersectsObject(b))){const Pt=N.update(b),Ut=b.material;if(J&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ft.copy(b.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),ft.copy(Pt.boundingSphere.center)),ft.applyMatrix4(b.matrixWorld).applyMatrix4(Z)),Array.isArray(Ut)){const Lt=Pt.groups;for(let Ht=0,Vt=Lt.length;Ht<Vt;Ht++){const Bt=Lt[Ht],Kt=Ut[Bt.materialIndex];Kt&&Kt.visible&&m.push(b,Pt,Kt,K,ft.z,Bt)}}else Ut.visible&&m.push(b,Pt,Ut,K,ft.z,null)}}const vt=b.children;for(let Pt=0,Ut=vt.length;Pt<Ut;Pt++)fa(vt[Pt],k,K,J)}function fu(b,k,K,J){const V=b.opaque,vt=b.transmissive,Pt=b.transparent;p.setupLightsView(K),rt===!0&&ht.setGlobalState(v.clippingPlanes,K),J&&$.viewport(P.copy(J)),V.length>0&&ks(V,k,K),vt.length>0&&ks(vt,k,K),Pt.length>0&&ks(Pt,k,K),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function du(b,k,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new qi(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?Us:kn,minFilter:ki,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const vt=p.state.transmissionRenderTarget[J.id],Pt=J.viewport||P;vt.setSize(Pt.z*v.transmissionResolutionScale,Pt.w*v.transmissionResolutionScale);const Ut=v.getRenderTarget(),Lt=v.getActiveCubeFace(),Ht=v.getActiveMipmapLevel();v.setRenderTarget(vt),v.getClearColor(H),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear(),yt&&Tt.render(K);const Vt=v.toneMapping;v.toneMapping=gi;const Bt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),rt===!0&&ht.setGlobalState(v.clippingPlanes,J),ks(b,K,J),Q.updateMultisampleRenderTarget(vt),Q.updateRenderTargetMipmap(vt),j.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let re=0,Te=k.length;re<Te;re++){const me=k[re],ce=me.object,zt=me.geometry,ve=me.material,Qt=me.group;if(ve.side===Je&&ce.layers.test(J.layers)){const nn=ve.side;ve.side=tn,ve.needsUpdate=!0,pu(ce,K,J,zt,ve,Qt),ve.side=nn,ve.needsUpdate=!0,Kt=!0}}Kt===!0&&(Q.updateMultisampleRenderTarget(vt),Q.updateRenderTargetMipmap(vt))}v.setRenderTarget(Ut,Lt,Ht),v.setClearColor(H,L),Bt!==void 0&&(J.viewport=Bt),v.toneMapping=Vt}function ks(b,k,K){const J=k.isScene===!0?k.overrideMaterial:null;for(let V=0,vt=b.length;V<vt;V++){const Pt=b[V],Ut=Pt.object,Lt=Pt.geometry,Ht=Pt.group;let Vt=Pt.material;Vt.allowOverride===!0&&J!==null&&(Vt=J),Ut.layers.test(K.layers)&&pu(Ut,k,K,Lt,Vt,Ht)}}function pu(b,k,K,J,V,vt){b.onBeforeRender(v,k,K,J,V,vt),b.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(v,k,K,J,b,vt),V.transparent===!0&&V.side===Je&&V.forceSinglePass===!1?(V.side=tn,V.needsUpdate=!0,v.renderBufferDirect(K,k,J,V,b,vt),V.side=xi,V.needsUpdate=!0,v.renderBufferDirect(K,k,J,V,b,vt),V.side=Je):v.renderBufferDirect(K,k,J,V,b,vt),b.onAfterRender(v,k,K,J,V,vt)}function Hs(b,k,K){k.isScene!==!0&&(k=ot);const J=et.get(b),V=p.state.lights,vt=p.state.shadowsArray,Pt=V.state.version,Ut=G.getParameters(b,V.state,vt,k,K),Lt=G.getProgramCacheKey(Ut);let Ht=J.programs;J.environment=b.isMeshStandardMaterial?k.environment:null,J.fog=k.fog,J.envMap=(b.isMeshStandardMaterial?at:Mt).get(b.envMap||J.environment),J.envMapRotation=J.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Ht===void 0&&(b.addEventListener("dispose",ct),Ht=new Map,J.programs=Ht);let Vt=Ht.get(Lt);if(Vt!==void 0){if(J.currentProgram===Vt&&J.lightsStateVersion===Pt)return _u(b,Ut),Vt}else Ut.uniforms=G.getUniforms(b),b.onBeforeCompile(Ut,v),Vt=G.acquireProgram(Ut,Lt),Ht.set(Lt,Vt),J.uniforms=Ut.uniforms;const Bt=J.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Bt.clippingPlanes=ht.uniform),_u(b,Ut),J.needsLights=Yd(b),J.lightsStateVersion=Pt,J.needsLights&&(Bt.ambientLightColor.value=V.state.ambient,Bt.lightProbe.value=V.state.probe,Bt.directionalLights.value=V.state.directional,Bt.directionalLightShadows.value=V.state.directionalShadow,Bt.spotLights.value=V.state.spot,Bt.spotLightShadows.value=V.state.spotShadow,Bt.rectAreaLights.value=V.state.rectArea,Bt.ltc_1.value=V.state.rectAreaLTC1,Bt.ltc_2.value=V.state.rectAreaLTC2,Bt.pointLights.value=V.state.point,Bt.pointLightShadows.value=V.state.pointShadow,Bt.hemisphereLights.value=V.state.hemi,Bt.directionalShadowMap.value=V.state.directionalShadowMap,Bt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Bt.spotShadowMap.value=V.state.spotShadowMap,Bt.spotLightMatrix.value=V.state.spotLightMatrix,Bt.spotLightMap.value=V.state.spotLightMap,Bt.pointShadowMap.value=V.state.pointShadowMap,Bt.pointShadowMatrix.value=V.state.pointShadowMatrix),J.currentProgram=Vt,J.uniformsList=null,Vt}function mu(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=Uo.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function _u(b,k){const K=et.get(b);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.batchingColor=k.batchingColor,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function Wd(b,k,K,J,V){k.isScene!==!0&&(k=ot),Q.resetTextureUnits();const vt=k.fog,Pt=J.isMeshStandardMaterial?k.environment:null,Ut=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Pr,Lt=(J.isMeshStandardMaterial?at:Mt).get(J.envMap||Pt),Ht=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Vt=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Bt=!!K.morphAttributes.position,Kt=!!K.morphAttributes.normal,re=!!K.morphAttributes.color;let Te=gi;J.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Te=v.toneMapping);const me=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ce=me!==void 0?me.length:0,zt=et.get(J),ve=p.state.lights;if(rt===!0&&(F===!0||b!==E)){const Ge=b===E&&J.id===S;ht.setState(J,b,Ge)}let Qt=!1;J.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==ve.state.version||zt.outputColorSpace!==Ut||V.isBatchedMesh&&zt.batching===!1||!V.isBatchedMesh&&zt.batching===!0||V.isBatchedMesh&&zt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&zt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&zt.instancing===!1||!V.isInstancedMesh&&zt.instancing===!0||V.isSkinnedMesh&&zt.skinning===!1||!V.isSkinnedMesh&&zt.skinning===!0||V.isInstancedMesh&&zt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&zt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&zt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&zt.instancingMorph===!1&&V.morphTexture!==null||zt.envMap!==Lt||J.fog===!0&&zt.fog!==vt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==ht.numPlanes||zt.numIntersection!==ht.numIntersection)||zt.vertexAlphas!==Ht||zt.vertexTangents!==Vt||zt.morphTargets!==Bt||zt.morphNormals!==Kt||zt.morphColors!==re||zt.toneMapping!==Te||zt.morphTargetsCount!==ce)&&(Qt=!0):(Qt=!0,zt.__version=J.version);let nn=zt.currentProgram;Qt===!0&&(nn=Hs(J,k,V));let Qi=!1,rn=!1,Yr=!1;const xe=nn.getUniforms(),fn=zt.uniforms;if($.useProgram(nn.program)&&(Qi=!0,rn=!0,Yr=!0),J.id!==S&&(S=J.id,rn=!0),Qi||E!==b){$.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),xe.setValue(R,"projectionMatrix",b.projectionMatrix),xe.setValue(R,"viewMatrix",b.matrixWorldInverse);const Ke=xe.map.cameraPosition;Ke!==void 0&&Ke.setValue(R,nt.setFromMatrixPosition(b.matrixWorld)),W.logarithmicDepthBuffer&&xe.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&xe.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,rn=!0,Yr=!0)}if(V.isSkinnedMesh){xe.setOptional(R,V,"bindMatrix"),xe.setOptional(R,V,"bindMatrixInverse");const Ge=V.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),xe.setValue(R,"boneTexture",Ge.boneTexture,Q))}V.isBatchedMesh&&(xe.setOptional(R,V,"batchingTexture"),xe.setValue(R,"batchingTexture",V._matricesTexture,Q),xe.setOptional(R,V,"batchingIdTexture"),xe.setValue(R,"batchingIdTexture",V._indirectTexture,Q),xe.setOptional(R,V,"batchingColorTexture"),V._colorsTexture!==null&&xe.setValue(R,"batchingColorTexture",V._colorsTexture,Q));const dn=K.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&ut.update(V,K,nn),(rn||zt.receiveShadow!==V.receiveShadow)&&(zt.receiveShadow=V.receiveShadow,xe.setValue(R,"receiveShadow",V.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(fn.envMap.value=Lt,fn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&k.environment!==null&&(fn.envMapIntensity.value=k.environmentIntensity),rn&&(xe.setValue(R,"toneMappingExposure",v.toneMappingExposure),zt.needsLights&&Xd(fn,Yr),vt&&J.fog===!0&&tt.refreshFogUniforms(fn,vt),tt.refreshMaterialUniforms(fn,J,X,it,p.state.transmissionRenderTarget[b.id]),Uo.upload(R,mu(zt),fn,Q)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Uo.upload(R,mu(zt),fn,Q),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&xe.setValue(R,"center",V.center),xe.setValue(R,"modelViewMatrix",V.modelViewMatrix),xe.setValue(R,"normalMatrix",V.normalMatrix),xe.setValue(R,"modelMatrix",V.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Ge=J.uniformsGroups;for(let Ke=0,da=Ge.length;Ke<da;Ke++){const Ai=Ge[Ke];kt.update(Ai,nn),kt.bind(Ai,nn)}}return nn}function Xd(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function Yd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,k,K){const J=et.get(b);J.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),et.get(b.texture).__webglTexture=k,et.get(b.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:K,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,k){const K=et.get(b);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0};const qd=R.createFramebuffer();this.setRenderTarget=function(b,k=0,K=0){D=b,w=k,C=K;let J=!0,V=null,vt=!1,Pt=!1;if(b){const Lt=et.get(b);if(Lt.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(R.FRAMEBUFFER,null),J=!1;else if(Lt.__webglFramebuffer===void 0)Q.setupRenderTarget(b);else if(Lt.__hasExternalTextures)Q.rebindTextures(b,et.get(b.texture).__webglTexture,et.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Bt=b.depthTexture;if(Lt.__boundDepthTexture!==Bt){if(Bt!==null&&et.has(Bt)&&(b.width!==Bt.image.width||b.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(b)}}const Ht=b.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Pt=!0);const Vt=et.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Vt[k])?V=Vt[k][K]:V=Vt[k],vt=!0):b.samples>0&&Q.useMultisampledRTT(b)===!1?V=et.get(b).__webglMultisampledFramebuffer:Array.isArray(Vt)?V=Vt[K]:V=Vt,P.copy(b.viewport),O.copy(b.scissor),B=b.scissorTest}else P.copy(bt).multiplyScalar(X).floor(),O.copy(Ot).multiplyScalar(X).floor(),B=Wt;if(K!==0&&(V=qd),$.bindFramebuffer(R.FRAMEBUFFER,V)&&J&&$.drawBuffers(b,V),$.viewport(P),$.scissor(O),$.setScissorTest(B),vt){const Lt=et.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+k,Lt.__webglTexture,K)}else if(Pt){const Lt=k;for(let Ht=0;Ht<b.textures.length;Ht++){const Vt=et.get(b.textures[Ht]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ht,Vt.__webglTexture,K,Lt)}}else if(b!==null&&K!==0){const Lt=et.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Lt.__webglTexture,K)}S=-1},this.readRenderTargetPixels=function(b,k,K,J,V,vt,Pt,Ut=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=et.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(Lt=Lt[Pt]),Lt){$.bindFramebuffer(R.FRAMEBUFFER,Lt);try{const Ht=b.textures[Ut],Vt=Ht.format,Bt=Ht.type;if(!W.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!W.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-J&&K>=0&&K<=b.height-V&&(b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ut),R.readPixels(k,K,J,V,It.convert(Vt),It.convert(Bt),vt))}finally{const Ht=D!==null?et.get(D).__webglFramebuffer:null;$.bindFramebuffer(R.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(b,k,K,J,V,vt,Pt,Ut=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=et.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(Lt=Lt[Pt]),Lt)if(k>=0&&k<=b.width-J&&K>=0&&K<=b.height-V){$.bindFramebuffer(R.FRAMEBUFFER,Lt);const Ht=b.textures[Ut],Vt=Ht.format,Bt=Ht.type;if(!W.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!W.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Kt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Kt),R.bufferData(R.PIXEL_PACK_BUFFER,vt.byteLength,R.STREAM_READ),b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ut),R.readPixels(k,K,J,V,It.convert(Vt),It.convert(Bt),0);const re=D!==null?et.get(D).__webglFramebuffer:null;$.bindFramebuffer(R.FRAMEBUFFER,re);const Te=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await cm(R,Te,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Kt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,vt),R.deleteBuffer(Kt),R.deleteSync(Te),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,k=null,K=0){const J=Math.pow(2,-K),V=Math.floor(b.image.width*J),vt=Math.floor(b.image.height*J),Pt=k!==null?k.x:0,Ut=k!==null?k.y:0;Q.setTexture2D(b,0),R.copyTexSubImage2D(R.TEXTURE_2D,K,0,0,Pt,Ut,V,vt),$.unbindTexture()};const $d=R.createFramebuffer(),Zd=R.createFramebuffer();this.copyTextureToTexture=function(b,k,K=null,J=null,V=0,vt=null){vt===null&&(V!==0?(bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),vt=V,V=0):vt=0);let Pt,Ut,Lt,Ht,Vt,Bt,Kt,re,Te;const me=b.isCompressedTexture?b.mipmaps[vt]:b.image;if(K!==null)Pt=K.max.x-K.min.x,Ut=K.max.y-K.min.y,Lt=K.isBox3?K.max.z-K.min.z:1,Ht=K.min.x,Vt=K.min.y,Bt=K.isBox3?K.min.z:0;else{const dn=Math.pow(2,-V);Pt=Math.floor(me.width*dn),Ut=Math.floor(me.height*dn),b.isDataArrayTexture?Lt=me.depth:b.isData3DTexture?Lt=Math.floor(me.depth*dn):Lt=1,Ht=0,Vt=0,Bt=0}J!==null?(Kt=J.x,re=J.y,Te=J.z):(Kt=0,re=0,Te=0);const ce=It.convert(k.format),zt=It.convert(k.type);let ve;k.isData3DTexture?(Q.setTexture3D(k,0),ve=R.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Q.setTexture2DArray(k,0),ve=R.TEXTURE_2D_ARRAY):(Q.setTexture2D(k,0),ve=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,k.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,k.unpackAlignment);const Qt=R.getParameter(R.UNPACK_ROW_LENGTH),nn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Qi=R.getParameter(R.UNPACK_SKIP_PIXELS),rn=R.getParameter(R.UNPACK_SKIP_ROWS),Yr=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,me.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,me.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ht),R.pixelStorei(R.UNPACK_SKIP_ROWS,Vt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Bt);const xe=b.isDataArrayTexture||b.isData3DTexture,fn=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){const dn=et.get(b),Ge=et.get(k),Ke=et.get(dn.__renderTarget),da=et.get(Ge.__renderTarget);$.bindFramebuffer(R.READ_FRAMEBUFFER,Ke.__webglFramebuffer),$.bindFramebuffer(R.DRAW_FRAMEBUFFER,da.__webglFramebuffer);for(let Ai=0;Ai<Lt;Ai++)xe&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,et.get(b).__webglTexture,V,Bt+Ai),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,et.get(k).__webglTexture,vt,Te+Ai)),R.blitFramebuffer(Ht,Vt,Pt,Ut,Kt,re,Pt,Ut,R.DEPTH_BUFFER_BIT,R.NEAREST);$.bindFramebuffer(R.READ_FRAMEBUFFER,null),$.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||et.has(b)){const dn=et.get(b),Ge=et.get(k);$.bindFramebuffer(R.READ_FRAMEBUFFER,$d),$.bindFramebuffer(R.DRAW_FRAMEBUFFER,Zd);for(let Ke=0;Ke<Lt;Ke++)xe?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,dn.__webglTexture,V,Bt+Ke):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,dn.__webglTexture,V),fn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ge.__webglTexture,vt,Te+Ke):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ge.__webglTexture,vt),V!==0?R.blitFramebuffer(Ht,Vt,Pt,Ut,Kt,re,Pt,Ut,R.COLOR_BUFFER_BIT,R.NEAREST):fn?R.copyTexSubImage3D(ve,vt,Kt,re,Te+Ke,Ht,Vt,Pt,Ut):R.copyTexSubImage2D(ve,vt,Kt,re,Ht,Vt,Pt,Ut);$.bindFramebuffer(R.READ_FRAMEBUFFER,null),$.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else fn?b.isDataTexture||b.isData3DTexture?R.texSubImage3D(ve,vt,Kt,re,Te,Pt,Ut,Lt,ce,zt,me.data):k.isCompressedArrayTexture?R.compressedTexSubImage3D(ve,vt,Kt,re,Te,Pt,Ut,Lt,ce,me.data):R.texSubImage3D(ve,vt,Kt,re,Te,Pt,Ut,Lt,ce,zt,me):b.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,vt,Kt,re,Pt,Ut,ce,zt,me.data):b.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,vt,Kt,re,me.width,me.height,ce,me.data):R.texSubImage2D(R.TEXTURE_2D,vt,Kt,re,Pt,Ut,ce,zt,me);R.pixelStorei(R.UNPACK_ROW_LENGTH,Qt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,nn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Qi),R.pixelStorei(R.UNPACK_SKIP_ROWS,rn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Yr),vt===0&&k.generateMipmaps&&R.generateMipmap(ve),$.unbindTexture()},this.initRenderTarget=function(b){et.get(b).__webglFramebuffer===void 0&&Q.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Q.setTextureCube(b,0):b.isData3DTexture?Q.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Q.setTexture2DArray(b,0):Q.setTexture2D(b,0),$.unbindTexture()},this.resetState=function(){w=0,C=0,D=null,$.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}const Dh={type:"change"},$c={type:"start"},Zf={type:"end"},Eo=new Os,Lh=new fi,my=Math.cos(70*am.DEG2RAD),Pe=new U,je=2*Math.PI,ae={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Qa=1e-6;class _y extends D_{constructor(t,e=null){super(t,e),this.state=ae.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Er.ROTATE,MIDDLE:Er.DOLLY,RIGHT:Er.PAN},this.touches={ONE:xr.ROTATE,TWO:xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Yi,this._lastTargetPosition=new U,this._quat=new Yi().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new sh,this._sphericalDelta=new sh,this._scale=1,this._panOffset=new U,this._rotateStart=new dt,this._rotateEnd=new dt,this._rotateDelta=new dt,this._panStart=new dt,this._panEnd=new dt,this._panDelta=new dt,this._dollyStart=new dt,this._dollyEnd=new dt,this._dollyDelta=new dt,this._dollyDirection=new U,this._mouse=new dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=vy.bind(this),this._onPointerDown=gy.bind(this),this._onPointerUp=xy.bind(this),this._onContextMenu=wy.bind(this),this._onMouseWheel=Sy.bind(this),this._onKeyDown=Ey.bind(this),this._onTouchStart=Ty.bind(this),this._onTouchMove=by.bind(this),this._onMouseDown=yy.bind(this),this._onMouseMove=My.bind(this),this._interceptControlDown=Ay.bind(this),this._interceptControlUp=Ry.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Dh),this.update(),this.state=ae.NONE}update(t=null){const e=this.object.position;Pe.copy(e).sub(this.target),Pe.applyQuaternion(this._quat),this._spherical.setFromVector3(Pe),this.autoRotate&&this.state===ae.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=je:n>Math.PI&&(n-=je),r<-Math.PI?r+=je:r>Math.PI&&(r-=je),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Pe.setFromSpherical(this._spherical),Pe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Pe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Pe.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new U(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Pe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Eo.origin.copy(this.object.position),Eo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Eo.direction))<my?this.object.lookAt(this.target):(Lh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Eo.intersectPlane(Lh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Qa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Qa||this._lastTargetPosition.distanceToSquared(this.target)>Qa?(this.dispatchEvent(Dh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?je/60*this.autoRotateSpeed*t:je/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Pe.setFromMatrixColumn(e,0),Pe.multiplyScalar(-t),this._panOffset.add(Pe)}_panUp(t,e){this.screenSpacePanning===!0?Pe.setFromMatrixColumn(e,1):(Pe.setFromMatrixColumn(e,0),Pe.crossVectors(this.object.up,Pe)),Pe.multiplyScalar(t),this._panOffset.add(Pe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Pe.copy(r).sub(this.target);let s=Pe.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(je*this._rotateDelta.x/e.clientHeight),this._rotateUp(je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(je*this._rotateDelta.x/e.clientHeight),this._rotateUp(je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new dt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function gy(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function vy(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function xy(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zf),this.state=ae.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function yy(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Er.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ae.DOLLY;break;case Er.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ae.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ae.ROTATE}break;case Er.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ae.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ae.PAN}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent($c)}function My(i){switch(this.state){case ae.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ae.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ae.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Sy(i){this.enabled===!1||this.enableZoom===!1||this.state!==ae.NONE||(i.preventDefault(),this.dispatchEvent($c),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Zf))}function Ey(i){this.enabled!==!1&&this._handleKeyDown(i)}function Ty(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case xr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ae.TOUCH_ROTATE;break;case xr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ae.TOUCH_PAN;break;default:this.state=ae.NONE}break;case 2:switch(this.touches.TWO){case xr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ae.TOUCH_DOLLY_PAN;break;case xr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ae.TOUCH_DOLLY_ROTATE;break;default:this.state=ae.NONE}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent($c)}function by(i){switch(this._trackPointer(i),this.state){case ae.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ae.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ae.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ae.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ae.NONE}}function wy(i){this.enabled!==!1&&i.preventDefault()}function Ay(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ry(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Qn(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Kf(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ir={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ur={duration:.5,overwrite:!1,delay:0},Zc,Oe,ge,xn=1e8,he=1/xn,oc=Math.PI*2,Cy=oc/4,Py=0,jf=Math.sqrt,Dy=Math.cos,Ly=Math.sin,Ve=function(t){return typeof t=="string"},we=function(t){return typeof t=="function"},ri=function(t){return typeof t=="number"},Jf=function(t){return typeof t>"u"},Vn=function(t){return typeof t=="object"},en=function(t){return t!==!1},Kc=function(){return typeof window<"u"},To=function(t){return we(t)||Ve(t)},Qf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},He=Array.isArray,Iy=/random\([^)]+\)/g,Uy=/,\s*/g,Ih=/(?:-?\.?\d|\.)+/gi,Ny=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,td=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,tl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Fy=/[+-]=-?[.\d]+/,Oy=/[^,'"\[\]\s]+/gi,By=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Me,Ln,ac,jc,un={},Ko={},ed,nd=function(t){return(Ko=Nr(t,un))&&qe},id=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Cs=function(t,e){return!e&&console.warn(t)},rd=function(t,e){return t&&(un[t]=e)&&Ko&&(Ko[t]=e)||un},Ps=function(){return 0},zy={suppressEvents:!0,isStart:!0,kill:!1},No={suppressEvents:!0,kill:!1},ky={suppressEvents:!0},Jc={},vi=[],lc={},sd,_n={},el={},Uh=30,Fo=[],Qc="",tu=function(t){var e=t[0],n,r;if(Vn(e)||we(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(r=Fo.length;r--&&!Fo[r].targetTest(e););n=Fo[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new dM(t[r],n)))||t.splice(r,1);return t},ps=function(t){return t._gsap||tu(yn(t))[0]._gsap},Hy=function(t,e,n){return(n=t[e])&&we(n)?t[e]():Jf(n)&&t.getAttribute&&t.getAttribute(e)||n},si=function(t,e){return(t=t.split(",")).forEach(e)||t},Vy=function(t){return Math.round(t*1e5)/1e5||0},ye=function(t){return Math.round(t*1e7)/1e7||0},od=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},Gy=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},jo=function(){var t=vi.length,e=vi.slice(0),n,r;for(lc={},vi.length=0,n=0;n<t;n++)r=e[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},eu=function(t){return!!(t._initted||t._startAt||t.add)},ad=function(t,e,n,r){vi.length&&!Oe&&jo(),t.render(e,n,r||!!(Oe&&e<0&&eu(t))),vi.length&&!Oe&&jo()},ld=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Oy).length<2?e:Ve(t)?t.trim():t},cd=function(t){return t},hn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Wy=function(t){return function(e,n){for(var r in n)r in e||r==="duration"&&t||r==="ease"||(e[r]=n[r])}},Nr=function(t,e){for(var n in e)t[n]=e[n];return t},Nh=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Vn(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},Jo=function(t,e){var n={},r;for(r in t)r in e||(n[r]=t[r]);return n},ms=function(t){var e=t.parent||Me,n=t.keyframes?Wy(He(t.keyframes)):hn;if(en(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Xy=function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0},ud=function(t,e,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},ca=function(t,e,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},yi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Vi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Yy=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},cc=function(t,e,n,r){return t._startAt&&(Oe?t._startAt.revert(No):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},qy=function i(t){return!t||t._ts&&i(t.parent)},Fh=function(t){return t._repeat?Fr(t._tTime,t=t.duration()+t._rDelay)*t:0},Fr=function(t,e){var n=Math.floor(t=ye(t/e));return t&&n===t?n-1:n},Qo=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ua=function(t){return t._end=ye(t._start+(t._tDur/Math.abs(t._ts||t._rts||he)||0))},ha=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ye(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ua(t),n._dirty||Vi(n,t)),t},hd=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Qo(t.rawTime(),e),(!e._dur||zs(0,e.totalDuration(),n)-e._tTime>he)&&e.render(n,!0)),Vi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-he}},Un=function(t,e,n,r){return e.parent&&yi(e),e._start=ye((ri(n)?n:n||t!==Me?mn(t,n,e):t._time)+e._delay),e._end=ye(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),ud(t,e,"_first","_last",t._sort?"_start":0),uc(e)||(t._recent=e),r||hd(t,e),t._ts<0&&ha(t,t._tTime),t},fd=function(t,e){return(un.ScrollTrigger||id("scrollTrigger",e))&&un.ScrollTrigger.create(e,t)},dd=function(t,e,n,r,s){if(ru(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Oe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&sd!==wn.frame)return vi.push(t),t._lazy=[s,r],1},$y=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},uc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Zy=function(t,e,n,r){var s=t.ratio,o=e<0||!e&&(!t._start&&$y(t)&&!(!t._initted&&uc(t))||(t._ts<0||t._dp._ts<0)&&!uc(t))?0:1,a=t._rDelay,c=0,l,u,h;if(a&&t._repeat&&(c=zs(0,t._tDur,e),u=Fr(c,a),t._yoyo&&u&1&&(o=1-o),u!==Fr(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Oe||r||t._zTime===he||!e&&t._zTime){if(!t._initted&&dd(t,e,r,n,c))return;for(h=t._zTime,t._zTime=e||(n?he:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=c,l=t._pt;l;)l.r(o,l.d),l=l._next;e<0&&cc(t,e,n,!0),t._onUpdate&&!n&&cn(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&cn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&yi(t,1),!n&&!Oe&&(cn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Ky=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},Or=function(t,e,n,r){var s=t._repeat,o=ye(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:ye(o*(s+1)+t._rDelay*s):o,a>0&&!r&&ha(t,t._tTime=t._tDur*a),t.parent&&ua(t),n||Vi(t.parent,t),t},Oh=function(t){return t instanceof $e?Vi(t):Or(t,t._dur)},jy={_start:0,endTime:Ps,totalDuration:Ps},mn=function i(t,e,n){var r=t.labels,s=t._recent||jy,o=t.duration()>=xn?s.endTime(!1):t._dur,a,c,l;return Ve(e)&&(isNaN(e)||e in r)?(c=e.charAt(0),l=e.substr(-1)==="%",a=e.indexOf("="),c==="<"||c===">"?(a>=0&&(e=e.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(a<0?s:n).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(c=parseFloat(e.charAt(a-1)+e.substr(a+1)),l&&n&&(c=c/100*(He(n)?n[0]:n).totalDuration()),a>1?i(t,e.substr(0,a-1),n)+c:o+c)):e==null?o:+e},_s=function(t,e,n){var r=ri(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,c;if(r&&(o.duration=e[1]),o.parent=n,t){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=en(c.vars.inherit)&&c.parent;o.immediateRender=en(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Ce(e[0],o,e[s+1])},bi=function(t,e){return t||t===0?e(t):e},zs=function(t,e,n){return n<t?t:n>e?e:n},Mi=function(t,e){return!Ve(t)||!(e=By.exec(t))?"":e[1]},Jy=function(t,e,n){return bi(n,function(r){return zs(t,e,r)})},hc=[].slice,pd=function(t,e){return t&&Vn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Vn(t[0]))&&!t.nodeType&&t!==Ln},Qy=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(r){var s;return Ve(r)&&!e||pd(r,1)?(s=n).push.apply(s,yn(r)):n.push(r)})||n},yn=function(t,e,n){return ge&&!e&&ge.selector?ge.selector(t):Ve(t)&&!n&&(ac||!Br())?hc.call((e||jc).querySelectorAll(t),0):He(t)?Qy(t,n):pd(t)?hc.call(t,0):t?[t]:[]},fc=function(t){return t=yn(t)[0]||Cs("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return yn(e,n.querySelectorAll?n:n===t?Cs("Invalid scope")||jc.createElement("div"):t)}},md=function(t){return t.sort(function(){return .5-Math.random()})},_d=function(t){if(we(t))return t;var e=Vn(t)?t:{each:t},n=Gi(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,c=isNaN(r)||a,l=e.axis,u=r,h=r;return Ve(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&c&&(u=r[0],h=r[1]),function(f,d,_){var g=(_||e).length,m=o[g],p,M,y,v,A,w,C,D,S;if(!m){if(S=e.grid==="auto"?0:(e.grid||[1,xn])[1],!S){for(C=-xn;C<(C=_[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(m=o[g]=[],p=c?Math.min(S,g)*u-.5:r%S,M=S===xn?0:c?g*h/S-.5:r/S|0,C=0,D=xn,w=0;w<g;w++)y=w%S-p,v=M-(w/S|0),m[w]=A=l?Math.abs(l==="y"?v:y):jf(y*y+v*v),A>C&&(C=A),A<D&&(D=A);r==="random"&&md(m),m.max=C-D,m.min=D,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(S>g?g-1:l?l==="y"?g/S:S:Math.max(S,g/S))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Mi(e.amount||e.each)||0,n=n&&g<0?bd(n):n}return g=(m[f]-m.min)/m.max||0,ye(m.b+(n?n(g):g)*m.v)+m.u}},dc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=ye(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(ri(n)?0:Mi(n))}},gd=function(t,e){var n=He(t),r,s;return!n&&Vn(t)&&(r=n=t.radius||xn,t.values?(t=yn(t.values),(s=!ri(t[0]))&&(r*=r)):t=dc(t.increment)),bi(e,n?we(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),c=parseFloat(s?o.y:0),l=xn,u=0,h=t.length,f,d;h--;)s?(f=t[h].x-a,d=t[h].y-c,f=f*f+d*d):f=Math.abs(t[h]-a),f<l&&(l=f,u=h);return u=!r||l<=r?t[u]:o,s||u===o||ri(o)?u:u+Mi(o)}:dc(t))},vd=function(t,e,n,r){return bi(He(t)?!e:n===!0?!!(n=0):!r,function(){return He(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*r)/r})},tM=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduce(function(s,o){return o(s)},r)}},eM=function(t,e){return function(n){return t(parseFloat(n))+(e||Mi(n))}},nM=function(t,e,n){return yd(t,e,0,1,n)},xd=function(t,e,n){return bi(n,function(r){return t[~~e(r)]})},iM=function i(t,e,n){var r=e-t;return He(t)?xd(t,i(0,t.length),e):bi(n,function(s){return(r+(s-t)%r)%r+t})},rM=function i(t,e,n){var r=e-t,s=r*2;return He(t)?xd(t,i(0,t.length-1),e):bi(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},nu=function(t){return t.replace(Iy,function(e){var n=e.indexOf("[")+1,r=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Uy);return vd(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},yd=function(t,e,n,r,s){var o=e-t,a=r-n;return bi(s,function(c){return n+((c-t)/o*a||0)})},sM=function i(t,e,n,r){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=Ve(t),a={},c,l,u,h,f;if(n===!0&&(r=1)&&(n=null),o)t={p:t},e={p:e};else if(He(t)&&!He(e)){for(u=[],h=t.length,f=h-2,l=1;l<h;l++)u.push(i(t[l-1],t[l]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=e}else r||(t=Nr(He(t)?[]:{},t));if(!u){for(c in e)iu.call(a,t,c,"get",e[c]);s=function(_){return ou(_,a)||(o?t.p:t)}}}return bi(n,s)},Bh=function(t,e,n){var r=t.labels,s=xn,o,a,c;for(o in r)a=r[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(c=o,s=a);return c},cn=function(t,e,n){var r=t.vars,s=r[e],o=ge,a=t._ctx,c,l,u;if(s)return c=r[e+"Params"],l=r.callbackScope||t,n&&vi.length&&jo(),a&&(ge=a),u=c?s.apply(l,c):s.call(l),ge=o,u},os=function(t){return yi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Oe),t.progress()<1&&cn(t,"onInterrupt"),t},Sr,Md=[],Sd=function(t){if(t)if(t=!t.name&&t.default||t,Kc()||t.headless){var e=t.name,n=we(t),r=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Ps,render:ou,add:iu,kill:bM,modifier:TM,rawVars:0},o={targetTest:0,get:0,getSetter:Dd,aliases:{},register:0};if(Br(),t!==r){if(_n[e])return;hn(r,hn(Jo(t,s),o)),Nr(r.prototype,Nr(s,Jo(t,o))),_n[r.prop=e]=r,t.targetTest&&(Fo.push(r),Jc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}rd(e,r),t.register&&t.register(qe,r,Xr)}else Md.push(t)},ue=255,as={aqua:[0,ue,ue],lime:[0,ue,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ue],navy:[0,0,128],white:[ue,ue,ue],olive:[128,128,0],yellow:[ue,ue,0],orange:[ue,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ue,0,0],pink:[ue,192,203],cyan:[0,ue,ue],transparent:[ue,ue,ue,0]},nl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ue+.5|0},Ed=function(t,e,n){var r=t?ri(t)?[t>>16,t>>8&ue,t&ue]:0:as.black,s,o,a,c,l,u,h,f,d,_;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),as[t])r=as[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&ue,r&ue,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&ue,t&ue]}else if(t.substr(0,3)==="hsl"){if(r=_=t.match(Ih),!e)c=+r[0]%360/360,l=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(l+1):u+l-u*l,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=nl(c+1/3,s,o),r[1]=nl(c,s,o),r[2]=nl(c-1/3,s,o);else if(~t.indexOf("="))return r=t.match(Ny),n&&r.length<4&&(r[3]=1),r}else r=t.match(Ih)||as.transparent;r=r.map(Number)}return e&&!_&&(s=r[0]/ue,o=r[1]/ue,a=r[2]/ue,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?c=l=0:(d=h-f,l=u>.5?d/(2-h-f):d/(h+f),c=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,c*=60),r[0]=~~(c+.5),r[1]=~~(l*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Td=function(t){var e=[],n=[],r=-1;return t.split(wr).forEach(function(s){var o=s.match(td)||[];e.push.apply(e,o),n.push(r+=o.length+1)}),e.c=n,e},zh=function(t,e,n){var r="",s=(t+r).match(wr),o=e?"hsla(":"rgba(",a=0,c,l,u,h;if(!s)return t;if(s=s.map(function(f){return(f=Ed(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Td(t),c=n.c,c.join(r)!==u.c.join(r)))for(l=t.replace(wr,"1").split(td),h=l.length-1;a<h;a++)r+=l[a]+(~c.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!l)for(l=t.split(wr),h=l.length-1;a<h;a++)r+=l[a]+s[a];return r+l[h]},wr=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in as)i+="|"+t+"\\b";return new RegExp(i+")","gi")}(),oM=/hsl[a]?\(/,aM=function(t){var e=t.join(" "),n;if(wr.lastIndex=0,wr.test(e))return n=oM.test(e),t[1]=zh(t[1],n),t[0]=zh(t[0],n,Td(t[1])),!0},Ds,wn=function(){var i=Date.now,t=500,e=33,n=i(),r=n,s=1e3/240,o=s,a=[],c,l,u,h,f,d,_=function g(m){var p=i()-r,M=m===!0,y,v,A,w;if((p>t||p<0)&&(n+=p-e),r+=p,A=r-n,y=A-o,(y>0||M)&&(w=++h.frame,f=A-h.time*1e3,h.time=A=A/1e3,o+=y+(y>=s?4:s-y),v=1),M||(c=l(g)),v)for(d=0;d<a.length;d++)a[d](A,f,w,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){ed&&(!ac&&Kc()&&(Ln=ac=window,jc=Ln.document||{},un.gsap=qe,(Ln.gsapVersions||(Ln.gsapVersions=[])).push(qe.version),nd(Ko||Ln.GreenSockGlobals||!Ln.gsap&&Ln||{}),Md.forEach(Sd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&h.sleep(),l=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Ds=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Ds=0,l=Ps},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,M){var y=p?function(v,A,w,C){m(v,A,w,C),h.remove(y)}:m;return h.remove(m),a[M?"unshift":"push"](y),Br(),y},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h}(),Br=function(){return!Ds&&wn.wake()},jt={},lM=/^[\d.\-M][\d.\-,\s]/,cM=/["']/g,uM=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),r=n[0],s=1,o=n.length,a,c,l;s<o;s++)c=n[s],a=s!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),e[r]=isNaN(l)?l.replace(cM,"").trim():+l,r=c.substr(a+1).trim();return e},hM=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},fM=function(t){var e=(t+"").split("("),n=jt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[uM(e[1])]:hM(t).split(",").map(ld)):jt._CE&&lM.test(t)?jt._CE("",t):n},bd=function(t){return function(e){return 1-t(1-e)}},wd=function i(t,e){for(var n=t._first,r;n;)n instanceof $e?i(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?i(n.timeline,e):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=e)),n=n._next},Gi=function(t,e){return t&&(we(t)?t:jt[t]||fM(t))||e},Ji=function(t,e,n,r){n===void 0&&(n=function(c){return 1-e(1-c)}),r===void 0&&(r=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:r},o;return si(t,function(a){jt[a]=un[a]=s,jt[o=a.toLowerCase()]=n;for(var c in s)jt[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=jt[a+"."+c]=s[c]}),s},Ad=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},il=function i(t,e,n){var r=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/oc*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*Ly((u-o)*s)+1},c=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:Ad(a);return s=oc/s,c.config=function(l,u){return i(t,l,u)},c},rl=function i(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Ad(n);return r.config=function(s){return i(t,s)},r};si("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;Ji(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});jt.Linear.easeNone=jt.none=jt.Linear.easeIn;Ji("Elastic",il("in"),il("out"),il());(function(i,t){var e=1/t,n=2*e,r=2.5*e,s=function(a){return a<e?i*a*a:a<n?i*Math.pow(a-1.5/t,2)+.75:a<r?i*(a-=2.25/t)*a+.9375:i*Math.pow(a-2.625/t,2)+.984375};Ji("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ji("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Ji("Circ",function(i){return-(jf(1-i*i)-1)});Ji("Sine",function(i){return i===1?1:-Dy(i*Cy)+1});Ji("Back",rl("in"),rl("out"),rl());jt.SteppedEase=jt.steps=un.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,r=t+(e?0:1),s=e?1:0,o=1-he;return function(a){return((r*zs(0,o,a)|0)+s)*n}}};Ur.ease=jt["quad.out"];si("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Qc+=i+","+i+"Params,"});var dM=function(t,e){this.id=Py++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Hy,this.set=e?e.getSetter:Dd},Ls=function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Or(this,+e.duration,1,1),this.data=e.data,ge&&(this._ctx=ge,ge.data.push(this)),Ds||wn.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Or(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(Br(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ha(this,n),!s._dp||s.parent||hd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Un(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===he||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ad(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Fh(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Fh(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Fr(this._tTime,s)+1:1},t.timeScale=function(n,r){if(!arguments.length)return this._rts===-he?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Qo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-he?0:this._rts,this.totalTime(zs(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),ua(this),Yy(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Br(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==he&&(this._tTime-=he)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=ye(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Un(r,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(en(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Qo(r.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=ky);var r=Oe;return Oe=n,eu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Oe=r,this},t.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Oh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Oh(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(mn(this,n),en(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,en(r)),this._dur||(this._zTime=-he),this},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-he:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-he,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-he)},t.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},t.then=function(n){var r=this,s=r._prom;return new Promise(function(o){var a=we(n)?n:cd,c=function(){var u=r.then;r.then=null,s&&s(),we(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?c():r._prom=c})},t.kill=function(){os(this)},i}();hn(Ls.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-he,_prom:0,_ps:!1,_rts:1});var $e=function(i){Kf(t,i);function t(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=en(n.sortChildren),Me&&Un(n.parent||Me,Qn(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&fd(Qn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return _s(0,arguments,this),this},e.from=function(r,s,o){return _s(1,arguments,this),this},e.fromTo=function(r,s,o,a){return _s(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,ms(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ce(r,s,mn(this,o),1),this},e.call=function(r,s,o){return Un(this,Ce.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,c,l,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=u,o.parent=this,new Ce(r,o,mn(this,c)),this},e.staggerFrom=function(r,s,o,a,c,l,u){return o.runBackwards=1,ms(o).immediateRender=en(o.immediateRender),this.staggerTo(r,s,o,a,c,l,u)},e.staggerFromTo=function(r,s,o,a,c,l,u,h){return a.startAt=o,ms(a).immediateRender=en(a.immediateRender),this.staggerTo(r,s,a,c,l,u,h)},e.render=function(r,s,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=r<=0?0:ye(r),h=this._zTime<0!=r<0&&(this._initted||!l),f,d,_,g,m,p,M,y,v,A,w,C;if(this!==Me&&u>c&&r>=0&&(u=c),u!==this._tTime||o||h){if(a!==this._time&&l&&(u+=this._time-a,r+=this._time-a),f=u,v=this._start,y=this._ts,p=!y,h&&(l||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=l+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=ye(u%m),u===c?(g=this._repeat,f=l):(A=ye(u/m),g=~~A,g&&g===A&&(f=l,g--),f>l&&(f=l)),A=Fr(this._tTime,m),!a&&this._tTime&&A!==g&&this._tTime-A*m-this._dur<=0&&(A=g),w&&g&1&&(f=l-f,C=1),g!==A&&!this._lock){var D=w&&A&1,S=D===(w&&g&1);if(g<A&&(D=!D),a=D?0:u%l?l:u,this._lock=1,this.render(a||(C?0:ye(g*m)),s,!l)._lock=0,this._tTime=u,!s&&this.parent&&cn(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1,A=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,S&&(this._lock=2,a=D?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;wd(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Ky(this,ye(a),ye(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&l&&!s&&!A&&(cn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){M=0,_&&(u+=this._zTime=-he);break}}d=_}else{d=this._last;for(var E=r<0?r:f;d;){if(_=d._prev,(d._act||E<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(E-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(E-d._start)*d._ts,s,o||Oe&&eu(d)),f!==this._time||!this._ts&&!p){M=0,_&&(u+=this._zTime=E?-he:he);break}}d=_}}if(M&&!s&&(this.pause(),M.render(f>=a?0:-he)._zTime=f>=a?1:-1,this._ts))return this._start=v,ua(this),this.render(r,s,o);this._onUpdate&&!s&&cn(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((r||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&yi(this,1),!s&&!(r<0&&!a)&&(u||a||!c)&&(cn(this,u===c&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(ri(s)||(s=mn(this,s,r)),!(r instanceof Ls)){if(He(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Ve(r))return this.addLabel(r,s);if(we(r))r=Ce.delayedCall(0,r);else return this}return this!==r?Un(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-xn);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof Ce?s&&c.push(l):(o&&c.push(l),r&&c.push.apply(c,l.getChildren(!0,s,o)))),l=l._next;return c},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return Ve(r)?this.removeLabel(r):we(r)?this.killTweensOf(r):(r.parent===this&&ca(this,r),r===this._recent&&(this._recent=this._last),Vi(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ye(wn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=mn(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=Ce.delayedCall(0,s||Ps,o);return a.data="isPause",this._hasPause=1,Un(this,a,mn(this,r))},e.removePause=function(r){var s=this._first;for(r=mn(this,r);s;)s._start===r&&s.data==="isPause"&&yi(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),c=a.length;c--;)pi!==a[c]&&a[c].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=yn(r),c=this._first,l=ri(s),u;c;)c instanceof Ce?Gy(c._targets,a)&&(l?(!pi||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&o.push(c):(u=c.getTweensOf(a,s)).length&&o.push.apply(o,u),c=c._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=mn(o,r),c=s,l=c.startAt,u=c.onStart,h=c.onStartParams,f=c.immediateRender,d,_=Ce.to(o,hn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||he,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());_._dur!==m&&Or(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,hn({startAt:{time:mn(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),Bh(this,mn(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),Bh(this,mn(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+he)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,c=this.labels,l;for(r=ye(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(l in c)c[l]>=o&&(c[l]+=r);return Vi(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Vi(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,c=xn,l,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,Un(o,a,u-a._delay,1)._lock=0):c=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=ye(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),c=0),a._end>s&&a._ts&&(s=a._end),a=l;Or(o,o===Me&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(Me._ts&&(ad(Me,Qo(r,Me)),sd=wn.frame),wn.frame>=Uh){Uh+=Ir.autoSleep||120;var s=Me._first;if((!s||!s._ts)&&Ir.autoSleep&&wn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||wn.sleep()}}},t}(Ls);hn($e.prototype,{_lock:0,_hasPause:0,_forcing:0});var pM=function(t,e,n,r,s,o,a){var c=new Xr(this._pt,t,e,0,1,EM,null,s),l=0,u=0,h,f,d,_,g,m,p,M;for(c.b=n,c.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=nu(r)),o&&(M=[n,r],o(M,t,e),n=M[0],r=M[1]),f=n.match(tl)||[];h=tl.exec(r);)_=h[0],g=r.substring(l,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(m=parseFloat(f[u-1])||0,c._pt={_next:c._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?od(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},l=tl.lastIndex);return c.c=l<r.length?r.substring(l,r.length):"",c.fp=a,(Fy.test(r)||p)&&(c.e=0),this._pt=c,c},iu=function(t,e,n,r,s,o,a,c,l,u){we(r)&&(r=r(s||0,t,o));var h=t[e],f=n!=="get"?n:we(h)?l?t[e.indexOf("set")||!we(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():h,d=we(h)?l?yM:Pd:su,_;if(Ve(r)&&(~r.indexOf("random(")&&(r=nu(r)),r.charAt(1)==="="&&(_=od(f,r)+(Mi(f)||0),(_||_===0)&&(r=_))),!u||f!==r||pc)return!isNaN(f*r)&&r!==""?(_=new Xr(this._pt,t,e,+f||0,r-(f||0),typeof h=="boolean"?SM:Ld,0,d),l&&(_.fp=l),a&&_.modifier(a,this,t),this._pt=_):(!h&&!(e in t)&&id(e,r),pM.call(this,t,e,f,r,d,c||Ir.stringFilter,l))},mM=function(t,e,n,r,s){if(we(t)&&(t=gs(t,s,e,n,r)),!Vn(t)||t.style&&t.nodeType||He(t)||Qf(t))return Ve(t)?gs(t,s,e,n,r):t;var o={},a;for(a in t)o[a]=gs(t[a],s,e,n,r);return o},_M=function(t,e,n,r,s,o){var a,c,l,u;if(_n[t]&&(a=new _n[t]).init(s,a.rawVars?e[t]:mM(e[t],r,s,o,n),n,r,o)!==!1&&(n._pt=c=new Xr(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Sr))for(l=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)l[a._props[u]]=c;return a},pi,pc,ru=function i(t,e,n){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,c=r.lazy,l=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,f=r.keyframes,d=r.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,M=p&&p.data==="nested"?p.vars.targets:m,y=t._overwrite==="auto"&&!Zc,v=t.timeline,A,w,C,D,S,E,P,O,B,H,L,z,it;if(v&&(!f||!s)&&(s="none"),t._ease=Gi(s,Ur.ease),t._yEase=h?bd(Gi(h===!0?s:h,Ur.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!v&&!!r.runBackwards,!v||f&&!r.stagger){if(O=m[0]?ps(m[0]).harness:0,z=O&&r[O.prop],A=Jo(r,Jc),g&&(g._zTime<0&&g.progress(1),e<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?No:zy),g._lazy=0),o){if(yi(t._startAt=Ce.set(m,hn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&en(c),startAt:null,delay:0,onUpdate:l&&function(){return cn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Oe||!a&&!d)&&t._startAt.revert(No),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&_&&!g){if(e&&(a=!1),C=hn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&en(c),immediateRender:a,stagger:0,parent:p},A),z&&(C[O.prop]=z),yi(t._startAt=Ce.set(m,C)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Oe?t._startAt.revert(No):t._startAt.render(-1,!0)),t._zTime=e,!a)i(t._startAt,he,he);else if(!e)return}for(t._pt=t._ptCache=0,c=_&&en(c)||c&&!_,w=0;w<m.length;w++){if(S=m[w],P=S._gsap||tu(m)[w]._gsap,t._ptLookup[w]=H={},lc[P.id]&&vi.length&&jo(),L=M===m?w:M.indexOf(S),O&&(B=new O).init(S,z||A,t,L,M)!==!1&&(t._pt=D=new Xr(t._pt,S,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(X){H[X]=D}),B.priority&&(E=1)),!O||z)for(C in A)_n[C]&&(B=_M(C,A,t,L,S,M))?B.priority&&(E=1):H[C]=D=iu.call(t,S,C,"get",A[C],L,M,0,r.stringFilter);t._op&&t._op[w]&&t.kill(S,t._op[w]),y&&t._pt&&(pi=t,Me.killTweensOf(S,H,t.globalTime(e)),it=!t.parent,pi=0),t._pt&&c&&(lc[P.id]=1)}E&&AM(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!it,f&&e<=0&&v.render(xn,!0,!0)},gM=function(t,e,n,r,s,o,a,c){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,d;if(!l)for(l=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(u=f[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return pc=1,t.vars[e]="+=0",ru(t,a),pc=0,c?Cs(e+" not eligible for reset"):1;l.push(u)}for(d=l.length;d--;)h=l[d],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Vy(n)+Mi(h.e)),h.b&&(h.b=u.s+Mi(h.b))},vM=function(t,e){var n=t[0]?ps(t[0]).harness:0,r=n&&n.aliases,s,o,a,c;if(!r)return e;s=Nr({},e);for(o in r)if(o in s)for(c=r[o].split(","),a=c.length;a--;)s[c[a]]=s[o];return s},xM=function(t,e,n,r){var s=e.ease||r||"power1.inOut",o,a;if(He(e))a=n[t]||(n[t]=[]),e.forEach(function(c,l){return a.push({t:l/(e.length-1)*100,v:c,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},gs=function(t,e,n,r,s){return we(t)?t.call(e,n,r,s):Ve(t)&&~t.indexOf("random(")?nu(t):t},Rd=Qc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Cd={};si(Rd+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Cd[i]=1});var Ce=function(i){Kf(t,i);function t(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:ms(r))||this;var c=a.vars,l=c.duration,u=c.delay,h=c.immediateRender,f=c.stagger,d=c.overwrite,_=c.keyframes,g=c.defaults,m=c.scrollTrigger,p=c.yoyoEase,M=r.parent||Me,y=(He(n)||Qf(n)?ri(n[0]):"length"in r)?[n]:yn(n),v,A,w,C,D,S,E,P;if(a._targets=y.length?tu(y):Cs("GSAP target "+n+" not found. https://gsap.com",!Ir.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||To(l)||To(u)){if(r=a.vars,v=a.timeline=new $e({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:y}),v.kill(),v.parent=v._dp=Qn(a),v._start=0,f||To(l)||To(u)){if(C=y.length,E=f&&_d(f),Vn(f))for(D in f)~Rd.indexOf(D)&&(P||(P={}),P[D]=f[D]);for(A=0;A<C;A++)w=Jo(r,Cd),w.stagger=0,p&&(w.yoyoEase=p),P&&Nr(w,P),S=y[A],w.duration=+gs(l,Qn(a),A,S,y),w.delay=(+gs(u,Qn(a),A,S,y)||0)-a._delay,!f&&C===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),v.to(S,w,E?E(A,S,y):0),v._ease=jt.none;v.duration()?l=u=0:a.timeline=0}else if(_){ms(hn(v.vars.defaults,{ease:"none"})),v._ease=Gi(_.ease||r.ease||"none");var O=0,B,H,L;if(He(_))_.forEach(function(z){return v.to(y,z,">")}),v.duration();else{w={};for(D in _)D==="ease"||D==="easeEach"||xM(D,_[D],w,_.easeEach);for(D in w)for(B=w[D].sort(function(z,it){return z.t-it.t}),O=0,A=0;A<B.length;A++)H=B[A],L={ease:H.e,duration:(H.t-(A?B[A-1].t:0))/100*l},L[D]=H.v,v.to(y,L,O),O+=L.duration;v.duration()<l&&v.to({},{duration:l-v.duration()})}}l||a.duration(l=v.duration())}else a.timeline=0;return d===!0&&!Zc&&(pi=Qn(a),Me.killTweensOf(y),pi=0),Un(M,Qn(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!l&&!_&&a._start===ye(M._time)&&en(h)&&qy(Qn(a))&&M.data!=="nested")&&(a._tTime=-he,a.render(Math.max(0,-u)||0)),m&&fd(Qn(a),m),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,c=this._tDur,l=this._dur,u=r<0,h=r>c-he&&!u?c:r<he?0:r,f,d,_,g,m,p,M,y,v;if(!l)Zy(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,y=this.timeline,this._repeat){if(g=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,o);if(f=ye(h%g),h===c?(_=this._repeat,f=l):(m=ye(h/g),_=~~m,_&&_===m?(f=l,_--):f>l&&(f=l)),p=this._yoyo&&_&1,p&&(v=this._yEase,f=l-f),m=Fr(this._tTime,g),f===a&&!o&&this._initted&&_===m)return this._tTime=h,this;_!==m&&(y&&this._yEase&&wd(y,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(ye(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(dd(this,u?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(l!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(v||this._ease)(f/l),this._from&&(this.ratio=M=1-M),!a&&h&&!s&&!m&&(cn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;y&&y.render(r<0?r:y._dur*y._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&cc(this,r,s,o),cn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&cn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&cc(this,r,!0,!0),(r||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&yi(this,1),!s&&!(u&&!a)&&(h||a||p)&&(cn(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a,c){Ds||wn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ru(this,l),u=this._ease(l/this._dur),gM(this,r,s,o,a,u,l,c)?this.resetTo(r,s,o,a,1):(ha(this,0),this.parent||ud(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?os(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Oe),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,pi&&pi.vars.overwrite!==!0)._first||os(this),this.parent&&o!==this.timeline.totalDuration()&&Or(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=r?yn(r):a,l=this._ptLookup,u=this._pt,h,f,d,_,g,m,p;if((!s||s==="all")&&Xy(a,c))return s==="all"&&(this._pt=0),os(this);for(h=this._op=this._op||[],s!=="all"&&(Ve(s)&&(g={},si(s,function(M){return g[M]=1}),s=g),s=vM(a,s)),p=a.length;p--;)if(~c.indexOf(a[p])){f=l[p],s==="all"?(h[p]=s,_=f,d={}):(d=h[p]=h[p]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&ca(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&os(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return _s(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return _s(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return Me.killTweensOf(r,s,o)},t}(Ls);hn(Ce.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});si("staggerTo,staggerFrom,staggerFromTo",function(i){Ce[i]=function(){var t=new $e,e=hc.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var su=function(t,e,n){return t[e]=n},Pd=function(t,e,n){return t[e](n)},yM=function(t,e,n,r){return t[e](r.fp,n)},MM=function(t,e,n){return t.setAttribute(e,n)},Dd=function(t,e){return we(t[e])?Pd:Jf(t[e])&&t.setAttribute?MM:su},Ld=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},SM=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},EM=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},ou=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},TM=function(t,e,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,n),s=o},bM=function(t){for(var e=this._pt,n,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?ca(this,e,"_pt"):e.dep||(n=1),e=r;return!n},wM=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},AM=function(t){for(var e=t._pt,n,r,s,o;e;){for(n=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=n}t._pt=s},Xr=function(){function i(e,n,r,s,o,a,c,l,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||Ld,this.d=c||this,this.set=l||su,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=wM,this.m=n,this.mt=s,this.tween=r},i}();si(Qc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Jc[i]=1});un.TweenMax=un.TweenLite=Ce;un.TimelineLite=un.TimelineMax=$e;Me=new $e({sortChildren:!1,defaults:Ur,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ir.stringFilter=aM;var Wi=[],Oo={},RM=[],kh=0,CM=0,sl=function(t){return(Oo[t]||RM).map(function(e){return e()})},mc=function(){var t=Date.now(),e=[];t-kh>2&&(sl("matchMediaInit"),Wi.forEach(function(n){var r=n.queries,s=n.conditions,o,a,c,l;for(a in r)o=Ln.matchMedia(r[a]).matches,o&&(c=1),o!==s[a]&&(s[a]=o,l=1);l&&(n.revert(),c&&e.push(n))}),sl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),kh=t,sl("matchMedia"))},Id=function(){function i(e,n){this.selector=n&&fc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=CM++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,r,s){we(n)&&(s=r,r=n,n=we);var o=this,a=function(){var l=ge,u=o.selector,h;return l&&l!==o&&l.data.push(o),s&&(o.selector=fc(s)),ge=o,h=r.apply(o,arguments),we(h)&&o._r.push(h),ge=l,o.selector=u,o.isReverted=!1,h};return o.last=a,n===we?a(o,function(c){return o.add(null,c)}):n?o[n]=a:a},t.ignore=function(n){var r=ge;ge=null,n(this),ge=r},t.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Ce&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,r){var s=this;if(n?function(){for(var a=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof $e?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Ce)&&l.revert&&l.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Wi.length;o--;)Wi[o].id===this.id&&Wi.splice(o,1)},t.revert=function(n){this.kill(n||{})},i}(),PM=function(){function i(e){this.contexts=[],this.scope=e,ge&&ge.data.push(this)}var t=i.prototype;return t.add=function(n,r,s){Vn(n)||(n={matches:n});var o=new Id(0,s||this.scope),a=o.conditions={},c,l,u;ge&&!o.selector&&(o.selector=ge.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(l in n)l==="all"?u=1:(c=Ln.matchMedia(n[l]),c&&(Wi.indexOf(o)<0&&Wi.push(o),(a[l]=c.matches)&&(u=1),c.addListener?c.addListener(mc):c.addEventListener("change",mc)));return u&&r(o,function(h){return o.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),ta={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(r){return Sd(r)})},timeline:function(t){return new $e(t)},getTweensOf:function(t,e){return Me.getTweensOf(t,e)},getProperty:function(t,e,n,r){Ve(t)&&(t=yn(t)[0]);var s=ps(t||{}).get,o=n?cd:ld;return n==="native"&&(n=""),t&&(e?o((_n[e]&&_n[e].get||s)(t,e,n,r)):function(a,c,l){return o((_n[a]&&_n[a].get||s)(t,a,c,l))})},quickSetter:function(t,e,n){if(t=yn(t),t.length>1){var r=t.map(function(u){return qe.quickSetter(u,e,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}t=t[0]||{};var o=_n[e],a=ps(t),c=a.harness&&(a.harness.aliases||{})[e]||e,l=o?function(u){var h=new o;Sr._pt=0,h.init(t,n?u+n:u,Sr,0,[t]),h.render(1,h),Sr._pt&&ou(1,Sr)}:a.set(t,c);return o?l:function(u){return l(t,c,n?u+n:u,a,1)}},quickTo:function(t,e,n){var r,s=qe.to(t,hn((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(c,l,u){return s.resetTo(e,c,l,u)};return o.tween=s,o},isTweening:function(t){return Me.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Gi(t.ease,Ur.ease)),Nh(Ur,t||{})},config:function(t){return Nh(Ir,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!_n[a]&&!un[a]&&Cs(e+" effect requires "+a+" plugin.")}),el[e]=function(a,c,l){return n(yn(a),hn(c||{},s),l)},o&&($e.prototype[e]=function(a,c,l){return this.add(el[e](a,Vn(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){jt[t]=Gi(e)},parseEase:function(t,e){return arguments.length?Gi(t,e):jt},getById:function(t){return Me.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new $e(t),r,s;for(n.smoothChildTiming=en(t.smoothChildTiming),Me.remove(n),n._dp=0,n._time=n._tTime=Me._time,r=Me._first;r;)s=r._next,(e||!(!r._dur&&r instanceof Ce&&r.vars.onComplete===r._targets[0]))&&Un(n,r,r._start-r._delay),r=s;return Un(Me,n,0),n},context:function(t,e){return t?new Id(t,e):ge},matchMedia:function(t){return new PM(t)},matchMediaRefresh:function(){return Wi.forEach(function(t){var e=t.conditions,n,r;for(r in e)e[r]&&(e[r]=!1,n=1);n&&t.revert()})||mc()},addEventListener:function(t,e){var n=Oo[t]||(Oo[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Oo[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:iM,wrapYoyo:rM,distribute:_d,random:vd,snap:gd,normalize:nM,getUnit:Mi,clamp:Jy,splitColor:Ed,toArray:yn,selector:fc,mapRange:yd,pipe:tM,unitize:eM,interpolate:sM,shuffle:md},install:nd,effects:el,ticker:wn,updateRoot:$e.updateRoot,plugins:_n,globalTimeline:Me,core:{PropTween:Xr,globals:rd,Tween:Ce,Timeline:$e,Animation:Ls,getCache:ps,_removeLinkedListItem:ca,reverting:function(){return Oe},context:function(t){return t&&ge&&(ge.data.push(t),t._ctx=ge),ge},suppressOverwrites:function(t){return Zc=t}}};si("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return ta[i]=Ce[i]});wn.add($e.updateRoot);Sr=ta.to({},{duration:0});var DM=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},LM=function(t,e){var n=t._targets,r,s,o;for(r in e)for(s=n.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=DM(o,r)),o&&o.modifier&&o.modifier(e[r],t,n[s],r))},ol=function(t,e){return{name:t,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var c,l;if(Ve(s)&&(c={},si(s,function(u){return c[u]=1}),s=c),e){c={};for(l in s)c[l]=e(s[l]);s=c}LM(a,s)}}}},qe=ta.registerPlugin({name:"attr",init:function(t,e,n,r,s){var o,a,c;this.tween=n;for(o in e)c=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(c||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Oe?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ol("roundProps",dc),ol("modifiers"),ol("snap",gd))||ta;Ce.version=$e.version=qe.version="3.14.2";ed=1;Kc()&&Br();jt.Power0;jt.Power1;jt.Power2;jt.Power3;jt.Power4;jt.Linear;jt.Quad;jt.Cubic;jt.Quart;jt.Quint;jt.Strong;jt.Elastic;jt.Back;jt.SteppedEase;jt.Bounce;jt.Sine;jt.Expo;jt.Circ;class Ud{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){const e=this._partials;let n=0;for(let r=0;r<this._n&&r<32;r++){const s=e[r],o=t+s,a=Math.abs(t)<Math.abs(s)?t-(o-s):s-(o-t);a&&(e[n++]=a),t=o}return e[n]=t,this._n=n+1,this}valueOf(){const t=this._partials;let e=this._n,n,r,s,o=0;if(e>0){for(o=t[--e];e>0&&(n=o,r=t[--e],o=n+r,s=r-(o-n),!s););e>0&&(s<0&&t[e-1]<0||s>0&&t[e-1]>0)&&(r=s*2,n=o+r,r==n-o&&(o=n))}return o}}function*IM(i){for(const t of i)yield*t}function Nd(i){return Array.from(IM(i))}function UM(i,t){return i=+i,t=+t,function(e){return i*(1-e)+t*e}}var de=1e-6,NM=1e-12,Jt=Math.PI,Qe=Jt/2,Hh=Jt/4,Mn=Jt*2,Fe=180/Jt,oe=Jt/180,Ee=Math.abs,Fd=Math.atan,Si=Math.atan2,le=Math.cos,FM=Math.exp,OM=Math.log,ee=Math.sin,BM=Math.sign||function(i){return i>0?1:i<0?-1:0},Zi=Math.sqrt,zM=Math.tan;function kM(i){return i>1?0:i<-1?Jt:Math.acos(i)}function zr(i){return i>1?Qe:i<-1?-Qe:Math.asin(i)}function Vh(i){return(i=ee(i/2))*i}function An(){}function ea(i,t){i&&Wh.hasOwnProperty(i.type)&&Wh[i.type](i,t)}var Gh={Feature:function(i,t){ea(i.geometry,t)},FeatureCollection:function(i,t){for(var e=i.features,n=-1,r=e.length;++n<r;)ea(e[n].geometry,t)}},Wh={Sphere:function(i,t){t.sphere()},Point:function(i,t){i=i.coordinates,t.point(i[0],i[1],i[2])},MultiPoint:function(i,t){for(var e=i.coordinates,n=-1,r=e.length;++n<r;)i=e[n],t.point(i[0],i[1],i[2])},LineString:function(i,t){_c(i.coordinates,t,0)},MultiLineString:function(i,t){for(var e=i.coordinates,n=-1,r=e.length;++n<r;)_c(e[n],t,0)},Polygon:function(i,t){Xh(i.coordinates,t)},MultiPolygon:function(i,t){for(var e=i.coordinates,n=-1,r=e.length;++n<r;)Xh(e[n],t)},GeometryCollection:function(i,t){for(var e=i.geometries,n=-1,r=e.length;++n<r;)ea(e[n],t)}};function _c(i,t,e){var n=-1,r=i.length-e,s;for(t.lineStart();++n<r;)s=i[n],t.point(s[0],s[1],s[2]);t.lineEnd()}function Xh(i,t){var e=-1,n=i.length;for(t.polygonStart();++e<n;)_c(i[e],t,1);t.polygonEnd()}function Od(i,t){i&&Gh.hasOwnProperty(i.type)?Gh[i.type](i,t):ea(i,t)}function gc(i){return[Si(i[1],i[0]),zr(i[2])]}function kr(i){var t=i[0],e=i[1],n=le(e);return[n*le(t),n*ee(t),ee(e)]}function bo(i,t){return i[0]*t[0]+i[1]*t[1]+i[2]*t[2]}function na(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function al(i,t){i[0]+=t[0],i[1]+=t[1],i[2]+=t[2]}function wo(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function vc(i){var t=Zi(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);i[0]/=t,i[1]/=t,i[2]/=t}function xc(i,t){function e(n,r){return n=i(n,r),t(n[0],n[1])}return i.invert&&t.invert&&(e.invert=function(n,r){return n=t.invert(n,r),n&&i.invert(n[0],n[1])}),e}function yc(i,t){return Ee(i)>Jt&&(i-=Math.round(i/Mn)*Mn),[i,t]}yc.invert=yc;function Bd(i,t,e){return(i%=Mn)?t||e?xc(qh(i),$h(t,e)):qh(i):t||e?$h(t,e):yc}function Yh(i){return function(t,e){return t+=i,Ee(t)>Jt&&(t-=Math.round(t/Mn)*Mn),[t,e]}}function qh(i){var t=Yh(i);return t.invert=Yh(-i),t}function $h(i,t){var e=le(i),n=ee(i),r=le(t),s=ee(t);function o(a,c){var l=le(c),u=le(a)*l,h=ee(a)*l,f=ee(c),d=f*e+u*n;return[Si(h*r-d*s,u*e-f*n),zr(d*r+h*s)]}return o.invert=function(a,c){var l=le(c),u=le(a)*l,h=ee(a)*l,f=ee(c),d=f*r-h*s;return[Si(h*r+f*s,u*e+d*n),zr(d*e-u*n)]},o}function HM(i){i=Bd(i[0]*oe,i[1]*oe,i.length>2?i[2]*oe:0);function t(e){return e=i(e[0]*oe,e[1]*oe),e[0]*=Fe,e[1]*=Fe,e}return t.invert=function(e){return e=i.invert(e[0]*oe,e[1]*oe),e[0]*=Fe,e[1]*=Fe,e},t}function VM(i,t,e,n,r,s){if(e){var o=le(t),a=ee(t),c=n*e;r==null?(r=t+n*Mn,s=t-c/2):(r=Zh(o,r),s=Zh(o,s),(n>0?r<s:r>s)&&(r+=n*Mn));for(var l,u=r;n>0?u>s:u<s;u-=c)l=gc([o,-a*le(u),-a*ee(u)]),i.point(l[0],l[1])}}function Zh(i,t){t=kr(t),t[0]-=i,vc(t);var e=kM(-t[1]);return((-t[2]<0?-e:e)+Mn-de)%Mn}function zd(){var i=[],t;return{point:function(e,n,r){t.push([e,n,r])},lineStart:function(){i.push(t=[])},lineEnd:An,rejoin:function(){i.length>1&&i.push(i.pop().concat(i.shift()))},result:function(){var e=i;return i=[],t=null,e}}}function Bo(i,t){return Ee(i[0]-t[0])<de&&Ee(i[1]-t[1])<de}function Ao(i,t,e,n){this.x=i,this.z=t,this.o=e,this.e=n,this.v=!1,this.n=this.p=null}function kd(i,t,e,n,r){var s=[],o=[],a,c;if(i.forEach(function(_){if(!((g=_.length-1)<=0)){var g,m=_[0],p=_[g],M;if(Bo(m,p)){if(!m[2]&&!p[2]){for(r.lineStart(),a=0;a<g;++a)r.point((m=_[a])[0],m[1]);r.lineEnd();return}p[0]+=2*de}s.push(M=new Ao(m,_,null,!0)),o.push(M.o=new Ao(m,null,M,!1)),s.push(M=new Ao(p,_,null,!1)),o.push(M.o=new Ao(p,null,M,!0))}}),!!s.length){for(o.sort(t),Kh(s),Kh(o),a=0,c=o.length;a<c;++a)o[a].e=e=!e;for(var l=s[0],u,h;;){for(var f=l,d=!0;f.v;)if((f=f.n)===l)return;u=f.z,r.lineStart();do{if(f.v=f.o.v=!0,f.e){if(d)for(a=0,c=u.length;a<c;++a)r.point((h=u[a])[0],h[1]);else n(f.x,f.n.x,1,r);f=f.n}else{if(d)for(u=f.p.z,a=u.length-1;a>=0;--a)r.point((h=u[a])[0],h[1]);else n(f.x,f.p.x,-1,r);f=f.p}f=f.o,u=f.z,d=!d}while(!f.v);r.lineEnd()}}}function Kh(i){if(t=i.length){for(var t,e=0,n=i[0],r;++e<t;)n.n=r=i[e],r.p=n,n=r;n.n=r=i[0],r.p=n}}function ll(i){return Ee(i[0])<=Jt?i[0]:BM(i[0])*((Ee(i[0])+Jt)%Mn-Jt)}function GM(i,t){var e=ll(t),n=t[1],r=ee(n),s=[ee(e),-le(e),0],o=0,a=0,c=new Ud;r===1?n=Qe+de:r===-1&&(n=-Qe-de);for(var l=0,u=i.length;l<u;++l)if(f=(h=i[l]).length)for(var h,f,d=h[f-1],_=ll(d),g=d[1]/2+Hh,m=ee(g),p=le(g),M=0;M<f;++M,_=v,m=w,p=C,d=y){var y=h[M],v=ll(y),A=y[1]/2+Hh,w=ee(A),C=le(A),D=v-_,S=D>=0?1:-1,E=S*D,P=E>Jt,O=m*w;if(c.add(Si(O*S*ee(E),p*C+O*le(E))),o+=P?D+S*Mn:D,P^_>=e^v>=e){var B=na(kr(d),kr(y));vc(B);var H=na(s,B);vc(H);var L=(P^D>=0?-1:1)*zr(H[2]);(n>L||n===L&&(B[0]||B[1]))&&(a+=P^D>=0?1:-1)}}return(o<-de||o<de&&c<-NM)^a&1}function Hd(i,t,e,n){return function(r){var s=t(r),o=zd(),a=t(o),c=!1,l,u,h,f={point:d,lineStart:g,lineEnd:m,polygonStart:function(){f.point=p,f.lineStart=M,f.lineEnd=y,u=[],l=[]},polygonEnd:function(){f.point=d,f.lineStart=g,f.lineEnd=m,u=Nd(u);var v=GM(l,n);u.length?(c||(r.polygonStart(),c=!0),kd(u,XM,v,e,r)):v&&(c||(r.polygonStart(),c=!0),r.lineStart(),e(null,null,1,r),r.lineEnd()),c&&(r.polygonEnd(),c=!1),u=l=null},sphere:function(){r.polygonStart(),r.lineStart(),e(null,null,1,r),r.lineEnd(),r.polygonEnd()}};function d(v,A){i(v,A)&&r.point(v,A)}function _(v,A){s.point(v,A)}function g(){f.point=_,s.lineStart()}function m(){f.point=d,s.lineEnd()}function p(v,A){h.push([v,A]),a.point(v,A)}function M(){a.lineStart(),h=[]}function y(){p(h[0][0],h[0][1]),a.lineEnd();var v=a.clean(),A=o.result(),w,C=A.length,D,S,E;if(h.pop(),l.push(h),h=null,!!C){if(v&1){if(S=A[0],(D=S.length-1)>0){for(c||(r.polygonStart(),c=!0),r.lineStart(),w=0;w<D;++w)r.point((E=S[w])[0],E[1]);r.lineEnd()}return}C>1&&v&2&&A.push(A.pop().concat(A.shift())),u.push(A.filter(WM))}}return f}}function WM(i){return i.length>1}function XM(i,t){return((i=i.x)[0]<0?i[1]-Qe-de:Qe-i[1])-((t=t.x)[0]<0?t[1]-Qe-de:Qe-t[1])}const jh=Hd(function(){return!0},YM,$M,[-Jt,-Qe]);function YM(i){var t=NaN,e=NaN,n=NaN,r;return{lineStart:function(){i.lineStart(),r=1},point:function(s,o){var a=s>0?Jt:-Jt,c=Ee(s-t);Ee(c-Jt)<de?(i.point(t,e=(e+o)/2>0?Qe:-Qe),i.point(n,e),i.lineEnd(),i.lineStart(),i.point(a,e),i.point(s,e),r=0):n!==a&&c>=Jt&&(Ee(t-n)<de&&(t-=n*de),Ee(s-a)<de&&(s-=a*de),e=qM(t,e,s,o),i.point(n,e),i.lineEnd(),i.lineStart(),i.point(a,e),r=0),i.point(t=s,e=o),n=a},lineEnd:function(){i.lineEnd(),t=e=NaN},clean:function(){return 2-r}}}function qM(i,t,e,n){var r,s,o=ee(i-e);return Ee(o)>de?Fd((ee(t)*(s=le(n))*ee(e)-ee(n)*(r=le(t))*ee(i))/(r*s*o)):(t+n)/2}function $M(i,t,e,n){var r;if(i==null)r=e*Qe,n.point(-Jt,r),n.point(0,r),n.point(Jt,r),n.point(Jt,0),n.point(Jt,-r),n.point(0,-r),n.point(-Jt,-r),n.point(-Jt,0),n.point(-Jt,r);else if(Ee(i[0]-t[0])>de){var s=i[0]<t[0]?Jt:-Jt;r=e*s/2,n.point(-s,r),n.point(0,r),n.point(s,r)}else n.point(t[0],t[1])}function ZM(i){var t=le(i),e=2*oe,n=t>0,r=Ee(t)>de;function s(u,h,f,d){VM(d,i,e,f,u,h)}function o(u,h){return le(u)*le(h)>t}function a(u){var h,f,d,_,g;return{lineStart:function(){_=d=!1,g=1},point:function(m,p){var M=[m,p],y,v=o(m,p),A=n?v?0:l(m,p):v?l(m+(m<0?Jt:-Jt),p):0;if(!h&&(_=d=v)&&u.lineStart(),v!==d&&(y=c(h,M),(!y||Bo(h,y)||Bo(M,y))&&(M[2]=1)),v!==d)g=0,v?(u.lineStart(),y=c(M,h),u.point(y[0],y[1])):(y=c(h,M),u.point(y[0],y[1],2),u.lineEnd()),h=y;else if(r&&h&&n^v){var w;!(A&f)&&(w=c(M,h,!0))&&(g=0,n?(u.lineStart(),u.point(w[0][0],w[0][1]),u.point(w[1][0],w[1][1]),u.lineEnd()):(u.point(w[1][0],w[1][1]),u.lineEnd(),u.lineStart(),u.point(w[0][0],w[0][1],3)))}v&&(!h||!Bo(h,M))&&u.point(M[0],M[1]),h=M,d=v,f=A},lineEnd:function(){d&&u.lineEnd(),h=null},clean:function(){return g|(_&&d)<<1}}}function c(u,h,f){var d=kr(u),_=kr(h),g=[1,0,0],m=na(d,_),p=bo(m,m),M=m[0],y=p-M*M;if(!y)return!f&&u;var v=t*p/y,A=-t*M/y,w=na(g,m),C=wo(g,v),D=wo(m,A);al(C,D);var S=w,E=bo(C,S),P=bo(S,S),O=E*E-P*(bo(C,C)-1);if(!(O<0)){var B=Zi(O),H=wo(S,(-E-B)/P);if(al(H,C),H=gc(H),!f)return H;var L=u[0],z=h[0],it=u[1],X=h[1],pt;z<L&&(pt=L,L=z,z=pt);var Et=z-L,bt=Ee(Et-Jt)<de,Ot=bt||Et<de;if(!bt&&X<it&&(pt=it,it=X,X=pt),Ot?bt?it+X>0^H[1]<(Ee(H[0]-L)<de?it:X):it<=H[1]&&H[1]<=X:Et>Jt^(L<=H[0]&&H[0]<=z)){var Wt=wo(S,(-E+B)/P);return al(Wt,C),[H,gc(Wt)]}}}function l(u,h){var f=n?i:Jt-i,d=0;return u<-f?d|=1:u>f&&(d|=2),h<-f?d|=4:h>f&&(d|=8),d}return Hd(o,a,s,n?[0,-i]:[-Jt,i-Jt])}function KM(i,t,e,n,r,s){var o=i[0],a=i[1],c=t[0],l=t[1],u=0,h=1,f=c-o,d=l-a,_;if(_=e-o,!(!f&&_>0)){if(_/=f,f<0){if(_<u)return;_<h&&(h=_)}else if(f>0){if(_>h)return;_>u&&(u=_)}if(_=r-o,!(!f&&_<0)){if(_/=f,f<0){if(_>h)return;_>u&&(u=_)}else if(f>0){if(_<u)return;_<h&&(h=_)}if(_=n-a,!(!d&&_>0)){if(_/=d,d<0){if(_<u)return;_<h&&(h=_)}else if(d>0){if(_>h)return;_>u&&(u=_)}if(_=s-a,!(!d&&_<0)){if(_/=d,d<0){if(_>h)return;_>u&&(u=_)}else if(d>0){if(_<u)return;_<h&&(h=_)}return u>0&&(i[0]=o+u*f,i[1]=a+u*d),h<1&&(t[0]=o+h*f,t[1]=a+h*d),!0}}}}}var ls=1e9,Ro=-ls;function jM(i,t,e,n){function r(l,u){return i<=l&&l<=e&&t<=u&&u<=n}function s(l,u,h,f){var d=0,_=0;if(l==null||(d=o(l,h))!==(_=o(u,h))||c(l,u)<0^h>0)do f.point(d===0||d===3?i:e,d>1?n:t);while((d=(d+h+4)%4)!==_);else f.point(u[0],u[1])}function o(l,u){return Ee(l[0]-i)<de?u>0?0:3:Ee(l[0]-e)<de?u>0?2:1:Ee(l[1]-t)<de?u>0?1:0:u>0?3:2}function a(l,u){return c(l.x,u.x)}function c(l,u){var h=o(l,1),f=o(u,1);return h!==f?h-f:h===0?u[1]-l[1]:h===1?l[0]-u[0]:h===2?l[1]-u[1]:u[0]-l[0]}return function(l){var u=l,h=zd(),f,d,_,g,m,p,M,y,v,A,w,C={point:D,lineStart:O,lineEnd:B,polygonStart:E,polygonEnd:P};function D(L,z){r(L,z)&&u.point(L,z)}function S(){for(var L=0,z=0,it=d.length;z<it;++z)for(var X=d[z],pt=1,Et=X.length,bt=X[0],Ot,Wt,Zt=bt[0],rt=bt[1];pt<Et;++pt)Ot=Zt,Wt=rt,bt=X[pt],Zt=bt[0],rt=bt[1],Wt<=n?rt>n&&(Zt-Ot)*(n-Wt)>(rt-Wt)*(i-Ot)&&++L:rt<=n&&(Zt-Ot)*(n-Wt)<(rt-Wt)*(i-Ot)&&--L;return L}function E(){u=h,f=[],d=[],w=!0}function P(){var L=S(),z=w&&L,it=(f=Nd(f)).length;(z||it)&&(l.polygonStart(),z&&(l.lineStart(),s(null,null,1,l),l.lineEnd()),it&&kd(f,a,L,s,l),l.polygonEnd()),u=l,f=d=_=null}function O(){C.point=H,d&&d.push(_=[]),A=!0,v=!1,M=y=NaN}function B(){f&&(H(g,m),p&&v&&h.rejoin(),f.push(h.result())),C.point=D,v&&u.lineEnd()}function H(L,z){var it=r(L,z);if(d&&_.push([L,z]),A)g=L,m=z,p=it,A=!1,it&&(u.lineStart(),u.point(L,z));else if(it&&v)u.point(L,z);else{var X=[M=Math.max(Ro,Math.min(ls,M)),y=Math.max(Ro,Math.min(ls,y))],pt=[L=Math.max(Ro,Math.min(ls,L)),z=Math.max(Ro,Math.min(ls,z))];KM(X,pt,i,t,e,n)?(v||(u.lineStart(),u.point(X[0],X[1])),u.point(pt[0],pt[1]),it||u.lineEnd(),w=!1):it&&(u.lineStart(),u.point(L,z),w=!1)}M=L,y=z,v=it}return C}}var Mc,Sc,zo,ko,Hr={sphere:An,point:An,lineStart:JM,lineEnd:An,polygonStart:An,polygonEnd:An};function JM(){Hr.point=tS,Hr.lineEnd=QM}function QM(){Hr.point=Hr.lineEnd=An}function tS(i,t){i*=oe,t*=oe,Sc=i,zo=ee(t),ko=le(t),Hr.point=eS}function eS(i,t){i*=oe,t*=oe;var e=ee(t),n=le(t),r=Ee(i-Sc),s=le(r),o=ee(r),a=n*o,c=ko*e-zo*n*s,l=zo*e+ko*n*s;Mc.add(Si(Zi(a*a+c*c),l)),Sc=i,zo=e,ko=n}function nS(i){return Mc=new Ud,Od(i,Hr),+Mc}var Ec=[null,null],iS={type:"LineString",coordinates:Ec};function rS(i,t){return Ec[0]=i,Ec[1]=t,nS(iS)}function sS(i,t){var e=i[0]*oe,n=i[1]*oe,r=t[0]*oe,s=t[1]*oe,o=le(n),a=ee(n),c=le(s),l=ee(s),u=o*le(e),h=o*ee(e),f=c*le(r),d=c*ee(r),_=2*zr(Zi(Vh(s-n)+o*c*Vh(r-e))),g=ee(_),m=_?function(p){var M=ee(p*=_)/g,y=ee(_-p)/g,v=y*u+M*f,A=y*h+M*d,w=y*a+M*l;return[Si(A,v)*Fe,Si(w,Zi(v*v+A*A))*Fe]}:function(){return[e*Fe,n*Fe]};return m.distance=_,m}const Jh=i=>i;var Vr=1/0,ia=Vr,Is=-Vr,ra=Is,oS={point:aS,lineStart:An,lineEnd:An,polygonStart:An,polygonEnd:An,result:function(){var i=[[Vr,ia],[Is,ra]];return Is=ra=-(ia=Vr=1/0),i}};function aS(i,t){i<Vr&&(Vr=i),i>Is&&(Is=i),t<ia&&(ia=t),t>ra&&(ra=t)}const Qh=oS;function au(i){return function(t){var e=new Tc;for(var n in i)e[n]=i[n];return e.stream=t,e}}function Tc(){}Tc.prototype={constructor:Tc,point:function(i,t){this.stream.point(i,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function lu(i,t,e){var n=i.clipExtent&&i.clipExtent();return i.scale(150).translate([0,0]),n!=null&&i.clipExtent(null),Od(e,i.stream(Qh)),t(Qh.result()),n!=null&&i.clipExtent(n),i}function Vd(i,t,e){return lu(i,function(n){var r=t[1][0]-t[0][0],s=t[1][1]-t[0][1],o=Math.min(r/(n[1][0]-n[0][0]),s/(n[1][1]-n[0][1])),a=+t[0][0]+(r-o*(n[1][0]+n[0][0]))/2,c=+t[0][1]+(s-o*(n[1][1]+n[0][1]))/2;i.scale(150*o).translate([a,c])},e)}function lS(i,t,e){return Vd(i,[[0,0],t],e)}function cS(i,t,e){return lu(i,function(n){var r=+t,s=r/(n[1][0]-n[0][0]),o=(r-s*(n[1][0]+n[0][0]))/2,a=-s*n[0][1];i.scale(150*s).translate([o,a])},e)}function uS(i,t,e){return lu(i,function(n){var r=+t,s=r/(n[1][1]-n[0][1]),o=-s*n[0][0],a=(r-s*(n[1][1]+n[0][1]))/2;i.scale(150*s).translate([o,a])},e)}var tf=16,hS=le(30*oe);function ef(i,t){return+t?dS(i,t):fS(i)}function fS(i){return au({point:function(t,e){t=i(t,e),this.stream.point(t[0],t[1])}})}function dS(i,t){function e(n,r,s,o,a,c,l,u,h,f,d,_,g,m){var p=l-n,M=u-r,y=p*p+M*M;if(y>4*t&&g--){var v=o+f,A=a+d,w=c+_,C=Zi(v*v+A*A+w*w),D=zr(w/=C),S=Ee(Ee(w)-1)<de||Ee(s-h)<de?(s+h)/2:Si(A,v),E=i(S,D),P=E[0],O=E[1],B=P-n,H=O-r,L=M*B-p*H;(L*L/y>t||Ee((p*B+M*H)/y-.5)>.3||o*f+a*d+c*_<hS)&&(e(n,r,s,o,a,c,P,O,S,v/=C,A/=C,w,g,m),m.point(P,O),e(P,O,S,v,A,w,l,u,h,f,d,_,g,m))}}return function(n){var r,s,o,a,c,l,u,h,f,d,_,g,m={point:p,lineStart:M,lineEnd:v,polygonStart:function(){n.polygonStart(),m.lineStart=A},polygonEnd:function(){n.polygonEnd(),m.lineStart=M}};function p(D,S){D=i(D,S),n.point(D[0],D[1])}function M(){h=NaN,m.point=y,n.lineStart()}function y(D,S){var E=kr([D,S]),P=i(D,S);e(h,f,u,d,_,g,h=P[0],f=P[1],u=D,d=E[0],_=E[1],g=E[2],tf,n),n.point(h,f)}function v(){m.point=p,n.lineEnd()}function A(){M(),m.point=w,m.lineEnd=C}function w(D,S){y(r=D,S),s=h,o=f,a=d,c=_,l=g,m.point=y}function C(){e(h,f,u,d,_,g,s,o,r,a,c,l,tf,n),m.lineEnd=v,v()}return m}}var pS=au({point:function(i,t){this.stream.point(i*oe,t*oe)}});function mS(i){return au({point:function(t,e){var n=i(t,e);return this.stream.point(n[0],n[1])}})}function _S(i,t,e,n,r){function s(o,a){return o*=n,a*=r,[t+i*o,e-i*a]}return s.invert=function(o,a){return[(o-t)/i*n,(e-a)/i*r]},s}function nf(i,t,e,n,r,s){if(!s)return _S(i,t,e,n,r);var o=le(s),a=ee(s),c=o*i,l=a*i,u=o/i,h=a/i,f=(a*e-o*t)/i,d=(a*t+o*e)/i;function _(g,m){return g*=n,m*=r,[c*g-l*m+t,e-l*g-c*m]}return _.invert=function(g,m){return[n*(u*g-h*m+f),r*(d-h*g-u*m)]},_}function gS(i){return vS(function(){return i})()}function vS(i){var t,e=150,n=480,r=250,s=0,o=0,a=0,c=0,l=0,u,h=0,f=1,d=1,_=null,g=jh,m=null,p,M,y,v=Jh,A=.5,w,C,D,S,E;function P(L){return D(L[0]*oe,L[1]*oe)}function O(L){return L=D.invert(L[0],L[1]),L&&[L[0]*Fe,L[1]*Fe]}P.stream=function(L){return S&&E===L?S:S=pS(mS(u)(g(w(v(E=L)))))},P.preclip=function(L){return arguments.length?(g=L,_=void 0,H()):g},P.postclip=function(L){return arguments.length?(v=L,m=p=M=y=null,H()):v},P.clipAngle=function(L){return arguments.length?(g=+L?ZM(_=L*oe):(_=null,jh),H()):_*Fe},P.clipExtent=function(L){return arguments.length?(v=L==null?(m=p=M=y=null,Jh):jM(m=+L[0][0],p=+L[0][1],M=+L[1][0],y=+L[1][1]),H()):m==null?null:[[m,p],[M,y]]},P.scale=function(L){return arguments.length?(e=+L,B()):e},P.translate=function(L){return arguments.length?(n=+L[0],r=+L[1],B()):[n,r]},P.center=function(L){return arguments.length?(s=L[0]%360*oe,o=L[1]%360*oe,B()):[s*Fe,o*Fe]},P.rotate=function(L){return arguments.length?(a=L[0]%360*oe,c=L[1]%360*oe,l=L.length>2?L[2]%360*oe:0,B()):[a*Fe,c*Fe,l*Fe]},P.angle=function(L){return arguments.length?(h=L%360*oe,B()):h*Fe},P.reflectX=function(L){return arguments.length?(f=L?-1:1,B()):f<0},P.reflectY=function(L){return arguments.length?(d=L?-1:1,B()):d<0},P.precision=function(L){return arguments.length?(w=ef(C,A=L*L),H()):Zi(A)},P.fitExtent=function(L,z){return Vd(P,L,z)},P.fitSize=function(L,z){return lS(P,L,z)},P.fitWidth=function(L,z){return cS(P,L,z)},P.fitHeight=function(L,z){return uS(P,L,z)};function B(){var L=nf(e,0,0,f,d,h).apply(null,t(s,o)),z=nf(e,n-L[0],r-L[1],f,d,h);return u=Bd(a,c,l),C=xc(t,z),D=xc(u,C),w=ef(C,A),H()}function H(){return S=E=null,P}return function(){return t=i.apply(this,arguments),P.invert=t.invert&&O,B()}}function cu(i,t){return[i,OM(zM((Qe+t)/2))]}cu.invert=function(i,t){return[i,2*Fd(FM(t))-Qe]};function xS(){return yS(cu).scale(961/Mn)}function yS(i){var t=gS(i),e=t.center,n=t.scale,r=t.translate,s=t.clipExtent,o=null,a,c,l;t.scale=function(h){return arguments.length?(n(h),u()):n()},t.translate=function(h){return arguments.length?(r(h),u()):r()},t.center=function(h){return arguments.length?(e(h),u()):e()},t.clipExtent=function(h){return arguments.length?(h==null?o=a=c=l=null:(o=+h[0][0],a=+h[0][1],c=+h[1][0],l=+h[1][1]),u()):o==null?null:[[o,a],[c,l]]};function u(){var h=Jt*n(),f=t(HM(t.rotate()).invert([0,0]));return s(o==null?[[f[0]-h,f[1]-h],[f[0]+h,f[1]+h]]:i===cu?[[Math.max(f[0]-h,o),a],[Math.min(f[0]+h,c),l]]:[[o,Math.max(f[1]-h,a)],[c,Math.min(f[1]+h,l)]])}return u()}function cs(i,t,e){this.k=i,this.x=t,this.y=e}cs.prototype={constructor:cs,scale:function(i){return i===1?this:new cs(this.k*i,this.x,this.y)},translate:function(i,t){return i===0&t===0?this:new cs(this.k,this.x+this.k*i,this.y+this.k*t)},apply:function(i){return[i[0]*this.k+this.x,i[1]*this.k+this.y]},applyX:function(i){return i*this.k+this.x},applyY:function(i){return i*this.k+this.y},invert:function(i){return[(i[0]-this.x)/this.k,(i[1]-this.y)/this.k]},invertX:function(i){return(i-this.x)/this.k},invertY:function(i){return(i-this.y)/this.k},rescaleX:function(i){return i.copy().domain(i.range().map(this.invertX,this).map(i.invert,i))},rescaleY:function(i){return i.copy().domain(i.range().map(this.invertY,this).map(i.invert,i))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};cs.prototype;function rf(i){const t=[],e=[],n=i[0][0].length;let r=0,s=0;for(const o of i){for(const a of o)for(let c=0;c<n;c++)t.push(a[c]);s&&(r+=s,e.push(r)),s=o.length}return{vertices:t,holes:e,dimensions:n}}function bc(i,t){(t==null||t>i.length)&&(t=i.length);for(var e=0,n=Array(t);e<t;e++)n[e]=i[e];return n}function MS(i){if(Array.isArray(i))return i}function SS(i){if(Array.isArray(i))return bc(i)}function ES(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function TS(i,t,e){return t=sa(t),IS(i,Gd()?Reflect.construct(t,[],sa(i).constructor):t.apply(i,e))}function bS(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function wS(i,t,e){return Object.defineProperty(i,"prototype",{writable:!1}),i}function AS(i,t){var e=typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(!e){if(Array.isArray(i)||(e=uu(i))||t){e&&(i=e);var n=0,r=function(){};return{s:r,n:function(){return n>=i.length?{done:!0}:{done:!1,value:i[n++]}},e:function(c){throw c},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s,o=!0,a=!1;return{s:function(){e=e.call(i)},n:function(){var c=e.next();return o=c.done,c},e:function(c){a=!0,s=c},f:function(){try{o||e.return==null||e.return()}finally{if(a)throw s}}}}function sa(i){return sa=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},sa(i)}function RS(i,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(t&&t.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),Object.defineProperty(i,"prototype",{writable:!1}),t&&wc(i,t)}function Gd(){try{var i=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Gd=function(){return!!i})()}function CS(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function PS(i,t){var e=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(e!=null){var n,r,s,o,a=[],c=!0,l=!1;try{if(s=(e=e.call(i)).next,t===0){if(Object(e)!==e)return;c=!1}else for(;!(c=(n=s.call(e)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&e.return!=null&&(o=e.return(),Object(o)!==o))return}finally{if(l)throw r}}return a}}function DS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function LS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function IS(i,t){if(t&&(typeof t=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ES(i)}function wc(i,t){return wc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},wc(i,t)}function ns(i,t){return MS(i)||PS(i,t)||uu(i,t)||DS()}function US(i){return SS(i)||CS(i)||uu(i)||LS()}function uu(i,t){if(i){if(typeof i=="string")return bc(i,t);var e={}.toString.call(i).slice(8,-1);return e==="Object"&&i.constructor&&(e=i.constructor.name),e==="Map"||e==="Set"?Array.from(i):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?bc(i,t):void 0}}var sf=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,n=[],r=null;return t.forEach(function(s){if(r){var o=rS(s,r)*180/Math.PI;if(o>e)for(var a=sS(r,s),c=r.length>2||s.length>2?UM(r[2]||0,s[2]||0):null,l=c?function(f){return[].concat(US(a(f)),[c(f)])}:a,u=1/Math.ceil(o/e),h=u;h<1;)n.push(l(h)),h+=u}n.push(r=s)}),n},Ac=typeof window<"u"&&window.THREE?window.THREE:{BufferGeometry:Ae,Float32BufferAttribute:_e},NS=new Ac.BufferGeometry().setAttribute?"setAttribute":"addAttribute";Ac.BufferGeometry;function is(i,t){var e=Math.round(i.vertices.length/3);of(i.vertices,t.vertices),of(i.indices,t.indices.map(function(n){return n+e}))}function of(i,t){var e=AS(t),n;try{for(e.s();!(n=e.n()).done;){var r=n.value;i.push(r)}}catch(s){e.e(s)}finally{e.f()}}function cl(i,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,n=(90-i)*Math.PI/180,r=(90-t)*Math.PI/180;return[e*Math.sin(n)*Math.cos(r),e*Math.cos(n),e*Math.sin(n)*Math.sin(r)]}const FS="/vueLearnDemo/assets/borderBlue-31169e52.png",OS="/vueLearnDemo/assets/borderTwo-25bd46d9.png",BS={class:"rose-chart-container"},zS={name:"RoseChart"},kS=Ki({...zS,setup(i){const t=Nn();let e=null;const n=[{name:"南京市",value:186},{name:"苏州市",value:152},{name:"无锡市",value:128},{name:"常州市",value:95},{name:"南通市",value:88},{name:"徐州市",value:76},{name:"扬州市",value:65},{name:"盐城市",value:58},{name:"泰州市",value:52},{name:"镇江市",value:45},{name:"淮安市",value:42},{name:"连云港市",value:38},{name:"宿迁市",value:32}],r=(l,u)=>{const h=Math.min(l,u)*.9,f=Math.max(8,Math.min(11,h/30)),d=h*.08,_=h*.4;return{tooltip:{trigger:"item",formatter:"{b}<br/>接种单位: {c} 家 ({d}%)",backgroundColor:"rgba(10, 20, 40, 0.9)",borderColor:"#4fc3f7",borderWidth:1,textStyle:{color:"#fff",fontSize:f},confine:!0},series:[{name:"接种单位",type:"pie",radius:[d,_],center:["50%","55%"],roseType:"radius",itemStyle:{borderRadius:3,borderColor:"rgba(10, 20, 40, 0.6)",borderWidth:1},label:{show:!0,formatter:`{b}
{c}家`,fontSize:f,color:"#e0f7fa"},labelLine:{length:f*.6,length2:f*.9,lineStyle:{color:"#4fc3f7"}},emphasis:{itemStyle:{shadowBlur:10,shadowColor:"rgba(79, 195, 247, 0.4)"}},data:n.map((g,m)=>({...g,itemStyle:{color:s[m%s.length]}}))}]}},s=["#4fc3f7","#29b6f6","#03a9f4","#039be5","#0288d1","#0277bd","#01579b","#4dd0e1","#26c6da","#00bcd4","#00acc1","#0097a7","#00838f"],o=()=>{t.value&&(e=Rc(t.value,void 0,{renderer:"canvas"}),a())},a=()=>{if(!e||!t.value)return;const l=t.value.getBoundingClientRect(),u=r(l.width,l.height);e.setOption(u),e.resize()},c=()=>{e&&a()};return Gr(()=>{Cc(()=>{o(),window.addEventListener("resize",c)})}),oa(()=>{window.removeEventListener("resize",c),e&&(e.dispose(),e=null)}),(l,u)=>(On(),Bn("div",BS,[u[0]||(u[0]=Ct("span",{class:"corner tr"},null,-1)),u[1]||(u[1]=Ct("span",{class:"corner bl"},null,-1)),u[2]||(u[2]=Ct("span",{class:"corner br"},null,-1)),u[3]||(u[3]=Ct("div",{class:"chart-title"},[Ct("span",null,"江苏省13市接种单位数量")],-1)),Ct("div",{class:"chart-wrapper",ref_key:"chartRef",ref:t},null,512)]))}});const HS=Ei(kS,[["__scopeId","data-v-e221d327"]]),VS={class:"bar-chart-container"},GS={name:"BarChart"},WS=Ki({...GS,setup(i){const t=Nn();let e=null;const n=[{name:"南京市",total:186,completed:178,rate:95.7},{name:"苏州市",total:152,completed:142,rate:93.4},{name:"无锡市",total:128,completed:118,rate:92.2},{name:"常州市",total:95,completed:88,rate:92.6},{name:"南通市",total:88,completed:85,rate:96.6},{name:"徐州市",total:76,completed:68,rate:89.5},{name:"扬州市",total:65,completed:62,rate:95.4},{name:"盐城市",total:58,completed:52,rate:89.7},{name:"泰州市",total:52,completed:48,rate:92.3},{name:"镇江市",total:45,completed:44,rate:97.8},{name:"淮安市",total:42,completed:38,rate:90.5},{name:"连云港市",total:38,completed:32,rate:84.2},{name:"宿迁市",total:32,completed:28,rate:87.5}].sort((l,u)=>u.rate-l.rate),r=l=>l>=95?"#4fc3f7":l>=90?"#29b6f6":l>=85?"#0288d1":"#01579b",s=(l,u)=>{const h=Math.max(10,Math.min(12,u/32));return{tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:f=>{const d=f[0],_=n.find(g=>g.name===d.name);return _?`
          <div style="padding: 4px 8px;">
            <div style="font-weight: bold; margin-bottom: 4px;">${_.name}</div>
            <div>接种单位: ${_.total} 家</div>
            <div>已完成: ${_.completed} 家</div>
            <div style="color: #4fc3f7;">完成率: ${_.rate}%</div>
          </div>
        `:""},backgroundColor:"rgba(10, 20, 40, 0.9)",borderColor:"#4fc3f7",borderWidth:1,textStyle:{color:"#fff",fontSize:h}},grid:{left:"3%",right:"12%",top:"3%",bottom:"3%",containLabel:!0},xAxis:{type:"value",max:100,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}},yAxis:{type:"category",data:n.map(f=>f.name),axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#b0bec5",fontSize:h,margin:8},inverse:!0},series:[{name:"完成率",type:"bar",barWidth:"50%",data:n.map(f=>({value:f.rate,itemStyle:{color:new lf(0,0,1,0,[{offset:0,color:"rgba(79, 195, 247, 0.3)"},{offset:1,color:r(f.rate)}]),borderRadius:[0,2,2,0]}})),label:{show:!0,position:"right",formatter:"{c}%",fontSize:h,color:"#e0f7fa",distance:6},emphasis:{itemStyle:{shadowBlur:10,shadowColor:"rgba(79, 195, 247, 0.4)"}}}]}},o=()=>{t.value&&(e=Rc(t.value,void 0,{renderer:"canvas"}),a())},a=()=>{if(!e||!t.value)return;const l=t.value.getBoundingClientRect(),u=s(l.width,l.height);e.setOption(u),e.resize()},c=()=>{e&&a()};return Gr(()=>{Cc(()=>{o(),window.addEventListener("resize",c)})}),oa(()=>{window.removeEventListener("resize",c),e&&(e.dispose(),e=null)}),(l,u)=>(On(),Bn("div",VS,[u[0]||(u[0]=Ct("span",{class:"corner tr"},null,-1)),u[1]||(u[1]=Ct("span",{class:"corner bl"},null,-1)),u[2]||(u[2]=Ct("span",{class:"corner br"},null,-1)),u[3]||(u[3]=Ct("div",{class:"chart-title"},[Ct("span",null,"各市考核完成率")],-1)),Ct("div",{class:"chart-wrapper",ref_key:"chartRef",ref:t},null,512)]))}});const XS=Ei(WS,[["__scopeId","data-v-f519b27f"]]),YS={class:"header-bar"},qS=Ki({__name:"HeaderBar",setup(i){const t=Kd(),e=()=>{t.push("/")};return(n,r)=>(On(),Bn("div",YS,[r[1]||(r[1]=Ct("div",{class:"header-title"},[Ct("span",{class:"title-text"},"江苏省疫苗接种管理可视化平台"),Ct("span",{class:"title-glow"})],-1)),Ct("button",{class:"exit-btn",onClick:e},[...r[0]||(r[0]=[Ct("span",{class:"btn-icon"},"✕",-1),Ct("span",{class:"btn-text"},"退出",-1),Ct("span",{class:"btn-glow"},null,-1)])])]))}});const $S=Ei(qS,[["__scopeId","data-v-a94929d8"]]),ZS={class:"stat-content"},KS={class:"stat-title"},jS={class:"stat-value-wrapper"},JS={class:"stat-value"},QS={class:"stat-unit"},tE=Ki({__name:"StatCard",props:{title:{},value:{},unit:{},position:{default:"left"},decimals:{default:0}},setup(i){const t=i,e=Nn("0"),n=s=>t.decimals>0?s.toFixed(t.decimals):Math.round(s).toString(),r=s=>{qe.to({val:0},{val:s,duration:1.5,ease:"power2.out",onUpdate:function(){e.value=n(this.targets()[0].val)}})};return Gr(()=>{r(t.value)}),ul(()=>t.value,s=>{r(s)}),(s,o)=>(On(),Bn("div",{class:vs(["stat-card",[`position-${i.position}`]])},[o[0]||(o[0]=Ct("span",{class:"corner tr"},null,-1)),o[1]||(o[1]=Ct("span",{class:"corner bl"},null,-1)),o[2]||(o[2]=Ct("span",{class:"corner br"},null,-1)),Ct("div",ZS,[Ct("div",KS,Ye(i.title),1),Ct("div",jS,[Ct("span",JS,Ye(e.value),1),Ct("span",QS,Ye(i.unit),1)])])],2))}});const af=Ei(tE,[["__scopeId","data-v-9ab3acdd"]]),eE={class:"control-panel"},nE={class:"panel-content"},iE={class:"btn-status"},rE={class:"btn-status"},sE=Ki({__name:"ControlPanel",props:{flyEffectActive:{type:Boolean},particleEffect:{type:Boolean}},emits:["toggleFlyEffect","toggleParticleEffect"],setup(i){return(t,e)=>(On(),Bn("div",eE,[e[6]||(e[6]=Ct("span",{class:"corner tr"},null,-1)),e[7]||(e[7]=Ct("span",{class:"corner bl"},null,-1)),e[8]||(e[8]=Ct("span",{class:"corner br"},null,-1)),e[9]||(e[9]=Ct("div",{class:"panel-title"},[Ct("span",null,"特效控制")],-1)),Ct("div",nE,[Ct("button",{class:vs(["effect-btn",{active:i.flyEffectActive}]),onClick:e[0]||(e[0]=n=>t.$emit("toggleFlyEffect"))},[e[2]||(e[2]=Ct("span",{class:"btn-icon"},"◈",-1)),e[3]||(e[3]=Ct("span",{class:"btn-text"},"飞线特效",-1)),Ct("span",iE,Ye(i.flyEffectActive?"ON":"OFF"),1)],2),Ct("button",{class:vs(["effect-btn",{active:i.particleEffect}]),onClick:e[1]||(e[1]=n=>t.$emit("toggleParticleEffect"))},[e[4]||(e[4]=Ct("span",{class:"btn-icon"},"◆",-1)),e[5]||(e[5]=Ct("span",{class:"btn-text"},"粒子特效",-1)),Ct("span",rE,Ye(i.particleEffect?"ON":"OFF"),1)],2)])]))}});const oE=Ei(sE,[["__scopeId","data-v-4f5e3c28"]]),aE={class:"trend-chart-container"},lE={name:"TrendChart"},cE=Ki({...lE,setup(i){const t=Nn();let e=null;const n=[{month:"2025-05",count:980,label:"5月"},{month:"2025-06",count:995,label:"6月"},{month:"2025-07",count:1010,label:"7月"},{month:"2025-08",count:1025,label:"8月"},{month:"2025-09",count:1038,label:"9月"},{month:"2025-10",count:1050,label:"10月"},{month:"2025-11",count:1062,label:"11月"},{month:"2025-12",count:1075,label:"12月"},{month:"2026-01",count:1085,label:"1月"},{month:"2026-02",count:1092,label:"2月"},{month:"2026-03",count:1098,label:"3月"},{month:"2026-04",count:1102,label:"4月"}],r=(c,l)=>{const u=Math.max(10,Math.min(12,l/25));return{tooltip:{trigger:"axis",formatter:h=>{const f=h[0],d=n.find(_=>_.month===f.name);return d?`
          <div style="padding: 6px 10px;">
            <div style="font-weight: bold; color: #e0f7fa;">${d.label}</div>
            <div style="color: #4fc3f7;">接种单位: ${f.value} 家</div>
          </div>
        `:""},backgroundColor:"rgba(10, 20, 40, 0.9)",borderColor:"#4fc3f7",borderWidth:1,textStyle:{color:"#fff",fontSize:u}},grid:{left:"8%",right:"5%",top:"15%",bottom:"18%",containLabel:!0},xAxis:{type:"category",data:n.map(h=>h.month),axisLine:{lineStyle:{color:"rgba(79, 195, 247, 0.3)"}},axisTick:{show:!1},axisLabel:{color:"#b0bec5",fontSize:u-1,formatter:h=>{const f=n.find(d=>d.month===h);return f?f.label:h},interval:0,rotate:30}},yAxis:{type:"value",min:950,max:1150,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#b0bec5",fontSize:u-1},splitLine:{lineStyle:{color:"rgba(79, 195, 247, 0.1)",type:"dashed"}}},series:[{name:"接种单位",type:"line",smooth:!0,symbol:"circle",symbolSize:6,data:n.map(h=>h.count),lineStyle:{color:"#4fc3f7",width:2},itemStyle:{color:"#4fc3f7",borderColor:"#fff",borderWidth:1},areaStyle:{color:new lf(0,0,0,1,[{offset:0,color:"rgba(79, 195, 247, 0.4)"},{offset:1,color:"rgba(79, 195, 247, 0.05)"}])},emphasis:{focus:"series",itemStyle:{shadowBlur:10,shadowColor:"rgba(79, 195, 247, 0.5)"}}}]}},s=()=>{t.value&&(e=Rc(t.value,void 0,{renderer:"canvas"}),o())},o=()=>{if(!e||!t.value)return;const c=t.value.getBoundingClientRect(),l=r(c.width,c.height);e.setOption(l),e.resize()},a=()=>{e&&o()};return Gr(()=>{Cc(()=>{s(),window.addEventListener("resize",a)})}),oa(()=>{window.removeEventListener("resize",a),e&&(e.dispose(),e=null)}),(c,l)=>(On(),Bn("div",aE,[l[0]||(l[0]=Ct("span",{class:"corner tr"},null,-1)),l[1]||(l[1]=Ct("span",{class:"corner bl"},null,-1)),l[2]||(l[2]=Ct("span",{class:"corner br"},null,-1)),l[3]||(l[3]=Ct("div",{class:"chart-title"},[Ct("span",null,"接种单位数量趋势")],-1)),Ct("div",{class:"chart-wrapper",ref_key:"chartRef",ref:t},null,512)]))}});const uE=Ei(cE,[["__scopeId","data-v-207caf3a"]]),hE={class:"warning-table-container"},fE={class:"panel-subtitle"},dE={class:"city-chip"},pE={class:"summary-chip warning"},mE={class:"summary-chip follow"},_E={class:"summary-chip status"},gE={class:"unit-info"},vE={class:"city"},xE={class:"unit"},yE={class:"progress-cell"},ME={class:"rate"},SE={class:"status-cell"},EE={name:"WarningTable"},TE=Ki({...EE,props:{rows:{},activeCity:{default:"全省"}},setup(i){const t=i,e=5,n=2400,r=Nn(0),s=Nn(!1);let o=null;const a={warning:0,follow:1,normal:2},c=Ri(()=>t.activeCity||"全省"),l=Ri(()=>{if(!t.activeCity||t.activeCity==="全省")return t.rows;const p=t.rows.filter(M=>M.city===t.activeCity);return p.length?p:t.rows}),u=Ri(()=>[...l.value].sort((p,M)=>{const y=a[p.statusClass]-a[M.statusClass];return y!==0?y:p.rate-M.rate})),h=Ri(()=>u.value.length>e),f=Ri(()=>u.value.length<=e?u.value:Array.from({length:e},(p,M)=>{const y=(r.value+M)%u.value.length;return u.value[y]})),d=Ri(()=>l.value.filter(p=>p.statusClass==="warning").length),_=Ri(()=>l.value.filter(p=>p.statusClass==="follow").length),g=()=>{m(),h.value&&(o=window.setInterval(()=>{s.value||!u.value.length||(r.value=(r.value+1)%u.value.length)},n))},m=()=>{o!==null&&(window.clearInterval(o),o=null)};return ul(()=>t.activeCity,()=>{r.value=0,g()}),ul(u,()=>{r.value=0,g()},{deep:!0}),Gr(()=>{g()}),jd(()=>{m()}),(p,M)=>(On(),Bn("div",hE,[M[4]||(M[4]=Ct("span",{class:"corner tr"},null,-1)),M[5]||(M[5]=Ct("span",{class:"corner bl"},null,-1)),M[6]||(M[6]=Ct("span",{class:"corner br"},null,-1)),M[7]||(M[7]=Ct("div",{class:"panel-title"},[Ct("span",null,"重点单位预警")],-1)),Ct("div",fE,[Ct("span",dE,Ye(c.value),1),Ct("span",pE,"预警 "+Ye(d.value),1),Ct("span",mE,"待跟进 "+Ye(_.value),1),Ct("span",_E,Ye(h.value?"自动巡检":"静态展示"),1)]),M[8]||(M[8]=Ct("div",{class:"table-header"},[Ct("span",null,"城市 / 单位"),Ct("span",null,"完成率"),Ct("span",null,"状态")],-1)),Ct("div",{class:"table-body",onMouseenter:M[0]||(M[0]=y=>s.value=!0),onMouseleave:M[1]||(M[1]=y=>s.value=!1)},[Kn(ep,{name:"row-shift",tag:"div",class:"rows-wrapper"},{default:Jd(()=>[(On(!0),Bn(Qd,null,tp(f.value,(y,v)=>(On(),Bn("div",{key:y.city+y.unit+v,class:"table-row"},[M[3]||(M[3]=Ct("div",{class:"row-glow"},null,-1)),Ct("div",gE,[Ct("span",vE,[M[2]||(M[2]=Ct("i",{class:"city-dot"},null,-1)),np(" "+Ye(y.city),1)]),Ct("span",xE,Ye(y.unit),1)]),Ct("div",yE,[Ct("span",ME,Ye(y.rate)+"%",1),Ct("span",{class:vs(["delta",y.delta>=0?"up":"down"])},Ye(y.delta>=0?"+":"")+Ye(y.delta)+"% ",3)]),Ct("div",SE,[Ct("span",{class:vs(["status-tag",y.statusClass])},Ye(y.statusText),3)])]))),128))]),_:1})],32)]))}});const bE=Ei(TE,[["__scopeId","data-v-a58ce144"]]);const wE={class:"container",ref:"container"},AE={__name:"map",setup(i){let t=new Map,e=null,n,r,s,o,a,c=!0;const l=new U(0,160,.1),u=new U(4,10,11);let h=Nn(null),f=new Map,d=null,_=Nn(!1),g=null,m=[],p=[];const M=Nn(!1),y=Nn("全省"),v=[{city:"南京市",unit:"鼓楼区接种中心",rate:84.3,delta:-2.4,statusText:"预警",statusClass:"warning"},{city:"苏州市",unit:"工业园区接种门诊",rate:86.1,delta:-1.7,statusText:"预警",statusClass:"warning"},{city:"无锡市",unit:"梁溪区妇幼保健院",rate:88.5,delta:-.9,statusText:"待跟进",statusClass:"follow"},{city:"常州市",unit:"新北区公共卫生中心",rate:90.8,delta:.6,statusText:"待跟进",statusClass:"follow"},{city:"南通市",unit:"崇川区社区卫生中心",rate:92.4,delta:1.2,statusText:"正常",statusClass:"normal"},{city:"徐州市",unit:"云龙区疾控接种点",rate:83.6,delta:-3.1,statusText:"预警",statusClass:"warning"},{city:"盐城市",unit:"亭湖区预防接种门诊",rate:87.3,delta:-1.1,statusText:"待跟进",statusClass:"follow"},{city:"扬州市",unit:"广陵区接种服务站",rate:91.6,delta:.8,statusText:"正常",statusClass:"normal"},{city:"泰州市",unit:"海陵区疾控中心",rate:89.1,delta:-.4,statusText:"待跟进",statusClass:"follow"},{city:"宿迁市",unit:"宿城区接种门诊",rate:85.2,delta:-2.2,statusText:"预警",statusClass:"warning"},{city:"镇江市",unit:"京口区社区卫生院",rate:90.2,delta:.3,statusText:"待跟进",statusClass:"follow"},{city:"连云港市",unit:"海州区接种中心",rate:82.9,delta:-2.8,statusText:"预警",statusClass:"warning"},{city:"淮安市",unit:"淮阴区接种中心",rate:86.5,delta:-.5,statusText:"待跟进",statusClass:"follow"}],A=[{name:"南京市",total:186,completed:178,rate:95.7},{name:"苏州市",total:152,completed:142,rate:93.4},{name:"无锡市",total:128,completed:118,rate:92.2},{name:"常州市",total:95,completed:88,rate:92.6},{name:"南通市",total:88,completed:85,rate:96.6},{name:"徐州市",total:76,completed:68,rate:89.5},{name:"扬州市",total:65,completed:62,rate:95.4},{name:"盐城市",total:58,completed:52,rate:89.7},{name:"泰州市",total:52,completed:48,rate:92.3},{name:"镇江市",total:45,completed:44,rate:97.8},{name:"淮安市",total:42,completed:38,rate:90.5},{name:"连云港市",total:38,completed:32,rate:84.2},{name:"宿迁市",total:32,completed:28,rate:87.5}],w=new Map(A.map(rt=>[rt.name,rt])),C=A.reduce((rt,F)=>rt+F.total,0),D=()=>typeof window>"u"?1:Math.min(window.devicePixelRatio||1,2),S=rt=>{var F;rt.minFilter=vn,rt.magFilter=vn,rt.generateMipmaps=!1,"colorSpace"in rt&&(rt.colorSpace=an),(F=s==null?void 0:s.capabilities)!=null&&F.getMaxAnisotropy&&(rt.anisotropy=Math.min(8,s.capabilities.getMaxAnisotropy())),rt.needsUpdate=!0},E=()=>{const rt=nt=>{const ft=new P_(nt.gridSize||100,nt.gridDivision||20,nt.gridColor||26316,nt.gridColor||13158);ft.position.copy(nt.position||new U(0,-5,0)),n.add(ft);const ot=new Ae,yt=[],lt=nt.pointLayout||{row:50,col:50},R=nt.shapeSize||1;for(let at=0;at<lt.row;at++)for(let T=0;T<lt.col;T++){const x=(at-lt.row/2)*R,N=(T-lt.col/2)*R;yt.push(x,.1,N)}ot.setAttribute("position",new _e(yt,3));const Y=new Float32Array(yt.length/3);for(let at=0;at<yt.length;at+=3){const T=yt[at],x=yt[at+2],N=Math.sqrt(T*T+x*x);Y[at/3]=N}const j=new Float32Array(yt.length),W=new Gt(nt.pointColor||2969459);for(let at=0;at<j.length;at+=3)j[at]=W.r,j[at+1]=W.g,j[at+2]=W.b;ot.setAttribute("color",new Ze(j,3));const $=new Ql({size:nt.pointSize||.05,vertexColors:!0,transparent:!0,opacity:.8,blending:Dn}),st=new qu(ot,$);st.position.copy(nt.position||new U(0,-5,0)),n.add(st);let et=0;const Q=at=>{if(!nt.diffuse)return;et+=at*(nt.diffuseSpeed||1);const T=ot.attributes.color.array,x=et*10,N=nt.diffuseWidth||5,G=new Gt(nt.diffuseColor||65535),tt=new Gt(nt.pointColor||2969459);for(let q=0;q<yt.length;q+=3){const St=Y[q/3],ht=Math.abs(St-x);let mt=0;if(ht<=N){mt=Math.max(0,1-ht/N);const wt=Math.max(0,et-St/10),Ft=Math.max(.2,1-wt*.5);mt*=Ft}const Tt=q,ut=tt.clone().lerp(G,mt);T[Tt]=ut.r,T[Tt+1]=ut.g,T[Tt+2]=ut.b}ot.attributes.color.needsUpdate=!0},Mt=P(n,{particleCount:30,layout:nt.pointLayout,shapeSize:nt.shapeSize,yMin:.1,yMax:4,particleColor:nt.particleColor||6939378,pointColor:nt.pointColor||2969459,position:nt.position||new U(0,-5,0),particleSize:.25});return{gridHelper:ft,pointsSystem:st,updateDiffusion:Q,...Mt,updateParticles:Mt.updateParticles}},F={position:new U(0,0,0),gridSize:40,gridDivision:20,gridColor:2969459,shapeSize:.5,pointSize:.1,pointColor:2969459,pointLayout:{row:80,col:80},pointBlending:Dn,diffuse:!0,diffuseSpeed:1,diffuseColor:65535,diffuseWidth:10,diffuseDir:1};return{gridSystem:rt(F)}},P=(rt,F={})=>{var et,Q;let Z=null,nt=null,ft=null,ot=null,yt=null,lt=null,R=F.particleCount||30;const Y={x:(((et=F.layout)==null?void 0:et.row)||80)*(F.shapeSize||.5),z:(((Q=F.layout)==null?void 0:Q.col)||80)*(F.shapeSize||.5),yMin:F.yMin||.1,yMax:F.yMax||4},j=(Mt=R)=>{if(Z)return;R=Mt,nt=new Ae,ot=new Float32Array(R*3),yt=new Float32Array(R),lt=new Float32Array(R*3);const at=new Gt(F.particleColor||6939378);for(let G=0;G<R;G++){const tt=G*3;ot[tt]=(Math.random()-.5)*Y.x*2,ot[tt+1]=Y.yMin+Math.random()*.5,ot[tt+2]=(Math.random()-.5)*Y.z*2,yt[G]=.5+Math.random()*1.5,lt[tt]=at.r,lt[tt+1]=at.g,lt[tt+2]=at.b}nt.setAttribute("position",new Ze(ot,3)),nt.setAttribute("color",new Ze(lt,3));const T=document.createElement("canvas");T.width=128,T.height=128;const x=T.getContext("2d");x.beginPath(),x.arc(64,64,60,0,Math.PI*2),x.fillStyle="rgba(220, 255, 255, 1.0)",x.fill();const N=new es(T);ft=new Ql({size:F.particleSize||.25,vertexColors:!0,transparent:!0,opacity:.8,blending:Dn,depthWrite:!1,map:N}),Z=new qu(nt,ft),Z.position.copy(F.position||new U(0,-5,0)),rt.add(Z)};return{addParticle:Mt=>{j(Mt)},removeParticle:()=>{Z&&(rt.remove(Z),nt.dispose(),ft.dispose(),nt=ft=Z=null,ot=yt=lt=null)},updateParticles:Mt=>{if(!Z)return;const at=nt.attributes.position.array,T=nt.attributes.color.array,x=new Gt(F.particleColor||6939378),N=new Gt(F.pointColor||2969459);for(let G=0;G<R;G++){const tt=G*3;at[tt+1]+=yt[G]*Mt,at[tt]+=(Math.random()-.5)*.01,at[tt+2]+=(Math.random()-.5)*.01;const q=Math.min(1,(at[tt+1]-Y.yMin)/(Y.yMax-Y.yMin)),St=x.clone().lerp(N,q);T[tt]=St.r,T[tt+1]=St.g,T[tt+2]=St.b,at[tt+1]>Y.yMax&&(at[tt]=(Math.random()-.5)*Y.x*2,at[tt+1]=Y.yMin,at[tt+2]=(Math.random()-.5)*Y.z*2,yt[G]=.5+Math.random()*1.5)}nt.attributes.position.needsUpdate=!0,nt.attributes.color.needsUpdate=!0},particleSystem:Z}},O=(rt,F,Z)=>{const nt=document.createElement("canvas"),ft=nt.getContext("2d"),ot=rt==="江苏省",yt=D(),lt=ot?360:256,R=ot?100:64,Y=ot?56:28;nt.width=Math.floor(lt*yt),nt.height=Math.floor(R*yt),nt.style.width=`${lt}px`,nt.style.height=`${R}px`,ft.scale(yt,yt);const j=I=>{if(ft.clearRect(0,0,lt,R),!ot){ft.fillStyle="rgba(13, 22, 129, 0.3)",ft.roundRect&&ft.roundRect(5,5,lt-10,R-10,5),ft.fill(),ft.font=`bold ${I?30:28}px Microsoft Yahei`,ft.textAlign="center",ft.textBaseline="middle",ft.lineWidth=2,ft.strokeStyle="rgba(73, 208, 255, 0.35)",ft.strokeText(rt,lt/2,R/2),ft.fillStyle="#ffffff",ft.fillText(rt,lt/2,R/2);return}const _t=I?46:56;ft.font=`bold ${_t}px Microsoft Yahei`,ft.textAlign="center",ft.textBaseline="middle";const xt=lt/2,Dt=R*.35;ft.lineWidth=2.5,ft.strokeStyle="rgba(73, 208, 255, 0.28)",ft.strokeText(rt,xt,Dt),ft.fillStyle="#ffffff",ft.fillText(rt,xt,Dt)};j(!1);const W=new es(nt);S(W);const $=new Io({map:W,transparent:!0,depthWrite:!1,depthTest:!1}),st=ot?F.y+.1:F.y+2.2,et=ot?F.z+8:F.z,Q=new U(F.x,st,et);if(ot&&typeof r<"u")try{const I=r.position.clone().sub(Q).setY(0).normalize();Q.add(I.multiplyScalar(1))}catch{}const Mt=lt/R;if(!ot){const I=new Oa($);I.name=`label_${rt}`,I.position.copy(Q),I.renderOrder=9999;const _t=.6;return I.scale.set(_t*Mt,_t,1),Z.add(I),{sprite:I,updateHover:xt=>{j(xt),W.needsUpdate=!0}}}const at=1.8,T=2,x=at*Mt,N=at,G=new Hi(x,N),tt=W,q=new Jn({map:tt,transparent:!0,depthWrite:!1,depthTest:!1,side:Je}),St=new De(G,q);St.name=`label_${rt}_main`,St.position.copy(Q),St.renderOrder=9999,Z.add(St);const ht=document.createElement("canvas");ht.width=nt.width,ht.height=nt.height,ht.style.width=nt.style.width,ht.style.height=nt.style.height;const mt=ht.getContext("2d");mt.scale(yt,yt);const Tt=lt/2,ut=R*.35;mt.clearRect(0,0,lt,R),mt.font=`bold ${Y}px Microsoft Yahei`,mt.textAlign="center",mt.textBaseline="middle";const wt=ut+Y*.9;mt.fillStyle="rgba(255,255,255,0.6)",mt.fillText(rt,Tt,wt),mt.globalCompositeOperation="destination-in";const Ft=mt.createLinearGradient(0,ut,0,R);Ft.addColorStop(0,"rgba(0,0,0,1)"),Ft.addColorStop(1,"rgba(0,0,0,0)"),mt.fillStyle=Ft,mt.fillRect(0,ut,lt,R-ut);const It=new es(ht);S(It);const At=new Jn({map:It,transparent:!0,opacity:.6,depthWrite:!1,depthTest:!1,side:Je}),kt=new De(G,At);return kt.name=`label_${rt}_reflect`,kt.position.copy(Q),kt.position.y=Q.y-N*.8,kt.scale.y=-1,kt.renderOrder=9998,Z.add(kt),{mesh:St,reflection:kt,updateHover:I=>{j(I),tt.needsUpdate=!0,mt.clearRect(0,0,lt,R),mt.font=`bold ${I?46:56}px Microsoft Yahei`,mt.textAlign="center",mt.textBaseline="middle";const _t=ut+(I?46:56)*.9;mt.fillStyle="rgba(255,255,255,0.6)",mt.fillText(rt,Tt,_t),mt.globalCompositeOperation="destination-in";const xt=mt.createLinearGradient(0,ut,0,R);xt.addColorStop(0,"rgba(0,0,0,1)"),xt.addColorStop(1,"rgba(0,0,0,0)"),mt.fillStyle=xt,mt.fillRect(0,ut,lt,R-ut),It.needsUpdate=!0,qe.to(St.scale,{x:(I?T:at)*Mt,y:I?T:at,duration:.2}),qe.to(St.position,{y:I?Q.y+.4:Q.y,duration:.2}),qe.to(kt.position,{y:I?Q.y-N*.5:Q.y-N*.6,duration:.2})}}},B=(rt,F,Z)=>{const nt=new dt(1.8,.15),ot=new dt(rt.x,rt.z).clone().sub(nt),yt=new Set(["无锡市","常州市","镇江市","扬州市","泰州市","淮安市"]);if(ot.lengthSq()<.08){const Q=Array.from(Z).reduce((Mt,at)=>Mt+at.charCodeAt(0),0)%360*Math.PI/180;ot.set(Math.cos(Q),Math.sin(Q))}ot.normalize();const lt=ot.x>=0,R=yt.has(Z)?lt?"left":"right":ot.x>.18?"right":"left",Y=Array.from(Z).reduce((et,Q)=>et+Q.charCodeAt(0),0)%3,j=Y-1,W=R==="left"?-.88:.88,$=.6+Y*.16+(yt.has(Z)?.08:0),st=j*.22+ot.y*.18;return{side:R,lane:Y,position:new U(rt.x+W,rt.y+F+$,rt.z+st)}},H=(rt,F,Z,nt)=>{const{position:ft,side:ot}=F,yt=document.createElement("canvas"),lt=yt.getContext("2d"),R=D(),Y=224,j=116;yt.width=Math.floor(Y*R),yt.height=Math.floor(j*R),yt.style.width=`${Y}px`,yt.style.height=`${j}px`,lt.scale(R,R);const W=C?(Z.total/C*100).toFixed(1):"0.0";lt.clearRect(0,0,Y,j);const $=ot==="left",st=$?62:18,et=4,Q=136,Mt=78,at=$?Y-14:14,T=102,x=$?st+Q:st;lt.beginPath(),lt.moveTo(at,T),lt.lineTo(x,et+Mt*.6),lt.strokeStyle="rgba(101, 226, 242, 0.75)",lt.lineWidth=1.8,lt.stroke(),lt.beginPath(),lt.arc(at,T,3.5,0,Math.PI*2),lt.fillStyle="#6cecff",lt.fill(),lt.fillStyle="rgba(8, 18, 38, 0.82)",lt.strokeStyle="rgba(89, 220, 255, 0.68)",lt.lineWidth=1.5,lt.roundRect?(lt.beginPath(),lt.roundRect(st,et,Q,Mt,10),lt.fill(),lt.stroke()):(lt.fillRect(st,et,Q,Mt),lt.strokeRect(st,et,Q,Mt));const N=lt.createLinearGradient(st,et+28,st+Q,et+28);N.addColorStop(0,"rgba(79, 195, 247, 0)"),N.addColorStop(.5,"rgba(79, 195, 247, 0.65)"),N.addColorStop(1,"rgba(79, 195, 247, 0)"),lt.fillStyle=N,lt.fillRect(st+10,et+28,Q-20,1),lt.textAlign="left",lt.textBaseline="middle",lt.font="bold 18px Microsoft YaHei",lt.fillStyle="#f2fcff",lt.fillText(rt,st+12,et+16),lt.font="bold 24px Microsoft YaHei",lt.fillStyle="#6cecff",lt.fillText(`${Z.total}家`,st+12,et+43),lt.font="14px Microsoft YaHei",lt.fillStyle="#95dfff",lt.fillText(`占全省 ${W}%`,st+12,et+64);const G=new es(yt);S(G);const tt=new Io({map:G,transparent:!0,depthWrite:!1,depthTest:!1}),q=new Oa(tt);return q.position.copy(ft),q.scale.set(2.2,1.14,1),q.renderOrder=1e4,nt.add(q),{sprite:q,texture:G}},L=(rt,F,Z,nt)=>{const ot=Z,yt=new Yo(.1,.1,ot,15),lt=new Float32Array(yt.attributes.position.count*3);for(let N=0;N<yt.attributes.position.count;N++){const tt=(yt.attributes.position.getY(N)+ot/2)/ot,q=new Gt(671074),St=new Gt(11730687),ht=q.lerp(St,tt);lt[N*3]=ht.r,lt[N*3+1]=ht.g,lt[N*3+2]=ht.b}yt.setAttribute("color",new Ze(lt,3));const R=new Jn({vertexColors:!0,transparent:!0,opacity:.8,blending:Dn}),Y=new De(yt,R);Y.position.set(rt.x,rt.y+ot/2,rt.z),e.add(Y);const j=new Yo(.1+.05,.1+.05,ot+.1,15),W=new ii({uniforms:{glowColor:{value:new Gt(6939378)},opacity:{value:.5}},vertexShader:`
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
    `,transparent:!0,blending:Dn,depthWrite:!1}),$=new De(j,W);$.position.set(rt.x,rt.y+ot/2,rt.z),e.add($);const st=new Zo(.1+.1,.1+.15,30,1);st.rotateX(-Math.PI/2);const et=new Jn({color:6939378,transparent:!0,opacity:1,blending:Dn}),Q=new De(st,et);Q.position.set(rt.x,rt.y+.1,rt.z),e.add(Q);const Mt=new Zo(.1,.1+.08,24,1);Mt.rotateX(-Math.PI/2);const at=new Jn({color:11730687,transparent:!0,opacity:.85,blending:Dn,depthWrite:!1}),T=new De(Mt,at);T.position.set(rt.x,rt.y+ot+.03,rt.z),e.add(T);const x=B(rt,ot,F);return H(F,x,nt,e),p.push({name:F,position:rt.clone()}),{cylinderMesh:Y,glowMesh:$,topRingMesh:T}},z=(rt,F)=>{if(!(rt!=null&&rt.geometry))return new U(0,0,0);let Z=[];if((rt.geometry.type==="MultiPolygon"?rt.geometry.coordinates.flat(2):rt.geometry.coordinates.flat(1)).forEach(([yt,lt])=>{const[R,Y]=F([yt,lt]);Z.push({x:R,y:Y})}),Z.length===0)return new U(0,0,0);const ft=Z.reduce((yt,lt)=>yt+lt.x,0)/Z.length,ot=Z.reduce((yt,lt)=>yt+lt.y,0)/Z.length;return new U(ft,0,ot)},it=()=>({loadChinaMap:(async()=>{try{const nt=await(await fetch("/vueLearnDemo/data/100000_full.json")).json(),ot=await(await fetch("/vueLearnDemo/data/320000_full.json")).json();if(!(nt!=null&&nt.features)||!(ot!=null&&ot.features))return;const yt=n.getObjectByName("provinceGroup");yt&&n.remove(yt),e=new yr,e.name="provinceGroup",e.position.set(0,0,0),n.add(e),p.length=0;const lt=[119.84,32.98],R=xS().center(lt).scale(130).translate([2,0]),Y={normal:{color:2242647,height:.2,borderColor:2968696,opacity:1},jiangsu:{color:6862590,height:.5,borderColor:16777215,opacity:1},jiangsuCity:{borderColor:16777215,linewidth:1.5,heightOffset:.72}};t.clear();let j=0;nt.features.forEach(W=>{var at;if(!(W!=null&&W.geometry))return;const $=((at=W.properties)==null?void 0:at.name)||"未知区域",st=$==="江苏省",et=z(W,R);et.y=st?.7:Y.normal.height;const Q=O($,et,e);t.set($,Q),(W.geometry.type==="MultiPolygon"?W.geometry.coordinates.flat(1):W.geometry.coordinates).forEach(T=>{const x=T.map(([St,ht])=>{const[mt,Tt]=R([St,ht]);return new dt(mt,Tt)});if(x.length<3)return;const N=new qo(x);let G;st?G=new $o(N,{depth:Y.jiangsu.height,bevelEnabled:!0,bevelThickness:.1,bevelSize:.05}):G=new Xc(N),G.rotateX(Math.PI/2);let tt;st?tt=new Wa({color:Y.jiangsu.color,opacity:.8,transparent:!1}):tt=new Wa({color:Y.normal.color,side:Je,transparent:!1});const q=new De(G,tt);if(q.position.y=st?.7:Y.normal.height,q.userData={province:$},e.add(q),j++,!st){const St=new zm(G),ht=new hs({color:st?Y.jiangsu.borderColor:Y.normal.borderColor,linewidth:1,transparent:!0}),mt=new Jl(St,ht);mt.position.y=st?.5:Y.normal.height+.01,e.add(mt)}})}),ot.features.forEach(W=>{var Mt;if(!(W!=null&&W.geometry))return;const $=((Mt=W.properties)==null?void 0:Mt.name)||"未知城市",st=w.get($);if(!st)return;const et=.8+st.total/186*3.4;(W.geometry.type==="MultiPolygon"?W.geometry.coordinates:[W.geometry.coordinates]).forEach(at=>{const T=at[0];if(!Array.isArray(T)||T.length<4)return;const x=z(W,R);x.y=.8;const N=T.map(Tt=>{if(!Array.isArray(Tt)||Tt.length!==2)return null;const[ut,wt]=Tt,[Ft,It]=R([ut,wt]);return new U(Ft,.8,It)}).filter(Tt=>Tt!==null);if(N.length<4)return;const G=new qo(N.map(Tt=>new dt(Tt.x,Tt.z))),tt=new $o(G,{depth:.05,bevelEnabled:!1});tt.rotateX(Math.PI/2);const q=new Wa({color:9882853,transparent:!0,opacity:.3}),St=new De(tt,q);St.position.y=Y.jiangsu.height+.35,St.userData={city:$},e.add(St),f.has($)||f.set($,[]),f.get($).push(St),L(x,$,et,st);const ht=new Ae().setFromPoints(N),mt=new Jl(ht,new hs({color:16777215,linewidth:2,depthTest:!0}));mt.position.y=.05,console.log("line.position",mt.position),e.add(mt)})})}catch(Z){console.error("渲染错误:",Z)}})()});function X(rt=6){if(!(!p||p.length<2)){pt(),g=new yr,g.name="flyLineGroup",e.add(g),m=[];for(let F=0;F<rt;F++){const Z=p[Math.floor(Math.random()*p.length)];let nt=p[Math.floor(Math.random()*p.length)];if(!Z||!nt||Z===nt)continue;const ft=Z.position.clone(),ot=nt.position.clone(),yt=ft.clone().lerp(ot,.5);yt.y+=3+Math.random()*3;const lt=new Ff(ft,yt,ot),R=lt.getPoints(80),Y=new Ae().setFromPoints(R),j=new hs({color:6939378}),W=new Pf(Y,j);W.computeLineDistances(),g.add(W);const $=document.createElement("canvas");$.width=64,$.height=64;const st=$.getContext("2d"),et=st.createRadialGradient(32,32,2,32,32,30);et.addColorStop(0,"rgba(255,255,255,1)"),et.addColorStop(.2,"rgba(105,226,242,1)"),et.addColorStop(1,"rgba(105,226,242,0)"),st.fillStyle=et,st.fillRect(0,0,64,64);const Q=new es($),Mt=new Io({map:Q,blending:Dn,depthWrite:!1}),at=new Oa(Mt);at.scale.set(.6,.6,1),g.add(at),m.push({curve:lt,line:W,comet:at,speed:.2+Math.random()*.6,progress:Math.random()})}}}function pt(){g&&(m.forEach(rt=>{try{rt.line.geometry&&rt.line.geometry.dispose(),rt.line.material&&rt.line.material.dispose(),rt.comet.material&&rt.comet.material.map&&rt.comet.material.map.dispose(),rt.comet.material&&rt.comet.material.dispose()}catch(F){console.warn("dispose error",F)}}),e&&g&&e.remove(g),g=null,m=[])}function Et(){M.value=!M.value,M.value?X(8):pt()}function bt(rt){!M.value||!m.length||m.forEach(F=>{F.progress+=F.speed*rt*.3,F.progress>1&&(F.progress-=1);const Z=F.curve.getPointAt(F.progress);F.comet.position.copy(Z),F.line&&F.line.material&&(F.line.material.dashOffset=-F.progress*10);const nt=.4+Math.sin(F.progress*Math.PI*2)*.18;F.comet.scale.set(nt,nt,1)})}function Ot(rt){if(d&&f.has(d)&&f.get(d).forEach(F=>{F.userData.origColor&&F.material.color.set(F.userData.origColor),F.material.opacity=F.userData.origOpacity??.8}),!rt){d=null,y.value="全省";return}f.has(rt)&&(f.get(rt).forEach(F=>{F.userData.origColor=F.userData.origColor||F.material.color.getHex(),F.userData.origOpacity=F.userData.origOpacity??F.material.opacity,F.material.color.set(10931686),F.material.opacity=1}),d=rt,y.value=rt)}const Wt=()=>{n=new Um,n.background=new Gt(1649473),r=new gn(60,window.innerWidth/window.innerHeight,.1,1e3),r.position.copy(l),r.lookAt(0,0,0),n.add(r),s=new py({antialias:!0}),s.setPixelRatio(D()),s.setSize(window.innerWidth,window.innerHeight),h.value.appendChild(s.domElement),n.fog=new Hc(1649473,10,100),s.setClearColor(n.background),window.scene=n;const rt=()=>{const Q=window.innerWidth,Mt=window.innerHeight;r.aspect=Q/Mt,r.updateProjectionMatrix(),s.setPixelRatio(D()),s.setSize(Q,Mt)},F=new A_(16427690);n.add(F);const Z=new w_(16777215,1);Z.position.set(0,0,1),n.add(Z),o=new _y(r,s.domElement),o.enableDamping=!0,o.dampingFactor=.25,o.enableZoom=!0,o.enablePan=!0,o.enabled=!1,o.minDistance=1,o.maxDistance=1e3,o.target.set(0,0,0),o.update();const nt=()=>{c&&(c=!1,o.enabled=!1,qe.to(r.position,{x:u.x,y:u.y,z:u.z,duration:1.2,ease:"power2.inOut",onUpdate:()=>{r.lookAt(0,0,0),o.update()},onComplete:()=>{o.enabled=!0,o.minDistance=2,o.maxDistance=80,o.update()}}))},ft=()=>{c||(c=!0,o.enabled=!1,qe.to(r.position,{x:l.x,y:l.y,z:l.z,duration:1.2,ease:"power2.inOut",onUpdate:()=>{r.lookAt(0,0,0),o.update()},onComplete:()=>{o.enabled=!1,o.minDistance=1,o.maxDistance=1e3,o.update()}}))},ot=Q=>{c&&nt()};window.addEventListener("wheel",ot,{passive:!0}),window.addEventListener("click",ot),window.addEventListener("dblclick",ft),window.addEventListener("resize",rt),new th().load(FS,Q=>{Q.wrapS=Bi,Q.wrapT=Bi;const Mt=new Hi(18,18),at=new Jn({map:Q,transparent:!0,side:Je,blending:_i,depthWrite:!1}),T=new De(Mt,at);T.position.set(1,.5,-2),T.rotation.x=-Math.PI/2,n.add(T),qe.to(T.rotation,{z:Math.PI*2,duration:45,repeat:-1,ease:"linear"})}),new th().load(OS,Q=>{Q.wrapS=Bi,Q.wrapT=Bi;const Mt=new Hi(20,20),at=new Jn({map:Q,transparent:!0,side:Je,blending:_i,depthWrite:!1}),T=new De(Mt,at);T.position.set(1,.5,-2),T.rotation.x=-Math.PI/2,n.add(T),qe.to(T.rotation,{z:-Math.PI*2,duration:35,repeat:-1,ease:"linear"})});const{gridSystem:R}=E();a=R,it();const Y=new C_,j=new dt,W=Q=>{if(!e)return;j.x=Q.clientX/window.innerWidth*2-1,j.y=-(Q.clientY/window.innerHeight)*2+1,Y.setFromCamera(j,r);const Mt=e.children.filter(at=>at.isMesh);Y.intersectObjects(Mt)};window.addEventListener("mousemove",W);function $(Q){if(!e)return;j.x=Q.clientX/window.innerWidth*2-1,j.y=-(Q.clientY/window.innerHeight)*2+1,Y.setFromCamera(j,r);const Mt=Array.from(f.values()).flat(),at=Y.intersectObjects(Mt);if(at.length>0){const T=at[0].object.userData.city;Ot(T)}else Ot(null)}window.addEventListener("click",$),oa(()=>{window.removeEventListener("mousemove",W),window.removeEventListener("wheel",ot),window.removeEventListener("click",ot),window.removeEventListener("dblclick",ft),window.removeEventListener("resize",rt),window.removeEventListener("click",$),pt()});let st=performance.now();function et(Q){requestAnimationFrame(et);const Mt=(Q-st)/1e3;st=Q,a&&a.updateParticles&&a.updateParticles(Mt),bt(Mt);try{t.forEach(at=>{at.sprite&&at.sprite.quaternion.copy(r.quaternion)})}catch{}s.render(n,r)}et()};function Zt(){_.value=!_.value,_.value?a.addParticle():a.removeParticle()}return Gr(()=>{Wt()}),(rt,F)=>(On(),Bn("div",wE,[Kn($S),Kn(af,{title:"接种单位总数",value:1102,unit:"家",position:"left"}),Kn(af,{title:"平均完成率",value:92.34,unit:"%",position:"right",decimals:2}),Ct("div",{class:"mapWeb",ref_key:"mapWeb",ref:h},[Kn(HS),Kn(XS),Kn(oE,{flyEffectActive:M.value,particleEffect:ip(_),onToggleFlyEffect:Et,onToggleParticleEffect:Zt},null,8,["flyEffectActive","particleEffect"]),Kn(bE,{rows:v,"active-city":y.value},null,8,["active-city"]),Kn(uE)],512)],512))}},PE=Ei(AE,[["__scopeId","data-v-e5f57961"]]);export{PE as default};
