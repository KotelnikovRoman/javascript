 s = 'super text';
 s_len = s.length-1;    //9
 last_len = s.charAt(s.length-1);   //t
 sub = s.substring(1, 4);   //upe
 last_len2 = s[s.length-1]; //t (не использовать в ECMAScript v3)
 num = 100;
 string_value = num.toString();   //"100"
 string_value2 = num.toString(2);   //1100100
 string_value3 = num.toString(8);   //144
 string_value4 = num.toString(16);  //64
 
 s1 = 0;
 s2 = false;
 if (s1 == s2) {
     alert('yes');
 }
 else {
     alert('none');
 }