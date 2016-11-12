import express from 'express';

const app = express();

app.get('/', async(req,res) => {
	
const re=RegExp('@?(https?:)(\/\/)?((vk|telegram|twitter)[^\/]*\/)?([a-zA-Z0-9]*)','i');

	var uname = req.query.username;
	var output = '';
	if(re.test(uname)){
		output = '@'+uname.match(re)[5];
	}else{
	
		output = 'Invalid username';
	}
	return res.json({
		fio:output,
	
	});

});

app.listen(3000,() => {
  console.log('Example app listening on port 3000!');
});
