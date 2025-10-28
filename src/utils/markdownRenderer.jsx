export const renderMarkdownLine = (line, index) => {
  // Headings
  if (line.startsWith('# ')) {
    return <h1 key={index} className="text-3xl font-bold text-gray-900 mb-4">{line.substring(2)}</h1>;
  }
  if (line.startsWith('### ')) {
    return <h3 key={index} className="text-xl text-gray-700 mb-3">{line.substring(4)}</h3>;
  }
  if (line.startsWith('## ')) {
    return <h2 key={index} className="text-2xl font-bold text-gray-900 mb-3 mt-6">{line.substring(3)}</h2>;
  }

  // GitHub Stats Images
  if (line.includes('![](')) {
    const match = line.match(/!\[\]\((.*?)\)/);
    if (match) {
      return <img key={index} src={match[1]} alt="preview" className="max-w-full my-2" />;
    }
  }

  // Social/Skill Icons
  if (line.startsWith('[<img') || line.includes('<img src=') || line.includes('<p align=')) {
    const imgMatches = line.matchAll(/(?:\[<img src='([^']+)'|<img [^>]*src='([^']+)'|<img [^>]*src="([^"]+)")/g);
    const imgs = [];
    let imgIndex = 0;
    for (const match of imgMatches) {
      const src = match[1] || match[2] || match[3];
      if (src) {
        imgs.push(<img key={`${index}-${imgIndex}-${src}`} src={src} alt="" className="w-10 h-10 inline-block mr-2" />);
        imgIndex++;
      }
    }
    if (imgs.length > 0) {
      return <div key={index} className="flex gap-3 flex-wrap my-3">{imgs}</div>;
    }
  }

  // Regular text with bold
  if (line.trim()) {
    const processedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    return <p key={index} className="text-gray-800 mb-2" dangerouslySetInnerHTML={{ __html: processedLine }} />;
  }

  return null;
};

export const renderPreview = (markdown) => {
  if (!markdown) return null;

  const lines = markdown.split('\n');
  const elements = lines.map((line, index) => renderMarkdownLine(line, index)).filter(Boolean);

  return <div className="space-y-2">{elements}</div>;
};
