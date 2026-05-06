#### Deno has no built-in XML library. This lesson uses the `xml2js` npm package for parsing. XML generation is done with string building. Deno fetches the `npm:xml2js` import automatically on first run — no separate install step is needed. Unlike Go's `encoding/xml`, JavaScript has no native struct-to-XML mapping; XML handling requires a third-party package.
___
##### Run Command:

`$ deno run --allow-net xml.ts`

##### Results:

` <plant id="27">`
`   <name>Coffee</name>`
`   <origin>Ethiopia</origin>`
`   <origin>Brazil</origin>`
` </plant>`
`<?xml version="1.0" encoding="UTF-8"?>`
` <plant id="27">`
`   <name>Coffee</name>`
`   <origin>Ethiopia</origin>`
`   <origin>Brazil</origin>`
` </plant>`
`Plant id=27, name=Coffee, origin=[Ethiopia Brazil]`
` <nesting>`
`   <parent>`
`     <child>`
`       <plant id="27">`
`         <name>Coffee</name>`
`         <origin>Ethiopia</origin>`
`         <origin>Brazil</origin>`
`       </plant>`
`       <plant id="81">`
`         <name>Tomato</name>`
`         <origin>Mexico</origin>`
`         <origin>California</origin>`
`       </plant>`
`     </child>`
`   </parent>`
` </nesting>`
