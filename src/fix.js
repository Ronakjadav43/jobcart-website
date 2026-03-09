const fs = require('fs');
const content = fs.readFileSync('./src/data.json', 'utf8');

const matchStart = content.match(/"Descp":\s*"/);
if (!matchStart) {
    console.error('Could not find start of Descp');
    process.exit(1);
}

const startIdx = matchStart.index + matchStart[0].length;
let endIdxStr1 = '","imgCaption":';
let endIdxStr2 = '",\n            "imgCaption":';
let endIdxStr3 = '",\r\n            "imgCaption":';

let endIdx = content.indexOf(endIdxStr1);
if (endIdx === -1) endIdx = content.indexOf(endIdxStr2);
if (endIdx === -1) endIdx = content.indexOf(endIdxStr3);

if (endIdx !== -1) {
    const htmlContent = content.substring(startIdx, endIdx);
    const encodedHtml = JSON.stringify(htmlContent);
    const newContent = content.substring(0, matchStart.index) + '"Descp": ' + encodedHtml + content.substring(endIdx + 1);
    
    try {
        JSON.parse(newContent);
        fs.writeFileSync('./src/data.json', newContent, 'utf8');
        console.log('SUCCESS JSON FIXED');
    } catch(e) {
        console.error('FAILED TO PARSE FIXED JSON:', e.message);
    }
} else {
    console.error('COULD NOT FIND END INDEX');
    // Try a completely different regex
    const endMatch = content.match(/",\s*"imgCaption"/);
    if (endMatch) {
       let altEndIdx = endMatch.index;
       const htmlContent = content.substring(startIdx, altEndIdx);
       const encodedHtml = JSON.stringify(htmlContent);
       const newContent = content.substring(0, matchStart.index) + '"Descp": ' + encodedHtml + content.substring(altEndIdx + 1);
       try {
           JSON.parse(newContent);
           fs.writeFileSync('./src/data.json', newContent, 'utf8');
           console.log('SUCCESS JSON FIXED (with regex fallback)');
       } catch(e) {
           console.error('FAILED TO PARSE FIXED JSON (fallback):', e.message);
       }
    } else {
       console.log('Regex fallback also failed.');
    }
}
