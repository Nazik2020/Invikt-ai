const fs = require('fs');

const path = 'd:/DS_AI_ML Projects/Skilio ai/invikt ai -webapp/frontend/src/data/roadmaps/cyber-security/stages.js';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/resources:\s*\[.*?\]/g, (match, offset, string) => {
  // Find the skill name
  const precedingText = string.substring(0, offset);
  const nameMatch = precedingText.match(/name:\s*"([^"]+)"/g);
  let skillName = 'Cyber Security Concept';
  if (nameMatch && nameMatch.length > 0) {
    const lastMatch = nameMatch[nameMatch.length - 1];
    skillName = lastMatch.replace('name: "', '').replace('"', '');
  }

  const encodedName = encodeURIComponent(skillName);
  
  // Resource 1: YouTube Search
  const ytUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(skillName + ' cyber security tutorial')}`;
  
  // Resource 2: Article/Doc/Platform based on keyword
  let res2Type = 'Article';
  let res2Name = `${skillName} Explained`;
  let res2Url = `https://www.google.com/search?q=${encodeURIComponent('what is ' + skillName + ' cyber security')}`;
  
  const lower = skillName.toLowerCase();
  
  if (lower.includes('ctf') || lower.includes('hackthebox') || lower.includes('certifications')) {
    res2Type = 'Platform';
    res2Name = `Practice ${skillName}`;
    res2Url = `https://www.google.com/search?q=${encodeURIComponent(skillName + ' practice platform')}`;
  } else if (lower.includes('commands') || lower.includes('tools') || lower.includes('utilities') || lower.includes('nmap') || lower.includes('wireshark')) {
    res2Type = 'Docs';
    res2Name = `${skillName} Official Docs`;
    res2Url = `https://www.google.com/search?q=${encodeURIComponent(skillName + ' official documentation')}`;
  } else if (lower.includes('python') || lower.includes('go') || lower.includes('bash') || lower.includes('javascript')) {
    res2Type = 'Tutorial';
    res2Name = `${skillName} for Hackers`;
    res2Url = `https://www.google.com/search?q=${encodeURIComponent(skillName + ' for cyber security tutorial')}`;
  } else if (lower.includes('framework') || lower.includes('standards') || lower.includes('mitre') || lower.includes('nist')) {
    res2Type = 'Docs';
    res2Name = `${skillName} Framework`;
    res2Url = `https://www.google.com/search?q=${encodeURIComponent(skillName + ' cyber security framework official')}`;
  } else if (lower.includes('attack') || lower.includes('vulnerability') || lower.includes('injection') || lower.includes('phishing')) {
    res2Type = 'Article';
    res2Name = `Defeating ${skillName}`;
    res2Url = `https://owasp.org/search/?searchString=${encodedName}`;
  }

  return `resources: [
          { name: '${skillName} Video Guide', url: '${ytUrl}', type: 'YouTube' },
          { name: '${res2Name}', url: '${res2Url}', type: '${res2Type}' }
        ]`;
});

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully enriched Cyber Security resources!');
