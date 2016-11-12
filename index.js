import express from 'express';

const app = express();

app.get('/', async(req,res) => {
	
const re=RegExp('([а-я]*)([ ]+)([а-я]*)([ ]+)([а-я]*)','i');
const re2=RegExp('([а-я]*)([ ]+)([а-я]*)','i');
const re3=RegExp('([а-я]*)','i');
const re4=RegExp('([а-я]*)([ ]+)([а-я]*)([ ]+)([а-я]*)([ ]+)([а-я]*)','i');
	var full = req.query.fullname;
	var fuller = "";
const reini = RegExp('([а-яa-z])');
	var fam ="фамилия";
	var name = "имя";
	var otch = "отчество";
	var output = "fio";
	var words = full.split(" ").length;
		if(words<4){
	if(re.test(full)){
		fuller = full.match(re);
		fam = fuller[5];
		name = fuller[1].match(reini);
		otch = fuller[3].match(reini);
		output = fam+' '+name[1]+'.'+' '+otch[1]+'.';
	}else if(re2.test(full)){
		fuller = full.match(re2);
		fam = fuller[3];
		name = fuller[1].match(reini);
		otch = "";
		output = fam+' '+name[1]+'.';
	}else if(re3.test(full)){
		fuller = full.match(re3);
		fam = fuller[1];
		name = "";
		otch = "";
		output = fam;
	}
		}else{
		output = "invalid fulname";
	}
	
	return res.json({
		fio:output,
		
	});

});

app.listen(3000,() => {
  console.log('Example app listening on port 3000!');
});
