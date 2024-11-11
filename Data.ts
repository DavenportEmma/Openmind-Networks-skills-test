class Data {
	id: string;
	type: string;
	examples: {
		[id: string]: string[],
	};
	version: number;

	constructor ( id: string ) {
		this.id = id;
  };

  saveEntries = ( examples: string[] ) => {
	  try {
		  const saveData: {
			  id: string,
			  type: string,
			  examples: string[],
			  version: number,
		  } = {
			  id: this.id,
			  type: this.type,
			  version: this.version,
			  examples,
		  };

		  fs.writeFileSync(
			  '/tmp/file.json',
        JSON.stringify( saveData, null, 4 ),			
		  );
	  } catch ( ex ) {
		  console.log( ex.message );
	  }
  };

  readEntries = () => {
	  try {
		  const loadData: string = fs.readFileSync( ‘/tmp/file.json’ );
		  const parsedFile: {
			  id: string,
			  type: string,
			  examples: {
				  [id: string]: examples[],
			  },
			  version: number,
		  } = JSON.parse( loadData );

		  this.id = parsedFile.id;
		  this.version = parsedFile.version;
		  this.type = parsedFile.type;
		  this.examples = parsedFile.examples;
	  } catch ( ex ) {
		  console.log( ex.name );
	  }
  };
}


// Highlight bugs (if any)
// Question :- Will this code run if this was Javascript and Typescript
