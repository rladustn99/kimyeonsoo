var express = require('express');
var app = express();
var path = require('path');
app.locals.pretty = true;

// app.set('view engine', 'pug');
// app.set('views', './views');

app.get('/template', function (req, res)
{
  res.render('temp', {time:Date(), _title:'Pug'});//객체전달
}); //템플릿 렌더링
app.get('/', function (req, res) //req객체 전달 //res응답에 대한 객체 전달
{
  res.send('Hello World!');
}); //콜백 함수

app.use(express.static(path.join(__dirname,'public')));
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});