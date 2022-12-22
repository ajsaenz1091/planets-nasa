import { parse } from 'csv-parse'
import { createReadStream,  } from 'node:fs'

// createReadStream creates an event emitter which we can then listen to using the on() function
// this stream created reads or in other words gives data
const stream = createReadStream('kepler_data.csv')

const parser = parse({
    comment: '#',
    columns: true
  });

const results = []

// using the pipe function, we ca connect the stream that gives data (stream) with the one that takes it data or writes it (parser)
stream.pipe(parser)
    .on('data', data => {
        results.push(data)
    })
    .on('error', () => console.log(' something went wrong while reading file'))
    .on('end', () => console.log(results))



// stream.on('data', data => {
//     results.push(data)
// })
// .on('error', () => console.log(' something went wrong while reading file'))
// .on('end', () => console.log(results))



