import { sendDataTofront, rate } from '../services/rate'


export const controller = (app) => {
	
	app.post('/rate', (req, res) => {
		rate(req.body).then((newValue)=> {
			res.send(newValue)
		});
	});

	app.get('/init', (req, res) => {
		sendDataTofront().then((data)=>{
			res.send(data)
		});
	})
}