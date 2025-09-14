import { parseStringPromise, Builder } from 'xml2js';

// Example XML string
const xml = `
<note>
  <to>Alice</to>
  <from>Bob</from>
  <message>Hello</message>
</note>
`;

// Parse XML
const result = await parseStringPromise(xml);
console.log(result.note.to[0]); // → "Alice"

// Build XML back from JS
const builder = new Builder();
const xmlBack = builder.buildObject(result);
console.log(xmlBack);
// output:
// <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
// <note>
//   <to>Alice</to>
//   <from>Bob</from>
//   <message>Hello</message>
// </note>