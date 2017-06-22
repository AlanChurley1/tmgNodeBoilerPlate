const exports = module.exports = (req, res) => {
	const name = req.params.userId || 'unknown user';
	const jsonData = {name};
	res.json(jsonData);
}