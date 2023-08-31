export class database
{
	constructor(dbname)
	{
		this.dbname = dbname
		this.read = JSON.parse(localStorage.getItem(dbname)) || []
	}
	
	load()
	{
		return this.read
	}

	save(obj)
	{
		this.read.push(obj)
		
		localStorage.setItem(this.dbname,JSON.stringify(this.read))
	}
}
