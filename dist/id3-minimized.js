var u=!0,x=null;function C(g,k,d){function f(b,q,e,d,a,f){var l=c();l?("undefined"===typeof f&&(f=u),q&&("undefined"!=typeof l.onload?l.onload=function(){"200"==l.status||"206"==l.status?(l.fileSize=a||l.getResponseHeader("Content-Length"),q(l)):e&&e();l=x}:l.onreadystatechange=function(){4==l.readyState&&("200"==l.status||"206"==l.status?(l.fileSize=a||l.getResponseHeader("Content-Length"),q(l)):e&&e(),l=x)}),l.open("GET",b,f),l.overrideMimeType&&l.overrideMimeType("text/plain; charset=x-user-defined"),d&&l.setRequestHeader("Range",
"bytes="+d[0]+"-"+d[1]),l.setRequestHeader("If-Modified-Since","Sat, 1 Jan 1970 00:00:00 GMT"),l.send(x)):e&&e()}function c(){var b=x;window.XMLHttpRequest?b=new XMLHttpRequest:window.ActiveXObject&&(b=new ActiveXObject("Microsoft.XMLHTTP"));return b}function a(b,q){var e=c();e&&(q&&("undefined"!=typeof e.onload?e.onload=function(){"200"==e.status&&q(this);e=x}:e.onreadystatechange=function(){4==e.readyState&&("200"==e.status&&q(this),e=x)}),e.open("HEAD",b,u),e.send(x))}function b(b,q){var e,a;function c(b){var h=
~~(b[0]/e)-a;b=~~(b[1]/e)+1+a;0>h&&(h=0);b>=blockTotal&&(b=blockTotal-1);return[h,b]}function k(a,c){for(;p[a[0]];)if(a[0]++,a[0]>a[1]){c&&c();return}for(;p[a[1]];)if(a[1]--,a[0]>a[1]){c&&c();return}var v=[a[0]*e,(a[1]+1)*e-1];f(b,function(b){parseInt(b.getResponseHeader("Content-Length"),10)==q&&(a[0]=0,a[1]=blockTotal-1,v[0]=0,v[1]=q-1);b={data:b.W||b.responseText,offset:v[0]};for(var h=a[0];h<=a[1];h++)p[h]=b;g+=v[1]-v[0]+1;c&&c()},d,v,l,!!c)}var l,g=0,m=new D("",0,q),p=[];e=e||2048;a="undefined"===
typeof a?0:a;blockTotal=~~((q-1)/e)+1;for(var n in m)m.hasOwnProperty(n)&&"function"===typeof m[n]&&(this[n]=m[n]);this.a=function(b){var h;k(c([b,b]));h=p[~~(b/e)];if("string"==typeof h.data)return h.data.charCodeAt(b-h.offset)&255;if("unknown"==typeof h.data)return IEBinary_getByteAt(h.data,b-h.offset)};this.N=function(){return g};this.f=function(b,h){k(c(b),h)}}(function(){a(g,function(h){h=parseInt(h.getResponseHeader("Content-Length"),10)||-1;k(new b(g,h))})})()}
function D(g,k,d){var f=g,c=k||0,a=0;this.P=function(){return f};"string"==typeof g?(a=d||f.length,this.a=function(b){return f.charCodeAt(b+c)&255}):"unknown"==typeof g&&(a=d||IEBinary_getLength(f),this.a=function(b){return IEBinary_getByteAt(f,b+c)});this.n=function(b,h){for(var a=Array(h),e=0;e<h;e++)a[e]=this.a(b+e);return a};this.j=function(){return a};this.d=function(b,h){return 0!=(this.a(b)&1<<h)};this.Q=function(b){b=this.a(b);return 127<b?b-256:b};this.r=function(b,h){var a=h?(this.a(b)<<
8)+this.a(b+1):(this.a(b+1)<<8)+this.a(b);0>a&&(a+=65536);return a};this.S=function(b,h){var a=this.r(b,h);return 32767<a?a-65536:a};this.h=function(b,a){var c=this.a(b),e=this.a(b+1),d=this.a(b+2),f=this.a(b+3),c=a?(((c<<8)+e<<8)+d<<8)+f:(((f<<8)+d<<8)+e<<8)+c;0>c&&(c+=4294967296);return c};this.R=function(b,a){var c=this.h(b,a);return 2147483647<c?c-4294967296:c};this.q=function(b){var a=this.a(b),c=this.a(b+1);b=this.a(b+2);a=((a<<8)+c<<8)+b;0>a&&(a+=16777216);return a};this.c=function(b,a){for(var c=
[],e=b,d=0;e<b+a;e++,d++)c[d]=String.fromCharCode(this.a(e));return c.join("")};this.e=function(b,a,c){b=this.n(b,a);switch(c.toLowerCase()){case "utf-16":case "utf-16le":case "utf-16be":a=c;var e,d=0,f=1;c=0;e=Math.min(e||b.length,b.length);254==b[0]&&255==b[1]?(a=u,d=2):255==b[0]&&254==b[1]&&(a=!1,d=2);a&&(f=0,c=1);a=[];for(var k=0;d<e;k++){var l=b[d+f],g=(l<<8)+b[d+c],d=d+2;if(0==g)break;else 216>l||224<=l?a[k]=String.fromCharCode(g):(l=(b[d+f]<<8)+b[d+c],d+=2,a[k]=String.fromCharCode(g,l))}b=
new String(a.join(""));b.g=d;break;case "utf-8":e=0;d=Math.min(d||b.length,b.length);239==b[0]&&(187==b[1]&&191==b[2])&&(e=3);f=[];for(c=0;e<d&&!(a=b[e++],0==a);c++)128>a?f[c]=String.fromCharCode(a):194<=a&&224>a?(k=b[e++],f[c]=String.fromCharCode(((a&31)<<6)+(k&63))):224<=a&&240>a?(k=b[e++],g=b[e++],f[c]=String.fromCharCode(((a&255)<<12)+((k&63)<<6)+(g&63))):240<=a&&245>a&&(k=b[e++],g=b[e++],l=b[e++],a=((a&7)<<18)+((k&63)<<12)+((g&63)<<6)+(l&63)-65536,f[c]=String.fromCharCode((a>>10)+55296,(a&1023)+
56320));b=new String(f.join(""));b.g=e;break;default:d=[];f=f||b.length;for(e=0;e<f;){c=b[e++];if(0==c)break;d[e-1]=String.fromCharCode(c)}b=new String(d.join(""));b.g=e}return b};this.M=function(a){return String.fromCharCode(this.a(a))};this.Z=function(){return window.btoa(f)};this.L=function(a){f=window.atob(a)};this.f=function(a,c){c()}}document.write("<script type='text/vbscript'>\r\nFunction IEBinary_getByteAt(strBinary, iOffset)\r\n\tIEBinary_getByteAt = AscB(MidB(strBinary,iOffset+1,1))\r\nEnd Function\r\nFunction IEBinary_getLength(strBinary)\r\n\tIEBinary_getLength = LenB(strBinary)\r\nEnd Function\r\n\x3c/script>\r\n");(function(g){g.FileAPIReader=function(k){return function(d,f){var c=new FileReader;c.onload=function(a){f(new D(a.target.result))};c.readAsBinaryString(k)}}})(this);(function(g){g.k={i:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",A:function(k){for(var d="",f,c,a,b,h,q,e=0;e<k.length;)f=k[e++],c=k[e++],a=k[e++],b=f>>2,f=(f&3)<<4|c>>4,h=(c&15)<<2|a>>6,q=a&63,isNaN(c)?h=q=64:isNaN(a)&&(q=64),d=d+Base64.i.charAt(b)+Base64.i.charAt(f)+Base64.i.charAt(h)+Base64.i.charAt(q);return d}};g.Base64=g.k;g.k.encodeBytes=g.k.A})(this);(function(g){var k=g.s={},d={},f=[0,7];k.w=function(c){delete d[c]};k.v=function(){d={}};k.D=function(c,a,b){b=b||{};(b.dataReader||C)(c,function(h){h.f(f,function(){var f="ftypM4A"==h.c(4,7)?ID4:"ID3"==h.c(0,3)?ID3v2:ID3v1;f.o(h,function(){var e=b.tags,k=f.p(h,e),e=d[c]||{},g;for(g in k)k.hasOwnProperty(g)&&(e[g]=k[g]);d[c]=e;a&&a()})})})};k.B=function(c){if(!d[c])return x;var a={},b;for(b in d[c])d[c].hasOwnProperty(b)&&(a[b]=d[c][b]);return a};k.C=function(c,a){return!d[c]?x:d[c][a]};g.ID3=g.s;
k.loadTags=k.D;k.getAllTags=k.B;k.getTag=k.C;k.clearTags=k.w;k.clearAll=k.v})(this);(function(g){var k=g.t={},d="Blues;Classic Rock;Country;Dance;Disco;Funk;Grunge;Hip-Hop;Jazz;Metal;New Age;Oldies;Other;Pop;R&B;Rap;Reggae;Rock;Techno;Industrial;Alternative;Ska;Death Metal;Pranks;Soundtrack;Euro-Techno;Ambient;Trip-Hop;Vocal;Jazz+Funk;Fusion;Trance;Classical;Instrumental;Acid;House;Game;Sound Clip;Gospel;Noise;AlternRock;Bass;Soul;Punk;Space;Meditative;Instrumental Pop;Instrumental Rock;Ethnic;Gothic;Darkwave;Techno-Industrial;Electronic;Pop-Folk;Eurodance;Dream;Southern Rock;Comedy;Cult;Gangsta;Top 40;Christian Rap;Pop/Funk;Jungle;Native American;Cabaret;New Wave;Psychadelic;Rave;Showtunes;Trailer;Lo-Fi;Tribal;Acid Punk;Acid Jazz;Polka;Retro;Musical;Rock & Roll;Hard Rock;Folk;Folk-Rock;National Folk;Swing;Fast Fusion;Bebob;Latin;Revival;Celtic;Bluegrass;Avantgarde;Gothic Rock;Progressive Rock;Psychedelic Rock;Symphonic Rock;Slow Rock;Big Band;Chorus;Easy Listening;Acoustic;Humour;Speech;Chanson;Opera;Chamber Music;Sonata;Symphony;Booty Bass;Primus;Porn Groove;Satire;Slow Jam;Club;Tango;Samba;Folklore;Ballad;Power Ballad;Rhythmic Soul;Freestyle;Duet;Punk Rock;Drum Solo;Acapella;Euro-House;Dance Hall".split(";");
k.o=function(d,c){var a=d.j();d.f([a-128-1,a],c)};k.p=function(f){var c=f.j()-128;if("TAG"==f.c(c,3)){var a=f.c(c+3,30).replace(/\0/g,""),b=f.c(c+33,30).replace(/\0/g,""),h=f.c(c+63,30).replace(/\0/g,""),k=f.c(c+93,4).replace(/\0/g,"");if(0==f.a(c+97+28))var e=f.c(c+97,28).replace(/\0/g,""),g=f.a(c+97+29);else e="",g=0;f=f.a(c+97+30);return{version:"1.1",title:a,artist:b,album:h,year:k,comment:e,track:g,genre:255>f?d[f]:""}}return{}};g.ID3v1=g.t})(this);(function(g){function k(a,b){var c=b.a(a),d=b.a(a+1),e=b.a(a+2);return b.a(a+3)&127|(e&127)<<7|(d&127)<<14|(c&127)<<21}var d=g.G={};d.b={};d.frames={BUF:"Recommended buffer size",CNT:"Play counter",COM:"Comments",CRA:"Audio encryption",CRM:"Encrypted meta frame",ETC:"Event timing codes",EQU:"Equalization",GEO:"General encapsulated object",IPL:"Involved people list",LNK:"Linked information",MCI:"Music CD Identifier",MLL:"MPEG location lookup table",PIC:"Attached picture",POP:"Popularimeter",REV:"Reverb",
RVA:"Relative volume adjustment",SLT:"Synchronized lyric/text",STC:"Synced tempo codes",TAL:"Album/Movie/Show title",TBP:"BPM (Beats Per Minute)",TCM:"Composer",TCO:"Content type",TCR:"Copyright message",TDA:"Date",TDY:"Playlist delay",TEN:"Encoded by",TFT:"File type",TIM:"Time",TKE:"Initial key",TLA:"Language(s)",TLE:"Length",TMT:"Media type",TOA:"Original artist(s)/performer(s)",TOF:"Original filename",TOL:"Original Lyricist(s)/text writer(s)",TOR:"Original release year",TOT:"Original album/Movie/Show title",
TP1:"Lead artist(s)/Lead performer(s)/Soloist(s)/Performing group",TP2:"Band/Orchestra/Accompaniment",TP3:"Conductor/Performer refinement",TP4:"Interpreted, remixed, or otherwise modified by",TPA:"Part of a set",TPB:"Publisher",TRC:"ISRC (International Standard Recording Code)",TRD:"Recording dates",TRK:"Track number/Position in set",TSI:"Size",TSS:"Software/hardware and settings used for encoding",TT1:"Content group description",TT2:"Title/Songname/Content description",TT3:"Subtitle/Description refinement",
TXT:"Lyricist/text writer",TXX:"User defined text information frame",TYE:"Year",UFI:"Unique file identifier",ULT:"Unsychronized lyric/text transcription",WAF:"Official audio file webpage",WAR:"Official artist/performer webpage",WAS:"Official audio source webpage",WCM:"Commercial information",WCP:"Copyright/Legal information",WPB:"Publishers official webpage",WXX:"User defined URL link frame",AENC:"Audio encryption",APIC:"Attached picture",COMM:"Comments",COMR:"Commercial frame",ENCR:"Encryption method registration",
EQUA:"Equalization",ETCO:"Event timing codes",GEOB:"General encapsulated object",GRID:"Group identification registration",IPLS:"Involved people list",LINK:"Linked information",MCDI:"Music CD identifier",MLLT:"MPEG location lookup table",OWNE:"Ownership frame",PRIV:"Private frame",PCNT:"Play counter",POPM:"Popularimeter",POSS:"Position synchronisation frame",RBUF:"Recommended buffer size",RVAD:"Relative volume adjustment",RVRB:"Reverb",SYLT:"Synchronized lyric/text",SYTC:"Synchronized tempo codes",
TALB:"Album/Movie/Show title",TBPM:"BPM (beats per minute)",TCOM:"Composer",TCON:"Content type",TCOP:"Copyright message",TDAT:"Date",TDLY:"Playlist delay",TENC:"Encoded by",TEXT:"Lyricist/Text writer",TFLT:"File type",TIME:"Time",TIT1:"Content group description",TIT2:"Title/songname/content description",TIT3:"Subtitle/Description refinement",TKEY:"Initial key",TLAN:"Language(s)",TLEN:"Length",TMED:"Media type",TOAL:"Original album/movie/show title",TOFN:"Original filename",TOLY:"Original lyricist(s)/text writer(s)",
TOPE:"Original artist(s)/performer(s)",TORY:"Original release year",TOWN:"File owner/licensee",TPE1:"Lead performer(s)/Soloist(s)",TPE2:"Band/orchestra/accompaniment",TPE3:"Conductor/performer refinement",TPE4:"Interpreted, remixed, or otherwise modified by",TPOS:"Part of a set",TPUB:"Publisher",TRCK:"Track number/Position in set",TRDA:"Recording dates",TRSN:"Internet radio station name",TRSO:"Internet radio station owner",TSIZ:"Size",TSRC:"ISRC (international standard recording code)",TSSE:"Software/Hardware and settings used for encoding",
TYER:"Year",TXXX:"User defined text information frame",UFID:"Unique file identifier",USER:"Terms of use",USLT:"Unsychronized lyric/text transcription",WCOM:"Commercial information",WCOP:"Copyright/Legal information",WOAF:"Official audio file webpage",WOAR:"Official artist/performer webpage",WOAS:"Official audio source webpage",WORS:"Official internet radio station homepage",WPAY:"Payment",WPUB:"Publishers official webpage",WXXX:"User defined URL link frame"};var f={title:["TIT2","TT2"],artist:["TPE1",
"TP1"],album:["TALB","TAL"],year:["TYER","TYE"],comment:["COMM","COM"],track:["TRCK","TRK"],genre:["TCON","TCO"],picture:["APIC","PIC"],lyrics:["USLT","ULT"]},c=["title","artist","album","track"];d.o=function(a,b){a.f([0,k(6,a)],b)};d.p=function(a,b){var h=0,g=a.a(h+3);if(4<g)return{version:">2.4"};var e=a.a(h+4),v=a.d(h+5,7),r=a.d(h+5,6),w=a.d(h+5,5),l=k(h+6,a),h=h+10;if(r)var s=a.h(h,u),h=h+(s+4);var g={version:"2."+g+"."+e,major:g,revision:e,flags:{unsynchronisation:v,extended_header:r,experimental_indicator:w},
size:l},m;if(v)m={};else{for(var l=l-10,v=a,e=b,r={},w=g.major,s=[],p=0,n;n=(e||c)[p];p++)s=s.concat(f[n]||[n]);for(e=s;h<l;){s=x;p=v;n=h;var z=x;switch(w){case 2:m=p.c(n,3);var t=p.q(n+3),y=6;break;case 3:m=p.c(n,4);t=p.h(n+4,u);y=10;break;case 4:m=p.c(n,4),t=k(n+4,p),y=10}if(""==m)break;h+=y+t;if(!(0>e.indexOf(m))&&(2<w&&(z={message:{Y:p.d(n+8,6),K:p.d(n+8,5),V:p.d(n+8,4)},m:{T:p.d(n+8+1,7),H:p.d(n+8+1,3),J:p.d(n+8+1,2),F:p.d(n+8+1,1),z:p.d(n+8+1,0)}}),n+=y,z&&z.m.z&&(k(n,p),n+=4,t-=4),!z||!z.m.F))m in
d.b?s=d.b[m]:"T"==m[0]&&(s=d.b["T*"]),s=s?s(n,t,p,z):void 0,s={id:m,size:t,description:m in d.frames?d.frames[m]:"Unknown",data:s},m in r?(r[m].id&&(r[m]=[r[m]]),r[m].push(s)):r[m]=s}m=r}for(var A in f)if(f.hasOwnProperty(A)){a:{t=f[A];"string"==typeof t&&(t=[t]);y=0;for(h=void 0;h=t[y];y++)if(h in m){a=m[h].data;break a}a=void 0}a&&(g[A]=a)}for(var B in m)m.hasOwnProperty(B)&&(g[B]=m[B]);return g};g.ID3v2=d})(this);(function(){function g(d){var f;switch(d){case 0:f="iso-8859-1";break;case 1:f="utf-16";break;case 2:f="utf-16be";break;case 3:f="utf-8"}return f}var k="32x32 pixels 'file icon' (PNG only);Other file icon;Cover (front);Cover (back);Leaflet page;Media (e.g. lable side of CD);Lead artist/lead performer/soloist;Artist/performer;Conductor;Band/Orchestra;Composer;Lyricist/text writer;Recording Location;During recording;During performance;Movie/video screen capture;A bright coloured fish;Illustration;Band/artist logotype;Publisher/Studio logotype".split(";");
ID3v2.b.APIC=function(d,f,c,a,b){b=b||"3";a=d;var h=g(c.a(d));switch(b){case "2":var q=c.c(d+1,3);d+=4;break;case "3":case "4":q=c.e(d+1,f-(d-a),h),d+=1+q.g}b=c.a(d,1);b=k[b];h=c.e(d+1,f-(d-a),h);d+=1+h.g;return{format:q.toString(),type:b,description:h.toString(),data:c.n(d,a+f-d)}};ID3v2.b.COMM=function(d,f,c){var a=d,b=g(c.a(d)),h=c.c(d+1,3),k=c.e(d+4,f-4,b);d+=4+k.g;d=c.e(d,a+f-d,b);return{language:h,X:k.toString(),text:d.toString()}};ID3v2.b.COM=ID3v2.b.COMM;ID3v2.b.PIC=function(d,f,c,a){return ID3v2.b.APIC(d,
f,c,a,"2")};ID3v2.b.PCNT=function(d,f,c){return c.O(d)};ID3v2.b.CNT=ID3v2.b.PCNT;ID3v2.b["T*"]=function(d,f,c){var a=g(c.a(d));return c.e(d+1,f-1,a).toString()};ID3v2.b.TCON=function(d,f,c){return ID3v2.b["T*"].apply(this,arguments).replace(/^\(\d+\)/,"")};ID3v2.b.TCO=ID3v2.b.TCON;ID3v2.b.USLT=function(d,f,c){var a=d,b=g(c.a(d)),h=c.c(d+1,3),k=c.e(d+4,f-4,b);d+=4+k.g;d=c.e(d,a+f-d,b);return{language:h,I:k.toString(),U:d.toString()}};ID3v2.b.ULT=ID3v2.b.USLT})();(function(g){function k(c,a,b,d){var g=c.h(a,u);if(0==g)d();else{var e=c.c(a+4,4);-1<["moov","udta","meta","ilst"].indexOf(e)?("meta"==e&&(a+=4),c.f([a+8,a+8+8],function(){k(c,a+8,g-8,d)})):c.f([a+(e in f.l?0:g),a+g+8],function(){k(c,a+g,b,d)})}}function d(c,a,b,h,g){g=void 0===g?"":g+"  ";for(var e=b;e<b+h;){var k=a.h(e,u);if(0==k)break;var r=a.c(e+4,4);if(-1<["moov","udta","meta","ilst"].indexOf(r)){"meta"==r&&(e+=4);d(c,a,e+8,k-8,g);break}if(f.l[r]){var w=a.q(e+16+1),l=f.l[r],w=f.types[w];if("trkn"==
r)c[l[0]]=a.a(e+16+11),c.count=a.a(e+16+13);else{var r=e+16+4+4,s=k-16-4-4,m;switch(w){case "text":m=a.e(r,s,"UTF-8");break;case "uint8":m=a.r(r);break;case "jpeg":case "png":m={m:"image/"+w,data:a.n(r,s)}}c[l[0]]="comment"===l[0]?{text:m}:m}}e+=k}}var f=g.u={};f.types={"0":"uint8",1:"text",13:"jpeg",14:"png",21:"uint8"};f.l={"\u00a9alb":["album"],"\u00a9art":["artist"],"\u00a9ART":["artist"],aART:["artist"],"\u00a9day":["year"],"\u00a9nam":["title"],"\u00a9gen":["genre"],trkn:["track"],"\u00a9wrt":["composer"],
"\u00a9too":["encoder"],cprt:["copyright"],covr:["picture"],"\u00a9grp":["grouping"],keyw:["keyword"],"\u00a9lyr":["lyrics"],"\u00a9cmt":["comment"],tmpo:["tempo"],cpil:["compilation"],disk:["disc"]};f.o=function(c,a){c.f([0,7],function(){k(c,0,c.j(),a)})};f.p=function(c){var a={};d(a,c,0,c.j());return a};g.ID4=g.u})(this);
