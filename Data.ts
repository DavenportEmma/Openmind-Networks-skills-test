class Data {
	id: string;
	type: string;
	examples: {
		[id: string]: string[],
	};
	version: number;
	// initialise type, examples, and version
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

			// didn't import fs
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
			// incorrect single quote character
			// didn't import fs
		  const loadData: string = fs.readFileSync( ‘/tmp/file.json’ );
		  const parsedFile: {
			  id: string,
			  type: string,
			  examples: {
					// incorrect declaration, should be:
					// [id: string]: string[]
				  [id: string]: examples[],
			  },
			  version: number,
		  } = JSON.parse( loadData );

		  this.id = parsedFile.id;
		  this.version = parsedFile.version;
		  this.type = parsedFile.type;
		  this.examples = parsedFile.examples;
	  } catch ( ex ) {
		// return ex.message for more verbose error handling
		  console.log( ex.name );
	  }
  };
}


// Highlight bugs (if any)
// Question :- Will this code run if this was Javascript and Typescript
/* for it to run in js type annotation must be removed
*/