const { Server } = require( 'node:http');
const { fs } = require( 'node:fs');
const moment = require( 'moment');

void Server((req, res) => { 
let sDate = moment().format( 'DDMMYY');
if (req.url == '/' + sDate)
{   res.setHeader('Content-Type', 'text/plain; charset=utf-8'); 
const j1 = 
{     date : '',
      login : 'kurb'
};
j1.date = moment().format( 'DD-MM-YYYY');
const j2 = JSON.stringify( j1);
res.end( j2) 
}
else 
{     s1 = req.url, s2 = "";
      let i = s1.length - 1;
      while (( i >= 0) && ( s1[ i] != "/"))
      {     c = s1[ i];
             if (( c >= 'a') && ( c<= 'z'))
             {     s2 = s2 + c;   i--;
             }
             else {
                   s2 = "";   break;
             }
      }
      if ( s2 != "")
      {     res.end( s2)
      }
      else {
            res.end( "no string");
       }
}
} ).listen(1234);